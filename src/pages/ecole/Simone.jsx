import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const title = "2.2 - Simone, le voyage du siècle";
const subtitle = "Type : Film";
const desc = "Biopic | Par Olivier Dahan";



function ZeldaMM() {

  return (
    
    <div>
        <div className="bg-[url(https://bocir-prod-bucket.s3.amazonaws.com/medias/S3E2PZgG71/image/phpTMly8a1665560341123.jpg)] bg-cover bg-center">
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
                        <li>Réalisateur : Olivier Dahan</li>
                        <li>Compositeur : Olvon Yacob</li>
                        <li>Société de production : Marvelous Production</li>
                        <li>Titre : Simone, le voyage du siècle</li>
                        <li>Date de réalisation : 12 octobre 2022 </li>
                        <li>Technique/Support : Film/Cinéma</li>
                        <li>Genre : Biopic/Biographique</li>
                        <li>Acteurs principaux : Elsa Zylberstein, Rebecca Marder, Élodie Bouchez</li>
                    </ul>
                
                </p>
            </div>

            <div id='description' className='pb-4'>
                <h1 className="text-secondary text-3xl font-bold">2 | Description</h1>
                <p className='text-base mt-3 ml-10'>

                "Simone, le voyage du siècle" est un film biographique réalisé par Olivier Dahan, avec Elsa Zylberstein et Rebecca Marder. Le film dépeint la vie de Simone Veil, une femme politique française de premier plan qui s'est battue pour les droits des femmes et des malades à une époque où les gouvernements étaient conservateurs. Née dans une famille juive, elle est déportée à Auschwitz à l'âge de 16 ans, durant la Shoah, où elle perd son père, son frère et sa mère.

                </p>
            </div>

            <div id='interprétation' className='pb-4'>
                <h1 className="text-secondary text-3xl font-bold">3 | Interprétation</h1>
                <p className='text-base mt-3 ml-10'>
                Dans le film, on suit le parcours de Simone, qui est engagée dans la politique en tant que femme politique dans l’Assemblée Générale en France. Dans un monde du siècle dernier très conservateur, elle a apporté énormément de droits pour les femmes et est considérée comme une figure importante du féminisme.
                <br /><br />
                Une de ses mesures les plus importantes de sa carrière est la légalisation de l’Interruption Volontaire de Grossesse (plus communément appelée IVG ou avortement) en 1974, alors qu’elle avait été rendue illégale en 1920 et était considérée comme un crime
                <br /><br />
                Durant le film, on verra des flashbacks de l’époque où Simone a été déportée, car elle est Juive. Toute sa famille se cachait de la police, qui portaient sous ordre des Nazis dans des camps. Elle finit à Auschwitz-Birkenau, célèbre camp de concentration situé en Pologne.
                <br /><br />
                Elle réussit miraculeusement à survivre, même si elle revient dans un sale état car les prisonniers du camp étaient tous mal nourris. Après ce parcours horrible, elle décide de reprendre sa vie en main et poursuis des études de droit, en espérant devenir avocate. Elle finit par devenir magistrate, ce qui a choqué beaucoup de monde car c’était une profession d’hommes uniquement à cette époque.
                </p>
            </div>

            
            <div id='jugementdegout' className='pb-4'>
                <h1 className="text-secondary text-3xl font-bold">4 | Jugement de goût</h1>
                <p className='text-base mt-3 ml-10'>
                J’ai apprécié regarder ce film et je l’ai trouvé assez intéressant, j’ai aimé parcourir la vie de Simone et de connaître son parcours avant et pendant sa carrière politique. C’était en accord avec le chapitre sur la Seconde Guerre mondiale vue en cours d’histoire avec les atrocités commises par le régime nazi comme la déportations des juifs.
                <br /><br />
                Le film était bien réalisé et bien rythmé, avec de bonnes transitions entre l’enfance de Simone, sa déportation et puis son combat pour défendre les droits des femmes en politique.

       
                </p>
            </div>
            <div id='focus' className='pb-4'>
                <h1 className="text-secondary text-3xl font-bold">5 | Focus</h1>
                <p className='text-base mt-3 ml-10'>

                J’aimerais m’appuyer sur la performance des acteurs qui nous immergent directement dans l’histoire de Simone. Les émotions des Juifs prisonniers dans les camps de concentration, comme la peur, la tristesse, le désespoir se transmettent à la perfection sur le grand écran. Le film est une biographie de faits réels et donc nous transmet la culture générale.

                </p>
            </div>

            <div id='bibliographie' className='pb-4'>
                <h1 className="text-secondary text-3xl font-bold text-center">~ Bibliographie ~</h1>
                <p className='text-sm mt-3 ml-10'>
                    <ul>
                        <li>Loi Veil : 40 ans et un combat toujours d’actualité ! <a className='text-primary hover:underline' target='_blank' rel="noopener noreferrer" href="https://www.cite-sciences.fr/fr/au-programme/lieux-ressources/bibliotheque/chercher-trouver/ressources-en-ligne/dossiers/loi-veil-40-ans-et-un-combat-toujours-dactualite">www.cite-sciences.fr/fr/au-programme/lieux-ressources/bibliotheque/chercher-trouver/ressources-en-ligne/dossiers/loi-veil-40-ans-et-un-combat-toujours-dactualite</a>.</li>
                        <li>AlloCine. « Simone, le voyage du siècle » . <a className='text-primary hover:underline' target='_blank' rel="noopener noreferrer" href="https://www.allocine.fr/film/fichefilm_gen_cfilm=271339.html.">www.allocine.fr/film/fichefilm_gen_cfilm=271339.html.</a>.</li>
                        <li>« Simone Veil ». Wikipedia, mai 2023, <a className='text-primary hover:underline' target='_blank' rel="noopener noreferrer" href="https://fr.wikipedia.org/wiki/Simone_Veil">fr.wikipedia.org/wiki/Simone_Veil</a>.</li>
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
