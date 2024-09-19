# Challenge Tracker App

## Overview

The **Challenge Tracker App** is a fully functional web application that allows users to create, update, and track various challenges. Each challenge can be assigned a title, description, start and end date, image, difficulty level, and status. This app makes use of React hooks like `useState`, `useEffect`, and `useContext` for state management, React Router for navigation, and features an intuitive, responsive UI built with Tailwind CSS. The application stores the challenges in a global context, making them easily accessible across different pages.

### Key Features:

- **Create, Update, and Track Challenges:** Users can create new challenges or update existing ones. Each challenge includes detailed information such as title, description, dates, difficulty level, and image.
- **Auto-Status Update:** The status of the challenge (Active, Upcoming, Completed) is automatically updated based on the start and end dates.
- **Responsive UI:** The application is fully responsive, built using Tailwind CSS for smooth, modern, and flexible styling.
- **Image Uploads:** Users can upload images to represent each challenge visually.
- **Global State Management:** Using React’s Context API, the application manages the challenges across different components efficiently.

---

## Page 1: **Home Page - Challenge List**

### Description:
The home page is the landing page of the application where all challenges are displayed in a list format. Users can view existing challenges, and each challenge is displayed with its title, start date, end date, and status. A button to create a new challenge is also provided.

### Components Used:

- **`HeroSection`:** Displays a prominent banner or heading with a background image and a call-to-action for creating new challenges.
- **`ChallengeList`:** This component renders the list of challenges by mapping through the challenge data stored in the context. Each challenge is clickable, leading to a detailed view.
- **`ChallengeCard`:** A child component of `ChallengeList` that displays individual challenge details like the title, dates, and status.

### Screenshot:
![Home Page](path_to_home_page_image)

---

## Page 2: **Challenge Detail Page**

### Description:
The Challenge Detail page displays all the information about a selected challenge, such as its description, start and end date, difficulty level, and status. Users can also view the uploaded image of the challenge and navigate to edit the challenge.

### Components Used:

- **`HeroSection`:** Displays the challenge title prominently at the top of the page, along with background and optional image of the challenge.
- **`OverviewSection`:** Provides a detailed view of the challenge, showing its description, difficulty level, and status.
- **`EditButton`:** A button that navigates the user to the Edit Challenge page to update the details of the challenge.

### Screenshot:
![Detail Page](path_to_detail_page_image)

---

## Page 3: **Challenge Form - Create/Edit Challenge**

### Description:
The form page allows users to either create a new challenge or edit an existing one. The form includes fields for the title, description, start date, end date, image upload, and difficulty level. When a challenge is being edited, the form is pre-populated with existing challenge data.

### Components Used:

- **`Form`:** The main form component handling both creating and editing challenges. It consists of several input fields managed by `useState` and a `handleSubmit` function to save the challenge data.
- **`useContext`:** To access the global challenge data and the `addOrUpdateChallenge` function.
- **`useParams`:** To get the challenge ID from the URL when editing an existing challenge.
- **`useNavigate`:** To redirect the user to the home page after successfully submitting the form.

### Core Functions:

- **`handleImageUpload`:** Handles image upload and sets the image preview.
- **`handleSubmit`:** Validates the form data and submits the new or updated challenge to the context.

### Screenshot:
![Form Page](path_to_form_page_image)

---

## Components Breakdown

### 1. **HeroSection**  
   The `HeroSection` component displays the main title of the app or the specific challenge. It accepts `isDetail` and `challengeData` props to customize the display for the challenge detail page. It is used across both the home and detail pages.

### 2. **OverviewSection**  
   This component provides detailed information about the challenge, including the description, difficulty level, and dates. It ensures the user has all the necessary information on the detail page.

### 3. **Form**  
   The `Form` component is the central form for creating and updating challenges. It contains controlled inputs for title, description, start date, end date, image upload, and difficulty selection. It is highly reusable and can be used for both new and existing challenges.

---

## Global State Management with `DataContext`

All the challenges and application data are stored using React's `Context API`. The `DataContext` component is responsible for managing this global state, including adding, updating, and fetching challenge data. It helps in sharing the data across multiple components seamlessly without prop drilling.

### Example usage in the `Form` component:

```javascript
const { data, addOrUpdateChallenge } = useContext(DataContext);
```

---

## Technologies Used:

- **React.js:** A JavaScript library for building user interfaces.
- **Tailwind CSS:** A utility-first CSS framework for styling the UI.
- **React Router:** For handling navigation between pages.
- **React Context API:** For managing global state across components.
- **JavaScript ES6:** Modern syntax and features for better coding practices.

---

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/challenge-tracker-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd challenge-tracker-app
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm start
   ```


---
### Critical Dependencies:

1. **`react`**: The core React library. Without this, the project will not have the foundation to build UI components.
2. **`react-dom`**: Needed for rendering React components to the DOM in a web application.
3. **`react-router-dom`**: Manages routing between different pages/components. Without it, navigation will not work in your project.
4. **`vite`**: A fast build tool for the project. It's crucial for development and bundling the app.
5. **`@vitejs/plugin-react`**: Enables Vite to work with React, enabling features like fast refresh and JSX transformation.
6. **`@mui/material`**: Necessary for using Material UI components. If the UI design relies on MUI, it won’t function without this.
7. **`tailwindcss`**: Essential for styling, if your project is using Tailwind's utility classes for layout and design.
8. **`sass`**: Required if your project uses SCSS for styling. 

### Critical DevDependencies:

1. **`eslint`**: Enforces code quality and ensures consistent coding standards. While the project might technically work without it, the code quality and structure could suffer.
2. **`postcss`**: Works with Tailwind CSS and is critical for processing CSS.
3. **`autoprefixer`**: Ensures CSS compatibility across different browsers.

---

## Conclusion

The **Challenge Tracker App** provides a simple yet powerful way to manage personal or group challenges. It is designed to be extensible and customizable, making it a great project to learn and implement full-stack application concepts with React, Context API, and modern CSS.

