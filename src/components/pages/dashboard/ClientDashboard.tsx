
// src/components/pages/dashboard/ClientDashboard.tsx

import React from "react";
import { usePermissions } from "../../../hooks/usePermissions";

const ClientDashboard: React.FC = () => {
  return (
    <div>
      <h1>Client Dashboard</h1>
      <p>View your services, invoices, and account details.</p>
    </div>
  );
};

export default ClientDashboard;
