import { Routes, Route } from "react-router-dom";
import { URL_PATHS } from "../constants/routes";
import Products from "../components/Products";

const UnauthenticatedRoutes = () => {
  return (
    <Routes>
      <Route path={URL_PATHS.DASHBOARD} element={<h1>DASHBOARD</h1>} />
      <Route path={URL_PATHS.MARKETS} element={<h1>MARKETS</h1>} />
      <Route path={URL_PATHS.MACHINES} element={<h1>MACHINES</h1>} />
      <Route path={URL_PATHS.OPERATORS} element={<h1>OPERATORS</h1>} />
      <Route path={URL_PATHS.PRODUCTS} element={<Products />} />
      <Route path={URL_PATHS.TRANSACTIONS} element={<h1>TRANSACTIONS</h1>} />
      <Route path={URL_PATHS.EVENTS} element={<h1>EVENTS</h1>} />
      <Route path={URL_PATHS.CONTENT} element={<h1>CONTENT</h1>} />
      <Route path={URL_PATHS.JOBS} element={<h1>JOBS</h1>} />
      <Route path={URL_PATHS.BILLING} element={<h1>BILLING</h1>} />
      <Route path={URL_PATHS.REPORTS} element={<h1>REPORTS</h1>} />
      <Route path={URL_PATHS.ADMIN} element={<h1>ADMIN</h1>} />
    </Routes>
  );
};

export default UnauthenticatedRoutes;
