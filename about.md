---
layout: page
title: About
permalink: /about/
---

<table class="table-sort table-arrows-▴▸▾ remember-sort">
  <caption>Book Tracker</caption>
  <thead>
    <tr>
      <th>Title</th>
      <th>Author</th>
      <th>Status</th>
      <th class="data-sort">Rating</th>
      <th class="onload-sort order-by-desc data-sort">Date Read</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="book-title">Nettle & Bone</td>
      <td class="book-author">T. Kingfisher</td>
      <td class="book-status reading">reading</td>
      <td class="book-rating" data-sort="0"><span style="width:0">star_ratestar_ratestar_ratestar_ratestar_rate</span></td>
      <td class="book-date" data-sort="{{ site.time | date: '%Y/%m/%d' }}">{{ site.time | date: "%B %-d, %Y" }}</td>
    </tr>
    {% for book in site.data.books %}
    <tr>
      <td class="book-title">{{ book.title }}</td>
      <td class="book-author">{{ book.author }}</td>
      <td class="book-status {{ book.status }}">{{ book.status }}</td>
      <td class="book-rating" data-sort="{{ book.rating }}"><span style="width:{{ book.rating | times:20 | round: 0 }}%">star_ratestar_ratestar_ratestar_ratestar_rate</span></td>
      <td class="book-date" data-sort="{{ book.date }}">{{ book.date | date: "%B %-d, %Y" }}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>