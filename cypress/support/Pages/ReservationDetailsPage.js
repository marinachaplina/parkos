class ReservationDetailsPage {

    fillForm(DepartureFlightnr, ReturnFlightnr, Name, Email, Email2, Phone, Persons, Car, Sign, Package, Payment)
    {
        cy.get('#inputDepartureFlightnr').focus().type(DepartureFlightnr); 
        cy.get('#inputReturnFlightnr').focus().type(ReturnFlightnr);
        cy.get('#inputName').focus().type(Name);
        cy.get('#inputEmail').focus().type(Email);
        cy.get('#inputEmail2').focus().type(Email2);
        cy.get('#inputPhone').focus().type(Phone);
        cy.get('#inputPersons').select(Persons);
        cy.get('#inputCar').focus().type(Car);
        cy.get('#inputSign').focus().type(Sign);
        cy.get('.package-radio input[name="package"][value="'+Package+'"]').check();
        cy.get('.radio-option-content input[data-name="'+Payment+'"]').check();
    }

    clickAgree() {
        return cy.get('#AVParkos').focus().click();
    }
    
    clickChecked() {
        return cy.get('#ExtraControl').focus().click();
    }
    
}

export default ReservationDetailsPage;