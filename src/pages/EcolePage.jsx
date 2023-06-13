import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import FileList from '../components/FileList';

const title = "2 - Mes expériences scolaires";
const subtitle = "Mon Carnet Culturel";
const desc = "Toutes les expériences que j'ai vécu à l'école";

const list = [
  { name: 'Le songe d\'une nuit d\'été', author: 'Shakespeare/D\'Hoop', support: 'Théatre', type: 'Comédie/Fantasy', link: '/ecole/songe' },
  { name: 'Simone, le voyage du siècle', author: 'Olivier Dahan', support: 'Film', type: 'Biopic', link: '/ecole/simone' },
  { name: 'Mercure', author: 'Amélie Nothomb', support: 'Roman', type: 'Livre', link: '/ecole/mercure' },
  { name: 'Simple', author: 'Olivier Hespel/Ayelen Parolin', support: 'Thêatre', type: '/', link: '/ecole/simple' },



]

function EcolePage() {

  return (
    
    <div>
        <div className="bg-[url(https://www.zelda.com/tears-of-the-kingdom/_images/backgrounds/pattern-circles-brown.png)]">
          <div className="relative overflow-hidden">
            <Header title={title} subtitle={subtitle} desc={desc} />
          </div>
    
        </div>

      <div className='overflow-hidden py-10 bg-light'>
        <FileList list={list} />
      </div>

      <Footer />

    </div>
  );
}

export default EcolePage;
