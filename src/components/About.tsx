export default function About() {
    return (
        <section id="about" className="w-full h-full px-6 py-20 bg-black cyan-text text-center about__background">
            <h2 className="text-3xl font-bold tex mb-6">About Me</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
               
                <p className="text-lg leading-relaxed">
                    Hi, I’m Gustavo — a software engineer with 9 years of experience
                    building modern web applications in React, C#, and Azure.
                    I love creating high-performance UIs, solving complex problems,
                    and as you can probably tell I like videogames.
                </p>
            </div>
        </section>

    );
}