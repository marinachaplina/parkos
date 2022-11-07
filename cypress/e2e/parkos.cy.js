import ReservationDetailsPage from '../support/Pages/ReservationDetailsPage';
import HomePage from '../support/Pages/HomePage';

describe('Parkos reservations', () => {
  
  const Reserv = new ReservationDetailsPage();
  const Home = new HomePage();

  it('passes', () => {

    // HomePage - Select Airport, Date and Time
    cy.visit('https://parkos.com/');
    Home.choosePeriod('Las Vegas', '22', '6:00 AM', '23', '8:00 PM');
  
    // Page2 - Available parking places
    cy.get('.text-base').should('not.include.text', '0 available');
    cy.get('.primary-btn').contains('Proceed to booking').click();

    // Page3 - Fill the Reservation details
    cy.get('h3').should('include.text', 'Your travel details');
    Reserv.fillForm('Fl345', 'Fl346', 'Marina', 'Marina@test.com', 'Marina@test.com', '12345678', '2', 'Volkswagen Golf7', 'KL1234H', 'base', 'Visa');

    Reserv.clickAgree();
    Reserv.clickChecked();
    
    // cy.get('#reservationSubmit').click()
  })
});