class HomePage {

    choosePeriod(airport, startDate, startTime, endDate, endTime)
    {
        cy.get(this.getFormSelector()).contains('Select airport').click();
        cy.contains(airport).click();
        cy.get(this.getDateSelector()).contains(startDate).click();
        cy.get(this.getTimeSelector()).contains(startTime).click(); 
        cy.get(this.getDateSelector()).contains(endDate).click();
        cy.get(this.getTimeSelector()).contains(endTime).click(); 
        cy.get(this.getFormSelector()).contains('Search parking spots').click();
    }

    getFormSelector()
    {
        return '.text-ellipsis';
    }

    getDateSelector() {
        return '.vc-day-content';      
    }

    getTimeSelector() {
        return '.legacy-time-picker-desktop__item';      
    }

}

export default HomePage;