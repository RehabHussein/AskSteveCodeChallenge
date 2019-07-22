# AskSteveCodeChallenge

**#To install and run :**

`yarn install` 

then 

`expo start`

**#General Comments:**

1. All constants are handled in the EnviromentVariables.js file, including github client id, secret id and api endpoints

2. Authentication is handled on github side, so what is implemented here is directing the user to enter his username and password on github, this is
better in terms of security and for end users better experience (users don't feel safe entering their credentials in any app so allowing
them to get authenticated in github is safer)


**#Todo list:**

1. Improve the UI

2. Add confirmation message before logging out

3. Scroll up to refresh the data in the commit list view

4. Make a server side code to handle the authentication token exchange with the authentication code for security reasons, since github api authentication don't support implicit authentication

5. Match the string of the repository title with :owner/:contributor

**#Covered test cases**

1. Login authentication

2. Entering a valid repository with 15+ commits (page size is determined with 15 per page to insure good performance)

3. Entering invalid repository

4. Entering a valid repository with less than 15 commit

5. Pagination using infinite scrolling

6. Logging out from commits list view screen

7. Logging out from 'Enter Repository' screen



![](ezgif.com-gif-maker.gif)
