describe('Counter E2E tests', () => {
    it('should have counter set to 10 after rendering',  () => {
        cy.visit('http://localhost:3000')
        const counter = cy.get('.Display');
        counter.contains('Licznik: 10');
    });

    it('should have counter increased to 12 after two clicks of "+" button',  () => {
        const additionButton = cy.get('button').first();
        additionButton.click();
        additionButton.click();
        cy.get('.Display').contains('Licznik: 12');
    });
    it('should have counter decreased to 11 after click of "-" button',  () => {
        const substracionButton = cy.get('button').first().next().next();
        substracionButton.click();
        cy.get('.Display').contains('Licznik: 11');
    });
    it('should have counter reset to 10 after click of "reset" button',  () => {
        const resetButton = cy.get('button').first().next();
        resetButton.click()
        cy.get('.Display').contains('Licznik: 10');
    });
    it('should have counter set to 8 after insert 8 to input and click on button "Zmień"',  () => {
        cy.get('input').type('8');
        cy.get('button').last().click();
        cy.get('.Display').contains('Licznik: 8');
    });
})
