# Reusable Component Candidates

## 1. **Contact Footer Component** ✓ (IDENTICAL across all 6 promos)

```html
<div class="contact">
  <div class="contact-hed">Questions? We're Here to Help.</div>
  <div class="contact-mail">Reservations@WhataHotel.com</div>
  <div class="contact-foot">
    Proposal prepared by Lorraine Travel &nbsp;&middot;&nbsp; WhataHotel.com
    &nbsp;&middot;&nbsp; Four Seasons Preferred Partner Since 1948
  </div>
</div>
```

**Found in:** All 6 promo pages (promo-1 through promo-6)
**Recommendation:** Create `ContactFooter` component
**Impact:** 8 lines × 6 files = 48 lines can be eliminated

---

## 2. **Masthead Component** (Nearly identical with dynamic content)

```html
<div class="masthead">
  <div class="mast-info">
    <div class="mast-title">{{ title }}</div>
    <div class="mast-client">{{ client }}</div>
    <div class="mast-dates">{{ dates }}</div>
  </div>
  <div class="mast-sep"></div>
  <div class="mast-logo">
    <img
      src="https://whatahotel.com/content/general/wah_logo.jpg"
      alt="What A Hotel!"
    />
    <div class="mast-byline">by Lorraine Travel</div>
  </div>
</div>
```

**Found in:** All 6 promo pages
**Recommendation:** Create `Masthead` component with props for title, client, dates
**Impact:** 15 lines × 6 files = 90 lines can be eliminated (with props passed)

---

## 3. **Offer Banner Component** (Structure identical, content varies)

```html
<div class="offer-banner">
  <div class="offer-accent"></div>
  <div>
    <div class="offer-hed">{{ heading }}</div>
    <div class="offer-sub">{{ description }}</div>
    <div class="offer-pills">{{ pills }}</div>
  </div>
</div>
```

**Found in:** All 6 promo pages (9 instances total)
**Recommendation:** Create `OfferBanner` component with props for heading, description, pills array
**Impact:** 12+ lines per instance × 9 instances = ~108 lines can be eliminated

---

## 4. **Room Card Component** (MAJOR duplication)

```html
<div class="room-label">
  <div class="room-label-badge">{{ room_number }}</div>
  <div class="room-label-line"></div>
</div>
<div class="room-hd">
  <div>
    <div class="room-name">{{ room_type }}</div>
    <div class="room-sub">{{ room_details }}</div>
  </div>
  <div class="price-card">
    <div class="pc-label">{{ price_label }}</div>
    <div class="pc-rate">{{ price }}<span class="pc-night">/night</span></div>
    <div class="pc-strike">{{ strike_through }}</div>
    <div class="pc-total">{{ total }}</div>
  </div>
</div>
<div class="room-imgs">{{ room_images }}</div>
<div class="feat-grid">{{ feature_boxes }}</div>
<div class="savings-bar">{{ savings_breakdown }}</div>
<a href="{{ booking_url }}" target="_blank" class="btn-book"
  >{{ booking_text }}</a
>
<p class="btn-sub">
  Clicking "Book Now" opens the WhataHotel! secure booking page
</p>
```

**Found in:** Each promo has 1-4 room cards (12+ total instances)
**Recommendation:** Create `RoomCard` component with props for all dynamic content
**Impact:** ~200+ lines per file × multiple instances = SIGNIFICANT reduction

---

## 5. **Summary Table Component** (Desktop version)

```html
<div class="summary-section">
  <div class="summary-title">📋 PROPOSAL SUMMARY</div>
  <table class="sum-table">
    {{ table_rows }}
  </table>
</div>
```

**Found in:** Most promo pages
**Recommendation:** Create `SummaryTable` component
**Impact:** ~80 lines per instance

---

## 6. **Mobile Summary Component** (Mobile version)

```html
<div class="mobile-summary">
  <div class="mob-card">{{ mobile_cards }}</div>
</div>
```

**Found in:** Most promo pages
**Recommendation:** Create `MobileSummary` component
**Impact:** ~100+ lines per instance

---

## 7. **Feature Box Component** (Reusable within room cards)

```html
<div class="feat-box">
  <div class="feat-title"><i class="fas fa-{{ icon }}"></i>{{ title }}</div>
  <ul class="feat-ul">
    {{ feature_items }}
  </ul>
</div>
```

**Found in:** All room cards
**Recommendation:** Create `FeatureBox` component
**Impact:** Reduces room card complexity

---

## 8. **Hero Section Component**

```html
<div class="hero">
  <img src="{{ image }}" alt="{{ alt_text }}" />
  <div class="hero-badge">
    <div class="hero-hotel">{{ hotel_name }}</div>
    <div class="hero-loc">{{ location_info }}</div>
  </div>
</div>
```

**Found in:** All 6 promo pages
**Recommendation:** Create `HeroSection` component
**Impact:** 10+ lines per file × 6 files

---

## Summary of Duplications

| Component      | Found In      | Lines | Priority    |
| -------------- | ------------- | ----- | ----------- |
| Contact Footer | 6 files       | 48    | 🔴 HIGH     |
| Masthead       | 6 files       | 90    | 🔴 HIGH     |
| Offer Banner   | 9 instances   | 108   | 🔴 HIGH     |
| Room Card      | 12+ instances | 2000+ | 🔴 CRITICAL |
| Summary Table  | Multiple      | 480+  | 🟡 MEDIUM   |
| Mobile Summary | Multiple      | 600+  | 🟡 MEDIUM   |
| Hero Section   | 6 files       | 60+   | 🟡 MEDIUM   |
| Feature Box    | Multiple      | 400+  | 🟡 MEDIUM   |

**Total Potential Code Reduction: 3,700+ lines**

---

## Recommended Implementation Strategy

### Phase 1 (Quick Wins - HIGH Priority)

1. Create `ContactFooter` component - 100% identical
2. Create `Masthead` component - with title, client, dates props
3. Create `HeroSection` component - with image, hotel, location props
4. Create `OfferBanner` component - with heading, description, pills props

### Phase 2 (Medium Effort - MEDIUM Priority)

5. Create `FeatureBox` component - icon, title, items props
6. Create `RoomCard` component - includes masthead, pricing, features
7. Create `SummaryTable` component - rows data prop
8. Create `MobileSummary` component - rows data prop

### Phase 3 (Advanced - After React/Framework Migration)

- Convert all HTML to React/Vue components
- Create shared data structures for promo content
- Implement template system for consistent layouts
