import React from 'react';

  
  export default function FileList({ list }) {
    return (
      <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

        <div className="-mx-4  overflow-hidden  sm:-mx-6 md:mx-0 md:rounded-lg p-3">
          <table className="min-w-full divide-y divide-gray-300 rounded-lg">
            <thead className="bg-darkbrown " >
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
            <tbody className="divide-y divide-light bg-secondary">
              {list.map((item) => (
                <tr key={item.support}>
                  <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-light sm:w-auto sm:max-w-none sm:pl-6">
                    <span className="font-extrabold">{item.name}</span>
                    <dl className="font-normal lg:hidden">
                      <dd className="mt-1 truncate text-light">{item.author}</dd>
                      <dd className="mt-1 truncate text-gray-200 sm:hidden">Type : {item.support}</dd>
                    </dl>
                  </td>
                  <td className="hidden px-3 py-4 text-sm text-gray-200 lg:table-cell">{item.author}</td>
                  <td className="hidden px-3 py-4 text-sm text-gray-200 sm:table-cell">{item.support}</td>
                  <td className="px-3 py-4 text-sm text-gray-200">{item.type}</td>
                  <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                    <a href={item.link} className="text-light font-extrabold hover:underline">
                      Voir
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
  