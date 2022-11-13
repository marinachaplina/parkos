import ReservationDetailsPage from '../support/Pages/ReservationDetailsPage';
import HomePage from '../support/Pages/HomePage';

describe('Parkos reservations', () => {
  
  const Reserv = new ReservationDetailsPage();
  const Home = new HomePage();

  const airport = 'Las Vegas';
  const airportUrl = 'las-vegas-airport-parking';
  const startDate = new Date('November 28, 2022 18:15:00');
  const PeriodDays = 7;
  const PeriodHours = -10;

  let endDate = structuredClone(startDate);
  endDate.setDate(startDate.getDate() + PeriodDays);
  endDate.setHours(startDate.getHours() + PeriodHours);
   
  it('passes', () => {

    cy.viewport(1920, 1080);
    
    // OPTION 1 - Open the Home Page - Select Airport, Date and Time
    //  cy.visit('https://parkos.com/');
    //  Home.choosePeriod(airport, startDate, endDate);
    
    // OPTION 2 - Enter data via URL
    cy.visit('https://parkos.com/' + airportUrl + '/search/?location=' + airportUrl 
      + '&arrivalTime=' + startDate.getHours() + '%3A' + startDate.getMinutes() 
      + '&departureTime=' + endDate.getHours() + '%3A' + endDate.getMinutes() 
      + '&arrival=' + startDate.getFullYear() + '-' + startDate.toLocaleString('en-US', {'month':'2-digit'}) + '-' + startDate.toLocaleString('en-US', {'day': '2-digit'})
      + '&departure=' + endDate.getFullYear() + '-' + endDate.toLocaleString('en-US', {'month':'2-digit'}) + '-' + endDate.toLocaleString('en-US', {'day': '2-digit'}) 
      + '&sort_f=price&sort_w=asc&version=5');
    
    // Page2 - Available parking places
    cy.wait(2000);
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