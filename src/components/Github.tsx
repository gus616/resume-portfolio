import { FaGithub } from "react-icons/fa";

const GithubCard = () => {
  const github = {
    username: "gus616",
    link: "https://github.com/gus616",
    avatar: "https://avatars.githubusercontent.com/u/30085452?v=4", // replace with your GitHub avatar
    bio: "Software Engineer • React & C# Developer • Building fun projects",
  };

  return (
    <section id="github" className="max-w-6xl mx-auto px-6 py-20 flex flex-col items-center gap-10">
      <h2 className="text-3xl font-bold text-primary mb-8 tracking-wide">
        ⚡ GitHub
      </h2>

      <div className="bg-dark border border-primary/70 rounded-lg shadow-lg w-full max-w-3xl p-6 relative group hover:border-accent transition-all">
        {/* Avatar + Username */}
        <a
          href={github.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 hover:text-accent transition-colors"
        >
          <img
            src={github.avatar}
            alt={`${github.username} avatar`}
            className="h-16 w-16 rounded-full border border-primary object-cover hover:scale-105 transition-transform"
          />
          <div>
            <h3 className="text-xl font-semibold flex items-center gap-2">
              {github.username}
              <FaGithub className="text-secondary text-2xl" />
            </h3>
            <p className="text-sm text-muted">{github.bio}</p>
          </div>
        </a>

        {/* Hover glow */}
        <div className="absolute inset-0 border border-accent opacity-0 group-hover:opacity-40 rounded-lg pointer-events-none transition-opacity" />
      </div>
    </section>
  );
};

export default GithubCard;
