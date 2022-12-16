/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
// import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
// import Tables from "views/examples/Tables.js";
// import Icons from "views/examples/Icons.js";

// my Custom root path
import Prospects from "./pages/Prospects/Prospects.jsx";
import Leads from "./pages/Leads/Leads.jsx";
import Quotes from "./pages/Quotes/Quotes.jsx";
import Contracts from "./pages/Contracts/Contracts.jsx";
import Invoices from "pages/Invoices/Invoices.jsx";
import Orders from "./pages/Order/Order.jsx";
import Support from "./pages/Support/Support.jsx";
import Recovery from "./pages/Recovery/Recovery.jsx";

// my Custom root path

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/lead",
    name: "Lead",
    icon: "ni ni-circle-08 text-blue",
    component: Leads,
    layout: "/admin",
  },
  {
    path: "/prospect",
    name: "Prospect",
    icon: "fas fa-user-plus text-blue",
    component: Prospects,
    layout: "/admin",
  },
  {
    path: "/quote",
    name: "Quote",
    icon: "fas fa-share-square text-blue",
    component: Quotes,
    layout: "/admin",
  },
  {
    path: "/order",
    name: "Order",
    icon: "fas fa-shopping-cart text-blue",
    component: Orders,
    layout: "/admin",
  },
  {
    path: "/invoice",
    name: "Invoice",
    icon: "fas fa-file-invoice text-blue",
    component: Invoices,
    layout: "/admin",
  },
  {
    path: "/recover",
    name: "Recover",
    icon: "ni ni-credit-card text-blue",
    component: Recovery,
    layout: "/admin",
  },

  {
    path: "/contract",
    name: "Contract",
    icon: "fas fa-file-contract text-blue",
    component: Contracts,
    layout: "/admin",
  },
  {
    path: "/support",
    name: "Support",
    icon: "ni ni-headphones text-blue ",
    component: Support,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
  },
];
export default routes;
