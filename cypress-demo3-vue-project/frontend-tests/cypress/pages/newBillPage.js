/// <reference types="cypress" />
import faker from 'faker'

// elements
const titleOfNewBillsPage = 'New Bill'

const newBillsSaveButton = 'a.btn:nth-child(2)' 
const billsOverviewlogoutbutton = 'a.btn:nth-child(2)'

const newBillsValueField = 'div.field:nth-child(1) > input:nth-child(2)'
const newBillsPaidCheckbox = '.checkbox'



function checkTitleOfNewBillsPage(cy){
    // f.01: Assertion
    cy.title().should('eq', titleOfNewBillsPage)
}


function createBill (cy, newValue, contentToConfirm){
    cy.get('input').type(faker.random.number({min:2000, max:4000}))  
    cy.get('.checkbox').click() 
    cy.get('.blue').click()
    cy.get(newBillsSaveButton).click()

    cy.contains(contentToConfirm)
}


function performLogout (cy){
    cy.get(logoutButton).click()
    cy.contains('Login')
}


//function createBill (cy, newValue, contentToConfirm){
//    cy.get('input').type(faker.random.number({min:2000, max:4000}))  
//    cy.get('.checkbox').click() 
//    cy.get('.blue').click()
//    cy.get(newBillsSaveButton).click()

//    cy.contains(contentToConfirm)
//}



module.exports =  {
    checkTitleOfNewBillsPage,
    createBill,
    performLogout,

}