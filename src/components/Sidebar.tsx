'use client';
import { HiMiniHome } from 'react-icons/hi2';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import {
  FaTwitter,
  FaLinkedinIn,
  FaBookmark,
  FaFeatherAlt,
  FaMagic,
} from 'react-icons/fa';
import { SiGooglebard, SiBadoo } from 'react-icons/si';
import { RxCross2 } from 'react-icons/rx';

import { HiRectangleStack } from 'react-icons/hi2';
import { FaBagShopping } from 'react-icons/fa6';
import { usePathname, useRouter } from 'next/navigation';
import { useToggleContext } from '@/context';

interface ContextType {
  isOpen: boolean;
  handleToggle: () => void;
}

function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const handleNavigation = (path) => {
    router.push(path);
    handleToggle();
  };
  const { isOpen, handleToggle } = useToggleContext() as ContextType;
  return (
    <div
      className={`bg-[#171717] text-[#e5e5e5] sm:w-56 w-screen h-screen overflow-y-auto z-50  fixed  sm:block  ${
        isOpen ? 'hidden' : null
      }`}
    >
      <div className=" flex flex-col">
        <div className="sticky top-0  backdrop-blur-lg    h-12  p-4 flex  items-center gap-x-4">
          <div
            className=" hover:bg-white  h-8 w-8 hover:bg-opacity-5 flex justify-center items-center   rounded-md cursor-pointer sm:hidden "
            onClick={handleToggle}
          >
            <RxCross2 className="text-white h-4 w-4 " />
          </div>
          <h2 className=" font-bold text-sm    ">Vikas Thakur</h2>
        </div>
        <div className="  space-y-5  my-4  mx-2 ">
          <ul className="  flex flex-col space-y-2 font-medium  text-sm">
            <li
              className={` ${
                pathname === '/' ? 'bg-[#404040]' : null
              } px-3  py-1.5   rounded-md  flex items-center gap-2 hover:bg-[#404040] cursor-pointer `}
              onClick={() => handleNavigation('/')}
            >
              <HiMiniHome />
              Home
            </li>

            <li
              className={` ${
                pathname === '/thinking' ? 'bg-[#404040]' : null
              } px-3  py-1.5   rounded-md  flex items-center gap-2 hover:bg-[#404040]  cursor-pointer`}
              onClick={() => handleNavigation('/thinking')}
            >
              {' '}
              <FaMagic />
              Thinking
            </li>
          </ul>
          <div>
            <span className=" text-xs font-bold">Me</span>
            <ul className=" flex flex-col gap-y-2 mt-2 font-medium text-sm">
              <li
                className={`${
                  pathname === '/studio' ? 'bg-[#404040]' : null
                }  px-3  py-1.5   rounded-md  flex items-center gap-2 hover:bg-[#404040] cursor-pointer`}
                onClick={() => handleNavigation('/studio')}
              >
                <FaFeatherAlt />
                Studio
              </li>

              <li
                className={`${
                  pathname === '/bookmarks' ? 'bg-[#404040]' : null
                } px-3  py-1.5   rounded-md  flex items-center gap-2 hover:bg-[#404040] cursor-pointer`}
                onClick={() => handleNavigation('/bookmarks')}
              >
                <FaBookmark />
                Bookmarks
              </li>

              <li
                className={` ${
                  pathname === '/stack' ? 'bg-[#404040]' : null
                } px-3  py-1.5   rounded-md  flex items-center gap-2 hover:bg-[#404040] cursor-pointer`}
                onClick={() => handleNavigation('/stack')}
              >
                <HiRectangleStack />
                Stack
              </li>
            </ul>
          </div>
          <div>
            <span className=" font-bold text-xs">Projects</span>
            <ul className=" flex flex-col gap-y-2 mt-2 font-medium  text-sm">
              <li className=" px-3  py-1.5   rounded-md  flex items-center gap-2 hover:bg-[#404040] cursor-pointer">
                {' '}
                <SiBadoo />
                Simplex
              </li>
              <li className="  px-3  py-1.5   rounded-md  flex items-center gap-2 hover:bg-[#404040] cursor-pointer">
                {' '}
                <FaBagShopping />
                eCommerce
              </li>
              <li className=" px-3  py-1.5   rounded-md  flex items-center gap-2 hover:bg-[#404040] cursor-pointer">
                {' '}
                <SiGooglebard />
                Chat App
              </li>
            </ul>
          </div>
          <div>
            <span className=" font-bold text-xs ">Online</span>
            <div className=" flex flex-col gap-y-2 mt-2 font-medium text-sm">
              <a
                href="https://github.com/viikasthakur"
                target="_blank"
                rel="noopener noreferrer"
                className="  px-3  py-1.5   rounded-md  flex items-center gap-2 hover:bg-[#404040] cursor-pointer"
              >
                <AiFillGithub />
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/viikasthakur"
                target="_blank"
                rel="noopener noreferrer"
                className="  px-3  py-1.5   rounded-md  flex items-center gap-2 hover:bg-[#404040] cursor-pointer"
              >
                {' '}
                <FaLinkedinIn />
                Linkedin
              </a>
              <a
                href="https://twitter.com/vksthkr"
                target="_blank"
                rel="noopener noreferrer"
                className="  px-3  py-1.5   rounded-md  flex items-center gap-2 hover:bg-[#404040] cursor-pointer"
              >
                {' '}
                <FaTwitter />
                Twitter
              </a>
              <a
                href="https://www.instagram.com/viikas.thakur/"
                target="_blank"
                rel="noopener noreferrer"
                className="  px-3  py-1.5   rounded-md  flex items-center gap-2 hover:bg-[#404040] cursor-pointer"
              >
                {' '}
                <AiFillInstagram />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
