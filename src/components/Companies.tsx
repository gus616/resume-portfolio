import { motion } from "framer-motion";

const companies = [
    { name: "Sngular", logo: "/companies/sngular.png" },
    { name: "BBVA", logo: "/companies/bbva.png" },
    { name: "Royal", logo: "/companies/royal.png" },
    { name: "Caja", logo: "/companies/caja.png" },
];

export default function Companies() {
    return (
        <section id="companies" className="py-16 bg-dark text-white">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 glitch-pink text-pink-600">
                Companies I’ve Worked With
            </h2>

            <div className=" sm:grid-cols-3 md:grid-cols-6 gap-8  flex items-center justify-around px-4 ">
                {companies.map((company) => (
                    <motion.div
                        key={company.name}
                        whileHover={{ scale: 1.5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="flex items-center justify-center p-4 cursor-pointer"
                    >
                        <img
                            src={company.logo}
                            alt={company.name}
                            className="h-[100px] w-[100px] object-fill"
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
