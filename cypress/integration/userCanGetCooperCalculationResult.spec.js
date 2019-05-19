describe('Cooper Client calculates successfully', () => {
  before(function() {
    cy.visit('http://localhost:3001');
    cy.get('#cooperlink').click()
    cy.get('input[id="distance"]').type('1000')
    cy.get('select[id="gender"]').select('female')
    cy.get('input[id="age"]').type('23')
  })

  it('displays age', () => {
    cy.contains('23 y/o')
  })

  it('displays gender', () => {
    cy.contains('female')
  })

  it('displays distance', () => {
    cy.contains('running 1000 meters')
  })

  it('display result', () => {
    cy.contains('Result: Poor')
  })
})
