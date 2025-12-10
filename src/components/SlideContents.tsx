import { motion } from 'framer-motion';
import {
    TrendingUp, Users, CheckCircle,
    Lightbulb, DollarSign, Target, Eye, Shield, Share2, Activity,
    Scale, Swords, Map, ArrowRight,
    Factory, Utensils, Store
} from 'lucide-react';
import { cn } from '../lib/utils';
import slide1Bg from '../assets/slide1-bg.png';
import slide4Map from '../assets/slide4-map.jpg';
import slide6Bg from '../assets/slide6-action.png';
import slide12Img from '../assets/slide12-close.jpg';
import logoSiglo21 from '../assets/logo-siglo21.png';

// Common animation variants
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

// --- Slide 1: Título ---
export const TitleSlide = () => (
    <div className="relative flex flex-col items-center justify-center h-full text-center space-y-8">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
            <img
                src={slide1Bg}
                alt="Background"
                className="w-full h-full object-cover opacity-50 blur-[2px] scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        </div>

        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 space-y-4"
        >
            <div className="text-xl md:text-2xl text-sauco-gold tracking-[0.2em] font-light uppercase drop-shadow-md">
                Trabajo Final de Grado
            </div>
            <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400 drop-shadow-2xl">
                Sauco S.A.
            </h1>
            <div className="h-1 w-24 bg-sauco-gold mx-auto my-6 rounded-full shadow-[0_0_15px_rgba(212,175,55,0.6)]" />
            <h2 className="text-3xl md:text-4xl font-light text-gray-100 drop-shadow-lg">
                Desarrollo de Nuevos Mercados
            </h2>
        </motion.div>

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-sm md:text-base border-t border-white/20 pt-8"
        >
            <div>
                <span className="block text-sauco-gold/90 uppercase text-xs tracking-wider mb-1 font-semibold">Autor</span>
                <span className="text-white font-medium">Cecilia Noel Burgos</span>
            </div>
            <div>
                <span className="block text-sauco-gold/90 uppercase text-xs tracking-wider mb-1 font-semibold">Profesor</span>
                <span className="text-white font-medium">Carlos Vittar</span>
            </div>
            <div className="flex flex-col items-center space-y-3">
                <span className="block text-sauco-gold/90 uppercase text-xs tracking-wider font-semibold">Institución</span>
                <motion.img
                    src={logoSiglo21}
                    alt="Universidad Siglo 21"
                    className="h-16 w-auto object-contain filter drop-shadow-lg"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                />
            </div>
        </motion.div>
    </div>
);

// --- Slide 2: Introducción (Estructura Dinámica) ---
export const IntroSlide = () => (
    <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col h-full bg-black/40 rounded-3xl overflow-hidden border border-white/10 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-black pointer-events-none" />

        {/* Main Content Area */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 p-8 relative z-10">

            {/* Left Col: Network Diagram (Grupo Meta -> Sauco) */}
            <div className="lg:col-span-5 flex flex-col justify-center items-center relative">
                <div className="relative">
                    {/* Linha de conexión */}
                    <motion.div
                        initial={{ height: 0 }} animate={{ height: 100 }} transition={{ duration: 1, delay: 0.5 }}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-gray-600 to-sauco-gold"
                    />

                    {/* Grupo Meta Node */}
                    <motion.div variants={itemVariants} className="relative z-10 mb-16 text-center">
                        <div className="w-24 h-24 rounded-full border-2 border-gray-600 flex items-center justify-center bg-gray-900 mx-auto shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                            <Share2 className="text-gray-400" size={32} />
                        </div>
                        <h3 className="mt-4 text-gray-400 font-bold tracking-widest text-sm uppercase">Grupo Meta</h3>
                        <p className="text-xs text-gray-600">Holding Estratégico</p>
                    </motion.div>

                    {/* Sauco S.A. Node (Hero) */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.8, type: "spring" }}
                        className="relative z-20 text-center"
                    >
                        <div className="absolute inset-0 bg-sauco-gold/20 blur-xl rounded-full" />
                        <div className="w-40 h-40 rounded-full border-4 border-sauco-gold flex flex-col items-center justify-center bg-black via-gray-900 to-black mx-auto shadow-[0_0_50px_rgba(212,175,55,0.3)] relative">
                            <span className="text-3xl font-bold text-white mb-1">SAUCO</span>
                            <span className="text-xs text-sauco-gold font-bold tracking-wider uppercase">Unidad Estratégica</span>
                        </div>
                        <div className="mt-6 flex justify-center gap-2">
                            <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">Restaurante La Jirafa</div>
                            <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">Cervecería Checa</div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Right Col: Strategic Pillars Cards */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
                <motion.h3 variants={itemVariants} className="text-sauco-gold uppercase tracking-[0.2em] font-bold text-sm mb-2 ml-1">Bases Estratégicas</motion.h3>

                {/* Misión */}
                <motion.div variants={itemVariants} className="group flex gap-5 p-5 bg-white/5 border-l-2 border-sauco-gold rounded-r-xl hover:bg-white/10 transition-all">
                    <div className="mt-1"><Target className="text-sauco-gold" size={24} /></div>
                    <div>
                        <h4 className="text-white font-bold text-lg mb-1">Misión</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Ser una empresa de máximo crecimiento que genere bienestar en la familia y la comunidad.
                        </p>
                    </div>
                </motion.div>

                {/* Visión */}
                <motion.div variants={itemVariants} className="group flex gap-5 p-5 bg-white/5 border-l-2 border-blue-400 rounded-r-xl hover:bg-white/10 transition-all">
                    <div className="mt-1"><Eye className="text-blue-400" size={24} /></div>
                    <div>
                        <h4 className="text-white font-bold text-lg mb-1">Visión</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Crear y gestionar profesionalmente inversiones del grupo, permitiendo un crecimiento diversificado y sustentable a largo plazo.
                        </p>
                    </div>
                </motion.div>

                {/* Valores */}
                <motion.div variants={itemVariants} className="group flex gap-5 p-5 bg-white/5 border-l-2 border-purple-400 rounded-r-xl hover:bg-white/10 transition-all">
                    <div className="mt-1"><Shield className="text-purple-400" size={24} /></div>
                    <div>
                        <h4 className="text-white font-bold text-lg mb-1">Valores</h4>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {['Positivismo', 'Respeto', 'Confianza', 'Compromiso'].map(tag => (
                                <span key={tag} className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 text-xs font-medium border border-purple-500/20">{tag}</span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>

        {/* Footer: Problems */}
        <div className="bg-black/40 border-t border-white/5 p-4">
            <motion.div variants={itemVariants} className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">Problemas Observables</span>
                <div className="flex gap-4 md:gap-8 overflow-x-auto">
                    {[
                        { label: "Falta de presencia en el mercado", color: "text-orange-400" },
                        { label: "Identidad y Marketing Insuficiente", color: "text-red-400" },
                        { label: "Incertidumbre Económica", color: "text-yellow-400" }
                    ].map((prob, i) => (
                        <div key={i} className="flex items-center gap-2 whitespace-nowrap">
                            <Activity size={14} className={prob.color} />
                            <span className="text-gray-300 text-sm">{prob.label}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    </motion.div>
);

// --- Slide 3: Diagnóstico & Análisis Situacional ---
export const DiagnosisSlide = () => (
    <motion.div variants={container} initial="hidden" animate="show" className="h-full flex flex-col">
        {/* Tools Badges */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-6">
            {['PESTEL', '5 Fuerzas Porter', 'FODA', 'BCG', 'Matriz Ansoff'].map((tool, i) => (
                <span key={i} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-400 text-xs font-mono uppercase tracking-wider">
                    {tool}
                </span>
            ))}
        </motion.div>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Col 1: Entorno Externo (PESTEL & Porter) */}
            <div className="flex flex-col gap-4">
                <h3 className="text-sauco-gold text-sm uppercase tracking-[0.2em] font-bold pl-1 mb-1 opacity-80">Entorno Externo</h3>

                {/* PESTEL Card */}
                <motion.div variants={itemVariants} className="p-5 rounded-2xl bg-gradient-to-br from-blue-900/10 to-black border border-blue-500/20 hover:border-blue-500/40 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                        <Scale className="text-blue-400" size={20} />
                        <h4 className="text-blue-100 font-bold">Oportunidad Legal & Económica</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex gap-2">
                            <span className="text-blue-500">•</span>
                            <span><strong>PAC Franquicias:</strong> Marco legal y subsidios favorables para la expansión.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-blue-500">•</span>
                            <span><strong>Proyección 2025:</strong> Desaceleración de inflación y expansión PBI (Mejora condiciones).</span>
                        </li>
                    </ul>
                </motion.div>

                {/* Porter Card (Saturación de Mercado) */}
                <motion.div variants={itemVariants} className="flex-1 p-5 rounded-2xl bg-gradient-to-br from-red-900/10 to-black border border-red-500/20 hover:border-red-500/40 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                        <Swords className="text-red-400" size={20} />
                        <h4 className="text-red-100 font-bold">Saturación & Diferenciación</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-300 mb-4">
                        <li className="flex gap-2 items-start">
                            <span className="text-red-500 mt-1">•</span>
                            <span><strong>Oferta Homogénea:</strong> Proliferación de competidores con propuestas estandarizadas (solo despacho) sin valor agregado.</span>
                        </li>
                        <li className="flex gap-2 items-start">
                            <span className="text-red-500 mt-1">•</span>
                            <span><strong>Exigencia del Consumidor:</strong> Búsqueda de experiencias integrales que combinen gastronomía de nivel y ambiente.</span>
                        </li>
                    </ul>
                    <div className="bg-red-500/10 border border-red-500/20 p-3 rounded-lg">
                        <span className="text-xs text-red-300 font-bold uppercase block mb-1">Validación del Modelo</span>
                        <p className="text-sm text-white">Nuestra fusión <strong>Industrial + Gastronómica</strong> rompe la saturación ofreciendo una experiencia completa.</p>
                    </div>
                </motion.div>
            </div>

            {/* Col 2: Análisis Interno & Estrategia */}
            <div className="flex flex-col gap-4">
                <h3 className="text-sauco-gold text-sm uppercase tracking-[0.2em] font-bold pl-1 mb-1 opacity-80">Análisis Interno & Estrategia</h3>

                {/* FODA - Fortalezas Card */}
                <motion.div variants={itemVariants} className="p-5 rounded-2xl bg-white/5 border border-white/10">
                    <div className="flex items-center justify-between mb-4">
                        <h4 className="text-white font-bold flex items-center gap-2">
                            <CheckCircle size={18} className="text-green-500" />
                            Fortalezas Clave (FODA)
                        </h4>
                        <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded border border-green-500/30">Motor de Crecimiento</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="bg-black/20 p-3 rounded-lg border border-white/5">
                            <h5 className="text-white text-xs font-bold mb-1">Tecnología & Proceso</h5>
                            <p className="text-xs text-gray-400 leading-snug">Capacidad única de <strong>enlatado y pasteurización</strong>. Equipos de brewing de alta tecnología.</p>
                        </div>
                        <div className="bg-black/20 p-3 rounded-lg border border-white/5">
                            <h5 className="text-white text-xs font-bold mb-1">Producto & Marca</h5>
                            <p className="text-xs text-gray-400 leading-snug">Sabores exclusivos, <strong>fidelidad</strong> comprobada del cliente y marca consolidada.</p>
                        </div>
                    </div>
                </motion.div>

                {/* Ansoff Matrix Card */}
                <motion.div variants={itemVariants} className="flex-1 p-6 rounded-2xl bg-gradient-to-r from-sauco-gold/20 to-black border border-sauco-gold/50 relative group flex flex-col justify-center">
                    <div className="absolute inset-0 bg-sauco-gold/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="flex items-center justify-between mb-4 relative z-10">
                        <span className="text-sauco-gold text-xs font-bold uppercase tracking-widest">Matriz de Ansoff</span>
                        <Map className="text-sauco-gold" size={24} />
                    </div>

                    <h2 className="text-2xl text-white font-bold mb-2 relative z-10">Desarrollo de Mercado</h2>

                    <div className="flex items-center gap-3 text-sm text-gray-300 mb-4 relative z-10">
                        <span className="px-2 py-1 bg-white/10 rounded">Producto Actual</span>
                        <ArrowRight size={14} className="text-sauco-gold" />
                        <span className="px-2 py-1 bg-sauco-gold/20 text-sauco-gold rounded border border-sauco-gold/30 font-bold">Nuevo Mercado</span>
                    </div>

                    <p className="text-gray-400 text-xs leading-relaxed relative z-10 border-t border-white/10 pt-3">
                        Llevar nuestra fórmula de éxito (Cervecería Checa + Restaurante La Jirafa) a <strong>nuevas geografías</strong> mediante el modelo de Franquicias.
                    </p>
                </motion.div>
            </div>
        </div>
    </motion.div>
);

// --- Slide 4: Propuesta (La Nueva Unidad de Negocio) ---
export const ProposalSlide = () => (
    <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-2 gap-12 h-full items-center">
        {/* Left Content: The Composition */}
        <div className="flex flex-col justify-center space-y-8 relative z-10 pl-4 md:pl-8">
            <motion.div variants={itemVariants}>
                <h3 className="text-sauco-gold uppercase tracking-widest mb-2 font-bold text-sm">Modelo de Expansión</h3>
                <h2 className="text-4xl lg:text-5xl text-white font-bold mb-6 leading-tight">
                    Estrategia de <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sauco-gold to-yellow-200">Crecimiento</span>
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Potenciamos la unidad de negocio actual mediante un esquema de <strong>franquicias</strong> para maximizar la rentabilidad.
                </p>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 mb-6 max-w-md">
                    <div className="bg-sauco-gold/20 p-1.5 rounded text-sauco-gold flex-shrink-0"><TrendingUp size={16} /></div>
                    <p className="text-xs text-gray-400 leading-snug">
                        <strong className="text-white">Dato 2024:</strong> En Argentina operan más de <span className="text-white font-bold">1500 marcas</span> de franquicias, representando el <span className="text-white font-bold">2% del PBI</span> nacional.
                    </p>
                </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
                {/* Component 1: Cervecería Checa */}
                <div className="group flex items-center gap-5 p-4 rounded-2xl bg-gradient-to-r from-gray-900 to-black border border-white/10 hover:border-blue-500/30 transition-all">
                    <div className="w-12 h-12 bg-blue-900/20 flex items-center justify-center rounded-full text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.2)] group-hover:scale-110 transition-transform">
                        <Factory size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-white text-base">Cervecería Checa</h4>
                        <p className="text-xs text-gray-400">Corazón Productivo • Enlatado</p>
                    </div>
                </div>

                {/* Connector */}
                <div className="pl-8 -my-2 opacity-50"><div className="w-0.5 h-6 bg-white/20"></div></div>

                {/* Component 2: La Jirafa */}
                <div className="group flex items-center gap-5 p-4 rounded-2xl bg-gradient-to-r from-gray-900 to-black border border-white/10 hover:border-orange-500/30 transition-all">
                    <div className="w-12 h-12 bg-orange-900/20 flex items-center justify-center rounded-full text-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.2)] group-hover:scale-110 transition-transform">
                        <Utensils size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-white text-base">Restaurante La Jirafa</h4>
                        <p className="text-xs text-gray-400">Experiencia Gastronómica • Servicio</p>
                    </div>
                </div>
            </motion.div>

            {/* The Result */}
            <motion.div variants={itemVariants} className="pt-6 border-t border-white/10 flex items-center gap-4">
                <div className="bg-sauco-gold text-black p-2 rounded-lg font-bold">
                    <ArrowRight size={24} />
                </div>
                <div>
                    <span className="block text-xs text-sauco-gold uppercase tracking-wider font-bold">El Resultado</span>
                    <span className="text-2xl text-white font-bold">Franquicia "Sauco"</span>
                </div>
            </motion.div>
        </div>

        {/* Right Content: Map Image & Strategy */}
        <motion.div variants={itemVariants} className="relative h-full w-full flex items-center justify-center p-8">
            <div className="absolute inset-0 bg-sauco-gold/5 blur-[100px] rounded-full transform scale-75 pointer-events-none" />

            <img
                src={slide4Map}
                alt="Mapa Expansión Argentina"
                className="relative z-10 max-h-[60vh] w-auto object-contain drop-shadow-2xl opacity-80 grayscale-[30%] hover:grayscale-0 transition-all duration-700 rounded-xl"
            />

            {/* Overlay Card */}
            <motion.div
                initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}
                className="absolute bottom-10 right-10 bg-black/90 backdrop-blur-xl p-5 rounded-2xl border border-sauco-gold/30 shadow-2xl z-20 max-w-xs"
            >
                <div className="flex items-center gap-3 mb-2">
                    <Store className="text-sauco-gold" size={24} />
                    <h4 className="text-white font-bold text-base">Modelo Llave en Mano</h4>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                    Estandarización total de procesos para garantizar el éxito en nuevas ubicaciones.
                </p>
            </motion.div>
        </motion.div>
    </motion.div>
);

// --- Slide 5: Objetivos ---
export const ObjectivesSlide = () => (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-12">
        <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-2xl text-gray-400 mb-2">Objetivo General</h3>
            <div className="inline-block p-6 rounded-3xl bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-white/10">
                <span className="text-6xl font-bold text-white">12%</span>
                <span className="text-4xl text-gray-500 mx-4">→</span>
                <span className="text-6xl font-bold text-green-400">20%</span>
                <p className="mt-2 text-sm text-gray-400 uppercase tracking-widest">Aumento de Rentabilidad (4 años)</p>
            </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div variants={itemVariants} className="p-6 bg-white/5 rounded-2xl border border-white/5 text-center">
                <Target className="w-12 h-12 text-sauco-gold mx-auto mb-4" />
                <h4 className="text-3xl font-bold text-white mb-1">3</h4>
                <p className="text-gray-400 text-sm">Nuevas Franquicias</p>
                <p className="text-xs text-gray-600 mt-2">Primer Año</p>
            </motion.div>
            <motion.div variants={itemVariants} className="p-6 bg-white/5 rounded-2xl border border-white/5 text-center">
                <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h4 className="text-3xl font-bold text-white mb-1">+10%</h4>
                <p className="text-gray-400 text-sm">Posicionamiento</p>
                <p className="text-xs text-gray-600 mt-2">Brand Awareness</p>
            </motion.div>
            <motion.div variants={itemVariants} className="p-6 bg-white/5 rounded-2xl border border-white/5 text-center">
                <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h4 className="text-3xl font-bold text-white mb-1">&lt;10%</h4>
                <p className="text-gray-400 text-sm">Rotación Personal</p>
                <p className="text-xs text-gray-600 mt-2">Gestión RRHH</p>
            </motion.div>
        </div>
    </motion.div>
);

// --- Slide 6: Plan de Acción ---
export const ActionPlanSlide = () => (
    <motion.div variants={container} initial="hidden" animate="show" className="relative h-full flex flex-col justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl">
            <img
                src={slide6Bg}
                alt="Plan Estratégico"
                className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>

        <div className="relative z-10 grid grid-cols-1 gap-8 max-w-4xl mx-auto w-full">
            {[
                { phase: "Fase 1", title: "Estructuración Legal y Búsqueda", desc: "Búsqueda de inversores, definición contractual, selección de locales estratégicos." },
                { phase: "Fase 2", title: "Marketing y Lanzamiento", desc: "Campaña SEO/SEM agresiva, evento de inauguración, programas de fidelización inicial." },
                { phase: "Fase 3", title: "Gestión y Cultura RRHH", desc: "Capacitación intensiva del personal, implementación de manuales operativos y mejora continua." }
            ].map((phaseItem, i) => (
                <motion.div key={i} variants={itemVariants} className="flex gap-6 group p-6 rounded-2xl bg-black/40 border border-white/5 hover:bg-black/60 hover:border-sauco-gold/30 transition-all">
                    <div className="w-24 flex-shrink-0 flex flex-col items-center justify-center border-r border-white/10 pr-6">
                        <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center font-bold text-2xl text-white group-hover:bg-sauco-gold group-hover:text-black transition-colors shadow-lg">
                            {i + 1}
                        </div>
                    </div>
                    <div className="flex-1">
                        <span className="text-sm font-mono text-sauco-gold mb-1 block uppercase tracking-widest">{phaseItem.phase}</span>
                        <h4 className="text-2xl font-bold text-white mb-2">{phaseItem.title}</h4>
                        <p className="text-gray-300 text-base leading-relaxed">{phaseItem.desc}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    </motion.div>
);

// --- Slide 7: Gantt (Cronograma Detallado) ---
export const GanttSlide = () => (
    <motion.div variants={container} initial="hidden" animate="show" className="h-full flex flex-col space-y-2">
        <h3 className="text-xl font-bold text-white mb-1">Cronograma de Implementación (2024 - 2027)</h3>

        <div className="flex-1 bg-white/5 p-4 rounded-xl border border-white/10 overflow-hidden flex flex-col">
            {/* Header */}
            <div className="grid grid-cols-12 gap-2 text-[10px] text-gray-400 mb-2 border-b border-white/10 pb-1 bg-[#1a1a1a]">
                <div className="col-span-4 font-bold uppercase tracking-wider">Actividad</div>
                <div className="col-span-2 text-center border-l border-white/5">2024 (Q3-Q4)</div>
                <div className="col-span-2 text-center border-l border-white/5">2025</div>
                <div className="col-span-2 text-center border-l border-white/5">2026</div>
                <div className="col-span-2 text-center border-l border-white/5">2027</div>
            </div>

            <div className="space-y-3 overflow-y-auto custom-scrollbar pr-2">
                {/* Grupo 1: Setup & Legal */}
                <div className="space-y-1">
                    <h4 className="text-sauco-gold text-[10px] font-bold uppercase mb-1 opacity-80">1. Setup & Infraestructura</h4>
                    <GanttRow title="Manuales y Contratos" start={0} width={20} color="bg-green-600" desc="Buenas Prácticas, Inversionistas" />
                    <GanttRow title="Adecuación Locales" start={15} width={15} color="bg-green-500" desc="Obra Civil y Diseño" />
                </div>

                {/* Grupo 2: RRHH */}
                <div className="space-y-1 pt-2 border-t border-white/5">
                    <h4 className="text-sauco-gold text-[10px] font-bold uppercase mb-1 opacity-80">2. RRHH & Cultura (Retención)</h4>
                    <GanttRow title="Reclutamiento" start={15} width={15} color="bg-blue-600" desc="Selección staff inicial" />
                    <GanttRow title="Soporte y Control" start={30} width={70} color="bg-blue-500/50" desc="Supervisión continua" dashed />
                    <GanttRow title="Clima & Beneficios" start={35} width={65} color="bg-blue-400/50" desc="Hora Feliz (Martes), Premios" dashed />
                </div>

                {/* Grupo 3: Marketing */}
                <div className="space-y-1 pt-2 border-t border-white/5">
                    <h4 className="text-sauco-gold text-[10px] font-bold uppercase mb-1 opacity-80">3. Marketing & Comercial</h4>
                    <GanttRow title="Lanzamiento Digital" start={10} width={25} color="bg-purple-600" desc="Web, Ads Geolocalizados" />
                    <GanttRow title="Fidelización" start={25} width={75} color="bg-purple-500/50" desc="Comunidad, Redes Sociales" dashed />
                </div>
            </div>
        </div>

        <div className="flex justify-between text-[10px] text-gray-500 px-4">
            <span>* Sólido: Ejecución única</span>
            <span>* Traslúcido: Recurrente</span>
        </div>
    </motion.div>
);

// Helper component for Gantt Rows to keep code clean
const GanttRow = ({ title, start, width, color, desc, dashed = false }: { title: string, start: number, width: number, color: string, desc: string, dashed?: boolean }) => (
    <div className="group">
        <div className="flex justify-between items-baseline mb-1">
            <span className="text-sm text-gray-200 font-medium">{title}</span>
            <span className="text-[10px] text-gray-500 hidden sm:block">{desc}</span>
        </div>
        <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden relative">
            {/* Grid lines styling background */}
            <div className="absolute inset-0 grid grid-cols-8 w-full h-full opacity-10">
                {[...Array(8)].map((_, i) => <div key={i} className="border-r border-white"></div>)}
            </div>
            <motion.div
                initial={{ width: 0, x: `${start}%` }}
                animate={{ width: `${width}%`, x: `${start}%` }}
                transition={{ duration: 1, delay: 0.2 }}
                className={cn("h-full rounded-full relative", color, dashed && "opacity-60")}
            >
                {dashed && <div className="absolute inset-0 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAIklEQVQIW2NkQAKrVq36zwjjgzjwqgOx4Wy4IsyKUJ3zgQQA6d0MgT1vjIQAAAAASUVORK5CYII=')] opacity-30" />}
            </motion.div>
        </div>
    </div>
);

// --- Slide 8: Presupuesto ---
export const BudgetSlide = () => (
    <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
        <motion.div variants={itemVariants} className="flex flex-col justify-center space-y-6">
            <h3 className="text-2xl font-bold text-white">Estructura de Inversión</h3>
            <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white/5 border-l-4 border-red-500">
                    <div className="text-sm text-gray-400 uppercase">Infraestructura</div>
                    <div className="text-xl font-bold">Adecuación de Locales</div>
                    <div className="text-xs text-gray-500">Obra civil, diseño, mobiliario</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border-l-4 border-yellow-500">
                    <div className="text-sm text-gray-400 uppercase">Intangibles</div>
                    <div className="text-xl font-bold">Cánones & Licencias</div>
                    <div className="text-xs text-gray-500">Derecho de uso de marca, software</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border-l-4 border-green-500">
                    <div className="text-sm text-gray-400 uppercase">Operativo</div>
                    <div className="text-xl font-bold">Capital de Trabajo</div>
                    <div className="text-xs text-gray-500">Stock inicial, sueldos mes 1-3</div>
                </div>
            </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex items-center justify-center p-8 bg-black/20 rounded-3xl border border-white/5">
            <div className="text-center">
                <DollarSign className="w-16 h-16 text-sauco-gold mx-auto mb-4 opacity-80" />
                <p className="text-gray-400 mb-2">Flujo de Fondos Proyectado</p>
                <div className="text-5xl font-mono text-white tracking-tighter">Positivo</div>
                <p className="mt-4 text-sm text-green-400 bg-green-900/20 px-4 py-2 rounded-full inline-block">
                    Punto de equilibrio: Mes 14
                </p>
            </div>
        </motion.div>
    </motion.div>
);

// --- Slide 9: Viabilidad ---
export const ViabilitySlide = () => (
    <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col h-full justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
                variants={itemVariants}
                className="p-8 rounded-3xl bg-gradient-to-br from-gray-800 to-black border border-white/10 text-center transform hover:scale-105 transition-transform duration-300"
            >
                <div className="text-gray-400 text-sm uppercase tracking-wider mb-4">VAN</div>
                <div className="text-3xl md:text-3xl font-bold text-white break-all font-mono mb-2">$153.3M</div>
                <div className="text-xs text-green-500">Valor Actual Neto</div>
                <p className="mt-4 text-xs text-gray-500">Rentabilidad absoluta positiva descontada.</p>
            </motion.div>

            <motion.div
                variants={itemVariants}
                className="p-8 rounded-3xl bg-gradient-to-br from-sauco-gold/20 to-black border border-sauco-gold/30 text-center transform hover:scale-110 transition-transform duration-300 z-10 shadow-2xl shadow-sauco-gold/10"
            >
                <div className="text-sauco-gold text-sm uppercase tracking-wider mb-4 font-bold">TIR</div>
                <div className="text-5xl md:text-7xl font-bold text-white mb-2">195%</div>
                <div className="text-xs text-sauco-gold">Tasa Interna de Retorno</div>
                <p className="mt-4 text-xs text-gray-300">Muy superior a cualquier plazo fijo o inversión tradicional.</p>
            </motion.div>

            <motion.div
                variants={itemVariants}
                className="p-8 rounded-3xl bg-gradient-to-br from-gray-800 to-black border border-white/10 text-center transform hover:scale-105 transition-transform duration-300"
            >
                <div className="text-gray-400 text-sm uppercase tracking-wider mb-4">ROI</div>
                <div className="text-5xl md:text-6xl font-bold text-blue-400 mb-2">44%</div>
                <div className="text-xs text-blue-500">Retorno de Inversión</div>
                <p className="mt-4 text-xs text-gray-500">Recupero estimado en 24 a 30 meses.</p>
            </motion.div>
        </div>
        <motion.p variants={itemVariants} className="text-center mt-12 text-gray-400 max-w-2xl mx-auto">
            Los indicadores financieros demuestran una <span className="text-white font-bold">solidez excepcional</span>, validando el modelo de franquicias como el vehículo óptimo para el crecimiento de Sauco S.A.
        </motion.p>
    </motion.div>
);

// --- Slide 10: Mejoras y Desafíos ---
export const ImprovementsSlide = () => (
    <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full items-center">
        {[
            { icon: TrendingUp, title: "Producción", text: "Escalabilidad de la planta productiva y maquinaria para abastecer la demanda de nuevas franquicias.", color: "text-blue-400" },
            { icon: Users, title: "Soporte", text: "Estructura dedicada de acompañamiento al franquiciado para asegurar la calidad de marca.", color: "text-green-400" },
            { icon: Lightbulb, title: "Innovación", text: "Lab de desarrollo para nuevos estilos de cerveza y platos de temporada adaptados.", color: "text-yellow-400" },
        ].map((card, i) => (
            <motion.div key={i} variants={itemVariants} className="h-full bg-white/5 p-8 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors flex flex-col">
                <card.icon className={cn("w-12 h-12 mb-6", card.color)} />
                <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
                <p className="text-gray-300 leading-relaxed text-sm flex-1">{card.text}</p>
            </motion.div>
        ))}
    </motion.div>
);

// --- Slide 11: Conclusión ---
export const ConclusionSlide = () => (
    <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col items-center justify-center h-full space-y-8">
        <motion.div variants={itemVariants} className="text-center space-y-6">
            <h3 className="text-3xl font-light text-gray-300">El Camino hacia el Futuro</h3>
            <div className="h-px w-32 bg-white/20 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 gap-6 w-full max-w-3xl">
            {[
                "Crecimiento Sostenible",
                "Gestión Profesional",
                "Consolidación Federal"
            ].map((text, i) => (
                <motion.div
                    key={i}
                    variants={itemVariants}
                    className="p-6 bg-gradient-to-r from-sauco-navy to-sauco-dark border border-white/10 rounded-xl flex items-center justify-between group hover:border-sauco-gold/50 transition-colors"
                >
                    <span className="text-xl md:text-2xl text-white font-bold tracking-wide">{text}</span>
                    <CheckCircle className="text-sauco-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
            ))}
        </div>
    </motion.div>
);

// --- Slide 12: Cierre ---
export const ClosingSlide = () => (
    <div className="relative flex flex-col items-center justify-center h-full text-center overflow-hidden rounded-3xl">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
            <img
                src={slide12Img}
                alt="Brindis Final"
                className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-black/60" />
        </div>

        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 space-y-8 p-12 bg-black/30 rounded-3xl backdrop-blur-sm border border-white/5"
        >
            <h2 className="text-6xl md:text-8xl font-bold text-white mb-8 drop-shadow-xl">¡Muchas Gracias!</h2>
            <p className="text-xl text-gray-200 max-w-xl mx-auto font-medium leading-relaxed drop-shadow-md">
                Quedo a disposición del tribunal para responder preguntas y profundizar en los detalles del proyecto.
            </p>
            <div className="pt-12 text-sauco-gold text-sm uppercase tracking-[0.3em] font-bold">
                Fin de la presentación
            </div>
        </motion.div>
    </div>
);
