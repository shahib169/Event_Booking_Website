# Event Booking Website

## Overview

This is a modern event booking web application built using **HTML**, **JavaScript**, **TailwindCSS**, and **Firebase** (Authentication, Firestore, and Hosting). It enables users to search for events, bookmark them, write reviews, and view social activity from friends. It also features AI-powered suggestions and real-time email notifications. Also, uses apis for a broadened variety of events, databases and notification systems for smooth running website.

---

## Folder Structure

Event_Booking_Website/
|-- .firebase/
    |-- hosting.cHVibGlj.cache          #hosting server
|-- assets/                             #Images or other assets
|--functions/
    |-- node_modules/
    |-- .gitignore
    |-- index.js                        #server side connection
    |-- package-lock.json
    |-- package.json
|-- public/
    |-- 404.html
    ├── index.html                      # Login page
    ├── register.html                   # User registration
    ├── events.html                     # Main event search and display page
    ├── bookmarks.html                  # User's bookmarked events
    ├── preferences.html                # User preferences (genre/location/email opt-in)
    ├── notifications.html              # In-app notification feed
    ├── friends.html                    # Friend activity and social features
    ├── admin.html                      # Admin dashboard
    ├── create-event.html               # Admin event creation
    ├── map.html                        # Map view for events
    ├── styles/                         # TailwindCSS and custom styles
        |-- main.css
    ├── scripts/                        # JS split from HTML files
├── firebase.js                         # Firebase initialisation and config (inline or modular)
├── README.md                           # This file


---

## Installation Instructions

### Requirements:
- A modern browser (Chrome, Firefox, Edge)
- A local server like **VSCode Live Server**, or host via Firebase/Netlify

### Steps:
1. Unzip the `Event_Booking_Website.zip` file
2. Open the folder in VSCode (or any IDE)
3. Launch `index.html` using Live Server or double-click to open in your browser
4. Log in or sign up using Firebase Authentication

> *Make sure internet connection is active to load Firebase and EmailJS via CDN*

⚙️ Setup Instructions

1. Firebase Configuration
You must:

Create a Firebase project at https://console.firebase.google.com/
Enable Authentication (Email/Password)
Enable Firestore Database
Create the users, events_custom, and reviews collections
Paste your Firebase credentials into each HTML file in the relevant <script type="module"> Firebase config block.

2. EmailJS Configuration (for email notifications)
Go to https://www.emailjs.com/
Set up:
Service ID: service_fgclw6n
Template ID: template_0nmiqqb
Public Key: l4gAsCrgjNW3SJ0PG
Your EmailJS script is already included in the project.

3. Hosting the Website
Option A: Firebase Hosting

npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy

Option B: Run Locally
Open index.html in your browser.
Make sure Firebase Firestore & Auth rules are set to allow access as per your security rules.

---

## Features to Test

### Admin Panel
- Need a admin login, after registering normally I can make the account into an admin account
- Only admins have access to the admin panel
- Can create events
- Edit events
- Delete Events
- Manage Users
- View existing events

### Events & Bookmarks
- Search by city, genre, and date
- Bookmark events and submit reviews
- Once clicking view will lead to payment screen
- See smart suggestions and AI-powered recommendations
- Can view bookmarked events in 'bookmarks.html'
- Can delete remove from bookmarks in 'bookmarks.html'

### Friends
- Search users by name/email
- Add and remove friends
- View their recent activity on the page

### Preferences
- Used to set preferences, unique to each individual
- Set preferences of events by location
- Set preferences of events by genre of event for example: music, sport etc..
- can toggle notification on or off

### Notifications
- Real-time feed on 'notifications.html'
- Notifications for:
  - Bookmarking events
  - Friends bookmarking events
  - Events happening within 2 days

### Map
- Shows real time location
- Shows events happening around you
- Can filter by radius

### Email Alerts
- Email notifications sent (via EmailJS) when:
  - A friend bookmarks an event
  - You bookmark an event
  - An event you've bookmarked is 2 days away
- You can toggle this feature in `preferences.html`

---

## Hosted Version

** Hosted at**: 'https://github.com/MdShahib/Event_Booking_Website'
'http://127.0.0.1:5500/public/index.html'

---

## Configuration Notes

### Firebase
- Firebase SDK is already integrated via CDN
- Firebase config can be found in each HTML file

### EmailJS
- Public key: `l4gAsCrgjNW3SJ0PG`
- Service ID: `service_fgclw6n`
- Template ID: `template_0nmiqqb`

*Do not expose private EmailJS keys or Firebase admin SDKs.*

---

## Support & Contact

For any issues setting up the project, contact me at shahib169@gmail.com or md.shahib@city.ac.uk or refer to Firebase and EmailJS documentation.

**Enjoy exploring and booking events with your friends!**