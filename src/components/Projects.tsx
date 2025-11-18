export function Projects() {
  const projects = [
    {
      title: "Android app for tourism guide to-cusing on Mpu-malanga",
      description: "Android app for tourism guide focusing on Mpumalanga"
    },
    {
      title: "Project title",
      description: "Android app for tourism guide focusing on Mpumalanga"
    },
    {
      title: "Project title",
      description: "Android app for tourism guide focusing on Mpumalanga"
    }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-teal-400 mb-8">PROJECTS</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors">
            <div className="h-32 bg-slate-700 rounded-lg mb-4"></div>
            <h3 className="font-semibold mb-3 leading-tight">{project.title}</h3>
            <p className="text-gray-400 text-sm">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}