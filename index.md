---
layout: default
---

AI x Neurotech    I     Conquering the universe     I     P(AIB)=P(BIA)*P(A)/P(B)

<h2 class="section-title">Research</h2>

<ol class="entry-list">
{% assign sorted_research = site.research | sort: 'date' | reverse %}
{% for research in sorted_research %}
  <li>
    <a class="entry-title" href="{{ research.url }}">{{ research.title }}</a>
    <div class="entry-date">{{ research.date | date: "%B %d, %Y" }}</div>
  </li>
{% endfor %}
</ol>

<h2 class="section-title">Posts</h2>

<ol class="entry-list">
{% assign sorted_posts = site.posts | where_exp: "post", "post.hidden != true" | sort: 'date' | reverse %}
{% for post in sorted_posts %}
  <li>
    <a class="entry-title" href="{{ post.url }}">{{ post.title }}</a>
    <div class="entry-date">{{ post.date | date: "%B %d, %Y" }}</div>
  </li>
{% endfor %}
</ol>

<h2 class="section-title">Wanderings</h2>

<ol class="entry-list">
{% assign sorted_microblog = site.wanderings | where_exp: "entry", "entry.hidden != true" | sort: 'date' | reverse %}
{% for entry in sorted_microblog %}
  <li>
    <a class="entry-title" href="{{ entry.url }}">{{ entry.title }}</a>
    <div class="entry-date">{{ entry.date | date: "%B %d, %Y" }}</div>
  </li>
{% endfor %}
</ol>

<!-- Added image below Posts section -->
<div style="text-align: center; margin-top: 20px; margin-bottom: -20px;">
  <img src="./images/first-neuron.jpg" alt="First Neuron" style="max-width: 30%; height: auto; border-radius: 10px; mix-blend-mode: multiply; display: block; margin: 10px auto -40px auto;">
</div>
