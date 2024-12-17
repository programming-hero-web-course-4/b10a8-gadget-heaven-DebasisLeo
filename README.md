

Tech Accessories E-Commerce Website
This is a React.js-based e-commerce website that allows users to explore, view, and purchase various tech gadgets and accessories. The project demonstrates React fundamental concepts and modern front-end development practices.

1.🚀 Live Website Link

  https://capable-substance.surge.sh/

2.📄 Requirement Document Link

https://github.com/programming-hero-web-course-4/b10a8-gadget-heaven-DebasisLeo


3.⚛️ React Fundamental Concepts Used
The project incorporates core React.js concepts for building scalable and maintainable components. Here’s a list of React fundamentals used:

React Functional Components:

Created reusable functional components like Homepage, Watches, ProductDetails, etc.
React Router:

Implemented react-router-dom for client-side routing, enabling navigation between categories, product details, and homepage.
Props and State Management:

Passed data via props for rendering components dynamically.
Used useState to manage local state (e.g., wishlist and cart functionality).
React Context API:

Implemented Context API to manage global state for Cart and Wishlist.
Hooks:

useState: For local state like wishlist tracking.
useLoaderData: To fetch and display loader-provided data dynamically.
useEffect: To handle side effects like data fetching when needed.

4.📊 Data Management
The website uses the following techniques for data handling and management:

1.React Context API:
Used to globally manage Cart and Wishlist functionalities across components.

2.React Router Loader:
Data for components (like product details) is loaded using the useLoaderData hook in combination with React Router's loaders.

3.Local Storage (Optional):
Cart or wishlist data can be optionally stored in localStorage to persist state between page reloads.



5.✨ Key Features of the Project


1.Dynamic Product Categories:
Users can browse different product categories such as Laptops, Phones, MacBooks, iPhones, Accessories, and Smart Watches.

2.Product Details Page:
Each product has a dedicated details page with information like price, description, rating, and specifications.

3.Add to Cart and Wishlist:

Users can add products to their Cart.
Wishlist functionality prevents duplicates and gives feedback using react-toastify.
4.Interactive UI/UX:

Smooth hover animations, responsive design, and interactive buttons enhance user experience.
Star rating display using react-rating-stars-component.
5.Client-Side Routing:
Navigation between pages and product categories is seamless using React Router.