import React from 'react';


import Header from '../components/Header';
import Footer from '../components/Footer';

const title = "3 - Bilan de l'année";
const subtitle = "Qu'est ce que la culture ?";
const desc = "Texte résumant ce qu'est la culture pour moi, après toutes ces expériences culturelles vécues au cours de ces deux dernières années.";



function ZeldaMM() {

  return (
    
    <div>
        <div className="bg-[url(https://cdn.discordapp.com/attachments/1023181262460035113/1117852326460395541/wallpaperflare.com_wallpaper.jpg)] bg-center ">
            <div className='bg-black bg-opacity-75'>
                <div className="relative overflow-hidden">
                    <Header title={title} subtitle={subtitle} desc={desc} />
                </div>
          </div>
        </div>

      <div className='overflow-hidden py-10 bg-light'>
        <div className="max-w-6xl px-2 mx-auto sm:px-6 py-2 pb-4 bg-darkbrown rounded-xl">
            <div className="leading-loose text-lg my-6 px-6 text-light">
                

          Après deux années de participation à diverses expériences culturelles, je constate un enrichissement notable sur le plan culturel. Cependant, ma perception générale de la culture n'a pas subi de changement radical.
          <br /><br />
          Initialement, je concevais la culture comme étant l'histoire et le patrimoine d'une civilisation. Chaque société possède sa propre culture qui forge son identité et témoigne du savoir et de la créativité des êtres humains. Les références culturelles agissent comme des liens communs qui rassemblent les individus. La culture est un attrait important pour nous, humains. Comme disait Antoine Rivarol, « L’homme sans culture est un arbre sans fruit ».
          <br /><br />
          À mes yeux, la culture représente le développement d'une vision du monde. Elle élargit notre ouverture d'esprit, enrichit nos connaissances et nous permet d'explorer la diversité intellectuelle.
          <br /><br />
          La culture peut se transmettre de multiples façons, que ce soit à travers des romans, des pièces de théâtre, des jeux vidéo, des films ou des séries. Chacun a son attrait particulier. Personnellement, je préfère les films et les séries car je trouve qu'ils offrent une immersion plus profonde que le théâtre. De même, les jeux vidéo me captivent car ils me permettent de m'immerger dans l'histoire et de prendre le contrôle du personnage principal.
          <br /><br />
          Au cours de ces expériences, j'ai eu l'occasion de découvrir mes premières pièces de théâtre. Bien que ce ne soit pas ma préférence, je suis ravi d'avoir pu expérimenter quelque chose de différent. Je trouve cela bénéfique d’élargir ma culture générale car, comme dit précédemment, elle permet d’enrichir nos connaissances et de développer notre ouverture sur le monde.
          <br /><br />
          En conclusion, pour moi, la culture représente la transmission des traditions et de la créativité propres à chaque civilisation, nous permettant ainsi d'avoir une ouverture sur le monde.

            


            </div>

        </div>
      </div>

      <Footer />

    </div>
  );
}

export default ZeldaMM;
