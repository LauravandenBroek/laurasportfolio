
import { Calendar } from 'phosphor-react';
function EducationCard({ instelling, opleiding, jaartal }) {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all hover:scale-105 flex flex-col">
            
            <div className="grow">
                <div className="flex items-center gap-4 mb-3">
                    <h3 className="text-xl font-bold text-gray-800">{opleiding}</h3>
                </div>

                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                    {instelling}
                </p>
                <p className="inline-flex text-[#00a650] bg-[#ebfaef] text-sm p-2 rounded-full">
                   <Calendar size={22} className="mr-2" /> { jaartal}
                </p>
            </div>
        </div>
    );
}
export default EducationCard