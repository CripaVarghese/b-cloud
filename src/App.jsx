import { Routes, Route, Navigate } from "react-router-dom";
import { URL_PATHS } from "./constants/routes";
import Products from "./components/Products";
import AppLayout from "./components/AppLayout";
import ProductDashboard from "./components/ProductDashboard";

const defaultPath = `${URL_PATHS.PRODUCTS}/${URL_PATHS.PRODUCT_DASHBOARD}`;

const App = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path={"/"} element={<Navigate to={defaultPath} replace />} />
        <Route path={URL_PATHS.DASHBOARD} element={<h1>DASHBOARD</h1>} />
        <Route path={URL_PATHS.MARKETS} element={<h1>MARKETS</h1>} />
        <Route path={URL_PATHS.MACHINES} element={<h1>MACHINES</h1>} />
        <Route path={URL_PATHS.OPERATORS} element={<h1>OPERATORS</h1>} />

        <Route path={URL_PATHS.PRODUCTS} element={<Products />}>
          <Route
            path={URL_PATHS.PRODUCT_DASHBOARD}
            element={<ProductDashboard />}
          />
          <Route
            path={URL_PATHS.GENERAL_INFO}
            element={<h1>General Information</h1>}
          />
          <Route
            path={URL_PATHS.TRANSACTIONS}
            element={<h1>TRANSACTIONS</h1>}
          />

          <Route path={URL_PATHS.PRICING} element={<h1>Pricing</h1>} />
          <Route path={URL_PATHS.FEATURE} element={<h1>Feature</h1>} />
        </Route>

        <Route path={URL_PATHS.TRANSACTIONS} element={<h1>TRANSACTIONS</h1>} />
        <Route path={URL_PATHS.EVENTS} element={<h1>EVENTS</h1>} />
        <Route path={URL_PATHS.CONTENT} element={<h1>CONTENT</h1>} />
        <Route path={URL_PATHS.JOBS} element={<h1>JOBS</h1>} />
        <Route path={URL_PATHS.BILLING} element={<h1>BILLING</h1>} />
        <Route path={URL_PATHS.REPORTS} element={<h1>REPORTS</h1>} />
        <Route path={URL_PATHS.ADMIN} element={<h1>ADMIN</h1>} />
      </Route>
    </Routes>
  );
};

export default App;
