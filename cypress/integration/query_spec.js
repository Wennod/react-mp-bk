it('should successfully perform search by title', () => {
describe('Searches', () => {
        cy.visit('/')
        cy.get('.search-button').click();
        cy.get('.search-form__filter-toggler--t').should('be.checked');
        cy.get('.list__content')
            .children()
            .should('have.length', 10);
    });

    it('should successfully perform search by genre', () => {
        cy.visit('/');
        cy.get('.search-form__input').type('Drama');
        cy.get('.search-form__filter-toggler-g').click();
        cy.get('.search-button').click();
        cy.get('.list__content')
            .children()
            .should('have.length', 10);
    });
});