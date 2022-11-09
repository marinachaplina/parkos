import ReservationDetailsPage from '../support/Pages/ReservationDetailsPage';
import HomePage from '../support/Pages/HomePage';

describe('Parkos reservations', () => {
  
  const Reserv = new ReservationDetailsPage();
  const Home = new HomePage();
  const start = new Date('November 28, 2022 06:00:00');
  const end = new Date('November 29, 2022 20:00:00');

  it('passes', () => {

    cy.viewport(1920, 1080);
    
    // OPTION 1 - Open the Home Page - Select Airport, Date and Time
    // cy.visit('https://parkos.com/');
    // Home.choosePeriod('Las Vegas', start, end);
    
    // OPTION 2 - Skip the Home Page
    cy.visit('https://parkos.com/las-vegas-airport-parking/search/?location=las-vegas-airport-parking&arrivalTime=6%3A00&departureTime=20%3A00&arrival=2022-11-28&departure=2022-11-29&sort_f=price&sort_w=asc&version=5');

    // Page2 - Available parking places
    cy.get('.text-base').should('not.include.text', '0 available');
    cy.get('.primary-btn').contains('Proceed to booking').click();

    // Page3 - Fill the Reservation details
    cy.get('h3').should('include.text', 'Your travel details');
    cy.wait(2000);
    Reserv.fillForm('Fl345', 'Fl346', 'Marina', 'Marina@test.com', 'Marina@test.com', '12345678', '2', 'Volkswagen Golf7', 'KL1234H', 'base', 'Visa');

    Reserv.clickAgree();
    Reserv.clickChecked();
    
    // cy.get('#reservationSubmit').click()
  })
});