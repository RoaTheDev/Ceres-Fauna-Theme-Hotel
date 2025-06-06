# Fauna Hotel

## Overview

Fauna Hotel is a web application designed for a nature-inspired hotel, themed around the serene and vibrant aesthetics
of Ceres Fauna. The project provides an immersive booking and browsing experience for a hotel that celebrates nature and
tranquility. Built with modern web technologies, it features a responsive UI and interactive components powered by
Shadcn.

## Group members
This project was developed by the following team members:

    1. Roern Chamreun(Roa) : Team Lead
    2. Dong Siengly  
    3. To Moniyuth 
    4. Chinh Vathanak

## Features
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Admin Dashboard**: Allow for Hotel Management
- **Booking System**: Allows users to select dates and book rooms with an intuitive interface.
- **Nature-Themed UI**: Incorporates Ceres Fauna-inspired visuals with lush greenery and calming aesthetics.
- **Interactive Components**: Utilizes Shadcn for accessible and customizable UI elements, built on top of Radix UI
  primitives (Dialog, Label, Popover, Select, Slot, Tabs).
- **Notifications and Icons**: Enhanced with Sonner for toast notifications and Lucide React for icons.

## Tech Stack

- **Frontend**: React, React Router, TypeScript
- **Styling**: Tailwind CSS, Tailwind Merge, TW Animate CSS
- **UI Components**: Shadcn (built on Radix UI primitives: Dialog, Label, Popover, Select, Slot, Tabs), Lucide React (
  icons), Sonner (notifications)
- **Date Handling**: date-fns, React Day Picker
- **Build Tools**: Vite, TypeScript, ESLint
- **Others**: Class Variance Authority, Clsx

## Prerequisites

Ensure you have the following installed:

- Node.js (v18 or higher)
- npm (v9 or higher) or yarn/pnpm
- Git

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/<your-username>/fauna-hotel.git
   cd fauna-hotel
    ```

2. **Install Dependencies**
   ```bash
   npm install 
   ```
   This will install all required dependencies listed in the package.json.
3. **Run The Development Server**
    ```bash
   npm run dev
   ```
   This starts the Vite development server. Open http://localhost:5173 in your browser to view the app.
4. **Build for Production**
    ```
   npm run build
   ```
   This compiles the TypeScript code and builds the app for production.
5. **Preview the Build**
    ```
   npm run preview
   ```
   This serves the production build locally for testing.

## Project Structure

- `src/:` Contains the source code, including React components, Shadcn components, styles, and assets.
- `public/`: Static assets like images and favicon.
- `dist/`: Output directory for production builds.