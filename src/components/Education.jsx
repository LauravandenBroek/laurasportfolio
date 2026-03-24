import EducationCard from './EducationCard'

function Education() {
    const myEducation = [
        {
            instelling: 'Gilde Opleidingen',
            opleiding: 'MBO-4 Applicatie- en mediaontwikkeling',
            jaartal: ' 2015-2018',
        },
        {
            instelling: 'HAN University of Applied Sciences',
            opleiding: 'HBO Propedeuse Voeding en Diëtetiek',
            jaartal: ' 2018-2019',
        },
        {
            instelling: 'Fontys University of Applied Sciences',
            opleiding: 'HBO Propedeuse - HBO ICT',
            jaartal: ' 2024-2025',
        },
        {
            instelling: 'Fontys University of Applied Sciences',
            opleiding: 'HBO Bachelor - HBO ICT',
            jaartal: ' 2024-heden',
        },
    ]

    return (
        <section id="education" className="py-20 px-6 bg-[#f4f1ea] min-h-screen font-sans">
            <div className="max-w-6xl mx-auto">
        
      
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-[#7ea286] mb-4">Mijn opleidingen</h2>
                <p className="text-gray-600 text-lg">
                    Mijn educatieve achtergrond 🎓
                </p>
            </div>
            

            <div className="grid grid-cols-1 gap-8">
                {myEducation.map((education, index) => (
                    <EducationCard 
                    key={index}
                    instelling={education.instelling}
                    opleiding={education.opleiding}
                    jaartal={education.jaartal}
                    />
                ))}
            </div>

         </div>
    </section>
    );
}

export default Education