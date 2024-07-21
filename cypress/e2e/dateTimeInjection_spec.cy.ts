describe('DateTime Injection', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should inject the current date and time into the element', () => {
        const dateTimeRegex = /^\d{2}\.\d{2}\.\d{4}, \d{2}:\d{2}:\d{2}$/;

        // Check that the element exists
        cy.get('#current-date-time').should('exist');

        // Check that the element contains a valid date and time
        cy.get('#current-date-time')
            .invoke('text')
            .should((text) => {
                expect(text).to.match(dateTimeRegex);
            });
    });
});
