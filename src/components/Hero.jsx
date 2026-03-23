import laura from '../assets/fotovanmij.jpeg'
function Hero() {
return <section className=" flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 px-6 py-20 bg-[#f4f1ea] min-h-[calc(100vh)] font-sans">
      
      <div className="shrink-0">
        <img 
          src={laura}
          alt="Portret van mij" 
          className="w-65 object-contain rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.1)]" 
        />
      </div>

      <div className="flex-1 flex flex-col items-start max-w-xl">
        
        <div className="bg-white text-[#7ea286] px-4 py-2 rounded-full font-bold mb-6 shadow-sm flex items-center gap-2">
          <span>💚</span> Software Engineering Student
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 font-bold mb-4">
          Hi, ik ben <span className="text-[#7ea286]">Laura</span>
        </h1>

        <p className="text-gray-600 leading-relaxed text-lg mb-8">
          Ik ben een Software Engineering-student die het beste van twee werelden combineert: gestructureerd en logisch denken voor de backend, en creatieve oplossingen voor de frontend. Ik geniet ervan om ideeën te vertalen naar complete, gebruiksvriendelijke applicaties. <br/> <br/> Tijdens projecten neem ik graag het initiatief en ik heb een sterke visie op professionele standaarden en persoonlijke groei. Ik ben op zoek naar een uitdagende startersfunctie waar ik deze balans kan inzetten en verder kan ontwikkelen.
        </p>

    

        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/laura-van-den-broek-baba532a8" target="_blank" rel="noopener noreferrer" className="text-white bg-[#7ea286] hover:bg-[#008c42] font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5 border-none">LinkedIn</a>
          <a href="mailto:laura_vandenbroek@outlook.com" className="text-white bg-[#7ea286] hover:bg-[#008c42] font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5 border-none">Mail </a>
        </div>

      </div>
    </section>
}

export default Hero