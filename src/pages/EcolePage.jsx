import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import FileList from '../components/FileList';

const title = "2 - Mes expériences scolaires";
const subtitle = "Mon Carnet Culturel";
const desc = "Toutes les expériences que j'ai vécu à l'école";

const list = [
  { name: 'NAME', author: 'AUTEUR', support: 'SUPPORT', type: 'GENRE', link: '/ecole/#1' },

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
