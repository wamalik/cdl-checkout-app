# CDL Checkout System

This Application is build to demonstrate the simple Checkout system

## How to run 

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Design Decission/Improvements

- This app is built using SOLID principles and main foucs is Separation of conerns
- Application is developed using multiple components such as cart, product, item keeping SRP and DRY priniciples in mind
- Heavy business logic processes such checkout and total calculation are built independently under processes
- To demo the flow, product catalog is built using static array of products
- To enhance, application can be integrated with backend microservice to fetch the actual product catalog from data store 
- As further improvements, multiple styling and UI/UX changes would be required 


