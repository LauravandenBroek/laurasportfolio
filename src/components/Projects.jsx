import ProjectCard from './ProjectCard'
import CycleSyncing from '../assets/cyclesync.jpg'
import Restaurant from '../assets/restaurant.png'
import Festival from '../assets/festivalplanner.png'
function Projects() {
    const myProjects = [
        {
            title: 'Festival planner',
            photo: Festival,
            description: 'Mijn eerste project waarin ik echt de diepte in ging met backend-structuur. Voor deze C# applicatie heb ik een 3-lagen architectuur toegepast en gebruikgemaakt van OOP-principes met anemic models. De focus lag op een duidelijke scheiding tussen de data en de logica, waardoor gebruikers op een stabiele manier festivals kunnen vinden en hun eigen planning kunnen beheren.',
            gitLink:'https://github.com/LauravandenBroek/FestivalApp'
        },
        {
            title: 'Cycle syncing app',
            photo: CycleSyncing,
            description: 'Een full-stack project en de eerste applicatie waarbij ik de backend en frontend volledig gescheiden heb opgezet met Java Spring Boot en React. De backend volgt een 3-lagen architectuur met anemic models voor een strakke datastructuur. Naast de functionele kant (inclusief een geïntegreerde AI-chat voor advies) heb ik me bij dit project gericht op de professionele workflow: ik heb een CI/CD-pipeline ingericht voor het deploymentproces. Omdat het om persoonlijke data gaat, heb ik toegepast onderzoek gedaan naar security-standaarden.',
            gitLink:'https://github.com/LauravandenBroek/syc-backend'
        },
        {
            title: 'Restaurant bestel applicatie',
            photo: Restaurant,
            description: 'Een omvangrijk groepsproject waarbij we het volledige bestelproces van een restaurant hebben gedigitaliseerd. Het systeem bestaat uit vier verschillende front-ends die allemaal communiceren met één centrale Java Spring Boot backend. In dit project nam ik de technische leiding en was ik verantwoordelijk voor de backend-architectuur. Ik heb me beziggehouden met de inrichting van de CI/CD-pipeline, het deployment-proces en het opzetten van een uitgebreide teststrategie.',
        },
    ]

    return (
        <section id="projects" className="py-20 px-6 bg-[#ffffff] min-h-screen font-sans">
            <div className="max-w-6xl mx-auto">
        
      
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-[#7ea286] mb-4">Mijn projecten</h2>
                <p className="text-gray-600 text-lg">
                    Projecten die ik heb gemaakt tijdens mijn studie
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {myProjects.map((project, index) => (
                    <ProjectCard 
                    key={index}
                    photo={project.photo}
                    title={project.title}
                    description={project.description}
                    gitLink={project.gitLink}
                    />
                ))}
            </div>

         </div>
    </section>
    );
}

export default Projects