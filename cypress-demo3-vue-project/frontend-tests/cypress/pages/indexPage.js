/// <reference types="cypress" />

// elements
//=========
const titleOfIndexPage = 'Testers Hotel'
const usernamenTextfield = ':nth-child(1) > input' 
const passwordTextfield = ':nth-child(2) > input'
const loginButton = '.btn'
const dashboardTitle = 'h2'


// actions/ functions
//====================
//Assertion right page

function checkTitleOfIndexPage(cy){
    // f.01: Assertion
    cy.title().should('eq', titleOfIndexPage)
}

function performValidLogin(cy, username, password){
    // f.02: Write in Username "tester01"
    cy.get(usernamenTextfield).type(username)
    // f03: User password
    cy.get(passwordTextfield).type(password)
    // f04: Push Click on Login button
    cy.get(loginButton).click()
    // f04; Assertion när inloggad
    cy.contains('Tester Hotel Overview')
}

// exports
//===========
module.exports = {
    checkTitleOfIndexPage,
    performValidLogin
}


