class ParkingAvailablePage {

    checkform() {
        cy.get('.text-base').should('not.include.text', '0 available');
    }
    
    clickProceedButton() {
        return cy.get('.primary-btn').contains('Proceed to booking').click();
    }
    
}

export default ParkingAvailablePage;