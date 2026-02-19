---
layout: page
title: About
permalink: /about/
---

<table class="table-sort table-arrows-▴▸▾ remember-sort">
  <thead>
    <tr>
      <th>Title</th>
      <th>Author</th>
      <th class="data-sort">Status</th>
      <th class="data-sort">Rating</th>
      <th class="onload-sort order-by-desc data-sort">Date Read</th>
    </tr>
  </thead>
  <tbody>
    {% for book in site.data.books %}
    <tr>
      <td class="book-title">{{ book.title }}</td>
      <td class="book-author">{{ book.author }}</td>
      <td class="book-status" data-sort="{{ book.status }}"><span>{{ book.status }}</span></td>
      <td class="book-rating" data-sort="{{ book.rating }}"><span style="width:{{ book.rating | times:20 | round: 0 }}%">star_ratestar_ratestar_ratestar_ratestar_rate</span></td>
      <td class="book-date" data-sort="{{ book.date }}">{{ book.date | date: "%B %-d, %Y" }}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>
