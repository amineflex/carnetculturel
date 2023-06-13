import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import SimpleVid from '../../vids/simple.mp4'

const title = "2.4 - Simple";
const subtitle = "Type : Thêatre";
const desc = "Théâtre le Manège | De Olivier Hespel";


function Simple() {

  return (
    
    <div>
        <div className="bg-[url(https://cdn.discordapp.com/attachments/1023181262460035113/1118202904344535071/image.png)] bg-cover bg-center">
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
                        <li>Auteur/dramaturge : Olivier Hespel</li>
                        <li>Metteur en scène : Ayelen Parolin</li>
                        <li>Mercredi 14 décembre à 20h</li>
                        <li>Titre : Simple </li>
                        <li>Compagnie théâtrale : RUDA asbl</li>
                        <li>Technique/Support : Thêatre</li>
                        <li>Lieu de représentation : Théâtre le Manège (MARS)</li>
                    </ul>
                
                </p>
            </div>

            <div id='description' className='pb-4'>
                <h1 className="text-secondary text-3xl font-bold">2 | Description</h1>
                <p className='text-base mt-3 ml-10'>

                Simple est une pièce de théâtre mise en scène par Ayelen Parolin. La pièce met en scène trois danseurs Baptiste Cazaux, Piet Defrancq et Daan Jaartsveld qui sont habillés dans des combinaisons colorées et psychédéliques.
<br /><br />
La pièce explore la simplicité en usant du mouvement comme force motrice. La pièce fait appel à la naïveté, l’instinct et l’enfance, et à un imaginaire grand ouvert à l’impromptu. Les danseurs sautillent et répètent des gestes sonores sur un fond de scène rempli de couleurs criardes. La particularité de cette pièce de théâtre est qu’elle ne dispose pas de musiques, nous n’entendons que les bruits de pas effrénées des trois danseurs sur le sol blanc qui contraste avec le décor aux couleurs extravagantes. Voici un extrait pour mieux voir de quoi il s’agit :

<video src={SimpleVid} width="600" height="300" className="video max-h-[400px] my-10" controls="controls" autoplay="false" />

                </p>
            </div>

            <div id='interprétation' className='pb-4'>
                <h1 className="text-secondary text-3xl font-bold">3 | Interprétation</h1>
                <p className='text-base mt-3 ml-10'>
 
                Comme son nom l’indique, Simple est une pièce de théâtre très très épurée et minimaliste.
                <br /><br />
                On suit trois comédiens qui dansent sans musique, ayant pour seul son les bruits de pas qui dégage un semblant de rythme. Le sol blanc éclatant déteint complétement avec les murs colorés et saturés.
                <br /><br />
                Ce qui débute par une danse finit en anarchie totale, ou les trois danseurs finissent par détruire tous les objets qu’ils ont à leur disposition.






                </p>
            </div>

            
            <div id='jugementdegout' className='pb-4'>
                <h1 className="text-secondary text-3xl font-bold">4 | Jugement de goût</h1>
                <p className='text-base mt-3 ml-10'>

                Je n’ai pas beaucoup apprécié la pièce, je l’ai trouvée très vide et pas très intéressante. Le contenu est faible et les bruits de pas forcés à répétition des acteurs, bien qu’ils aient été bien réalisés sur le plan technique, a commencé à m'agacer fortement après quelques minutes.
                <br /><br />
                Le seul moment que j’ai un peu apprécié de la pièce était la période d’anarchie à la fin, qui a réussi à me divertir un peu.


                </p>
            </div>
            <div id='focus' className='pb-4'>
                <h1 className="text-secondary text-3xl font-bold">5 | Focus</h1>
                <p className='text-base mt-3 ml-10'>
   
                Un point sur lequel je m’attarderai est la décoration de la pièce que j’ai apprécié, le contraste entre l’arrière plan aux couleurs criardes et le sol blanc donne un effet de contraste que j’ai beaucoup apprécié.


                </p>
            </div>

            <div id='bibliographie' className='pb-4'>
                <h1 className="text-secondary text-3xl font-bold text-center">~ Bibliographie ~</h1>
                <p className='text-sm mt-3 ml-10'>
                    <ul>
                        <li>« SIMPLE Ayelen Parolin » . Théâtre National, <a className='text-primary hover:underline' target='_blank' rel="noopener noreferrer" href="https://www.theatrenational.be/fr/activities/2671-simple-ayelen-parolin">www.theatrenational.be/fr/activities/2671-simple-ayelen-parolin</a>.</li>
                        <li>« Présentation - Simple - Ayelen Parolin » theatre-contemporain.net <a className='text-primary hover:underline' target='_blank' rel="noopener noreferrer" href="https://www.theatre-contemporain.net/spectacles/Simple-33064/ensavoirplus">www.theatre-contemporain.net/spectacles/Simple-33064/ensavoirplus</a>.</li>
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

export default Simple;
