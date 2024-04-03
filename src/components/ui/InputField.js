const InputField = ({as, holder, wrapperClass}) => {
  return (
    <>
      <div>
        <input
          type={as}
          placeholder={holder}
          className="w-full bg-gray-50 py-3 outline-none border-none pl-5 rounded-full"
        />
      </div>
    </>
  );
};

export default InputField;
