describe('BMI Calculator', () => {
  before(function() {
    cy.visit('http://localhost:3001');
  });

  beforeEach(function() {
    cy.reload();
  });

  describe('Metric method', () => {
    beforeEach(() => {
      cy.get('#bmilink').click()
      cy.get('.column').within(() => {
        cy.get('a:first').click()
      })
      cy.get('input[name="weight"]').type('95')
      cy.get('input[name="height"]').type('186')
    })

    it('displays assesment', async () => {
      cy.contains('You are overweight')
    })

    it('displays BMI value', async () => {
      cy.contains('BMI of 27.46')
    })
  });

  describe('Imperial method', () => {
    beforeEach(() => {
      cy.get('#bmilink').click()
      cy.get('a:last').click()
      cy.get('input[name="weight"]').type('200')
      cy.get('input[name="height"]').type('73')  
    })

    it('displays assesment', async () => {
      cy.contains('You are overweight')
    })
  
    it('displays BMI value', async () => {
      cy.contains('BMI of 26.38')
    })
  })
 
})



