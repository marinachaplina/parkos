class HomePage {

    choosePeriod(airport, start, end)
    {
        cy.get(this.getFormSelector()).contains('Select airport').click();
        cy.contains(airport).click();
        cy.get(this.getDateSelector()).contains(start.getDate()).click();
        cy.get(this.getTimeSelector()).contains(start.toLocaleTimeString('en-US',{hour:'numeric',minute:'numeric',hour12:true})).click(); 
        cy.get(this.getDateSelector()).contains(end.getDate()).click();
        cy.get(this.getTimeSelector()).contains(end.toLocaleTimeString('en-US',{hour:'numeric',minute:'numeric',hour12:true})).click(); 
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