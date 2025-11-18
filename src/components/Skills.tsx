import { Coffee, Cpu, Code, Flame, Cloud, Code2, Monitor, Shield } from "lucide-react";

export function Skills() {
  const skills = [
    { icon: Coffee, label: "Java" },
    { icon: Code, label: "C++" },
    { icon: Code2, label: "Kotlin" },
    { icon: Flame, label: "Firebase" },
    { icon: Cloud, label: "Cloud" },
    { icon: Code2, label: "HTML" },
    { icon: Monitor, label: "HTML" },
    { icon: Shield, label: "Cyber Security" }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-teal-400 mb-8">SKILLS</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-16 h-16 bg-slate-800 rounded-lg flex items-center justify-center mb-3 hover:bg-slate-700 transition-colors">
              <skill.icon className="w-8 h-8 text-white" />
            </div>
            <span className="text-sm text-gray-300">{skill.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}