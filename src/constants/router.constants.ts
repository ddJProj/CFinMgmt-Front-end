// src/constants/router.constants.ts
import Login from "../components/login/Login";
import Dashboard from "../components/pages/dashboard/Dashboard";
import AdminDashboard from "../components/pages/dashboard/AdminDashboard";
import EmployeeDashboard from "../components/pages/dashboard/EmployeeDashboard";
import ClientDashboard from "../components/pages/dashboard/ClientDashboard";

const ROUTES = {
  LOGIN: "/login",
  DASHBOARD: "/dashboard",
  ADMIN: "/dashboard/admin",
  EMPLOYEE: "/dashboard/employee",
  CLIENT: "/dashboard/client",
};

const ROUTER_CONFIG = [
  { path: ROUTES.LOGIN, element: Login, isProtected: false },
  { path: ROUTES.DASHBOARD, element: Dashboard, isProtected: true },
  { path: ROUTES.ADMIN, element: AdminDashboard, isProtected: true, permissions: ["Admin"] },
  { path: ROUTES.EMPLOYEE, element: EmployeeDashboard, isProtected: true, permissions: ["Employee"] },
  { path: ROUTES.CLIENT, element: ClientDashboard, isProtected: true, permissions: ["Client"] },
];

export { ROUTES, ROUTER_CONFIG };

