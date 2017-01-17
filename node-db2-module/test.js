
var nodeDB2 = require('./index.js');

console.log("Testing Customer in node-db2-module");
var customer = new nodeDB2.Customer(1, "abc", "efg");
console.log("Customer: " + customer.toString());

console.log("Testing CustomerDataRetriever in node-db2-module");
var dataRetriever = new nodeDB2.CustomerDataRetriever();
console.log("Retrieved customer list: " + dataRetriever.retrieveCustomers());
