
const Education = () => {
    const education = [
        {
            degree: "Bachelor's Degree in Computer System Engineering",
            institution: "Instituto Tecnológico de Durango",
            link: "https://www.itdurango.edu.mx/licenciaturas//sistemas.html",
            coursework: [
                "Data Structures",
                "Algorithms",
                "Database Systems",
                "Web Development",
            ],
            years: "2008 – 2015",
        },
    ];

    return (
        <section id="education" className="max-w-6xl mx-auto px-6 py-20 flex flex-col items-center gap-10 hover:cursor-pointer"
            onClick={() => window.open("https://www.itdurango.edu.mx/licenciaturas//sistemas.html", "_blank")}
        >
            <h2 className="text-3xl font-bold text-primary mb-8 tracking-wide">
                🎓 Education
            </h2>

            {education.map((edu, idx) => (
                <div
                    key={idx}
                    className="bg-dark border border-primary/70 rounded-lg shadow-lg w-full max-w-3xl p-6 relative group hover:border-accent transition-all"
                >
                    <h3 className="text-2xl font-semibold mb-3">{edu.degree}</h3>

                    {/* Institution + Logo */}
                    <div className="flex justify-between items-center mb-4">
                        <a
                            href={edu.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-secondary hover:text-accent transition-colors"
                        >
                            <img
                                src="/logo-itd.svg"
                                alt={`${edu.institution} logo`}
                                className="h-10 w-auto object-contain hover:scale-105 hover:drop-shadow-glow transition-transform"
                            />
                            <span>{edu.institution}</span>
                        </a>
                        <span className="text-sm text-muted">{edu.years}</span>
                    </div>

                    {/* Coursework */}
                    <ul className="list-disc list-inside text-primary/90 space-y-1">
                        {edu.coursework.map((course, i) => (
                            <li key={i}>{course}</li>
                        ))}
                    </ul>

                    {/* Hover border effect */}
                    <div className="absolute inset-0 border border-accent opacity-0 group-hover:opacity-40 rounded-lg pointer-events-none transition-opacity" />
                </div>
            ))}
        </section>
    );
};

export default Education;
