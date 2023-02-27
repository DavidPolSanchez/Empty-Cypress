describe('First Contact spec', () => {


  it('test contact', () => {

    const email="email.com"
    //**VISIT URL
    cy.visit('https://www.boehringer-ingelheim.com/')

    //**COOKIES
    //close cookies
    cy.get('.it-eprivacy-banner-btn--primary').click()

    //**HOMEPAGE 
    //go to contact page
    cy.get('div > [title="Contact us"]').click()

    //**CONTACT FORM

      //type of the consultant SELECT
      cy.get('#edit-category').select('General').should('have.value','Category_1')
     
      //message input
      cy.get('#edit-your-message').type('hello world !')
     
      //Name input
      cy.get('#edit-name').type('example')

      //Surname input
      cy.get('#edit-surname').type('not real')

      //email input
        // ! this parameter is wrong
       cy.get('[id=edit-email]').type(email)

      //country SELECT
      cy.get('#edit-select-your-country-region').select('Spain').should('have.value','Spain')

      //Terms of use CHECKBOX
      cy.get('#edit-terms-of-use-agree').check()

      //sumbit btn
      cy.get('#edit-actions-submit').click()

      //check with contains text 
      cy.contains(`The email address ${email} is not valid`)
     

  })


})