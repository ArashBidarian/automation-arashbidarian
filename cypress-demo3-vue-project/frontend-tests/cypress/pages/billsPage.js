/// <reference types="cypress" />

// elements
//const titleOfDashboardPage = 'Testers Hotel'

const titleOfBillsOverviewPage = 'Bills'
const billsCreatePageButton = 'h2 > .btn'

const logoutButton = 'button.btn'   ////Dubbelkolla




// actions/ functions
//====================

//Assertion 01 : check title of Bills Page
function checkTitleOfBillsPage(cy){
    // f.01: Assertion
    cy.title().should('eq', titleOfBillsOverviewPage)
}

function goToCreateBillsPage (cy, contentToConfirm){
    cy.get(billsCreatePageButton).click()
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