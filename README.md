# Drexel Den - Student Resource Hub

## What is Drexel Den?

Drexel Den is a website built to help Drexel University students find important resources. It's like a one-stop shop where you can find scholarships, work-study jobs, apartments, textbooks, food recommendations, and contact information all in one place.

---

## What Can You Do Here?

### 1. **Find Scholarships**
- Browse available scholarships for students
- Filter scholarships by:
  - **Location** (by state, county, or city)
  - **Academic Level** (Freshman, Sophomore, etc.)
  - **Scholarship Type** (Merit-based, Need-based, etc.)
- Save scholarships you're interested in

### 2. **Browse Work-Study Jobs**
- View job postings for work-study positions on campus
- Filter jobs by:
  - **Education Level** (High School, Undergraduate, etc.)
  - **Campus Location**
  - **Department** (Library, IT, Admin, etc.)
  - **Position Type**
- Mark jobs to save them for later
- Message employers directly through the chat feature

### 3. **Learn About the Team**
- Meet the four students who built this project
- See their names, majors, emails, and fun facts
- Scroll through team members using the carousel

### 4. **Other Features** (coming soon)
- Apartment recommendations
- Textbook resources
- Food recommendations
- General job postings

---

## How to Use This Website

### **On Any Page:**
1. Use the **Navigation Bar** at the top to switch between sections
2. Click on **"Drexel Den"** logo to go back to home
3. Use the **Footer** at the bottom to see credits and copyright info

### **On Scholarships Page:**
1. Click on the **Location filter** to choose state, county, or city
2. Select your academic level and scholarship type from the dropdowns
3. Browse scholarship cards that show prize amount, description, and tags
4. Click the **heart icon** on any scholarship to save it

### **On Work-Study Page:**
1. Use the **left sidebar** to filter by education level, campus, department, and position
2. View job cards in the main area
3. Click **"Mark"** button to save a job to your marked posts (right sidebar)
4. Click **"Message"** to chat with the employer
5. Click **"Remove"** on marked posts to unsave a job

### **On Contact Page:**
1. Use the **arrow buttons** to browse through team members
2. Click on their email to contact them

---

## Files in This Project

```
Drexel Den/
│
├── drexelden/
│   ├── templates/
│   │   ├── Scholarships.html      (Scholarship search page)
│   │   ├── WorkStudy.html         (Job listing page)
│   │   ├── contact.html           (Team page)
│   │   └── ... (other pages)
│   │
│   └── static/
│       ├── styles/
│       │   ├── Scholarships.css   (Styling for scholarships)
│       │   ├── WorkStudy.css      (Styling for jobs)
│       │   ├── contact.css        (Styling for team page)
│       │   └── ... (other styles)
│       │
│       └── scripts/
│           ├── Scholarships.js    (Filter & search logic)
│           ├── WorkStudy.js       (Job filtering & marking)
│           ├── contact.js         (Team carousel)
│           └── ... (other scripts)
│
└── README.md (this file)
```

---

## Key Features Explained

### **Scholarships Page**
- **Location Modal**: Opens when you click "Location" to choose state, county, or city
- **Filter Boxes**: Help narrow down scholarships by type and level
- **Scholarship Cards**: Show scholarship info with a banner, prize amount, description, and tags
- **Real-time Filtering**: Results update as soon as you change filters

### **Work-Study Page**
- **Sidebar Filters**: Dropdowns to filter jobs by multiple criteria
- **Job Cards**: Display job title, department, education requirement, and description
- **Mark System**: Save jobs to the "Marked Posts" box on the right
- **Chat Modal**: Pop-up window to message employers (demo feature)

### **Contact Page**
- **Swiper Carousel**: Smooth scrolling through team members
- **Team Info**: Shows photo, name, major, email, and fun fact for each person
- **Navigation Arrows**: Click to move between team members

---

## Technologies Used

- **HTML5**: Page structure and layout
- **CSS3**: Styling and responsive design
- **JavaScript**: Interactivity, filtering, and dynamic content
- **Flask** (Backend): Serves the website and handles routes
- **FontAwesome Icons**: Icons for buttons and design

---

## Team Members

This project was created by:
- **Merril Biju**
- **Isha Patel**
- **Zarin Tasnim**
- **Rakia Binte Islam**

© 2025 Drexel Den. All Rights Reserved.

---

## How to Run This Website

1. Make sure you have Python and Flask installed
2. Navigate to the project folder in your terminal
3. Run: `python app.py` (or whatever your Flask file is called)
4. Open your web browser and go to: `http://localhost:5000`
5. Enjoy exploring Drexel Den!

---

## Future Improvements

- Add more scholarship listings and job postings
- Connect to a real database instead of sample data
- Add user accounts so students can save their preferences
- Improve search functionality
- Add apartment listing details
- Implement real messaging system between students and employers

---

## Questions?

For more information, visit our Contact page or email the team!
