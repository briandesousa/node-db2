
var nodeDB2 = require('./index.js');

console.log("\nTesting Customer in node-db2-module");
var customer = new nodeDB2.Customer(1, "abc", "efg");
console.log("Customer: " + customer.toString());

console.log("\nTesting CustomerDataRetriever in node-db2-module");
var dataRetriever = new nodeDB2.CustomerDataRetriever();

var receivedCustomers = false;

dataRetriever.retrieveCustomers(function(customers) {
    receivedCustomers = true;
    if(Array.isArray(customers)) {
        for(var i = 0; i < customers.length; i++) {
            console.log("[" + customers[i].customerId + "] " + customers[i].firstName + " " + customers[i].lastName);
        }
    } else {
        console.log("Customer list could not be retrieved");
    }
});

continueExec();

function continueExec() {
    if(!receivedCustomers) {
        setTimeout(continueExec, 1000);
    }
}


