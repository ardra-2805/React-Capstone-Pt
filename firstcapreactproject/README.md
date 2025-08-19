

Little Lemon


📖 Project Overview
Little Lemon is a responsive, React-based frontend application for a modern restaurant homepage.
It features smooth navigation, interactive forms, and polished UI design with CSS animations and modal dialogues.

The site includes:

Home: Featuring specials, ratings, and an "About" section.
About, Menu, Order Online, Login: Placeholder pages marked "Under Construction".
Reservations: A functional reservation form with validation, animations, and a success modal.
🛠️ Technologies
React (with functional components & hooks)
React Router DOM for client-side routing
CSS (flexbox, animations, hover effects)
📂 File Structure
src/ components/ Nav.jsx Header.jsx Specials.jsx Ratings.jsx About.jsx ReservationForm.jsx UnderConstruction.jsx Footer.jsx App.jsx styles.css main.jsx

🧩 Component Breakdown
App.jsx
...

Defines the app’s route structure using React Router:

/ — Home (Header, Specials, Ratings, About)

/about, /menu, /order-online, /login — Under Construction pages

/reservations — Reservation Form

Nav.jsx

Navigation bar with:

Logo (left-side)

Links (Home, About, Menu, Reservations, Order Online, Login)

Styled with flex layout and hover effects

Header, Specials, About

Static content showcasing the restaurant’s introduction, special dishes, and backstory.

Ratings.jsx

Displays user testimonials:

Accepts name, rating, and image fields

Renders avatar if image provided; otherwise, shows placeholder

Stars, user name, and sample text displayed per review

ReservationForm.jsx

Fully interactive form:

Fields: Date, Time, Guests, Occasion

Validation logic (required fields, minimum guest count)

Animations (fade-in, scale-in effects)

Success modal overlays upon submission

UnderConstruction.jsx

Simple placeholder with “Under Construction” message for incomplete pages.

Footer.jsx

Three-column layout:

Left: Logo + title

Middle: Sitemap (links using for navigation)

Right: Contact info

Styled similarly to navbar (flex, hover effects)

🎨 CSS Highlights

Layout: Flex containers for Navbar & Footer, grid for Ratings section

Animations: @keyframes for fade-in and scale-in effects

Interactivity: Hover states for links and buttons (color change, scaling)

Form Styling: Clean inputs, error messaging, modal pop-up design
