// ===== Demo Data =====
const delhiDistricts = [
    {
        id: 1,
        name: "Central Delhi",
        localities: ["Connaught Place", "Karol Bagh", "Paharganj", "Sadar Bazaar"],
        coordinates: { lat: 28.6519, lng: 77.2315 },
        electricity: "available",
        water: "available",
        score: 85
    },
    {
        id: 2,
        name: "North Delhi",
        localities: ["Civil Lines", "Model Town", "Kamla Nagar", "Shakti Nagar"],
        coordinates: { lat: 28.7041, lng: 77.1025 },
        electricity: "available",
        water: "partial",
        score: 78
    },
    {
        id: 3,
        name: "South Delhi",
        localities: ["Hauz Khas", "Saket", "Greater Kailash", "Defence Colony"],
        coordinates: { lat: 28.5355, lng: 77.2151 },
        electricity: "available",
        water: "available",
        score: 92
    },
    {
        id: 4,
        name: "East Delhi",
        localities: ["Mayur Vihar", "Preet Vihar", "Laxmi Nagar", "Gandhi Nagar"],
        coordinates: { lat: 28.6278, lng: 77.3092 },
        electricity: "partial",
        water: "available",
        score: 72
    },
    {
        id: 5,
        name: "West Delhi",
        localities: ["Janakpuri", "Rajouri Garden", "Punjabi Bagh", "Tilak Nagar"],
        coordinates: { lat: 28.6517, lng: 77.1038 },
        electricity: "available",
        water: "partial",
        score: 80
    },
    {
        id: 6,
        name: "North East Delhi",
        localities: ["Seelampur", "Shahdara", "Welcome", "Gokulpuri"],
        coordinates: { lat: 28.7029, lng: 77.2852 },
        electricity: "partial",
        water: "partial",
        score: 65
    },
    {
        id: 7,
        name: "North West Delhi",
        localities: ["Rohini", "Pitampura", "Shalimar Bagh", "Ashok Vihar"],
        coordinates: { lat: 28.7233, lng: 77.1036 },
        electricity: "available",
        water: "available",
        score: 88
    },
    {
        id: 8,
        name: "South East Delhi",
        localities: ["Kalkaji", "Okhla", "Govindpuri", "Nehru Place"],
        coordinates: { lat: 28.5494, lng: 77.2758 },
        electricity: "available",
        water: "partial",
        score: 75
    },
    {
        id: 9,
        name: "South West Delhi",
        localities: ["Dwarka", "Vasant Kunj", "Mahipalpur", "Najafgarh"],
        coordinates: { lat: 28.5921, lng: 77.0460 },
        electricity: "partial",
        water: "available",
        score: 82
    },
    {
        id: 10,
        name: "New Delhi",
        localities: ["India Gate", "Lodhi Road", "Chanakyapuri", "RK Puram"],
        coordinates: { lat: 28.6139, lng: 77.2090 },
        electricity: "available",
        water: "available",
        score: 95
    },
    {
        id: 11,
        name: "Shahdara",
        localities: ["Dilshad Garden", "Vivek Vihar", "Jhilmil", "Karkardooma"],
        coordinates: { lat: 28.6788, lng: 77.2953 },
        electricity: "partial",
        water: "partial",
        score: 68
    }
];

const utilities = {
    colleges: [
        { name: "Delhi University", location: "North Campus", distance: "2.3 km" },
        { name: "IIT Delhi", location: "Hauz Khas", distance: "5.7 km" },
        { name: "Jamia Millia Islamia", location: "Okhla", distance: "8.2 km" },
        { name: "NSUT", location: "Dwarka", distance: "12.5 km" }
    ],
    schools: [
        { name: "Delhi Public School", location: "R.K. Puram", distance: "3.1 km" },
        { name: "Kendriya Vidyalaya", location: "Sector 8", distance: "1.8 km" },
        { name: "Sanskriti School", location: "Chanakyapuri", distance: "4.5 km" },
        { name: "Modern School", location: "Barakhamba Road", distance: "2.7 km" }
    ],
    hospitals: [
        { name: "AIIMS Delhi", location: "Ansari Nagar", distance: "4.2 km" },
        { name: "Safdarjung Hospital", location: "Safdarjung", distance: "3.8 km" },
        { name: "Max Hospital", location: "Saket", distance: "6.5 km" },
        { name: "Apollo Hospital", location: "Sarita Vihar", distance: "9.1 km" }
    ],
    grocery: [
        { name: "Big Bazaar", location: "Pacific Mall", distance: "1.5 km" },
        { name: "DMart", location: "Vasant Kunj", distance: "3.2 km" },
        { name: "Reliance Fresh", location: "Nehru Place", distance: "2.1 km" },
        { name: "Spencer's", location: "Defence Colony", distance: "4.0 km" }
    ],
    police: [
        { name: "Central Police Station", location: "Connaught Place", distance: "1.2 km" },
        { name: "Hauz Khas Police Station", location: "Hauz Khas", distance: "3.5 km" },
        { name: "Rohini Police Station", location: "Rohini Sector 11", distance: "8.7 km" },
        { name: "Dwarka Police Station", location: "Dwarka Sector 10", distance: "10.2 km" }
    ],
    govt: [
        { name: "Municipal Corporation of Delhi", location: "Town Hall", distance: "2.8 km" },
        { name: "Delhi Development Authority", location: "Vikas Sadan", distance: "3.1 km" },
        { name: "District Magistrate Office", location: "ITO", distance: "1.9 km" },
        { name: "Passport Office", location: "Bhikaji Cama Place", distance: "5.3 km" }
    ]
};

const newsData = [
    {
        id: 1,
        title: "New Metro Line to Connect East and West Delhi",
        excerpt: "The Delhi Metro Rail Corporation announces a new corridor connecting major areas...",
        category: "infrastructure",
        icon: "🚇",
        date: "Feb 3, 2026"
    },
    {
        id: 2,
        title: "Smart Street Lighting Project Launched",
        excerpt: "Energy-efficient LED streetlights with sensors being installed across South Delhi...",
        category: "development",
        icon: "💡",
        date: "Feb 2, 2026"
    },
    {
        id: 3,
        title: "Water Supply Disruption Alert - North Delhi",
        excerpt: "Scheduled maintenance work will affect water supply in several areas tomorrow...",
        category: "alerts",
        icon: "🚰",
        date: "Feb 4, 2026"
    },
    {
        id: 4,
        title: "New Public Parks Development Initiative",
        excerpt: "MCD approves creation of 15 new parks in residential areas across the city...",
        category: "civic",
        icon: "🌳",
        date: "Feb 1, 2026"
    },
    {
        id: 5,
        title: "Road Widening Project Near Completion",
        excerpt: "Major arterial road expansion in West Delhi to ease traffic congestion...",
        category: "infrastructure",
        icon: "🛣️",
        date: "Jan 31, 2026"
    },
    {
        id: 6,
        title: "Digital Grievance System Update",
        excerpt: "Citizens can now track complaint status in real-time through mobile app...",
        category: "civic",
        icon: "📱",
        date: "Jan 30, 2026"
    }
];

const communityPosts = [
    {
        id: 1,
        author: "Rajesh Kumar",
        avatar: "https://ui-avatars.com/api/?name=Rajesh+Kumar&background=4A90E2&color=fff",
        time: "2 hours ago",
        content: "Great to see the new street lights being installed in our area! The roads feel much safer at night now. Thanks to the local authorities!",
        likes: 24,
        comments: 5
    },
    {
        id: 2,
        author: "Priya Sharma",
        avatar: "https://ui-avatars.com/api/?name=Priya+Sharma&background=5CB85C&color=fff",
        time: "5 hours ago",
        content: "There's a pothole near the Central Park entrance that needs immediate attention. It's causing problems for two-wheelers. #RoadSafety",
        likes: 18,
        comments: 8
    },
    {
        id: 3,
        author: "Amit Verma",
        avatar: "https://ui-avatars.com/api/?name=Amit+Verma&background=FFC107&color=fff",
        time: "1 day ago",
        content: "Community cleanup drive was a huge success! Over 100 residents participated. Let's keep our neighborhood clean! 🌱",
        likes: 42,
        comments: 12
    }
];

// ===== Global Variables =====
let map;
let currentDistrict = null;
let complaints = [];
let posts = [...communityPosts];

// ===== Initialize Application =====
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeThemeToggle();
    renderDistricts();
    renderUtilities();
    renderNews();
    renderCommunityPosts();
    initializeComplaintForm();
    initializeWeather();
    initializeGoogleMap();
    
    // Set default area for complaints
    document.getElementById('complaintArea').value = "Auto-detected: Central Delhi";
});

// ===== Navigation =====
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageName = this.dataset.page;
            
            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding page
            showPage(pageName);
        });
    });
}

function showPage(pageName) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    const targetPage = document.getElementById(pageName);
    if (targetPage) {
        targetPage.classList.add('active');
    }
}

// ===== Theme Toggle =====
function initializeThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// ===== Google Maps Integration =====
function initializeGoogleMap() {
    // Center on Delhi
    const delhiCenter = { lat: 28.6139, lng: 77.2090 };
    
    map = new google.maps.Map(document.getElementById('delhiMap'), {
        center: delhiCenter,
        zoom: 11,
        styles: [
            {
                featureType: "all",
                elementType: "geometry",
                stylers: [{ color: "#F5F7FA" }]
            },
            {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#C9E6F5" }]
            },
            {
                featureType: "road",
                elementType: "geometry",
                stylers: [{ color: "#FFFFFF" }]
            }
        ],
        disableDefaultUI: false,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true
    });
    
    // Add markers for each district
    delhiDistricts.forEach(district => {
        const marker = new google.maps.Marker({
            position: district.coordinates,
            map: map,
            title: district.name,
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 12,
                fillColor: getDistrictColor(district.score),
                fillOpacity: 0.8,
                strokeColor: '#FFFFFF',
                strokeWeight: 2
            }
        });
        
        const infoWindow = new google.maps.InfoWindow({
            content: `
                <div style="padding: 10px;">
                    <h3 style="margin: 0 0 10px 0; color: #2C3E50;">${district.name}</h3>
                    <p style="margin: 5px 0;"><strong>Infrastructure Score:</strong> ${district.score}/100</p>
                    <p style="margin: 5px 0;"><strong>Electricity:</strong> ${district.electricity}</p>
                    <p style="margin: 5px 0;"><strong>Water:</strong> ${district.water}</p>
                    <button onclick="viewDistrict(${district.id})" style="margin-top: 10px; padding: 8px 16px; background: #4A90E2; color: white; border: none; border-radius: 6px; cursor: pointer;">View Details</button>
                </div>
            `
        });
        
        marker.addListener('click', function() {
            infoWindow.open(map, marker);
        });
    });
}

function getDistrictColor(score) {
    if (score >= 85) return '#4CAF50';  // Green
    if (score >= 70) return '#FFC107';  // Yellow
    return '#F44336';  // Red
}

// ===== Districts =====
function renderDistricts() {
    const container = document.getElementById('districtsContainer');
    
    container.innerHTML = delhiDistricts.map(district => `
        <div class="district-card" onclick="viewDistrict(${district.id})">
            <h3>${district.name}</h3>
            <p style="color: var(--text-secondary); margin-bottom: 1rem;">
                ${district.localities.length} localities
            </p>
            <div class="district-indicators">
                <div class="indicator">
                    <span class="indicator-dot ${getStatusClass(district.electricity)}"></span>
                    <span>⚡ Power</span>
                </div>
                <div class="indicator">
                    <span class="indicator-dot ${getStatusClass(district.water)}"></span>
                    <span>🚰 Water</span>
                </div>
            </div>
            <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border-color);">
                <small style="color: var(--text-secondary);">Infrastructure Score: </small>
                <strong style="color: ${getScoreColor(district.score)};">${district.score}/100</strong>
            </div>
        </div>
    `).join('');
}

function getStatusClass(status) {
    if (status === 'available') return 'good';
    if (status === 'partial') return 'moderate';
    return 'bad';
}

function getScoreColor(score) {
    if (score >= 85) return '#4CAF50';
    if (score >= 70) return '#FFC107';
    return '#F44336';
}

function viewDistrict(districtId) {
    currentDistrict = delhiDistricts.find(d => d.id === districtId);
    
    if (!currentDistrict) return;
    
    // Update district name
    document.getElementById('districtName').textContent = currentDistrict.name;
    
    // Update district stats
    const statsContainer = document.getElementById('districtStats');
    statsContainer.innerHTML = `
        <div class="stat-card">
            <div class="stat-icon">📍</div>
            <div class="stat-info">
                <h3>${currentDistrict.localities.length}</h3>
                <p>Localities</p>
            </div>
        </div>
        <div class="stat-card">
            <div class="stat-icon">⚡</div>
            <div class="stat-info">
                <h3>${currentDistrict.electricity}</h3>
                <p>Electricity</p>
            </div>
        </div>
        <div class="stat-card">
            <div class="stat-icon">🚰</div>
            <div class="stat-info">
                <h3>${currentDistrict.water}</h3>
                <p>Water Supply</p>
            </div>
        </div>
    `;
    
    // Render localities
    renderLocalities(currentDistrict);
    
    // Show district view page
    showPage('districtView');
    
    // Zoom map to district
    if (map) {
        map.setCenter(currentDistrict.coordinates);
        map.setZoom(13);
    }
}

function renderLocalities(district) {
    const container = document.getElementById('localitiesGrid');
    
    container.innerHTML = district.localities.map((locality, index) => {
        const electricityStatus = Math.random() > 0.3 ? 'available' : (Math.random() > 0.5 ? 'partial' : 'outage');
        const waterStatus = Math.random() > 0.3 ? 'available' : (Math.random() > 0.5 ? 'partial' : 'outage');
        const temp = Math.floor(Math.random() * 10) + 18;
        
        return `
            <div class="locality-card">
                <h3>${locality}</h3>
                <div class="locality-info">
                    <div class="info-row">
                        <span>📍</span>
                        <span>Location: ${district.coordinates.lat.toFixed(4)}, ${district.coordinates.lng.toFixed(4)}</span>
                    </div>
                    <div class="info-row">
                        <span>⚡</span>
                        <span>Electricity: </span>
                        <span class="status-badge ${electricityStatus}">${electricityStatus}</span>
                    </div>
                    <div class="info-row">
                        <span>🚰</span>
                        <span>Water: </span>
                        <span class="status-badge ${waterStatus}">${waterStatus}</span>
                    </div>
                    <div class="info-row">
                        <span>🌦️</span>
                        <span>Weather: ${temp}°C, Partly Cloudy</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Back to home button
document.getElementById('backToHome').addEventListener('click', function() {
    showPage('home');
    if (map) {
        map.setCenter({ lat: 28.6139, lng: 77.2090 });
        map.setZoom(11);
    }
});

// ===== Utilities =====
function renderUtilities() {
    const container = document.getElementById('utilitiesGrid');
    
    const utilityCategories = [
        { key: 'colleges', name: 'Colleges & Universities', icon: '🎓' },
        { key: 'schools', name: 'Schools', icon: '🏫' },
        { key: 'hospitals', name: 'Hospitals & Medical', icon: '🏥' },
        { key: 'grocery', name: 'Grocery Stores', icon: '🛒' },
        { key: 'police', name: 'Police Stations', icon: '👮' },
        { key: 'govt', name: 'Government Offices', icon: '🏛️' }
    ];
    
    container.innerHTML = utilityCategories.map(category => `
        <div class="utility-card">
            <div class="utility-header">
                <span class="utility-icon">${category.icon}</span>
                <div>
                    <h3>${category.name}</h3>
                    <small style="color: var(--text-secondary);">${utilities[category.key].length} locations</small>
                </div>
            </div>
            <div class="utility-items">
                ${utilities[category.key].map(item => `
                    <div class="utility-item">
                        <strong>${item.name}</strong>
                        <small>📍 ${item.location} • ${item.distance}</small>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// Utility search
document.getElementById('utilitySearch').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const utilityCards = document.querySelectorAll('.utility-card');
    
    utilityCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(searchTerm) ? 'block' : 'none';
    });
});

// ===== Community =====
function renderCommunityPosts() {
    const container = document.getElementById('postsFeed');
    
    container.innerHTML = posts.map(post => `
        <div class="post-card">
            <div class="post-header">
                <img src="${post.avatar}" alt="${post.author}" class="post-avatar">
                <div class="post-info">
                    <h4>${post.author}</h4>
                    <span class="post-time">${post.time}</span>
                </div>
            </div>
            <div class="post-content">
                ${post.content}
            </div>
            <div class="post-actions">
                <div class="post-action">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                    <span>${post.likes}</span>
                </div>
                <div class="post-action">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                    <span>${post.comments}</span>
                </div>
                <div class="post-action">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <circle cx="18" cy="5" r="3"/>
                        <circle cx="6" cy="12" r="3"/>
                        <circle cx="18" cy="19" r="3"/>
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                    </svg>
                    <span>Share</span>
                </div>
            </div>
        </div>
    `).join('');
}

// New post
document.getElementById('postBtn').addEventListener('click', function() {
    const textarea = document.getElementById('newPostText');
    const content = textarea.value.trim();
    
    if (content) {
        const newPost = {
            id: posts.length + 1,
            author: "Current User",
            avatar: "https://ui-avatars.com/api/?name=Current+User&background=E91E63&color=fff",
            time: "Just now",
            content: content,
            likes: 0,
            comments: 0
        };
        
        posts.unshift(newPost);
        renderCommunityPosts();
        textarea.value = '';
        
        showMessage('Post published successfully!', 'success');
    }
});

// ===== Complaints =====
function initializeComplaintForm() {
    const form = document.getElementById('complaintForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const complaint = {
            id: `CMP-${Date.now()}`,
            issueType: document.getElementById('issueType').value,
            authority: document.getElementById('authority').value,
            area: document.getElementById('complaintArea').value,
            description: document.getElementById('complaintDesc').value,
            status: 'pending',
            date: new Date().toLocaleDateString()
        };
        
        complaints.unshift(complaint);
        renderRecentComplaints();
        form.reset();
        document.getElementById('complaintArea').value = "Auto-detected: Central Delhi";
        
        showMessage('Complaint submitted successfully! Track your complaint with ID: ' + complaint.id, 'success');
    });
    
    renderRecentComplaints();
}

function renderRecentComplaints() {
    const container = document.getElementById('recentComplaintsList');
    
    if (complaints.length === 0) {
        container.innerHTML = '<p style="color: var(--text-secondary); text-align: center; padding: 2rem;">No complaints yet. Submit the first one!</p>';
        return;
    }
    
    container.innerHTML = complaints.map(complaint => `
        <div class="complaint-item">
            <div class="complaint-header">
                <span class="complaint-id">${complaint.id}</span>
                <span class="complaint-status ${complaint.status}">${complaint.status}</span>
            </div>
            <p><strong>${getIssueTypeLabel(complaint.issueType)}</strong></p>
            <p class="complaint-desc">${complaint.description}</p>
            <small style="color: var(--text-secondary);">
                📍 ${complaint.area} • 📅 ${complaint.date} • 🏛️ ${getAuthorityLabel(complaint.authority)}
            </small>
        </div>
    `).join('');
}

function getIssueTypeLabel(type) {
    const labels = {
        road: '🛣️ Road Infrastructure',
        cleanliness: '🧹 Cleanliness & Sanitation',
        sewage: '🚰 Sewage & Drainage',
        electricity: '⚡ Electricity',
        water: '💧 Water Supply',
        other: '📋 Other'
    };
    return labels[type] || type;
}

function getAuthorityLabel(authority) {
    const labels = {
        mcd: 'MCD',
        dda: 'DDA',
        ndmc: 'NDMC',
        pwd: 'PWD',
        djb: 'DJB'
    };
    return labels[authority] || authority;
}

// ===== News =====
function renderNews() {
    const container = document.getElementById('newsGrid');
    
    container.innerHTML = newsData.map(news => `
        <div class="news-card" data-category="${news.category}">
            <div class="news-image">${news.icon}</div>
            <div class="news-content">
                <span class="news-category">${news.category}</span>
                <h3>${news.title}</h3>
                <p class="news-excerpt">${news.excerpt}</p>
                <div class="news-meta">
                    <span>📅 ${news.date}</span>
                    <span style="color: var(--primary-color); cursor: pointer;">Read more →</span>
                </div>
            </div>
        </div>
    `).join('');
    
    initializeNewsFilters();
}

function initializeNewsFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.dataset.filter;
            
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const newsCards = document.querySelectorAll('.news-card');
            newsCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// ===== Weather =====
function initializeWeather() {
    const weatherData = {
        current: { temp: 20, condition: '☀️' },
        forecast: [
            { time: '11 AM', temp: '23°', icon: '☁️' },
            { time: '12 PM', temp: '21°', icon: '🌤️' },
            { time: '2 PM', temp: '20°', icon: '☀️' },
            { time: '3 PM', temp: '19°', icon: '🌥️' }
        ]
    };
    
    document.getElementById('weatherTemp').textContent = weatherData.current.temp + '°';
    document.getElementById('weatherIcon').textContent = weatherData.current.condition;
    
    const forecastContainer = document.getElementById('weatherForecast');
    forecastContainer.innerHTML = weatherData.forecast.map(item => `
        <div class="forecast-item">
            <div class="forecast-time">${item.time}</div>
            <div class="forecast-icon">${item.icon}</div>
            <div class="forecast-temp">${item.temp}</div>
        </div>
    `).join('');
}

// ===== Utility Functions =====
function showMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
        <span>${message}</span>
    `;
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 4000);
}

// Make viewDistrict available globally
window.viewDistrict = viewDistrict;