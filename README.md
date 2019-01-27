# In The Kitchen

## Overview
- This is a full stack web application that allows users to quickly and easily find and share food recipes. A user can browse different food categories by simply clicking any one of the cuisines displayed on the home page. Once the cuisine is clicked, the page will load all the recipes within that category will be displayed. To personalize the experience the user can login to the app via their Google or Facebook account. When the user is logged in, they can post their own recipe and save any recipe to their favorites page. The user will also have access to edit their own recipes. Once again, the idea is to make it easy for anyone to share their homecooked recipes and find great recipes while expanding our minds to the creative culinary world. 

## Technical Approach
- The folder structure is setup as a MVC (model, view, controller). Our models folder contains tables for our database which include recipes, favorites, user authenticity, and sequelize index. Our view folder consists of all our handlebars pages, and our controller being sequelize and passport. 
- The UI is a smooth interface compelled with handlebars, bootstrap and css. 
- On the backend we have express serving up our html routes as well as our api routes and our authenticity routes. 
- In order to get user authenticity, we used the package passport. With passport we are able to allow the user to sign in via their Google or Facebook accounts and then obtain general user criteria such as auth id, first name, last name, and the individuals avatar. With this data we can create personalize favorites and user recipes. 
- Routes
    - Our API routes use a package multer which allows us to store the images uploaded from the recipe form. 
    - We have get calls to get all recipes, and get all users. Then we have post calls to post those recipes and users. We also have post calls to post the uploaded photo and post the favorite recipe.
    - We have a post call to update the users recipe, and delete calls if the user wishes to delete that specific recipe. 
    - Our html routes direct the user to the corresponding page. Some routes are triggered depending if the user is signed in or not. IF the user is not signed in and wishes to post a recipe, the server will redirect them to the sign in page. IF the user is already signed in, the home button will redirect them to their home page. 

## Tech Stack
 * HTML
 * CSS3
 * JavaScript
 * Bootstrap
 * Handlebars
 * MySQL
 * Sequelize
 * Passport
 * Multer
 * Express
 * Node
 * Travis
 * Eslint
 * Mocha 
 * Chai

## Links
https://inthekitchen-ucb.herokuapp.com/
