---
title: "Team"
date: 2025-03-21
layout: post
hidden: false
---
<!-- URL of the post: https://glebrazgar.github.io/Duality-Team/ -->

<!-- STYLING THE PAGE -->

<style>
  @font-face {
    font-family: 'C&C Red Alert';
    src: url('/fonts/c_c_red_alert_inet/candc.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  
  html {
    overflow-x: hidden; /* Prevent horizontal scrolling */
    position: relative; /* Needed for overflow to work properly */
    width: 100%;
    margin: 0 !important;
    padding: 0 !important;
    min-height: 100vh; /* Use viewport height */
    background-color: black !important; /* Keep background black for overscroll */
    max-width: 100vw; /* Limit to viewport width */
    box-sizing: border-box; /* Include padding in width calculation */
  }
  
  body {
    background-color: black !important;
    color: white !important;
    max-width: 100vw !important; /* Use viewport width */
    width: 100% !important;
    padding: 0 !important;
    margin: 0 !important;
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* Use viewport height */
    overflow: hidden; /* Prevent any overflow */
  }
  
  /* Force the page to end at the footer */
  body::after {
    display: none !important;
    content: none !important;
  }
  
  /* Hide the site header (top navigation bar) */
  .site-header {
    display: none !important;
  }
  
  /* Hide the post header (title and meta) */
  .post-header {
    display: none !important;
  }
  
  /* Hide the share links */
  .share-links {
    display: none !important;
  }
  
  /* Hide the navigation links at the bottom */
  .post_navi {
    display: none !important;
  }
  
  .site-footer, footer {
    display: none !important;
    height: 0 !important;
    margin: 0 !important;
    padding: 0 !important;
    visibility: hidden !important;
  }
  
  .site-title, .site-title:visited, .site-nav .page-link {
    color: white !important;
  }
  
  /* Override theme width constraints */
  .page-content {
    padding: 0 !important;
    max-width: 100% !important;
    width: 100% !important;
    overflow: hidden; /* Prevent any overflow */
    margin-bottom: 0 !important; /* No bottom margin */
    flex: 1 0 auto; /* Allow content to grow but not shrink */
    box-sizing: border-box; /* Include padding in width calculation */
  }
  
  .wrapper {
    max-width: 100% !important;
    width: 100% !important;
    padding: 0 !important; /* Remove horizontal padding */
    margin: 0 !important;
    overflow: hidden; /* Prevent any overflow */
    box-sizing: border-box; /* Include padding in width calculation */
  }
  
  .post-content {
    background-color: black;
    color: white;
    padding: 20px 0; /* Vertical padding only */
    border-radius: 8px;
    max-width: 100% !important;
    width: 100% !important;
    overflow: hidden; /* Prevent any overflow */
    margin-bottom: 0 !important; /* No bottom margin */
    box-sizing: border-box; /* Include padding in width calculation */
  }
  
  .post-content a {
    color: #00aaff; /* Make links a bright blue color for better visibility on black */
  }
  
  .post-content img {
    mix-blend-mode: normal !important; /* Override any mix-blend-mode settings */
  }
  
  .share-links a {
    color: #00aaff !important;
  }
  
  /* Navigation buttons - now text with underline */
  .nav-buttons {
    position: fixed;
    top: 20px;
    right:10%; /* Moved to 35% from the right edge */
    z-index: 1000;
    display: flex;
    gap: 30px;
  }
  
  .nav-button {
    background-color: transparent;
    color: white;
    border: none;
    padding: 8px 0;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: underline;
    text-decoration-color: #5ED464;
    text-decoration-thickness: 2px;
    text-underline-offset: 5px;
  }
  
  .nav-button:hover {
    color: #5ED464;
  }
  
  /* Horizontal divider */
  .section-divider {
    border: none;
    height: 1px;
    background: linear-gradient(to right, 
                               rgba(94, 212, 100, 0.05), 
                               rgba(94, 212, 100, 0.3) 20%, 
                               rgba(94, 212, 100, 0.8) 40%, 
                               rgba(94, 212, 100, 0.8) 60%, 
                               rgba(94, 212, 100, 0.3) 80%, 
                               rgba(94, 212, 100, 0.05));
    width: 100vw;
    margin: 40px -50vw;
    left: 50%;
    position: relative;
    overflow-x: visible;
    margin-bottom: 0 !important;
  }
  
  /* Motivation section - centered italic text */
  .motivation-text {
    font-style: italic;
    text-align: center;
    max-width: 800px;
    margin: 60px auto;
    font-size: 1.3rem;
    line-height: 1.8;
    padding: 0 20px;
  }
  
  /* Team section specific styling */
  .header-image {
    max-width: 100%;
    height: auto;
    mix-blend-mode: normal;
    opacity: 0.9;
    margin-top: 80px; /* Added top margin (approximately 20% of image height) */
  }
  
  /* Team section styling */
  .centered-section {
    margin: 60px auto;
    max-width: 100% !important;
    width: 100%;
  }
  
  .centered-title {
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 30px;
    text-align: center;
    font-family: 'C&C Red Alert', Helvetica, Arial, sans-serif !important;
  }
  
  .centered-content {
    font-size: 1.1rem;
    line-height: 1.6;
    padding: 0 20px;
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }
  
  /* Modified team boxes layout */
  .team-boxes {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
    margin: 40px auto;
    max-width: 1200px;
    position: relative; /* Make this a positioning context */
  }
  
  .team-box {
    background-color: rgba(94, 212, 100, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 30px;
    width: 40%; /* Two boxes per row */
    max-width: 500px; /* Maximum width */
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    min-height: 400px;
    transform: translateY(0); /* Initial position */
    box-shadow: 0 0 0 rgba(94, 212, 100, 0); /* Initial shadow */
    position: relative;
    margin-bottom: 30px;
  }
  
  .team-box:hover {
    border-color: #5ED464;
    box-shadow: 0 15px 30px rgba(94, 212, 100, 0.2); /* Enhanced shadow for depth */
    transform: translateY(-10px); /* Lift up by 10px on hover */
  }
  
  .team-avatar {
    background-color: rgba(94, 212, 100, 0.1);
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    overflow: hidden;
  }
  
  .team-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .team-name {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 5px;
    transition: color 0.3s ease;
  }
  
  .team-title {
    font-size: 1.1rem;
    color: #5ED464;
    margin-bottom: 15px;
  }
  
  .team-box:hover .team-name {
    color: #5ED464;
  }
  
  .team-bio {
    font-size: 1rem;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 30px;
    flex-grow: 1;
  }
  
  .team-skills {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 20px;
  }
  
  .skill-label {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 10px;
  }
  
  .skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  
  .skill-tag {
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.9);
    background-color: rgba(94, 212, 100, 0.15);
  }
  
  /* Custom footer styling with black background */
  .custom-footer {
    background-color: black !important; /* Pure black background */
    color: white; /* Text is white for contrast */
    padding: 30px 0;
    margin: 0 !important; /* Remove ALL margins */
    border-top: 0 !important; /* Remove any potential top border */
    text-align: center;
    width: 100%;
    position: relative; /* Add position relative */
    z-index: 10; /* Ensure it's above other elements */
    box-sizing: border-box; /* Include padding in width calculation */
    overflow: hidden; /* Prevent overflow */
  }
  
  /* Create a pseudo-element to cover any space below the footer */
  .custom-footer::after {
    content: "";
    display: block;
    position: absolute;
    bottom: -1000px; /* Extend well below the viewport */
    left: 0;
    width: 100%;
    height: 1000px; /* Tall enough to cover any space */
    background-color: black; /* Match footer color - pure black */
    z-index: 5; /* Below footer content but above other elements */
  }
  
  /* Hide any potential elements after the footer */
  .custom-footer ~ * {
    display: none !important;
  }
  
  .footer-content {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .footer-logo {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 10px;
    font-family: "Times New Roman", Times, serif;
    color: white; /* Changed to white */
  }
  
  .footer-tagline {
    font-style: italic;
    margin-bottom: 20px;
    color: rgba(255, 255, 255, 0.8); /* Lighter white for contrast */
  }
  
  .footer-links {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin: 20px 0;
  }
  
  .footer-link {
    color: white !important; /* Changed to white with !important to override any inheritance */
    text-decoration: underline; /* Ensure underline is applied */
    transition: color 0.3s ease;
    font-weight: normal; /* Ensure normal font weight */
  }
  
  .footer-link:hover {
    color: rgba(0, 0, 0, 0.7); /* Dark hover color for contrast on green */
  }
  
  .footer-copyright {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.8); /* Lighter white for contrast */
    margin-top: 20px;
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .team-box {
      width: 80%; /* Full width on mobile */
      min-height: auto;
      padding: 20px;
    }
    
    .centered-title {
      font-size: 3rem; /* Adjusted for mobile from 2.5rem */
      padding: 0 15px; /* Added horizontal padding */
      word-wrap: break-word; /* Ensure long words break */
    }
    
    .nav-buttons {
      top: 10px;
      right: 10%; /* Adjusted for mobile */
    }
    
    .nav-button {
      padding: 5px 0;
      font-size: 0.9rem;
    }
  }
  
  /* Fix for potential scrollbar issues */
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
  
  /* Custom text selection color */
  ::selection {
    background-color: rgba(94, 212, 100, 0.3); /* #5ED464 at 25% opacity */
    color: #ffffff; /* White text instead of black */
  }
  
  /* For Firefox */
  ::-moz-selection {
    background-color: rgba(94, 212, 100, 0.3); /* #5ED464 at 25% opacity */
    color: #ffffff; /* White text instead of black */
  }
  
  h1, h2, h3, 
  .section-title,
  .centered-title {
    font-family: 'C&C Red Alert', Helvetica, Arial, sans-serif !important;
  }
</style>

<!-- Ensure proper viewport setting -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

<!-- Navigation buttons -->
<div class="nav-buttons">
  <button class="nav-button" onclick="window.location.href='https://glebrazgar.github.io/Duality/'">Home</button>
  <button class="nav-button" onclick="window.location.href='https://glebrazgar.github.io/Duality-Contact/'">Contact</button>
  <button class="nav-button" onclick="window.location.href='https://glebrazgar.github.io/Connectomics/'">Research</button>
</div>

<!-- Main Header -->
<div class="header-title-container" style="text-align: center; margin-top: 100px; margin-bottom: 60px; position: relative; height: 120px;">
  <h1 class="centered-title" style="margin-top: 0;">Our Team</h1>
</div>

<hr class="section-divider">

<!-- Team intro text -->
<div class="motivation-text">
  We're a multidisciplinary team of scientists, engineers, and innovators dedicated to mapping and simulating the human brain at unprecedented resolution.
</div>

<!-- Team Members Section -->
<div class="centered-section">
  <div class="team-boxes">
    <!-- Team Member 1 -->
    <div class="team-box">
      <div class="team-avatar">
        <img src="/images/team/team1.jpg" alt="Team Member 1" onerror="this.src='/images/brain.svg'; this.style.padding='15px';">
      </div>
      <div class="team-name">Alex Morgan, Ph.D.</div>
      <div class="team-title">Chief Scientific Officer</div>
      <div class="team-bio">
        Leading our research efforts with over 15 years of experience in computational neuroscience and brain imaging techniques. Previously led breakthrough projects at Harvard Neuroscience and the Connectome Project.
      </div>
      <div class="team-skills">
        <div class="skill-label">Expertise:</div>
        <div class="skill-tags">
          <span class="skill-tag">Neuroimaging</span>
          <span class="skill-tag">Connectomics</span>
          <span class="skill-tag">Machine Learning</span>
        </div>
      </div>
    </div>
    
    <!-- Team Member 2 -->
    <div class="team-box">
      <div class="team-avatar">
        <img src="/images/team/team2.jpg" alt="Team Member 2" onerror="this.src='/images/micro.svg'; this.style.padding='15px';">
      </div>
      <div class="team-name">Sarah Chen, M.D.</div>
      <div class="team-title">Medical Director</div>
      <div class="team-bio">
        Bridging the gap between neuroscience research and clinical applications. Background in neurosurgery and brain imaging with special focus on neurodegenerative diseases and brain preservation techniques.
      </div>
      <div class="team-skills">
        <div class="skill-label">Expertise:</div>
        <div class="skill-tags">
          <span class="skill-tag">Neurology</span>
          <span class="skill-tag">Brain Preservation</span>
          <span class="skill-tag">Clinical Research</span>
        </div>
      </div>
    </div>
    
    <!-- Team Member 3 -->
    <div class="team-box">
      <div class="team-avatar">
        <img src="/images/team/team3.jpg" alt="Team Member 3" onerror="this.src='/images/gear.svg'; this.style.padding='15px';">
      </div>
      <div class="team-name">David Patel</div>
      <div class="team-title">Chief Technology Officer</div>
      <div class="team-bio">
        Leading our engineering team with expertise in high-performance computing, neural simulation, and AI. Previously developed distributed systems for large-scale neural modeling at Google Brain and the Allen Institute.
      </div>
      <div class="team-skills">
        <div class="skill-label">Expertise:</div>
        <div class="skill-tags">
          <span class="skill-tag">Neural Simulation</span>
          <span class="skill-tag">High-Performance Computing</span>
          <span class="skill-tag">AI Architecture</span>
        </div>
      </div>
    </div>
    
    <!-- Team Member 4 -->
    <div class="team-box">
      <div class="team-avatar">
        <img src="/images/team/team4.jpg" alt="Team Member 4" onerror="this.src='/images/chart.svg'; this.style.padding='15px';">
      </div>
      <div class="team-name">Emma Rodriguez</div>
      <div class="team-title">Research Director</div>
      <div class="team-bio">
        Pioneering our approach to brain digitization with a background in computational biology and neural network architecture. Published groundbreaking work on multi-scale brain modeling and synaptic digital twins.
      </div>
      <div class="team-skills">
        <div class="skill-label">Expertise:</div>
        <div class="skill-tags">
          <span class="skill-tag">Neural Network Architecture</span>
          <span class="skill-tag">Digital Brain Modeling</span>
          <span class="skill-tag">Computational Biology</span>
        </div>
      </div>
    </div>
  </div>
</div>

<hr class="section-divider">

<!-- Join Our Team Section -->
<div class="centered-section" style="margin-bottom: 60px;">
  <div class="centered-title" style="font-size: 3rem;">Join Our Team</div>
  <div class="centered-content">
    <p>We're always looking for exceptional talent to help us push the boundaries of neuroscience and brain simulation technology.</p>
    <p>If you're passionate about understanding and digitizing the human brain, we'd love to hear from you.</p>
    <button class="nav-button" style="margin-top: 20px; font-size: 1.1rem;" onclick="window.location.href='https://glebrazgar.github.io/Duality-Contact/'">Contact Us</button>
  </div>
</div>

<!-- Green separator before footer -->
<hr class="section-divider" style="margin-bottom: 0 !important;">

<!-- Custom Footer - make sure this is the last element -->
<div class="custom-footer" style="margin-top: 0 !important; padding-top: 30px;">
  <div class="footer-content">
    <div class="footer-logo">Duality</div>
    <div class="footer-tagline">Digitizing the human brain</div>
    <div class="footer-links">
      <a href="https://www.linkedin.com/in/gleb-razgar-6931a7220" class="footer-link">LinkedIn</a>
      <a href="https://glebrazgar.github.io/Duality-Contact/" class="footer-link">Contact</a>
      <a href="https://glebrazgar.github.io/Connectomics/" class="footer-link">Research</a>
    </div>
    <div class="footer-copyright">© 2025 Duality. All rights reserved.</div>
  </div>
</div>

<!-- Add fallback SVGs for team images -->
<script>
document.addEventListener('DOMContentLoaded', function() {
  // Function to create SVG fallbacks if images don't load
  const avatars = document.querySelectorAll('.team-avatar img');
  avatars.forEach(img => {
    if (img.complete && img.naturalHeight === 0) {
      img.src = '/images/brain.svg';
      img.style.padding = '15px';
    }
  });
});
</script>