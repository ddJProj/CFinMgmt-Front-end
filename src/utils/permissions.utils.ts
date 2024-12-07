// src/utils/permissions.utils.ts
import { UserRole, Permissions } from "../types/auth.types";

export const ROLE_PERMISSIONS: Record<UserRole, { permissions: Permissions[] }> = {
  [UserRole.Admin]: {
    permissions: [
      Permissions.CrudFunctionality,
      Permissions.ConfigureBaseClientRole,
      Permissions.NewEmployeeUser,
      Permissions.ModifyClientRoleValues,
      Permissions.CreateNewUserAccount,
    ],
  },
  [UserRole.Employee]: {
    permissions: [
      Permissions.CrudFunctionality,
      Permissions.ViewMyAccountData,
      Permissions.ContactAdmin,
    ],
  },
  [UserRole.Client]: {
    permissions: [
      Permissions.ViewMyAccountData,
      Permissions.ContactRepresentative,
    ],
  },
  [UserRole.Guest]: {
    permissions: [Permissions.RequestClientRole],
  },
};

