const PriceRow = ({title, price}) => {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <p className="text-[#565656] leading-[24px]">{title}</p>
        <p className="text-[#565656] leading-[24px]">{price}</p>
      </div>
    </>
  );
};

export default PriceRow;
