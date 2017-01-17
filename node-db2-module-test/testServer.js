
console.log("Initializing node-db2-module");

var nodeDB2 = require('node-db2-module');
var dataRetriever = new nodeDB2.CustomerDataRetriever();
var customers = dataRetriever.retrieveCustomers();

console.log("Size of customer list that was retrieved: " + customers.length);

var http = require('http');

var header = `
    <html>
        <head>
            <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">            
        </head>
        <body>
            <h1>Customers</h1>
            <table class="table">
                <tr>
                    <th>Customer ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th></th>
                <tr>`;
var footer = `
            </table>
        </body>
    </html>`;

http.createServer(function(request, response) {

    var html = header;
    
    customers.forEach(function(customer) {
        html += "<tr><td>" + customer.customerId + "</td>";
        html += "<td>" + customer.firstName + "</td>";
        html += "<td>" + customer.lastName + "</td>";
        html += `
            <td>
                <button>Edit</button>
                <button>Delete</button>
            </td>
        </tr>`;
    });

    html += footer;

    response.end(html);
}).listen(8080, 'localhost');

console.log("Web server running at http://localhost:8080");