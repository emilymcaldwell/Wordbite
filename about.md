---
layout: page
title: About
permalink: /about/
---

| Title | Author | Status | Rating | Date Read |
| ----------- | ----------- |
{% for book in site.data.books %}
| {{ book.title }} | {{ book.author }} | {{ book.status }} | {{ book.rating }} | {{ book.date | date: "%B %-d, %Y" }} |
{% endfor %}