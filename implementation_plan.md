# Implementation Plan: Edu Globe Lanka Consultancy Website

## Goal
Create a premium, expertly animated educational consultancy website using React and Framer Motion.
Design inspiration: IDP Australia (Clean, Corporate, Blue/White/Orange).
Content source: Edu Globe Lanka (Instagram/Search).

## Tech Stack
-   **Framework**: React (Vite)
-   **Styling**: Vanilla CSS (CSS Modules approach or global CSS with variables)
-   **Icons**: Lucide React
-   **Animation**: Framer Motion
-   **Routing**: React Router DOM (if multipage, but likely Single Page Landing for now)

## Design System
-   **Colors**:
    -   `--primary`: #003366 (Deep Navy Blue - Professional)
    -   `--secondary`: #00A3E0 (Cyan/Teal - Modern IDP vibe)
    -   `--accent`: #FFA500 (Gold/Orange - Warmth/Success)
    -   `--bg-light`: #F8FAFC (Off-white)
    -   `--text-dark`: #1E293B
    -   --text-light: #64748B
-   **Typography**: Inter (Google Font)

## Components
1.  **Navbar**:
    -   Logo (Text: EduGlobe)
    -   Links: Home, Destinations, Services, Contact
    -   CTA: "Free Consultation"
2.  **Hero Section**:
    -   Background Image: University/Happy Students.
    -   Headline: "Empowering Your Educational Journey."
    -   Subhead: "Your gateway to studying in Australia, UK, Canada, and beyond."
    -   Animated entry.
3.  **Destinations**:
    -   Cards for Australia, UK, Canada, NZ, etc.
4.  **Services**:
    -   Visa Assistance, Course Selection, University Application.
5.  **Why Choose Us**:
    -   Trust badges, years of experience.
6.  **Contact/Footer**:
    -   Phone: +94 77 818 1819
    -   Address: World Trade Center, Colombo.

## detailed Steps
1.  Setup project & Install dependencies (`framer-motion`, `lucide-react`).
2.  Configure `index.css` with variables and reset.
3.  Create components.
4.  Assemble in `App.jsx`.
5.  Review & Polish.
