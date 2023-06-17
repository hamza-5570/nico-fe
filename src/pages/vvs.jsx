import React from "react";
import Logo from "../svg/logo.svg";
import Profile from "../svg/profile.svg";
import Eli from "../asset/eli.png";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Fragment } from "react";
import Footer from "../component/footer";

const Vvs = () => {
  const [open, setOpen] = useState(false);

  let navigate = useNavigate();
  const handleNavigate = (link) => {
    navigate(link);
  };

  return (
    <>
      <div className="relative">
        <img alt="nothing" className="absolute right-0 w-[65%]" src={Eli} />
        <div className="grid grid-cols-2 md:grid-cols-9 px-5 py-[1px] md:py-2 xl:py-3">
          <div className="md:col-span-4">
            <img alt="nothing" className="w-[70%] md:w-[60%]" src={Logo} />
          </div>
          <div className="md:col-span-4  relative z-10 self-center justify-end hidden md:flex">
            <p className="font-[700] text-[15px]">Startseite</p>
            <p
              onClick={() => handleNavigate("/sen")}
              className="cursor-pointer font-[700] mx-5 text-[15px]"
            >
              Sensordaten
            </p>
            <p
              onClick={() => handleNavigate("/fahrg")}
              className="cusor-pointer font-[700] mx-7 text-[15px]"
            >
              Fahrgemeinschaft
            </p>
            <p className="cursor-pointer font-[700] text-[15px] text-end">VVS</p>
          </div>
          <div className=" md:col-span-1 self-center relative z-10 hidden md:block">
            <img
              alt="nothing"
              className="ml-auto w-[13%] md:w-[40%]"
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

<div className="bg pt-40 ">
    <iframe className="mx-auto w-[80%]"  title="enter"  frameborder="0" marginwidth="0" marginheight="0"  width="992" height="565" src="https://dfisite.vvs.de/?default_stop=de%3A08117%3A154&time_offset=3&zoom_factor=1&rows=7&show_messages=1&show_position=0&lpm=400&lang=de&pk_campaign=entwicklertools&pk_kwd=abfahrtstafel"></iframe>
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
export default Vvs;
