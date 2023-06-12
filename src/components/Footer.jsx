import React from 'react';

export default function Footer(){
    return(
        
        <div className='bg-[url(https://www.zelda.com/tears-of-the-kingdom/_images/backgrounds/pattern-circles-brown.png)] text-light py-8 sm:py-12 mx-auto'>
            

          <div className='flex flex-col text-center w-full pt-2 pb-2'>

              <h1 className='text-2xl sm:text-3xl font-extrabold flex align-center justify-center'> 
                 <img src='https://www.zelda.com/tears-of-the-kingdom/images/heading-shape.svg' width={"33px"} height={"28px"} alt='shape' />
                 <span className='px-5'>Carnet Culturel <small>| Site développé par Amine </small> </span> 
                 <img src='https://www.zelda.com/tears-of-the-kingdom/images/heading-shape.svg' width={"33px"} height={"28px"} alt='shape' />
              </h1>
                <p className="text-light opacity-60 mt-3">
                    Année scolaire 2021-2022 | Ursulines Mons
                    <br />
                    <small>Mme Chalet - Français</small>
                </p>

          </div>
        </div>
    )
}