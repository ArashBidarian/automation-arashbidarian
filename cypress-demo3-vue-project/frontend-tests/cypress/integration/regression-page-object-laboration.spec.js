/// <reference types="cypress" />

import * as indexFuncs from '../pages/indexPage'
import * as dashBoardFuncs from '../pages/dashboardPage'
import * as roomsOverviewFuncs from '../pages/roomsPage'
import * as newRoomFuncs from '../pages/newRoomPage'
import * as clienOverviewFuncs from '../pages/clientsPage'
import * as newClientFuncs from '../pages/newClientpage'
import * as billsOverviewFuncs from '../pages/billsPage'
import * as newBillsFuncs from '../pages/newBillPage'
import * as targets from '../targets/targets'
import faker from 'faker'

// Test suite 
describe('Test suite', function(){
    
    beforeEach(()=>{
        cy.visit(targets.base_url)
        indexFuncs.checkTitleOfIndexPage(cy)
    })
    
    // Test case 01: login > go to dashboard > logout
    it('TC01: Perform login and logout', function(){
        indexFuncs.performValidLogin(cy, targets.username, targets.password, targets.dashboardtitle)
        dashBoardFuncs.performLogout(cy, targets.indextitlelogin)
        
    })

    // Test case 02: login > go to dashboard > go to Rooms overview page > logout

    it('TC02: Go to Rooms Overview Page & logout', function(){
        indexFuncs.performValidLogin(cy, targets.username, targets.password, targets.dashboardtitle)
        dashBoardFuncs.goToRoomsOverviewPage(cy, targets.roomsoverviewtitle)
        cy.contains(targets.roomsoverviewtitle)
        dashBoardFuncs.performLogout(cy, targets.indextitlelogin)
    })

    // Test case 03: login > go to dashboard > go to Clients overview page >  logout
    it.only('TC03: Go to Clients Overview Page & logout', function(){
        indexFuncs.performValidLogin(cy, targets.username, targets.password, targets.dashboardtitle)
        dashBoardFuncs.goToClientsOverviewPage(cy, targets.clienstoverviewtitle)
        cy.contains(targets.clienstoverviewtitle)
        dashBoardFuncs.performLogout(cy, targets.indextitlelogin)
    })

    // Test case 04: login > go to dashboard > go to Bills overview page >  logout
    it('TC04: Go to Bills Overview Page & logout', function(){
        indexFuncs.performValidLogin(cy, targets.username, targets.password, targets.dashboardtitle)
        dashBoardFuncs.goToBillsOverviewPage(cy, targets.billsoverviewtitle)
        cy.contains(targets.billsoverviewtitle)
        dashBoardFuncs.performLogout(cy, targets.indextitlelogin)
    })

    // Test case 05: login > go to dashboard > go to Reservations overview page >  logout
    it('TC05: Go to Reservations Overview Page & logout', function(){
        indexFuncs.performValidLogin(cy, targets.username, targets.password, targets.dashboardtitle)
        dashBoardFuncs.goToReservationOverviewPage(cy, targets.reservationsoverviewtitle)
        cy.contains(targets.reservationsoverviewtitle)
        dashBoardFuncs.performLogout(cy, targets.indextitlelogin)
    })

    // Test case 06: login > go to dashboard > go to Rooms overview page > goto create room > Create a room >assert with rummnumber & logout
    it('TC06: Go to Rooms Overview Page> goto create room & logout', function(){
        indexFuncs.performValidLogin(cy, targets.username, targets.password, targets.dashboardtitle)
        dashBoardFuncs.goToRoomsOverviewPage(cy, targets.roomsoverviewtitle) 
        roomsOverviewFuncs.goToCreateRoomsPage(cy, targets.createroomtitle)
        newRoomFuncs.createRoom(cy, targets.newRoomCategory, targets.newRoomNumber, targets.newFloorNumber, targets.newPrice, targets.newFeatures, targets.newRoomNumber)
    
        roomsOverviewFuncs.performLogout(cy)
    })

    // Test case 07: login > go to dashboard > go to Clients overview page > goto create Client > Create a Client &logout

    it.only('TC07: Go to Clients Overview Page> goto create client> CreateClient & logout', function(){
        indexFuncs.performValidLogin(cy, targets.username, targets.password, targets.dashboardtitle)
        dashBoardFuncs.goToClientsOverviewPage(cy, targets.clienstoverviewtitle)
        cy.contains(targets.clienstoverviewtitle)
        clienOverviewFuncs.goToCreateClientPage(cy)
        newClientFuncs.createNewClient(cy, targets.newClientname, targets.newClientEmail, targets.newClientTelefone, targets.newClientname)
        clienOverviewFuncs.performLogout(cy)
    })

     // Test case 08: login > go to dashboard > go to Bills overview page > Create a bill & logout (provar att lägga här!)
     // Behöver förfinas & stoppas i newBillPage.js (fungerande men inte bearbetad)
     it('TC08: Go to Bills Overview Page> Create a Bill & logout', function(){
        const billValue = faker.random.number({min:2000, max:4000})
        const billsOverviewlogoutbutton = 'a.btn:nth-child(2)'
        indexFuncs.performValidLogin(cy, targets.username, targets.password, targets.dashboardtitle)
        dashBoardFuncs.goToBillsOverviewPage(cy, targets.billsoverviewtitle)
        billsOverviewFuncs.goToCreateBillsPage(cy, 'New Bill')
        cy.get('input').type(billValue)  
        cy.get('.checkbox').click()  
        cy.get('.blue').click()
        cy.contains(billValue)
        // perform a logout with Assertion
        cy.get('.user > .btn').click()
        cy.contains('Login')
        
        
    })

})
