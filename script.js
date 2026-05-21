// Emergency Alert System JavaScript

// DOM Elements
const emergencyBtn = document.getElementById('emergencyBtn');
const emergencyModal = document.getElementById('emergencyModal');
const cancelBtn = document.getElementById('cancelBtn');
const contactForm = document.getElementById('contactForm');
const profileInfo = document.getElementById('profileInfo');
const locationDisplay = document.getElementById('location-display');
const timeDisplay = document.getElementById('time-display');

let emergencyActive = false;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadSavedInfo();
    setupEventListeners();
});

// Setup Event Listeners
function setupEventListeners() {
    emergencyBtn.addEventListener('click', triggerEmergency);
    cancelBtn.addEventListener('click', cancelEmergency);
    contactForm.addEventListener('submit', handleFormSubmit);
    
    // Keyboard shortcut - Press 'E' for emergency
    document.addEventListener('keypress', function(event) {
        if (event.key.toLowerCase() === 'e' && !emergencyActive) {
            triggerEmergency();
        }
    });
}

// Trigger Emergency Alert
function triggerEmergency() {
    if (emergencyActive) return;
    
    emergencyActive = true;
    
    // Show modal
    emergencyModal.classList.add('active');
    
    // Get location
    getLocation();
    
    // Update time
    updateTime();
    
    // Play alert sound
    playAlertSound();
    
    // Log emergency
    logEmergency();
}

// Get User Location
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                const lat = position.coords.latitude.toFixed(4);
                const lng = position.coords.longitude.toFixed(4);
                const accuracy = position.coords.accuracy.toFixed(0);
                
                locationDisplay.textContent = lat + ', ' + lng + ' (Accuracy: ' + accuracy + 'm)';
                
                // Send alert with location
                sendEmergencyAlert(lat, lng, accuracy);
            },
            function(error) {
                console.log('Geolocation error:', error);
                locationDisplay.textContent = 'Location access denied';
            }
        );
    } else {
        locationDisplay.textContent = 'Geolocation not supported';
    }
}

// Update Time Display
function updateTime() {
    const now = new Date();
    timeDisplay.textContent = now.toLocaleString();
}

// Play Alert Sound
function playAlertSound() {
    try {
        // Create audio context for alert tone
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        // Set alert frequency
        oscillator.frequency.value = 1000; // 1000 Hz
        oscillator.type = 'sine';
        
        // Set volume
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        
        // Play for 0.5 seconds
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
        
        // Repeat alert 3 times
        for (let i = 1; i < 3; i++) {
            const osc = audioContext.createOscillator();
            osc.connect(gainNode);
            osc.frequency.value = 1000;
            osc.type = 'sine';
            osc.start(audioContext.currentTime + (i * 0.7));
            osc.stop(audioContext.currentTime + (i * 0.7) + 0.5);
        }
    } catch (error) {
        console.log('Audio alert not available:', error);
    }
}

// Send Emergency Alert
function sendEmergencyAlert(lat, lng, accuracy) {
    // Get saved information
    const savedData = getSavedData();
    
    const emergencyData = {
        timestamp: new Date().toISOString(),
        name: savedData.name || 'Unknown',
        phone: savedData.phone || 'Unknown',
        location: {
            latitude: lat,
            longitude: lng,
            accuracy: accuracy
        },
        emergencyContacts: [
            savedData.contact1,
            savedData.contact2
        ].filter(Boolean),
        medicalInfo: savedData.medical || 'None provided',
        googleMapsLink: 'https://maps.google.com/?q=' + lat + ',' + lng
    };
    
    console.log('Emergency Alert Triggered:', emergencyData);
    
    // In a real system, this would send to emergency services
    // For now, we'll store it locally
    storeEmergencyLog(emergencyData);
    
    // Show notification
    showNotification(emergencyData);
}

// Log Emergency to Browser Console
function logEmergency() {
    const savedData = getSavedData();
    console.log('%c⚠️ EMERGENCY ALERT ACTIVATED ⚠️', 'color: red; font-size: 16px; font-weight: bold;');
    console.log('Name:', savedData.name || 'Not provided');
    console.log('Phone:', savedData.phone || 'Not provided');
    console.log('Emergency Contacts:', savedData.contact1, savedData.contact2);
    console.log('Medical Info:', savedData.medical || 'Not provided');
    console.log('Timestamp:', new Date().toLocaleString());
}

// Store Emergency Log
function storeEmergencyLog(data) {
    let logs = JSON.parse(localStorage.getItem('emergencyLogs')) || [];
    logs.push(data);
    localStorage.setItem('emergencyLogs', JSON.stringify(logs));
}

// Show Notification
function showNotification(data) {
    if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('Emergency Alert', {
            body: 'Emergency alert triggered. Location sent to emergency contacts.',
            icon: '🚨'
        });
    }
}

// Cancel Emergency
function cancelEmergency() {
    emergencyActive = false;
    emergencyModal.classList.remove('active');
}

// Handle Form Submit
function handleFormSubmit(e) {
    e.preventDefault();
    
    const data = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        contact1: document.getElementById('contact1').value,
        contact2: document.getElementById('contact2').value,
        medical: document.getElementById('medical').value
    };
    
    // Save to localStorage
    localStorage.setItem('emergencyData', JSON.stringify(data));
    
    // Display saved info
    displayProfileInfo(data);
    
    // Show success message
    showSuccessMessage();
    
    // Reset form
    contactForm.reset();
}

// Get Saved Data
function getSavedData() {
    return JSON.parse(localStorage.getItem('emergencyData')) || {};
}

// Load and Display Saved Info
function loadSavedInfo() {
    const data = getSavedData();
    if (data.name) {
        displayProfileInfo(data);
    }
}

// Display Profile Info
function displayProfileInfo(data) {
    let html = '';
    
    if (data.name) {
        html += '<p><strong>Name:</strong> ' + escapeHtml(data.name) + '</p>';
    }
    if (data.phone) {
        html += '<p><strong>Phone:</strong> ' + escapeHtml(data.phone) + '</p>';
    }
    if (data.contact1) {
        html += '<p><strong>Emergency Contact 1:</strong> ' + escapeHtml(data.contact1) + '</p>';
    }
    if (data.contact2) {
        html += '<p><strong>Emergency Contact 2:</strong> ' + escapeHtml(data.contact2) + '</p>';
    }
    if (data.medical) {
        html += '<p><strong>Medical Info:</strong> ' + escapeHtml(data.medical) + '</p>';
    }
    
    profileInfo.innerHTML = html || '<p style="color: #999;">No information saved yet.</p>';
}

// Show Success Message
function showSuccessMessage() {
    const message = document.createElement('div');
    message.style.cssText = 'position: fixed; top: 20px; right: 20px; background: #27ae60; color: white; padding: 15px 25px; border-radius: 5px; box-shadow: 0 5px 15px rgba(0,0,0,0.2); z-index: 999; animation: slideInRight 0.3s ease;';
    message.textContent = 'Information saved successfully!';
    
    document.body.appendChild(message);
    
    setTimeout(function() {
        message.remove();
    }, 3000);
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}

// Request notification permission on load
if ('Notification' in window && Notification.permission === 'default') {
    Notification.requestPermission();
}

// Add animation for success message
const style = document.createElement('style');
style.textContent = '@keyframes slideInRight { from { transform: translateX(400px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }';
document.head.appendChild(style);

// Prevent accidental alerts
window.addEventListener('beforeunload', function(e) {
    if (emergencyActive) {
        e.preventDefault();
        e.returnValue = '';
        return '';
    }
});
