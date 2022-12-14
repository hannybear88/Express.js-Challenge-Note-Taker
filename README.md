# Express.js-Challenge-Note-Taker
HW Challenge #11

## Description
For this challenge we had to create an application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.

The application’s front end has already been created and provided by UCSD Coding Bootcamp. It's our job to build the back end, connect the two, and then deploy the entire application to Heroku.

It was challenging to build the back-end and connect it to the front-end. Even though it was challenging, it was quite enjoyable. I like making notes to myself because it helps me with reminding myself what I have coming up, what I need to do for the day, week, any events that are coming up, and etc. Another challenge I ran into was figuring out how to deploy it onto Heroku. It had failed which was frustrating because it was working fine everywhere else. I finally was able to figure it out.

 I had successfully deployed the app on Heroku, the app has no errors in the console, and there are no errors in the app itself. 

## Table of Contents
* [Installation](#installation)
* [Getting Started and Bonus](#Getting-Started-and-Bonus)
* [UserStory](#User-Story)
* [How to Use This Project and Acceptance Criteria](#How-to-Use-This-Project-and-Acceptance-Criteria)
* [Demo](#Demo)
* [TechnologiesUsed](#Technologies-Used)
* [Support](#Support)
* [Credits](#Credits)
* [Contributors](#Contributors)


## Installation
`````
npm install
`````

## Getting Started and Bonus

**Getting Started**

The application should have a 
`db.json` file on the back end that will be used to store and retrieve notes using the `fs` module.

- The following HTML routes should be created:

    * `GET /notes` should return the `notes.html` file.

    * `GET *` should return the `index.html` file.

- The following API routes should be created:

    * `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.

    * `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into `npm` packages that could do this for you).

**Bonus**

You haven’t learned how to handle DELETE requests, but this application has that functionality in the front end. As a bonus, see if you can add the DELETE route to the application using the following guideline:

`DELETE /api/notes/:id` should receive a query parameter containing the id of a note to delete. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

## User Story
- AS A small business owner
- I WANT to be able to write and save notes
- SO THAT I can organize my thoughts and keep track of tasks I need to complete

## How to Use This Project and Acceptance Criteria
Click on the button below to be directed straight to the Heroku deployed application

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://expressjs-challenge-note-taker.herokuapp.com/)


- GIVEN a note-taking application
- WHEN I open the Note Taker
- THEN I am presented with a landing page with a link to a notes page
- WHEN I click on the link to the notes page
- THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
- WHEN I enter a new note title and the note’s text
- THEN a Save icon appears in the navigation at the top of the page
- WHEN I click on the Save icon
- THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
- WHEN I click on an existing note in the list in the left-hand column
- THEN that note appears in the right-hand column
- WHEN I click on the Write icon in the navigation at the top of the page
- THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column


## Demo 
Screenshots

**Landing Page Screenshot**
![Landing Page Screenshot](/public/assets/images/landing_page_screenshot.png)

**Note Taker Screenshots**

![Note Taker Screenshot 1](/public/assets/images/Note_Taker_Screenshot_1.png)

![Note Taker Screenshot 2](/public/assets/images/Note_Taker_Screenshot_2.png)

![Note Taker Screenshot 3](/public/assets/images/Note_Taker_Screenshot_3.png)

## Technologies Used

![Technologies](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Technologies](https://img.shields.io/badge/-OOP-red)
![Technologies](https://img.shields.io/badge/-JSON-blue)
![Technologies](https://img.shields.io/badge/-Node.js-339933?logo=Node.js&logoColor=white)
![Technologies](https://img.shields.io/badge/-npm-CB3837?logo=npm&logoColor=white)
![Technologies](https://img.shields.io/badge/-Express-blueviolet)
![Technologies](https://img.shields.io/badge/UUID-orange)
![Technologies](https://img.shields.io/badge/-Heroku-grey)


## Support 
If you need support or have any questions about the repo, please [open an issue](https://github.com/hannybear88/Node.js-Challenge-Professional-README-Generator/issues) or contact me via email at hannahkchung88@gmail.com. You can find more of my work on my GitHub, [hannybear88](https://github.com/hannybear88/).

## Credits
- UCSD Coding Bootcamp provided starter code
- Hannah Chung refactored the code

## Contributors
- UCSD Coding Bootcamp provided starter code
- Hannah Chung refactored the code