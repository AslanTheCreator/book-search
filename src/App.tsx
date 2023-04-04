import { Header } from './components';
import { Home } from './pages/Home';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Book } from './pages/Book';
import { useAppSelector, useAppDispatch } from './redux/hooks';
import { fetchBooks } from './redux/books/asyncActions';

function App() {
  const [startIndex, setPag] = useState<number>(0);

  const sort = useAppSelector((state) => state.filter.sort);
  const categories = useAppSelector((state) => state.filter.categories);
  const search = useAppSelector((state) => state.filter.search);

  const dispatch = useAppDispatch();

  const getBooks = async () => {
    dispatch(
      fetchBooks({
        search,
        categories,
        sort,
        startIndex,
      }),
    );
  };

  return (
    <div className="wrapper">
      <Header getBooks={getBooks} />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home setPag={setPag} />} />
          <Route path="/book/:id" element={<Book />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
