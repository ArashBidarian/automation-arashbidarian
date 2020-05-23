/// <reference types="cypress" />


// elements
const titleOfNewRoomsPage = 'New Room'

const newRoomsSaveButton = 'a.btn:nth-child(2)' 
const newRoomsBackButton = 'a.btn:nth-child(1)'

const newRoomsCategoryfield = ':nth-child(1) > select'
const newRoomsNumberfield = ':nth-child(2) > input'
const newRoomsFloorfield = ':nth-child(3) > input' 
const newRoomsAvalableCheckBoxField = '.checkbox'
const newRoomsPriceField = ':nth-child(5) > input'
const newRoomsFeaturesField = ':nth-child(6) > select'
// actions/ functions


function checkTitleOfNewRoomsPage(cy){
    // f.01: Assertion
    cy.title().should('eq', titleOfNewRoomsPage)
}

function goBackToRoomtOverviewPage (cy, contentToConfirm){
    cy.get(newRoomsBackButton).click()
    cy.contains(contentToConfirm)
}


function createRoom (cy, newRoomCategory, newRoomNumber, newFloorNumber, newPrice, newFeatures, contentToConfirm){
    cy.get(newRoomsCategoryfield).select(newRoomCategory)
    cy.get(newRoomsNumberfield).type(newRoomNumber)
    cy.get(newRoomsFloorfield).type(newFloorNumber)
    cy.get(newRoomsAvalableCheckBoxField).click()
    cy.get(newRoomsPriceField).type(newPrice)
    cy.get(newRoomsFeaturesField).type(newFeatures)
    cy.get(newRoomsSaveButton).click()
    //Assert: kontrollera rummnummer
    cy.contains(contentToConfirm)
}


function performLogout (cy, contentToConfirm){
    cy.get(logoutButton).click()
    cy.contains(contentToConfirm)
}


module.exports =  {
    checkTitleOfNewRoomsPage,
    createRoom,
    goBackToRoomtOverviewPage,
    performLogout,

}