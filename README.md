# E-commerce Back End :credit_card:

This application is an e-commerce backend site. An Express.js API was configured for it to use Sequelize and then interact with a MySQL database.

## Steps to get started:
```
- npm i (+ dependencies)
- npm run seed
- node server.js
```
## User Story
_AS A manager at an internet retail company
* I WANT a back end for my e-commerce website that uses the latest technologies
* SO THAT my company can compete with other e-commerce companies_


## Application Acceptance Criteria:
```
* GIVEN a functional Express.js API
* WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
* THEN I am able to connect to a database using Sequelize
* WHEN I enter schema and seed commands
* THEN a development database is created and is seeded with test data
* WHEN I enter the command to invoke the application
* THEN my server is started and the Sequelize models are synced to the MySQL database
* WHEN I open API GET routes in Insomnia for categories, products, or tags
* THEN the data for each of these routes is displayed in a formatted JSON
* WHEN I test API POST, PUT, and DELETE routes in Insomnia
* THEN I am able to successfully create, update, and delete data in my database
```
## Mock Up:
