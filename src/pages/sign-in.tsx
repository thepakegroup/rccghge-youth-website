import { Button } from "@/components/base-components/button";
import { Loader1 } from "@/components/base-components/loader1";
import api from "@/utils/axios-interceptor";
import { ErrorModal, SuccessModal } from "@/utils/request-modals";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BsEyeSlashFill } from "react-icons/bs";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";

const SignInPage = () => {
  const navigate = useNavigate();
  const [isPassword, setIsPassword] = useState<boolean>(true);
  const [logging, setLogging] = useState<boolean>(false);
  // form configs
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  // login function
  const loginUser = async (data: { email: string; password: string }) => {
    setLogging(true);
    try {
      const res = await api.post(`/user/sign-in`, data);
      if (res.statusText === "OK") {
        SuccessModal(res.data.message);
        Cookies.set("token", res.data?.data?.token, {
          expires: 1,
          secure: true,
          sameSite: "none",
        });
        navigate("/", { replace: true });
      }
    } catch (error: any) {
      ErrorModal(error?.response?.data?.message);
    } finally {
      setLogging(false);
    }
  };
  //
  return (
    <div className="w-[90%] mx-auto mt-6 mb-[100px]">
      <h1 className="header-one !text-dark-100 text-center">Sign In</h1>
      <div className="relative mx-auto bg-[linear-gradient(to_right,#12234E,#4473BA)] h-[3px] mt-4">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] bg-light-100 px-4 py-2">
          <img className="w-full" src="/logo.svg" alt="" />
        </div>
      </div>
      {/*  */}
      <h3 className="font-playfair-display font-bold text-xl md:text-2xl text-center my-10">
        To view this feature, you have to sign up
      </h3>
      {/*  */}
      <form
        className="w-[95%] sm:w-[600px] mx-auto flex flex-col gap-3"
        onSubmit={handleSubmit(loginUser)}
      >
        <label className="flex flex-col gap-1" htmlFor="email">
          <span className="font-semibold text-dark-100/70">Email</span>
          <input
            type="email"
            id="email"
            className="outline-none border border-zinc-300 py-2 pl-2 rounded-md"
            {...register("email", { required: "Email is required" })}
          />
          <small className="text-xs text-red-500">
            {errors.email?.message}
          </small>
        </label>
        {/*  */}
        <label className="flex flex-col gap-1" htmlFor="password">
          <span className="font-semibold text-dark-100/70">Password</span>
          <div className="flex items-center justify-between gap-1 border border-zinc-300 py-2 px-2 rounded-md overflow-hidden">
            <input
              type={isPassword ? "password" : "text"}
              id="password"
              className="w-full outline-none"
              {...register("password", { required: "Password is required" })}
            />
            <BsEyeSlashFill
              className="cursor-pointer"
              onClick={() => setIsPassword(!isPassword)}
            />
          </div>
          <small className="text-xs text-red-500">
            {errors.password?.message}
          </small>
        </label>
        {/*  */}
        <p className="flex items-center gap-1">
          <span>Don&apos;'t have an account?</span>
          <Link
            className="border-b border-b-primary-100 text-primary-100"
            to="/auth/sign-up"
          >
            Sign up
          </Link>
        </p>
        <Button
          disabled={logging}
          label={logging ? "Signing In" : "Sign In"}
          className="self-start"
          icon={logging ? <Loader1 /> : null}
        />
      </form>
    </div>
  );
};

export default SignInPage;
