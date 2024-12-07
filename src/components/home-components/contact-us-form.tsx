import { useForm } from "react-hook-form";
import { Button } from "../base-components/button";
import { useState } from "react";
import { ErrorModal, SuccessModal } from "@/utils/request-modals";
import api from "@/utils/axios-interceptor";
import { Loader1 } from "../base-components/loader1";

export const ContactUsForm = () => {
  const [sending, setSending] = useState<boolean>(false);
  //
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      question: "",
      email: "",
    },
  });
  //
  const sendContactInfo = async (data: any) => {
    setSending(true);
    try {
      const res = await api.post("/user/contact-us", data);
      if (res.statusText === "OK") {
        SuccessModal(res.data?.message);
        reset();
      }
    } catch (error: any) {
      ErrorModal(error?.response?.data?.message);
    } finally {
      setSending(false);
    }
  };
  //
  return (
    <div
      id="contact-us"
      className="relative mt-12 mb-20 min-h-[736px] bg-contact-bg bg-fixed bg-cover bg-no-repeat"
    >
      <form
        className="absolute w-[89%] sm:w-[600px] mx-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 bg-light-100 rounded-lg"
        onSubmit={handleSubmit(sendContactInfo)}
      >
        <div className="flex flex-col gap-1 w-[88%] 376:w-[300px] mb-6">
          <div className="h-[6px] w-[70px] bg-primary-100 rounded-sm" />
          <h3 className="font-playfair-display text-xl md:text-2xl text-dark-100 font-bold">
            Contact Us
          </h3>
          <p className="font-quicksand text-grey-100 w-full">
            Have any questions, comments or enquiry? Feel free to send us a
            message
          </p>
        </div>
        {/*  */}
        <div className="flex flex-col gap-3">
          <label className="flex flex-col gap-1" htmlFor="name">
            <p className="text-grey-100">Name</p>
            <input
              type="text"
              id="name"
              className="outline-none pl-2 py-2 border rounded-md"
              {...register("name", {
                required: "Name is required",
              })}
            />
            <small className="text-xs text-red-500">
              {errors?.name?.message}
            </small>
          </label>
          {/*  */}
          <label className="flex flex-col gap-1" htmlFor="email">
            <p className="text-grey-100">Email Address</p>
            <input
              type="email"
              id="email"
              className="outline-none pl-2 py-2 border rounded-md"
              {...register("email", {
                required: "Email is required",
              })}
            />
            <small className="text-xs text-red-500">
              {errors?.email?.message}
            </small>
          </label>
          {/*  */}
          <label className="flex flex-col gap-1" htmlFor="email">
            <p className="text-grey-100">Reason</p>
            <textarea
              id="email"
              rows={3}
              className="outline-none pl-2 py-2 border rounded-md resize-none"
              {...register("question", {
                required: "Reason is required",
              })}
            />
            <small className="text-xs text-red-500">
              {errors?.question?.message}
            </small>
          </label>
          {/*  */}
          <Button
            disabled={sending}
            label={sending ? "Sending" : "Send Message"}
            className="self-start py-3"
            type="submit"
            icon={sending ? <Loader1 /> : null}
          />
        </div>
        {/*  */}
      </form>
    </div>
  );
};
