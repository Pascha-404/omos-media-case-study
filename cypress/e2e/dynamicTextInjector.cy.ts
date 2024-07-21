describe('DynamicTextInjector E2E Test', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('renders the initial text correctly', () => {
        cy.get('p[data-test="dynamicTextInjection"]').should(
            'contain.text',
            'Aktuelle Gesamtmenge 4 weitere Artikel'
        );
    });

    it('updates the text when input value changes', () => {
        // Change input value to 2
        cy.get('input[data-pf-type="QuantityField"]').clear();
        cy.get('input[data-pf-type="QuantityField"]').type('2');
        cy.get('p[data-test="dynamicTextInjection"]').should(
            'contain.text',
            'Aktuelle Gesamtmenge 3 weitere Artikel'
        );

        // Change input value to 5
        cy.get('input[data-pf-type="QuantityField"]').clear();
        cy.get('input[data-pf-type="QuantityField"]').type('5');
        cy.get('p[data-test="dynamicTextInjection"]').should(
            'contain.text',
            'Aktuelle Gesamtmenge 0 weitere Artikel'
        );
    });
});
