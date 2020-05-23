
import faker from 'faker'

module.exports = {
    base_url: 'http://localhost:3000',
    username: 'tester01',
    password: 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c',    // Test case
    dashboardtitle: 'Tester Hotel Overview',
    indextitlelogin: 'Login',  

    reservationsoverviewtitle: 'Reservations',

    roomsoverviewtitle: 'Rooms',
    createroomtitle: 'New Room',
    newRoomCategory: 'Double', 
    newRoomNumber: faker.random.number (499), 
    newFloorNumber: faker.random.number(4), 
    availibility: '', 
    newPrice: faker.random.number({min:2000, max:4000}), 
    newFeatures: 'Balcony',
    
    billsoverviewtitle: 'Bills',
    billsCreatePageTitle: 'New Bill',
    newbillValue: faker.random.number({min:2000, max:4000}), 


    clienstoverviewtitle: 'Clients',   
    createclienttitle: 'New Client',
    newClientname: faker.name.firstName() +" "+ faker.name.lastName(),
    newClientEmail: faker.internet.email(),
    newClientTelefone: faker.phone.phoneNumber(),




    //createbilltitle: 'New Bill',
    //createreservation: 'New Reservation',



  
    // username02: 'tester02',
    //password02: 'sppm7qncqmVft5uECkwjLcLdEJGzM3Cw',
    
}