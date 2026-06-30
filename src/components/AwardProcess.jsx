import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import {
    Award, ShieldCheck, TrendingUp, Users, Star,
    CheckCircle2, Zap, Globe, Clock, BadgeCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

const awards = [
    {
        icon: <Award size={28} />,
        title: "Best Immigration Consultancy",
        year: "2025",
        org: "Gujarat Business Awards",
        color: "from-amber-500/20 to-yellow-600/5",
        border: "border-amber-500/25",
        text: "text-amber-400"
    },
    {
        icon: <Star size={28} />,
        title: "Top Rated Visa Expert",
        year: "2025",
        org: "India Immigration Council",
        color: "from-blue-500/20 to-blue-600/5",
        border: "border-blue-500/25",
        text: "text-blue-400"
    },
    {
        icon: <BadgeCheck size={28} />,
        title: "Excellence in Client Service",
        year: "2026",
        org: "National Visa Forum",
        color: "from-emerald-500/20 to-green-600/5",
        border: "border-emerald-500/25",
        text: "text-emerald-400"
    },
    {
        icon: <Globe size={28} />,
        title: "Global Mobility Leader",
        year: "2026",
        org: "South Asia Immigration Summit",
        color: "from-purple-500/20 to-violet-600/5",
        border: "border-purple-500/25",
        text: "text-purple-400"
    }
];

const accuracyPoints = [
    {
        icon: <ShieldCheck size={22} />,
        title: "Zero Error Documentation",
        desc: "Every document is triple-checked by senior consultants before submission, ensuring a flawless application file."
    },
    {
        icon: <TrendingUp size={22} />,
        title: "100% Approval Tracking",
        desc: "Real-time tracking of every application stage from submission to approval — you're always in the loop."
    },
    {
        icon: <Zap size={22} />,
        title: "Fastest Processing Times",
        desc: "We optimize your application for the fastest possible turnaround without compromising on quality or accuracy."
    },
    {
        icon: <Users size={22} />,
        title: "Dedicated Case Manager",
        desc: "Each client gets a personal case manager — one point of contact from consultation to landing."
    },
    {
        icon: <Clock size={22} />,
        title: "On-Time Submissions",
        desc: "We never miss a deadline. Our internal calendar ensures your application is submitted ahead of time, every time."
    },
    {
        icon: <CheckCircle2 size={22} />,
        title: "Embassy-Verified Formats",
        desc: "All forms and documents follow the exact official embassy requirements — updated in real-time as policies change."
    }
];

const stats = [
    { value: "100%", label: "Success Rate" },
    { value: "3,500+", label: "Visas Approved" },
    { value: "4", label: "Awards Won" },
    { value: "30+", label: "Countries Served" }
];

const CountUp = ({ value }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const [displayValue, setDisplayValue] = useState(0);

    const numMatch = value.match(/\d+/g);
    const targetNumber = numMatch ? parseInt(numMatch.join(''), 10) : 0;
    const prefix = value.match(/^[^\d]+/)?.[0] || '';
    const suffix = value.match(/[^\d]+$/)?.[0] || '';

    useEffect(() => {
        if (isInView && targetNumber > 0) {
            const controls = animate(0, targetNumber, {
                duration: 2.5,
                ease: "easeOut",
                onUpdate(val) {
                    setDisplayValue(Math.floor(val));
                }
            });
            return () => controls.stop();
        } else if (isInView) {
            setDisplayValue(targetNumber);
        }
    }, [isInView, targetNumber]);

    const formattedNumber = displayValue.toLocaleString();

    return (
        <span ref={ref} className={`transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
            {targetNumber > 0 ? `${prefix}${formattedNumber}${suffix}` : value}
        </span>
    );
};

const AwardProcess = () => {
    const sectionRef = useRef(null);

    return (
        <section className="bg-[#010611] py-20 sm:py-28 overflow-hidden relative">
            {/* Ambient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">

                {/* ── Section Header ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-14 sm:mb-20"
                >
                    <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-accent/10 border border-accent/20 mb-6 sm:mb-8">
                        <Award className="text-accent w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <span className="text-accent text-[9px] sm:text-[11px] font-black uppercase tracking-[0.3em] sm:tracking-[0.5em]">Certified Excellence</span>
                    </div>
                    <h2 className="text-4xl sm:text-6xl md:text-8xl font-heading font-black text-white mb-4 sm:mb-6 leading-tight tracking-tighter uppercase">
                        Award Winning &<br />
                        <span className="text-gradient">Accurate Process</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-xl font-light leading-relaxed">
                        Recognized globally for precision, speed, and unmatched client success — our process is built on accuracy from day one.
                    </p>
                </motion.div>

                {/* ── Stats Row ── */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-24 max-w-4xl mx-auto">
                    {stats.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="text-center p-5 sm:p-8 bg-white/[0.02] border border-white/5 rounded-2xl sm:rounded-3xl hover:border-accent/30 hover:bg-white/[0.04] transition-all"
                        >
                            <div className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter mb-1 sm:mb-2">
                                <span className="text-gradient"><CountUp value={s.value} /></span>
                            </div>
                            <div className="text-gray-500 text-[9px] sm:text-xs uppercase tracking-widest font-bold">{s.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* ── Awards Grid ── */}
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center text-xl sm:text-3xl font-heading font-black text-white uppercase tracking-tighter mb-8 sm:mb-12"
                >
                    Our <span className="text-gradient">Recognitions</span>
                </motion.h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-24">
                    {awards.map((award, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            whileHover={{ y: -6 }}
                            className={`bg-gradient-to-br ${award.color} border ${award.border} rounded-2xl sm:rounded-3xl p-6 sm:p-8 relative overflow-hidden group`}
                        >
                            <div className="absolute top-0 right-0 w-20 h-20 bg-white/[0.02] rounded-full -translate-y-1/2 translate-x-1/2" />
                            <div className={`${award.text} mb-4 sm:mb-5`}>{award.icon}</div>
                            <h4 className="text-white font-black text-base sm:text-lg leading-snug mb-2">{award.title}</h4>
                            <p className="text-gray-500 text-xs sm:text-sm mb-3">{award.org}</p>
                            <div className={`inline-block px-3 py-1 rounded-full border ${award.border} ${award.text} text-[10px] sm:text-xs font-black uppercase tracking-widest`}>
                                {award.year}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ── Accuracy Process ── */}
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center text-xl sm:text-3xl font-heading font-black text-white uppercase tracking-tighter mb-8 sm:mb-12"
                >
                    Why Our Process is <span className="text-gradient">100% Accurate</span>
                </motion.h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto mb-16 sm:mb-24">
                    {accuracyPoints.map((point, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, duration: 0.6 }}
                            whileHover={{ y: -4 }}
                            className="flex gap-4 p-5 sm:p-7 bg-white/[0.02] border border-white/5 rounded-2xl sm:rounded-3xl hover:border-accent/30 hover:bg-white/[0.04] transition-all group"
                        >
                            <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-all">
                                {point.icon}
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-sm sm:text-base mb-1.5 sm:mb-2">{point.title}</h4>
                                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light">{point.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ── CTA Banner ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="relative bg-gradient-to-r from-accent/15 via-accent/10 to-accent/5 border border-accent/25 rounded-3xl sm:rounded-[3rem] p-8 sm:p-14 text-center overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.04] pointer-events-none" />
                        <div className="relative z-10">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center mx-auto mb-5 sm:mb-6">
                                <Award className="text-accent" size={28} />
                            </div>
                            <h3 className="text-2xl sm:text-4xl md:text-5xl font-heading font-black text-white uppercase tracking-tighter mb-3 sm:mb-4">
                                Start Your <span className="text-gradient">Award-Winning Journey</span>
                            </h3>
                            <p className="text-gray-400 text-sm sm:text-base md:text-lg font-light mb-7 sm:mb-10 max-w-xl mx-auto leading-relaxed">
                                Join thousands of successful applicants who trusted Felix by Sagar's award-winning, accurate process to change their lives.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center justify-center gap-3 bg-accent text-primary font-black px-8 sm:px-12 py-4 sm:py-5 rounded-2xl hover:bg-white transition-all duration-300 uppercase tracking-widest text-xs sm:text-sm shadow-xl hover:shadow-accent/30"
                                >
                                    Book Free Consultation
                                </Link>
                                <Link
                                    to="/process"
                                    className="inline-flex items-center justify-center gap-3 bg-white/5 border border-white/15 text-white font-black px-8 sm:px-12 py-4 sm:py-5 rounded-2xl hover:bg-white/10 transition-all duration-300 uppercase tracking-widest text-xs sm:text-sm"
                                >
                                    View Full Process
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default AwardProcess;
