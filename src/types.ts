type TInjectionType = 'text' | 'dateTime';

interface IAttributes {
    [key: string]: string;
}

interface IInjectionBase {
    injectionType: TInjectionType;
    selector: { attribute: string; value: string };
}

interface ITextInjection extends IInjectionBase {
    content: { original: string; translation: string };
    newAttributes?: IAttributes;
}

export type { IAttributes, IInjectionBase, ITextInjection };
