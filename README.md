# NGO Donations

## Description

A MERN stack application, relying on Custom Java SpringBoot REST API in which local events are posted by Admins and people accross social media can donate to.

## Project Structure

### Backend

The backend REST service was created in Java SpringBoot. We utilized MongoDB to store our data, as we both seem to prefer working with data displayed in JSON rather than traditional SQL tables.

### Frontend

For our frontend we decided to use React. However, to utilize social media logins for users we needed to incorporate an Express Node Server as well running cocurrently with our React application. To achieve this we set up the React App to run on Port 3000 and the Node Server checking authentication to be on Port 4000. By adding Mongo, Node and Express to our React App we have essentially created a MERN Full Stack Application.

## Project Plan

We wanted it to be so that our application was accessible to as many people as possible. When thinking about this we realize that in real life people are not so willing to put in sensitive information about themselves on simply any website or application. Thus, we decided to design our application to use OAuth 2.0's Passport JS library and utilize multiple social media logins. The idea behind this is that we cover all the major social media platforms (Twitter, Google, Instagram, Facebook, LinkedIn, GitHub etc.) so that the application is available to essentially everyone who has some form of social media. This eliminates the need for users to literally register to our application as the authentication is all covered by the major social media company. In the case our application is attacked by hackers, all they would get is the already public user id for the social media network, but no passwords or other sensitive info would be exposed. This is what the majority of start-up companies / online based companies do so that their liablity is at a minimmum and also so that their customers feel more secure, and their application is available to the maximum number of users.

## Upcoming Updates:

- Add functionality to all other Social Media platforms. (Only Twitter implemented right now)

## Key Technologies Used

- Java 8
- SpringBoot 2.2
- Spring REST Service
- MongoDB
- Mongoose
- JSON Web Token
- React JS
- Redux
- Express Server
- Node
- Passport JS
- OAuth 2.0

## Contributors

- Rishabh Goel
- Mostafa Beais
