import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const title = "1.3 - Médina de Oujda";
const subtitle = "Type : architecture";
const desc = "Médina Oujda | Maroc";



function ZeldaMM() {

  return (
    
    <div>
        <div className="bg-[url(https://cdn.discordapp.com/attachments/1023181262460035113/1118137152421761034/bab-sidi-abdelwahab.png)] bg-cover bg-center ">
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
                        <li>Pays : Maroc</li>
                        <li>Ville : Oujda</li>
                        <li>Date : Fondée au 10/11e siècle</li>
                        <li>Technique/Support : Ville, architecture traditionnelles</li>
                        <li>Genre : Architecture marocaine</li>
                    </ul>
                
                </p>
            </div>

            <div id='description' className='pb-4'>
                <h1 className="text-secondary text-3xl font-bold">2 | Description</h1>
                <p className='text-base mt-3 ml-10'>
                La médina d'Oujda est l’une des villes les plus anciennes du Maroc. Située à l'est du pays, près de la frontière algérienne, elle est le chef-lieu de la préfecture d'Oujda-Angad.
                <br /><br />
                La Médina, comme on l'appelle, désigne le centre historique de Oujda, avec les anciens bâtiments au style médiéval conservé. Elle est délimitée par une muraille qui les séparent des nouveaux quartiers de Oujda, plus moderne. Elle possède des “bab” (porte en arabe) permettant de sortir de ce quartier. Sur la photo ci dessous, on voit “Bab Sidi Abdelwahab”
                <img src="https://cdn.discordapp.com/attachments/1023181262460035113/1118137152421761034/bab-sidi-abdelwahab.png" alt="Bab Sidi Abdelwahab" className="my-5 max-h-[400px]" />
                Construite en 1325, elle fait partie des trésors de la médina.
                Juste à côté de Bab Sidi Abdelwahab, il y’a l'église Saint-Louis, lieu de culte pour les chrétiens.
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Eglise_St_Louis%2Coujda%2CGhizlane_BOUMACHMACHA.jpg" alt="Eglise St Louis" className=' my-5 max-h-[400px]' />
                 Un peu plus loin se trouve le Souk Melilla, un marché où l'on achète des vêtements, que ça soit traditionnel ou moderne, en cuir, et toutes sortes d’objets. 
                <img src="https://media.routard.com/image/99/7/photo.1595997.jpg" alt="Souk Melila" className='max-h-[400px] my-5' />
                </p>
            </div>

            <div id='interprétation' className='pb-4'>
                <h1 className="text-secondary text-3xl font-bold">3 | Interprétation</h1>
                <p className='text-base mt-3 ml-10'>

                La ville est connue pour avoir de très fortes températures durant l’été (jusqu'à 45°C), dû à son climat méditéranéen. Son architecture a donc été adaptée naturellement pour que les habitants résistent à ce type de climat.
                <br /> <br />
                Les maisons sont construites en argile et en pierre pour protéger ses habitants de la chaleur. Les rues sont étroites et ne laissent passer que les piétons et les deux roues.



                </p>
            </div>

            
            <div id='jugementdegout' className='pb-4'>
                <h1 className="text-secondary text-3xl font-bold">4 | Jugement de goût</h1>
                <p className='text-base mt-3 ml-10'>
                J’aime beaucoup ce style d’architecture car il est chargé d’histoire. La médina a été créée y’a plusieurs siècles et représente un patrimoine pour le Maroc.
<br /> <br />
La ville est assez bien desservie, elle possède de nombreux restaurants traditionnels, il y a également beaucoup d’artisans faisant perpétuer les vêtements traditionnels cousus à la main.
<br /> <br />
J’y suis allée pendant mes vacances et j’ai bien apprécié découvrir les traditions de la région, et j’ai pu rencontrer des membres de ma famille qui m’ont accueilli les bras ouverts.

       
                </p>
            </div>
            <div id='jugementdegout' className='pb-4'>
                <h1 className="text-secondary text-3xl font-bold">5 | Focus</h1>
                <p className='text-base mt-3 ml-10'>
                J’aimerai m’attarder sur l’hospitalité et l’accueil que m'ont réservé les habitants. De façon générale, les Marocains sont très accueillants et très respectueux. Ils n’hésitent pas à aider et à servir un bon verre de thé accompagné d’un petit biscuit (généralement fait par les mamans et grands-mères).
                <br /> <br />

Dans la tradition marocaine, il est important de savoir accueillir son hôte et je trouve que l'on devrait tous s’inspirer de cela. Si jamais vous êtes prêt à affronter la chaleur, je vous recommande d’y faire un tour lors d’un voyage au Maroc.

                </p>
            </div>

            <div id='jugementdegout' className='pb-4'>
                <h1 className="text-secondary text-3xl font-bold text-center">~ Bibliographie ~</h1>
                <p className='text-sm mt-3 ml-10'>
                    <ul>
                        <li>« Oujda » . Wikipedia, juin 2023, <a className='text-primary hover:underline' target='_blank' rel="noopener noreferrer" href="https://fr.wikipedia.org/wiki/Oujda">fr.wikipedia.org/wiki/Oujda</a>.</li>
                        <li>« Bab Sidi Abdel Wahab - Oujda : Heures d’ouverture, Activités, Avis des visiteurs,  - Safarway 2023 »   <a className='text-primary hover:underline' target='_blank' rel="noopener noreferrer" href="https://www.safarway.com/fr/property/bab-sidi-abdel-wahab">www.safarway.com/fr/property/bab-sidi-abdel-wahab</a>.</li>
                        <li>« Melilla market - Oujda : Heures d’ouverture, Activités, Avis des visiteurs,  - Safarway 2023 »  <a className='text-primary hover:underline' target='_blank' rel="noopener noreferrer" href="https://www.safarway.com/fr/property/melilla-market">www.safarway.com/fr/property/melilla-market</a>.</li>

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
