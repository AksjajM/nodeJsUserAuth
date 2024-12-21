# nodeJsUserAuth
NodeJs user authentication

In this application user authentication is added.
It's possible to create a user, retrieve all users and login as a user.

The password will be saved with an encryption using the bcrypt library.
Instructions to run and use the application with e.g. Postman:
* Create an image based on the dockerfile:
**docker build -t [username]:nodeJsUserAuthDemo .**
* Run the image:
  **docker run -d -p 3000:3000 [username]:nodeJsUserAuthDemo**
* Use Postman to send requests.
* For possible endpoints:
 https://documenter.getpostman.com/view/31213462/2sAYJ3F2Sz

Good luck!