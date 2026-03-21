function SkillCard({ title, icon , skills}) {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
      
            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#7ea286] text-white flex items-center justify-center text-xl font-bold">
                    {icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{title}</h3>
            </div>

            <ul className="space-y-3">
                {skills.map((skill, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 rounded-full bg-[#7ea286] mr-3"></span>
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default SkillCard