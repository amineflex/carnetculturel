import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const title = "1.4 - Lucie et les Papillons";
const subtitle = "Type : statue";
const desc = "Art contemporain | Par David Mesguich";



function Lucie() {

  return (
    
    <div>
        <div className="bg-[url(https://www.visitmons.be/sites/visitmons/files/styles/gallery_lightbox/public/content/images/lahlv_lucie_et_les_papillonsville_de_mons_oswald_tlr_40.jpg?itok=EI_pwEHf)] bg-cover bg-center ">
            <div className='bg-black bg-opacity-75'>
                <div className="relative overflow-hidden">
                    <Header title={title} subtitle={subtitle} desc={desc} />
                </div>
          </div>
        </div>

      <div className='overflow-hidden py-10 bg-light'>
        <div className="max-w-6xl px-2 mx-auto sm:px-6 py-2 pb-4 bg-darkbrown rounded-xl">
            <div className="leading-loose text-lg my-6 px-6 text-light">
                
            <div id='identification' className='pb-4'>
                <h1 className="text-secondary text-3xl font-bold">1 | Identification</h1>
                <p className='text-base mt-3 ml-10'>
                    <ul className='list-disc'>
                        <li>Auteur : David Mesguich</li>
                        <li>Nom : Lucie et les papillons</li>
                        <li>Date de réalisation : 30 juin 2020</li>
                        <li>Technique/Support : Statue</li>
                        <li>Localisation : Square Roosevelt, Mons</li>
                    </ul>
                
                </p>
            </div>

            <div id='description' className='pb-4'>
                <h1 className="text-secondary text-3xl font-bold">2 | Description</h1>
                <p className='text-base mt-3 ml-10'>

                Cette statue, située à côté de la collégiale Sainte-Waudru et proche de la Gare de Mons, représente une fille qui casse une paire de ciseau. 
                <br /> <br />
                David Mesguich nous présente ici une œuvre majeure qui symbolise l'innocence et la pureté de l'enfance, à l'image de sa fille Lucie. L'école de Promotion Sociale Jemappes-Quiévrain, Façozinc et WAX Architecture ont collaboré et participé à la construction urbaine.

                L’artiste explique son œuvre : <em className='text-secondary opacity-75'>“[...] Je suis devenu papa et je me suis rappelé ces moments où l'amour pouvait échouer. J'ai alors pensé que je ne souhaitais pas que mon enfant puisse un jour souffrir pareille situation et j'ai voulu réaliser quelque chose qui dirait exactement le contraire. C'est à ce moment-là que l'image de ma fille Lucie entourée de papillons, cassant une paire de ciseau a pris corps ; ciseaux brisés pour que leurs ailes ne puissent jamais être coupées. À une époque où tout est fragile et éphémère, cette sculpture se veut symbole de résistance et de durée ; espérer ne suffit pas il faut décider.”</em>                
                <img className='my-10 video' src="https://www.visitmons.be/sites/visitmons/files/styles/gallery_lightbox/public/content/images/lahlv_lucie_et_les_papillonsville_de_mons_oswald_tlr_40.jpg?itok=EI_pwEHf" alt="Lucie" />
                </p>
            </div>

            <div id='interprétation' className='pb-4'>
                <h1 className="text-secondary text-3xl font-bold">3 | Interprétation</h1>
                <p className='text-base mt-3 ml-10'>



                L’auteur exprime sous la forme d’une image un symbole de résistance. Il fait passer un message fort “espérer ne suffit pas il faut décider”. 
                <br /> <br />
                La statue est à l’image de la fille de David Mesguich, Lucie. Elle est donc associé à une image d’innocence et de pureté voire même de fragilité face au monde.


                </p>
            </div>

            
            <div id='jugementdegout' className='pb-4'>
                <h1 className="text-secondary text-3xl font-bold">4 | Jugement de goût</h1>
                <p className='text-base mt-3 ml-10'>

                J’apprécie bien la statue “Lucie et ses papillons” et je trouve que c’est une bonne initiative d’en construire pour raviver le centre historique de Mons. Cela fait plaisir de voir la ville s’investir dans l’art, surtout qu’en 2015, elle a été élue capitale européenne de la culture.
                <br /> <br />
                J’aime également le sens apporté à la statue, que je croise presque tous les jours en allant à la gare de Mons. Je n’avais jamais trop prêté attention à celle- ci mais après avoir lu la description apportée par David Mesguich, je connais désormais la signification de la statue, ce qui la rend plus belle à mes yeux.

       
                </p>
            </div>
  

            <div id='jugementdegout' className='pb-4'>
                <h1 className="text-secondary text-3xl font-bold text-center">~ Bibliographie ~</h1>
                <p className='text-sm mt-3 ml-10'>
                    <ul>
                        <li> « Lucie et les papillons / David Mesguich » . visitMons - Portail Touristique Officiel de la Région de Mons, 4 novembre 2020 <a className='text-primary hover:underline' target='_blank' rel="noopener noreferrer" href="https://www.visitmons.be/a-voir-a-faire/l-art-habite-la-ville/les-oeuvres/lucie-et-les-papillons-david-mesguich">www.visitmons.be/a-voir-a-faire/l-art-habite-la-ville/les-oeuvres/lucie-et-les-papillons-david-mesguich</a>.</li>
                        <li>David Mesguich, Making of de « Lucie et les Papillons » — Artotheque Mons. <a className='text-primary hover:underline' target='_blank' rel="noopener noreferrer" href="https://www.artotheque.mons.be/events/david-mesguich-making-off-de-lucie-et-les-papillons">www.artotheque.mons.be/events/david-mesguich-making-off-de-lucie-et-les-papillons</a>.</li>

                    </ul>
                </p>
            </div>

            </div>

        </div>
      </div>

      <Footer />

    </div>
  );
}

export default Lucie;
