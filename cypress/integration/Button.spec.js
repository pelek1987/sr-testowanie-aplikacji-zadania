describe('Button E2E tests', () => {
    it('should have label "Click me 2" after two clicks', function () {
        cy.visit('http://localhost:3000');
        const button = cy.get('button');
        button.click();
        button.click();
        button.contains('Click me 2');
    });
})
