'use client';
import { useToggleContext } from '@/context';
import Image from 'next/image';
import { GrLocation } from 'react-icons/gr';
import { IoIosMenu } from 'react-icons/io';

interface ContextType {
  isOpen: boolean;
  handleToggle: () => void;
}

export default function Home() {
  const { isOpen, handleToggle } = useToggleContext() as ContextType;
  return (
    <div className='className="flex flex-col bg-[#050505]      '>
      <div
        className={`sticky top-0 z-10   bg-white  bg-opacity-10 backdrop-blur-lg  h-12 border-b border-gray-900 flex items-center px-4`}
      >
        <div
          className=" hover:bg-white  h-8 w-8 hover:bg-opacity-5 flex justify-center items-center   rounded-md cursor-pointer sm:hidden "
          onClick={handleToggle}
        >
          <IoIosMenu className="text-white h-5 w-5   " />
        </div>
      </div>
      <div className="max-w-2xl mx-auto  sm:px-12 px-4 py-10 ">
        <div className="flex flex-col my-20">
          <div className=" flex flex-col  gap-y-4  text-[#737373]  text-base font-normal cursor-default">
            <p>
              Hey, I&#39;m Vikas. ux designer and{' '}
              <span className="  text-blue-700"> software tinkerer</span> based
              in India.{' '}
            </p>
            <p>
              I consciously practice being real and ethical and choose to work
              with people who share the same values.
            </p>
            <p>
              I value happiness, health and strong relationships over material
              success and mere professional networking.
            </p>

            <p>
              I feel really fullfilled when I am allowed to add in really fine
              details to my workwith genuine interest & emotion
            </p>
          </div>
          <button className=" mt-10 border  border-gray-600 rounded-lg px-4 py-2 self-start text-sm  font-medium  text-white leading-4 bg-white bg-opacity-10">
            {' '}
            View resume
          </button>
        </div>
        <div className=" flex flex-col gap-y-6">
          <div className="flex  flex-col gap-y-4">
            <h4 className="text-white font-bold text-lg">Work</h4>
            <div className="flex flex-col  gap-2">
              <div className=" flex items-center gap-x-4 cursor-pointer group">
                <span className="text-white  font-medium whitespace-nowrap  group-hover:text-blue-800 group-hover:underline">
                  Chat App
                </span>
                <span className=" border-dashed border-gray-900 border-b w-full" />
                <span className="text-[#737373]  whitespace-nowrap ">
                  Dec &apos;21
                </span>
              </div>
              <div className=" flex items-center gap-x-4 cursor-pointer group">
                <span className="text-white font-medium group-hover:text-blue-800 group-hover:underline">
                  eCommerce
                </span>
                <span className=" border-dashed border-gray-900 border-b w-full" />
                <span className="text-[#737373]  whitespace-nowrap ">
                  Feb &apos;22
                </span>
              </div>
              <div className=" flex items-center gap-x-4 cursor-pointer group">
                <span className="text-white font-medium group-hover:text-blue-800 group-hover:underline">
                  Simplex
                </span>
                <span className=" border-dashed border-gray-900 border-b w-full" />
                <span className="text-[#737373]  whitespace-nowrap ">
                  May &apos;22
                </span>
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-y-4 ">
            <h4 className="text-white font-bold text-lg">Where</h4>
            <Image
              src="/assets/map.png"
              width="580"
              height="290"
              alt="map"
              className=" rounded-2xl  object-center"
            />
            <div className="flex items-center gap-2  self-end  text-[#737373]">
              <GrLocation />
              <span>Bihar, India</span>
            </div>
          </div>
          <div className=" flex  flex-col gap-y-4">
            <h4 className="text-white font-bold text-lg">Online</h4>
            <div className="flex flex-col  gap-2">
              <a
                href="https://github.com/viikasthakur"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <span className="text-white  font-medium group-hover:text-blue-800 group-hover:underline">
                  Github
                </span>
                <span className=" border-dashed border-gray-900 border-b w-full" />
                <span className="text-[#737373]">Follow</span>
              </a>
              <a
                href="https://www.linkedin.com/in/viikasthakur"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <span className="text-white font-medium group-hover:text-blue-800 group-hover:underline">
                  Linkedin
                </span>
                <span className=" border-dashed border-gray-900 border-b w-full" />
                <span className="text-[#737373]">Connect</span>
              </a>
              <a
                href="https://twitter.com/vksthkr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <span className="text-white font-medium group-hover:text-blue-800 group-hover:underline">
                  Twitter
                </span>
                <span className=" border-dashed border-gray-900 border-b w-full" />
                <span className="text-[#737373]">Follow</span>
              </a>
              <a
                href="https://www.instagram.com/viikas.thakur/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <strong className="text-white font-medium group-hover:text-blue-800 group-hover:underline">
                  Instagram
                </strong>
                <span className=" border-dashed border-gray-900 border-b w-full" />
                <span className="text-[#737373]">Follow</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
