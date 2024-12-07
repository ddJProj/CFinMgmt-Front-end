// src/constants/routes.constants.ts

export const ROUTES = {
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
  CLIENTS: '/clients',
  EMPLOYEES: '/employees',
  SETTINGS: '/settings',
  PROFILE: '/profile',
  AUDIT: '/audit',
  NOT_FOUND: '*'
} as const;

// export const PUBLIC_ROUTES = [
//   ROUTES.LOGIN,
//   ROUTES.NOT_FOUND
// ];
//
// export const BREADCRUMBS = {
//   [ROUTES.DASHBOARD]: { label: 'Dashboard' },
//   [ROUTES.CLIENTS]: { label: 'Clients', parent: ROUTES.DASHBOARD },
//   [ROUTES.EMPLOYEES]: { label: 'Employees', parent: ROUTES.DASHBOARD },
//   [ROUTES.SETTINGS]: { label: 'Settings', parent: ROUTES.DASHBOARD },
//   [ROUTES.PROFILE]: { label: 'Profile', parent: ROUTES.DASHBOARD },
//   [ROUTES.AUDIT]: { label: 'Audit Logs', parent: ROUTES.DASHBOARD }
// };
//
// // src/constants/routes.constants.ts
// const ROUTES = {
//   LOGIN: "/login",
//   DASHBOARD: "/dashboard",
// };

export default ROUTES;

