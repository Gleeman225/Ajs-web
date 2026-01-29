import { useState, useEffect, useCallback } from 'react';
import RiddleModal from '../components/RiddleModal';

interface DoorPageProps {
  onEnter: () => void;
}

export default function DoorPage({ onEnter }: DoorPageProps) {
  const [showRiddle, setShowRiddle] = useState(false);
  const [showGlow, setShowGlow] = useState(false);
  const [glowOpacity, setGlowOpacity] = useState(0.3);

  // 光晕呼吸效果
  useEffect(() => {
    const interval = setInterval(() => {
      setGlowOpacity(prev => {
        if (prev >= 0.7) return 0.3;
        return prev + 0.05;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // 检查是否是触摸设备
  const isTouchDevice = useCallback(() => {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }, []);

  // 处理门把手点击
  const handleKnobClick = () => {
    setShowRiddle(true);
  };

  // 处理谜语回答正确
  const handleRiddleCorrect = () => {
    setShowRiddle(false);
    onEnter();
  };

  // 处理鼠标移动（仅在非触摸设备）
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isTouchDevice()) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    // 门把手区域大约在 (50%, 55%)
    const distance = Math.sqrt(Math.pow(x - 50, 2) + Math.pow(y - 55, 2));
    setShowGlow(distance < 8);
  };

  return (
    <div 
      className="relative w-full h-full cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setShowGlow(false)}
    >
      {/* 大门背景图 */}
      <img 
        src="/assets/door/door_main_1x_1920x1080.png" 
        alt="英伦大门"
        className="w-full h-full object-cover"
      />

      {/* 门把手热区 */}
      <div 
        className="absolute cursor-pointer"
        style={{
          left: '50%',
          top: '55%',
          width: '10%',
          height: '12%',
          transform: 'translate(-50%, -50%)',
        }}
        onClick={handleKnobClick}
      >
        {/* 光晕效果 */}
        <div 
          className="absolute inset-0 rounded-full transition-all duration-300 flex items-center justify-center"
          style={{
            background: `radial-gradient(circle, rgba(212, 175, 55, ${glowOpacity}) 0%, rgba(212, 175, 55, 0) 70%)`,
            boxShadow: showGlow ? `0 0 40px 15px rgba(212, 175, 55, ${glowOpacity})` : 'none',
            opacity: showGlow ? 1 : 0.4,
            transform: showGlow ? 'scale(1.2)' : 'scale(1)',
          }}
        />
      </div>

      {/* 提示文字 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
        <p className="text-[#d4af37]/60 text-sm font-serif tracking-widest animate-pulse">
          点击门把手，开启推理之旅
        </p>
      </div>

      {/* 谜语弹层 */}
      <RiddleModal 
        isOpen={showRiddle}
        onCorrect={handleRiddleCorrect}
      />
    </div>
  );
}
