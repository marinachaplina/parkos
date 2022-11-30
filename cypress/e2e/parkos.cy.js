import ReservationDetailsPage from '../support/Pages/ReservationDetailsPage';
import HomePage from '../support/Pages/HomePage';
import date from 'date-and-time';

describe('Parkos reservations', () => {
  
  const Reserv = new ReservationDetailsPage();
  const Home = new HomePage();

  const airport = 'Las Vegas';
  const airportUrl = 'las-vegas-airport-parking';
  let startDate;
  let PeriodDays = 7;
  let PeriodHours = 2;
  let endDate;
  let user;

  // Set startDate = now + 14 days and round minutes
  const now = new Date();
  startDate = date.addDays(now, +14);
  
  let minutes = startDate.getMinutes();
  if (minutes < 15) {
    startDate.setMinutes(0);
  } else if (minutes < 30) {
    startDate.setMinutes(15);
  } else if (minutes < 45) {
    startDate.setMinutes(30);
  } else {
    startDate.setMinutes(45);
  }

  // Set parking period
  endDate = structuredClone(startDate);
  endDate.setDate(startDate.getDate() + PeriodDays);
  endDate.setHours(startDate.getHours() + PeriodHours);

  // Use the cy.fixture() method to pull User Info from fixture file
  before(function () {
    cy.fixture('userInfo').then(function (userInfo) {
      user = userInfo;      
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
      + '&departureTime=' + endDate.getHours() + '%3A' + endDate.toLocaleString('en-US', {'hour': '2-digit', 'minute':'2-digit', hour12:false}).split(':')[1] 
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
    
    Reserv.fillForm(user.DepartureFlightnr, user.ReturnFlightnr, user.Name, user.Email, user.Email2, user.Phone, user.Persons, user.Car, user.Sign, user.Package, user.Payment);

    Reserv.clickAgree();
    Reserv.clickChecked();
    
    //cy.get('#reservationSubmit').click()
  })
});