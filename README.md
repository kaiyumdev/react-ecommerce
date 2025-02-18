# E-commerce Website - React-Based

This project is a fully functional e-commerce website built using React.js. It incorporates a variety of features including product listings, shopping cart functionality, user authentication, and more.  It also includes a functional checkout modal.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [How to Use](#how-to-use)
- [Project Structure](#project-structure)
- [Complexity](#complexity)
- [Contributing](#contributing)
- [License](#license)

## Features

*   **Product Listings:**
    *   Browse a wide variety of products.
    *   Filter products by category.
    *   Search for specific products by name.
    *   View product details, including images, descriptions, and pricing.
*   **Shopping Cart:**
    *   Add products to the shopping cart.
    *   Update quantities of items in the cart.
    *   Remove items from the cart.
    *   View cart subtotal and order total.
*   **User Authentication:**
    *   User registration (Sign-up).
    *   User login.
    *   Private routes to protect cart and checkout pages.
*   **Checkout Process:**
    *   Secure checkout page.
    *   Modal to simulate payment processing (Visa and Paypal options).
    *   Order confirmation and cart clearing upon successful checkout.
*   **Blog:**
    *   Blog listing page.
    *   Single blog post view.
*   **About Us & Contact Pages:**
    *   Information about the company.
    *   Contact form (non-functional in this version).
*   **Responsive Design:**
    *   The website is designed to be responsive and accessible on a variety of devices.
*   **Other Features:**
    *   Homepage with banner, category showcase, and other promotional sections.
    *   Footer with copyright information.
    *   "Most Popular Post" and "Tags" widgets on blog and shop pages.
    *   Product rating component.
    *   Sponsor section with a slider.
    *   Pagination for product listings.

## Technologies Used

*   **React.js:**  A JavaScript library for building user interfaces.
*   **React Router:** For navigation and routing within the application.
*   **React DOM:**  For manipulating the DOM.
*   **Bootstrap:**  A CSS framework for responsive design.
*   **SASS:** A CSS framework for responsive design.
*   **Swiper:**  A library for creating touch sliders.
*   **IcoFont:**  An icon font library.
*   **JSON:** For storing product data.
*   **Firebase:** For authentication.
*   **React CountUp:**  For creating animated counters.

## Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd <project_directory>
    ```

2.  **Install the dependencies:**

    ```bash
    npm install
    ```

3.  **Firebase Setup:**

    *   Create a Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/).
    *   Enable Email/Password and Google authentication methods.
    *   Obtain your Firebase configuration object.

4.  **Configure Firebase:**

    *   Create a `firebase.config.js` file in the `src/firebase` directory.
    *   Paste your Firebase configuration object into this file:

    ```javascript
    // src/firebase/firebase.config.js
    import { initializeApp } from "firebase/app";

    const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_AUTH_DOMAIN",
      projectId: "YOUR_PROJECT_ID",
      storageBucket: "YOUR_STORAGE_BUCKET",
      messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
      appId: "YOUR_APP_ID"
    };

    const app = initializeApp(firebaseConfig);
    export default app;
    ```

    **Replace the placeholder values with your actual Firebase configuration.**

5.  **Start the development server:**

    ```bash
    npm start
    ```

    This will start the application in development mode. Open your browser and navigate to `http://localhost:3000` to view the website.

## How to Use

*   **Browsing Products:** Use the navigation menu to go to the "Shop" page.  You can filter product by category or search for them.
*   **Adding to Cart:** From the product listing or single product page, click the cart icon to add products to your cart.
*   **Viewing Cart:** Click on the cart icon in the navigation bar to view your shopping cart.  You can adjust quantities or remove items.
*   **Checkout:**  From the cart page, click "Proceed to Checkout".  This will open a modal where you can select a payment method (Visa or Paypal) and confirm your order.
*   **Authentication:** Use the "Login" and "Sign-up" links in the navigation bar to manage your account.

## Project Structure

