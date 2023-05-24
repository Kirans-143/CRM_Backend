# CRM_Backend

### Session1

# npm i express

# npm i nodemon

# create server.js

# package.json => main:server.js, script=> dev: nodemon server.js

# npm i mongoose

# 1.Establish connection with mongodb & CHECK IF admin EXIST else create ADMIN

# 2. Start our server which will listen for HTTP requests at port 8080

# db.on => for error & db.on successfull

# app nd express tpo listen

# config folder => 1.db.config- for db connection local host address

# 2.server.config.js - mention the port num and imoirt it in server.js file and use port

# then import it in server.js file and use url

$$
# step:1
 ## create MOdel folder : user.model.js

# npm i bcryptjs _ for password hashing
$$

Note : if db already present in mongodb then 1.use crm_db
2.db.dropDatabase()

# npm i body-parser

# Server creatition is completed and now server is up and running with user schema

### Session 2

# routes folder -> auth.route.js - wher signup and signin api present

# controller foledr -> signup and siognin logic contain and use them in controller and finally use controller in server.js

# middlewares folder -> verifySignUp.js

# utils - > constants > keep all contsnts in this file

# config => auth.config.js >>>> for secretekey for the signin

# npm i jsonwebtoken ====> to generato web token at the time of signin

## Session3

# to create user API, 1st we need to create user.routes.js file and same is invoked in server.js

# Create the middleware ===> authJWT.js => for authentication and authorization ( verifyToken and isAdmin resply)

# Create the user.controller.js for findAll, findById and update

# create file convertUserObject(utils) - to enter the values dynamically

# in user controller if(user.length>0) ==> if registerd user not present then it will give message instead of showing empty array

## Session4

# ticket model schema is created ticket.model.js

# now we will add the respective routes tickect.route.js ===> for the API => create ticket(POST), update ticket(PUT), get all ticket(GET) and get ticket by id(GET)

# And then import this rout in server.js

# to enter the ticket status dynamically we create its object in contants file and then use it.

# two middleware function

# 1. Validate the body of ticket when it is being created for the first time - POST (title, description, status-not validate)

# 2. Validate only the status of the ticket - PUT (OPEN, IN_PROGRESS, CLOSED, BLOCKED)

# So create the middleware verifyTicketRequestBody and import it in index.js(middleware)

# now use the middleware in routes

# Create the controller file for ticket => ticket.controller.js and use it in route file

# create the ticket route.js for the APIs

# now check all the APIs by postman

## Session 5
