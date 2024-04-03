const TextArea = ({wrapperClass, holder}) => {
  return (
    <>
      <div className={`col-auto tiny:col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-2 2xl:col-span-2 3xl:col-span-2 ${wrapperClass}`}>
        <textarea
          placeholder={holder}
          className="w-full bg-gray-50 py-3 outline-none border-none pl-5 rounded-full resize-none flex items-center h-[44px]"
        />
      </div>
    </>
  );
};

export default TextArea;
