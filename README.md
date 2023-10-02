===

## Cloning the project

* Pull the project repo
    - > `git clone https://OnojaMatthew@bitbucket.org/angularpay-mvp/search-service.git`
* Pull up your favorite console and change to this directory
* Install the projects dependencies 
    - > `yarn install`

## Set up Environment Variables
---


* To set development or test environment mode in the `.env` file
  - > `NODE_ENV=development` for development environment
  - > `NODE_ENV=test` for test environment
  - > `NODE_ENV=production` for production environment

Start the Server 
---
* To build the project
  - > `cd project_directory`
  - > `yarn run build`
* To continuously watch for changes 
  - > `yarn run watch`
* To run your app server 
  - > `yarn start`
* To test your app
  - > `yarn run test`

Start Test 
---
* Change `NODE_ENV` from development to test mode in the `.env` file
    - > `NODE_ENV=test`
* To build the project
    - > `yarn run build`
* To continuously watch for changes 
    - > `yarn run watch`
* To run test
    - > `yarn run test`
