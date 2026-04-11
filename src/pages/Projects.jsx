import { motion } from "framer-motion";
import { Github, CheckCircle2, PlayCircle } from "lucide-react";

const project = {
  title: "SWADSEVA",
  subtitle: "Clinical Food Ordering & Management System",
  description: "A specialized MERN stack platform designed to bridge the gap between medical prescriptions and daily nutrition. It features condition-based meal filtering, precise nutritional tracking, and a comprehensive admin ecosystem for hospital-grade food service management.",
  tech: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS", "Framer Motion"],
  features: [
    "Medical-grade meal filtering (Diabetic, Cardiac, Post-Surgery)",
    "Real-time nutritional breakdown (Calories, Protein, Carbs)",
    "Comprehensive Admin Dashboard for inventory & order tracking",
    "Secure Patient/User authentication and profile management"
  ],
  githubLink: "https://github.com/VARSHAher/SWADSEVA2.0",
  videoDemo: "https://www.linkedin.com/posts/varshachowdhurrry_mernstack-bca-fullstackdeveloper-activity-7448653068407271424-YaJI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFVHmFUB-6-qULKf43g6Bqc5rYJlkTGEyWQ", 
  image: "/SWADSEVA.png" 
};

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-32 px-6">
      <div className="max-w-7xl mx-auto">
                <div className="mb-20 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-6xl font-serif font-bold text-gray-900 tracking-tighter"
          >
            Featured Work
          </motion.h2>
          <div className="w-32 h-[4px] bg-[#45b69c] mt-6 mx-auto md:mx-0" />
        </div>

        <div className="flex flex-col gap-20">
                    <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="w-full relative"
          >            
          <div className="rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-200">
              <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-10">
            <div>
              <span className="text-[#45b69c] font-bold tracking-widest uppercase text-sm">MERN Stack Case Study</span>
              <h3 className="text-4xl font-serif font-bold text-gray-900 mt-2 mb-6">{project.title}</h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-6 mt-10">
                <a href={project.githubLink} className="flex items-center gap-2 font-bold text-lg text-gray-900 hover:text-[#45b69c] transition-colors border-b-2 border-transparent hover:border-[#45b69c]">
                  <Github size={22} /> GitHub Source
                </a>
                <a href={project.videoDemo} className="flex items-center gap-2 font-bold text-lg text-gray-900 hover:text-[#45b69c] transition-colors border-b-2 border-transparent hover:border-[#45b69c]">
                  <PlayCircle size={22} /> Watch Demo Video
                </a>
              </div>
            </div>

            <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-widest text-sm">Technical Features</h4>
              <div className="space-y-4">
                {project.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle2 size={20} className="text-[#45b69c] mt-1 shrink-0" />
                    <span className="text-lg leading-tight">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mt-10">
                {project.tech.map((item, i) => (
                  <span key={i} className="text-[11px] font-black tracking-widest uppercase py-2 px-4 bg-white border border-gray-200 text-gray-500 rounded-lg">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}