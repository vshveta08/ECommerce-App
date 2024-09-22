import React, { Fragment } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { icons } from "lucide-react";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";

const adminSidebarMenuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/admin/dashboard",
    icon: <RxDashboard />,
  },
  {
    id: "products",
    label: "Products",
    path: "/admin/products",
    icon: <MdOutlineProductionQuantityLimits />,
  },
  {
    id: "orders",
    label: "Orders",
    path: "/admin/orders",
    icon: <RiCalendarScheduleLine />,
  },
];

const MenuItems = ({ setOpen }) => {
  const navigate = useNavigate();
  return (
    <nav className="mt-8 flex flex-col gap-1">
      {adminSidebarMenuItems.map((menuItem) => (
        <div
          key={menuItem.id}
          onClick={() => {
            navigate(menuItem.path);
            setOpen(false);
          }}
          className="flex items-center gap-2 text-lg font-medium rounded-sm px-2 py-3 cursor-pointer text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          {menuItem.icon}
          <span>{menuItem.label}</span>
        </div>
      ))}
    </nav>
  );
};

export default function AdminSidebar({ open, setOpen }) {
  const navigate = useNavigate();

  return (
    <Fragment>
      <Sheet open={open} onOpenChange={setOpen} className="lg:hidden sm:block">
        <SheetContent side="left" className="w-60">
          <div className="flex flex-col h-full ">
            <SheetHeader className="border-b">
              <SheetTitle className="flex items-center gap-1 mt-5 mb-4">
                {" "}
                <FaUser className="text-lg" />
                <h1 className="text-xl font-semibold">Admin Panel</h1>
              </SheetTitle>
            </SheetHeader>

            <MenuItems setOpen={setOpen} />
          </div>
        </SheetContent>
      </Sheet>
      <aside className="hidden w-60 flex-col border-r bg-background p-6 lg:flex">
        <div
          onClick={() => navigate("/admin/dashboard")}
          className="flex cursor-pointer items-center gap-2 "
        >
          <FaUser className="text-lg" />
          <h1 className="text-xl font-semibold">Admin Panel</h1>
        </div>

        <MenuItems />
      </aside>
    </Fragment>
  );
}
