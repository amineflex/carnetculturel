import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const title = "2.5 - Huis Clos";
const subtitle = "Type : Pièce de théâtre";
const desc = "De Jean-Paul Sartre";

function HuisClos() {

  return (
    
    <div>
        <div className="bg-[url(https://frenchintellectuals.files.wordpress.com/2020/12/ap_437220028307-e1526067604790.jpg?w=1600&h=900&crop=1)] bg-cover bg-center">
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
                        <li>Auteur : Jean Paul Sartre</li>
                        <li>Titre : Huis-Clos</li>
                        <li>Maison d'édition : Folio</li>
                        <li>Date de réalisation : fin 1943  </li>
                        <li>Technique/Support : Pièce de théâtre</li>
                    </ul>
                
                </p>
            </div>

            <div id='description' className='pb-4'>
                <h1 className="text-secondary text-3xl font-bold">2 | Description</h1>
                <p className='text-base mt-3 ml-10'>

                "Huis-Clos", pièce de théâtre de Jean-Paul Sartre écrite en 1944, est une œuvre qui met en scène trois personnages coincés dans une pièce lugubre, sans possibilité d'échapper à leur condition. Garcin, Inès et Estelle se retrouvent piégés dans un enfer où le regard de l'autre est omniprésent. 
                <br /><br />
                Au fil des dialogues entre les trois personnages, ils se dévoilent progressivement, révélant leurs secrets les plus sombres et confrontant leurs consciences. À travers cette représentation théâtrale oppressante, Sartre explore les thèmes de l'existence, de la liberté et de la responsabilité individuelle. "Huis-Clos remet en question les fondements de la morale.


                </p>
            </div>

            <div id='interprétation' className='pb-4'>
                <h1 className="text-secondary text-3xl font-bold">3 | Interprétation</h1>
                <p className='text-base mt-3 ml-10'>
                "L'enfer, c'est les autres" est la réplique de la pièce qui m’a le plus marqué. Cette affirmation énigmatique révèle l'interprétation existentielle de Sartre selon laquelle notre propre enfer est créé par la présence des autres. 
                <br /><br />
                Elle exprime l'idée que les individus sont constamment en proie à l'évaluation et au regard des autres, ce qui les limite dans leur actions. Selon Sartre, les interactions sociales sont souvent marquées par le conflit, la manipulation et le jugement, ce qui rend impossible une véritable liberté individuelle. 


                </p>
            </div>

            
            <div id='jugementdegout' className='pb-4'>
                <h1 className="text-secondary text-3xl font-bold">4 | Jugement de goût</h1>
                <p className='text-base mt-3 ml-10'>

                J'ai apprécié la lecture de la pièce Huis-Clos de Jean-Paul Sartre. Les personnages captifs dans cette pièce sombre m'ont intrigué et les dialogues intenses m'ont tenu en haleine. J'ai trouvé intéressante la manière dont Sartre explore les thèmes de la liberté et de la responsabilité individuelle à travers les interactions des personnages. 
                <br /><br />
                L'atmosphère oppressante de la pièce m'a vraiment immergé dans l'histoire, et la réplique célèbre "L'enfer, c'est les autres" a suscité beaucoup de réflexions sur les relations humaines. L’auteur existentialiste a clairement réussi son but car son œuvre m'a incité à réfléchir sur la condition humaine.

                </p>
            </div>
   

            <div id='bibliographie' className='pb-4'>
                <h1 className="text-secondary text-3xl font-bold text-center">~ Bibliographie ~</h1>
                <p className='text-sm mt-3 ml-10'>
                    <ul>
                        <li>« Huis clos (Sartre) ». Wikipedia, juin 2023, <a className='text-primary hover:underline' target='_blank' rel="noopener noreferrer" href="https://fr.wikipedia.org/wiki/Huis_clos_(Sartre)">fr.wikipedia.org/wiki/Huis_clos_(Sartre)</a>.</li>
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

export default HuisClos;
