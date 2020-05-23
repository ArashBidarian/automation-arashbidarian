/// <reference types="cypress" />

import faker from 'faker' 

// elements
const titleOfNewClientsPage = 'New Client'

const newClientsSaveButton = 'a.btn:nth-child(2)' 
const newClientBackButton = 'a.btn:nth-child(1)'

const newClientNamefield = 'div.field:nth-child(1) > input:nth-child(2)'
const newClientEmailfield = 'div.field:nth-child(2) > input:nth-child(2)'
const newClientTelefonefield = 'div.field:nth-child(3) > input:nth-child(2)' 
// actions/ functions


function checkTitleOfNewClientsPage(cy){
    // f.01: Assertion
    cy.title().should('eq', titleOfNewClientsPage)
}

function goBackToClientOverviewPage (cy, contentToConfirm){
    cy.get(newClientBackButton).click()
    cy.contains(contentToConfirm)
}



function createNewClient (cy, newClientName, newClientEmail, newClientTelefone,contentToConfirm){
    cy.get(newClientNamefield).type(newClientName)
    cy.get(newClientEmailfield).type(newClientEmail)
    cy.get(newClientTelefonefield).type(newClientTelefone)
    cy.get(newClientsSaveButton).click()
    cy.contains(contentToConfirm)

}


function performLogout (cy, contentToConfirm){
    cy.get(logoutButton).click()
    cy.contains(contentToConfirm)
}


module.exports =  {
    checkTitleOfNewClientsPage,
    goBackToClientOverviewPage,
    createNewClient,
    performLogout

}
