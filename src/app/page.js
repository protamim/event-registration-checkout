import IconButton from "@/components/ui/IconButton";
import InputField from "@/components/ui/InputField";
import TextArea from "@/components/ui/TextArea";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";



const EventPage = () => {
  return (
    <>
      {/* Page title */}
      <div className="bg-1s-nv-blue pb-12 pt-14">
        <h2 className="text-2xl font-normal leading-normal text-center text-2nd-yellow">
          Event Reservation Form
        </h2>
      </div>
      {/* reservation form */}
      <div className="mt-10 px-3 mb-8">
        <div className="max-w-[768px] mx-auto px-6 pb-10 pt-8 bg-white rounded-3xl shadow-tiny">
          <form className="grid grid-cols-1 tiny:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-2 gap-x-4 gap-y-6">
            {/* first name */}
            <InputField as='text' holder='First Name' />
            {/* Last Name */}
            <InputField as='text' holder='Last Name' /> 
            {/* Email */}
            <InputField as='email' holder='Email' />
            {/* Mobile */}
            <InputField as='number' holder='Mobile' />
            {/* Nationality */}
            <InputField as='text' holder='Nationality' />
            {/* Gender */}
            <InputField as='text' holder='Gender' />
            {/* Date Of Birth */}
            <InputField as='text' holder='Date Of Birth' />
            {/* NID/ Birth Reg. No */}
            <InputField as='text' holder='NID/ Birth Reg. No' />
            {/* Present Address */}
            <TextArea holder='Present Address' />

            {/* term and conditions */}
            <div className="flex items-center gap-x-2 col-auto tiny:col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-2 2xl:col-span-2 3xl:col-span-2">
              <input type="checkbox" />
              <span className="text-gray-400">I agree that the information is true</span>
            </div>
            {/* Buttons */}
            <div className="col-auto tiny:col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-2 2xl:col-span-2 3xl:col-span-2 mt-6 flex items-center justify-center gap-x-6">

              <IconButton as='button' text='Back' icon={<IoIosArrowBack/>} />
              <IconButton as='submit' text='Submit' icon={<IoIosArrowForward/>} iconClass='order-2' textClass='order-1' />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EventPage;
