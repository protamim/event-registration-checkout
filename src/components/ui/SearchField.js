import { CiSearch } from "react-icons/ci";

const SearchField = () => {
  return (
  
      <div className="relative max-w-max group">
        <span className="absolute top-1/2 -translate-y-1/2 z-0 user-select-none left-3 text-white font-bold text-xl">
          <CiSearch />
        </span>
        <input
          type="text"
          className="outline-none border-none h-12 w-12 rounded-full pl-10 focus:w-full text-white bg-[#222052]"
        />
      </div>
   
  );
};

export default SearchField;
