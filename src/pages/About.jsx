import { motion } from "framer-motion";
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, 
  SiMongodb, SiExpress, SiNodedotjs, SiGit 
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <SiHtml5 />, color: "group-hover:text-[#E34F26]" },
  { name: "CSS", icon: <SiCss3 />, color: "group-hover:text-[#1572B6]" },
  { name: "JS", icon: <SiJavascript />, color: "group-hover:text-[#F7DF1E]" },
  { name: "React", icon: <SiReact />, color: "group-hover:text-[#61DAFB]" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "group-hover:text-[#339933]" },
  { name: "Express", icon: <SiExpress />, color: "group-hover:text-[#000000]" },
  { name: "MongoDB", icon: <SiMongodb />, color: "group-hover:text-[#47A248]" },
  { name: "Git", icon: <SiGit />, color: "group-hover:text-[#F05032]" },
];

export default function About() {
  return (
    <section id="about" className="bg-[#fafafa] py-32 px-6">
      <div className="max-w-6xl mx-auto">
                <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif font-bold text-gray-900"
          >
            About
          </motion.h2>
          <div className="w-16 h-[2px] bg-[#45b69c] mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
            <p className="text-xl md:text-2xl text-gray-800 font-serif leading-relaxed italic">
              "I don't just write code; I architect digital experiences from the database up to the user's screen."
            </p>
            
            <div className="text-gray-600 leading-relaxed space-y-4 text-lg">
              <p>
                My journey began with a curiosity about how the web works under the hood. 
                As a BCA student, I transitioned from learning the basics of logic to 
                mastering the <strong>MERN Stack</strong>.
              </p>
              <p>
                I thrive at the intersection of logic and design. Whether it's optimizing 
                NoSQL queries for speed or crafting smooth animations with Framer Motion, 
                I focus on building applications that are as robust as they are beautiful.
              </p>
            </div>
            <div className="p-6 bg-white border-l-4 border-[#45b69c] shadow-sm rounded-r-xl">
              <h4 className="font-bold text-gray-900 mb-2">Current Focus:</h4>
              <p className="text-gray-600 text-sm">
                Deep diving into Backend System Design, API Security (JWT/OAuth), 
                and exploring the power of Redux Toolkit for complex state management.
              </p>
            </div>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
             <h4 className="text-center text-xs uppercase tracking-[0.3em] font-bold text-gray-400 mb-12">
               Technical Arsenal
             </h4>
             <div className="grid grid-cols-3 sm:grid-cols-4 gap-y-12 gap-x-8">
                {skills.map((skill, i) => (
                  <SkillItem key={i} skill={skill} />
                ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function SkillItem({ skill }) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="flex flex-col items-center group cursor-default"
    >
      <div className={`text-5xl text-gray-200 transition-colors duration-300 ${skill.color}`}>
        {skill.icon}
      </div>
      <span className="mt-3 text-[10px] font-bold tracking-widest text-gray-400 group-hover:text-gray-900 transition-colors">
        {skill.name}
      </span>
    </motion.div>
  );
}