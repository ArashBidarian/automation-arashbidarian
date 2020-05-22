/// <reference types="cypress" />

// elements
//const titleOfDashboardPage = 'Testers Hotel'

const titleOfBillsPage = 'Bills'
const billsOverviewPageButton = ':nth-child(3) > .btn'
const logoutButton = 'button.btn'   ////Dubbelkolla

//const roomsOverviewPageButton = ':nth-child(1) > .btn'
//const clientsOverviewpageButton = ':nth-child(2) > .btn'
//const billsOverviewPageButton = ':nth-child(3) > .btn'
//const reservationOverviewPageButton = ':nth-child(4) > .btn' 


// actions/ functions
//====================

//Assertion 01 : check title of Bills Page
function checkTitleOfBillsPage(cy){
    // f.01: Assertion
    cy.title().should('eq', titleOfBillsPage)
}

function goToCreateBillsPage (cy, contentToConfirm){
    cy.get(billsOverviewPageButton).click()
    cy.contains(contentToConfirm)
}

function performLogout (cy, contentToConfirm){
    cy.get(logoutButton).click()
    cy.contains(contentToConfirm)
}


module.exports =  {
    checkTitleOfBillsPage,
    goToCreateBillsPage,
    performLogout

}