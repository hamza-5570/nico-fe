import React from "react";
import Logo from "../svg/logo.svg";
import Profile from "../svg/profile.svg";

import Eli from "../asset/eli3.png";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../component/footer";

const Fahrg = () => {
  const [open, setOpen] = useState(false);

  let navigate = useNavigate();
  const handleNavigate = (link) => {
    navigate(link);
  };

  return (
    <>
      <div className="relative">
        <img alt="nothing" className="absolute -z-10 right-0 w-[65%]" src={Eli} />
        <div className="grid grid-cols-2 md:grid-cols-9 px-5 py-[1px] md:py-2 xl:py-3">
          <div className="md:col-span-4">
            <img alt="nothing" className="w-[70%] md:w-[60%]" src={Logo} />
          </div>
          <div className="md:col-span-4  relative z-10 self-center justify-end hidden md:flex">
            <p className="font-[700] text-[15px]">Startseite</p>
            <p
              onClick={() => handleNavigate("/sen")}
              className="font-[700] mx-5 text-[15px] cursor-pointer "
            >
              Sensordaten
            </p>
            <p className="font-[700] mx-7 text-[15px]">Fahrgemeinschaft</p>
            <p 
              onClick={() => handleNavigate("/vvs")}
            
            className="cursor-pointer font-[700] text-[15px] text-end">VVS</p>
          </div>
          <div className=" md:col-span-1 self-center relative z-10 hidden md:block">
            <img
              onClick={() => handleNavigate("/profile")}
              alt="nothing"
              className="ml-auto w-[13%] md:w-[40%] cursor-pointer "
              src={Profile}
            />
          </div>

          <div className=" md:hidden justify-end flex">
            <svg
              onClick={() => setOpen(true)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 self-center relative z-10 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>

        <div className="bg3 ">
            <div className="pt-28 md:pt-0 grid grid-cols-1 lg:grid-cols-4 w-[90%] mx-auto md:gap-10 xl:gap-20 md:absolute bottom-40  md:left-14 xl:left-20">
            <div className=" lg:col-span-2 bgg p-10 rounded-lg">
              <p className="font-[700] text-[30px] text-white">Fahrgemein chaften anbieten oder buchen </p>   
              <p className="font-[600] text-[15px] text-white">Fahrt gemeinsam zur Hochschule und schont die Umwelt </p>   
            </div>
            <div className="md:col-span-1 mt-5 md:mt-0">
              <button
              onClick={() => handleNavigate("/buchen")}
              
              className="font-[700] text-[20px] text-white bg-[#78B3FE] py-5 px-10 rounded-lg">Fahrt buchens</button>
              <br/>
              <button
            onClick={() => handleNavigate("/anbie")}
              
              className="mt-5 md:mt-12 font-[700] text-[20px] text-white bg-[#95ABBC] py-5 px-10 rounded-lg"> Fahrt anbieten</button>
            </div>
            <div className="md:col-span-1 self-center">
            <button
              onClick={() => handleNavigate("/ten")}
            
            className="mt-5 md:mt-12 font-[700] text-[20px] text-white bg-[#4FE9A4E5] py-5 px-10 rounded-lg"> Meine Fahrten</button>

            </div>
            </div>
        </div>
      </div>
<Footer/>
<Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-xs pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                        <button
                          type="button"
                          className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                      <div class="container grid grid-cols-1 p-3 ">
                        <img alt="nothing to show" className="w-[70%]" src={Logo} />
                        <p className="text-start mt-10 font-gilroy font-[400] cursor-pointer text-[18px] text-black  hover:text-[#FFA500] hover:border-b-2 hover:border-[#FFA500] ">
                        Startseite
                        </p>
                        <p className="text-start mt-3 font-gilroy font-[400] cursor-pointer text-[18px] text-black hover:text-[#FFA500]  ">
                        Sensordaten
                        </p>
                        <p className="text-start mt-3 font-gilroy font-[400] cursor-pointer text-[18px] text-black hover:text-[#FFA500]  ">
                        Fahrgemeinschaft
                        </p>
                        <p className="text-start mt-3 font-gilroy font-[400] cursor-pointer text-[18px] text-black hover:text-[#FFA500]  ">
                        VVS
                        </p>

                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};
export default Fahrg;
