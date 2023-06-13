import React from 'react';

import { PaintBrushIcon, AcademicCapIcon, BuildingLibraryIcon, BookOpenIcon, GlobeEuropeAfricaIcon, LockOpenIcon } from "@heroicons/react/24/outline";
import schema from '../img/schema.png';
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { Link } from 'react-router-dom';

const features = [
  {
    name: 'La créativité',
    icon: PaintBrushIcon,
  },
  {
    name: 'Le savoir',
    icon: AcademicCapIcon ,
  },
  {
    name: 'Le patrimoine',
    icon: BuildingLibraryIcon,
  },
  {
    name: 'L\'histoire',
    icon: BookOpenIcon ,
  },
  {
    name: 'Les réferences culturelles',
    icon: PaintBrushIcon,
  },
  {
    name: 'L\'art',
    icon: PaintBrushIcon ,
  },
  {
    name: 'Notre opinion sur le monde',
    icon: GlobeEuropeAfricaIcon ,
  },
  {
    name: 'Ouverture d\'esprit',
    icon: LockOpenIcon ,
  },

]

export default function Features() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-primary"> - Début d'année</h2>
              <p className="mt-1 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Pour moi, la culture c'est...</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Avant le commencement de ce carnet culturel, je me suis posé la question suivante : "Qu'est-ce que la culture pour moi ?". 
              </p>
              <dl className="mt-5 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                <h3 className='text-lg font-semibold'>Pour moi, la culture c'est principalement :</h3>
                <div className="grid grid-cols-2 grid-rows-5 gap-2 md:gab-4">

                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline  text-gray-900">
                        <feature.icon className="absolute left-1 top-1 h-6 w-6 text-primary" aria-hidden="true" />
                        {feature.name}
                      </dt>
                    </div>

                  ))}
                </div>
              </dl>
              <div className="grid grid-cols-2 grid-rows-2 gap-4">
                <Link to="/perso" className="group inline-flex text-center items-center justify-center px-4 py-2 text-base font-medium rounded-md text-light bg-primary border-primary border-2 hover:bg-light hover:text-primary duration-500">
                <ChevronRightIcon className="h-6 w-6 text-light group-hover:text-primary" /> 1 - Exp. perso
                </Link>

                <Link to="/ecole" className=" group inline-flex text-center items-center justify-center px-4 py-2 text-base font-medium rounded-md text-light bg-secondary border-secondary border-2 hover:bg-light hover:text-secondary duration-500">
                <ChevronRightIcon className="h-6 w-6 text-light group-hover:text-secondary" /> 2 - Exp. école
                </Link>

                <Link to="/bilan" className="col-span-2 group inline-flex text-center items-center justify-center px-4 py-2 text-base font-medium rounded-md hover:text-light hover:bg-darkbrown border-darkbrown border-2 bg-light text-darkbrown duration-500">
                <ChevronRightIcon className="h-6 w-6 group-hover:text-light text-darkbrown" /> 3 - Bilan
                </Link>

              </div>
            </div>

          </div>
          <div className="flex column align-center justify-center">
            <img
              src={schema}
              alt="Schema de la culture pour moi"
              title="Schema de la culture pour moi à réaliser"
              className="w-[24em] max-w-none sm:w-[35rem] lg:-ml-0 select-none shadow-xl"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
