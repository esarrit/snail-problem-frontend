# The Snail Problem

A snail is at the bottom of a well of H height and wants to climb to the top. The snail can climb U feet while the sun is up, but slides down D feet at night while sleeping. The snail has a fatigue factor of F %, which means that on each successive day the snail climbs F % * H = W feet less than it did the previous day. The distance lost to fatigue is always F % of the *first\* day's climbing distance. All four numbers must be between 1 and 100, inclusive.

Depending on the parameters of the problem, the snail will eventually either leave the well — Success — or slide back to the bottom of the well — Failure.

## About the App

This app aims to solve the snail problem. It provides the solution as a web application that takes in the parameters of the problem in a form and provides the solution as a message on the screen, which says if the snail succeeded or failed. It can be found [here](https://snail-view.herokuapp.com/).

### Architecture

This application follows the Model-View-Controller (MVC) architectural design pattern. As the frontend portion of the solution, this repository contains the View piece of the architecture. The Model and Controller (backend) can be found [here](https://github.com/esarrit/snail-problem).

### Frontend Tech Stack

This application (UI) was developed using the Vue javascript framework. Vue is a progressive javascript framework that introduces the notion of Single-File Components (SFCs). Vue Single-File Components (i.e., \*.vue files) is a special file format that allows us to encapsulate the template, logic, and styling of a Vue component in a single file. It works particularly well for small projects such as this one.

This application is hosted on [Heroku](https://www.heroku.com/).

#### Relevant Files for the View

- [src/components](https://github.com/esarrit/snail-problem-frontend/tree/main/src/components): contains a variety of Vue SFCs to encasuplate different template-logic-styling combinations that map to different sections of the app.
- [src/router](https://github.com/esarrit/snail-problem-frontend/tree/main/src/router): contains the index.js file, which contain the definitions of routes of the application
- [src/views](https://github.com/esarrit/snail-problem-frontend/tree/main/src/views): contains the "views" of the applications, which represents the different pages the application has. For example, there's the form "view" and the grid "view".
- App Entry Point: [App.vue](https://github.com/esarrit/snail-problem-frontend/blob/main/src/App.vue) is the main component of the application. All other components/routers/views come togther here in template and styling. This main component is initialized in [main.js](https://github.com/esarrit/snail-problem-frontend/blob/main/src/main.js).

## Running the App Locally

### Requirements

- [Node and NPM](https://nodejs.org/en/) for dependency and package management.

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

### Steps

1. Use `npm install` to download all project dependencies.
2. Start up the project by executing `npm run dev`.
3. Locate the localhost URL in the terminal output.
4. Go to any browser, paste the URL there and you should see the app!

## Roadmap

Going forward, this application would be improved with the implementation of the following:

1. Pagination for Grid view
2. Appropriate filtering for Grid view
3. Authentication
4. Graphical Representation of The Snail Problem
