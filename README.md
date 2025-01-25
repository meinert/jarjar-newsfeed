# Jar Jar Newsfeed - extended edition

BY Peter Fjordbak Poulsen

## Changelog

1. The project now uses the branching strategy described in the section [Branching strategy](#branching-strategy)
1. Updated dependencies to remove vulnerabilities (3 low, 5 moderate, 9 high) using npm and override typescript conflict
   1. Updated react to version 19
   1. Added dependencies and overrides needed due due to react-scripts not being maintained. Consider using e.g. next.js or vite instead
1. Renamed files to follow the naming convention for a typescript project and restructured the project folders
1.  Added localizationContext and utility components for formatting date and time

Welcome to this React project. Before you lies the bare basics to implement your own Jar Jar Newsfeed. Your app should:

 1. Allow the user to see all previous and new updates
 1. Allow the user to see comments to updates
 1. Allow the user to add updates
 1. Allow the user to add comments to updates
 1. Allow the user to add reactions (for example: like, dislike) to updates
 1. Allow the user to add reactions (for example: angry, wow) to comments

 
 
 ## Branching strategy

The project follows a standard Git Flow branching strategy. See [HERE](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow). Note that the git repository is not using the git flow extension, but vanilla git inspired by the git flow branching strategy.


 ### Remember
 - Build with reusability in mind
 - Be creative
 - Any code is better than no code
 - Working code is better than any code
 - You can use TypeScript and/or JavaScript
 - You are not restricted to libraries that are currently used in this project

 ## Where to start
 1. Fork this project
 2. Clone your fork
 3. Navigate to your working copy in your terminal
 4. `npm install`
 5. `npm start`
 6. Open `src/App.js` in your editor and go explore!

## Reference implementation
You can see a reference implementation on the [demo](https://github.com/uvdata/jarjar-newsfeed/tree/demo) branch. But
don't let this kill your own creativity or make any assumptions about its quality.



# Feature backlog

Updates list using cards
Comments that can expand
Option to add update, e.g. from a drawer using a modal
Option to add comment to update using a modal
Option to add reaction to update, e.g. using stars
Option to add reaction to comment, e.g. using stars
Custom hooks to load data
SQLLite DB for data
Filter updates by user
Filter updates by date
Responsive layout with two columns on large screens and one on smaller (https://mui.com/material-ui/react-grid2/)
"Login" page where the user is selected or just a simple option to change user

