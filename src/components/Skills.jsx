import SkillCard from './SkillCard'

function Skills() {
    const mySkills = [
        {
            title: 'Backend Development',
            icon: '💻',
            skills: ['C#', 'Java Spring Boot', 'REST APIs']
        },
        {
            title: 'Frontend Development',
            icon: '🌐',
            skills: ['HTML/CSS', 'React JS', 'Tailwind CSS']
        },
        {
            title: 'Databases',
            icon: '🗄️',
            skills: ['MSSQL', 'PostgreSQL']
        },
        {
            title: 'Tools & versie controle',
            icon: '⚙️',
            skills: ['Docker', 'CI/CD', 'Git', 'GitHub', 'Azure DevOps', 'Jira']
        },
        {
            title: 'UI/UX',
            icon: '🎨',
            skills: ['Figma']
        },
         {
            title: 'Mobile app development',
            icon: '📱',
            skills: ['SwiftUI',  'XCode']
        },
    ]

    return (
        <section className="py-20 px-6 bg-[#f4f1ea] min-h-screen font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Sectie Titels */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#7ea286] mb-4">Mijn skills</h2>
          <p className="text-gray-600 text-lg">
            Technologieën en tools waar ik ervaring mee heb opgedaan 
          </p>
        </div>

        {/* Het Grid met de SkillCards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mySkills.map((skillGroup, index) => (
            <SkillCard 
              key={index} 
              title={skillGroup.title} 
              icon={skillGroup.icon} 
              skills={skillGroup.skills} 
            />
          ))}
        </div>

      </div>
    </section>
    );
}

export default Skills