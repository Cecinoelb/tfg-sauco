import React, { useState, useEffect, useCallback } from 'react';
import { SLIDES } from '../data/slides';
import { SlideLayout } from './SlideLayout';
import { ChevronRight, ChevronLeft } from 'lucide-react';

export const Presentation: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentSlide(prev => Math.min(prev + 1, SLIDES.length - 1));
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentSlide(prev => Math.max(prev - 1, 0));
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight' || e.key === 'Space') {
                nextSlide();
            } else if (e.key === 'ArrowLeft') {
                prevSlide();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [nextSlide, prevSlide]);

    const SlideContent = SLIDES[currentSlide].content;

    return (
        <div className="fixed inset-0 bg-black">
            <SlideLayout
                slideNumber={currentSlide + 1}
                totalSlides={SLIDES.length}
                title={SLIDES[currentSlide].title}
                isActive={true}
            >
                <SlideContent />
            </SlideLayout>

            {/* Navigation Controls (Hover) */}
            <div className="absolute inset-0 z-50 pointer-events-none flex justify-between items-center px-4">
                <button
                    onClick={prevSlide}
                    className="pointer-events-auto p-2 rounded-full hover:bg-white/10 text-white/20 hover:text-white transition-colors disabled:opacity-0"
                    disabled={currentSlide === 0}
                >
                    <ChevronLeft size={48} />
                </button>
                <button
                    onClick={nextSlide}
                    className="pointer-events-auto p-2 rounded-full hover:bg-white/10 text-white/20 hover:text-white transition-colors disabled:opacity-0"
                    disabled={currentSlide === SLIDES.length - 1}
                >
                    <ChevronRight size={48} />
                </button>
            </div>
        </div>
    );
};
