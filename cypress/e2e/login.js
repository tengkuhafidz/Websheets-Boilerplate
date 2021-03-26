describe('login', () => {
	it('should login successfully given valid user credentials', () => {
		cy.log(Cypress.env('BASE_URL'))
		cy.visit('/')
		// cy.findByText('Hello World').should('be.visible')
	})
})
