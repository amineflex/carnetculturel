import React from 'react';

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Expériences perso', href: '/perso' },
    { name: 'Expériences école', href: '/ecole' },
    { name: 'Bilan', href: '/bilan' },
]

function Nav(title, { currentPage }){
    return(

        <Popover>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-6 z-40  ">

          <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
            <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href="#">
                  <span className="sr-only">Workflow</span>
                  <img
                    className="h-8 w-auto sm:h-10"
                    src="https://www.zelda.com/tears-of-the-kingdom/images/heading-shape.svg"
                    alt=""
                  />
                </a>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="bg-light rounded-md p-2 inline-flex items-center justify-center text-secondary hover:text-light hover:bg-secondary focus:outline-none duration-500">
                    <span className="sr-only">Open main Bars3</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="hidden md:flex md:space-x-10">
            {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`font-medium text-gray-400 pb-1 duration-500 ${
                    item.href === currentPage ? 'border-b-2 border-primary text-primary' : 'border-transparent'
                  }`}
                >
                  {item.name}
                </a>
              ))}

            </div>
            <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
              <span className="inline-flex rounded-md shadow">
                <a
                  href="#login"
                  className="inline-flex items-center px-4 py-2 text-base font-medium rounded-md text-white bg-secondary border-transparent border-3  hover:border-primary  duration-500"
                >
                  Se connecter
                </a>
              </span>
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-md bg-light ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://www.zelda.com/tears-of-the-kingdom/images/heading-shape.svg"
                    alt=""
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
                    <span className="sr-only">Close main Bars3</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-100 hover:bg-secondary"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <a
                href="#"
                className="block w-full px-5 py-3 text-center font-medium text-primary bg-light bg-opacity-75 hover:bg-opacity-100 hover:text-secondary duration-500"
              >
                Se connecter
              </a>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    )
}

export default Nav;