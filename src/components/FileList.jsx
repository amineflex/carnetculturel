import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowSmallRightIcon } from '@heroicons/react/24/outline'

  
  export default function FileList({ list }) {
    return (
      <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

        <div className="-mx-4 overflow-hidden  sm:-mx-6 md:mx-0 rounded-lg p-3">
          <table className="min-w-full divide-y divide-light">
            <thead className="bg-darkbrown rounded-xl" >
              <tr>
                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-light sm:pl-6">
                  Titre
                </th>
                <th
                  scope="col"
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold text-light lg:table-cell"
                >
                  Auteur
                </th>
                <th
                  scope="col"
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold text-light sm:table-cell"
                >
                  Support
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-light">
                  Genre
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-darkbrown bg-light">
              {list.map((item) => (
                <tr key={item.support}>
                  <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-darkbrown sm:w-auto sm:max-w-none sm:pl-6">
                    <Link to={item.link} className="font-extrabold hover:text-secondary duration-300">{item.name}</Link>
                    <dl className="font-normal lg:hidden">
                      <dd className="mt-1 truncate text-darkbrown opacity-50">{item.author}</dd>
                      <dd className="mt-1 truncate text-darkbrown opacity-50 sm:hidden">{item.support}</dd>
                    </dl>
                  </td>
                  <td className="hidden px-3 py-4 text-sm text-darkbrown opacity-75 lg:table-cell">{item.author}</td>
                  <td className="hidden px-3 py-4 text-sm text-darkbrown opacity-75 sm:table-cell">{item.support}</td>
                  <td className="px-3 py-4 text-sm text-secondary ">{item.type}</td>
                  <td className="py-4 pl-3 pr-4 text-right  sm:pr-6">
                    <a href={item.link} className="group inline-flex text-primary font-extrabold hover:underline duration-300">
                      <ArrowSmallRightIcon className='w-6 h-6 ml text-primary opacity-75 group-hover:opacity-100' /> Voir
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
  