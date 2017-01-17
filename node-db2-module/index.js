"use strict";

module.exports.Customer = class Customer {

    constructor(customerId, firstName, lastName) {
        this.customerId = customerId;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getCustomerId() {
        return this.customerId;
    }

    getFirstName() {
        return this.firstName;
    }

    getLastName() {
        return this.lastName;
    }

    toString() {
        return '[' + this.customerId + '] ' + this.firstName + ' ' + this.lastName;  
    }
}

module.exports.CustomerDataRetriever = class CustomerDataRetriever {

    constructor() {
    }

    retrieveCustomers() {

        var customers = [
            new module.exports.Customer(1, "Dillon", "Sharpy"),
            new module.exports.Customer(2, "Larry", "David"),
            new module.exports.Customer(3, "Susan", "Marley")
        ];

        return customers;
    }
}
