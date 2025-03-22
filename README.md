# EasyBill Backend  

The backend service for EasyBill provides APIs for managing invoices, categories, and users, supporting seamless functionality for the billing application.

## Features  

- API endpoints for invoice creation and management.  
- Secure data storage with MongoDB.  
- PDF generation and email sharing for invoices.  

## Setup Instructions  

### Prerequisites  

- Node.js >= 16.x  
- MongoDB instance  
- npm or yarn  

### Installation  

1. Clone the repository:  
   ```bash  
   git clone git@github.com:mubasirvc/bill-backend.git 
   cd bill-backend
2.  Setup environment variables:
    Create a .env file in the root directory with the following:
    ```bash 
    PORT=5000
    MONGO_URI=<your-mongodb-url>

2. Install dependencies:  
   ```bash
   npm install

3. Start the development server:  
   ```bash
   npm start

 

