# Introduction
 This is a simple **ActionsToComplete** tool and simply upload an image to complete an action listed


# Technologies used to build this tool
 JavaScript (ES6) with ReactJS (next.js), Tailwindcss framework(https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/0.7.2/tailwind.min.css), CSS3 and HTML5 are used with create-react-app module to build and develop this app. Also, useRedcer is used to manage states and avoid passing props between components; it helps reduce the complexity as we add more features to the app. json-server is used.

 # Tesitg
 cypress (end-to-end) and jest(TDD) are included; one sample test is added for each case.

# Follow the steps below to get started and run the app 

## step 1: clone or fork the project and install dependencies using yarn or npm inside your packge.json (root) folder:
      $ yarn or $ nmp i
## step 2: run the project 
    $ yarn start or $ npm start
## step 3 (optional): run the jest test suites
    $ yarn test or $ npm test
## step 3 (optional): run the cypress test suites
    $ yarn run cypress:open or $ npm run cypress:open

# Further improvements
To upload the image, there are many ways available: storing directly to the server hard disk(not easy for scaling); storing in the database(expensive); and storing on the cloud(initial setup takes time but the better way for serving large-scale images with minimum cost!). 

However, I have considered uploading the image to S3 by getting a pre-assigned URL and storing the URL directly in the database. 
It can be further refactored by following DRY! 
