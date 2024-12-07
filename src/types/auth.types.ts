// src/types/auth.types.ts

// Enum for user roles, matching backend's UserRole
export enum UserRole {
  Admin = "Admin",
  Employee = "Employee",
  Client = "Client",
  Guest = "Guest",
}

// Enum for permissions, matching backend's Permissions
export enum Permissions {
  CrudFunctionality = "CrudFunctionality",
  ConfigureBaseClientRole = "ConfigureBaseClientRole",
  NewEmployeeUser = "NewEmployeeUser",
  ModifyClientRoleValues = "ModifyClientRoleValues",
  ContactAdmin = "ContactAdmin",
  ViewMyAccountData = "ViewMyAccountData",
  ContactRepresentative = "ContactRepresentative",
  RequestClientRole = "RequestClientRole",
  CreateNewUserAccount = "CreateNewUserAccount",
}

// UserAccount structure
export interface UserAccount {
  id: number;
  username: string;
  role: UserRole; // Uses the UserRole enum
  permissions: Permissions[]; // Array of permissions using the Permissions enum
}

