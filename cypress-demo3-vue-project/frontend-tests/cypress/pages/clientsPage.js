/// <reference types="cypress" />

// elements
//const titleOfDashboardPage = 'Testers Hotel'

const titleOfClientsPage = 'Clients'
//const clientsOverviewpageButton = ':nth-child(2) > .btn'
const logoutButton = 'button.btn'   ////Dubbelkolla

const createClientsButton = 'a.btn:nth-child(2)' 
const logoutButtonClient = '.user > .btn'

// actions/ functions
//====================


//Assertion 01 Rooms: check title of Client Page
function checkTitleOfClientsPage(cy){
    // f.01: Assertion
    cy.title().should('eq', titleOfClientsPage)
}

function goToCreateClientPage (cy){
    cy.get(createClientsButton).click()
    cy.contains('New Client')
}

function performLogout (cy){
    cy.get(logoutButton).click()
    cy.contains('Login')
}


module.exports =  {
    checkTitleOfClientsPage,
    goToCreateClientPage,
    performLogout

}
