import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, X, Headphones } from 'lucide-react';

const PHONE = "919714911022";
const EMAIL = "felixbysagar@gmail.com";
const WA_MSG = encodeURIComponent("Hello Felix by Sagar! I would like to inquire about your services.");

// Arc: 90°=straight-up, 180°=straight-left
// Button is bottom-right → only UP & LEFT keeps icons on screen
const ITEMS = [
    {
        label: "WhatsApp",
        href: `https://wa.me/${PHONE}?text=${WA_MSG}`,
        angle: 90,
        bg: "#25D366",
        shadow: "0 6px 20px rgba(37,211,102,0.55)",
        icon: (
            <svg viewBox="0 0 24 24" fill="white" width="21" height="21">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
        )
    },
    {
        label: "Call",
        href: `tel:+${PHONE}`,
        angle: 112,
        bg: "#2563EB",
        shadow: "0 6px 20px rgba(37,99,235,0.55)",
        icon: <Phone fill="white" stroke="none" width="21" height="21" />
    },
    {
        label: "Email",
        href: `mailto:${EMAIL}`,
        angle: 135,
        bg: "#7C3AED",
        shadow: "0 6px 20px rgba(124,58,237,0.55)",
        icon: <Mail stroke="white" fill="none" width="21" height="21" />
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/felixbysagar/",
        angle: 158,
        bg: "linear-gradient(135deg,#f09433,#dc2743,#bc1888)",
        shadow: "0 6px 20px rgba(220,39,67,0.55)",
        icon: (
            <svg viewBox="0 0 24 24" fill="white" width="21" height="21">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
        )
    },
    {
        label: "Facebook",
        href: "https://www.facebook.com/share/1KqyfvbKd6/",
        angle: 180,
        bg: "#1877F2",
        shadow: "0 6px 20px rgba(24,119,242,0.55)",
        icon: (
            <svg viewBox="0 0 24 24" fill="white" width="21" height="21">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
        )
    },
];

// angle: 0°=right, 90°=up, 180°=left
const toXY = (deg, r) => {
    const rad = (deg * Math.PI) / 180;
    return {
        x: Math.cos(rad) * r,   // negative = left
        y: -Math.sin(rad) * r,  // negative = up (screen y inverted)
    };
};

const MAIN = 56;   // main button size
const SUB  = 46;   // child button size
const R    = 135;  // arc radius — comfortable gap between buttons

export default function FloatingContactButtons() {
    const [open, setOpen] = useState(false);

    // Close on outside click
    useEffect(() => {
        if (!open) return;
        const close = (e) => { if (!e.target.closest('#felix-fab')) setOpen(false); };
        document.addEventListener('pointerdown', close);
        return () => document.removeEventListener('pointerdown', close);
    }, [open]);

    return (
        <>
            {/* Single fixed anchor = bottom-right corner */}
            <div
                id="felix-fab"
                style={{ position: 'fixed', bottom: 22, right: 22, width: MAIN, height: MAIN, zIndex: 9999 }}
            >
                {/* ── Sub buttons (rendered ONCE, centered on main btn) ── */}
                {ITEMS.map((item, i) => {
                    const { x, y } = toXY(item.angle, R);
                    const off = (MAIN - SUB) / 2; // center sub on main

                    return (
                        <AnimatePresence key={item.label}>
                            {open && (
                                <motion.a
                                    href={item.href}
                                    target={item.href.startsWith('http') ? '_blank' : '_self'}
                                    rel="noopener noreferrer"
                                    aria-label={item.label}
                                    title={item.label}
                                    initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                                    animate={{ x, y, scale: 1, opacity: 1 }}
                                    exit={{
                                        x: 0, y: 0, scale: 0, opacity: 0,
                                        transition: { delay: i * 0.03, duration: 0.2 }
                                    }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 320,
                                        damping: 25,
                                        delay: i * 0.06,
                                    }}
                                    whileHover={{ scale: 1.18 }}
                                    whileTap={{ scale: 0.88 }}
                                    style={{
                                        position: 'absolute',
                                        top: off,
                                        left: off,
                                        width: SUB,
                                        height: SUB,
                                        borderRadius: '50%',
                                        background: item.bg,
                                        boxShadow: item.shadow,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        textDecoration: 'none',
                                        color: 'white',
                                        border: '2px solid rgba(255,255,255,0.15)',
                                    }}
                                >
                                    {item.icon}
                                </motion.a>
                            )}
                        </AnimatePresence>
                    );
                })}

                {/* ── Main gold button ── */}
                <motion.button
                    onClick={() => setOpen(o => !o)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Open contact menu"
                    style={{
                        position: 'absolute',
                        inset: 0,
                        width: MAIN,
                        height: MAIN,
                        borderRadius: '50%',
                        background: '#d4af37',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#010611',
                        boxShadow: '0 6px 28px rgba(212,175,55,0.55)',
                        zIndex: 2,
                    }}
                >
                    {/* Pulse ring */}
                    <span style={{
                        position: 'absolute', inset: 0,
                        borderRadius: '50%',
                        background: '#d4af37',
                        animation: 'fabPulse 2.2s ease-out infinite',
                        pointerEvents: 'none',
                    }} />

                    <AnimatePresence mode="wait">
                        {open ? (
                            <motion.span key="x"
                                initial={{ rotate: -90, opacity: 0, scale: 0.3 }}
                                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                exit={{ rotate: 90, opacity: 0, scale: 0.3 }}
                                transition={{ duration: 0.18 }}
                                style={{ display: 'flex', position: 'relative', zIndex: 3 }}
                            >
                                <X strokeWidth={2.5} width={24} height={24} />
                            </motion.span>
                        ) : (
                            <motion.span key="chat"
                                initial={{ rotate: 90, opacity: 0, scale: 0.3 }}
                                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                exit={{ rotate: -90, opacity: 0, scale: 0.3 }}
                                transition={{ duration: 0.18 }}
                                style={{ display: 'flex', position: 'relative', zIndex: 3 }}
                            >
                                <Headphones strokeWidth={2.2} width={26} height={26} />
                            </motion.span>
                        )}
                    </AnimatePresence>
                </motion.button>
            </div>

            <style>{`
                @keyframes fabPulse {
                    0%   { transform: scale(1);   opacity: 0.4; }
                    70%  { transform: scale(2.1); opacity: 0;   }
                    100% { transform: scale(2.1); opacity: 0;   }
                }
                @media (max-width: 480px) {
                    #felix-fab { bottom: 16px !important; right: 16px !important; }
                }
            `}</style>
        </>
    );
}
