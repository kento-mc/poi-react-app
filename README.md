# Project - Points of Interest (POI) ReactJS app.

Name: Kent Chadwick

## Overview.

This is the third iteration of an application that allows users to add and view various points of interest, as developed in the web development and enterprise web modules of the WIT HDIP course. The [first iteration](https://github.com/kento-mc/poi-app) was a server-rendered web app, built with hapi.js. The [second iteration] (https://github.com/kento-mc/poi-app) was an extension of the first, with a client SPA built with Aurelia, consuming an API built on top of the original hapi.js backend.

This iteration is a React web app, fully rebuilt and implementing some additioanl features, and consuming the same API on the hapi.js backend. It includes the following features:
 
 + User signup
 + User login/authentication
 + Persistent authentication in browser. Tab or window can be closed and re-openened with the user's session and data still available.
 + Interactive navbar navigation to a user dashboard, full list of points of interest, and settings page displaying the user's details.
 + The user dashboard includes three sections:
   + The POI view panel
     + Displays a list of POIs with a thumbnail, name, description, location, and contributor.
     + Another tab displays the same list but on an interactive map with pins in the locaion of each POI. The pins are clickable to display the POI name and location coordinates.
     + The POIs displyed on the list and map can be filtered for either name or description via text entry and also by a drowpdown selection of categories.
   + Add POI form
     + The form allows a user to create a new POI, including uploading a local image file. The added POI will appear immediately in the list of POIs.
   + User custom categories
     + The user can view their custom categories (certain categories are available by default) and add additional custom categories. The newly added categories will appear immediately in the dropdown list of available categories for selection in the add poi form.
+ The main POI list page has the same features as the POI view panel on the dashboard page, but includes all POIs from all contributors. In addition, the list/map is filterable by an additional metric - POI contributors.
+ The individual POI entries in the POI lists are clickable and direct the users to a display page for an individual POI. This page includes:
  + An enlarged thumbnail
  + All of the POI details
  + An interactive map showing the single POI location. Additional, smaller thumbnails of all POI images. Each smaller thumbnail is clickable and open the image full size on its own page. This page also includes the smaller thumbnail links of other images below.

## Setup requirements.

...... Insert a brief explanation (to a third party) of any non-standard setup steps necessary to run your app/client locally (after cloning the repo) ........

## API Data Model.

![][model]

#### User

```json
{
  "_id":"5f48db5e41b3780e64e9415d",
  "contributedPOIs":8,
  "firstName":"Homer",
  "lastName":"Simpson",
  "fullName":"Homer Simpson",
  "email":"homer@simpson.com",
  "password":"secret",
  "isAdmin":false,
  "customCategories":2,
  "__v":0
}
```

#### Point of Interest

```json
{
  "_id":"5f48db5f41b3780e64e9416c",
  "name":"Springfield Gorge",
  "description":"Jump it!",
  "location": {
    "lat":2.3243,
    "lon":35.4343
  },
  "categories": [
    "5f48db5f41b3780e64e94167"
  ],
  "imageURL": [
    "http://res.cloudinary.com/dwgak0rbs/image/upload/v1583703565/i8f4phhwngskyfnk45ym.png",
    "http://res.cloudinary.com/dwgak0rbs/image/upload/v1583703588/jvqbrydf3qxpen6hshzg.jpg"
  ],
  "contributor":"5f48db5e41b3780e64e9415f",
  "thumbnailURL":"http://res.cloudinary.com/dwgak0rbs/image/upload/v1583703565/i8f4phhwngskyfnk45ym.png",
  "__v":0
}
 ```
 
#### Category

```json
{
  "_id":"5f48db5f41b3780e64e94164",
  "name":"Dining",
  "description":"",
  "contributor":"5f48db5e41b3780e64e94163",
  "__v":0
}
```


......[For projects that expanded the Movies Fan app] Specify the additional TMDB endpoints used and show sample responses, in JSON .........

## App Design.

### Component catalogue.

....... Insert a screenshot from the Storybook UI showing your components' stories. [For projects that expanded the Movies app, hi-light stories relating to new/modified components - see example screenshot below] .......

![][stories]

### UI Design.

...... Insert screenshots of the app's views (see example below) with appropriate captions (For extension to the Movies Fan App, only show the new/modified views) ........

![][view]
>Shows detailed information on a movie. Clicking the 'Show Reviews' button will display extracts from critic reviews.

### Routing.

...... Insert a list of the routes supported by your app and state the associated view. If relevant, specify which of the routes require authentication, i.e. protected/private. For projects that expanded the Movies Fan app, only new routes should be listed ......... 

+ /blogs - displays all published blogs.
+ /blogs/:id (private) - detail view of a particular blog.
+ /blogs/:id/comments (private) - detail view of a particular blog and its comments.
+ etc.
+ etc.

## React feature set.

..... Insert a bullet-point list of the React features used in your project, including one source code file references for each - see examples below ......

+ useState and useEffect hooks - src/components/fileA.js
+ useContext hook - src/components/fileb.js
+ Extended Link - src/components/fileA.js
+ Programmatic navigation - src/pages/fileC.js
+ etc
+ etc
+ etc

## Independent learning.

. . . . . Briefly state the technologies/techniques used in your project codebase that were not covered in the lectures/labs. Provide source code filename references to support your assertions and include source material references (articles/blogs) ......... 


[model]: ./React POI API data model.png
[view]: ./view.png
[stories]: ./storybook.png
