import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TimeToCook from '../../vids/timetocook.mp4'

const title = "1.2 - Breaking Bad";
const subtitle = "Type : Série";
const desc = "Drame, thriller, crime | Par Vince Giligan";



function BreakingBad() {

  return (
    
    <div>
        <div className="bg-[url(https://www.programme-tv.net/imgre/fit/~1~tel~2022~04~19~159ecfa6-8ac8-4d08-b369-120a6f26e5bf.jpeg/1200x600/crop-from/top/quality/80/breaking-bad-comment-faire-croire-a-tout-le-monde-que-vous-avez-vu-cette-serie-culte.jpg)] bg-cover bg-center ">
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
                        <li>Auteur : Vince Gilligan</li>
                        <li>Compositeur : Dave Porter</li>
                        <li>Éditeur : Sony Pictures Television</li>
                        <li>Titre : Breaking Bad </li>
                        <li>Date de réalisation : 20 janvier 2008</li>
                        <li>Technique/Support : Série télévisée</li>
                        <li>Genre :  Drame, thriller, crime</li>
                    </ul>
                
                </p>
            </div>

            <div id='description' className='pb-4'>
                <h1 className="text-secondary text-3xl font-bold">2 | Description</h1>
                <p className='text-base mt-3 ml-10'>
                Breaking Bad est une série télévisée captivante qui se passe dans l’univers sombre et tragique de Walter White, un professeur de chimie devenu fabricant de 
                méthamphétamine. Walter se lance dans le monde dangereux de la criminalité après avoir été diagnostiqué d’un cancer en phase terminale, déterminé à 
                subvenir aux besoins de sa famille. Au fil des saisons, on observe sa transformation en un redoutable chef de cartel, accompagné de son ancien élève Jesse Pinkman. 
                La série explore les thèmes de la moralité, de la désillusion et de la descente aux enfers, offrant une intrigue intense et une brillante interprétation 
                des personnages principaux.
                <br /><br />
                II interpella Jesse et lui proposa de devenir son partenaire. Ensemble, ils se lancèrent dans le <i>business</i>, White s'occupant de la production et Pinkman de la distribution. Voici un extrait du début de leur aventure :

                <video src={TimeToCook} width="600" height="300" className="video max-h-[600px] my-10" controls="controls" autoplay="false"></video>

                </p>
            </div>

            <div id='interprétation' className='pb-4'>
                <h1 className="text-secondary text-3xl font-bold">3 | Interprétation</h1>
                <p className='text-base mt-3 ml-10'>
                    Breaking Bad peut être interprété comme une exploration profonde de la dualité humaine et des conséquences de nos choix. La série met en lumière les forces qui peuvent pousser une personne en apparence ordinaire à embrasser une vie criminelle à travers le personnage de Walter White. Walter, initialement motivé par la nécessité de subvenir aux besoins de sa famille, succombe peu à peu à l'attrait du pouvoir et de l'argent, révélant ainsi une part sombre de sa personnalité jusqu'alors réprimée.
                    <br /><br />
                    Cette transformation met en évidence les dilemmes moraux auxquels il est confronté et soulève des questions sur les limites de la moralité individuelle. La relation entre Walter et Jesse est très spéciale et oscille entre mensonge, amitié et manipulation.


                </p>
            </div>

            
            <div id='jugementdegout' className='pb-4'>
                <h1 className="text-secondary text-3xl font-bold">4 | Jugement de goût</h1>
                <p className='text-base mt-3 ml-10'>
                Les personnages de Breaking Bad sont d'une profondeur remarquable. Walter White, interprété parfaitement par Bryan Cranston, nous fascine par sa transformation, passant d'un professeur de chimie timide et réservé à un criminel impitoyable. Dans la série, il se fait appeler Heisenberg, ce qui montre bien la division entre ses deux personnalités. Sa relation complexe avec Jesse Pinkman, joué brillamment par Aaron Paul, est un point culminant de la série, oscillant entre camaraderie, conflits et moments poignants.                  
                    <br /><br />
                    La réalisation est également un élément remarquable de la série. La direction artistique, les choix de mise en scène et la photographie contribuent à créer une atmosphère sombre et tendue, parfaitement en accord avec le ton de l'histoire. De plus, la bande sonore, composée par Dave Porter, est un véritable atout, ajoutant une dimension supplémentaire à chaque scène.


                </p>
            </div>
            <div id='jugementdegout' className='pb-4'>
                <h1 className="text-secondary text-3xl font-bold">5 | Focus</h1>
                <p className='text-base mt-3 ml-10'>
                Un personnage sur lequel j’aimerai m’attarder est Saul Goodman. Interprété par Bob Odenkirk, ce personnage apparaît un peu plus tard dans la série en tant qu’avocat. Il est l’avocat de Walter et Jesse et devient rapidement un allié précieux grâce à son sens aiguisé des affaires et sa propension à naviguer dans les eaux troubles de la légalité, Saul est connu pour ses méthodes peu conventionnelles et ses conseils astucieux.
<br /><br />
Son personnage, plutôt excentrique, avec ses costumes tape-à-l'œil et ses répliques sarcastiques, crée un contraste fascinant avec l’univers de la série.
<br /><br />
Au-delà de son aspect comique, il se révèle être un avocat astucieux et ingénieux, parvenant à trouver des solutions inattendues pour protéger ses clients et lui-même. Le personnage a été tellement apprécié par la communauté qu’un spin-off, réalisé avec Netflix, a été créé à son effigie, appelé Better Call Saul.

                </p>
            </div>

            <div id='jugementdegout' className='pb-4'>
                <h1 className="text-secondary text-3xl font-bold text-center">~ Bibliographie ~</h1>
                <p className='text-sm mt-3 ml-10'>
                    <ul>
                        <li>Wikipédia. « Breaking Bad » . fr.wikipedia.org, mai 2023, <a className='text-primary hover:underline' target='_blank' rel="noopener noreferrer" href="https://fr.wikipedia.org/wiki/Breaking_Bad">fr.wikipedia.org/wiki/Breaking_Bad</a>.</li>
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

export default BreakingBad;
