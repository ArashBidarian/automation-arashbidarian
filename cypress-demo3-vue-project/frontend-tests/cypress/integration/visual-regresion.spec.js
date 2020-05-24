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
        cy.percySnapshot('Login Page')
    })
    
    // Test case 01: login > go to dashboard > logout
    it('TC01: Perform login and logout', function(){
        indexFuncs.performValidLogin(cy, targets.username, targets.password, targets.dashboardtitle)
        cy.percySnapshot('Dashboard')    
        dashBoardFuncs.performLogout(cy, targets.indextitlelogin)
        cy.percySnapshot('Back to Login Page')
    })

    // Test case 02: login > go to dashboard > go to Rooms overview page > logout

    it('TC02: Go to Rooms Overview Page & logout', function(){
        indexFuncs.performValidLogin(cy, targets.username, targets.password, targets.dashboardtitle)
        cy.percySnapshot('Dashboard')       
        dashBoardFuncs.goToRoomsOverviewPage(cy, targets.roomsoverviewtitle)
        cy.contains(targets.roomsoverviewtitle)
        cy.percySnapshot('Rooms Overview')
        dashBoardFuncs.performLogout(cy, targets.indextitlelogin)
        cy.percySnapshot('Back to Login Page')
    })


    // Test case 03: login > go to dashboard > go to Clients overview page >  logout
    it('TC03: Go to Clients Overview Page & logout', function(){
        indexFuncs.performValidLogin(cy, targets.username, targets.password, targets.dashboardtitle)
        cy.percySnapshot('Dashboard')
        dashBoardFuncs.goToClientsOverviewPage(cy, targets.clienstoverviewtitle)
        cy.contains(targets.clienstoverviewtitle)
        cy.percySnapshot('Clients Overview')
        dashBoardFuncs.performLogout(cy, targets.indextitlelogin)
        cy.percySnapshot('Back to Login Page')
    })

    // Test case 04: login > go to dashboard > go to Bills overview page >  logout
    it('TC04: Go to Bills Overview Page & logout', function(){
        indexFuncs.performValidLogin(cy, targets.username, targets.password, targets.dashboardtitle)
        cy.percySnapshot('Dashboard')
        dashBoardFuncs.goToBillsOverviewPage(cy, targets.billsoverviewtitle)
        cy.contains(targets.billsoverviewtitle)
        cy.percySnapshot('Bills Overview')
        dashBoardFuncs.performLogout(cy, targets.indextitlelogin)
        cy.percySnapshot('Back to Login Page')
    })

    // Test case 05: login > go to dashboard > go to Reservations overview page >  logout
    it('TC05: Go to Reservations Overview Page & logout', function(){
        indexFuncs.performValidLogin(cy, targets.username, targets.password, targets.dashboardtitle)
        cy.percySnapshot('Dashboard')
        dashBoardFuncs.goToReservationOverviewPage(cy, targets.reservationsoverviewtitle)
        cy.contains(targets.reservationsoverviewtitle)
        cy.percySnapshot('Reservation Overview')        
        dashBoardFuncs.performLogout(cy, targets.indextitlelogin)
        cy.percySnapshot('Back to Login Page')   
    })

    // Test case 06: login > go to dashboard > go to Rooms overview page > goto create room > Create a room >assert with rummnumber & logout
    it('TC06: Go to Rooms Overview Page> goto create room & logout', function(){
        indexFuncs.performValidLogin(cy, targets.username, targets.password, targets.dashboardtitle)
        cy.percySnapshot('Dashboard')
        dashBoardFuncs.goToRoomsOverviewPage(cy, targets.roomsoverviewtitle) 
        cy.percySnapshot('Rooms Overview')
        roomsOverviewFuncs.goToCreateRoomsPage(cy, targets.createroomtitle)
        cy.percySnapshot('Create Rooms page')
        newRoomFuncs.createRoom(cy, targets.newRoomCategory, targets.newRoomNumber, targets.newFloorNumber, targets.newPrice, targets.newFeatures, targets.newRoomNumber)
        cy.percySnapshot('Rooms Overview')
        roomsOverviewFuncs.performLogout(cy)
        cy.percySnapshot('Back to Login Page')
    })

    // Test case 07: login > go to dashboard > go to Clients overview page > goto create Client > Create a Client &logout

    it('TC07: Go to Clients Overview Page> goto create client> CreateClient & logout', function(){
        indexFuncs.performValidLogin(cy, targets.username, targets.password, targets.dashboardtitle)
        cy.percySnapshot('Dashboard')
        dashBoardFuncs.goToClientsOverviewPage(cy, targets.clienstoverviewtitle)
        cy.contains(targets.clienstoverviewtitle)
        cy.percySnapshot('Cliens Overview')
        clienOverviewFuncs.goToCreateClientPage(cy)
        cy.percySnapshot('New Client Page')
        newClientFuncs.createNewClient(cy, targets.newClientname, targets.newClientEmail, targets.newClientTelefone, targets.newClientname)
        cy.percySnapshot('Cliens Overview')
        clienOverviewFuncs.performLogout(cy)
        cy.percySnapshot('Back to Login Page')
    })

     // Test case 08: login > go to dashboard > go to Bills overview page > Create a bill & logout (provar att lägga här!)
     // Behöver förfinas & stoppas i newBillPage.js (fungerande men inte bearbetad)
     it('TC08: Go to Bills Overview Page> Create a Bill & logout', function(){
        const billValue = faker.random.number({min:2000, max:4000})
        const billsOverviewlogoutbutton = 'a.btn:nth-child(2)'
        indexFuncs.performValidLogin(cy, targets.username, targets.password, targets.dashboardtitle)
        cy.percySnapshot('Dashboard')
        dashBoardFuncs.goToBillsOverviewPage(cy, targets.billsoverviewtitle)
        cy.percySnapshot('Bill Overview Page')
        billsOverviewFuncs.goToCreateBillsPage(cy, 'New Bill')
        cy.percySnapshot('New Bill Page')
        
        // Create a new Bill & save
        cy.get('input').type(billValue)  
        cy.get('.checkbox').click()  
        cy.get('.blue').click()
        cy.contains(billValue)
        cy.percySnapshot('Bill Overview Page')
        // perform a logout with Assertion
        cy.get('.user > .btn').click()
        cy.contains('Login')
        cy.percySnapshot('Back to Login Page')

    })

})
