/// <reference types="cypress" />

// elements
const titleOfDashboardPage = 'Testers Hotel'
const logoutButton = '.user > .btn'


const roomsOverviewPageButton = ':nth-child(1) > .btn'
const clientsOverviewpageButton = '.blocks > :nth-child(2) > .btn'
const billsOverviewPageButton = ':nth-child(3) > .btn'
const reservationOverviewPageButton = ':nth-child(4) > .btn' 


// actions/ functions
//====================

//Assertion 00 Dashboard: check title of dashboard Page
function checkTitleOfDashboardPage(cy){
    // f.01: Assertion
    cy.title().should('eq', titleOfDashboardPage)
}
//Assertion 01 RoomsOverview Page: check title of rooms overview Page
function goToRoomsOverviewPage (cy, contentToConfirm){
    cy.get(roomsOverviewPageButton).click()
    cy.contains(contentToConfirm)
}
//Assertion 02 Clients Overview Page: check title of clients overview Page
function goToClientsOverviewPage (cy, contentToConfirm){
    cy.get(clientsOverviewpageButton).click()
    cy.contains(contentToConfirm)
}

//Assertion 03 bills Overview Page: check title of clients overview Page
function goToBillsOverviewPage (cy, contentToConfirm){
    cy.get(billsOverviewPageButton).click()
    cy.contains(contentToConfirm)
}

//Assertion 04 reservation Overview Page: check title of clients overview Page
function goToReservationOverviewPage (cy, contentToConfirm){
    cy.get(reservationOverviewPageButton).click()
    cy.contains(contentToConfirm)
}


function performLogout (cy, contentToConfirm){
    cy.get(logoutButton).click()
    cy.contains(contentToConfirm)
}


module.exports =  {
    checkTitleOfDashboardPage,
    goToRoomsOverviewPage,
    goToClientsOverviewPage,
    goToBillsOverviewPage,
    goToReservationOverviewPage,
    performLogout

}
