import type { ComponentType } from 'react';

export interface SlideData {
    id: number;
    title: string;
    content: ComponentType;
    speakerNotes?: string;
}

export type SlideProps = {
    isActive: boolean;
    data: SlideData;
}
