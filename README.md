# Disaster Relief Website

## Project Description
This is a static website designed for disaster relief and crisis management. It provides information on recent disasters, a visual map with disaster markers, emergency reporting forms, contact options, and educational resources. The site aims to connect affected communities with relief efforts, volunteers, and necessary aid.

The website includes features like animated statistics counters, video updates on disasters, an interactive map (with embedded Google Maps and custom markers), and forms for emergency reporting and contact. It is built to be responsive and accessible on various devices.

## Features
- **Homepage Hero Section**: Background video with overlay text introducing the platform.
- **Recent Updates**: News section with videos and descriptions of ongoing disasters (e.g., Typhoon Yagi, Bangladesh Floods).
- **Interactive Map**: Embedded Google Maps with custom markers for earthquakes, tornadoes, and floods, showing disaster locations.
- **Statistics Cards**: Animated counters displaying relief metrics (e.g., people aided, food distributed, ongoing rescues).
- **Emergency Form**: A form for reporting disasters, including details like disaster type, location, injured count, and help needed. Integrated with EmailJS for email submissions.
- **Contact Form**: Modal-based contact form for general inquiries.
- **About Section**: Information about the organization, vision, and links to quizzes.
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices using Bootstrap.
- **Social Media Links**: Placeholder links for Facebook, Twitter, and Instagram (currently under maintenance alert).
- **Footer**: Copyright and social media icons.

## Technologies Used
- **HTML5**: Structure of the website.
- **CSS3**: Custom styling, including responsive design and animations.
- **JavaScript**: Interactive features like counter animations, modal handling, and EmailJS integration.
- **Bootstrap 4.5.2**: Framework for responsive layout and components.
- **Leaflet.js**: For map functionality (though primarily using embedded Google Maps in this version).
- **EmailJS**: For handling form submissions via email.
- **jQuery & Popper.js**: For Bootstrap components.
- **Assets**: Videos (MP4), images (PNG), and icons for markers and UI elements.

## Installation and Setup
Since this is a static website, no server-side setup is required. Follow these steps to run it locally:

1. **Clone or Download the Repository**:
   - Download the project files to your local machine.

2. **Open in Browser**:
   - Navigate to the project directory.
   - Open `index.html` in any modern web browser (e.g., Chrome, Firefox).

3. **Optional: Run on a Local Server** (for better compatibility with some features):
   - If you have Python installed, run: `python -m http.server 8000` in the project directory, then open `http://localhost:8000/index.html`.
   - Alternatively, use any static file server like Live Server in VS Code.

## Usage
- **Navigation**: Use the navbar to access Home, Contact Us, and About Us pages.
- **Emergency Reporting**: Fill out the emergency form at the bottom of the page. Ensure EmailJS is configured (see below).
- **Contact**: Click "Contact Us" to open the modal form.
- **Map Interaction**: View disaster markers on the embedded map.
- **Quizzes**: Access educational quizzes via the "Play Quiz" button in the About section.

## EmailJS Configuration
The emergency form uses EmailJS for sending emails. To enable this:
1. Sign up at [EmailJS](https://www.emailjs.com/).
2. Create a service, template, and get your public key.
3. In `script.js`, replace the placeholders:
   - `'YOUR_PUBLIC_KEY'` with your actual public key.
   - `'YOUR_SERVICE_ID'` with your service ID.
   - `'YOUR_TEMPLATE_ID'` with your template ID.
4. Test the form submission to ensure emails are sent correctly.

Example template for EmailJS (design editor):
```
Subject: Emergency Report - {{disaster-name}}

Dear Disaster Relief Team,

An emergency has been reported:

- Disaster Type: {{disaster-name}}
- Location: {{place}}
- People Injured: {{people-injured}}
- Help Needed: {{help}}
- Emergency Response: {{emergency-response}}
- Contact Number: {{contact}}
- Explanation: {{explanation}}

Please respond immediately.

Best regards,
Disaster Relief Website
```

## File Structure
```
disasterrelief-main/
├── index.html          # Main homepage
├── script.js           # JavaScript for interactivity
├── style.css           # Custom styles
├── TODO.md             # Development notes
├── about.html          # About page (linked)
├── login.html          # Login page (linked)
├── quiz1.html          # Quiz page (linked)
├── quiz2.html          # Additional quiz page
├── quiz3.html          # Additional quiz page
├── assets/             # Images, videos, and icons
│   ├── apple-touch-icon.png
│   ├── favicon.ico
│   ├── facebook.png
│   ├── twitter.png
│   ├── instagram.png
│   ├── emergency.png
│   ├── about.png
│   ├── vision.png
│   ├── earthquake-marker.png
│   ├── tornado-marker.png
│   ├── flood-marker.png
│   ├── contact-us.png
│   ├── bg-head-02.jpg
│   ├── homepage_casta.mp4
│   ├── desktop-typhoon-yagi-0912-5-imageslideshow-fade.mp4
│   └── rescue-mission-bangladesh-floods-loop-1-video.mp4
└── README.md           # This file
```

## Contributing
Contributions are welcome! If you'd like to improve the site:
1. Fork the repository.
2. Make changes and test locally.
3. Submit a pull request with a description of your changes.

## License
This project is open-source. Feel free to use and modify it for non-commercial purposes. Attribution is appreciated.

## Contact
For inquiries or support, contact us via the website's contact form or at disasterreliefgovt@gmail.com.

## Notes
- The map uses an embedded Google Maps iframe with a free API key (may have usage limits).
- Social media links currently show a maintenance alert; update `mainTain()` function in `script.js` for real links.
- Ensure videos load properly; they are hosted locally.
- The site is designed for accessibility, but further testing is recommended.
