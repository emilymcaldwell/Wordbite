---
layout: page
title: About
permalink: /about/
---

<table>
  <caption>Book Tracker</caption>
  <thead>
    <tr>
      <th>Title</th>
      <th>Author</th>
      <th>Status</th>
      <th>Rating</th>
      <th>Date Read</th>
    </tr>
  </thead>
  <tbody>
    {% for book in site.data.books %}
    <tr>
      <td class="book-title">{{ book.title }}</td>
      <td class="book-author">{{ book.author }}</td>
      <td class="book-status {{ book.status }}">{{ book.status }}</td>
      <td class="book-rating">{{ book.rating }}</td>
      <td class="book-date">{{ book.date | date: "%B %-d, %Y" }}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>