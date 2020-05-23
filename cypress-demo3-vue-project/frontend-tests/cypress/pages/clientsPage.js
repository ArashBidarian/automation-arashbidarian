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

function goToCreateClientPage (cy, contentToConfirm){
    cy.get(createClientsButton).click()
    cy.contains(contentToConfirm)
}

function performLogout (cy, contentToConfirm){
    cy.get(logoutButtonClient).click()
    cy.contains(contentToConfirm)
}


module.exports =  {
    checkTitleOfClientsPage,
    goToCreateClientPage,
    performLogout

}
