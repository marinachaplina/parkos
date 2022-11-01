describe('Parkos reeservations', () => {
  it('passes', () => {
    cy.visit('https://parkos.com/');
    cy.get('.search-form__airport-picker').click().find('input').eq(0).type('San Francisco');
    cy.get('.search-form__airport-picker').contains('San Francisco International Airport').click();

    // cy.get('.search-form .search-form__date-time-picker__date').eq(0).click().next('.vc-popover-content-wrapper').find('.is-right').click();

    cy.get('.search-form .search-form__date-time-picker__date').eq(0).click().next('.vc-popover-content-wrapper').then(function ($wrapper){
      $wrapper.find('.vc-day.id-2022-11-02 span.vc-day-content').click();
    });
    cy.get('.legacy-time-picker').eq(0).contains('12:30 PM').click();

    // cy.get('.search-form .search-form__date-time-picker__date').eq(1).click().next('.vc-popover-content-wrapper').find('.is-right').click();

    cy.get('.search-form .search-form__date-time-picker__date').eq(1).click().next('.vc-popover-content-wrapper').then(function ($wrapper){
      $wrapper.find('.vc-day.id-2022-11-03 span.vc-day-content').click();
    });
    cy.get('.legacy-time-picker').eq(1).contains('12:15 PM').click();
    cy.get('.search-form button').click();
    cy.contains('Proceed to booking').click();
    cy.get('input#inputDepartureFlightnr').focus().type('Chicago');
    cy.get('input#inputReturnFlightnr').focus().type('Chicago');
    cy.get('input#inputName').focus().type('John Doe');
    cy.get('input#inputEmail').focus().type('test@example.com');
    cy.get('input#inputEmail2').focus().type('test@example.com');
    cy.get('select#inputPhoneCountry').select('31');
    cy.get('input#inputPhone').focus().type('123456789');
    cy.get('select#inputPersons').select('2');
    cy.get('input#inputCar').focus().type('Volkswagen Golf7');
    cy.get('input#inputSign').focus().type('LH1234K');
    cy.get('input#base-package[value="base"]').check();
    cy.get('input#radio_payment_option_visa[data-name="Visa"]').check();
    cy.get('input#AVParkos').check();
    cy.get('input#ExtraControl').check();
    // cy.get('button#reservationSubmit').click();

  })
});