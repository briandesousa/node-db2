"use strict";

var ibmdb = require('ibm_db');


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

    retrieveCustomers(callback) {

        var customers = [];

        console.log("Opening DB2 connection");

        ibmdb.open("DRIVER={DB2};DATABASE=SAMPLE;UID=db2appuser;PWD=password;HOSTNAME=localhost;port=50000", function(err, conn) {
            if(err) {
          	    console.log("DB2 connection error: ", err.message);
                callback();
            } else {
                conn.query("select * from customer fetch first 100 rows only", function(err, customerRows, moreResultSets) {
                    if(err) {
                        console.log("DB2 query failed: ", err.message);
                    } else {
                        for(var i = 0; i < customerRows.length; i++) {
                            customers.push(
                                new module.exports.Customer(
                                    customerRows[i].CID, 
                                    customerRows[i].FIRST_NAME, 
                                    customerRows[i].LAST_NAME));
                        }

                        if(typeof callback === "function") {
                            callback(customers);
                        }
                    }
                });

                conn.close(function(){
                    console.log("DB2 connection Closed");
                });
            }
        });
    }
}
