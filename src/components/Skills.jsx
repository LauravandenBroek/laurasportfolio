import SkillCard from './SkillCard'
import { Code, HardDrives, Database, Gear, Palette, DeviceMobile } from 'phosphor-react';

function Skills() {
    const mySkills = [
        {
            title: 'Backend Development',
            icon: <HardDrives size={32} color="#FFFF" />,
            skills: ['C# ASP.NET (Core)', 'Java Spring Boot', 'RESTful APIs']
        },
        {
            title: 'Frontend Development',
            icon: <Code size={32} color="#FFFF" />,
            skills: ['HTML/CSS', 'React', 'Tailwind CSS', 'Flutter']
        },
        {
            title: 'Databases',
            icon: <Database size={32} color="#FFFF" />,
            skills: ['MSSQL', 'PostgreSQL']
        },
        {
            title: 'Tools & Versiebeheer',
            icon: <Gear size={32} color="#FFFF" />,
            skills: ['Docker', 'CI/CD', 'Git', 'GitHub', 'Azure DevOps', 'Jira']
        },
        {
            title: 'UI/UX',
            icon: <Palette size={32} color="#FFFF" />,
            skills: ['Figma (Prototyping & Design)', 'Responsive Design', 'User-Centered Design', 'Wireframing']
        },
         {
            title: 'Software Design & Fundamentals',
            icon: <DeviceMobile size={32} color="#FFFF" />,
            skills: ['Object-Oriented Programming (OOP)', '3-lagen Architectuur', 'UML', 'Agile / Scrum' ]
        },
    ]

    return (
        <section id="skills" className="py-20 px-6 bg-[#f4f1ea] min-h-screen font-sans">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#7ea286] mb-4">Mijn skills</h2>
          <p className="text-gray-600 text-lg">
            Technologieën en tools waar ik ervaring mee heb opgedaan 
          </p>
        </div>

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