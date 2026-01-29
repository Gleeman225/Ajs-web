import { useState } from 'react';
import DoorPage from './pages/DoorPage';
import MapPage from './pages/MapPage';
import BookDetail from './components/BookDetail';
import { books, type Book } from './data/books';

export type PageState = 'door' | 'map' | 'detail';

function App() {
  const [currentPage, setCurrentPage] = useState<PageState>('door');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isDoorOpen, setIsDoorOpen] = useState(false);

  // 处理进入地图页
  const handleEnterMap = () => {
    setIsDoorOpen(true);
    setTimeout(() => {
      setCurrentPage('map');
    }, 1500);
  };

  // 处理选择书籍
  const handleSelectBook = (book: Book) => {
    setSelectedBook(book);
    setCurrentPage('detail');
  };

  // 处理返回地图
  const handleBackToMap = () => {
    setSelectedBook(null);
    setCurrentPage('map');
  };

  // 处理返回大门
  const handleBackToDoor = () => {
    setCurrentPage('door');
    setIsDoorOpen(false);
  };

  return (
    <div className="w-screen h-screen overflow-hidden bg-[#1a1510]">
      {/* 大门页 */}
      <div 
        className={`absolute inset-0 transition-all duration-[1500ms] ease-in-out ${
          currentPage === 'door' 
            ? 'opacity-100 scale-100' 
            : isDoorOpen 
              ? 'opacity-0 scale-110 pointer-events-none' 
              : 'opacity-0 pointer-events-none'
        }`}
      >
        <DoorPage onEnter={handleEnterMap} />
      </div>

      {/* 地图页 - 在详情页打开时保持可见 */}
      <div 
        className={`absolute inset-0 transition-all duration-1000 ${
          currentPage === 'map' || currentPage === 'detail'
            ? 'opacity-100 scale-100' 
            : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <MapPage 
          books={books} 
          onSelectBook={handleSelectBook}
          onBackToDoor={handleBackToDoor}
        />
      </div>

      {/* 书籍详情抽屉 */}
      <BookDetail 
        book={selectedBook}
        isOpen={currentPage === 'detail'}
        onClose={handleBackToMap}
      />
    </div>
  );
}

export default App;
