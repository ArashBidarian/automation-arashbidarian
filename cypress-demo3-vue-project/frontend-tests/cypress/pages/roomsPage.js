/// <reference types="cypress" />

// elements
//const titleOfDashboardPage = 'Testers Hotel'

const titleOfRoomsPage = 'Rooms'
//const roomsOverviewPageButton = ':nth-child(1) > .btn'
const logoutButton = '.user > .btn' 
const createRoomsButton = 'h2 > .btn' 


// actions/ functions
//====================

//Assertion 01 Rooms: check title of Rooms Page
function checkTitleOfRoomsPage(cy){
    // f.01: Assertion
    cy.title().should('eq', titleOfRoomsPage)
}

function goToCreateRoomsPage (cy, contentToConfirm){ 
    cy.get(createRoomsButton).click()
    cy.contains(contentToConfirm)
}

function performLogout (cy){
    cy.get(logoutButton).click()
    cy.contains('Login')
}


module.exports =  {
    checkTitleOfRoomsPage,
    goToCreateRoomsPage,
    performLogout

}
