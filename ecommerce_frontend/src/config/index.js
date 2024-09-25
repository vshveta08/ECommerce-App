export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "your name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    name: "title",
    label: "Title",
    placeholder: "product title",
    componentType: "input",
    type: "text",
  },
  {
    name: "description",
    label: "Description",
    placeholder: "product description",
    componentType: "textarea",
  },
  {
    name: "category",
    label: "Category",
    componentType: "select",
    options: [
      { id: "men", label: "Men" },
      { id: "women", label: "Women" },
      { id: "kids", label: "Kids" },
      { id: "footwear", label: "Footwear" },
      { id: "accessories", label: "Accessories" },
    ],
  },
  {
    name: "brand",
    label: "Brand",
    componentType: "select",
    options: [
      { id: "adidas", label: "Adidas" },
      { id: "nike", label: "Nike" },
      { id: "puma", label: "Puma" },
      { id: "levi", label: "Levi's" },
      { id: "zara", label: "Zara" },
    ],
  },
  {
    name: "price",
    label: "Price",
    placeholder: "product price",
    componentType: "input",
    type: "number"
  },
  {
    name: "salePrice",
    label: "Sale Price",
    placeholder: "sale price (optional)",
    componentType: "input",
    type: "number"
  },
  {
    name: "totalStock",
    label: "Total Stock",
    placeholder: "total stock",
    componentType: "input",
    type: "number"
  },
];
