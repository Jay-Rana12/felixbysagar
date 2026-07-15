import React, { useRef, useEffect, useState } from 'react';
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

    { name: "Soni Shanikumar", country: "New Zealand", visa: "Work Visa", flag: "https://flagcdn.com/w320/nz.png" },
    { name: "Vidhi S. Soni", country: "New Zealand", visa: "Dependent Visa", flag: "https://flagcdn.com/w320/nz.png" },
    { name: "Divy S. Soni", country: "New Zealand", visa: "Dependent Visa", flag: "https://flagcdn.com/w320/nz.png" },
    { name: "Sunny Prajapati", country: "New Zealand", visa: "Work Visa", flag: "https://flagcdn.com/w320/nz.png" },
    { name: "Gambhir Singh", country: "UK", visa: "Dependent Visa", flag: "https://flagcdn.com/w320/gb.png" },
    { name: "Dhruvkumar Patel", country: "UK", visa: "Student Visa", flag: "https://flagcdn.com/w320/gb.png" },
    { name: "Foram Patel", country: "UK", visa: "Work Visa", flag: "https://flagcdn.com/w320/gb.png" },
    { name: "Sanjay Patel", country: "UK", visa: "Work Visa", flag: "https://flagcdn.com/w320/gb.png" },
    { name: "Dipen Patel", country: "New Zealand", visa: "Work Visa", flag: "https://flagcdn.com/w320/nz.png" },
    { name: "Hansaben Patel", country: "UK", visa: "Visitor Visa (10 Year)", flag: "https://flagcdn.com/w320/gb.png" },
    { name: "Parthkumar Patel", country: "UK", visa: "Dependent Visa", flag: "https://flagcdn.com/w320/gb.png" },
    { name: "Rameshbhai Patel", country: "UK", visa: "Visitor Visa (10 Year)", flag: "https://flagcdn.com/w320/gb.png" },
    { name: "Sagarkumar Patel", country: "Spain", visa: "Visitor Visa", flag: "https://flagcdn.com/w320/es.png" },
    { name: "Sweta Patel", country: "UK", visa: "Work Visa", flag: "https://flagcdn.com/w320/gb.png" },
    { name: "Hardikkumar Viradiya", country: "Singapore", visa: "Student Visa", flag: "https://flagcdn.com/w320/sg.png" },
    { name: "Parth Chothani", country: "Singapore", visa: "Student Visa", flag: "https://flagcdn.com/w320/sg.png", hasClientImage: true, clientImg: parthImage },
    { name: "Riya Rupareliya", country: "Singapore", visa: "Student Visa", flag: "https://flagcdn.com/w320/sg.png" },
    { name: "Parth Akhaja", country: "Singapore", visa: "Student Visa", flag: "https://flagcdn.com/w320/sg.png" },
    { name: "Nikunjbhai Patel", country: "Mauritius", visa: "Student Visa", flag: "https://flagcdn.com/w320/mu.png" },
    { name: "Rahul Patel", country: "UK", visa: "Dependent Visa", flag: "https://flagcdn.com/w320/gb.png" },
    { name: "Kiritbhai Jogani", country: "UK", visa: "Visitor Visa", flag: "https://flagcdn.com/w320/gb.png" },
    { name: "Parulben Jogani", country: "UK", visa: "Visitor Visa", flag: "https://flagcdn.com/w320/gb.png" },
    { name: "Payal Patel", country: "UK", visa: "Work Visa", flag: "https://flagcdn.com/w320/gb.png" },
    { name: "Jay Sorathiya", country: "New Zealand", visa: "Work Visa", flag: "https://flagcdn.com/w320/nz.png" },
    { name: "Bhavesh Desai", country: "UK", visa: "Dependent Visa", flag: "https://flagcdn.com/w320/gb.png" },
    { name: "Hiren Dhaduk", country: "New Zealand", visa: "Work Visa", flag: "https://flagcdn.com/w320/nz.png" },
    { name: "Kiya Desai", country: "UK", visa: "Dependent Visa", flag: "https://flagcdn.com/w320/gb.png" },
    { name: "Krima Patel", country: "UK", visa: "Dependent Visa", flag: "https://flagcdn.com/w320/gb.png" },
    { name: "Luckykumari Jadeja", country: "UK", visa: "Work Visa", flag: "https://flagcdn.com/w320/gb.png" },
    { name: "Shivani Patel", country: "New Zealand", visa: "Dependent Visitor Visa", flag: "https://flagcdn.com/w320/nz.png" },
    { name: "Dharmeshbhai Patel", country: "USA", visa: "Visitor Visa", flag: "https://flagcdn.com/w320/us.png" },
    { name: "Akshar J. Desai", country: "UK", visa: "Visitor Visa", flag: "https://flagcdn.com/w320/gb.png" },
    { name: "Geetaben P. Patel", country: "USA", visa: "Visitor Visa", flag: "https://flagcdn.com/w320/us.png" },
    { name: "Pareshkumar D. Dobaria", country: "USA", visa: "Visitor Visa", flag: "https://flagcdn.com/w320/us.png", hasClientImage: true, clientImg: pareshImage },
    { name: "Akash Desai", country: "New Zealand", visa: "Work Visa", flag: "https://flagcdn.com/w320/nz.png", hasClientImage: true, clientImg: akashImage },
    { name: "Prashantkumar M. Patel", country: "USA", visa: "Visitor Visa", flag: "https://flagcdn.com/w320/us.png" },
    { name: "Suraj P. Dobaria", country: "USA", visa: "Visitor Visa", flag: "https://flagcdn.com/w320/us.png" },
    { name: "Renishkumar A. Patel", country: "New Zealand", visa: "Work Visa", flag: "https://flagcdn.com/w320/nz.png" },
    { name: "Jietendrasinh Sodha", country: "New Zealand", visa: "Work Visa", flag: "https://flagcdn.com/w320/nz.png", hasClientImage: true, clientImg: sodhaImage },
    { name: "Jitendrasingh", country: "UK", visa: "Visitor Visa", flag: "https://flagcdn.com/w320/gb.png", hasClientImage: true, clientImg: singhImage },
    { name: "Bhavesh D. Hapani", country: "USA", visa: "Visitor Visa", flag: "https://flagcdn.com/w320/us.png" },
    { name: "Sanju Panwar", country: "UK", visa: "Visitor Visa", flag: "https://flagcdn.com/w320/gb.png" },
    { name: "Bhargav P. Gorasiya", country: "New Zealand", visa: "Work Visa", flag: "https://flagcdn.com/w320/nz.png" },
    { name: "Nikhar Hirpara", country: "USA", visa: "Student Visa", flag: "https://flagcdn.com/w320/us.png" },
    { name: "Karan Rathod", country: "Italy", visa: "Free Study Visa", flag: "https://flagcdn.com/w320/it.png" },
    { name: "Manubhai S. Patel", country: "USA", visa: "Visitor Visa", flag: "https://flagcdn.com/w320/us.png" },
    { name: "Minaben M. Patel", country: "USA", visa: "Visitor Visa", flag: "https://flagcdn.com/w320/us.png", hasClientImage: true, clientImg: minabenImage },
    { name: "Arpan V. Patel", country: "New Zealand", visa: "Work Visa", flag: "https://flagcdn.com/w320/nz.png" },
    { name: "Dhavalkumar B. Desai", country: "New Zealand", visa: "Work Visa", flag: "https://flagcdn.com/w320/nz.png" },
    { name: "Kaushl J. Panchal", country: "USA", visa: "Visitor Visa", flag: "https://flagcdn.com/w320/us.png" },
    { name: "Hiteshkumar M. Savaliya", country: "USA", visa: "Visitor Visa", flag: "https://flagcdn.com/w320/us.png" },
    { name: "Manishaben H. Savaliya", country: "USA", visa: "Visitor Visa", flag: "https://flagcdn.com/w320/us.png" },
    { name: "Jashiben Ramesh Desai", country: "USA", visa: "Visitor Visa", flag: "https://flagcdn.com/w320/us.png" },
    { name: "Ishaan Rameshbhai Desai", country: "USA", visa: "Visitor Visa", flag: "https://flagcdn.com/w320/us.png" }
];

import clientImage from '../assets/4.jpg (1) (1).jpeg';
import soniShanikumarImage from '../assets/soni_shanikumar.png';
import minabenImage from '../assets/Client (2)/Client/Minaben Patel.png';
import sodhaImage from '../assets/Client (2)/Client/jitendrasing sodah.png';
import singhImage from '../assets/Client (2)/Client/Jitendra Singh.png';
import pareshImage from '../assets/Client (2)/Client/Pareshkumar Dobaria.png';
import akashImage from '../assets/Client (2)/Client/Akash Desai.png';
import parthImage from '../assets/Client (2)/Client/Parth Chotani.png';

const ClientAvatar = () => (
    <img
        src={clientImage}
        alt="Client"
        className="w-full h-full object-cover object-top"
    />
);

const clientImagesMap = import.meta.glob('../assets/**/*.png', { eager: true, query: '?url', import: 'default' });

// Helper to normalize strings for comparison (e.g. "Jashiben Ramesh Desai" -> "jashibendesai")
const normalizeStr = (str) => {
    // Remove initials, special chars, spaces
    return str.toLowerCase().replace(/\b[a-z]\.\s/g, '').replace(/[^a-z]/g, '');
};

import stringSimilarity from 'string-similarity';

const getClientImageForStory = (story) => {
    if (story.hasClientImage && story.clientImg) return story.clientImg;
    
    const storyNorm = story.name.toLowerCase().replace(/\b[a-z]\.\s/g, '').replace(/[^a-z\s]/g, '').trim();
    
    const filenames = Object.keys(clientImagesMap).map(path => {
        const file = path.split('/').pop().replace('.png', '');
        return { path, norm: file.toLowerCase().replace('_cropped', '').replace(/[^a-z\s]/g, '').trim(), isCropped: path.includes('_cropped') };
    });

    let bestMatch = null;
    let highestScore = 0;

    for (const file of filenames) {
        let score = stringSimilarity.compareTwoStrings(storyNorm, file.norm);
        if (file.isCropped) score += 0.05; // Give priority to cropped versions
        if (score > highestScore) {
            highestScore = score;
            bestMatch = file.path;
        }
        
        // Also check if any word matches
        const storyParts = storyNorm.split(' ');
        const fileParts = file.norm.split(' ');
        let common = 0;
        for (const p of fileParts) {
            if (p.length > 2 && storyParts.includes(p)) common++;
        }
        if (common >= 2 && highestScore < 0.6) {
            highestScore = 0.6; // Bump score if 2 words match (First Name + Last Name)
            bestMatch = file.path;
        }
    }

    if (highestScore > 0.45 && bestMatch) {
        return clientImagesMap[bestMatch];
    }

    return null;
};

// Only use text cards for the slider
const mixedStories = textStories.map((story, i) => {
    const matchedImg = getClientImageForStory(story);
    return { 
        type: 'text', 
        ...story, 
        hasClientImage: !!matchedImg || story.hasClientImage,
        clientImg: matchedImg || story.clientImg,
        id: `text-${i}` 
    };
});

const SuccessStories = () => {
    const scrollRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = window.innerWidth < 768 ? 300 : 400;
            scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        if (isHovered) return;
        const interval = setInterval(() => {
            if (scrollRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
                // If we've reached the end, scroll back to the beginning
                if (scrollLeft + clientWidth >= scrollWidth - 10) {
                    scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    scroll('right');
                }
            }
        }, 2500); // Scroll every 2.5 seconds
        return () => clearInterval(interval);
    }, [isHovered]);

    return (
        <section className="py-20 bg-[#0f172a] overflow-hidden relative">
            <div className="container mx-auto px-6 mb-12">
                <div className="text-center">
                    <span className="text-[#e6b941] tracking-widest text-sm font-bold uppercase mb-4 block">
                        Our Success
                    </span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                        Real Stories, Real <span className="text-[#e6b941]">Success</span>
                    </h2>
                </div>
            </div>

            <div 
                className="relative w-full py-10 group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Left Button */}
                <button 
                    onClick={() => scroll('left')} 
                    className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 bg-black/60 hover:bg-[#e6b941] text-white p-3 rounded-full shadow-2xl transition-all duration-300 opacity-80 hover:opacity-100"
                    aria-label="Scroll Left"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>

                <div 
                    ref={scrollRef} 
                    className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 sm:px-12 py-4"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {mixedStories.map((story, index) => {
                        const nameParts = story.name.split(' ');
                        const lastName = nameParts.length > 1 ? nameParts.pop() : '';
                        const firstName = nameParts.length > 0 ? nameParts.join(' ') : story.name;

                        return (
                        <div key={index} className="snap-center shrink-0">
                            {story.type === 'image' ? (
                                <div className="w-60 h-60 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-3xl overflow-hidden border border-white/5 shadow-2xl bg-black/40 flex items-center justify-center">
                                    <img src={story.img} alt="Success Story" className="w-full h-full object-contain transition-transform duration-500 hover:scale-110" />
                                </div>
                            ) : (
                                <div className="w-[16rem] sm:w-[18rem] md:w-[20rem] h-[25rem] sm:h-[27rem] md:h-[29rem] bg-gradient-to-br from-[#0B132B] to-[#040812] rounded-3xl p-5 md:p-6 flex flex-col items-center justify-center border border-white/5 text-center shadow-2xl relative overflow-hidden group">
                                    {/* Faded Flag Background */}
                                    <div className="absolute -top-4 -left-4 w-40 h-40 opacity-10 group-hover:opacity-20 transition-opacity duration-700 select-none pointer-events-none" style={{ maskImage: 'radial-gradient(circle at top left, black, transparent 70%)', WebkitMaskImage: 'radial-gradient(circle at top left, black, transparent 70%)' }}>
                                        <img src={story.flag} alt={`${story.country} Flag`} className="w-full h-full object-cover" />
                                    </div>
                                    
                                    {/* Dotted Pattern (Right) */}
                                    <div className="absolute right-4 top-1/3 flex flex-wrap w-6 gap-2 opacity-[0.03] pointer-events-none">
                                        {[...Array(8)].map((_, i) => <div key={i} className="w-1 h-1 rounded-full bg-white"></div>)}
                                    </div>
                                    {/* Dotted Pattern (Left) */}
                                    <div className="absolute left-4 top-1/3 flex flex-wrap w-6 gap-2 opacity-[0.03] pointer-events-none">
                                        {[...Array(8)].map((_, i) => <div key={i} className="w-1 h-1 rounded-full bg-white"></div>)}
                                    </div>

                                    {/* Avatar */}
                                    <div className="w-28 h-36 sm:w-32 sm:h-40 md:w-32 md:h-40 rounded-[1rem] overflow-hidden border-2 border-[#e6b941] shadow-[0_0_15px_rgba(230,185,65,0.15)] z-10 shrink-0 bg-white mt-1 mb-4 transition-transform duration-500 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(230,185,65,0.3)]">
                                        {story.hasClientImage && story.clientImg ? (
                                            <img src={story.clientImg} alt={story.name} className="w-full h-full object-cover object-top" />
                                        ) : ['dipakkumar k. bhesania', 'rekhaben d. bhesania', 'siddarth lunagariya', 'meenaben savaliya'].some(name => story.name.toLowerCase().includes(name.split(' ')[0].toLowerCase())) ? (
                                            <img src={story.flag} alt={`${story.country} Flag`} className="w-full h-full object-cover" />
                                        ) : (
                                            <ClientAvatar />
                                        )}
                                    </div>

                                    {/* Name */}
                                    <h4 className="w-full text-base sm:text-lg md:text-xl font-sans font-bold text-white uppercase tracking-widest z-10 drop-shadow-md leading-tight px-2">
                                        {firstName} <br />
                                        <span className="text-[#e6b941]">{lastName}</span>
                                    </h4>

                                    {/* Divider 1 */}
                                    <div className="flex items-center justify-center w-full my-3 sm:my-4 z-10 opacity-70 px-4">
                                        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#e6b941]"></div>
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#e6b941] mx-3"></div>
                                        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#e6b941]"></div>
                                    </div>

                                    {/* Country Badge */}
                                    <div className="flex items-center justify-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 border border-white/10 rounded-full bg-white/5 z-10 backdrop-blur-sm transition-colors group-hover:bg-white/10 shadow-inner scale-90 sm:scale-100">
                                        <img src={story.flag} alt={`${story.country} Flag`} className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover shadow-sm border border-white/20" />
                                        <div className="w-[1px] h-3 sm:h-4 bg-white/20"></div>
                                        <span className="text-white font-bold tracking-widest text-[0.7rem] sm:text-xs uppercase pt-0.5">{story.country}</span>
                                    </div>

                                    {/* Visa Type */}
                                    <div className="flex items-center justify-center w-full mt-4 sm:mt-5 mb-1 sm:mb-2 z-10 opacity-70 px-4 sm:px-6">
                                        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-gray-500"></div>
                                        <div className="px-3 flex items-center gap-1.5 sm:gap-2.5 text-white font-bold tracking-widest text-[0.6rem] sm:text-[0.65rem] uppercase whitespace-nowrap">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 text-[#e6b941]">
                                                {story.visa.toLowerCase().includes('student') ? (
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                                                ) : (
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                                                )}
                                            </svg>
                                            {story.visa}
                                        </div>
                                        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-gray-500"></div>
                                    </div>
                                </div>
                            )}
                        </div>
                        );
                    })}
                </div>

                {/* Right Button */}
                <button 
                    onClick={() => scroll('right')} 
                    className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30 bg-black/60 hover:bg-[#e6b941] text-white p-3 rounded-full shadow-2xl transition-all duration-300 opacity-80 hover:opacity-100"
                    aria-label="Scroll Right"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
            
            {/* Inject small style for webkit scrollbar hiding since tailwind doesn't have it by default */}
            <style dangerouslySetInnerHTML={{__html: `
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}} />
        </section>
    );
};

export default SuccessStories;
