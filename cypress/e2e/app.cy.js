describe('Octodex RSS Renderer', () => {

  it('Should load properly', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // The page should contain an h2 with "GitHub Octodex RSS Feed"
    cy.get('h2').contains('GitHub Octodex RSS Feed')

    cy.screenshot('runner', { capture: 'runner' });
  })
})