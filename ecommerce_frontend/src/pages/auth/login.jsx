import CommonForm from "@/components/common/form";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginFormControls } from "@/config";
import { useDispatch } from "react-redux";
import { loginUser } from "@/store/auth-slice";
import { useToast } from "@/hooks/use-toast";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return toast({
        title: "Please fill all the fields",
        variant: "destructive",
      });
    }

    dispatch(loginUser(formData)).then((data) => {
      console.log("data.paylaod: ", data.payload);
      if (data?.payload?.success) {
        toast({
          title: data?.payload?.msg,
        });
      } else {
        toast({
          title: data?.payload?.msg,
          variant: "destructive",
        });
      }
    });
  };

  return (
    <div className="mx-auto w-full max-w-md space-y-3">
      <h1 className="text-3xl mb-14 text-center font-semibold tracking-tight text-foreground">
        Login to your account
      </h1>

      <CommonForm
        formControls={loginFormControls}
        buttonText={"Login"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />

      <div className="flex text-sm">
        <p>Don&apos;t have an account?</p>
        <Link
          to="/auth/register"
          className="font-medium ml-3 text-blue-900 hover:underline"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}
