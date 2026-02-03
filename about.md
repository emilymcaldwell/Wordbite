---
layout: page
title: About
permalink: /about/
---

{% for book in site.data.books %}
| Title | Author | Status | Rating | Date Read |
| ----------- | ----------- |
| {{ book.title }} | {{ book.author }} | {{ book.status }} | {{ book.rating }} | {{ book.date | date: "%B %-d, %Y" }} |
{% endfor %}