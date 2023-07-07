

describe('Fetch 6-digit code from Authenticator App', () => {
    const authenticator = require('authenticator');
  beforeEach( () => {
    // Use the authenticator library to retrieve the current OTP code
    const code = authenticator.generateToken('XXXXXXX');
    cy.log(`The current 6-digit code: ${code}`);
    
    // Perform further assertions or actions with the code
    // For example, you can assert that the code is a 6-digit number
    cy.wrap(code.toString()).should('match', /^\d{6}$/);
  });

  it('Should fetch the 6-digit code from the Authenticator App',()=>{
    cy.visit('https://outlook.office.com')
    cy.get('.table-row').find('XXXXXXXXXXXXXX').click()
    cy.get("input[type='password']").type('XXXXXXXXXXXXXX')
    cy.get("[type='submit']").click()

  })
  

});