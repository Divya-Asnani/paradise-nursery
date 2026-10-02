# Paradise Nursery

A beautiful, functional React frontend application for a houseplant e-commerce store. 

## Features

- Landing page with background image and company description
- Product listing displaying multiple categories of houseplants
- Plant categories: Indoor Plants, Succulents, Air Purifying Plants
- Redux shopping cart with state management
- Add to cart functionality
- Increase/decrease quantity in cart
- Delete items from cart
- Dynamic cart count in the navbar
- Dynamic totals (items and cost) calculated via Redux
- Checkout placeholder functionality
- Responsive UI that works on desktop and mobile

## Tech Stack

- React
- Vite
- Redux Toolkit
- React Redux
- React Router (HashRouter for GitHub Pages)
- CSS
- GitHub Pages

## Project Structure

```
src/
├── components/
│   ├── AboutUs.jsx
│   ├── Navbar.jsx
│   ├── ProductList.jsx
│   ├── CartItem.jsx
│   └── ProductCard.jsx
├── data/
│   └── plants.js
├── redux/
│   ├── store.js
│   └── CartSlice.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Running Locally

To run the project locally, install dependencies and start the dev server:

```bash
npm install
npm run dev
```

## Build

To create a production build:

```bash
npm run build
```

## Deployment

This project is configured to be deployed to GitHub Pages.
Run the following command to deploy:

```bash
npm run deploy
```

## GitHub Repository

https://github.com/YOUR_USERNAME/paradise-nursery

## Required Grading Files

The following files are implemented according to requirements:
- AboutUs.jsx
- App.css
- App.jsx
- CartSlice.jsx
- ProductList.jsx
- CartItem.jsx
