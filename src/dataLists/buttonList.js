import Dashboard from "../assets/Dashboard";
import Markets from "../assets/Markets";
import Transactions from "../assets/Transactions";
import Billing from "../assets/Billing";
import ProductFeature from "../assets/ProductFeature";

const buttonList = [
  {
    svg: Dashboard,
    title: "Dashboard",
    href: "product-dashboard",
  },
  {
    svg: Markets,
    title: "General Information",
    href: "general-info",
  },
  {
    svg: Transactions,
    title: "Transactions",
    href: "transactions",
  },
  {
    svg: Billing,
    title: "Pricing",
    href: "pricing",
  },
  {
    svg: ProductFeature,
    title: "Product Features",
    href: "feature",
  },
];

export default buttonList;
