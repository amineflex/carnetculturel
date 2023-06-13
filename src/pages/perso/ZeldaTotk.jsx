import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const title = "1.5 - Zelda : Tears of the Kingdom";
const subtitle = "Type : Jeu vidéo";
const desc = "Action/Aventure | Par Eiji Aonuma";



function ZeldaTotk() {
  return (
    
    <div>
        <div className="bg-[url(https://cdn.discordapp.com/attachments/1023181262460035113/1117180488650600498/zeldatotk.jpg)] bg-cover bg-bottom ">
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
                        <li>Producteur : Eiji Aonuma</li>
                        <li>Compositeur : Manaka Kataoka</li>
                        <li>Éditeur : Nintendo EPD</li>
                        <li>Titre : The Legend of Zelda : Tears of the Kingdom </li>
                        <li>Date de réalisation : 12 mai 2023</li>
                        <li>Technique/Support : Jeu vidéo | Nintendo Switch</li>
                        <li>Genre :  Action/aventure, réflexion, combat</li>
                    </ul>
                
                </p>
            </div>

            <div id='description' className='pb-4'>
                <h1 className="text-secondary text-3xl font-bold">2 | Description</h1>
                <p className='text-base mt-3 ml-10'>
                    
Zelda TotK est un jeu vidéo qui fait suite à Zelda Breath of the Wild. On incarne Link, qui, après les événements de BotW, fait face à un monde en ruines avec Hyrule entier à reconstruire.
<br /><br />
L’aventure débute lorsque Link, accompagné de la princesse Zelda, fait des fouilles archéologiques dans une grotte découverte sous le château. Les deux personnages trouvent une tombe ou semble être un monstre démoniaque (on découvrira par la suite qu’il se nomme Ganondorf) scellé par une main. Ils s’approchent lorsque soudain, le sol s’écroule et Zelda tombe avec Link et le roi Démon. 
<br /><br />
Notre personnage est attrapé par chance par une main qui scellait auparavant Ganondorf. S'ensuit dont une quête pour retrouver Zelda, ou Link parcours Hyrule à la recherche d'indices, accompagné de chercheurs archéologues du clan Sheikah.

                </p>
            </div>

            <div id='interprétation' className='pb-4'>
                <h1 className="text-secondary text-3xl font-bold">3 | Interprétation</h1>
                <p className='text-base mt-3 ml-10'>
                Dans l'œuvre, on découvre un Link perdu et affaibli, dans plusieurs nouveaux environnements comme des îles volantes ou les profondeurs d’Hyrule. On suit le personnage principal à travers une aventure à la recherche de sa dulcinée, aux quatres coins de la map.
    <br /><br />
Via cette aventure, Link prend en force et explore des donjons diverses afin de récolter plus d’indices. A l’aide de plusieurs protagonistes des peuples Piafs (oiseaux humanoïdes), Zoras (peuple poisson), Gerudos (femmes du désert) et Goron (hommes trapues). La diversité des différents environnements donne une impression de voyage à travers une multitude de quêtes.



                </p>
            </div>

            
            <div id='jugementdegout' className='pb-4'>
                <h1 className="text-secondary text-3xl font-bold">4 | Jugement de goût</h1>
                <p className='text-base mt-3 ml-10'>
    
J’ai beaucoup apprécié traverser cette aventure, que j’attendais après avoir joué au premier opus. Je trouve qu’il y a une grande amélioration au niveau de la diversité, notamment l’ajout des îles volantes et les nouveaux donjons sont bien plus développés contrairement aux anciens qui étaient fades et trop similaires.
<br /><br />
Je tire de cette œuvre que du positif, tout est bien réalisé, du level-design à la musique en passant par les environnements. Les nouveaux pouvoirs sont utiles et offrent une diversité de possibilités à utiliser pour naviguer dans ce monde vaste.




                </p>
            </div>
            <div id='jugementdegout' className='pb-4'>
                <h1 className="text-secondary text-3xl font-bold">5 | Focus</h1>
                <p className='text-base mt-3 ml-10'>
                J'aimerais insister sur les nouveaux pouvoirs du jeu, et en particulier “Emprise”. Celui-ci nous permet de déplacer et de fusionner des objets dans le jeu. Il offre tellement de possibilités et on peut même créer des véhicules en tout genre comme des planeurs motorisés, des voitures, ou des robots mécaniques.
       
                </p>
            </div>

            <div id='jugementdegout' className='pb-4'>
                <h1 className="text-secondary text-3xl font-bold text-center">~ Bibliographie ~</h1>
                <p className='text-sm mt-3 ml-10'>
                    <ul>
                        <li>Wikipédia. « The Legend of Zelda: Tears of the Kingdom » . fr.wikipedia.org, mai 2023, <a className='text-primary hover:underline' target='_blank' rel="noopener noreferrer" href="https://fr.wikipedia.org/wiki/The_Legend_of_Zelda:_Tears_of_the_Kingdom">fr.wikipedia.org/wiki/The_Legend_of_Zelda:_Tears_of_the_Kingdom</a>.</li>
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

export default ZeldaTotk;
