describe('Holiday Page', () => {
    it('Shows all holidays', () => {
        cy.visit('/2021holidays')
        cy.contains('td', 'New Year')
    })
})