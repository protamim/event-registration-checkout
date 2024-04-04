import Image from "next/image";

const PaymentGateway = ({logo, alt, title}) => {
  return (
    <>
      <div className="flex items-center gap-2">
        <input type="radio" name="method" />
        <Image src={logo} width={20} height={20} alt={alt} />
        <span className="text-[#565656] text-base font-normal">{title}</span>
      </div>
    </>
  );
};

export default PaymentGateway;
