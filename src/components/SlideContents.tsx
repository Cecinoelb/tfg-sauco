import { motion } from 'framer-motion';
import {
    TrendingUp, Users, CheckCircle, AlertTriangle,
    Lightbulb, DollarSign, Target
} from 'lucide-react';
import { cn } from '../lib/utils';
import slide1Bg from '../assets/slide1-bg.png';
import slide2Img from '../assets/slide2-intro.jpg';
import slide4Map from '../assets/slide4-map.jpg';
import slide6Bg from '../assets/slide6-action.png';
import slide12Img from '../assets/slide12-close.jpg';

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
            <div>
                <span className="block text-sauco-gold/90 uppercase text-xs tracking-wider mb-1 font-semibold">Institución</span>
                <span className="text-white font-medium">Universidad Siglo 21 (2024)</span>
            </div>
        </motion.div>
    </div>
);

// --- Slide 2: Introducción ---
export const IntroSlide = () => (
    <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-2 gap-0 h-full overflow-hidden rounded-3xl border border-white/10 bg-black/40">
        {/* Left Content */}
        <div className="p-12 flex flex-col justify-center space-y-8">
            <motion.div variants={itemVariants}>
                <h3 className="text-4xl md:text-5xl font-bold text-sauco-gold mb-6 font-serif">El Corazón del Negocio</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                    Sauco S.A. nace de la fusión estratégica entre la producción de <span className="text-white font-bold">Cervecería Checa</span> y la experiencia gastronómica de <span className="text-white font-bold">La Jirafa</span>.
                </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
                {/* Barreras Card - Red */}
                <div className="p-6 rounded-xl bg-red-900/10 border-l-4 border-red-500/80 backdrop-blur-sm">
                    <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="text-red-500" size={20} />
                        <span className="text-red-500 font-bold uppercase tracking-wider text-sm">Barreras</span>
                    </div>
                    <p className="text-gray-300 text-sm">Alta competencia, incertidumbre económica y capacidad productiva limitada.</p>
                </div>

                {/* Opportunity Card - Gold */}
                <div className="p-6 rounded-xl bg-sauco-gold/5 border-l-4 border-sauco-gold/80 backdrop-blur-sm">
                    <div className="flex items-center gap-2 mb-2">
                        <Lightbulb className="text-sauco-gold" size={20} />
                        <span className="text-sauco-gold font-bold uppercase tracking-wider text-sm">Oportunidad</span>
                    </div>
                    <p className="text-gray-300 text-sm">Transformar el éxito local en un modelo de franquicia gastronómica escalable.</p>
                </div>
            </motion.div>
        </div>

        {/* Right Image */}
        <motion.div variants={itemVariants} className="relative h-full w-full">
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/80 z-10" />
            <img
                src={slide2Img}
                alt="Resto La Jirafa"
                className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6 z-20 flex items-center gap-2">
                <div className="w-1 h-8 bg-sauco-gold" />
                <span className="text-white/90 text-sm font-mono tracking-widest uppercase">Experiencia Gastronómica: "Resto La Jirafa"</span>
            </div>
        </motion.div>
    </motion.div>
);

// --- Slide 3: Diagnóstico ---
export const DiagnosisSlide = () => (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">
        <motion.div variants={itemVariants} className="flex justify-center gap-4 flex-wrap mb-8">
            {['PESTEL', 'Porter', 'FODA', 'BCG', 'Ansoff'].map((tool, i) => (
                <span key={i} className="px-4 py-2 rounded-full border border-sauco-gold/30 bg-sauco-gold/10 text-sauco-gold text-sm font-mono uppercase tracking-wider">
                    {tool}
                </span>
            ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants} className="group p-8 bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 rounded-3xl hover:border-green-500/40 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                    <CheckCircle className="text-green-400" size={40} />
                    <h3 className="text-2xl font-bold text-green-100">Fortaleza Clave</h3>
                </div>
                <div className="text-5xl font-bold mb-2 text-white">ISO 9001</div>
                <p className="text-green-200/80 uppercase tracking-widest text-sm">Certificación de Calidad</p>
                <p className="mt-4 text-green-100/70">Diferenciador crítico que avala la estandarización necesaria para franquiciar.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="group p-8 bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 rounded-3xl hover:border-blue-500/40 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                    <Lightbulb className="text-blue-400" size={40} />
                    <h3 className="text-2xl font-bold text-blue-100">Oportunidad</h3>
                </div>
                <div className="text-5xl font-bold mb-2 text-white">Desarrollo</div>
                <p className="text-blue-200/80 uppercase tracking-widest text-sm">Matriz de Ansoff</p>
                <p className="mt-4 text-blue-100/70">Estrategia definida para llevar productos existentes a nuevos mercados geográficos.</p>
            </motion.div>
        </div>
    </motion.div>
);

// --- Slide 4: Propuesta ---
export const ProposalSlide = () => (
    <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-2 gap-12 h-full items-center">
        {/* Left Content: Strategy & Differential */}
        <div className="flex flex-col justify-center space-y-8">
            <motion.div variants={itemVariants}>
                <h3 className="text-sauco-gold uppercase tracking-widest mb-2 font-bold">Estrategia</h3>
                <p className="text-4xl text-white font-light leading-tight">Franquicias Regionales <br /><span className="text-sauco-gold font-serif italic">"Llave en mano"</span></p>
                <p className="mt-4 text-gray-400">Expansión federal atacando plazas claves con turismo y cultura cervecera.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6 pt-6 border-t border-white/10">
                <h4 className="text-xl text-white font-bold mb-4">El Diferencial Sauco</h4>
                <div className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="w-10 h-10 bg-sauco-gold text-sauco-dark rounded-full flex-shrink-0 flex items-center justify-center font-bold text-lg">1</div>
                    <div>
                        <h5 className="font-bold text-white text-base">Cerveza Artesanal</h5>
                        <p className="text-sm text-gray-400">Calidad premium apta para góndola y tirada. Estandarización productiva.</p>
                    </div>
                </div>
                <div className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="w-10 h-10 bg-sauco-gold text-sauco-dark rounded-full flex-shrink-0 flex items-center justify-center font-bold text-lg">2</div>
                    <div>
                        <h5 className="font-bold text-white text-base">Gastronomía Adaptable</h5>
                        <p className="text-sm text-gray-400">Menú base "La Jirafa" + especialidades regionales locales.</p>
                    </div>
                </div>
            </motion.div>
        </div>

        {/* Right Content: Map Image */}
        <motion.div variants={itemVariants} className="relative h-full max-h-[80vh] w-full flex items-center justify-center">
            <div className="absolute inset-0 bg-sauco-gold/5 blur-[80px] rounded-full transform scale-75" />
            <img
                src={slide4Map}
                alt="Mapa Expansión Argentina"
                className="relative z-10 max-h-full w-auto object-contain drop-shadow-2xl rounded-sm"
            />
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

// --- Slide 7: Gantt ---
export const GanttSlide = () => (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 overflow-x-auto">
            {/* Simple Visualization of Gantt */}
            <div className="min-w-[600px] grid grid-cols-12 gap-2 text-xs text-gray-500 mb-4 border-b border-white/10 pb-2">
                <div className="col-span-3">Actividad</div>
                <div className="col-span-3 text-center">Año 1</div>
                <div className="col-span-3 text-center">Año 2</div>
                <div className="col-span-3 text-center">Año 3</div>
            </div>

            <div className="space-y-6 min-w-[600px]">
                <div>
                    <div className="flex justify-between text-sm text-gray-300 mb-1">
                        <span>Diseño & Legal</span>
                        <span className="text-xs text-gray-600">Mes 1-6</span>
                    </div>
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "20%" }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-full bg-blue-500"
                        />
                    </div>
                </div>
                <div>
                    <div className="flex justify-between text-sm text-gray-300 mb-1">
                        <span>Apertura Franquicia 1</span>
                        <span className="text-xs text-gray-600">Mes 8</span>
                    </div>
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden flex">
                        <div className="w-[20%] h-full bg-transparent" />
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "5%" }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className="h-full bg-sauco-gold"
                        />
                    </div>
                </div>
                <div>
                    <div className="flex justify-between text-sm text-gray-300 mb-1">
                        <span>Consolidación & Mkt</span>
                        <span className="text-xs text-gray-600">Continuo</span>
                    </div>
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "80%" }}
                            transition={{ duration: 1.5, delay: 1 }}
                            className="h-full bg-green-500/50"
                        />
                    </div>
                </div>
                <div>
                    <div className="flex justify-between text-sm text-gray-300 mb-1">
                        <span>Expansión (Franquicias 2 & 3)</span>
                        <span className="text-xs text-gray-600">Año 2-3</span>
                    </div>
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden flex">
                        <div className="w-[33%] h-full bg-transparent" />
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "50%" }}
                            transition={{ duration: 1, delay: 1.2 }}
                            className="h-full bg-purple-500"
                        />
                    </div>
                </div>
            </div>
        </div>

        <div className="flex justify-around text-center text-sm text-gray-400">
            <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-blue-500" /> Preparación</div>
            <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-sauco-gold" /> Hitos Clave</div>
            <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-purple-500" /> Expansión</div>
        </div>
    </motion.div>
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
