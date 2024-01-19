# Mini Message Board
![image](https://github.com/singhalex/mini-message-board/assets/115970252/dcd34661-b9e6-4023-8496-fc96cc3b276c)
A project from [The Odin Project](https://www.theodinproject.com)

## Live Demo
[Live Demo](https://top-mini-message-board.adaptable.app/)

## Built with
- Node.js - to handle the backend
- Express - as a backend framework
- ejs - for dynamic templates
- PicoCSS - for styling

## Objective
The goal of this project was to laern how to create a server that handles routes, receives POST data, and renders pages dynamiclly. 

## How it works
Using the express-gemerator tool, an express app was setup using ejs as the view model. A router was set up to handle the home page and the '/new' page. When the user navigates to these pages, the server serves the pages defined by the ejs templates.

The index page renders an array of comments as cards. When a new comment is added, the new card is rendered.

The '/new' page has a form that sends a POST request to the server which recieves the form data and adds it to the messages array to be rendered on the home page. On submit, the page is redirected to the home page.

## Development
How to install this project locally

1. Clone the repository:
```
 SSH - $ git clone git@github.com:singhalex/mini-message-board.git
```
2. Move to the cloned directory
```
  $ cd mini-message-board
```
3. Install the dependencies
```
  $ npm i
```
