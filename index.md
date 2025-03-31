---
layout: default
---

AI x Neurotech    I     Accelerating brain uploading     I     P(AIB)=P(BIA)*P(A)/P(B)

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

<!-- Added image below Posts section -->
<div style="text-align: center; margin-top: none; margin-bottom: -50px;">
  <img src="./images/first-neuron.jpg" alt="First Neuron" style="max-width: 40%; height: auto; border-radius: 10px; mix-blend-mode: multiply; display: block; margin: 0 auto;">
</div>