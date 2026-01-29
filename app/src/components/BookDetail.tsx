import { useState, useEffect } from 'react';
import type { Book } from '../data/books';
import ImageGallery from './ImageGallery';

interface BookDetailProps {
  book: Book | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function BookDetail({ book, isOpen, onClose }: BookDetailProps) {
  const [activeTab, setActiveTab] = useState<'summary' | 'characters' | 'scenes'>('summary');
  const [showGallery, setShowGallery] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  // 重置状态
  useEffect(() => {
    if (isOpen) {
      setActiveTab('summary');
      setShowGallery(false);
    }
  }, [isOpen, book]);

  // 处理图片点击
  const handleImageClick = (index: number) => {
    setGalleryIndex(index);
    setShowGallery(true);
  };

  // 获取图片列表
  const getImages = () => {
    if (!book) return [];
    return [
      { src: book.images.scene, alt: '场景' },
      { src: book.images.character, alt: '人物' },
      { src: book.images.symbol, alt: '意象' },
    ];
  };

  if (!book) return null;

  return (
    <>
      {/* 抽屉主体 */}
      <div 
        className={`fixed top-0 right-0 h-full w-full md:w-[600px] bg-[#1a1510] border-l border-[#d4af37]/30 shadow-2xl z-40 transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* 装饰边框 */}
        <div className="absolute inset-4 border border-[#d4af37]/20 pointer-events-none" />
        
        {/* 关闭按钮 */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center bg-[#2a2018] border border-[#d4af37]/50 text-[#d4af37] rounded-full hover:bg-[#d4af37]/20 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* 滚动内容区 */}
        <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-[#d4af37]/30 scrollbar-track-transparent">
          <div className="p-8 pt-16">
            {/* 头部信息 */}
            <div className="mb-8">
              <h2 className="text-3xl font-serif text-[#d4af37] mb-2">
                {book.title}
              </h2>
              <p className="text-[#8b7355] text-sm mb-1">
                {book.englishTitle}
              </p>
              <p className="text-[#8b7355]/60 text-xs">
                出版年份：{book.year}
              </p>
            </div>

            {/* 一句话简介 */}
            <div className="mb-8 p-4 bg-[#2a2018] border-l-4 border-[#d4af37]/50">
              <p className="text-[#e8dcc8] italic font-serif leading-relaxed">
                "{book.summary.oneLine}"
              </p>
            </div>

            {/* 插图画廊 */}
            <div className="mb-8">
              <h3 className="text-[#d4af37] font-serif text-lg mb-4">插图</h3>
              <div className="grid grid-cols-3 gap-3">
                <div 
                  className="aspect-video cursor-pointer overflow-hidden rounded border border-[#d4af37]/30 hover:border-[#d4af37] transition-colors"
                  onClick={() => handleImageClick(0)}
                >
                  <img 
                    src={book.images.scene} 
                    alt="场景" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div 
                  className="aspect-video cursor-pointer overflow-hidden rounded border border-[#d4af37]/30 hover:border-[#d4af37] transition-colors"
                  onClick={() => handleImageClick(1)}
                >
                  <img 
                    src={book.images.character} 
                    alt="人物" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div 
                  className="aspect-video cursor-pointer overflow-hidden rounded border border-[#d4af37]/30 hover:border-[#d4af37] transition-colors"
                  onClick={() => handleImageClick(2)}
                >
                  <img 
                    src={book.images.symbol} 
                    alt="意象" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* 标签页导航 */}
            <div className="flex border-b border-[#d4af37]/30 mb-6">
              {[
                { key: 'summary', label: '梗概' },
                { key: 'characters', label: '人物' },
                { key: 'scenes', label: '桥段' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as typeof activeTab)}
                  className={`flex-1 py-3 font-serif text-sm transition-colors relative ${
                    activeTab === tab.key 
                      ? 'text-[#d4af37]' 
                      : 'text-[#8b7355] hover:text-[#d4af37]/70'
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.key && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#d4af37]" />
                  )}
                </button>
              ))}
            </div>

            {/* 标签页内容 */}
            <div className="min-h-[300px]">
              {/* 梗概 */}
              {activeTab === 'summary' && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-[#d4af37] font-serif text-sm mb-2">开端</h4>
                    <p className="text-[#e8dcc8]/80 text-sm leading-relaxed">
                      {book.summary.beginning}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[#d4af37] font-serif text-sm mb-2">发展</h4>
                    <p className="text-[#e8dcc8]/80 text-sm leading-relaxed">
                      {book.summary.development}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[#d4af37] font-serif text-sm mb-2 flex items-center gap-2">
                      <span className="text-red-400">⚠️ 剧透警告</span>
                      <span>真相</span>
                    </h4>
                    <p className="text-[#e8dcc8]/80 text-sm leading-relaxed bg-red-900/10 border border-red-500/30 p-4 rounded">
                      {book.summary.truth}
                    </p>
                  </div>
                </div>
              )}

              {/* 人物 */}
              {activeTab === 'characters' && (
                <div className="space-y-4">
                  {book.characters.map((character, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-3 p-3 bg-[#2a2018] rounded border border-[#d4af37]/10"
                    >
                      <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center bg-[#d4af37]/20 rounded-full text-[#d4af37] text-xs">
                        {index + 1}
                      </div>
                      <p className="text-[#e8dcc8]/80 text-sm leading-relaxed">
                        {character}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* 桥段 */}
              {activeTab === 'scenes' && (
                <div className="space-y-4">
                  {book.scenes.map((scene, index) => (
                    <div 
                      key={index}
                      className="p-4 bg-[#2a2018] rounded border-l-4 border-[#d4af37]/50"
                    >
                      <h4 className="text-[#d4af37] font-serif text-sm mb-2">
                        场景 {index + 1}
                      </h4>
                      <p className="text-[#e8dcc8]/80 text-sm leading-relaxed">
                        {scene}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 底部装饰 */}
            <div className="mt-12 pt-8 border-t border-[#d4af37]/20 text-center">
              <p className="text-[#8b7355]/40 text-xs">
                阿加莎·克里斯蒂 · {book.year}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 背景遮罩 - 让地图隐约可见 */}
      <div 
        className={`fixed inset-0 z-30 transition-opacity duration-500 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        style={{ 
          background: 'rgba(0, 0, 0, 0.08)',
        }}
        onClick={onClose}
      />

      {/* 图片画廊 */}
      <ImageGallery 
        images={getImages()}
        initialIndex={galleryIndex}
        isOpen={showGallery}
        onClose={() => setShowGallery(false)}
      />
    </>
  );
}
