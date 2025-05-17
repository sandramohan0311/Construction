import AppBar from "@/components/admin/AppBar";
import {  SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";

function AdminLayout():  React.ReactElement {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <SidebarProvider open={open} onOpenChange={setOpen}>
      <div className="w-full h-screen flex">
        <AppBar />
        
        <main className="w-full h-full overflow-y-auto">
          <SidebarTrigger />
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
}

export default AdminLayout;
