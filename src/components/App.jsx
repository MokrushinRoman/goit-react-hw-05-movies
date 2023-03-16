import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'components';
import { Movies, Home, ErrorPage, ProductDetails } from 'pages';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />}>
          <Route path=":query" element={<div>This is what we found!</div>} />
        </Route>
        <Route path="movies/:movieId" element={<ProductDetails />}>
          <Route path="cast" element={<div></div>} />
          <Route path="reviews" element={<div></div>} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};
