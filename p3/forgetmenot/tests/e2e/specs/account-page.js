describe('Account Page', () => {
    it('Logs In', () => {
        cy.visit('/account')

        cy.get('[data-test=password-input]').clear().type('this-password-should-not-work');
        cy.get('[data-test=login-button]').click();

        cy.get('[data-test=password-input').clear();

        cy.get('[data-test=password-input').type('asdfasdf')
        cy.get('[data-test=login-button]').click();
    })
})