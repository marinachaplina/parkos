class ReservationDetailsPage {

    checkform() {
        cy.get('h3').should('include.text', 'Your travel details');
    }

    getDepartureFlightnr() {
        return cy.get('#inputDepartureFlightnr');
    }

    typeDepartureFlightnr(text) {
        return this.getDepartureFlightnr().focus().type(text);
    }

    getReturnFlightnr() {
        return cy.get('#inputReturnFlightnr');
    }

    typeReturnFlightnr(text) {
        return this.getReturnFlightnr().focus().type(text);
    }

    getName() {
        return cy.get('#inputName');
    }

    typeName(text) {
        return this.getName().focus().type(text);
    }

    getEmail() {
        return cy.get('#inputEmail');
    }

    typeEmail(text) {
        return this.getEmail().focus().type(text);
    }

    getEmail2() {
        return cy.get('#inputEmail2');
    }

    typeEmail2(text) {
        return this.getEmail2().focus().type(text);
    }

    getPhone() {
        return cy.get('#inputPhone');
    }

    typePhone(text) {
        return this.getPhone().focus().type(text);
    }

    getPersons() {
        return cy.get('#inputPersons');
    }

    selectPersons(text) {
        return this.getPersons().select(text);
    }

    getCar() {
        return cy.get('#inputCar');
    }

    typeCar(text) {
        return this.getCar().focus().type(text);
    }

    getSign() {
        return cy.get('#inputSign');
    }
    
    typeSign(text) {
        return this.getSign().focus().type(text);
    }

    choosePackage(text) {
        return cy.get('.package-radio input[name="package"][value="'+text+'"]').check();
    }
    
    choosePayment(text) {
        return cy.get('.radio-option-content input[data-name="'+text+'"]').check();
    }

    clickAgree() {
        return cy.get('#AVParkos').focus().click();
    }
    
    clickChecked() {
        return cy.get('#ExtraControl').focus().click();
    }
    
}

export default ReservationDetailsPage;