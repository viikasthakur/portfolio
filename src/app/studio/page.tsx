'use client'
import { NextPage } from "next";
import {IoIosMenu} from 'react-icons/io'
import { useToggleContext } from "../Context";

interface ContextType {
  isOpen: boolean,
  handleToggle:()=>void
}

const StudioPage: NextPage = () => {
  const { isOpen,handleToggle } = useToggleContext() as ContextType;
  return (
    <div className="bg-[#050505] min-h-screen">
      <div className="sticky top-0  backdrop-blur-lg h-12 flex items-center gap-x-4  p-4">
        <div className=" hover:bg-white  h-8 w-8 hover:bg-opacity-5 flex justify-center items-center   rounded-md cursor-pointer  sm:hidden " onClick={handleToggle}>
          <IoIosMenu className="text-white h-5 w-5 " />
        </div>

        <h2 className=" font-bold text-sm  text-white  ">Studio</h2>
      </div>
      <div className="  mt-52 flex justify-center px-4">
        <p className="text-[#777777]  text-base">
          Creating something magical! Studio under construction. Stay tuned!
        </p>
      </div>
    </div>
  );

};

export default StudioPage;
