class HomePage {

    choosePeriod(airport, startDate, endDate)
    {
        //console.log(startDate);
        //console.log(endDate);
        cy.get(this.getFormSelector()).contains('Select airport').click();
        cy.contains(airport).click();
        cy.get(this.getDateSelector()).contains(startDate.getDate()).click();
        cy.get(this.getTimeSelector()).contains(startDate.toLocaleTimeString('en-US',{hour:'numeric',minute:'numeric',hour12:true})).click(); 
        cy.get(this.getDateSelector()).contains(endDate.getDate()).click();
        cy.get(this.getTimeSelector()).contains(endDate.toLocaleTimeString('en-US',{hour:'numeric',minute:'numeric',hour12:true})).click(); 
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