/* ══════════════════════════════════════════════════════
   BANTAYAN ISLAND GUIDE — script.js  v2.0
   Bottom nav · Modal back arrow · All place images
══════════════════════════════════════════════════════ */
'use strict';

/* ──────────────────────────────────────────────────────
   PLACES DATA — every place has img or gradient
────────────────────────────────────────────────────── */
const PLACES = [
  /* ── SANTA FE ─────────────────────────────── */
  {
    id: 'sugar-beach',
    name: 'Sugar Beach',
    tag: 'Santa Fe',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sugar%20Beach%20Bantayan.jpg',
    gradient: 'grad-santafe',
    icon: 'beach',
    short: 'Wide, quiet white sand lined with coconut palms — favourite for camping and slow afternoons.',
    desc: 'Sugar Beach is a wide, tranquil stretch of white sand west of Kota Beach, lined with coconut palms along its entire length. It is a favourite with those who prefer a quieter, unhurried pace — good for camping, sunrise walks, and spending an afternoon with almost no one around.',
    tips: 'Best visited early morning or late afternoon. Bring your own food and water as facilities are minimal.'
  },
  {
    id: 'kota-beach',
    name: 'Kota Beach',
    tag: 'Santa Fe',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kota%20Beach%2C%20Bantayan%20Island.jpg',
    gradient: 'grad-santafe',
    icon: 'beach',
    short: 'Picturesque white sand with a turquoise sandbar at low tide — widely regarded as the island\'s most beautiful beach.',
    desc: 'Kota Beach is widely regarded as the most picturesque beach on Bantayan Island, fronting the Kota Beach Resort. It is known for a stunning turquoise sandbar that extends dramatically at low tide, best seen during the summer dry months. The fine white sand and calm, clear water make it the standard by which all other Bantayan beaches are measured.',
    tips: 'Visit at low tide in the morning for the sandbar. Some areas require a small resort entrance fee.'
  },
  {
    id: 'ogtong-cave',
    name: 'Ogtong Cave Pool',
    tag: 'Santa Fe',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ogtong%20Cave%20Pool%20Bantayan.jpg',
    gradient: 'grad-santafe',
    icon: 'cave',
    short: 'Natural freshwater cave pool inside Ogtong Cave Resort — reached by a stone stairway down into a sinkhole.',
    desc: 'Ogtong Cave Pool is a natural freshwater cave pool located inside Ogtong Cave Resort in Santa Fe. You descend via a stone stairway into a garden-lined sinkhole to reach the pool, which is cool, clear, and surrounded by the cave\'s natural rock formation. It is a refreshing break from the salt water and a genuinely unique experience on the island.',
    tips: 'Day visitors pay approximately ₱100–200 entrance fee. The resort also offers accommodation and beach access.'
  },
  {
    id: 'paradise-beach',
    name: 'Paradise Beach',
    tag: 'Santa Fe',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Paradise%20Beach%20Bantayan%20Island.jpg',
    gradient: 'grad-santafe',
    icon: 'beach',
    short: 'Secluded, pristine beach reached by a short trail — regarded by many locals as the island\'s most beautiful.',
    desc: 'Paradise Beach is a secluded, pristine stretch of sand reached by a short 10–15 minute trail off the main road. Many locals consider it the most beautiful beach on Bantayan Island — its isolation keeps it quieter and cleaner than the main resort areas. The walk through lush vegetation to reach it adds to the sense of discovery.',
    tips: 'Wear comfortable footwear for the trail. Best visited outside of peak season for the most peaceful experience.'
  },
  {
    id: 'marine-sanctuary',
    name: 'Santa Fe Marine Sanctuary',
    tag: 'Santa Fe',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bantayan%20Island%20Marine%20Sanctuary.jpg',
    gradient: 'grad-santafe',
    icon: 'waves',
    short: 'Protected reef area off the Santa Fe coast — popular for snorkeling with healthy coral and abundant marine life.',
    desc: 'The Santa Fe Marine Sanctuary is a protected reef zone off the Santa Fe coastline, maintained to preserve the island\'s coral ecosystem. It is one of the best spots on the island for snorkeling, with clear water, healthy coral formations, and abundant marine life. Local resorts and boat operators in Santa Fe can arrange snorkeling tours to the sanctuary.',
    tips: 'Book a snorkeling tour through your resort or at the Santa Fe waterfront. Bring reef-safe sunscreen.'
  },
  {
    id: 'mj-square',
    name: 'MJ Square Food Hub',
    tag: 'Santa Fe',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/MJ%20Square%20Bantayan%20Island.jpg',
    gradient: 'grad-food',
    icon: 'food',
    short: 'Santa Fe\'s main food strip — restaurants, bars, eat-all-you-can seafood, and nightlife.',
    desc: 'MJ Square is the main commercial and social strip in Santa Fe, lined with restaurants, bars, and food stalls. It offers everything from eat-all-you-can seafood buffets to casual international food, cocktails, and live music in the evenings. It is the social heart of tourist Bantayan — the place most visitors end up after a day at the beach.',
    tips: 'Visit in the evening for the full atmosphere. Prices vary widely — explore several places before settling in.'
  },
  /* ── BANTAYAN TOWN ─────────────────────────── */
  {
    id: 'church',
    name: 'Saints Peter and Paul Church',
    tag: 'Bantayan Town',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bantayan%20Church%20Front%20View.JPG',
    gradient: 'grad-bantayan',
    icon: 'church',
    short: 'One of the oldest churches in the Visayas — Spanish colonial, with a belfry offering rooftop views over the island.',
    desc: 'The Church of Saints Peter and Paul in Bantayan town is one of the oldest Catholic churches in the Visayas, built during the Spanish colonial period. Its thick coral-stone walls and well-preserved facade make it an architectural landmark. Visitors can climb the centuries-old belfry for a remarkable rooftop view over the town and surrounding coastline.',
    tips: 'Modest dress required inside. The belfry climb requires permission from the parish. Best photographed in the late afternoon light.'
  },
  {
    id: 'public-market',
    name: 'Downtown Public Market',
    tag: 'Bantayan Town',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Motor%20tricycles%20for%20hire%20lined%20up%20outside%20public%20market%20in%20downtown%20Bantayan.JPG',
    gradient: 'grad-bantayan',
    icon: 'market',
    short: 'The island\'s everyday hub — fresh produce, dried danggit, local goods, and tricycles lining the street.',
    desc: 'The Bantayan town public market is the everyday commercial heart of the island — a bustling place where locals buy fresh produce, dried fish (especially the famous danggit), local snacks, and household goods. Tricycles line up outside in rows, waiting for passengers. It is one of the most authentic and lively experiences on the island.',
    tips: 'Best visited in the early morning when it is most active. A great place to buy danggit to bring home as pasalubong.'
  },
  {
    id: 'tablayan',
    name: 'Tablayan Beach',
    tag: 'Bantayan Town',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Woman%20on%20the%20beach%20of%20Tablayan%20with%20beautyful%20clean%20garden%20and%20beach.jpg',
    gradient: 'grad-bantayan',
    icon: 'beach',
    short: 'Clean, well-kept, less-crowded shoreline away from the main resort strip — a local favourite.',
    desc: 'Tablayan Beach is a clean, well-maintained shoreline away from the more crowded resort areas of Santa Fe. It is quieter and more local in character, good for a relaxed walk along the water\'s edge without the backdrop of resort infrastructure. The beach is kept tidy and offers a more neighbourhood feel compared to the main tourist beaches.',
    tips: 'A good option if you want a quieter beach experience closer to Bantayan town. Pair it with a visit to the church or public market.'
  },
  {
    id: 'mangrove',
    name: 'Obo-ob Mangrove Eco Park',
    tag: 'Bantayan Town',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Obo-ob%20Mangrove%20Bantayan%20Island.jpg',
    gradient: 'grad-bantayan',
    icon: 'nature',
    short: 'Community-managed mangrove forest — explore by boat, kayak, or elevated bamboo walkway.',
    desc: 'Obo-ob Mangrove Eco Park is a community-managed mangrove conservation area on the western side of Bantayan town. Visitors can explore the ecosystem by boat, kayak, or an elevated bamboo walkway that winds through the canopy. It is a genuinely peaceful experience — the mangrove filters sunlight into shifting green patterns and the water below is remarkably clear.',
    tips: 'Entrance fee is approximately ₱50. Kayak rental is available. Best in the morning when light filters through the canopy.'
  },
  /* ── MADRIDEJOS ────────────────────────────── */
  {
    id: 'kota-park',
    name: 'Kota Park Fort Ruins',
    tag: 'Madridejos',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kota%20Park%20Madridejos%20Bantayan.jpg',
    gradient: 'grad-madridejos',
    icon: 'fort',
    short: 'Spanish-era fort and watchtower ruins on the northern coast, with clear shallow water nearby.',
    desc: 'Kota Park in Madridejos holds the ruins of a Spanish colonial-era fort and watchtower, built to defend the island against Moro raids during the 16th century. The ruins sit directly on the coastline of the northern coast, with clear, shallow water nearby that is good for swimming. It is one of the most historically significant sites on the island.',
    tips: 'Pair with a visit to Lawis Bay which is nearby. Best in the late afternoon when the light is warm.'
  },
  {
    id: 'lawis-bay',
    name: 'Lawis Bay',
    tag: 'Madridejos',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Shellfish%20Picking%20at%20Lawis%20Bay%20Bantayan%20Island%20(2).jpg',
    gradient: 'grad-madridejos',
    icon: 'waves',
    short: 'Locals gather shellfish along the shallow tidal flats — a daily livelihood tradition of northern Bantayan.',
    desc: 'Lawis Bay is a wide tidal flat in Madridejos where local families gather shellfish during low tide as part of their daily livelihood. It is one of the most distinctly local scenes on the island — groups of women wading through shallow water, baskets in hand, against the backdrop of the open sea. A quiet and genuinely moving tableau of island life.',
    tips: 'Best visited at low tide in the early morning. Treat the area respectfully — this is people\'s daily livelihood, not a tourist performance.'
  },
  /* ── ISLAND HOPPING ────────────────────────── */
  {
    id: 'virgin-island',
    name: 'Virgin Island (Silion)',
    tag: 'Island Hopping',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Virgin%20Island%20Bantayan%20Cebu.jpg',
    gradient: 'grad-hopping',
    icon: 'island',
    short: 'Aquamarine water, white sand, coconut palms, and a cliff-jumping spot at the northwestern edge.',
    desc: 'Virgin Island, officially named Silion Island, is reached by a boat ride northwest from Bantayan town. It is known for aquamarine water, a wide beach of white sand, tall coconut palms, and a cliff-jumping spot at its northwestern edge. It is usually the highlight of any island-hopping day tour from Bantayan.',
    tips: 'Book a day boat tour from Santa Fe or Bantayan town. Bring food and water. Cliff-jump only at the designated spot and assess conditions carefully.'
  },
  {
    id: 'hilantagaan',
    name: 'Hilantagaan Island',
    tag: 'Island Hopping',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Hilantagaan%20Island%20Santa%20Fe%20Bantayan.jpg',
    gradient: 'grad-hopping',
    icon: 'island',
    short: 'Protected snorkeling area and a sandbar that emerges at low tide — 20 minutes by boat from Santa Fe.',
    desc: 'Hilantagaan Island is a larger islet off the eastern coast of Santa Fe, about a 20-minute boat ride away. It has a protected snorkeling area with healthy coral and clear water, and a sandbar on its southwestern beach that emerges dramatically at low tide. It is a standard stop on east-coast island hopping tours.',
    tips: 'Combine with other island stops on a day tour. Bring snorkeling gear if you have it, though rental is often available from boat operators.'
  },
  {
    id: 'botigues',
    name: 'Botigues Island',
    tag: 'Island Hopping',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/View%20of%20Botigues%20island.JPG',
    gradient: 'grad-hopping',
    icon: 'island',
    short: 'Small islet reachable by boat with clear, shallow water — a popular island-hopping stop.',
    desc: 'Botigues Island is a small islet near Bantayan, popular as a short stop on island-hopping day tours. The water is clear and shallow, good for wading and swimming, and the island is small enough to walk around in a short time. It is a low-key, relaxed stop that pairs well with other nearby islands.',
    tips: 'Usually included as part of a multi-island day tour package from Santa Fe or Bantayan town boat operators.'
  },
  {
    id: 'polo-polo',
    name: 'Polo-polo Island',
    tag: 'Island Hopping',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Polo%20polo%20island%20off%20Patao%2C%20Bantayan.JPG',
    gradient: 'grad-hopping',
    icon: 'island',
    short: 'Sandbar islet off Patao — one of several small islands on the western island-hopping circuit.',
    desc: 'Polo-polo Island is a sandbar-like islet located off the barangay of Patao on the western coast of Bantayan. It is one of several small islands and sandbars that locals and boatmen include in day tours of the western circuit. The water is calm and clear, and the island is peaceful and unhurried.',
    tips: 'Ask boat operators in Bantayan town or Patao about western circuit tours that include Polo-polo.'
  }
];

/* ── SVG icon path map ── */
const ICONS = {
  beach:  '<path d="M2.5 19.5 21 3"/><path d="M2.5 19.5C4 17 6.5 14 9.5 12m4-4C15 5 18 2.5 21 1"/><path d="M2 14.5s2-1.5 6-1.5 8 3 12 3-4 1.5-4 1.5"/>',
  waves:  '<path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>',
  cave:   '<path d="M22 12h-4"/><path d="M2 12h4"/><path d="M12 2v4"/><circle cx="12" cy="12" r="4"/><path d="m4.9 4.9 2.8 2.8"/><path d="m16.3 16.3 2.8 2.8"/><path d="m19.1 4.9-2.8 2.8"/><path d="m7.7 16.3-2.8 2.8"/>',
  church: '<rect x="9" y="3" width="6" height="5" rx="1"/><rect x="7" y="8" width="10" height="13" rx="1"/><path d="M12 3v5"/><path d="M10 5h4"/><line x1="9" y1="14" x2="15" y2="14"/><line x1="12" y1="11" x2="12" y2="17"/>',
  market: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>',
  nature: '<path d="M12 22V12"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/><path d="M12 12C12 7 8 4 4 2a14.5 14.5 0 0 1 8 10"/><path d="M12 12c0-5 4-8 8-10a14.5 14.5 0 0 0-8 10"/>',
  fort:   '<rect x="3" y="3" width="18" height="18" rx="2"/><rect x="7" y="1" width="3" height="4" rx="1"/><rect x="14" y="1" width="3" height="4" rx="1"/><line x1="12" y1="11" x2="12" y2="17"/><line x1="9" y1="14" x2="15" y2="14"/>',
  food:   '<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>',
  island: '<path d="M12 22C6.5 17 2 13.5 2 9a10 10 0 0 1 20 0c0 4.5-4.5 8-10 13z"/><circle cx="12" cy="9" r="3"/>'
};

/* ──────────────────────────────────────────────────────
   MAP PANEL DATA
────────────────────────────────────────────────────── */
const MAP_INFO = {
  madridejos: {
    name: 'Madridejos', color: '#e07a5f',
    desc: 'The northernmost municipality, known for the Spanish-era Kota Park fort ruins and the shellfish tidal flats of Lawis Bay. The quietest and most local of the three towns.',
    places: ['Kota Park Fort Ruins', 'Lawis Bay', 'Northern Coast Beaches', 'Bunakan Coastline']
  },
  bantayan: {
    name: 'Bantayan Town', color: '#1a7fa8',
    desc: 'The cultural and historical heart of the island. Home to the centuries-old Saints Peter and Paul Church, the public market, Obo-ob Mangrove Eco Park, and Tablayan Beach.',
    places: ['Saints Peter and Paul Church', 'Downtown Public Market', 'Tablayan Beach', 'Obo-ob Mangrove Eco Park']
  },
  santafe: {
    name: 'Santa Fe', color: '#0d9488',
    desc: 'The tourism gateway and port of entry. Most resorts, beaches, and restaurants are here. Kota Beach, Sugar Beach, Ogtong Cave, and MJ Square are all in Santa Fe.',
    places: ['Kota Beach', 'Sugar Beach', 'Ogtong Cave Pool', 'Paradise Beach', 'Marine Sanctuary', 'MJ Square', 'Santa Fe Port', 'Bantayan Airport']
  }
};

/* ──────────────────────────────────────────────────────
   AUDIO — Web Audio API bell ding
────────────────────────────────────────────────────── */
function playDing() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    [[880, 0], [1100, 0.13]].forEach(([freq, delay]) => {
      const osc  = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + delay);
      gain.gain.setValueAtTime(0, ctx.currentTime + delay);
      gain.gain.linearRampToValueAtTime(0.28, ctx.currentTime + delay + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + 0.5);
      osc.connect(gain); gain.connect(ctx.destination);
      osc.start(ctx.currentTime + delay);
      osc.stop(ctx.currentTime + delay + 0.55);
    });
  } catch (_) {}
}

/* ──────────────────────────────────────────────────────
   TOAST NOTIFICATIONS
────────────────────────────────────────────────────── */
const toastContainer = document.getElementById('toastContainer');

function showToast(title, subtitle = '') {
  const t = document.createElement('div');
  t.className = 'toast';
  t.innerHTML = `
    <div class="toast-icon">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    </div>
    <div class="toast-text">
      <div class="toast-title">${title}</div>
      ${subtitle ? `<div class="toast-sub">${subtitle}</div>` : ''}
    </div>`;
  toastContainer.appendChild(t);
  playDing();
  setTimeout(() => {
    t.classList.add('hiding');
    setTimeout(() => t.remove(), 340);
  }, 3600);
}

/* ──────────────────────────────────────────────────────
   SPLASH
────────────────────────────────────────────────────── */
const splash = document.getElementById('splash');
const app    = document.getElementById('app');

function dismissSplash() {
  splash.classList.add('hiding');
  setTimeout(() => {
    splash.classList.add('gone');
    app.classList.add('visible');
    app.setAttribute('aria-hidden', 'false');
  }, 900);
}
setTimeout(dismissSplash, 3500);

/* ──────────────────────────────────────────────────────
   TAB SWITCHING
────────────────────────────────────────────────────── */
const bnavItems = document.querySelectorAll('.bnav-item[data-tab]');
const panels    = document.querySelectorAll('.tab-panel');
const MORE_TABS = ['food','compass','budget','guide','credits']; // live in "More" drawer

function switchTab(tabName) {
  // Deactivate all panels + bnav
  panels.forEach(p => p.classList.remove('active'));
  bnavItems.forEach(b => b.classList.remove('active'));

  // Activate panel
  const panel = document.getElementById('tab-' + tabName);
  if (panel) panel.classList.add('active');

  // Activate bnav item (only for bottom-nav tabs)
  bnavItems.forEach(b => {
    if (b.dataset.tab === tabName) b.classList.add('active');
  });

  closeMoreDrawer();
  if (tabName === 'compass') initCompassTab();
  if (tabName === 'trips')   renderItinerary();

  // Scroll to top of content area
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Bottom nav tab clicks
bnavItems.forEach(btn => {
  btn.addEventListener('click', () => switchTab(btn.dataset.tab));
});

// Top bar "My Trip" button
document.getElementById('topbarTripsBtn').addEventListener('click', () => switchTab('trips'));

/* ──────────────────────────────────────────────────────
   MORE DRAWER
────────────────────────────────────────────────────── */
const moreDrawer  = document.getElementById('moreDrawer');
const moreOverlay = document.getElementById('moreOverlay');
const moreBtnNav  = document.getElementById('moreBtnNav');

function openMoreDrawer(directTab) {
  if (directTab) {
    switchTab(directTab);
    return;
  }
  moreDrawer.classList.add('open');
  moreOverlay.classList.add('open');
  moreDrawer.setAttribute('aria-hidden', 'false');
}

function closeMoreDrawer() {
  moreDrawer.classList.remove('open');
  moreOverlay.classList.remove('open');
  moreDrawer.setAttribute('aria-hidden', 'true');
}

moreBtnNav.addEventListener('click', () => {
  if (moreDrawer.classList.contains('open')) { closeMoreDrawer(); return; }
  openMoreDrawer();
});
moreOverlay.addEventListener('click', closeMoreDrawer);

// More drawer tile clicks
document.querySelectorAll('.more-tile').forEach(tile => {
  tile.addEventListener('click', () => switchTab(tile.dataset.tab));
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeMoreDrawer(); closeModal(); closeMapPanel(); }
});

/* ──────────────────────────────────────────────────────
   EXPLORE — Interactive SVG Map
────────────────────────────────────────────────────── */
const mapPanel       = document.getElementById('mapPanel');
const mapPanelInner  = document.getElementById('mapPanelInner');
const mapPanelClose  = document.getElementById('mapPanelClose');

function openMapPanel(zoneKey) {
  const info = MAP_INFO[zoneKey];
  if (!info) return;
  mapPanelInner.innerHTML = `
    <p class="eyebrow" style="color:${info.color}">${info.name}</p>
    <h3>${info.name}</h3>
    <p>${info.desc}</p>
    <ul>${info.places.map(p => `<li>${p}</li>`).join('')}</ul>
    <button class="btn-primary" style="margin-top:1.25rem;width:100%;justify-content:center"
      onclick="switchTab('places')">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
      Explore All Places
    </button>`;
  mapPanel.classList.add('open');
  document.querySelectorAll('.map-zone').forEach(z => z.classList.remove('active'));
  const zone = document.getElementById('zone-' + zoneKey);
  if (zone) zone.classList.add('active');
}

function closeMapPanel() {
  mapPanel.classList.remove('open');
  document.querySelectorAll('.map-zone').forEach(z => z.classList.remove('active'));
}

mapPanelClose.addEventListener('click', closeMapPanel);
document.getElementById('zone-madridejos').addEventListener('click', () => openMapPanel('madridejos'));
document.getElementById('zone-bantayan').addEventListener('click',   () => openMapPanel('bantayan'));
document.getElementById('zone-santafe').addEventListener('click',    () => openMapPanel('santafe'));

/* ──────────────────────────────────────────────────────
   PLACES — render grid + filter
────────────────────────────────────────────────────── */
const placesGrid = document.getElementById('placesGrid');

function makePlaceIcon(place) {
  const paths = ICONS[place.icon] || ICONS.island;
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">${paths}</svg>`;
}

function renderPlaces(filter = 'all') {
  const list = filter === 'all' ? PLACES : PLACES.filter(p => p.tag === filter);
  placesGrid.innerHTML = '';
  list.forEach(place => {
    const tagClass = {
      'Santa Fe':     '',
      'Bantayan Town':'tag-bantayan',
      'Madridejos':   'tag-madridejos',
      'Island Hopping':'tag-hopping'
    }[place.tag] || '';

    const card = document.createElement('article');
    card.className = 'place-card';
    card.innerHTML = `
      <div class="pc-img-wrap"></div>
      <div class="pc-body">
        <h3>${place.name}</h3>
        <p>${place.short}</p>
        <span class="place-tag ${tagClass}">${place.tag}</span>
      </div>`;

    // Image with gradient fallback
    const wrap = card.querySelector('.pc-img-wrap');
    if (place.img) {
      const imgDiv = document.createElement('div');
      imgDiv.className = 'pc-img';
      const img = document.createElement('img');
      img.src = place.img;
      img.alt = place.name;
      img.loading = 'lazy';
      img.onerror = () => {
        // Fallback to gradient on 404
        imgDiv.className = `pc-gradient ${place.gradient}`;
        imgDiv.innerHTML = makePlaceIcon(place);
      };
      imgDiv.appendChild(img);
      wrap.appendChild(imgDiv);
    } else {
      const grad = document.createElement('div');
      grad.className = `pc-gradient ${place.gradient}`;
      grad.innerHTML = makePlaceIcon(place);
      wrap.appendChild(grad);
    }

    card.addEventListener('click', () => openModal(place));
    placesGrid.appendChild(card);
  });
}

// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderPlaces(btn.dataset.filter);
  });
});

renderPlaces();

/* ──────────────────────────────────────────────────────
   PLACE MODAL
────────────────────────────────────────────────────── */
const modalOverlay = document.getElementById('modalOverlay');
const modalInner   = document.getElementById('modalInner');
const modalClose   = document.getElementById('modalClose');
let   currentModalPlace = null;

function closeModal() {
  modalOverlay.classList.remove('open');
  modalOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });

/* ──────────────────────────────────────────────────────
   ACCORDION
────────────────────────────────────────────────────── */
function initAccordion(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.querySelectorAll('.acc-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const body   = trigger.nextElementSibling;
      const isOpen = trigger.getAttribute('aria-expanded') === 'true';
      // Close all
      el.querySelectorAll('.acc-trigger').forEach(t => {
        t.setAttribute('aria-expanded', 'false');
        t.nextElementSibling.classList.remove('open');
      });
      // Toggle clicked
      if (!isOpen) {
        trigger.setAttribute('aria-expanded', 'true');
        body.classList.add('open');
      }
    });
  });
}
initAccordion('tipsAccordion');
initAccordion('guideAccordion');

/* ──────────────────────────────────────────────────────
   COMPASS
────────────────────────────────────────────────────── */
const compassPermBox = document.getElementById('compassPermission');
const compassPermBtn = document.getElementById('compassPermBtn');
const compassHint    = document.getElementById('compassHint');
const compassHeading = document.getElementById('compassHeading');
const compassDir     = document.getElementById('compassDir');
const needleGroup    = document.getElementById('needleGroup');
let compassActive    = false;

function headingToDir(deg) {
  const dirs = ['N','NNE','NE','ENE','E','ESE','SE','SSE','S','SSW','SW','WSW','W','WNW','NW','NNW'];
  return dirs[Math.round(((deg % 360) + 360) % 360 / 22.5) % 16];
}

function handleOrientation(e) {
  let h = null;
  if (e.webkitCompassHeading != null) { h = e.webkitCompassHeading; }
  else if (e.alpha != null) { h = (360 - e.alpha) % 360; }
  if (h == null) return;
  h = ((h % 360) + 360) % 360;
  compassHeading.textContent = Math.round(h) + '°';
  compassDir.textContent = headingToDir(h);
  needleGroup.style.transform = `rotate(${-h}deg)`;
}

function startCompass() {
  compassActive = true;
  compassPermBox.style.display = 'none';
  compassDir.textContent = 'Calibrating...';
  window.addEventListener('deviceorientationabsolute', handleOrientation, true);
  window.addEventListener('deviceorientation', handleOrientation, true);
}

function initCompassTab() {
  if (compassActive) return;
  if (!window.DeviceOrientationEvent) {
    compassPermBox.style.display = 'none';
    compassDir.textContent = 'Compass requires a mobile device';
    compassHeading.textContent = '---';
    return;
  }
  if (typeof DeviceOrientationEvent.requestPermission === 'function') {
    compassPermBtn.addEventListener('click', () => {
      DeviceOrientationEvent.requestPermission().then(state => {
        if (state === 'granted') { startCompass(); }
        else { compassHint.textContent = 'Permission denied. Enable in Settings > Safari > Motion & Orientation Access.'; }
      }).catch(() => { compassHint.textContent = 'Permission request failed.'; });
    });
  } else {
    startCompass();
  }
}

/* ──────────────────────────────────────────────────────
   PLANNER / TRIPS TAB
────────────────────────────────────────────────────── */
/* Itinerary storage v4: unlimited days.
   Shape: { days: [1,2,3,...], items: { "1": [...], "2": [...] } }
   Migrates transparently from the old fixed-3-day v3 shape if found. */
const STORAGE_KEY_V4 = 'bantayan-itinerary-v4';
const STORAGE_KEY_V3 = 'bantayan-itinerary-v3';
let activeDay = 1;

function defaultItinerary() {
  return { days: [1], items: { '1': [] } };
}

function migrateFromV3() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_V3);
    if (!raw) return null;
    const old = JSON.parse(raw);
    const days = Object.keys(old).map(Number).filter(n => !isNaN(n)).sort((a, b) => a - b);
    if (days.length === 0) return null;
    const items = {};
    days.forEach(d => { items[String(d)] = old[d] || []; });
    return { days, items };
  } catch { return null; }
}

function loadItinerary() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_V4);
    if (raw) {
      const data = JSON.parse(raw);
      if (data && Array.isArray(data.days) && data.items) return data;
    }
    const migrated = migrateFromV3();
    if (migrated) { saveItinerary(migrated); return migrated; }
    return defaultItinerary();
  } catch { return defaultItinerary(); }
}

function saveItinerary(data) {
  localStorage.setItem(STORAGE_KEY_V4, JSON.stringify(data));
}

function totalTripCount() {
  const d = loadItinerary();
  return d.days.reduce((sum, day) => sum + (d.items[String(day)] || []).length, 0);
}

function updateBadges() {
  const count = totalTripCount();
  const str = count > 0 ? String(count) : '';
  const bnavBadge   = document.getElementById('bnavBadge');
  const tripsBadge  = document.getElementById('tripsBadge');
  if (bnavBadge)  bnavBadge.textContent  = str;
  if (tripsBadge) tripsBadge.textContent = str;
}

function renderDaySelectOptions() {
  const data = loadItinerary();
  const daySelect = document.getElementById('daySelect');
  if (!daySelect) return;
  daySelect.innerHTML = data.days.map(d => `<option value="${d}">Day ${d}</option>`).join('');
  daySelect.value = String(data.days.includes(activeDay) ? activeDay : data.days[0]);
}

function renderDayTabs() {
  const data = loadItinerary();
  const wrap = document.getElementById('dayTabs');
  if (!wrap) return;
  wrap.innerHTML = data.days.map(day => `
    <button class="day-tab${day === activeDay ? ' active' : ''}" data-day="${day}">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
      Day ${day}
    </button>`).join('');
  wrap.querySelectorAll('.day-tab').forEach(t => {
    t.addEventListener('click', () => switchPlannerDay(parseInt(t.dataset.day)));
  });
}

function renderItinerary() {
  const data = loadItinerary();
  if (!data.days.includes(activeDay)) activeDay = data.days[0] || 1;
  renderDayTabs();
  renderDaySelectOptions();

  const container = document.getElementById('itineraryDays');
  if (!container) return;

  container.innerHTML = data.days.map(day => {
    const items = data.items[String(day)] || [];
    const display = day === activeDay ? 'block' : 'none';
    let inner;
    if (items.length === 0) {
      inner = `
        <div class="itinerary-empty">
          <div class="itinerary-empty-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
              <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
            </svg>
          </div>
          No destinations added to Day ${day} yet.<br>
          Choose a place above and tap <strong>Add to Itinerary</strong>.
        </div>`;
    } else {
      inner = items.map((item, idx) => `
        <div class="itinerary-item">
          <div class="item-num">${idx + 1}</div>
          <div class="item-info">
            <strong>${item.name}</strong>
            <span>${item.tag}</span>
          </div>
          <button class="item-remove" data-day="${day}" data-idx="${idx}" aria-label="Remove ${item.name}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="3 6 5 6 21 6"/>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/>
              <path d="M10 11v6"/><path d="M14 11v6"/>
              <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
            </svg>
          </button>
        </div>`).join('');
    }
    return `<div id="day-${day}" class="itinerary-day" style="display:${display}">${inner}</div>`;
  }).join('');

  container.querySelectorAll('.item-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      const d = parseInt(btn.dataset.day);
      const i = parseInt(btn.dataset.idx);
      const data = loadItinerary();
      data.items[String(d)].splice(i, 1);
      saveItinerary(data);
      renderItinerary();
      updateBadges();
      showToast('Destination removed', `Day ${d} updated`);
    });
  });

  updateBadges();
}

function addToTrip(name, tag, day) {
  const data = loadItinerary();
  if (!data.days.includes(day)) { data.days.push(day); data.days.sort((a, b) => a - b); }
  if (!data.items[String(day)]) data.items[String(day)] = [];
  if (data.items[String(day)].some(i => i.name === name)) {
    showToast(`Already in Day ${day}`, `${name} is already in your itinerary`);
    return false;
  }
  data.items[String(day)].push({ name, tag });
  saveItinerary(data);
  switchPlannerDay(day);
  renderItinerary();
  return true;
}

function switchPlannerDay(day) {
  activeDay = day;
  document.querySelectorAll('.day-tab').forEach(t => {
    t.classList.toggle('active', parseInt(t.dataset.day) === day);
  });
  document.querySelectorAll('.itinerary-day').forEach(el => {
    const d = parseInt(el.id.replace('day-', ''));
    el.style.display = d === day ? 'block' : 'none';
  });
  const daySelect = document.getElementById('daySelect');
  if (daySelect) daySelect.value = String(day);
}

function addDay() {
  const data = loadItinerary();
  const nextDay = data.days.length ? Math.max(...data.days) + 1 : 1;
  data.days.push(nextDay);
  data.items[String(nextDay)] = [];
  saveItinerary(data);
  activeDay = nextDay;
  renderItinerary();
  showToast(`Day ${nextDay} added`, 'Start planning your next day');
}

function removeLastDay() {
  const data = loadItinerary();
  if (data.days.length <= 1) {
    showToast('At least one day is required', 'Use "Clear All Days" to reset instead');
    return;
  }
  const lastDay = Math.max(...data.days);
  if (!confirm(`Remove Day ${lastDay} and its destinations?`)) return;
  data.days = data.days.filter(d => d !== lastDay);
  delete data.items[String(lastDay)];
  saveItinerary(data);
  if (activeDay === lastDay) activeDay = Math.max(...data.days);
  renderItinerary();
  showToast(`Day ${lastDay} removed`, '');
}

document.getElementById('addDayBtn').addEventListener('click', addDay);
document.getElementById('removeDayBtn').addEventListener('click', removeLastDay);

// Add button
document.getElementById('addTripBtn').addEventListener('click', () => {
  const sel = document.getElementById('placeSelect');
  const day = parseInt(document.getElementById('daySelect').value);
  if (!sel.value) { showToast('Choose a destination first', 'Select a place from the dropdown'); return; }
  const [name, tag] = sel.value.split('|');
  const added = addToTrip(name, tag, day);
  if (added) { showToast(`${name} added to Day ${day}`, tag); sel.value = ''; }
});

// Clear all
document.getElementById('clearAllBtn').addEventListener('click', () => {
  if (!confirm('Clear all days from your itinerary?')) return;
  activeDay = 1;
  saveItinerary(defaultItinerary());
  renderItinerary();
  showToast('Itinerary cleared', 'All days have been reset');
});

// Also wire up place modal to let user pick day
function openModal(place) {
  currentModalPlace = place;
  const paths = ICONS[place.icon] || ICONS.island;

  let heroHtml = '';
  if (place.img) {
    const escapedSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">${paths}</svg>`;
    heroHtml = `
      <div class="modal-hero">
        <img src="${place.img}" alt="${place.name}" loading="lazy"
          onerror="this.closest('.modal-hero').className='modal-hero-gradient ${place.gradient}';this.closest('.modal-hero').innerHTML='${escapedSvg.replace(/'/g, "&#39;").replace(/"/g, '&quot;')}'">
      </div>`;
  } else {
    heroHtml = `<div class="modal-hero-gradient ${place.gradient}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">${paths}</svg></div>`;
  }

  modalInner.innerHTML = `
    ${heroHtml}
    <div class="modal-body">
      <p class="eyebrow">${place.tag}</p>
      <h2>${place.name}</h2>
      <p>${place.desc}</p>
      ${place.tips ? `<div class="modal-tip">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        <span><strong>Tip:</strong> ${place.tips}</span>
      </div>` : ''}
      <div style="display:flex;align-items:center;gap:.6rem;margin-top:.25rem;flex-wrap:wrap">
        <select id="modalDayPick" style="padding:.5rem .75rem;border:1.5px solid #cbd9e4;border-radius:8px;font-size:14px;background:#eef5fa;flex-shrink:0">
          ${loadItinerary().days.map(d => `<option value="${d}">Day ${d}</option>`).join('')}
        </select>
        <button class="modal-add-btn" id="modalAddBtn" style="flex:1">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>
          Add to Trip
        </button>
      </div>
    </div>`;

  document.getElementById('modalAddBtn').addEventListener('click', () => {
    const day = parseInt(document.getElementById('modalDayPick').value);
    const added = addToTrip(place.name, place.tag, day);
    if (added) {
      closeModal();
      showToast(`${place.name} added to Day ${day}`, place.tag);
    }
  });

  modalOverlay.classList.add('open');
  modalOverlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

/* ──────────────────────────────────────────────────────
   BUDGET ESTIMATOR
────────────────────────────────────────────────────── */
function calculateBudget() {
  const days   = Math.max(1, parseInt(document.getElementById('budgetDays').value)   || 1);
  const people = Math.max(1, parseInt(document.getElementById('budgetPeople').value)  || 1);
  const ppd    = parseInt(document.getElementById('budgetStyle').value, 10);
  const daily  = days * people * ppd;
  const ferry  = people * 300 * 2;
  const bike   = days * 425;
  const styles = { 700: 'Budget', 1500: 'Mid-Range', 3000: 'Comfort' };

  document.getElementById('budgetValue').textContent = '₱' + daily.toLocaleString('en-PH');
  document.getElementById('budgetBreakdown').innerHTML = `
    <div class="breakdown-row"><span>${styles[ppd] || ''} daily budget</span><span>₱${ppd.toLocaleString()}/person/day</span></div>
    <div class="breakdown-row"><span>${days} day${days>1?'s':''} × ${people} person${people>1?'s':''}</span><span>₱${daily.toLocaleString('en-PH')}</span></div>
    <div class="breakdown-row"><span>+ Ferry round-trip (est.)</span><span>₱${ferry.toLocaleString('en-PH')}</span></div>
    <div class="breakdown-row"><span>+ Motorbike rental (est.)</span><span>₱${bike.toLocaleString('en-PH')}</span></div>
    <div class="breakdown-row" style="border-top:1px solid rgba(255,255,255,0.18);padding-top:.35rem;margin-top:.35rem">
      <span>Full estimated trip</span>
      <span>₱${(daily + ferry + bike).toLocaleString('en-PH')}</span>
    </div>`;
}

document.getElementById('calcBtn').addEventListener('click', calculateBudget);
['budgetDays','budgetPeople','budgetStyle'].forEach(id => {
  const el = document.getElementById(id);
  if (el) { el.addEventListener('change', calculateBudget); el.addEventListener('input', calculateBudget); }
});
calculateBudget();

/* ──────────────────────────────────────────────────────
   INIT
────────────────────────────────────────────────────── */
renderItinerary();                       // load any saved trips (unlimited days)
switchPlannerDay(loadItinerary().days[0] || 1); // show first day by default
updateBadges();

// Navbar scroll tint
const topbar = document.getElementById('topbar');
window.addEventListener('scroll', () => {
  topbar.style.background = window.scrollY > 20
    ? 'rgba(7,36,59,0.99)'
    : 'rgba(7,36,59,0.97)';
}, { passive: true });
