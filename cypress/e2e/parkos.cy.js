import ReservationDetailsPage from '../support/Pages/ReservationDetailsPage';
import ParkingAvailablePage from '../support/Pages/ParkingAvailablePage';
import HomePage from '../support/Pages/HomePage';

describe('Parkos reservations', () => {
  
  const Reserv = new ReservationDetailsPage();
  const Available = new ParkingAvailablePage();
  const Home = new HomePage();

  it('passes', () => {

    cy.visit('https://parkos.com/');

    // find the content 'Select airport' -> choose 'Las Vegas' and click
    Home.getAirport();
    cy.contains('Las Vegas').click();
    
    // choose the date and time check in/out and click the 'Search' button
    Home.getDate().contains('22').click();
    Home.getTime().contains('6:00 AM').click();
    Home.getDate().contains('23').click();
    Home.getTime().contains('8:00 PM').click();
   
    Home.clickSearchButton(); 

    // check if there is an available option and click the 'Proceed' button
    Available.checkform();
    Available.clickProceedButton();

    // check if 'Your travel details' form is opened and type the reservation details
    Reserv.checkform();

    Reserv.typeDepartureFlightnr('Fl345');
    Reserv.typeReturnFlightnr('Fl346');
    Reserv.typeName('Marina');
    Reserv.typeEmail('Marina@test.com');
    Reserv.typeEmail2('Marina@test.com');
    Reserv.typePhone('12345678');
    Reserv.selectPersons('2');
    Reserv.typeCar('Volkswagen Golf7');
    Reserv.typeSign('KL1234H');

    // choose the Package 'base', 'standard' or 'premium'
    Reserv.choosePackage('base');
    
    // choose the Payment option 'Credit/Debit Card', 'Visa', 'Mastercard', 'American Express' or 'PayPal'
    Reserv.choosePayment('Visa');

    Reserv.clickAgree();
    Reserv.clickChecked();
    
    // cy.get('#reservationSubmit').click()
  })
});