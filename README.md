# Medical Emergency One-Click Alert System

## 🚨 Overview

A web-based emergency alert system that allows users to trigger emergency alerts with a single click, automatically sharing their location with emergency services and pre-configured emergency contacts.

**Live Website:** [https://chandsharmap.github.io](https://chandsharmap.github.io)

---

## ✨ Features

### 🔴 Emergency Alert System
- **One-Click Emergency Button** - Large, prominent red button for immediate activation
- **Keyboard Shortcut** - Press `E` key to trigger emergency alert
- **GPS Location Detection** - Automatically captures your precise GPS coordinates
- **Alert Sound** - Generates emergency alert tone with multiple beeps
- **Browser Notifications** - Sends system notifications when alert is triggered

### 👤 Emergency Profile Setup
- Save personal information (name, phone number)
- Add up to 2 emergency contacts
- Store medical conditions and allergies
- Auto-load saved information on website visit

### 📱 Data Management
- **Local Storage** - All data saved securely in your browser
- **Emergency Logging** - Records all emergency activations with timestamps
- **Location Tracking** - Stores GPS coordinates with accuracy data
- **Profile Display** - Shows saved emergency information

### 🛡️ Security & Performance
- **XSS Protection** - Sanitized HTML output prevents attacks
- **Responsive Design** - Works on mobile, tablet, and desktop
- **Offline Capable** - Fully functional without internet
- **Local Data Storage** - No data sent to external servers

---

## 🎯 How to Use

### Step 1: Visit Your Emergency System
Open your browser and go to: **[https://chandsharmap.github.io](https://chandsharmap.github.io)**

### Step 2: Setup Your Profile
1. Fill in your **Name**
2. Enter your **Phone Number**
3. Add **Emergency Contact 1** (required)
4. Add **Emergency Contact 2** (optional)
5. List any **Medical Conditions/Allergies**
6. Click **"Save Information"**

### Step 3: Trigger Emergency (When Needed)
Choose one of two methods:

**Method 1:** Click the big red **"EMERGENCY ALERT"** button

**Method 2:** Press the **`E`** key on your keyboard

### What Happens When Alert Is Triggered:
✅ Your GPS location is detected  
✅ Alert sound plays  
✅ Emergency modal shows location & timestamp  
✅ Emergency contacts are stored  
✅ Browser notification is sent  
✅ All data is logged locally  

---

## 📁 File Structure

```
chandsharmap.github.io/
├── index.html       # Main website structure
├── styles.css       # Styling and animations
├── script.js        # Functionality and interactions
└── README.md        # Documentation
```

### index.html
- Complete HTML structure with semantic markup
- Emergency alert button and form
- Modal for emergency confirmation
- Responsive layout

### styles.css
- Professional gradient design
- Animated emergency button with pulse effect
- Responsive grid layouts
- Mobile-friendly styling
- Modal animations

### script.js
- Emergency alert trigger logic
- GPS location detection
- Alert sound generation
- Form data handling
- Local storage management
- Browser notifications

---

## 🔧 Technical Details

### Technologies Used
- **HTML5** - Semantic markup
- **CSS3** - Animations and responsive design
- **Vanilla JavaScript** - No dependencies
- **Geolocation API** - GPS detection
- **Web Audio API** - Alert sound generation
- **Local Storage API** - Data persistence
- **Notifications API** - Browser alerts

### Browser Compatibility
- Chrome/Chromium ✅
- Firefox ✅
- Safari ✅
- Edge ✅
- Mobile browsers ✅

### Permissions Required
- **Location Access** - For GPS coordinates (requested on alert)
- **Notification Permission** - For browser notifications (requested on load)

---

## 📊 Data Storage

### Stored Locally (Browser)
```javascript
{
  name: "Your Name",
  phone: "Your Phone Number",
  contact1: "Emergency Contact 1",
  contact2: "Emergency Contact 2",
  medical: "Medical conditions/allergies"
}
```

### Emergency Logs
```javascript
{
  timestamp: "ISO 8601 timestamp",
  name: "Your Name",
  phone: "Your Phone",
  location: {
    latitude: 40.7128,
    longitude: -74.0060,
    accuracy: 15
  },
  emergencyContacts: ["Contact 1", "Contact 2"],
  medicalInfo: "Medical details",
  googleMapsLink: "https://maps.google.com/?q=..."
}
```

---

## 🚀 Getting Started

1. **Visit the website:** [https://chandsharmap.github.io](https://chandsharmap.github.io)
2. **Allow permissions** when prompted (location, notifications)
3. **Fill out your profile** with emergency information
4. **Click "Save Information"** to store your data
5. **Keep the link bookmarked** for quick access in emergencies

---

## ⚠️ Important Notes

### For Real Emergencies
⚠️ **Always call 911 or your local emergency number first!**

This system is a supplementary tool. In actual emergencies:
1. Call emergency services immediately (911 in USA)
2. Use this system as an additional notification method
3. Ensure your location services are enabled

### Best Practices
✓ Keep your information up to date  
✓ Use current emergency contact numbers  
✓ Ensure location services are enabled  
✓ Enable browser notifications  
✓ Test the system regularly  
✓ Share the link with trusted contacts  

---

## 🔒 Privacy & Security

- All data is stored **locally on your device**
- No data is sent to external servers
- No tracking or analytics
- No cookies used
- Your privacy is protected
- Data can be cleared by clearing browser data

---

## 🛠️ Customization

To modify or deploy your own version:

1. Fork the repository
2. Edit the files as needed
3. Push changes to your GitHub Pages repository
4. Website automatically updates

### Edit Alert Sound
Modify the frequency in `script.js` (line 98):
```javascript
oscillator.frequency.value = 1000; // Change frequency in Hz
```

### Change Button Color
Modify the CSS in `styles.css`:
```css
background: linear-gradient(135deg, #e74c3c, #c0392b); /* Change colors */
```

---

## 📞 Support & Feedback

For issues or improvements:
1. Open an issue on GitHub
2. Check existing documentation
3. Test in different browsers
4. Verify location permissions are enabled

---

## 📝 License

MIT License - Feel free to use and modify

---

## 👨‍💻 Developer

**Chandrakant Sharma**  
GitHub: [@chandsharmap](https://github.com/chandsharmap)

---

## 🎯 Project Information

- **Project Name:** Medical Emergency One-Click Alert System
- **Repository:** [chandsharmap/chandsharmap.github.io](https://github.com/chandsharmap/chandsharmap.github.io)
- **Live URL:** [https://chandsharmap.github.io](https://chandsharmap.github.io)
- **Language:** JavaScript, HTML, CSS
- **Version:** 1.0.0

---

## ✅ Checklist for First Use

- [ ] Visit [https://chandsharmap.github.io](https://chandsharmap.github.io)
- [ ] Allow location permissions
- [ ] Allow notification permissions
- [ ] Fill in all emergency information
- [ ] Click "Save Information"
- [ ] Verify information displays correctly
- [ ] Test emergency button (optional)
- [ ] Bookmark the website

---

**Your Emergency Alert System is Ready! 🚀**

Stay safe and prepared! 🛡️
