import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import CategoriesPreview from "../../components/categories-preview/categories-preview.component";
import Category from "../../components/category/category.component";
import { fetchCategoriesStart } from "../../store/categories/category.action";
import { categories } from "../../components/directory/directory.component";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, [dispatch]);

  // Create a component that checks if the category exists
  const CategoryRoute = () => {
    const location = useLocation();
    const pathSegments = location.pathname.split("/").filter(Boolean);

    const categoryIndex = pathSegments.indexOf("shop") + 1;
    const categoryName = pathSegments[categoryIndex];

    if (pathSegments.length > categoryIndex + 1) {
      return <Navigate to="/not-found" replace />;
    }

    const categoryExists = categories.some((cat) => cat.title === categoryName);

    return categoryExists ? <Category /> : <Navigate to="/not-found" replace />;
  };

  return (
    <>
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=":category" element={<CategoryRoute />} />
        {/* Catch any deeper nested routes and redirect to NotFound */}
        <Route
          path=":category/*"
          element={<Navigate to="/not-found" replace />}
        />
      </Routes>
    </>
  );
};

export default Shop;