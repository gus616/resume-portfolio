import { desc, image } from "framer-motion/client";

const projects = [
  {title: "Amazon Clone",
    description: "Full-stack e-commerce app with React, Rtk Query, Redux, .Net Core API, Azure deployment.",
    stack: [".Net Core 9","React", "TypeScript","Tailwind", "Azure" ],
    image: "/projects/amazon.jpg",
    githubFrontEnd: "https://github.com/gus616/restore-ecommerce-frontend",
    githubBackEnd: "https://github.com/gus616/restore-ecommerce-api",
    demo: "https://nice-ocean-0db720610.1.azurestaticapps.net/"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-primary mb-8">Showcase Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((proj, i) => (
          <div key={i} className="bg-dark border border-primary rounded-lg overflow-hidden shadow-lg cursor-pointer hover:border-pink-500 hover:border-4 transition-transform transform hover:scale-105"
          
          onClick={() => window.open(proj.demo, "_blank")}
          >
            <img src={proj.image} alt={proj.title} className="w-full h-48 object-fill" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
              <p className="text-sm mb-4">{proj.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.stack.map((tech, idx) => (
                  <span key={idx} className="text-xs px-2 py-1 border border-primary text-primary rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={proj.githubFrontEnd} target="_blank" className="text-secondary hover:underline">Front End Repo</a>
                <a href={proj.githubBackEnd}  target="_blank" className="text-secondary hover:underline">API Repo</a>
                <a href={proj.demo}  target="_blank" className="text-primary hover:underline">Live Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
