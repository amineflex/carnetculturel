import React from 'react';


import Header from '../components/Header';
import Footer from '../components/Footer';

const title = "3 - Bilan de l'année";
const subtitle = "Qu'est ce que la culture ?";
const desc = "Texte résumant ce qu'est la culture pour moi, après toutes ces expériences culturelles vécues au cours de ces deux dernières années.";



function ZeldaMM() {

  return (
    
    <div>
        <div className="bg-[url(https://cdn.discordapp.com/attachments/1023181262460035113/1117852326460395541/wallpaperflare.com_wallpaper.jpg)] bg-center ">
            <div className='bg-black bg-opacity-75'>
                <div className="relative overflow-hidden">
                    <Header title={title} subtitle={subtitle} desc={desc} />
                </div>
          </div>
        </div>

      <div className='overflow-hidden py-10 bg-light'>
        <div className="max-w-6xl px-6 mx-auto sm:px-6 py-2 pb-4 bg-darkbrown rounded-xl">
            <div className="leading-loose text-lg my-6 px-6 text-light">
                


            


            </div>

        </div>
      </div>

      <Footer />

    </div>
  );
}

export default ZeldaMM;
