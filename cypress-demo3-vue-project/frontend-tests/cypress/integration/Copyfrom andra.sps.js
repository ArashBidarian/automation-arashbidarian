
    // Test case 01: login > go to dashboard > logout
    it('Perform login and logout', function(){
        indexFuncs.performValidLogin(cy, targets.username, targets.password, targets.dashboardtitle)
        
        roomsOverviewPageFuncs.performLogout(cy, targets.indextitlelogin)
    })


function goToRoomsOverviewPage (cy, contentToConfirm){

    // f04: Push Click on roomsoverviewButton button
    cy.get(roomsOverviewPageButton).click()
    // f04; Assertion när inloggad
    cy.contains(contentToConfirm)



// for room 
target.roomsoverviewtitle

    // Test case 02: login > go to dashboard > go to rooms overview page > add room > logout
     it('Go to Rooms Overview Page', function(){
        indexFuncs.gotoRoomsOverviewPage(cy, targets.username, targets.password, target.roomsoverviewtitle)

//        dashBoardFuncs.performLogout(cy, 'Login')





från dashboardtitle
//Assertion right page
function checkTitleOfDashboardPage(cy){
    // f.01: Assertion
    cy.title().should('eq', titleOfDashboardPage)
}

function performLogout (cy, contentToConfirm){
    cy.get(goToRoomsOverviewPage).click()
    cy.contains(roomsoverviewti)
}



function goToRoomsOverviewPage (cy, contentToConfirm){

    // f04: Push Click on roomsoverviewButton button
    cy.get(roomsOverviewPageButton).click()
    // f04; Assertion när inloggad
    cy.contains(contentToConfirm)




    //Assertion 02 clients: check title of Clients Page
function checkTitleOfDashboardPage(cy){
    // f.01: Assertion
    cy.title().should('eq', titleOfDashboardPage)
}

//Assertion 03 Bills: check title of Bills Page
function checkTitleOfDashboardPage(cy){
    // f.01: Assertion
    cy.title().should('eq', titleOfDashboardPage)
}

//Assertion 04 reservations: check title of Reservations Page
function checkTitleOfDashboardPage(cy){
    // f.01: Assertion
    cy.title().should('eq', titleOfDashboardPage)
}
