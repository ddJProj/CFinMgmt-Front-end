
// src/components/pages/dashboard/EmployeeDashboard.tsx

import React from "react";
import { usePermissions } from "../../../hooks/usePermissions";

const EmployeeDashboard: React.FC = () => {
  return (
    <div>
      <h1>Employee Dashboard</h1>
      <p>View your tasks, schedules, and performance metrics.</p>
    </div>
  );
};

export default EmployeeDashboard;

