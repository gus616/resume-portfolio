const techStack = [
  { name: "React", logo: "/react.png" },
  { name: "TypeScript", logo: "typescript.png" },
  { name: "C#", logo: "/csharp.png" },
  { name: "Azure", logo: "/azure.png" },
  { name: "Tailwind", logo: "/tailwind.png" },
  { name: "SQL", logo: "/sql.png" },
];

export default function TechStack() {
  return (
    <section id="tech" className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-primary mb-6 text-center">Tech Stack</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {techStack.map((tech, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-2 p-4 bg-dark/50 border border-primary rounded-lg hover:scale-125 transition-transform cursor-pointer"
          >
            <img src={tech.logo} alt={tech.name} className="w-12 h-12 object-contain" />
            <span className="text-light text-sm">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
