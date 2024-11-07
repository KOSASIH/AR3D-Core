# Getting Started with AR3D-Core

Welcome to the AR3D-Core Getting Started guide! This document will help you set up your development environment and create your first augmented reality project using AR3D-Core.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 14 or higher)
- **npm** (Node package manager, comes with Node.js)
- **Git** (for version control)
- **Unity** or **Unreal Engine** (for AR integration)

## Installation

1. **Clone the Repository**

   Open your terminal and run the following command to clone the repository:

   ```bash
   1 git clone https://github.com/KOSASIH/AR3D-Core.git
   2 cd AR3D-Core
   ```

2. **Install Dependencies**

   Navigate to the project directory and install the required dependencies:

   ```bash
   1 npm install
   ```

3. **Run the Development Server**

   Start the development server to see your application in action:

   ```bash
   1 npm start
   ```

   Open your browser and go to http://localhost:3000 to view your application.

# Creating Your First AR Experience

1. **Set Up AR Environment**

   Create a new AR environment by navigating to the src/environments/ directory and creating a new file called MyEnvironment.js:

   ```javascript
   1 // src/environments/MyEnvironment.js
   2 
   3 import { EnvironmentManager } from './EnvironmentManager';
   4 
   5 const MyEnvironment = () => {
   6     const environment = new EnvironmentManager();
   7     environment.load('MyCustomEnvironment');
   8     return environment;
   9 };   
   10 
   11 export default MyEnvironment;
   ```

2. **Integrate AR in Your Application**

   Open src/App.js and import your new environment:

   ```javascript
   1 import React from 'react';
   2 import MyEnvironment from './environments/MyEnvironment';
   3 
   4 const App = () => {
   5     return (
   6         <div>
   7             <MyEnvironment />
   8         </div>
   9     );
   10 };
   11 
   12 export default App;
   ```

   View Your AR Experience

   Save your changes and refresh your browser. You should see your custom AR environment displayed.

# Next Steps
Now that you have your first AR experience set up, explore the following topics:

- **User Interaction:** Learn how to handle user gestures and voice commands.
- **Analytics:** Understand how to track user interactions and improve your application.
- **Advanced Features:** Check out the Advanced Features guide for more complex functionalities.
