# Sacred Games Netflix - Web Page Documentation

## Overview
This project is a **web-based UI** for showcasing episodes of the *Sacred Games* series, allowing users to browse episodes, toggle a navigation menu, and interact with UI elements like buttons and a carousel.

---

## **1. Design & UI Components**

### **Navigation Bar (`nav`)**
- Contains a **back button**, middle navigation links, and a **menu button**.
- Uses Bootstrap Icons for icons.
- The menu button toggles between `bi-list` (menu icon) and `bi-x-lg` (close icon).

### **Menu Section (`.menu`)**
- A dropdown menu with various navigation options.
- Appears when clicking the menu button and disappears on clicking again.

### **Episode Section (`.carousel`)**
- Uses a **horizontal scrolling carousel** to display episodes.
- Episodes are dynamically fetched from an **API** and displayed with **episode numbers** and **titles**.
- Left and right navigation buttons allow users to scroll through episodes.

### **Season Toggle (`.seasons`)**
- Two options: *Season 1* and *Season 2*.
- Uses a `::after` pseudo-element for an underline effect on the selected season.

---

## **2. Implementation**

### **HTML Structure (`index.html`)**
- Uses a `nav` for navigation.
- A `div.carousel-container` holds the dynamically loaded episodes.
- Two buttons (`prevBtn` and `nextBtn`) control episode scrolling.

### **CSS Styling (`index.css`)**
- **Background Image:** A full-screen background image is applied.
- **Carousel:**
  - Uses `overflow-x: auto` for horizontal scrolling.
  - `scrollbar-width: none;` to hide the scrollbar.
- **Menu Animation:**
  - Uses `display: none` by default.
  - On toggle, it changes to `display: flex`.
- **Episode Cards:**
  - Styled with `background-size: cover` for image fit.
  - Episode numbers are displayed using an `absolute` positioned `div`.

### **JavaScript (`index.js`)**
- **Menu Toggle Functionality:**
  - Uses `classList.toggle()` to show/hide the menu.
  - Changes the menu icon dynamically (`bi-list` ↔ `bi-x-lg`).
- **Fetching Episodes from API:**
  - Calls `https://repo-tech2edge.github.io/tasks/sample.json`.
  - Extracts `img`, `id` (episode number), and `title`.
  - Dynamically generates episode cards.
- **Carousel Scroll Behavior:**
  - `scrollBy({ left: ±200, behavior: "smooth" })` scrolls left/right.

---

## **3. API Usage**

### **API Endpoint:**
```
https://repo-tech2edge.github.io/tasks/sample.json
```

### **Response Structure:**
```json
{
  "episodes": [
    {
      "id": 1,
      "title": "Ashwatthama",
      "img": "https://image-url.com/ep1.jpg"
    },
    {
      "id": 2,
      "title": "Halahala",
      "img": "https://image-url.com/ep2.jpg"
    }
  ]
}
```

### **How the API is Used**
1. A `fetch()` request retrieves episode data.
2. Each episode object (`id`, `title`, `img`) is converted into an `episode-card`.
3. The **episode number is displayed dynamically** using `ep.id`.

---

## **4. Future Enhancements**
- Implement a **season filter** for switching between Season 1 & 2.
- Add a **watch trailer** button.
- Improve **responsive design** for better mobile compatibility.

---
### **Author:** [Your Name]
**Date:** March 2025
