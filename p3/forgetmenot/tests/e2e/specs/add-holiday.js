describe('Add Holiday', () => {
    it('Tries to add holiday', () => {
        cy.visit('/add-holiday');

        cy.contains('h1', 'You must be logged in to add a holiday');
        cy.visit('/account');

        cy.login();

        cy.visit('/add-holiday');

        cy.contains('form');
        cy.get('[data-test=name]').type('Test Birthday');
        cy.get('[data-test=date]').type('01-01-2022');
        cy.get('[data-test=type]').select('Birthday');
        cy.get('[data-test=holiday-button]').click();
    })
})