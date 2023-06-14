import React from 'react';


import Features from '../components/Features';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CarouselImg from '../components/Carousel';
import CultureImage from '../img/culture.png'

const title = "Mon Carnet Culturel";
const subtitle = "Par Amine Benameur";
const desc = "« L’homme sans culture est un arbre sans fruit » - Antoine Rivarol";

function HomePage() {
  
  return (
    
    <div>
        <div className="bg-[url(https://www.zelda.com/tears-of-the-kingdom/_images/backgrounds/pattern-circles-brown.png)]">
          <div className="relative overflow-hidden">
        
          <Header title={title} subtitle={subtitle} desc={desc} />
        
    
            <div className="relative">
              <div className="absolute inset-0 flex flex-col" aria-hidden="true">
                <div className="flex-1" />
                <div className="flex-1 w-full bg-light" />
              </div>
              <div className="max-w-5xl mx-auto px-4 sm:px-6">
                { /*<img
                  className="relative rounded-3xl select-none shadow-lg sm:rounded-3xl sm:h-72 md:h-96 lg:w-full lg:h-full"
                  src={CultureImage}
                  alt="Switch"
                /> */}

                <CarouselImg />

              </div>
              <h2 className='text-lg text-black'>
                
                </h2>

            </div>
          </div>
    
        </div>

      <div className='overflow-hidden py-24 sm:py-32 bg-light'>
        <Features />

      </div>

      <Footer />

    </div>
  );
}

export default HomePage;
