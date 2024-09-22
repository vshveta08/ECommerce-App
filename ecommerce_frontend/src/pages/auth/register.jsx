import CommonForm from "@/components/common/form";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerFormControls } from "@/config";
import { registerUser } from "@/store/auth-slice";
import { useDispatch } from "react-redux";
import { useToast } from "@/hooks/use-toast";

export default function Register() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });
  console.log("formData: ", formData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {toast} = useToast();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData)).then((data) => {
      console.log("data.paylaod: ", data.payload);
      if (data?.payload?.success) {
        toast({
          title: data?.payload?.msg,
          // className:(
          //   'top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4'
          // ),
        })
        navigate("/auth/login");
      }
    });
  };

  return (
    <div className="mx-auto w-full max-w-md space-y-3">
      <h1 className="text-3xl mb-14 text-center font-semibold tracking-tight text-foreground">
        Create new account
      </h1>

      <CommonForm
        formControls={registerFormControls}
        buttonText={"Sign up"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />

      <div className="flex text-sm">
        <p>Already have an account?</p>
        <Link
          to="/auth/login"
          className="font-medium ml-3 text-blue-900 hover:underline"
        >
          Log in
        </Link>
      </div>
    </div>
  );
}
