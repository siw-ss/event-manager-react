# MERN Basics
### [YouTube Link](https://www.youtube.com/watch?v=I7EDAR2GRVo)
It comprises of `MongoDB`, `Express`, `React` and `Node`. <br><br>
Of which `React` is used for **front-end development** <br>
And `MongoDB`, `Express`, `Node` for **back-end development**

## Getting Started
### Follow these steps while starting the project

###### 1.  Create two Folders

    Server (This contains all the back-end part)
  
    Client (This contains all the front-end part)
  
###### 2.  Getting MongoDB Connection

    Open Connect and click on - Connect your Application
    
  ![image](https://user-images.githubusercontent.com/76637730/174515425-a6b7db82-5cd3-4cc3-9b27-ecad8e395983.png)
  
    Copy and Add your connection string into your application code
    
  ![image](https://user-images.githubusercontent.com/76637730/174516230-232c6be6-d00b-4067-b15e-1f9cf9c57784.png)

  
###### 3.  SERVER

    1. npm init -y
        this creates package.json file
        
    2. npm install express mongoose cors nodemon
        this installs these packages
        
    3. Create index.js file, this will contain all connection information
    
    4. Create user.js in models folder this will create or fetch user
    
    5. User thunderclient a visual studio extension for verifying connection right from visual studio
  
###### 4.  CLIENT

    1. npx create-react-app .
        Just like regular react project use this to create default react files
  
### Screenshots
    The login page
![image](/screenshots/LogIn.png)

    You must Register first
    PS: This app is open to add your security and authetication methods
![image](/screenshots/Register.png)

    Once logged in you'll access this Homepage
![image](/screenshots/Homepage.png)

    You can choose events to add temporarily to the list cart below
![image](/screenshots/Homepage-2.png)

    If you have admin acces (set from the database as one variable)
    You'll be redirected to the Dashboard instead of homepage where you can modify fields of existing events or delete them
![image](/screenshots/Dashboard.png)

    You can then add you own event
![image](/screenshots/AddEvent.png)
