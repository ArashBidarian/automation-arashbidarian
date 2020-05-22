/// <reference types="cypress" />

// elements
//const titleOfDashboardPage = 'Testers Hotel'

const titleOfRoomsPage = 'Rooms'
const roomsOverviewPageButton = ':nth-child(1) > .btn'
const logoutButton = 'button.btn'   ////Dubbelkolla


//const roomsOverviewPageButton = ':nth-child(1) > .btn'
//const clientsOverviewpageButton = ':nth-child(2) > .btn'
//const billsOverviewPageButton = ':nth-child(3) > .btn'
//const reservationOverviewPageButton = ':nth-child(4) > .btn' 


// actions/ functions
//====================


//Assertion 01 Rooms: check title of Rooms Page
function checkTitleOfRoomsPage(cy){
    // f.01: Assertion
    cy.title().should('eq', titleOfRoomsPage)
}

function goToCreateRoomsPage (cy, contentToConfirm){
    cy.get(roomsOverviewPageButton).click()
    cy.contains(contentToConfirm)
}

function performLogout (cy, contentToConfirm){
    cy.get(logoutButton).click()
    cy.contains(contentToConfirm)
}


module.exports =  {
    checkTitleOfRoomsPage,
    goToCreateRoomsPage,
    performLogout

}
