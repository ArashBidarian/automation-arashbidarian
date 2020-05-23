/// <reference types="cypress" />
import faker from 'faker'

// elements
const titleOfNewBillsPage = 'New Bill'

const newBillsSaveButton = 'a.btn:nth-child(2)' 


const newBillsValueField = 'div.field:nth-child(1) > input:nth-child(2)'
const newBillsPaidCheckbox = '.checkbox'



function checkTitleOfNewBillsPage(cy){
    // f.01: Assertion
    cy.title().should('eq', titleOfNewBillsPage)
}


function createBill (cy, newValue, contentToConfirm){
    cy.get(newBillsValueField).select(newValue)
    cy.get(newBillPaidCheckButton).click()   
    cy.get(newBillsSaveButton).click()
    //Assert: kontrollera rummnummer
    cy.contains(contentToConfirm)
}


function performLogout (cy, contentToConfirm){
    cy.get(logoutButton).click()
    cy.contains(contentToConfirm)
}


module.exports =  {
    checkTitleOfNewBillsPage,
    createBill,
    performLogout,

}