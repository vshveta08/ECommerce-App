import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./sidebar";
import AdminHeader from "./header";

export default function AdminLayout() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex min-h-screen w-full">
      <AdminSidebar open={open} setOpen={setOpen} />
      <div className="flex flex-1 flex-col">
        <AdminHeader setOpen={setOpen}/>
        <main className="flex-1 flex bg-muted p-4 md:p-6">
          <Outlet />
        </main>
      </div> 
    </div>
  );
}
