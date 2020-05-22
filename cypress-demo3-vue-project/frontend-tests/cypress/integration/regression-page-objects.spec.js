/// <reference types="cypress" />

import * as indexFuncs from '../pages/indexPage'
import * as dashBoardFuncs from '../pages/dashboardPage'
import * as roomsOverviewFuncs from '../pages/roomsPage'
import * as targets from '../tergets/targets'


// Test suite 
describe('Test suite', function(){
    
    beforeEach(()=>{
        cy.visit(targets.base_url)
        indexFuncs.checkTitleOfIndexPage(cy)
    })
    
    // Test case 01: login > go to dashboard > logout
    it('Perform login and logout', function(){
        indexFuncs.performValidLogin(cy, targets.username, targets.password, targets.dashboardtitle)
        dashBoardFuncs.performLogout(cy, targets.indextitlelogin)
        
    })

    // Test case 02: login > go to dashboard > go to Rooms overview page > logout

    it('Go to Rooms Overview Page & logout', function(){
        indexFuncs.performValidLogin(cy, targets.username, targets.password, targets.dashboardtitle)
        dashBoardFuncs.goToRoomsOverviewPage(cy, targets.roomsoverviewtitle)
        cy.contains(targets.roomsoverviewtitle)
        dashBoardFuncs.performLogout(cy, targets.indextitlelogin)
    })

    // Test case 03: login > go to dashboard > go to Clients overview page >  logout
    it('Go to Clients Overview Page & logout', function(){
        indexFuncs.performValidLogin(cy, targets.username, targets.password, targets.dashboardtitle)
        dashBoardFuncs.goToClientsOverviewPage(cy, targets.clienstoverviewtitle)
        cy.contains(targets.clienstoverviewtitle)
        dashBoardFuncs.performLogout(cy, targets.indextitlelogin)
    })

    // Test case 04: login > go to dashboard > go to Bills overview page >  logout
    it('Go to Bills Overview Page & logout', function(){
        indexFuncs.performValidLogin(cy, targets.username, targets.password, targets.dashboardtitle)
        dashBoardFuncs.goToBillsOverviewPage(cy, targets.billsoverviewtitle)
        cy.contains(targets.billsoverviewtitle)
        dashBoardFuncs.performLogout(cy, targets.indextitlelogin)
    })

    // Test case 05: login > go to dashboard > go to Reservations overview page >  logout
    it('Go to Reservations Overview Page & logout', function(){
        indexFuncs.performValidLogin(cy, targets.username, targets.password, targets.dashboardtitle)
        dashBoardFuncs.goToReservationOverviewPage(cy, targets.reservationsoverviewtitle)
        cy.contains(targets.reservationsoverviewtitle)
        dashBoardFuncs.performLogout(cy, targets.indextitlelogin)
    })



})
