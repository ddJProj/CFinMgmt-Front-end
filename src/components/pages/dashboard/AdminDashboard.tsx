// src/components/pages/dashboard/AdminDashboard.tsx

import React from "react";
import { usePermissions } from "../../../hooks/usePermissions";

const AdminDashboard: React.FC = () => {
  const { canRender, hasRole, isLoading, error } = usePermissions();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Admin Dashboard</h1>

      {hasRole("Admin") && <p>Welcome, Admin!</p>}

      {canRender(["ModifyClientRoleValues"], (
        <button>Modify Client Role</button>
      ))}

      {canRender(["CreateNewUserAccount"], (
        <button>Create New User</button>
      ))}
    </div>
  );
};

export default AdminDashboard;

