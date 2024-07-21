import { textInjectionContent } from '../../src/contentToInject';
import type { ITextInjection } from '../../src/types';

const getTextTranslations = (
    dataArray: ITextInjection[],
    targetValue: string
): string[] => {
    // Filters array of objects for the targetValue
    const filterForValue = dataArray.filter(
        (item: ITextInjection) => item.selector.value === targetValue
    );
    // Creates a new array of strings, only containing the translations
    const createTranslationArray = filterForValue.map((el) => el.content.translation);

    return createTranslationArray;
};

describe('Text Injector', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('injects translated text into the heading', () => {
        const expectedTranslations = getTextTranslations(
            textInjectionContent,
            'Heading2'
        );

        cy.get('h3[data-pf-type="Heading2"]').each(($el, index) => {
            if (index < expectedTranslations.length) {
                cy.wrap($el).should('have.html', expectedTranslations[index]);
            }
        });
    });
});
