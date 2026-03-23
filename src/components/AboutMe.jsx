import aboutme from '../assets/aboutme.png';
function AboutMe() {
    return ( 
    
        <section id="about-me" className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 px-6 py-20 bg-[#ffffff] min-h-screen font-sans"> 
          
          <div className="shrink-0">
            <img 
              src={aboutme}
              alt="Mijn hobby's" 
              className="w-100 h-full object-cover " 
            />
          </div>
    
          <div className="flex-1 flex flex-col items-start max-w-xl">
        
    
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#7ea286] font-bold mb-4">
              Over mij
            </h1>
    
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              Ik ben 27 jaar en momenteel volg ik de opleiding hbo-ict met de focus op Software Engineering. Mijn pad hiernaartoe is allesbehalve standaard: na mijn mbo-opleiding Applicatie- en mediaontwikkeling en een uitstapje naar de wereld van Voeding & Diëtetiek, heb ik vijf jaar lang mijn eigen sieradenwebshop gerund. <br /> <br />

              Hoewel dit een waardevolle en leerzame ervaring was, kwam ik erachter dat mijn passie meer ligt bij het creëren van digitale producten dan bij het runnen van een online winkel. Ik miste de technische diepgang, de uitdaging van het programmeren en de dynamiek van het samenwerken in een team. <br /> <br />

              Inmiddels focus ik me op het worden van een veelzijdige Full-Stack developer. Waar ik me tijdens mijn mbo-studie vooral op de frontend focuste, ligt mijn focus nu ook bij de backend-logica.
            </p>
    
        

          </div>
        </section>
    );
}
export default AboutMe
