type TInjectionType = 'text' | 'dateTime' | 'dynamicText' | 'button';

interface IAttributes {
    [key: string]: string;
}

interface ILinkedInput {
    selector: string;
    value: string;
}

interface ISelector {
    attribute: string;
    value: string;
}

interface IInjectorProps {
    text?: string;
    el: HTMLElement;
    newAttributes?: IAttributes;
    linkedInput?: ILinkedInput;
}

interface IButtonInjectorProps {
    text: string;
    selector: ISelector;
    newAttributes?: IAttributes;
}

interface IInjectionBase {
    injectionType: TInjectionType;
    selector: ISelector;
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
    ISelector,
    IInjectionBase,
    ITextInjection,
    IInjectorProps,
    IDynamicTextInjection,
    ILinkedInput,
    IButtonInjectorProps,
};
