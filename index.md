---
layout: default
---

AI x Neurotech    I     Accelerating brain uploading     I     P(AIB)=P(BIA)*P(A)/P(B)

<!-- Side images - only visible on desktop -->
<style>
  .side-image-container {
    position: absolute;
    z-index: -1;
    display: none; /* Hidden by default */
  }
  
  .left-image {
    left: 5%;
    top: 300px; /* Position at a specific location from the top */
  }
  
  .right-image {
    right: 5%;
    top: 300px; /* Position at a specific location from the top */
  }
  
  /* Only show on screens wider than 1200px */
  @media (min-width: 1200px) {
    .side-image-container {
      display: block;
    }
  }
</style>

<!-- Left side image -->
<div class="side-image-container left-image">
  <img src="./images/first-neuron2.jpg" alt="First Neuron" style="max-width: 200px; height: auto; border-radius: 10px; mix-blend-mode: multiply;">
</div>

<!-- Right side image -->
<div class="side-image-container right-image">
  <img src="./images/first-neuron.jpg" alt="First Neuron" style="max-width: 200px; height: auto; border-radius: 10px; mix-blend-mode: multiply;">
</div>

<h2 class="section-title">Research</h2>

<ul class="research-list">
{% assign sorted_research = site.research | sort: 'date' | reverse %}
{% for research in sorted_research %}
  <li>
    <a href="{{ research.url }}">{{ research.title }}</a> - {{ research.date | date: "%B %d, %Y" }}
  </li>
{% endfor %}
</ul>

<h2 class="section-title">Posts</h2>

<ul class="posts-list">
{% assign sorted_posts = site.posts | where_exp: "post", "post.hidden != true" | sort: 'date' | reverse %}
{% for post in sorted_posts %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a> - {{ post.date | date: "%B %d, %Y" }}
  </li>
{% endfor %}
</ul>