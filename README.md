# Overview
This node module contains sample code to build a Node module
that leverages the IBM DB2 node module to connect to a DB2 database.

These IBM DB2 Node instructions were used to help build this solution: 
https://www.ibm.com/developerworks/community/blogs/pd/entry/using_ibm_db2_from_node_js4?lang=en

# Build and link to the node-db2-module
To package the node module for use for local testing without publishing
it to the public NPM register, run `npm pack` to create a tarball file.

A npm link can be created between node-db2-module and node-db2-module-test
so that the latest verison of node-db2-module is always available to the test script.
Commands used to create the npm link:

1. Run `npm link` in the root of the node-db2-module folder
2. Run `npm link node-db2-module` in the root of the node-db2-module-test folder

# Test node-db2-module using a simple test server
To run the test, go to the node-db2-module-test folder and run `npm start`. A simple 
test web server will be launched using nodemon.

After the server has started, launch the server in a browser at http://localhost:8080.

# Sample database
The flavour of DB2 that is used in this demo is IBM DB2 Express-C, a free
version of DB2 offered by IBM. See https://www.ibm.com/developerworks/downloads/im/db2express/ 
for more information.

## Setup Instructions
Your local DB2 server should already have a "SAMPLE" database. You will need to augment
that database (or a database of your choosing):

1. Create a new user (ex. Windows user) named "DB2APPUSER"
2. Create a new schema for that user named "DB2APPUSER"
3. Run the scripts in the db2-scripts directory to create the necessary objects in the DB2APPUSER schema

A sample DB2 Express-C installation response file is also provided in the db2-scripts folder.