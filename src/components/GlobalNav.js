import React from "react";
import { Link } from "react-router-dom";

// function GlobalNav() {
//   return (
//     <div>

//       <nav>
//         <Link to="/">Home</Link> <Link to="about">About</Link>
//       </nav>
//     </div>
//   );
// }

// export default GlobalNav;
/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import NavLinkWebsite from "./NavLinkWebsite";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "about" },
  { name: "Services", href: "services" },
  { name: "Portfolio", href: "portfolio" },
  { name: "News", href: "news" },
  { name: "Contact", href: "contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function GlobalNav() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                  {navigation.map((item) => (
                      <div className="px-1 py-2" key={item.name}>
                  <NavLinkWebsite to={item.href} match>
                  {item.name}
                    </NavLinkWebsite>
                    </div>
                      ))}
                
                  
              
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="bg-gray-800 p-1 rounded-full text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <div
                    className={
                      "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none hidden"
                    }
                  >
                
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                      <li className="flex items-center">
                        <a
                          className="hover:text-blueGray-500  text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                          href="https://www.facebook.com/amin.lahiani.50/"
                          target="_blank"
                        >
                          <i className="text-blueGray-400 fab fa-facebook text-lg leading-lg  " />
                          <span className="lg:hidden inline-block ml-2">
                            Share
                          </span>
                        </a>
                      </li>

                      <li className="flex items-center">
                        <a
                          className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                          href="https://twitter.com/"
                          target="_blank"
                        >
                          <i className="text-blueGray-400 fab fa-twitter text-lg leading-lg " />
                          <span className="lg:hidden inline-block ml-2">
                            Tweet
                          </span>
                        </a>
                      </li>

                      <li className="flex items-center">
                        <a
                          className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                          href="https://github.com/aminlahiani/react-tailwindcss-static-wesite"
                          target="_blank"
                        >
                          <i className="text-blueGray-400 fab fa-github text-lg leading-lg " />
                          <span className="lg:hidden inline-block ml-2">
                            Star
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
