import { useState, useEffect, useCallback } from 'react';

interface GalleryImage {
  src: string;
  alt: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function ImageGallery({ images, initialIndex, isOpen, onClose }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isLoading, setIsLoading] = useState(true);

  // 重置索引
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      setIsLoading(true);
    }
  }, [isOpen, initialIndex]);

  // 键盘导航
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen) return;
    
    switch (e.key) {
      case 'Escape':
        onClose();
        break;
      case 'ArrowLeft':
        setCurrentIndex(prev => (prev > 0 ? prev - 1 : images.length - 1));
        setIsLoading(true);
        break;
      case 'ArrowRight':
        setCurrentIndex(prev => (prev < images.length - 1 ? prev + 1 : 0));
        setIsLoading(true);
        break;
    }
  }, [isOpen, images.length, onClose]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // 处理图片加载
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  // 切换到上一张
  const goToPrev = () => {
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : images.length - 1));
    setIsLoading(true);
  };

  // 切换到下一张
  const goToNext = () => {
    setCurrentIndex(prev => (prev < images.length - 1 ? prev + 1 : 0));
    setIsLoading(true);
  };

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* 背景遮罩 */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* 关闭按钮 */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 w-12 h-12 flex items-center justify-center bg-[#1a1510]/80 border border-[#d4af37]/50 text-[#d4af37] rounded-full hover:bg-[#d4af37]/20 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* 上一张按钮 */}
      <button
        onClick={goToPrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-[#1a1510]/80 border border-[#d4af37]/50 text-[#d4af37] rounded-full hover:bg-[#d4af37]/20 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* 下一张按钮 */}
      <button
        onClick={goToNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-[#1a1510]/80 border border-[#d4af37]/50 text-[#d4af37] rounded-full hover:bg-[#d4af37]/20 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* 图片容器 */}
      <div className="relative z-10 max-w-[90vw] max-h-[80vh]">
        {/* 加载指示器 */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-[#d4af37]/30 border-t-[#d4af37] rounded-full animate-spin" />
          </div>
        )}
        
        {/* 图片 */}
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          onLoad={handleImageLoad}
          className={`max-w-full max-h-[80vh] object-contain rounded-lg border border-[#d4af37]/30 transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
        />

        {/* 图片信息 */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <p className="text-[#d4af37] text-center font-serif">
            {currentImage.alt}
          </p>
          <p className="text-[#8b7355] text-center text-sm mt-1">
            {currentIndex + 1} / {images.length}
          </p>
        </div>
      </div>

      {/* 缩略图导航 */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setIsLoading(true);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-[#d4af37] w-6' 
                : 'bg-[#d4af37]/30 hover:bg-[#d4af37]/50'
            }`}
          />
        ))}
      </div>

      {/* 键盘提示 */}
      <div className="absolute bottom-6 right-6 z-10 text-[#8b7355]/50 text-xs">
        ← → 切换 | ESC 关闭
      </div>
    </div>
  );
}
