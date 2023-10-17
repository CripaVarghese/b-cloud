import { Router, Routes } from "react-router-dom";
import { URL_PATHS } from "../constants/routes";
import Dashboard from "../components/navbar_components/Dashboard";
import Markets from "../components/navbar_components/Markets";
import Machines from "../components/navbar_components/Machines";
import Operators from "../components/navbar_components/Operators";
import Products from "../components/navbar_components/Products";
import Transactions from "../components/navbar_components/Transactions";
import Events from "../components/navbar_components/Events";
import Content from "../components/navbar_components/Content";
import Jobs from "../components/navbar_components/Jobs";
import Billing from "../components/navbar_components/Billing";
import Reports from "../components/navbar_components/Reports";
import Admin from "../components/navbar_components/Admin";

const UnauthenticatedRoutes = () => {
  return (
    <Router>
      <Routes path={URL_PATHS.DASHBOARD} element={<Dashboard />} />
      <Routes path={URL_PATHS.MARKETS} element={<Markets />} />
      <Routes path={URL_PATHS.MACHINES} element={<Machines />} />
      <Routes path={URL_PATHS.OPERATORS} element={<Operators />} />
      <Routes path={URL_PATHS.PRODUCTS} element={<Products />} />
      <Routes path={URL_PATHS.TRANSACTIONS} element={<Transactions />} />
      <Routes path={URL_PATHS.EVENTS} element={<Events />} />
      <Routes path={URL_PATHS.CONTENT} element={<Content />} />
      <Routes path={URL_PATHS.JOBS} element={<Jobs />} />
      <Routes path={URL_PATHS.BILLING} element={<Billing />} />
      <Routes path={URL_PATHS.REPORTS} element={<Reports />} />
      <Routes path={URL_PATHS.ADMIN} element={<Admin />} />
    </Router>
  );
};

export default UnauthenticatedRoutes;
