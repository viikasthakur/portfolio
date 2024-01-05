'use client';
import { NextPage } from 'next';
import { IoIosLink, IoIosMenu } from 'react-icons/io';
import { useToggleContext } from '@/context';
import Image from 'next/image';
import { Data } from '@/utils/Data';
import { link } from 'fs';

interface ContextType {
  isOpen: boolean;
  handleToggle: () => void;
}

const BookmarksPage: NextPage = () => {
  const { isOpen, handleToggle } = useToggleContext() as ContextType;
  return (
    <div className="bg-[#050505]">
      <div className=" bg-[#171717]  w-full sm:w-80  h-screen overflow-y-auto ">
        <div className="sticky top-0  backdrop-blur-lg h-12 flex items-center gap-x-4  p-4">
          <div
            className=" hover:bg-white  h-8 w-8 hover:bg-opacity-5 flex justify-center items-center   rounded-md cursor-pointer  sm:hidden "
            onClick={handleToggle}
          >
            <IoIosMenu className="text-white h-5 w-5 " />
          </div>

          <h2 className=" font-bold text-sm  text-white  ">Bookmarks</h2>
        </div>
        <div className=" flex flex-col  space-y-1   px-2 sm:px-4 py-4 ">
          {Data.bookmarks.map(({ name, href, link }) => (
            <a
              href={href}
              key={name}
              target="_blank"
              rel="noopener noreferrer"
              className=" space-y-1 cursor-pointer hover:bg-[#404040] px-6  py-2  rounded-xl"
            >
              <span>{name}</span>
              <div className="flex gap-1  text-[#737373]">
                <IoIosLink />
                <span className="  text-xs">{link}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookmarksPage;
