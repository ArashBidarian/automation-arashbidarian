/// <reference types="cypress" />

// elements
//const titleOfDashboardPage = 'Testers Hotel'

const titleOfReservationsPage = 'Reservations'
const reservationsOverviewPageButton = ':nth-child(4) > .btn' 
const logoutButton = 'button.btn'   ////Dubbelkolla


//const roomsOverviewPageButton = ':nth-child(1) > .btn'
//const clientsOverviewpageButton = ':nth-child(2) > .btn'
//const billsOverviewPageButton = ':nth-child(3) > .btn'
//const reservationsOverviewPageButton = ':nth-child(4) > .btn' 
// Reservations reservations

// actions/ functions
//====================


//Assertion 01 Reservations: check title of Reservations Page
function checkTitleOfReservationsPage(cy){
    // f.01: Assertion
    cy.title().should('eq', titleOfReservationsPage)
}

function goToCreateReservationsPage (cy, contentToConfirm){
    cy.get(reservationsOverviewPageButton).click()
    cy.contains(contentToConfirm)
}

function performLogout (cy, contentToConfirm){
    cy.get(logoutButton).click()
    cy.contains(contentToConfirm)
}


module.exports =  {
    checkTitleOfReservationsPage,
    goToCreateReservationsPage,
    performLogout

}