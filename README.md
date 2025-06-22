# 🚀 Angular + Sprintboot CRUD App ![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)	![Spring](https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white)

#### A simple Employee Management CRUD application built using Angular for the frontend and Spring Boot for the backend.

![App image](https://github.com/anant0103/EMS-App-Angular---SpringBoot/blob/main/Images/Screenshot%20from%202025-06-22%2011-56-16.png)
![App image](https://github.com/anant0103/EMS-App-Angular---SpringBoot/blob/main/Images/Screenshot%20from%202025-06-22%2011-58-17.png)
![App image](https://github.com/anant0103/EMS-App-Angular---SpringBoot/blob/main/Images/Screenshot%20from%202025-06-22%2011-58-26.png)
![App image](https://github.com/anant0103/EMS-App-Angular---SpringBoot/blob/main/Images/Screenshot%20from%202025-06-22%2011-58-32.png)
![App image](https://github.com/anant0103/EMS-App-Angular---SpringBoot/blob/main/Images/Screenshot%20from%202025-06-22%2011-59-33.png)
![App image](https://github.com/anant0103/EMS-App-Angular---SpringBoot/blob/main/Images/Screenshot%20from%202025-06-22%2011-59-54.png)

## 📑 Table of Contents
* [Overview](#overview)
* [Technologies Used](#Technologies-Used)
* [Setup Instructions](#setup-instructions)
  * [Frontend Setup](#Frontend-Setup)
  * [Backend Setup](#Backend-Setup)
  * [Database Setup](#Database-Setup)

## 📌 Overview
This application allows users to:
* 👤 Add, update, view, and delete employee records.
* 🔗 Seamlessly integrate frontend and backend using REST APIs.
* 🧩 Demonstrate full-stack development using modern Angular and Spring Boot stacks.
	
## 🧰 Technologies Used
This project was developed with:
* Frontend: Angular (v13.1.0)
* Backend: Spring Boot (v2.5.8)
* Database: MySQL
* Build Tools: Maven, npm
	
## ⚙️ Setup Instructions
### 🔽 Clone the Repository
```
>> git clone https://github.com/anant0103/EMS-App-Angular---SpringBoot
>> cd EMS-App-Angular---SpringBoot
```
### 🖥️ Frontend Setup
1. Navigate to the frontend directory:
```
>> cd Angular-base
```
2. Install dependencies:
```
>> npm i --force
```
3. Start the React development server:
```
>> npm start
```

### 🗄️ Backend Setup
1. Navigate to the backend directory:
```
>> cd springboot-back
```
2. Build the project with Maven:
```
>> mvn clean install
```
3. Start the Spring Boot server:
```
>> mvn spring-boot:run
```

### 🗃️ Database Setup (MySQL)
1. Create a new database in MySQL:
```
>> create database Test;
```
2. Update the database connection details in the application.yml file:
```
spring.datasource.url=jdbc:mysql://localhost:3306/ems_react_springboot?useSSL=false
spring.datasource.username=USERNAME
spring.datasource.password=PASSWORD
```
3. Add the basic roles after Table Initialiaztion:
```
>> INSERT INTO roles(name) VALUES("ROLE_USER"), ("ROLE_ADMIN");
```
