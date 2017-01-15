# Overview
This node module contains sample code to build a Node module
that leverages the IBM DB2 node module to connect to a DB2 database.

# Build and Test Instructions
To package the node module for use for local testing without publishing
it to the public NPM register, run `npm pack` to create a tarball file.

A npm link has been created between node-db2-module and node-db2-module-test
so that the latest verison of node-db2-module is always available to the test script.
Commands used to create the npm link:

1. Run `npm link` in the root of the node-db2-module folder
2. Run `npm link node-db2-module` in the root of the node-db2-module-test folder

To run the test, go to the node-db2-module-test folder and run `node test.js`.

# DB2 Express-C
The flavour of DB2 that is used in this demo is IBM DB2 Express-C, a free
version of DB2 offered by IBM.

See https://www.ibm.com/developerworks/downloads/im/db2express/ for more information.