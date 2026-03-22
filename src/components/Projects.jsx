import ProjectCard from './ProjectCard'
import CycleSyncing from '../assets/cyclesync.jpg'
import Restaurant from '../assets/restaurant.png'
import Festival from '../assets/festivalplanner.png'
function Projects() {
    const myProjects = [
        {
            title: 'Festival planner',
            photo: Festival,
            description: 'Tijdens semester 2 heb ik een festival planner gemaakt met C#. De app helpt gebruikers festivals te vinden. Gebruikers kunnen festivals toevoegen aan hun lijsten.',
            gitLink:'www.git.nl'
        },
        {
            title: 'Cycle syncing app',
            photo: CycleSyncing,
            description: 'Tijdens semester 3 heb ik een cycle syncing applicatie gemaakt met Java Spring Boot en React JS. Deze app helpt vrouwen om hun cyclus bij te houden en geeft gepersonaliseerde tips op basis van de verschillende fasen van de cyclus.',
            gitLink:'www.git.nl'
        },
        {
            title: 'Restaurant bestel applicatie',
            photo: Restaurant,
            description: 'Tijdens semester 3 heb ik gewerkt aan een groepsproject waarbij we het bestel proces voor een restaurant hebben gedigitaliseerd. Deze hebben we gemaakt mijn Java Spring boot en React JS. ',
            gitLink:'www.git.nl'
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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