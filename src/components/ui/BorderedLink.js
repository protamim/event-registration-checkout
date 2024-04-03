import Link from "next/link";

const BorderedLink = ({title, path}) => {
  return (
    <Link
      href={path}
      className="text-white pb-2 block font-normal max-w-max relative transition-all duration-300 ease-in-out hover:text-2nd-yellow before:transition-all before:duration-300 before:ease-in-out before:absolute before:top-full before:left-0 before:w-0 before:h-[2px] before:bg-2nd-yellow hover:before:w-full"
    >
      {title}
    </Link>
  );
};

export default BorderedLink;
