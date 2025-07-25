---
hide:
  - navigation
  - toc
---

# Home

<!-- START: Full-width Hero Banner -->
<div class="hero-banner">
  <div class="hero-content">
    <h1>Welcome to Hotel Claris</h1>
    <p>Luxury • Comfort • Location</p>
  </div>
  <div class="mobile-reserve-btn-wrapper">
    <a href="#booking-title" class="mobile-reserve-btn">Book now</a>
  </div>
  <form id="hotelBookingForm" class="reservation-bar" data-lang="en-EN">
    <div class="promo-sticker-bar">
      <span>&#9432; Use code <strong>PRAHAVIP5</strong> for 5% off</span>
    </div>
    <div class="res-item">
      <div class="date-container">
        <input type="date" id="arrivalDate" name="arrivalDate" class="res-date" required/>
      </div>
      <span class="res-arrow">→</span>
      <div class="date-container">
        <input type="date" id="endDate" name="endDate" class="res-date" required/>
      </div>
    </div>
    <div class="res-divider"></div>
    <div class="res-item">
      <span class="res-label">Adults</span>
      <div class="res-counter">
        <button type="button" onclick="adjustGuests('adults', -1)">−</button>
        <span id="adults" name="selectedAdultCount">1</span>
        <button type="button" onclick="adjustGuests('adults', 1)">+</button>
      </div>
    </div>
    <div class="res-counter-group">
      <span class="res-label">Children</span>
      <div class="res-counter">
        <button type="button" onclick="adjustGuests('children', -1)">−</button>
        <span id="children" name="selectedChildCount">0</span>
        <button type="button" onclick="adjustGuests('children', 1)">+</button>
      </div>
    </div>
    <div class="res-counter-group">
      <span class="res-label">Infants</span>
      <div class="res-counter">
        <button type="button" onclick="adjustGuests('infants', -1)">−</button>
        <span id="infants" name="selectedInfantCount">0</span>
        <button type="button" onclick="adjustGuests('infants', 1)">+</button>
      </div>
    </div>
    <div class="res-divider"></div>
    <div class="res-item promo-input">
      <input type="text" id="promoCode" placeholder="Promo Code" />
    </div>
    <button type="submit" class="res-book">BOOK NOW ↗</button>
  </form>
</div>
<!-- END: Full-width Hero Banner -->
<link rel="stylesheet" href="/assets/stylesheets/index.css">

## Welcome to Hotel CLARIS!

We offer accommodation in single and double rooms in SUPERIOR and ECONOMY categories!

<section class="featured-rooms-section">
  <div class="featured-room" onclick="location.href='02.rooms/#single-rooms'" style="cursor: pointer;">
    <img src="/assets/fotky_hotelu/jednoluzko.webp" alt="Jednolůžkový apartmán" draggable="false">
    <div class="room-label">Single Rooms</div>
  </div>
  <div class="featured-room" onclick="location.href='02.rooms/#double-rooms'" style="cursor: pointer;">
    <img src="/assets/fotky_hotelu/dvouluzko.webp" alt="Dvoulůžkový apartmán" draggable="false">
    <div class="room-label">Double Rooms</div>
  </div>
</section>

<div id="booking-title">Check out our special offer and book your stay using the reservation form.</div>

--8<-- "booking-form.en.html"

Or contact us at:

- :fontawesome-solid-phone: **Phone:** +420 775712882 (Reservations), +420 608712854 (Reception)  
- :fontawesome-regular-envelope: **Email:** reservation@petrs.cz

We look forward to your visit!

