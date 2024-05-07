# VitalTech: Diagnostic Web Application

Introducing HealthApp, an innovative web application designed to enhance the diagnostic accuracy for respiratory diseases like Tuberculosis and COVID-19 using advanced Machine Learning technology. Aimed at both patients and doctors, HealthApp streamlines the process of disease diagnosis, making healthcare more accessible and efficient.

## Features
1. **Client Application:** Interact with the user-friendly front-end to access and manage health data.
2. **Server Functionality:** Robust back-end server handles data processing and integration.
3. **ML Server:** Advanced machine learning server offers predictions and insights based on health data.
4. **Responsive Design:** Accessible across all devices, providing a seamless experience whether at home or on the go.

## Technologies
1. **Node.js:** The core runtime environment for running JavaScript on the server side.
2. **Express:** A web application framework for Node.js, used to build web applications and APIs.
3. **React.js:** Used for structuring, styling, and functionality of the public-facing pages.
4. **MongoDB:** A NoSQL database used to store application data.
5. **EJS:** A templating engine used in the views folder for generating HTML markup dynamically.
6. **Python:** Powers our machine learning server using libraries like TensorFlow and Flask.
7. **bcrypt:** A library to help you hash passwords securely.
8. **Git:** Version control system to handle the project's development across multiple stages and versions.
9. **npm:** Node package manager for handling project dependencies. 

## Structure Description
1. **Models:** Define the schema for data that the application handles.
2. **Views:** EJS templates for rendering the user interface.
3. **Controllers:** Business logic to connect models with views.
4. **Routes:** URL endpoints of the application which map to controller logic.
5. **Public:** Contains static files like images, CSS, and JavaScript.
6. **Middlewares:** Custom functions to process requests, like authentication checks.

## Setup
### _Prerequisites_
1. Node.js - Ensure you have Node.js installed on your machine. It can be downloaded from Node.js official website.
2. MongoDB - Make sure MongoDB is installed and running on your machine. Instructions can be found on the MongoDB official website.

### _Installation_
1. Clone the repository to your local machine.
2. There are 3 folders in this repository

    - client/
    - server/
    - ml_server/

    #### **_Client_**

    1. cd client
    2. Run npm i
    3. Run npm start

    #### **_Server_**

    1. cd server
    2. Run npm i
    3. Run node index.js

    #### **_ml_server_**

    1. cd ml_server
    2. pip install flask tensorflow numpy opencv-python flask-cors
    3. python/python3 vital_health_check.py

This will start 3 servers on your system

3. Open your browser and go to **_http://localhost:3000_** to view the application.

_Additional Notes_
1. Ensure MongoDB is running on your system to connect to the database successfully.
2. If you encounter any npm errors during installation, try clearing the npm cache with **_npm cache clean_** and reinstall the dependencies.

## Website Images

### 1. **Home Page:**
<kbd><img width="1512" alt="Screenshot 2024-05-07 at 6 42 28 PM" src="https://github.com/priyam-02/VitalTech_Diagnostic_Web_Application/assets/108848788/35527a93-ebd9-4d67-9932-4917fd17c8a0"></kbd>



### 2. **Login/Sign Up page [Patients & Doctors]:**
<kbd><img width="1512" alt="Screenshot 2024-05-07 at 6 42 36 PM" src="https://github.com/priyam-02/VitalTech_Diagnostic_Web_Application/assets/108848788/f7645142-985c-4575-af1a-efa8db5f8e21"></kbd>

<kbd><img width="1512" alt="Screenshot 2024-05-07 at 6 42 41 PM" src="https://github.com/priyam-02/VitalTech_Diagnostic_Web_Application/assets/108848788/8a951437-fc60-478f-a46d-e47a294041ee"></kbd>

<kbd><img width="1512" alt="Screenshot 2024-05-07 at 6 42 46 PM" src="https://github.com/priyam-02/VitalTech_Diagnostic_Web_Application/assets/108848788/3653e2e9-f496-41d0-ae96-de430d595dbd"></kbd>

<kbd><img width="1512" alt="Screenshot 2024-05-07 at 6 42 53 PM" src="https://github.com/priyam-02/VitalTech_Diagnostic_Web_Application/assets/108848788/7630b068-490d-4219-af0f-142f46370e13"></kbd>



### 3. **Dashboard:**
<kbd><img width="1512" alt="Screenshot 2024-05-07 at 6 43 05 PM" src="https://github.com/priyam-02/VitalTech_Diagnostic_Web_Application/assets/108848788/3647d704-6104-44b5-899c-481b92cb897b"></kbd>

<kbd><img width="1512" alt="Screenshot 2024-05-07 at 6 43 14 PM" src="https://github.com/priyam-02/VitalTech_Diagnostic_Web_Application/assets/108848788/3fc1db0c-af5a-4dac-843e-b5be93a05e2c"></kbd>

<kbd><img width="1512" alt="Screenshot 2024-05-07 at 6 43 22 PM" src="https://github.com/priyam-02/VitalTech_Diagnostic_Web_Application/assets/108848788/2a5a7da1-f457-476f-8c22-738ae7db2395"></kbd>
