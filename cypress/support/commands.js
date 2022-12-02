import { faker } from '@faker-js/faker';

Cypress.Commands.add('generateFixture', () => {
   
    cy.writeFile('cypress/fixtures/userInfo.json', {
        "DepartureFlightnr": faker.helpers.replaceSymbols('??###'), 
        "ReturnFlightnr": faker.helpers.replaceSymbols('??###'), 
        "Name": faker.name.fullName(),
        "Email": faker.internet.email(),
        "Email2": "Email",
        "Phone": faker.phone.number('###-###-###'),
        "Persons": faker.helpers.arrayElement(['1', '2', '3', '4', '5', '6', '7', '8']),
        "Car": faker.vehicle.vehicle(),
        "Sign": faker.vehicle.vrm(),
        "Package": faker.helpers.arrayElement(['base', 'standard', 'premium']),
        "Payment": faker.helpers.arrayElement(['Visa', 'Mastercard', 'American Express', 'PayPal'])
    })
  })