import Link from "next/link";
const IconButton = ({ as, icon, text, path, iconClass, textClass }) => {
  return (
    <>
      <button type={as}>
        <Link
          href={path || '#'}
          className="flex items-center gap-x-2 border border-black py-3 px-5 rounded-full transition-all duration-300 ease-in-out hover:bg-2nd-yellow hover:border-2nd-yellow"
        >
          <span className={`bg-1s-nv-blue p-1 text-white rounded-full text-sm ${iconClass}`}>
            {icon}
          </span>
          <span className={`${textClass}`}>{text}</span>
        </Link>
      </button>
    </>
  );
};

export default IconButton;
