import aboutme from '../assets/aboutme.png';
function AboutMe() {
    return ( 
    
        <section className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 px-6 py-20 bg-[#ffffff] min-h-screen font-sans"> 
          
          <div className="shrink-0">
            <img 
              src={aboutme}
              alt="Portret van mij" 
              className="w-64 h-64 md:w-80 md:h-80 lg:w-100 lg:h-full object-cover " 
            />
          </div>
    
          <div className="flex-1 flex flex-col items-start max-w-xl">
        
    
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 font-bold mb-4">
              Over mij
            </h1>
    
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              Ik ben 27 jaar oud en studeer momenteel Software Development. Ik heb een diverse achtergrond, met onder andere een afgeronde mbo-opleiding Applicatie- en mediaontwikkeling en een propedeuse in Voeding & Diëtetiek. <br /> <br />

              Drie jaar lang heb ik fulltime mijn eigen sieraden webshop gerund. Hoewel dit een waardevolle en leerzame ervaring was, kwam ik erachter dat mijn passie meer ligt bij het creëren van digitale producten dan bij het runnen van een online winkel. Ik miste de technische diepgang, de uitdaging van het programmeren en de dynamiek van het samenwerken in een team. <br /> <br />

              Daarom heb ik besloten om terug te keren naar software development. Waar ik me tijdens mijn mbo-opleiding vooral focuste op front-end development, richt ik me nu ook op het onder de knie krijgen van back-end technologieën. Mijn doel is om een Full-Stack developer te worden die applicaties, systemen en websites bouwt voor bedrijven.
            </p>
    
        

          </div>
        </section>
    );
}
export default AboutMe
