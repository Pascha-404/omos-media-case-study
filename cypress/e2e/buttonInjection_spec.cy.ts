import { buttonInjectionContent } from '../../src/contentToInject';

describe('Button Injector', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    buttonInjectionContent.forEach((button) => {
        it(`should have the correct attributes and text for the button with ${button.selector.attribute}="${button.selector.value}"`, () => {
            const buttonSelector = `button[${button.selector.attribute}="${button.selector.value}"]`;

            // Check that the button exists
            cy.get(buttonSelector).should('exist');

            // Check the button text
            cy.get(buttonSelector).should('have.text', button.content.translation);

            // Check the button attributes
            if (button.newAttributes) {
                Object.entries(button.newAttributes).forEach(([key, value]) => {
                    cy.get(buttonSelector).should('have.attr', key, value);
                });
            }
        });
    });
});
