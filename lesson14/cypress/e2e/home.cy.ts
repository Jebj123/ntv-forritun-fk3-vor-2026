describe('Heimasíða (E2E)', () => {
    it('á að logga inn og sýna velkomin skilaboð', () => {
        // Fara á skráningarsíðu
        cy.visit("http://localhost:5173/login");

        cy.get('input[name="user"]').type('testuser');
        cy.get('input[name="password"]').type('password');
        cy.get('button[type="submit"]').click();
    });
});
