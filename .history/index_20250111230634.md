ML & Neurotech/acc. 

Talking all things transhumanism. 

P(A:B)=(P(B:A)*P(A))/P(B)


{% for post in site.posts %}
{{ post.title }} - {{ post.date | date: "%B %d, %Y" }}
{% endfor %}
Research
{% for research in site.research %}
{{ research.title }} - {{ research.date | date: "%B %d, %Y" }}
{% endfor %}