import ReservationDetailsPage from '../support/Pages/ReservationDetailsPage';
import HomePage from '../support/Pages/HomePage';

describe('Parkos reservations', () => {
  
  const Reserv = new ReservationDetailsPage();
  const Home = new HomePage();

  const airport = 'Las Vegas';
  const airportUrl = 'las-vegas-airport-parking';
  let startDate;
  let endDate;
  
  //Use the cy.fixture() method to pull data from fixture file
  before(function () {
    cy.fixture('jsonData').then(function(data) {
      startDate = new Date(data.StartDate);
      endDate = structuredClone(startDate);
      endDate.setDate(startDate.getDate() + data.PeriodDays);
      endDate.setHours(startDate.getHours() + data.PeriodHours);
    })
  })

  it('passes', () => {

    cy.viewport(1920, 1080);
    
    // OPTION 1 - Open the Home Page - Select Airport, Date and Time
    //  cy.visit('https://parkos.com/');
    //  Home.choosePeriod(airport, startDate, endDate);
    
    // OPTION 2 - Enter data via URL
    cy.visit('https://parkos.com/' + airportUrl + '/search/?location=' + airportUrl 
      + '&arrivalTime=' + startDate.getHours() + '%3A' + startDate.toLocaleString('en-US', {'hour': '2-digit', 'minute':'2-digit', hour12:false}).split(':')[1] 
      + '&departureTime=' + endDate.getHours() + '%3A' + endDate.toLocaleString('en-US', {'second': '2-digit', 'minute':'2-digit'}).split(':')[0] 
      + '&arrival=' + startDate.getFullYear() + '-' + startDate.toLocaleString('en-US', {'month':'2-digit'}) + '-' + startDate.toLocaleString('en-US', {'day': '2-digit'})
      + '&departure=' + endDate.getFullYear() + '-' + endDate.toLocaleString('en-US', {'month':'2-digit'}) + '-' + endDate.toLocaleString('en-US', {'day': '2-digit'}) 
      + '&sort_f=price&sort_w=asc&version=5');
    
      console.log(startDate.toLocaleString('en-US', {'minute':'2-digit'}));
      console.log(startDate.toLocaleString('en-US', {'hour': '2-digit', 'minute':'2-digit', hour12:false}).split(':')[1]);

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