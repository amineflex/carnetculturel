import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const title = "2.3 - Mercure";
const subtitle = "Type : Roman";
const desc = "De Amélie Nothomb";

function ZeldaMM() {

  return (
    
    <div>
        <div className="bg-[url(https://www.francebleu.fr/s3/cruiser-production/2023/03/7d3d7875-cacb-45ba-ba20-f4f40e535ea2/1200x680_sc_mercure.jpg)] bg-cover bg-center">
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
                        <li>Auteur : Amélie Nothomb</li>
                        <li>Titre : Mercure</li>
                        <li>Maison d'édition : Albin Michel</li>
                        <li>Date de réalisation : 1998 </li>
                        <li>Technique/Support : Roman</li>
                    </ul>
                
                </p>
            </div>

            <div id='description' className='pb-4'>
                <h1 className="text-secondary text-3xl font-bold">2 | Description</h1>
                <p className='text-base mt-3 ml-10'>

                Sur une île isolée, il existe une règle mystérieuse qui interdit toute présence de reflets. C'est là que réside un vieux monsieur énigmatique, accompagné d'une jeune fille. Leur tranquillité est soudainement perturbée par l'arrivée inattendue d'une infirmière, dont la mission est de prendre soin de la jeune fille. Au fil du temps, une relation de plus en plus étroite se développe entre ces femmes, permettant à l'infirmière de découvrir progressivement les éléments intrigants d'un mystère profondément ancré dans l'île. Des révélations dramatiques se profilent alors, bouleversant leur existence. 
                <br /><br />
                Les secrets bien gardés par le vieil homme plongent l'histoire dans une complexité troublante, soulevant des questions essentielles quant à la véritable nature de la loi étrange qui régit cette île énigmatique.


                </p>
            </div>

            <div id='interprétation' className='pb-4'>
                <h1 className="text-secondary text-3xl font-bold">3 | Interprétation</h1>
                <p className='text-base mt-3 ml-10'>
 

                Des thèmes complexes et fascinants tels que l’identité, la perception de soi et la quête de vérité sont abordés dans le roman. L’autrice nous emmène dans un récit mystérieux où une loi étrange interdit tout reflet sur une île isolée. La peur de confronter sa propre image et sa vérité intérieure est représentée par cette prohibition. Un vieil homme et une jeune fille semblent trouver refuge dans cette réalité parallèle qu’ils ont créé, pour échapper à la vraie vie.
                <br /><br />
                Cet équilibre précaire est perturbé par l’arrivée  Françoise, l’infirmière qui soigne la jeune fille qui révèle lentement un mystère dissimulé. Les relations entre les personnages révèlent des secrets et des drames cachés, remettant en question la vérité sur cette île.



                </p>
            </div>

            
            <div id='jugementdegout' className='pb-4'>
                <h1 className="text-secondary text-3xl font-bold">4 | Jugement de goût</h1>
                <p className='text-base mt-3 ml-10'>

                J’ai beaucoup apprécié cette lecture du roman Mercure. La façon dont Amélie Nothomb écrit le récit est particulière et différente des romans qu’on a l’habitude de lire. 
                L’intrigue du livre est captivante et je n’arrivais pas à arrêter ma lecture, voulant à tout prix connaître la suite du récit.
                <br /><br />
                J’ai apprécié le fait que le roman soit ni trop court, ni trop long, parfait pour suivre l’histoire sans se lasser de détails inutiles.

                </p>
            </div>
            <div id='focus' className='pb-4'>
                <h1 className="text-secondary text-3xl font-bold">5 | Focus</h1>
                <p className='text-base mt-3 ml-10'>
   
                Un point sur lequel j’aimerai souligner est le fait que ce livre comporte deux fins différentes, ce qui est assez rare. Je les ai trouvés tous deux pertinentes dans la continuité du récit et gardent la cohérence de l’intrigue. Je vais ici éviter de “divulgâcher” les fins et vous laissez choisir quelle est la meilleure fin. 



                </p>
            </div>

            <div id='bibliographie' className='pb-4'>
                <h1 className="text-secondary text-3xl font-bold text-center">~ Bibliographie ~</h1>
                <p className='text-sm mt-3 ml-10'>
                    <ul>
                        <li>« Mercure ». Wikipedia, juin 2023, <a className='text-primary hover:underline' target='_blank' rel="noopener noreferrer" href="https://fr.wikipedia.org/wiki/Mercure_(roman)">fr.wikipedia.org/wiki/Mercure_(roman)</a>.</li>
                        <li>« Amélie Nothomb ». Wikipedia, juin 2023, <a className='text-primary hover:underline' target='_blank' rel="noopener noreferrer" href="https://fr.wikipedia.org/wiki/Am%C3%A9lie_Nothomb">fr.wikipedia.org/wiki/Amélie_Nothomb</a>.</li>
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

export default ZeldaMM;
