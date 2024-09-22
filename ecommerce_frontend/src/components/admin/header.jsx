import React from "react";
import { AlignJustify } from "lucide-react";
import { Button } from "../ui/button";

export default function AdminHeader({ setOpen }) {
  return (
    <header className="flex items-center justify-between px-4 py-3">
      <Button onClick={() => setOpen(true)} className="lg:hidden sm:block">
        <AlignJustify />
      </Button>
      <div className="flex flex-1 justify-end">
        <Button className="">Logout</Button>
      </div>
    </header>
  );
}
