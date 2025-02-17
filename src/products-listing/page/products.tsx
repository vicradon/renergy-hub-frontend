import { Routes, Route } from "react-router-dom";
import { Suspense } from "react"; // Import Suspense
import ProductListing from "./products-listing";
import ProductDetail from "./productDetails";
import Review from "./review";
import Detail from "./details";


const Products = () => {
  return (
    <Suspense> {/* Wrap with Suspense and use a fallback */}
      <Routes>
        <Route path="/" element={<ProductListing />} />
        {/* Detail route as a parent */}
        
        {/* /:id product dynamic pathname */}
        <Route path="detail/:id" element={<ProductDetail />}>
          {/* Nested Routes */}
          <Route index element={<Detail />} /> {/* Default route when visiting /detail */}
          <Route path="review" element={<Review />} /> {/* Nested route for /detail/review */}
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Products;
