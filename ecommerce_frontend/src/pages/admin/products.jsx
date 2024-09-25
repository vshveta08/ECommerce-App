import ProducrImageUpload from "@/components/admin/imageUpload";
import CommonForm from "@/components/common/form";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { addProductFormElements } from "@/config";
import React, { Fragment, useState } from "react";

export default function AdminProducts() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    image: null,
    title: "",
    description: "",
    category: "",
    brand: "",
    price: "",
    salePrice: "",
    totalStock: "",
  });
  const [image, setImage] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");

  const onSubmit = () => {};

  return (
    <Fragment>
      <div className="mb-5 flex justify-end w-full">
        <Button onClick={() => setOpen(true)}>Add New Product</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4"></div>

      <Sheet open={open} onOpenChange={() => setOpen(false)}>
        <SheetContent side="right" className="overflow-auto">
          <SheetHeader>
            <SheetTitle>Add New Product</SheetTitle>
          </SheetHeader>

          <ProducrImageUpload
            image={image}
            setImage={setImage}
            uploadedImageUrl={uploadedImageUrl}
            setUploadedImageUrl={setUploadedImageUrl}
          />

          <div className="py-6">
            <CommonForm
              formData={formData}
              setFormData={setFormData}
              buttonText="Add Product"
              onSubmit={onSubmit}
              formControls={addProductFormElements}
            />
          </div>
        </SheetContent>
      </Sheet>
    </Fragment>
  );
}
