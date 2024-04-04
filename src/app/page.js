"use client";
import { bKashLogo, nagadLogo, sslCommerceLogo } from "@/assets";
import IconButton from "@/components/ui/IconButton";
import InputField from "@/components/ui/InputField";
import PaymentGateway from "@/components/ui/PaymentGateway";
import PriceRow from "@/components/ui/PriceRow";
import TextArea from "@/components/ui/TextArea";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

const EventPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(isOpen ? false : true);
  };

  return (
    <>
      {/* Page title */}
      <div className="bg-1s-nv-blue pb-12 pt-14">
        <h2 className="text-2xl font-normal leading-normal text-center text-2nd-yellow">
          Event Reservation Form
        </h2>
      </div>
      <main className="relative">
        {/* reservation form */}
        <div className="mt-10 px-3 mb-8">
          <div className="max-w-[768px] mx-auto px-6 pb-10 pt-8 bg-white rounded-3xl shadow-tiny">
            <form className="grid grid-cols-1 tiny:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-2 gap-x-4 gap-y-6">
              {/* first name */}
              <InputField as="text" holder="First Name" />
              {/* Last Name */}
              <InputField as="text" holder="Last Name" />
              {/* Email */}
              <InputField as="email" holder="Email" />
              {/* Mobile */}
              <InputField as="number" holder="Mobile" />
              {/* Nationality */}
              <InputField as="text" holder="Nationality" />
              {/* Gender */}
              <InputField as="text" holder="Gender" />
              {/* Date Of Birth */}
              <InputField as="text" holder="Date Of Birth" />
              {/* NID/ Birth Reg. No */}
              <InputField as="text" holder="NID/ Birth Reg. No" />
              {/* Present Address */}
              <TextArea holder="Present Address" />

              {/* term and conditions */}
              <div className="flex items-center gap-x-2 col-auto tiny:col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-2 2xl:col-span-2 3xl:col-span-2">
                <input type="checkbox" />
                <span className="text-gray-400">
                  I agree that the information is true
                </span>
              </div>
              {/* Buttons */}
              <div className="col-auto tiny:col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-2 2xl:col-span-2 3xl:col-span-2 mt-6 flex items-center justify-center gap-x-6">
                <IconButton as="button" text="Back" icon={<IoIosArrowBack />} />

                <IconButton
                  onClick={handleClick}
                  as="submit"
                  text="Submit"
                  icon={<IoIosArrowForward />}
                  iconClass="order-2"
                  textClass="order-1"
                />
              </div>
            </form>
          </div>
        </div>
        {/* Modal */}
        <div style={isOpen ? { scale: "1" } : { scale: "0" }}
         className="fixed top-0 left-0 right-0 bottom-0 z-[1000] bg-[rgba(0,0,0,0.6)] flex items-center justify-center origin-center transition-all duration-100 ease-linear">
          <div
            className="max-w-[800px] min-w-[300px] tiny:min-w-[400px] sm:min-w-[480px] md:min-w-[720px] lg:w-full xl:w-full 2xl:w-full 3xl:w-full bg-white rounded-2xl relative"
          >
            {/* Close Modal */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-2 top-3"
            >
              <span className="bg-[#FCFCFC] p-1 border border-gray-300 rounded-full text-gray-600 block">
                <RxCross1 />
              </span>
            </button>

            <div className="rounded-2xl shadow-tiny shadow-black md:flex lg:flex xl:flex 2xl:flex 3xl:flex">
              {/* modal header */}
              <div className="bg-1s-nv-blue px-6 py-8 md:flex-1 lg:flex-1 xl:flex-1 2xl:flex-1 3xl:flex-1 md:rounded-l-2xl lg:rounded-l-2xl xl:rounded-l-2xl 2xl:rounded-l-2xl 3xl:rounded-l-2xl md:flex md:items-center md:flex-col md:justify-center lg:flex xl:flex 2xl:flex 3xl:flex lg:items-center xl:items-center 2xl:items-center 3xl:items-center lg:flex-col xl:flex-col 2xl:flex-col 3xl:flex-col lg:justify-center xl:justify-center 2xl:justify-center 3xl:justify-center">
                <h3 className="text-white text-center text-3xl mb-4">
                  Pay Now!
                </h3>
                <p className="text-[#BCBBCC] text-2xl text-center">
                  Pay from the earnings you have in your account.
                </p>
              </div>

              {/* Modal Content */}
              <div className="bg-[#FEFEFE] px-4 py-5 md:rounded-r-2xl lg:rounded-r-2xl xl:rounded-r-2xl 2xl:rounded-r-2xl 3xl:rounded-r-2xl">
                <h3 className="text-3xl text-center mb-5 md:mb-12 lg:mb-14 xl:mb-16 2xl:mb-16 3xl:mb-16 md:mt-9 lg:mt-10 xl:mt-10 2xl:mt-10 3xl:mt-10">
                  PROCEED TO PAY
                </h3>
                {/* ticket price */}
                <PriceRow title="Ticket Price" price=": 500 BDT" />
                {/* Coupon Discount */}
                <PriceRow title="Coupon Discount" price=": 0 BDT" />
                {/* Info */}
                <p className="text-xs font-normal leading-[24px] text-[#949494] pb-6 border-b border-gray-300 mb-5">
                  This is for using the platform and get support lifetime!
                </p>
                {/* Total */}
                <PriceRow title="Total" price=": 500 BDT" />
                {/* terms and conditions */}
                <div className="flex items-center gap-x-3 mb-8 md:mb-12 lg:mb-14 xl:mb-16 2xl:mb-16 3xl:mb-20">
                  <input type="checkbox" />
                  <span className="text-xs font-normal">
                    I agree to Terms & Conditions, Privacy & Policy and Refund
                    Policy
                  </span>
                </div>

                {/* payment type */}
                <h4 className="text-2xl uppercase text-black mb-6">
                  Payment Type
                </h4>
                <div className="flex items-center gap-y-6 justify-between flex-wrap mb-8">
                  {/* bKash */}
                  <PaymentGateway
                    logo={bKashLogo}
                    title="bKash"
                    alt="bKash Logo"
                  />
                  {/* nagad */}
                  <PaymentGateway
                    logo={nagadLogo}
                    title="Nagad"
                    alt="Nagad Logo"
                  />
                  {/* ssl commerce */}
                  <PaymentGateway
                    title="SSL Payment"
                    logo={sslCommerceLogo}
                    alt="SSL commerce logo"
                  />
                </div>
                {/* Confirm Button */}
                <div className="mb-4 text-center">
                  <button className="bg-1s-nv-blue py-2 px-5 rounded-full">
                    <Link
                      href="#"
                      className="text-white transition-all ease-in-out duration-300 hover:opacity-65"
                    >
                      Confirm Payment
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default EventPage;
