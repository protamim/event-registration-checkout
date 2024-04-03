"use client";
import { logo } from "@/assets";
import BorderedLink from "@/components/ui/BorderedLink";
import SearchField from "@/components/ui/SearchField";
import UserAvatar from "@/components/ui/UserAvatar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { MdOutlineClose } from "react-icons/md";

const NAV_ITEMS = [
  { id: 1, title: "Home", path: "#" },
  { id: 2, title: "About", path: "#" },
  { id: 3, title: "Courses", path: "#" },
  { id: 4, title: "Shop", path: "#" },
  { id: 5, title: "Events", path: "#" },
  { id: 6, title: "Contact", path: "#" },
];

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(toggle ? false : true);
  };

  return (
    <>
      <header>
        <nav className="bg-1s-nv-blue px-3 py-4">
          <div className="flex items-center justify-between relative transition-all ease-in-out duration-300">
            {/* logo */}
            <Link href="#" className="w-24 tiny:w-32 sm:w-32 md:w-36 lg:w-36 xl:w-40 2xl:w-40 3xl:w-44">
              <Image
                width={191}
                height={67}
                src={logo}
                alt="event-logo"
                className="max-w-full"
              />
            </Link>

            {/* Offcanvas bar */}
            <button
              onClick={handleToggle}
              className="transition-all ease-in-out duration-300 hover:opacity-60 lg:hidden xl:hidden 2xl:hidden 3xl:hidden"
            >
              <span className="text-white text-3xl font-bold">
                {toggle ? <MdOutlineClose /> : <HiBars3BottomRight />}
              </span>
            </button>

            {/* Navigation Menu for small devices */}
            <div
              className={`absolute top-[130%] bg-1s-nv-blue w-full rounded-xl pt-6 pb-4 pl-5 transition-all ease-in-out duration-300 drop-shadow-2xl shadow-1s-nv-blue lg:hidden ${
                toggle ? "left-0" : "-left-[112%]"
              }`}
            >
              <ul className="mb-6">
                {NAV_ITEMS.map((item) => (
                  <li key={item.id} className="mb-3">
                    <BorderedLink path={item.path} title={item.title} />
                  </li>
                ))}
              </ul>
              {/* search and user profile */}
              <div className="space-y-4">
                <UserAvatar />
                <form>
                  <SearchField />
                </form>
              </div>
            </div>

            {/* navigation menu for larger devices  */}
            <div className="hidden lg:block xl:block 2xl:block 3xl:block">
              <ul className="flex items-center gap-x-8 transition-all ease-in-out duration-300">
                {NAV_ITEMS.map((item) => (
                  <li key={item.id} className="uppercase">
                    <BorderedLink path={item.path} title={item.title} />
                  </li>
                ))}
              </ul>
            </div>

            {/* search and user profile for larger devices */}
            <div className="hidden lg:flex xl:flex 2xl:flex 3xl:flex items-center gap-x-5">
              <form>
                <SearchField />
              </form>
              <UserAvatar />
            </div>

          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
