import { Button } from "@/components/base-components/button";
import { Loader1 } from "@/components/base-components/loader1";
import api from "@/utils/axios-interceptor";
import { ErrorModal, SuccessModal } from "@/utils/request-modals";
import { useState } from "react";
import { useForm } from "react-hook-form";

const JoinUs = () => {
  const [requesting, setRequesting] = useState<boolean>(false);
  // form config
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      profession: "",
      reason: "",
      mobile: "",
    },
  });
  const sendJoinRequest = async (data: any) => {
    setRequesting(true);
    try {
      const res = await api.post("/user/join-form", {
        ...data,
        ctx: "rccghge-youth",
      });
      if (res.statusText === "OK") {
        SuccessModal(res.data?.message);
        reset();
      }
    } catch (error: any) {
      ErrorModal(error?.response?.data?.message);
    } finally {
      setRequesting(false);
    }
  };
  //
  return (
    <div className="w-[90%] mx-auto mb-24">
      <h1 className="header-one !text-dark-100 text-center">Join us</h1>
      <div className="relative mx-auto bg-[linear-gradient(to_right,#12234E,#4473BA)] h-[3px] mt-4">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] bg-light-100 px-4 py-2">
          <img className="w-full" src="/logo.svg" alt="" />
        </div>
      </div>
      {/* =============== */}
      <div className="w-full sm:w-[600px] mx-auto flex flex-col items-center justify-center gap-2 mt-10">
        <h4 className="text-2xl font-playfair-display font-semibold text-dark-100/80">
          Kindly Fill The Following
        </h4>
        <p className="text-base text-center text-grey-100">
          Please enter your information below, to enable us add you to our data
          base. Kindly input all data correctly. Thank you
        </p>
      </div>
      {/* =============== */}
      <form
        className="w-full sm:w-[600px] mx-auto flex flex-col gap-3"
        onSubmit={handleSubmit(sendJoinRequest)}
      >
        <label className="flex flex-col gap-1" htmlFor="first_name">
          <p className="flex items-center gap-1 text-dark-100/70">
            <span>First name</span>
            <span className="text-red-400">*</span>
          </p>
          <input
            className="w-full border outline-none rounded-md py-[10px] pl-2 text-sm"
            type="text"
            id="first_name"
            {...register("firstname", { required: true })}
          />
        </label>
        {/*  */}
        <label className="flex flex-col gap-1" htmlFor="last_name">
          <p className="flex items-center gap-1 text-dark-100/70">
            <span>Last name</span>
            <span className="text-red-400">*</span>
          </p>
          <input
            className="w-full border outline-none rounded-md py-[10px] pl-2 text-sm"
            type="text"
            id="last_name"
            {...register("lastname", { required: true })}
          />
        </label>
        {/*  */}
        <label className="flex flex-col gap-1" htmlFor="active_no">
          <p className="flex items-center gap-1 text-dark-100/70">
            <span>Active Phone No.</span>
            <span className="text-red-400">*</span>
          </p>
          <input
            className="w-full border outline-none rounded-md py-[10px] pl-2 text-sm"
            type="tel"
            id="active_no"
            {...register("mobile", { required: true })}
          />
        </label>
        {/*  */}
        <label className="flex flex-col gap-1" htmlFor="profession">
          <p className="flex items-center gap-1 text-dark-100/70">
            <span>Profession</span>
            <span className="text-red-400">*</span>
          </p>
          <input
            className="w-full border outline-none rounded-md py-[10px] pl-2 text-sm"
            type="text"
            id="profession"
            {...register("profession", { required: true })}
          />
        </label>
        {/*  */}
        <label className="flex flex-col gap-1" htmlFor="email">
          <p className="flex items-center gap-1 text-dark-100/70">
            <span>Email addrss</span>
            <span className="text-red-400">*</span>
          </p>
          <input
            className="w-full border outline-none rounded-md py-[10px] pl-2 text-sm"
            type="text"
            id="email"
            {...register("email", { required: true })}
          />
        </label>
        {/*  */}
        <label className="flex flex-col gap-1" htmlFor="reason">
          <p className="flex items-center gap-1 text-dark-100/70">
            <span>Reason for joining us</span>
            <span className="text-red-400">*</span>
          </p>
          <textarea
            className="resize-none w-full border outline-none rounded-md py-[10px] pl-2 text-sm"
            id="reason"
            rows={6}
            {...register("reason", { required: true })}
          />
        </label>
        {/*  */}
        <Button
          disabled={requesting}
          icon={requesting ? <Loader1 /> : null}
          label={requesting ? "Submiting" : "Submit"}
          className="self-center sm:self-start"
        />
      </form>
    </div>
  );
};

export default JoinUs;
