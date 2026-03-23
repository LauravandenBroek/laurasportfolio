import { FaGitAlt } from "react-icons/fa";

function ProjectCard({ photo, title, description, gitLink }) {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all hover:scale-105 flex flex-col">
            
            <img src={photo} alt={title} className="w-full h-48 object-contain rounded-lg mb-6" />
            <div className="grow">
                <div className="flex items-center gap-4 mb-6">
                    <h3 className="text-xl font-bold text-gray-800">{title}</h3>
                </div>

                <p className="text-gray-600 leading-relaxed whitespace-pre-line text-lg mb-8">
                    {description}
                </p>
            </div>
            {gitLink && (
                <a 
                    href={gitLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-[#7ea286] text-white w-15 h-12 rounded-full hover:bg-[#008c42] transition-colors "
                >
                    <FaGitAlt className="h-6 w-6 text-white" />
                </a>
            )}
        </div>
    );
}
export default ProjectCard