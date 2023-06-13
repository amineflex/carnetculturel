import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const title = "1.1 - Zelda : Majora's Mask";
const subtitle = "Type : Jeu vidéo";
const desc = "Action/Aventure | Par Eiji Aonuma";



function ZeldaMM() {

  return (
    
    <div>
        <div className="bg-[url(https://images3.alphacoders.com/612/612032.jpg)]  bg-cover ">
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
                        <li>Auteur : Eiji Aonuma</li>
                        <li>Éditeur : Nintendo EAD</li>
                        <li>Titre : The Legend of Zelda : Majora’s Mask</li>
                        <li>Date de réalisation : 27 avril 2000</li>
                        <li>Technique/Support : Jeu vidéo interactif sur console de jeu</li>
                        <li>Genre : Action/aventure, réflexion, combat</li>
                    </ul>
                
                </p>
            </div>

            <div id='description' className='pb-4'>
                <h1 className="text-secondary text-3xl font-bold">2 | Description</h1>
                <p className='text-base mt-3 ml-10'>
                    Zelda Majora’s Mask est un jeu sorti en 2000. Ce jeu se caractérise par des références à la mort, à la dépression et d’autres sujets du style. 
                Il se déroule dans le monde de Termina, où nous incarnons le héros Link qui cherche sa meilleure amie de toujours.
                 Il croise un jeune enfant nommé Skull Kid ayant un masque particulier : le masque de Majora.
                  Celui-ci lui confère des pouvoirs maléfiques à quiconque qui le porte. 
                  <br /><br />
                    En voyant Link avancer sur sa jument Epona, il l'attaque et vola ses objets dont son Ocarina du temps et 
                  son destrier avant de lui jeter un sort le transformant en peste Mojo. Link va alors sortir de cette malédiction 
                  assez aisément mais une autre mésaventure va se dérouler. En effet, Skull Kid va utiliser ses pouvoirs pour faire écraser
                   la lune sur Termina. Link va alors utiliser son Ocarina du temps récupéré précédemment des mains de Skull Kid pour retourner
                    dans le passé pour l'empêcher d’arriver à ses fins. 
                Accompagné de sa fée, il va parcourir le monde pour sauver Termina de Skull Kid.
                </p>
            </div>

            <div id='interprétation' className='pb-4'>
                <h1 className="text-secondary text-3xl font-bold">3 | Interprétation</h1>
                <p className='text-base mt-3 ml-10'>
                Dans ce jeu, j’ai interprété un message que l’auteur essaye de passer. En effet, ce jeu est une allégorie du deuil du héros Link, 
                symbolisé par les 5 régions de Termina. Ils coïncident <a href="https://fr.wikipedia.org/wiki/Mod%C3%A8le_de_K%C3%BCbler-Ross" target='_blank' rel="noopener noreferrer" className='text-primary hover:underline'>avec le modèle de Kübler-Ross</a> :
                <ul className='list-disc text-secondary'>
                    <li className='py-2'>La première ville, nommée Bourg-clocher, représente l’allégorie du déni. En effet, le village et sa population sont sereins à l'idée de la fin du monde. Les habitants ne sont pas intrigués par la Lune qui se rapproche dangereusement d'eux. Pour certains même « la fin du monde est un mensonge ».</li>
                    <li className='py-2'>Les marais du Sud représentent l’allégorie de la colère. À la suite du passage de Skull Kid, ces marais sont empoisonnés et donc très dangereux. Au cœur de ces marais se trouve le Palais Mojo. Dans ce palais on peut trouver le Roi Mojo en colère car sa fille a disparu. Ils décident d'accuser un singe, ami de sa fille. Le Roi va alors tenter de l'exécuter mais Link arrive à temps en sauvant sa fille pour libérer le singe.</li>
                    <li className='py-2'>Le pic des Neiges représente le symbole du marchandage. Skull Kid a maudit cet endroit en gelant le domaine goron, peuple qui ne supporte pas le froid et qui vit dans la chaleur. La suite de l'aventure amènera Link dans la tombe de Darmani, le héros des Gorons. Ce dernier serait mort en tombant dans un ravin en poursuivant Skull Kid. En voyant Link, le fantôme du défunt croit avoir à faire à un magicien. En effet Link peut le voir grâce au monocle de vérité. Darmani lui demande donc s'il peut le ressusciter. Et c'est là qu'est le marchandage. Link finit par jouer le champ de l’apaisement (Voir extrait ci dessous), qui apaise l’âme de Darmani et le transforme en masque que Link va pouvoir utiliser pour obtenir des pouvoirs de Gorons.</li>
                    <iframe className='video my-10' width="560" height="315" src="https://www.youtube.com/embed/XDX4ZwUeOok" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <li className='py-2'>La Grande Baie représente l’allégorie de la dépression. La réchauffement climatique s'est installée sur ces terres. Ce qui est problématique pour le peuple Zora qui y vit. Lulu, une Zora, a donc confié ses œufs à un scientifique. Mais les Gerudos, peuple de femmes guerrières, ont volé ces œufs. Son petit ami Mikau est allé les récupérer, du moins c’est ce qu’il a essayé de faire, car à son arrivée, Link le trouve mourant, échoué sur la plage. Encore une fois, Link joue le champ de l’apaisement pour apaiser son âme et obtenir ses pouvoirs. Les œufs n'ont donc pas été sauvés, et plus tard en allant trouver Lulu, Link aura face à lui une Zora muette avec un « visage plein de tristesse » qui regarde l'horizon. Voilà la représentation de la dépression, quatrième étape du schéma de la mort annoncée.</li>
                    <li className='py-2'>Le Canyon d’Ikana représente la phase d’acceptation. C’est la dernière phase du deuil. Dans cette région, à l'est de Termina, la mort est omniprésente. On y trouve de nombreuses momies, des Effrois, ainsi qu'un cimetière, le seul présent dans le jeu. Les personnages de cette région symbolisent donc correctement l'acceptation. Dans cette région du jeu, le héros du temps monte jusqu'en haut de la Forteresse de Pierre. En son sommet se trouveront les flèches de Lumière. Le haut de cette tour représente le Paradis et le bas représente l’Enfer. Le milieu est simplement le purgatoire ou les âmes purgent.</li>
                </ul>

                <p className='mt-4 '>
                L’auteur nous plonge dans un univers sombre et mystérieux où règne une ambiance curieuse. Avec la musique des différents lieux, on ressent une adrénaline constante, surtout lorsque la lune est en train de s’écraser. La musique du jeu que j’ai préféré est celle du temple de Bois-Cascade, au marais du Sud. (voir ci-dessous) Je l’ai trouvée vraiment entraînante et elle se marie bien avec l’ambiance du temple.
                
                <iframe className='video my-10'  width="560" height="315" src="https://www.youtube.com/embed/rehm7pio9Uw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </p>

                </p>
            </div>

            
            <div id='jugementdegout' className='pb-4'>
                <h1 className="text-secondary text-3xl font-bold">4 | Jugement de goût</h1>
                <p className='text-base mt-3 ml-10'>
                J’ai bien apprécié la forte diversité des donjons et des biomes. L’histoire du jeu m’a paru intéressante et divertissante. Les musiques sont également bien réalisées et se marient parfaitement en fonction du scénario ou de la zone dans lequel on se trouve. Elle joue clairement un rôle dans l’ambiance globale du jeu.
                  <br /><br />
                  Le seul point faible que j’ai relevé lors de mon expérience serait les graphismes, datant du siècle dernier. C’est assez compréhensif vu l’ancienneté du jeu mais cela m’a un peu dérangé au début vu la différence de qualité avec les jeux contemporains. Avec le temps, on finit par s’y faire.
                </p>
            </div>
            <div id='jugementdegout' className='pb-4'>
                <h1 className="text-secondary text-3xl font-bold">5 | Focus</h1>
                <p className='text-base mt-3 ml-10'>
                Un élément que je voudrais approfondir sur l'œuvre est la qualité de la bande sonore du jeu. Celle-ci transmet parfaitement les émotions que perçoit le personnage principal. 
                Certaines sont énergiques, d’autres donnent un sentiment de mélancolie et elles sont tout le temps bien adaptés à la scène
                </p>
            </div>

            <div id='jugementdegout' className='pb-4'>
                <h1 className="text-secondary text-3xl font-bold text-center">~ Bibliographie ~</h1>
                <p className='text-sm mt-3 ml-10'>
                    <ul>
                        <li>« Modèle de Kübler-Ross ». Wikipedia, 18 novembre 2021, <a className='text-primary hover:underline' target='_blank' rel="noopener noreferrer" href="https://fr.wikipedia.org/wiki/Mod%C3%A8le_de_K%C3%BCbler-Ross">fr.wikipedia.org/wiki/Modèle_de_Kübler-Ross</a>.</li>
                        <li>« The Legend of Zelda : Majora’s Mask ». Wikipedia, 29 janvier 2022, <a className='text-primary hover:underline' target='_blank' rel="noopener noreferrer" href="https://fr.wikipedia.org/wiki/The_Legend_of_Zelda:_Majora%27s_Mask">https://fr.wikipedia.org/wiki/The_Legend_of_Zelda:_Majora's_Mask</a>.</li>
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
