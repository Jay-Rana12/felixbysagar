import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FileText, MessageSquare, ChevronDown, ChevronUp,
    CheckCircle2, ArrowRight, Lightbulb, AlertTriangle,
    BookOpen, Mic, Star, Shield, Clock, Target
} from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const sopTips = [
    {
        category: "Structure",
        icon: <BookOpen size={22} />,
        color: "from-blue-500/20 to-blue-600/5",
        border: "border-blue-500/20",
        accent: "text-blue-400",
        tips: [
            "Start with a compelling introduction that clearly states your purpose",
            "Follow a chronological flow: past → present → future",
            "Keep it concise – ideally 700–1000 words",
            "End with a strong conclusion tying back to your goals"
        ]
    },
    {
        category: "Content Quality",
        icon: <Star size={22} />,
        color: "from-amber-500/20 to-amber-600/5",
        border: "border-amber-500/20",
        accent: "text-amber-400",
        tips: [
            "Be specific about why you chose this particular university/country",
            "Highlight unique achievements and milestones",
            "Connect your past experience to your future goals",
            "Demonstrate research – mention specific programs, faculty, or labs"
        ]
    },
    {
        category: "Common Mistakes",
        icon: <AlertTriangle size={22} />,
        color: "from-red-500/20 to-red-600/5",
        border: "border-red-500/20",
        accent: "text-red-400",
        tips: [
            "Avoid vague statements like 'I want to explore opportunities'",
            "Never copy templates – officers detect it immediately",
            "Don't focus only on personal hardships unless truly relevant",
            "Avoid grammar errors and overly complex vocabulary"
        ]
    },
    {
        category: "Pro Tips",
        icon: <Lightbulb size={22} />,
        color: "from-green-500/20 to-green-600/5",
        border: "border-green-500/20",
        accent: "text-green-400",
        tips: [
            "Get your SOP reviewed by a professional consultant",
            "Tailor each SOP for each institution – no copy-paste",
            "Use active voice and confident language throughout",
            "Have a trusted native English speaker proofread it"
        ]
    }
];

const interviewQAs = [
    {
        category: "General Questions",
        icon: <MessageSquare size={18} />,
        questions: [
            {
                q: "Why do you want to study/work in this country?",
                a: "Focus on specific opportunities not available in your home country – mention research facilities, industry hubs, quality of education, or career pathways. Be genuine and country-specific."
            },
            {
                q: "What will you do after completing your program?",
                a: "Demonstrate clear intent to return (for student/tourist visas) or describe your long-term career vision. Officers look for clarity and honesty about your plans."
            },
            {
                q: "How will you fund your education/stay?",
                a: "Be ready with exact figures. Know your tuition fees, living expenses, and your exact funding source (savings, loan, sponsor). Never give vague answers."
            },
            {
                q: "Tell me about yourself.",
                a: "Give a structured 60-second pitch: your current role/education → key achievement → why you're applying → what you plan to do next. Practice until it sounds natural."
            }
        ]
    },
    {
        category: "Study Visa Specific",
        icon: <BookOpen size={18} />,
        questions: [
            {
                q: "Why did you choose this specific university?",
                a: "Name specific professors, research labs, rankings, alumni network, or unique course modules. Vague answers raise red flags. Research before the interview."
            },
            {
                q: "What is your academic background?",
                a: "Summarize your degree, GPA, relevant subjects, and key projects. Highlight how they relate directly to the course you're applying for."
            },
            {
                q: "Did you receive any scholarship?",
                a: "Answer honestly. If yes, explain the scholarship and criteria. If no, explain your alternative funding plan confidently."
            }
        ]
    },
    {
        category: "Work Visa Specific",
        icon: <Target size={18} />,
        questions: [
            {
                q: "Do you have a job offer?",
                a: "Carry your offer letter and be ready to explain your role, employer, salary, and how you qualified. Know details about your employer's business."
            },
            {
                q: "What are your qualifications for this job?",
                a: "Connect your education and experience directly to the job description. Use specific examples and metrics where possible."
            },
            {
                q: "Have you ever been refused a visa?",
                a: "Answer honestly. If yes, explain what was different this time and what additional documents you've submitted. Officers value transparency."
            }
        ]
    },
    {
        category: "Tough Questions",
        icon: <Shield size={18} />,
        questions: [
            {
                q: "How do we know you'll return to your home country?",
                a: "Show strong ties: property, family, stable job waiting, business interests. The more concrete ties you demonstrate, the stronger your case."
            },
            {
                q: "Why was there a gap in your education/career?",
                a: "Prepare an honest, positive explanation. Frame it productively – skill development, family responsibility, health recovery. Never be defensive."
            },
            {
                q: "Why didn't you study/work in your own country?",
                a: "Explain specific advantages abroad that genuinely serve your goals. Research programs that don't exist or aren't as strong at home."
            }
        ]
    }
];

const InterviewQAItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`border rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer ${isOpen ? 'border-accent/40 bg-accent/5' : 'border-white/5 bg-white/[0.02] hover:border-white/15'}`}
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="flex items-center justify-between px-5 sm:px-7 py-4 sm:py-5 gap-4">
                <p className="text-white/90 font-semibold text-sm sm:text-base leading-snug">{question}</p>
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-accent text-primary' : 'bg-white/5 text-white/60'}`}>
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <div className="px-5 sm:px-7 pb-5 sm:pb-6 pt-1 border-t border-white/5">
                            <div className="flex gap-3">
                                <div className="shrink-0 mt-1">
                                    <CheckCircle2 size={16} className="text-accent" />
                                </div>
                                <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">{answer}</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const SOPGuide = () => {
    const [activeTab, setActiveTab] = useState('sop');
    const headerRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const ctx = gsap.context(() => {
            gsap.fromTo(headerRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
            );
        });
        return () => ctx.revert();
    }, []);

    return (
        <div className="bg-[#010611] min-h-screen pt-24 overflow-x-hidden">

            {/* ── Header ── */}
            <section className="container mx-auto px-4 sm:px-6 py-10 sm:py-16 text-center relative z-10" ref={headerRef}>
                <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-accent/10 border border-accent/20 mb-6 sm:mb-8">
                    <FileText className="text-accent w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span className="text-accent text-[9px] sm:text-[11px] font-black uppercase tracking-[0.3em] sm:tracking-[0.5em]">Felix by Sagar</span>
                </div>
                <h1 className="text-4xl sm:text-6xl md:text-8xl font-heading font-black text-white mb-4 sm:mb-6 leading-tight tracking-tighter uppercase">
                    Expert SOP &<br />
                    <span className="text-gradient">Interview Guide</span>
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg md:text-xl font-light leading-relaxed">
                    Master your Statement of Purpose and visa interview with our battle-tested strategies used by thousands of successful applicants.
                </p>

                {/* Stats Row */}
                <div className="flex flex-wrap justify-center gap-6 sm:gap-12 mt-10 sm:mt-14">
                    {[
                        { icon: <Star size={16} />, label: "SOP Approvals", value: "3,200+" },
                        { icon: <Mic size={16} />, label: "Interview Success", value: "100%" },
                        { icon: <Clock size={16} />, label: "Avg. Prep Time", value: "3 Days" },
                    ].map((s, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                                {s.icon}
                            </div>
                            <div className="text-left">
                                <div className="text-white font-black text-lg sm:text-xl leading-none">{s.value}</div>
                                <div className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-widest">{s.label}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Tab Switcher ── */}
            <div className="container mx-auto px-4 sm:px-6 mb-10 sm:mb-16">
                <div className="flex justify-center">
                    <div className="inline-flex bg-white/[0.03] border border-white/10 rounded-2xl p-1.5 gap-1">
                        {[
                            { id: 'sop', label: 'SOP Guide', icon: <FileText size={16} /> },
                            { id: 'interview', label: 'Interview Q&A', icon: <MessageSquare size={16} /> }
                        ].map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-5 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === tab.id ? 'bg-accent text-primary shadow-lg' : 'text-gray-400 hover:text-white'}`}
                            >
                                {tab.icon}
                                <span className="hidden sm:inline">{tab.label}</span>
                                <span className="sm:hidden">{tab.id === 'sop' ? 'SOP' : 'Interview'}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── SOP TAB ── */}
            <AnimatePresence mode="wait">
                {activeTab === 'sop' && (
                    <motion.div
                        key="sop"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="container mx-auto px-4 sm:px-6 pb-20"
                    >
                        {/* SOP Step Guide */}
                        <div className="max-w-4xl mx-auto mb-16">
                            <h2 className="text-2xl sm:text-4xl font-heading font-black text-white text-center mb-10 uppercase tracking-tighter">
                                How to Write a <span className="text-gradient">Perfect SOP</span>
                            </h2>
                            <div className="space-y-4">
                                {[
                                    { step: "01", title: "Opening Paragraph", desc: "Start with a powerful hook – a quote, a pivotal moment, or a bold statement about your field. Introduce who you are and what you aim to achieve. Avoid generic openers like 'Since childhood, I have always been interested in…'" },
                                    { step: "02", title: "Academic Background", desc: "Summarize your educational journey. Highlight relevant subjects, projects, and achievements. Connect your studies directly to the program you're applying for. Explain any grades or gaps honestly." },
                                    { step: "03", title: "Professional Experience", desc: "Detail work experience, internships, or research relevant to your application. Use specific examples with numbers and outcomes. Show growth and progression in your career journey." },
                                    { step: "04", title: "Why This Program & Institution", desc: "This is the most critical section. Mention specific courses, faculty members, research groups, or facilities. Demonstrate that you've done your homework. Generic praise will hurt your application." },
                                    { step: "05", title: "Future Goals", desc: "Outline your short-term and long-term career goals. Explain how this specific program is the missing link. For student visas, make your intention to return clear through your future plans." },
                                    { step: "06", title: "Closing Statement", desc: "Restate your passion and commitment. Thank the committee. End confidently, not desperately. Leave the reader with a strong final impression." },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 sm:gap-6 p-5 sm:p-7 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-accent/25 transition-all group">
                                        <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-black text-sm sm:text-base group-hover:bg-accent group-hover:text-primary transition-all">
                                            {item.step}
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold text-base sm:text-lg mb-2">{item.title}</h3>
                                            <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* SOP Tips Grid */}
                        <h2 className="text-2xl sm:text-4xl font-heading font-black text-white text-center mb-10 uppercase tracking-tighter">
                            SOP <span className="text-gradient">Tips & Mistakes</span>
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
                            {sopTips.map((section, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className={`bg-gradient-to-br ${section.color} border ${section.border} rounded-3xl p-6 sm:p-8`}
                                >
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className={`${section.accent}`}>{section.icon}</div>
                                        <h3 className={`font-black text-base sm:text-lg uppercase tracking-wider ${section.accent}`}>{section.category}</h3>
                                    </div>
                                    <ul className="space-y-3">
                                        {section.tips.map((tip, j) => (
                                            <li key={j} className="flex gap-3 text-sm sm:text-base text-gray-300 font-light leading-relaxed">
                                                <ArrowRight size={14} className={`shrink-0 mt-1 ${section.accent}`} />
                                                {tip}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* ── INTERVIEW TAB ── */}
                {activeTab === 'interview' && (
                    <motion.div
                        key="interview"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="container mx-auto px-4 sm:px-6 pb-20"
                    >
                        {/* Top Tips */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto mb-14">
                            {[
                                { icon: <Shield size={20} />, tip: "Stay Calm & Confident" },
                                { icon: <BookOpen size={20} />, tip: "Know Your Application" },
                                { icon: <Clock size={20} />, tip: "Keep Answers Brief" },
                                { icon: <CheckCircle2 size={20} />, tip: "Always Be Honest" },
                            ].map((t, i) => (
                                <div key={i} className="flex flex-col items-center text-center p-4 sm:p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-accent/30 transition-all">
                                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-3">
                                        {t.icon}
                                    </div>
                                    <p className="text-white text-xs sm:text-sm font-bold leading-snug">{t.tip}</p>
                                </div>
                            ))}
                        </div>

                        {/* Q&A Sections */}
                        <div className="max-w-4xl mx-auto space-y-12">
                            {interviewQAs.map((section, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="w-9 h-9 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                                            {section.icon}
                                        </div>
                                        <h2 className="text-lg sm:text-2xl font-black text-white uppercase tracking-tight">{section.category}</h2>
                                    </div>
                                    <div className="space-y-3">
                                        {section.questions.map((qa, j) => (
                                            <InterviewQAItem key={j} question={qa.q} answer={qa.a} />
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ── CTA ── */}
            <section className="container mx-auto px-4 sm:px-6 pb-24">
                <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-[2.5rem] sm:rounded-[3rem] p-10 sm:p-16">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center mx-auto mb-6">
                        <FileText className="text-accent" size={28} />
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-heading font-black text-white mb-4 uppercase tracking-tighter">
                        Need a <span className="text-gradient">Personal SOP Review</span>?
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg font-light mb-8 leading-relaxed">
                        Our expert consultants personally review and refine your SOP and run mock visa interviews to maximize your approval chances.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-3 bg-accent text-primary font-black px-8 sm:px-12 py-4 sm:py-5 rounded-2xl hover:bg-white transition-all duration-300 uppercase tracking-widest text-xs sm:text-sm group shadow-xl"
                    >
                        Get Expert Help
                        <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default SOPGuide;
