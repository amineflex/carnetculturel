import React from 'react';


import Footer from '../components/Footer';
import Header from '../components/Header';
import FileList from '../components/FileList';

const title = "1 - Mes expériences personnelles";
const subtitle = "Mon Carnet Culturel";
const desc = "Toutes les expériences que j'ai vécu hors de l'école";

const list = [
  { name: 'Zelda : Majora\'s Mask', author: 'Eiji Aonuma', support: 'Jeu vidéo', type: 'Action, Aventure', link: '/perso/zeldamm' },
  { name: 'Breaking Bad', author: 'Vince Gilligan', support: 'Série télévisé', type: 'Drame, thriller, crime', link: '/perso/breakingbad' },
  { name: 'Medina Oujda', author: 'Inconnu', support: 'Architecture', type: 'Marocain', link: '/perso/oujda' },
  { name: 'Born Pink World Tour', author: 'Black Pink', support: 'Concert', type: 'KPop', link: '/perso/blackpink' },
  { name: 'Zelda : Tears of the Kingdom', author: 'Eiji Aonuma', support: 'Jeu vidéo', type: 'Action/Aventure', link: '/perso/zeldatotk' },
]

function PersoPage() {

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

export default PersoPage;
