import type { SlideData } from '../types/presentation';
import {
    TitleSlide, IntroSlide, DiagnosisSlide, ProposalSlide,
    ObjectivesSlide, ActionPlanSlide, GanttSlide, BudgetSlide,
    ViabilitySlide, ImprovementsSlide, ConclusionSlide, ClosingSlide
} from '../components/SlideContents';

export const SLIDES: SlideData[] = [
    {
        id: 1,
        title: "", // Title slide has its own title
        content: TitleSlide,
        speakerNotes: "Presentación formal ante el tribunal."
    },
    {
        id: 2,
        title: "Introducción: Problema y Contexto",
        content: IntroSlide,
        speakerNotes: "Contextualizar la empresa familiar y la problemática que motiva el TFG."
    },
    {
        id: 3,
        title: "Diagnóstico Estratégico",
        content: DiagnosisSlide,
        speakerNotes: "Mostrar rigor metodológico y cómo se detectó la oportunidad de franquiciar."
    },
    {
        id: 4,
        title: "Propuesta: Franquicias Regionales",
        content: ProposalSlide,
        speakerNotes: "Explicar el corazón del proyecto: no es solo cerveza, es una experiencia regional."
    },
    {
        id: 5,
        title: "Objetivos del Proyecto",
        content: ObjectivesSlide,
        speakerNotes: "Definir metas cuantitativas claras (Ventas, RRHH, Marketing)."
    },
    {
        id: 6,
        title: "Plan de Acción",
        content: ActionPlanSlide,
        speakerNotes: "Resumir CÓMO se va a ejecutar la estrategia."
    },
    {
        id: 7,
        title: "Planificación (Gantt)",
        content: GanttSlide,
        speakerNotes: "Validar la viabilidad temporal del proyecto."
    },
    {
        id: 8,
        title: "Presupuesto e Inversión",
        content: BudgetSlide,
        speakerNotes: "Mostrar la solidez financiera de la propuesta de inversión."
    },
    {
        id: 9,
        title: "Viabilidad Financiera",
        content: ViabilitySlide,
        speakerNotes: "Demostrar con números que el negocio es rentable y atractivo."
    },
    {
        id: 10,
        title: "Mejoras y Desafíos",
        content: ImprovementsSlide,
        speakerNotes: "Mostrar visión a largo plazo y anticipación a problemas de crecimiento."
    },
    {
        id: 11,
        title: "Conclusión Final",
        content: ConclusionSlide,
        speakerNotes: "Cierre sintético reafirmando el valor del TFG."
    },
    {
        id: 12,
        title: "Cierre",
        content: ClosingSlide,
        speakerNotes: "Apertura al diálogo con el tribunal."
    }
];
