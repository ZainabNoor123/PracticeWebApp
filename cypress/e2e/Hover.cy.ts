describe('practice Automation Hover', () => {
  beforeEach('positive Hover', () => {
     cy.visit('/hovers')
   })

  it('Hover User1 and Validate Text  and Profile using realHover()', () => {
    cy.get('div:nth-child(4) > img').trigger('mouseover')
    cy.get('div:nth-child(4) > div ').invoke('show')
      .contains('h5', 'name: user1')
    cy.get('div:nth-child(4) > div > a')
      .should('have.text', 'View profile').click()
    cy.location('pathname').should('include', '/users/1')
      

  });

  it('Hover User2 and Validate Text and profile using realHover()', () => {
    cy.get('div:nth-child(5) > img').trigger('mouseover')
    cy.get('div:nth-child(5) > div ').invoke('show')
      .contains('h5', 'name: user2')
      cy.get('div:nth-child(5) > div > a')
      .should('have.text', 'View profile').click()
      cy.location('pathname').should('include', '/users/2')
  });

  it('Hover User1 and Validate Text and Profile using realHover()', () => {
    cy.get('div:nth-child(6) > img').trigger('mouseover')
    cy.get('div:nth-child(6) > div ').invoke('show')
      .contains('h5', 'name: user3')
    cy.get('div:nth-child(6) > div > a')
      .should('have.text', 'View profile').click()
    cy.location('pathname').should('include', '/users/3')

  });
})