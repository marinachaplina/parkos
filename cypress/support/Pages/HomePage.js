class HomePage {

    getAirport() {
        return cy.get('.text-ellipsis').contains('Select airport').click();      
    }

    getDate() {
        return cy.get('.vc-day-content');      
    }

    getTime() {
        return cy.get('.legacy-time-picker-desktop__item');      
    }
    
    clickSearchButton() {
        return cy.get('.text-ellipsis').contains('Search parking spots').click();
    }

}

export default HomePage;