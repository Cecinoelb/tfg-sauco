import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// cn is unused in this file current implementation, removing it to satisfy linter
// import { cn } from '../lib/utils';

interface SlideLayoutProps {
    children: React.ReactNode;
    title: string;
    slideNumber: number;
    totalSlides: number;
    isActive: boolean;
}

export const SlideLayout: React.FC<SlideLayoutProps> = ({
    children,
    title,
    slideNumber,
    totalSlides,
    isActive
}) => {
    return (
        <div className="relative w-full h-screen flex flex-col p-12 overflow-hidden bg-gradient-to-br from-sauco-navy to-sauco-dark text-white">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sauco-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-sauco-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

            {/* Header */}
            <motion.header
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex justify-between items-center mb-8 border-b border-white/10 pb-4 z-10"
            >
                <h1 className="text-2xl font-bold tracking-wider text-sauco-gold uppercase">Sauco S.A.</h1>
                <div className="text-sm text-gray-400">Desarrollo de Nuevos Mercados</div>
            </motion.header>

            {/* Main Content Area */}
            <div className="flex-1 relative z-10 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                    {isActive && (
                        <motion.div
                            key={slideNumber}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="h-full flex flex-col"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                                {title}
                            </h2>
                            <div className="flex-1 text-lg md:text-xl leading-relaxed text-gray-200">
                                {children}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Footer / Progress */}
            <motion.footer
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-8 flex justify-between items-end border-t border-white/10 pt-4 z-10"
            >
                <div className="text-xs text-gray-500">TFG: Cecilia Noel Burgos</div>
                <div className="flex items-center gap-4">
                    <div className="h-1 w-32 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-sauco-gold"
                            initial={{ width: 0 }}
                            animate={{ width: `${(slideNumber / totalSlides) * 100}%` }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                    <span className="text-sm font-mono text-sauco-gold">
                        {String(slideNumber).padStart(2, '0')} / {totalSlides}
                    </span>
                </div>
            </motion.footer>
        </div>
    );
};
