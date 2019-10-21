# Linas-Friend-Finder Application

## Description

*Linas Friend Finder* implements soul-mate matching based on the user's responses to a ten question survey. The user responds to questions with values from 1 (Strongly Agree) to 5 (Strongly Disagree). When the survey is submitted, an existing user record closest to the current user's responses is found and returned. The closest set of user responses is defined as the set with the lowest absolute difference for all ten questions combined.

*Linas Friend Finder* application is meant to simulate a simple dating app for people in North Jersey. The application is implemented using a [Node.js](https://nodejs.org/en/) and [Express](https://expressjs.com/) servers on the back end.

## Demo
	
*Friend Finder* is deployed to Heroku. Please check it out [here](https://linas-friend-finder.herokuapp.com/).

## Installation

To install the application follow the instructions below:
    cd development/
	git clone git@github.com:Linag94/Linas-Friend-Finder.git
	cd Linas-friend-finder/
	npm install
	
## Running Locally

To run the application locally and access it in your browser, first set the `PORT` environment variable to the value of your choice. An example is shown below.

	export PORT=8080
	
After the `PORT` environment variable has been set, run the Node.js application with the command below.

	node server.js
	
The application will now be running locally on `PORT`, in this case that is port 8080. You can then access it locally from your browser at the URL `localhost:PORT`, in this case `localhost:8080`.**