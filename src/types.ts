type TInjectionType = 'text' | 'dateTime' | 'dynamicText';

interface IAttributes {
    [key: string]: string;
}

interface IInjectorProps {
    text?: string;
    el: HTMLElement;
    newAttributes?: IAttributes;
}

interface IInjectionBase {
    injectionType: TInjectionType;
    selector: { attribute: string; value: string };
}

interface ITextInjection extends IInjectionBase {
    content: { original: string; translation: string };
    newAttributes?: IAttributes;
}

export type { IAttributes, IInjectionBase, ITextInjection, IInjectorProps };
