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

![](ezgif.com-gif-maker.gif)
