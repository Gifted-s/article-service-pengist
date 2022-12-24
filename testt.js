// {
//     "swagger": "2.0",
//     "info": {
//         "description": "<p style='font-weight:bold'>This is the official API documentation for the Revon Farms Website. It describes all the api endpoints and how they can be used from the  front-end of the website</p> <h5 style='font-weight:bold'>TECHNOLOGY USED</h5> <ul><li>Language - Node.js</li><li>Framework - Express.js</li><li>Version Control - Git and Git Hub</li><li>Database - MongoDB</li><li>ORM(Object Relational Model) - Mongoose</li><li>Testing tool-Jest</li><li>Integration tool - Travis CI</li> <li>Convention - eslint</li> <li>Documentation - Swagger</li></ul>",
//         "version": "1.0.0",
//         "title": "Official API Documentation for the Revon Farms Website"
//     },
//     "host": "localhost:4000",
//     "basePath": "/revonapi/v1",
//     "tags": [
//         {
//             "name": "user",
//             "description": "Operations about user"
//         },
//         {
//             "name": "product",
//             "description": "Endpoint related to product"        
//         }

//     ],
//     "schemes": [
//         "http",
//         "https"
        
//     ],
//     "paths": {
//         "/signup": {
//             "post": {
//                 "tags": [
//                     "user"
//                 ],
//                 "summary": "Register a user",
//                 "description": "This endpoint would hanlde the signup of a user",
//                 "consumes": [
//                     "application/json"
//                 ],
//                 "produces": [
//                     "application/json",
//                     "application/xml"
//                 ],
//                 "parameters": [
//                     {
//                         "in": "body",
//                         "name": "body",
//                         "description": "Sign up a user",
//                         "required": true,
//                         "schema": {
//                             "$ref": "#/definitions/User"
//                         }
//                     }
//                 ],
//                 "responses": {
//                     "default": {
//                         "description": "successful operation"
//                     }
//                 }
//             }
//         },
//         "/signin": {
//             "post": {
//                 "tags": [
//                     "user"
//                 ],
//                 "summary": "Signin a user",
//                 "description": "This endpoint would handle the signing in of a user ",
//                 "consumes": [
//                     "application/json"
//                 ],
//                 "produces": [
//                     "application/json",
//                     "application/xml"
//                 ],
//                 "parameters": [
//                     {
//                         "in": "body",
//                         "name": "body",
//                         "description": "This is waht the user needs to supply",
//                         "required": true,
//                         "schema": {
//                             "$ref": "#/definitions/Signin"
//                         }
//                     }
//                 ],
//                 "responses": {
//                     "default": {
//                         "description": "successful operation"
//                     }
//                 }
//             }
//         },
//         "/forgot": {
//             "post": {
//                 "tags": [
//                     "user"
//                 ],
//                 "summary": "Handles forgotten password",
//                 "description": "This endpoint would handle request for user who forgot their password",
//                 "consumes": [
//                     "application/json"
//                 ],
//                 "produces": [
//                     "application/json",
//                     "application/xml"
//                 ],
//                 "parameters": [
//                     {
//                         "in": "body",
//                         "name": "body",
//                         "description": "This is whatt the user needs to supply",
//                         "required": true,
//                         "schema": {
//                             "$ref": "#/definitions/Forgot"
//                         }
//                     }
//                 ],
//                 "responses": {
//                     "default": {
//                         "description": "successful operation"
//                     }
//                 }
//             }
//         },
//         "/edit": {
//             "post": {
//                 "tags": [
//                     "user"
//                 ],
//                 "summary": "Handles editing a user details",
//                 "description": "This endpoint would handle request for editing a users profile",
//                 "consumes": [
//                     "application/json"
//                 ],
//                 "produces": [
//                     "application/json",
//                     "application/xml"
//                 ],
//                 "parameters": [
//                     {
//                         "in": "body",
//                         "name": "body",
//                         "description": "This is what the client needs to supply",
//                         "required": true,
//                         "schema": {
//                             "$ref": "#/definitions/Edit"
//                         }
//                     }
//                 ],
//                 "responses": {
//                     "default": {
//                         "description": "successful operation"
//                     }
//                 }
//             }
//         },
//         "/validate-email/{id}": {
//             "get": {
//                 "tags": [
//                     "user"
//                 ],
//                 "summary": "validate an email",
//                 "description": "This endpoint would validata user's email account",
//                 "produces": [
//                     "application/json",
//                     "application/xml"
//                 ],
//                 "parameters": [
//                     {
//                         "name": "id",
//                         "in": "path",
//                         "description": "id of the user with the email",
//                         "required": true,
//                         "type": "string"
//                     }
//                 ],
//                 "responses": {
//                     "200": {
//                         "description": "successful operation"
//                     },
//                     "400": {
//                         "description": "Invalid ID supplied"
//                     },
//                     "404": {
//                         "description": "Pet not found"
//                     }
//                 }
//             }
//         },
//         "/getUser/{id}": {
//             "get": {
//                 "tags": [
//                     "user"
//                 ],
//                 "summary": "Get a user detail",
//                 "description": "Find a user based on the id passed from client",
//                 "produces": [
//                     "application/json",
//                     "application/xml"
//                 ],
//                 "parameters": [
//                     {
//                         "name": "id",
//                         "in": "path",
//                         "description": "id of the user with the email",
//                         "required": true,
//                         "type": "string"
//                     }
//                 ],
//                 "responses": {
//                     "200": {
//                         "description": "successful operation",
//                         "schema": {
//                             "$ref": "#/definitions/User"
//                         }
//                     },
//                     "400": {
//                         "description": "Invalid ID supplied"
//                     },
//                     "404": {
//                         "description": "Pet not found"
//                     }
//                 }
//             }
//         },
//         "/getProducts": {
//             "get": {
//                 "tags": [
//                     "product"
//                 ],
//                 "summary": "returns products",
//                 "description": "Returns a map of status codes to quantities",
//                 "produces": [
//                     "application/json"
//                 ],
//                 "parameters": [],
//                 "responses": {
//                     "200": {
//                         "description": "successful operation"
//                     }
//                 },
//                 "security": [
//                     {
//                         "api_key": []
//                     }
//                 ]
//             }
//         },
//         "/pet": {
//             "post": {
//                 "tags": [
//                     "pet"
//                 ],
//                 "summary": "Add a new pet to the store",
//                 "description": "",
//                 "operationId": "addPet",
//                 "consumes": [
//                     "application/json",
//                     "application/xml"
//                 ],
//                 "produces": [
//                     "application/json",
//                     "application/xml"
//                 ],
//                 "parameters": [
//                     {
//                         "in": "body",
//                         "name": "body",
//                         "description": "Pet object that needs to be added to the store",
//                         "required": true,
//                         "schema": {
//                             "$ref": "#/definitions/Pet"
//                         }
//                     }
//                 ],
//                 "responses": {
//                     "405": {
//                         "description": "Invalid input"
//                     }
//                 },
//                 "security": [
//                     {
//                         "petstore_auth": [
//                             "write:pets",
//                             "read:pets"
//                         ]
//                     }
//                 ]
//             },
//             "put": {
//                 "tags": [
//                     "pet"
//                 ],
//                 "summary": "Update an existing pet",
//                 "description": "",
//                 "operationId": "updatePet",
//                 "consumes": [
//                     "application/json",
//                     "application/xml"
//                 ],
//                 "produces": [
//                     "application/json",
//                     "application/xml"
//                 ],
//                 "parameters": [
//                     {
//                         "in": "body",
//                         "name": "body",
//                         "description": "Pet object that needs to be added to the store",
//                         "required": true,
//                         "schema": {
//                             "$ref": "#/definitions/Pet"
//                         }
//                     }
//                 ],
//                 "responses": {
//                     "400": {
//                         "description": "Invalid ID supplied"
//                     },
//                     "404": {
//                         "description": "Pet not found"
//                     },
//                     "405": {
//                         "description": "Validation exception"
//                     }
//                 },
//                 "security": [
//                     {
//                         "petstore_auth": [
//                             "write:pets",
//                             "read:pets"
//                         ]
//                     }
//                 ]
//             }
//         },
//         "/pet/findByStatus": {
//             "get": {
//                 "tags": [
//                     "pet"
//                 ],
//                 "summary": "Finds Pets by status",
//                 "description": "Multiple status values can be provided with comma separated strings",
//                 "operationId": "findPetsByStatus",
//                 "produces": [
//                     "application/json",
//                     "application/xml"
//                 ],
//                 "parameters": [
//                     {
//                         "name": "status",
//                         "in": "query",
//                         "description": "Status values that need to be considered for filter",
//                         "required": true,
//                         "type": "array",
//                         "items": {
//                             "type": "string",
//                             "enum": [
//                                 "available",
//                                 "pending",
//                                 "sold"
//                             ],
//                             "default": "available"
//                         },
//                         "collectionFormat": "multi"
//                     }
//                 ],
//                 "responses": {
//                     "200": {
//                         "description": "successful operation",
//                         "schema": {
//                             "type": "array",
//                             "items": {
//                                 "$ref": "#/definitions/Pet"
//                             }
//                         }
//                     },
//                     "400": {
//                         "description": "Invalid status value"
//                     }
//                 },
//                 "security": [
//                     {
//                         "petstore_auth": [
//                             "write:pets",
//                             "read:pets"
//                         ]
//                     }
//                 ]
//             }
//         },
//         "/pet/findByTags": {
//             "get": {
//                 "tags": [
//                     "pet"
//                 ],
//                 "summary": "Finds Pets by tags",
//                 "description": "Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.",
//                 "operationId": "findPetsByTags",
//                 "produces": [
//                     "application/json",
//                     "application/xml"
//                 ],
//                 "parameters": [
//                     {
//                         "name": "tags",
//                         "in": "query",
//                         "description": "Tags to filter by",
//                         "required": true,
//                         "type": "array",
//                         "items": {
//                             "type": "string"
//                         },
//                         "collectionFormat": "multi"
//                     }
//                 ],
//                 "responses": {
//                     "200": {
//                         "description": "successful operation",
//                         "schema": {
//                             "type": "array",
//                             "items": {
//                                 "$ref": "#/definitions/Pet"
//                             }
//                         }
//                     },
//                     "400": {
//                         "description": "Invalid tag value"
//                     }
//                 },
//                 "security": [
//                     {
//                         "petstore_auth": [
//                             "write:pets",
//                             "read:pets"
//                         ]
//                     }
//                 ],
//                 "deprecated": true
//             }
//         },
//         "/pet/{petId}": {
//             "get": {
//                 "tags": [
//                     "pet"
//                 ],
//                 "summary": "Find pet by ID",
//                 "description": "Returns a single pet",
//                 "operationId": "getPetById",
//                 "produces": [
//                     "application/json",
//                     "application/xml"
//                 ],
//                 "parameters": [
//                     {
//                         "name": "petId",
//                         "in": "path",
//                         "description": "ID of pet to return",
//                         "required": true,
//                         "type": "integer",
//                         "format": "int64"
//                     }
//                 ],
//                 "responses": {
//                     "200": {
//                         "description": "successful operation",
//                         "schema": {
//                             "$ref": "#/definitions/Pet"
//                         }
//                     },
//                     "400": {
//                         "description": "Invalid ID supplied"
//                     },
//                     "404": {
//                         "description": "Pet not found"
//                     }
//                 },
//                 "security": [
//                     {
//                         "api_key": []
//                     }
//                 ]
//             },
//             "post": {
//                 "tags": [
//                     "pet"
//                 ],
//                 "summary": "Updates a pet in the store with form data",
//                 "description": "",
//                 "operationId": "updatePetWithForm",
//                 "consumes": [
//                     "application/x-www-form-urlencoded"
//                 ],
//                 "produces": [
//                     "application/json",
//                     "application/xml"
//                 ],
//                 "parameters": [
//                     {
//                         "name": "petId",
//                         "in": "path",
//                         "description": "ID of pet that needs to be updated",
//                         "required": true,
//                         "type": "integer",
//                         "format": "int64"
//                     },
//                     {
//                         "name": "name",
//                         "in": "formData",
//                         "description": "Updated name of the pet",
//                         "required": false,
//                         "type": "string"
//                     },
//                     {
//                         "name": "status",
//                         "in": "formData",
//                         "description": "Updated status of the pet",
//                         "required": false,
//                         "type": "string"
//                     }
//                 ],
//                 "responses": {
//                     "405": {
//                         "description": "Invalid input"
//                     }
//                 },
//                 "security": [
//                     {
//                         "petstore_auth": [
//                             "write:pets",
//                             "read:pets"
//                         ]
//                     }
//                 ]
//             },
//             "delete": {
//                 "tags": [
//                     "pet"
//                 ],
//                 "summary": "Deletes a pet",
//                 "description": "",
//                 "operationId": "deletePet",
//                 "produces": [
//                     "application/json",
//                     "application/xml"
//                 ],
//                 "parameters": [
//                     {
//                         "name": "api_key",
//                         "in": "header",
//                         "required": false,
//                         "type": "string"
//                     },
//                     {
//                         "name": "petId",
//                         "in": "path",
//                         "description": "Pet id to delete",
//                         "required": true,
//                         "type": "integer",
//                         "format": "int64"
//                     }
//                 ],
//                 "responses": {
//                     "400": {
//                         "description": "Invalid ID supplied"
//                     },
//                     "404": {
//                         "description": "Pet not found"
//                     }
//                 },
//                 "security": [
//                     {
//                         "petstore_auth": [
//                             "write:pets",
//                             "read:pets"
//                         ]
//                     }
//                 ]
//             }
//         },
//         "/store/order": {
//             "post": {
//                 "tags": [
//                     "store"
//                 ],
//                 "summary": "Place an order for a pet",
//                 "description": "",
//                 "operationId": "placeOrder",
//                 "consumes": [
//                     "application/json"
//                 ],
//                 "produces": [
//                     "application/json",
//                     "application/xml"
//                 ],
//                 "parameters": [
//                     {
//                         "in": "body",
//                         "name": "body",
//                         "description": "order placed for purchasing the pet",
//                         "required": true,
//                         "schema": {
//                             "$ref": "#/definitions/Order"
//                         }
//                     }
//                 ],
//                 "responses": {
//                     "200": {
//                         "description": "successful operation",
//                         "schema": {
//                             "$ref": "#/definitions/Order"
//                         }
//                     },
//                     "400": {
//                         "description": "Invalid Order"
//                     }
//                 }
//             }
//         },
//         "/store/order/{orderId}": {
//             "get": {
//                 "tags": [
//                     "store"
//                 ],
//                 "summary": "Find purchase order by ID",
//                 "description": "For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions",
//                 "operationId": "getOrderById",
//                 "produces": [
//                     "application/json",
//                     "application/xml"
//                 ],
//                 "parameters": [
//                     {
//                         "name": "orderId",
//                         "in": "path",
//                         "description": "ID of pet that needs to be fetched",
//                         "required": true,
//                         "type": "integer",
//                         "maximum": 10,
//                         "minimum": 1,
//                         "format": "int64"
//                     }
//                 ],
//                 "responses": {
//                     "200": {
//                         "description": "successful operation",
//                         "schema": {
//                             "$ref": "#/definitions/Order"
//                         }
//                     },
//                     "400": {
//                         "description": "Invalid ID supplied"
//                     },
//                     "404": {
//                         "description": "Order not found"
//                     }
//                 }
//             },
//             "delete": {
//                 "tags": [
//                     "store"
//                 ],
//                 "summary": "Delete purchase order by ID",
//                 "description": "For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors",
//                 "operationId": "deleteOrder",
//                 "produces": [
//                     "application/json",
//                     "application/xml"
//                 ],
//                 "parameters": [
//                     {
//                         "name": "orderId",
//                         "in": "path",
//                         "description": "ID of the order that needs to be deleted",
//                         "required": true,
//                         "type": "integer",
//                         "minimum": 1,
//                         "format": "int64"
//                     }
//                 ],
//                 "responses": {
//                     "400": {
//                         "description": "Invalid ID supplied"
//                     },
//                     "404": {
//                         "description": "Order not found"
//                     }
//                 }
//             }
//         },

//         "/user/createWithArray": {
//             "post": {
//                 "tags": [
//                     "user"
//                 ],
//                 "summary": "Creates list of users with given input array",
//                 "description": "",
//                 "operationId": "createUsersWithArrayInput",
//                 "consumes": [
//                     "application/json"
//                 ],
//                 "produces": [
//                     "application/json",
//                     "application/xml"
//                 ],
//                 "parameters": [
//                     {
//                         "in": "body",
//                         "name": "body",
//                         "description": "List of user object",
//                         "required": true,
//                         "schema": {
//                             "type": "array",
//                             "items": {
//                                 "$ref": "#/definitions/User"
//                             }
//                         }
//                     }
//                 ],
//                 "responses": {
//                     "default": {
//                         "description": "successful operation"
//                     }
//                 }
//             }
//         },
//         "/user/createWithList": {
//             "post": {
//                 "tags": [
//                     "user"
//                 ],
//                 "summary": "Creates list of users with given input array",
//                 "description": "",
//                 "operationId": "createUsersWithListInput",
//                 "consumes": [
//                     "application/json"
//                 ],
//                 "produces": [
//                     "application/json",
//                     "application/xml"
//                 ],
//                 "parameters": [
//                     {
//                         "in": "body",
//                         "name": "body",
//                         "description": "List of user object",
//                         "required": true,
//                         "schema": {
//                             "type": "array",
//                             "items": {
//                                 "$ref": "#/definitions/User"
//                             }
//                         }
//                     }
//                 ],
//                 "responses": {
//                     "default": {
//                         "description": "successful operation"
//                     }
//                 }
//             }
//         },
//         "/user/{username}": {
//             "get": {
//                 "tags": [
//                     "user"
//                 ],
//                 "summary": "Get user by user name",
//                 "description": "",
//                 "operationId": "getUserByName",
//                 "produces": [
//                     "application/json",
//                     "application/xml"
//                 ],
//                 "parameters": [
//                     {
//                         "name": "username",
//                         "in": "path",
//                         "description": "The name that needs to be fetched. Use user1 for testing. ",
//                         "required": true,
//                         "type": "string"
//                     }
//                 ],
//                 "responses": {
//                     "200": {
//                         "description": "successful operation",
//                         "schema": {
//                             "$ref": "#/definitions/User"
//                         }
//                     },
//                     "400": {
//                         "description": "Invalid username supplied"
//                     },
//                     "404": {
//                         "description": "User not found"
//                     }
//                 }
//             },
//             "put": {
//                 "tags": [
//                     "user"
//                 ],
//                 "summary": "Updated user",
//                 "description": "This can only be done by the logged in user.",
//                 "operationId": "updateUser",
//                 "consumes": [
//                     "application/json"
//                 ],
//                 "produces": [
//                     "application/json",
//                     "application/xml"
//                 ],
//                 "parameters": [
//                     {
//                         "name": "username",
//                         "in": "path",
//                         "description": "name that need to be updated",
//                         "required": true,
//                         "type": "string"
//                     },
//                     {
//                         "in": "body",
//                         "name": "body",
//                         "description": "Updated user object",
//                         "required": true,
//                         "schema": {
//                             "$ref": "#/definitions/User"
//                         }
//                     }
//                 ],
//                 "responses": {
//                     "400": {
//                         "description": "Invalid user supplied"
//                     },
//                     "404": {
//                         "description": "User not found"
//                     }
//                 }
//             },
//             "delete": {
//                 "tags": [
//                     "user"
//                 ],
//                 "summary": "Delete user",
//                 "description": "This can only be done by the logged in user.",
//                 "operationId": "deleteUser",
//                 "produces": [
//                     "application/json",
//                     "application/xml"
//                 ],
//                 "parameters": [
//                     {
//                         "name": "username",
//                         "in": "path",
//                         "description": "The name that needs to be deleted",
//                         "required": true,
//                         "type": "string"
//                     }
//                 ],
//                 "responses": {
//                     "400": {
//                         "description": "Invalid username supplied"
//                     },
//                     "404": {
//                         "description": "User not found"
//                     }
//                 }
//             }
//         },
//         "/user/login": {
//             "get": {
//                 "tags": [
//                     "user"
//                 ],
//                 "summary": "Logs user into the system",
//                 "description": "",
//                 "operationId": "loginUser",
//                 "produces": [
//                     "application/json",
//                     "application/xml"
//                 ],
//                 "parameters": [
//                     {
//                         "name": "username",
//                         "in": "query",
//                         "description": "The user name for login",
//                         "required": true,
//                         "type": "string"
//                     },
//                     {
//                         "name": "password",
//                         "in": "query",
//                         "description": "The password for login in clear text",
//                         "required": true,
//                         "type": "string"
//                     }
//                 ],
//                 "responses": {
//                     "200": {
//                         "description": "successful operation",
//                         "headers": {
//                             "X-Expires-After": {
//                                 "type": "string",
//                                 "format": "date-time",
//                                 "description": "date in UTC when token expires"
//                             },
//                             "X-Rate-Limit": {
//                                 "type": "integer",
//                                 "format": "int32",
//                                 "description": "calls per hour allowed by the user"
//                             }
//                         },
//                         "schema": {
//                             "type": "string"
//                         }
//                     },
//                     "400": {
//                         "description": "Invalid username/password supplied"
//                     }
//                 }
//             }
//         },
//         "/user/logout": {
//             "get": {
//                 "tags": [
//                     "user"
//                 ],
//                 "summary": "Logs out current logged in user session",
//                 "description": "",
//                 "operationId": "logoutUser",
//                 "produces": [
//                     "application/json",
//                     "application/xml"
//                 ],
//                 "parameters": [],
//                 "responses": {
//                     "default": {
//                         "description": "successful operation"
//                     }
//                 }
//             }
//         }
        
//     },
//     "securityDefinitions": {
//         "api_key": {
//             "type": "apiKey",
//             "name": "api_key",
//             "in": "header"
//         },
//         "petstore_auth": {
//             "type": "oauth2",
//             "authorizationUrl": "https://petstore.swagger.io/oauth/authorize",
//             "flow": "implicit",
//             "scopes": {
//                 "read:pets": "read your pets",
//                 "write:pets": "modify pets in your account"
//             }
//         }
//     },
//     "definitions": {
//         "ApiResponse": {
//             "type": "object",
//             "properties": {
//                 "code": {
//                     "type": "integer",
//                     "format": "int32"
//                 },
//                 "type": {
//                     "type": "string"
//                 },
//                 "message": {
//                     "type": "string"
//                 }
//             }
//         },
//         "Category": {
//             "type": "object",
//             "properties": {
//                 "id": {
//                     "type": "integer",
//                     "format": "int64"
//                 },
//                 "name": {
//                     "type": "string"
//                 }
//             },
//             "xml": {
//                 "name": "Category"
//             }
//         },
//         "Pet": {
//             "type": "object",
//             "required": [
//                 "name",
//                 "photoUrls"
//             ],
//             "properties": {
//                 "id": {
//                     "type": "integer",
//                     "format": "int64"
//                 },
//                 "category": {
//                     "$ref": "#/definitions/Category"
//                 },
//                 "name": {
//                     "type": "string",
//                     "example": "doggie"
//                 },
//                 "photoUrls": {
//                     "type": "array",
//                     "xml": {
//                         "wrapped": true
//                     },
//                     "items": {
//                         "type": "string",
//                         "xml": {
//                             "name": "photoUrl"
//                         }
//                     }
//                 },
//                 "tags": {
//                     "type": "array",
//                     "xml": {
//                         "wrapped": true
//                     },
//                     "items": {
//                         "xml": {
//                             "name": "tag"
//                         },
//                         "$ref": "#/definitions/Tag"
//                     }
//                 },
//                 "status": {
//                     "type": "string",
//                     "description": "pet status in the store",
//                     "enum": [
//                         "available",
//                         "pending",
//                         "sold"
//                     ]
//                 }
//             },
//             "xml": {
//                 "name": "Pet"
//             }
//         },
//         "Tag": {
//             "type": "object",
//             "properties": {
//                 "id": {
//                     "type": "integer",
//                     "format": "int64"
//                 },
//                 "name": {
//                     "type": "string"
//                 }
//             },
//             "xml": {
//                 "name": "Tag"
//             }
//         },
//         "Order": {
//             "type": "object",
//             "properties": {
//                 "id": {
//                     "type": "string"
//                 },

//                 "userId": {
//                     "type": "string"
//                 },
//                 "orderObject": {
//                     "type": "object"
//                 },
//                 "totalQuantity": {
//                     "type": "integer",
//                     "format": "int32"
//                 },
//                 "totalPrice": {
//                     "type": "integer",
//                     "format": "int32"
//                 },
//                 "shipDate": {
//                     "type": "string",
//                     "format": "date-time"
//                 },
//                 "status": {
//                     "type": "string",
//                     "description": "Order Status",
//                     "enum": [
//                         "placed",
//                         "approved",
//                         "delivered"
//                     ]
//                 },
//                 "complete": {
//                     "type": "boolean"
//                 }
//             },
//             "xml": {
//                 "name": "Order"
//             }
//         },
//         "Signin":{
//             "type": "object",
//             "properties": {
//                 "email": {
//                     "type": "string"
//                 },
//                 "password": {
//                     "type": "string"
//                 }
//             },
//             "xml": {
//                 "name": "Signin"
//             }
//         },

//         "User": {
//             "type": "object",
//             "properties": {
//                 "name": {
//                     "type": "string"
//                 },
//                 "email": {
//                     "type": "string"
//                 },
//                 "_id":{
//                     "type":"string"
//                 },
//                 "record":{
//                     "type": "array",
//                     "xml": {
//                         "wrapped": true
//                     },
//                     "items": {
//                         "$ref":"#/definitions/Order",
//                         "xml": {
//                             "name": "order"
//                         }
//                     }
//                 },
//                 "validMail":{
//                     "type":"boolean"
//                 },
//                 "password": {
//                     "type": "string"
//                 },
//                 "phone": {
//                     "type": "string"
//                 }
//             },
//             "xml": {
//                 "name": "User"
//             }
         
//         },
//         "Forgot": {
//             "type": "object",
//             "properties": {
//                 "email": {
//                     "type": "string"
//                 }
//             },
//             "xml": {
//                 "name": "Forgot"
//             }
         
//         },
//         "Edit": {
//             "type": "object",
//             "properties": {
//                 "email": {
//                     "type": "string"
//                 },
//                 "name": {
//                     "type": "string"
//                 },
//                 "address": {
//                     "type": "string"
//                 },
//                 "phone": {
//                     "type": "string"
//                 },
//                 "oldPassword": {
//                     "type": "string"
//                 },
//                 "newPassword": {
//                     "type": "string"
//                 }
//             },
//             "xml": {
//                 "name": "Edit"
//             }
         
//         } 
//     }
// }