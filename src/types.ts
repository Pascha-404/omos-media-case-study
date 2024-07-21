type TInjectionType = 'text' | 'dateTime' | 'dynamicText';

interface IAttributes {
    [key: string]: string;
}

interface ILinkedInput {
    selector: string;
    value: string;
}

interface IInjectorProps {
    text?: string;
    el: HTMLElement;
    newAttributes?: IAttributes;
    linkedInput?: ILinkedInput;
}

interface IInjectionBase {
    injectionType: TInjectionType;
    selector: { attribute: string; value: string };
}

interface ITextInjection extends IInjectionBase {
    content: { original: string; translation: string };
    newAttributes?: IAttributes;
}

interface IDynamicTextInjection extends ITextInjection {
    linkedInput: ILinkedInput;
}

export type {
    IAttributes,
    IInjectionBase,
    ITextInjection,
    IInjectorProps,
    IDynamicTextInjection,
    ILinkedInput,
};
