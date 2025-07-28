---
hide:
  - navigation
  - toc
---

# Startseite

<!-- START: Full-width Hero Banner -->
<div class="hero-banner">
  <div class="hero-content">
    <h1>Willkommen im Hotel Claris</h1>
    <p>Luxus • Komfort • Lage</p>
  </div>
  <div class="mobile-reserve-btn-wrapper">
    <a href="#booking-title" class="mobile-reserve-btn">Jetzt buchen</a>
  </div>
  <form id="hotelBookingForm" class="reservation-bar" data-lang="de-DE">
  <div class="promo-sticker-bar">
  <span>&#9432; Verwenden Sie den Code <strong>PRAHAVIP5</strong> für 5% Rabatt</span>
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
      <span class="res-label">Erwachsene</span>
      <div class="res-counter">
        <button type="button" onclick="adjustGuests('adults', -1)">−</button>
        <span id="adults" name="selectedAdultCount">1</span>
        <button type="button" onclick="adjustGuests('adults', 1)">+</button>
      </div>
    </div>
    <div class="res-counter-group">
      <span class="res-label">Kinder</span>
      <div class="res-counter">
        <button type="button" onclick="adjustGuests('children', -1)">−</button>
        <span id="children" name="selectedChildCount">0</span>
        <button type="button" onclick="adjustGuests('children', 1)">+</button>
      </div>
    </div>
    <div class="res-counter-group">
      <span class="res-label">Säuglinge</span>
      <div class="res-counter">
        <button type="button" onclick="adjustGuests('infants', -1)">−</button>
        <span id="infants" name="selectedInfantCount">0</span>
        <button type="button" onclick="adjustGuests('infants', 1)">+</button>
      </div>
    </div>
    <div class="res-divider"></div>
    <div class="res-item promo-input">
      <input type="text" id="promoCode" placeholder="Rabattcode" />
    </div>
    <button type="submit" class="res-book">JETZT BUCHEN ↗</button>
  </form>
</div>
<!-- END: Full-width Hero Banner -->
<link rel="stylesheet" href="/assets/stylesheets/index.css">

## Willkommen im Hotel CLARIS!

Wir bieten Einzel- und Doppelzimmer in den Kategorien SUPERIOR und ECONOMY!

<section class="featured-rooms-section">
  <div class="featured-room" onclick="location.href='02.rooms/#einzelzimmer'" style="cursor: pointer;">
    <img src="/assets/fotky_hotelu/superior-single-1.webp" alt="Single" draggable="false">
    <div class="room-label">Einzelzimmer</div>
  </div>
  <div class="featured-room" onclick="location.href='02.rooms/#doppelzimmer'" style="cursor: pointer;">
    <img src="/assets/fotky_hotelu/superior-double-1.webp" style="object-position: right;" alt="Double" draggable="false">
    <div class="room-label">Doppelzimmer</div>
  </div>
</section>

<div id="booking-title">Nutzen Sie unser Sonderangebot und buchen Sie Ihr Zimmer über das Reservierungsformular.</div>

--8<-- "booking-form.de.html"

Oder kontaktieren Sie uns unter:

- :fontawesome-solid-phone: **Telefon:** [**+420 775712882**](tel:+420775712882) (Reservierungen), [**+420 608712854**](tel:+420608712854) (Rezeption)  
- :fontawesome-regular-envelope: **E-Mail:** [**reservation@petrs.cz**](mailto:reservation@petrs.cz)

Wir freuen uns auf Ihren Besuch!

