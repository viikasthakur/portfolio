'use client';
import React from 'react';
import { Data } from '@/utils/Data';
import Image from 'next/image';
import { IoIosMenu } from 'react-icons/io';
import { useToggleContext } from '@/context';

interface ContextType {
  isOpen: boolean;
  handleToggle: () => void;
}

const Stack = () => {
  const { isOpen, handleToggle } = useToggleContext() as ContextType;
  return (
    <div className=" bg-[#050505]">
      <div className=" bg-[#171717]  w-full sm:w-80  h-screen overflow-y-auto ">
        <div className="sticky top-0  backdrop-blur-lg h-12 flex items-center gap-x-4  p-4">
          <div
            className=" hover:bg-white  h-8 w-8 hover:bg-opacity-5 flex justify-center items-center   rounded-md cursor-pointer  sm:hidden "
            onClick={handleToggle}
          >
            <IoIosMenu className="text-white h-5 w-5 " />
          </div>

          <h2 className=" font-bold text-sm  text-white  ">Stack</h2>
        </div>
        <div className=" flex flex-col  space-y-1 px-1 sm:px-4 py-4 ">
          {Data.stack.map(({ name, img, href }) => (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={href}
              key={name}
              className="flex items-center gap-2 cursor-pointer hover:bg-[#404040] px-6  py-2  rounded-xl "
            >
              <Image
                src={img}
                width="48"
                height="48"
                alt={name}
                className="  rounded-full"
              />
              <span className=" text-[#e5e5e5] font-medium">{name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stack;
