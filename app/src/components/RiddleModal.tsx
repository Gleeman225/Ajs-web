import { useState, useEffect, useRef } from 'react';

interface RiddleModalProps {
  isOpen: boolean;
  onCorrect: () => void;
}

// 模糊匹配函数
const fuzzyMatch = (input: string, targets: string[]): boolean => {
  const normalized = input.toLowerCase().trim();
  return targets.some(target => {
    const normalizedTarget = target.toLowerCase().trim();
    // 完全匹配
    if (normalized === normalizedTarget) return true;
    // 包含匹配
    if (normalized.includes(normalizedTarget) || normalizedTarget.includes(normalized)) return true;
    // 拼音匹配（简单处理）
    return false;
  });
};

// 正确答案列表
const correctAnswers = ['波洛', '波罗', 'poirot', 'hercule poirot', '赫尔克里·波洛', '赫尔克里·波罗'];

export default function RiddleModal({ isOpen, onCorrect }: RiddleModalProps) {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [showPineapple, setShowPineapple] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // 自动聚焦输入框
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // 重置状态
  useEffect(() => {
    if (!isOpen) {
      setInput('');
      setError(false);
      setShowPineapple(false);
    }
  }, [isOpen]);

  // 检查输入
  const checkAnswer = () => {
    if (fuzzyMatch(input, correctAnswers)) {
      setShowPineapple(true);
      setTimeout(() => {
        onCorrect();
      }, 1500);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  // 处理回车键
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      checkAnswer();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* 背景遮罩 */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* 弹层内容 */}
      <div className="relative z-10 w-full max-w-md mx-4 p-8 rounded-lg border-2 border-[#d4af37]/50 bg-[#1a1510]/95 shadow-2xl">
        {/* 装饰边框 */}
        <div className="absolute inset-2 border border-[#d4af37]/30 rounded pointer-events-none" />
        
        {/* 谜语内容 */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-serif text-[#d4af37] mb-6 tracking-wider">
            谜语
          </h2>
          <p className="text-[#e8dcc8] text-lg leading-relaxed font-serif italic">
            "小小个子， egg-shaped 脑袋，<br />
            灰色脑细胞，推理无对手。<br />
            他是谁？"
          </p>
        </div>

        {/* 输入框 */}
        <div className="relative mb-6">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="请输入答案..."
            className={`w-full px-4 py-3 bg-[#2a2018] border-2 rounded text-[#e8dcc8] placeholder-[#8b7355]/50 font-serif text-center transition-all duration-300 ${
              error 
                ? 'border-red-500 animate-shake' 
                : 'border-[#d4af37]/30 focus:border-[#d4af37] focus:outline-none'
            }`}
          />
          {error && (
            <p className="absolute -bottom-6 left-0 right-0 text-red-400 text-sm text-center">
              答案不正确，请再试一次
            </p>
          )}
        </div>

        {/* 确认按钮 */}
        <button
          onClick={checkAnswer}
          className="w-full py-3 bg-[#d4af37]/20 border border-[#d4af37]/50 text-[#d4af37] font-serif rounded hover:bg-[#d4af37]/30 transition-colors duration-300"
        >
          确认
        </button>

        {/* 菠萝闪烁效果 */}
        {showPineapple && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#1a1510]/90 rounded-lg animate-fade-in">
            <div className="text-center">
              <div className="text-6xl mb-4 animate-bounce">
                🍍
              </div>
              <p className="text-[#d4af37] text-xl font-serif animate-pulse">
                欢迎回来，波洛先生！
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
