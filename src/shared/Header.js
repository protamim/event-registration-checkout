import { logo } from "@/assets";
import BorderedLink from "@/components/ui/BorderedLink";
import Image from "next/image";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";

const NAV_ITEMS = [
  { id: 1, title: "Home", path: "#" },
  { id: 2, title: "About", path: "#" },
  { id: 3, title: "Courses", path: "#" },
  { id: 4, title: "Shop", path: "#" },
  { id: 5, title: "Events", path: "#" },
  { id: 6, title: "Contact", path: "#" },
];

const Header = () => {
  return (
    <>
      <header>
        <nav className="bg-1s-nv-blue px-3 py-4">
          <div className="flex items-center justify-between relative">
            {/* logo */}
            <Link href="#" className="w-24">
              <Image
                width={191}
                height={67}
                src={logo}
                alt="event-logo"
                className="max-w-full"
              />
            </Link>
            {/* Offcanvas menu */}
            <button className="transition-all ease-in-out duration-300 hover:opacity-60">
              <span className="text-white text-3xl font-bold">
                <HiBars3BottomRight />
              </span>
            </button>
            {/* Navigation Menu */}
            <div className="absolute top-[130%] left-0 bg-1s-nv-blue w-full rounded-xl pt-6 pb-4 pl-5">
              <ul>
                {NAV_ITEMS.map((item) => (
                  <li key={item.id} className="mb-3">
                    <BorderedLink path={item.path} title={item.title} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
