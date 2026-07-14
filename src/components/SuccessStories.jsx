import React from 'react';
import { motion } from 'framer-motion';
import successImage from '../assets/4.jpg (1).jpeg';

const photoStories = [
    { id: 1, img: successImage },
    { id: 2, img: successImage },
    { id: 3, img: successImage },
    { id: 4, img: successImage },
    { id: 5, img: successImage },
];

const textStories = [
    { name: "Gambhir singh", country: "U.K", visa: "Dependent Visa", flag: "https://flagcdn.com/w320/gb.png" },
    { name: "Harpreet Kaur", country: "Canada", visa: "Express Entry", flag: "https://flagcdn.com/w320/ca.png" },
    { name: "Rahul Sharma", country: "USA", visa: "Student Visa", flag: "https://flagcdn.com/w320/us.png" },
    { name: "Priya Patel", country: "Australia", visa: "Work Visa", flag: "https://flagcdn.com/w320/au.png" },
    { name: "Amit Kumar", country: "New Zealand", visa: "Tourist Visa", flag: "https://flagcdn.com/w320/nz.png" },
];

import clientImage from '../assets/4.jpg (1) (1).jpeg';

const ClientAvatar = () => (
    <img
        src={clientImage}
        alt="Client"
        className="w-full h-full object-cover"
    />
);

// Interleave the arrays
const mixedStories = [];
for (let i = 0; i < Math.max(photoStories.length, textStories.length); i++) {
    if (photoStories[i]) mixedStories.push({ type: 'image', ...photoStories[i] });
    if (textStories[i]) mixedStories.push({ type: 'text', ...textStories[i], id: `text-${i}` });
}

const SuccessStories = () => {
    return (
        <section className="py-20 bg-primary-light overflow-hidden">
            <div className="container mx-auto px-6 mb-12">
                <div className="text-center">
                    <span className="text-accent tracking-widest text-sm font-bold uppercase mb-4 block">
                        Our Success
                    </span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-6">
                        Real Stories, Real <span className="text-gradient">Success</span>
                    </h2>
                </div>
            </div>

            <div className="flex flex-col gap-8">
                {/* Single Mixed Slider */}
                <div className="relative w-full overflow-hidden flex">
                    <motion.div
                        className="flex gap-6 whitespace-nowrap min-w-max items-center"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 40,
                        }}
                    >
                        {/* Double the array for seamless infinite scroll */}
                        {[...mixedStories, ...mixedStories].map((story, index) => (
                            <React.Fragment key={index}>
                                {story.type === 'image' ? (
                                    <div className="w-72 h-48 sm:w-80 sm:h-56 md:w-96 md:h-64 rounded-2xl overflow-hidden shrink-0 border border-white/10 shadow-lg bg-black/20 flex items-center justify-center">
                                        <img src={story.img} alt="Success Story" className="w-full h-full object-contain transition-transform duration-500 hover:scale-110" />
                                    </div>
                                ) : (
                                    <div className="w-72 h-48 sm:w-80 sm:h-56 md:w-96 md:h-64 glass-effect rounded-2xl p-4 sm:p-6 md:p-8 shrink-0 flex flex-col items-center justify-center border border-white/5 whitespace-normal text-center shadow-lg gap-2 relative overflow-hidden">
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-10 select-none pointer-events-none mix-blend-overlay">
                                            <img src={story.flag} alt={`${story.country} Flag`} className="w-full h-full object-cover blur-[2px]" />
                                        </div>
                                        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-accent/30 shadow-lg mb-2 z-10 shrink-0">
                                            <ClientAvatar />
                                        </div>
                                        <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-secondary uppercase tracking-wider z-10">{story.name}</h4>
                                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent z-10">{story.country}</h3>
                                        <p className="text-base sm:text-lg md:text-xl text-secondary/90 font-medium z-10">{story.visa}</p>
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SuccessStories;
