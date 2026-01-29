import { useState, useCallback } from 'react';
import type { Book } from '../data/books';

interface MapPageProps {
  books: Book[];
  onSelectBook: (book: Book) => void;
  onBackToDoor: () => void;
}

interface HoverInfo {
  book: Book;
  x: number;
  y: number;
}

// 每个地标对应的建筑区域（基于新地图v3的粗略位置）
const landmarkAreas: Record<number, { x: number; y: number; width: number; height: number }> = {
  1: { x: 12, y: 12, width: 16, height: 22 }, // 庄园大宅 - 左上
  2: { x: 42, y: 10, width: 18, height: 20 }, // 东方快车 - 上中
  3: { x: 18, y: 42, width: 10, height: 16 }, // ABC邮筒 - 左中
  4: { x: 12, y: 68, width: 18, height: 20 }, // 尼罗河蒸汽船 - 左下
  5: { x: 72, y: 10, width: 18, height: 24 }, // 孤岛庄园 - 右上
  6: { x: 70, y: 40, width: 18, height: 18 }, // 海滨酒店 - 右中
  7: { x: 42, y: 70, width: 18, height: 20 }, // 乡村公告栏 - 下中
  8: { x: 72, y: 68, width: 18, height: 20 }, // 帷幕庄园 - 右下
};

export default function MapPage({ books, onSelectBook, onBackToDoor }: MapPageProps) {
  const [hoveredBookId, setHoveredBookId] = useState<number | null>(null);
  const [hoverInfo, setHoverInfo] = useState<HoverInfo | null>(null);

  // 处理地标悬停
  const handleLandmarkHover = useCallback((book: Book, e: React.MouseEvent) => {
    setHoveredBookId(book.id);
    const rect = e.currentTarget.getBoundingClientRect();
    setHoverInfo({
      book,
      x: rect.left + rect.width / 2,
      y: rect.bottom + 10 // 在元素下方显示，避免遮挡
    });
  }, []);

  // 处理地标离开
  const handleLandmarkLeave = useCallback(() => {
    setHoveredBookId(null);
    setHoverInfo(null);
  }, []);

  // 处理地标点击
  const handleLandmarkClick = (book: Book) => {
    onSelectBook(book);
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* 地图背景 */}
      <img 
        src="/assets/map/map_v3_1920x1080.png" 
        alt="藏宝图"
        className="w-full h-full object-cover"
      />

      {/* 建筑光晕效果层 */}
      {books.map((book) => {
        const area = landmarkAreas[book.id];
        if (!area) return null;
        
        return (
          <div
            key={`glow-${book.id}`}
            className="absolute pointer-events-none transition-all duration-500"
            style={{
              left: `${area.x}%`,
              top: `${area.y}%`,
              width: `${area.width}%`,
              height: `${area.height}%`,
              opacity: hoveredBookId === book.id ? 1 : 0,
              background: `radial-gradient(ellipse at center, rgba(212, 175, 55, 0.5) 0%, rgba(212, 175, 55, 0.25) 40%, transparent 70%)`,
              filter: 'blur(10px)',
              transform: hoveredBookId === book.id ? 'scale(1.15)' : 'scale(1)',
              transition: 'opacity 0.4s ease, transform 0.4s ease',
            }}
          />
        );
      })}

      {/* 地标热区 - 覆盖整个建筑区域 */}
      {books.map((book) => {
        const area = landmarkAreas[book.id];
        if (!area) return null;
        
        return (
          <div
            key={book.id}
            className="absolute cursor-pointer"
            style={{
              left: `${area.x}%`,
              top: `${area.y}%`,
              width: `${area.width}%`,
              height: `${area.height}%`,
            }}
            onMouseEnter={(e) => handleLandmarkHover(book, e)}
            onMouseLeave={handleLandmarkLeave}
            onClick={() => handleLandmarkClick(book)}
          />
        );
      })}

      {/* 悬停信息卡 - 在元素下方显示 */}
      {hoverInfo && (
        <div 
          className="fixed z-50 pointer-events-none"
          style={{
            left: hoverInfo.x,
            top: hoverInfo.y,
            transform: 'translateX(-50%)',
          }}
        >
          <div className="bg-[#1a1510]/95 border border-[#d4af37]/50 rounded-lg p-4 shadow-2xl backdrop-blur-sm min-w-[240px]">
            <h3 className="text-[#d4af37] font-serif text-lg mb-1">
              {hoverInfo.book.title}
            </h3>
            <p className="text-[#8b7355] text-xs mb-2">
              {hoverInfo.book.englishTitle} ({hoverInfo.book.year})
            </p>
            <p className="text-[#e8dcc8]/80 text-sm line-clamp-2">
              {hoverInfo.book.description}
            </p>
            <div className="mt-2 text-[#d4af37]/60 text-xs">
              点击查看详情
            </div>
          </div>
        </div>
      )}

      {/* 返回大门按钮 */}
      <button
        onClick={onBackToDoor}
        className="absolute top-6 left-6 px-4 py-2 bg-[#1a1510]/80 border border-[#d4af37]/50 text-[#d4af37] font-serif rounded hover:bg-[#d4af37]/20 transition-all duration-300 flex items-center gap-2 z-10"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        返回大门
      </button>

      {/* 标题 - 木板背景 */}
      <div className="absolute top-6 right-6 z-10">
        <div 
          className="px-6 py-3 rounded"
          style={{
            background: 'linear-gradient(180deg, #3d2817 0%, #2a1b0f 50%, #3d2817 100%)',
            boxShadow: '0 4px 15px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)',
            border: '2px solid #5c3d1f',
          }}
        >
          <h1 
            className="font-serif text-2xl tracking-wider"
            style={{
              color: '#d4af37',
              textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(212,175,55,0.3)',
              fontWeight: 600,
            }}
          >
            阿加莎·克里斯蒂
          </h1>
          <p 
            className="text-sm text-center mt-1"
            style={{
              color: '#c9a857',
              textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
              letterSpacing: '0.15em',
            }}
          >
            推理小说记忆站
          </p>
        </div>
      </div>

      {/* 底部提示 */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center z-10">
        <p className="text-[#5c4a32] text-sm font-medium">
          悬停建筑查看信息，点击探索详情
        </p>
      </div>
    </div>
  );
}
