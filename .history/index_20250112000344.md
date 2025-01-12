---
layout: default
---

ML & Neurotech/acc.

Talking all things transhumanism.

P(A:B)=(P(B:A)*P(A))/P(B)

## Research

<ul class="research-list">
{% for research in site.research %}
  <li>
    <a href="{{ research.url }}">{{ research.title }}</a> - {{ research.date | date: "%B %d, %Y" }}
  </li>
{% endfor %}
</ul>

## Posts

<ul class="posts-list">
{% for post in site.posts %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a> - {{ post.date | date: "%B %d, %Y" }}
  </li>
{% endfor %}
</ul>