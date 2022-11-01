describe('Parkos reeservations', () => {
  it('passes', () => {
    cy.visit('https://parkos.com/');
    
    // find the content 'Select airport' -> Hollywood Burbank Airport and click
    cy.get('.text-ellipsis').contains('Select airport').click()
    cy.contains('Las Vegas').click()
    
    // choose the date and time check in/out and click next step
    cy.get('.vc-day-content').contains('22').click()
    cy.get('.legacy-time-picker-desktop__item').contains('6:00 AM').click()
    cy.get('.vc-day-content').contains('23').click()
    cy.get('.legacy-time-picker-desktop__item').contains('8:00 PM').click()
   
    cy.contains('Search parking spots').click()

    // check if there is an available option and click next step
    cy.get('.text-base').should('not.include.text', '0 available')
    cy.get('.primary-btn').contains('Proceed to booking').click()

    // check if Your travel details form is opened and input tha datas
    cy.get('h3').should('include.text', 'Your travel details')

    cy.get('input#inputDepartureFlightnr').focus().type('Fl345')
    cy.get('input#inputReturnFlightnr').focus().type('Fl346')
    cy.get('input#inputName').focus().type('Marina')
    cy.get('input#inputEmail').focus().type('Marina@test.com')
    cy.get('input#inputEmail2').focus().type('Marina@test.com')
    cy.get('input#inputPhone').focus().type('12345678')
    cy.get('select#inputPersons').select('3')
    cy.get('input#inputCar').focus().type('Volkswagen Golf7')
    cy.get('input#inputSign').focus().type('KL1234H')
    cy.get('input#base-package').focus().click()
    cy.get('input#radio_payment_option_visa').focus().click()
    cy.get('input#AVParkos').focus().click()
    cy.get('input#ExtraControl').focus().click()

    // cy.get('#reservationSubmit').click()
  })
});