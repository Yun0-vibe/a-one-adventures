export const SITE = {
  brand: 'A-One Adventures',
  tagline: 'Pokhara-based private Scorpio tours across Nepal',
  phone: '+977 9846020030',
  phoneHref: 'tel:+9779846020030',
  whatsapp: 'https://wa.me/9779846020030',
  location: 'Lakeside, Pokhara, Nepal',
  driver: 'Ganesh Prasad Subedi',
  email: 'hello.aoneadventures@gmail.com',
};

export const VEHICLE = {
  name: 'Mahindra Scorpio S5+',
  year: '2019',
  seats: '7 + 1 driver (8 seater)',
  drive: '4WD · High clearance · Mountain-tested',
  plate: 'To be updated',
};

export type Pkg = {
  slug: string;
  title: string;
  days: string;
  nights: string;
  price: string;
  priceNote: string;
  tag: string;
  image: string;
  summary: string;
  highlights: string[];
  itinerary: { day: string; title: string; detail: string }[];
  includes: string[];
};

export const PACKAGES: Pkg[] = [
  {
    slug: 'muktinath-darshan',
    title: 'Muktinath Darshan',
    days: '3 Days',
    nights: '2 Nights',
    price: 'NPR 55,000 – 65,000',
    priceNote: 'full private jeep (up to 7 pax) · fuel + driver included',
    tag: 'Most Booked',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600&auto=format&fit=crop',
    summary:
      'Pokhara → Beni → Tatopani → Marpha → Jomsom → Kagbeni → Muktinath (3,710m) and back. Sacred 108 taps, eternal flame, Dhumba Lake and apple-village stops.',
    highlights: ['Muktinath Temple darshan', 'Kagbeni & Jomsom bazaar', 'Marpha apple village', 'Rupse waterfall + Tatopani hot spring'],
    itinerary: [
      { day: 'Day 1', title: 'Pokhara → Kalopani / Jomsom', detail: 'Early 6 AM pickup. Drive via Beni, Rupse waterfall, Tatopani. Overnight Jomsom (2,720m). 7–8 hrs.' },
      { day: 'Day 2', title: 'Jomsom → Kagbeni → Muktinath', detail: 'Temple darshan at 108 taps + Jwala Mai. Dhumba Lake, Jharkot monastery. Overnight Jomsom/Muktinath.' },
      { day: 'Day 3', title: 'Jomsom → Pokhara', detail: 'Descend Kali Gandaki gorge, Marpha stop for apple pie & brandy tasting. Arrive Pokhara by evening.' },
    ],
    includes: ['Private Scorpio + mountain driver', 'Fuel, tolls & parking', 'Hotel pickup & drop', 'ACAP permit assistance', 'First-aid + oxygen backup'],
  },
  {
    slug: 'lower-mustang-explorer',
    title: 'Lower Mustang Explorer',
    days: '4 Days',
    nights: '3 Nights',
    price: 'NPR 68,000 – 85,000',
    priceNote: 'full private jeep · flexible stops',
    tag: 'Family Favorite',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop',
    summary:
      'Slow-travel version of Mustang. Extra night in Marpha/Kalopani, sunrise over Nilgiri, monastery walks and hot-spring evening at Tatopani.',
    highlights: ['2 sunrises in Mustang', 'Marpha heritage walk', 'Tatopani natural hot spring', 'Kali Gandaki — world\'s deepest gorge'],
    itinerary: [
      { day: 'Day 1', title: 'Pokhara → Tatopani → Kalopani', detail: 'Scenic gorge drive, Rupse falls, evening hot-spring bath. Overnight Kalopani.' },
      { day: 'Day 2', title: 'Kalopani → Marpha → Jomsom', detail: 'Apple orchards, white-washed lanes, monastery visit. Overnight Jomsom.' },
      { day: 'Day 3', title: 'Muktinath full day', detail: 'Unhurried darshan + Kagbeni red monastery + Dhumba Lake. Overnight Jomsom.' },
      { day: 'Day 4', title: 'Return to Pokhara', detail: 'Souvenir stop in Marpha, lunch at Beni. Evening lakeside drop.' },
    ],
    includes: ['Private Scorpio + driver', 'Fuel & all road taxes', 'Daily pickup coordination', 'Sightseeing detours included', 'Driver stay & food covered by us'],
  },
  {
    slug: 'upper-mustang-lo-manthang',
    title: 'Upper Mustang · Lo Manthang',
    days: '6 Days',
    nights: '5 Nights',
    price: 'On request',
    priceNote: 'permit + guide arranged · Scorpio to Kagbeni, 4WD onward',
    tag: 'Forbidden Kingdom',
    image: 'https://images.unsplash.com/photo-1573398643956-2b9e6ade3456?q=80&w=1600&auto=format&fit=crop',
    summary:
      'Beyond Kagbeni into the rain-shadow desert: Chele, Ghami, Tsarang and the walled city of Lo Manthang (3,840m). Sky caves of Chhoser, 15th-century gompas.',
    highlights: ['Lo Manthang walled city', 'Chhoser sky caves (3,000 yrs)', 'Ghar Gompa & longest mani wall', 'Restricted-area handling'],
    itinerary: [
      { day: 'Day 1–2', title: 'Pokhara → Kagbeni via Muktinath', detail: 'Same as Muktinath route. Permits checked at Kagbeni check-post.' },
      { day: 'Day 3', title: 'Kagbeni → Lo Manthang', detail: 'Chele, Samar, Ghami, Tsarang. Red cliffs & desert plateaus. 5–6 hrs.' },
      { day: 'Day 4', title: 'Lo Manthang exploration', detail: 'Jampa, Thubchen & Chode gompas, royal palace, Chhoser caves.' },
      { day: 'Day 5–6', title: 'Return via Jomsom → Pokhara', detail: 'Retrace with Muktinath blessing stop. Overnight Jomsom, then Pokhara.' },
    ],
    includes: ['Restricted permit + ACAP assistance', 'Licensed local guide (mandatory)', 'Full 4WD logistics', 'Twin-share lodge planning', 'Oxygen + first-aid kit'],
  },
  {
    slug: 'pathivara-darshan',
    title: 'Pathivara Devi Darshan',
    days: '5–6 Days',
    nights: '4–5 Nights',
    price: 'On request',
    priceNote: 'long-haul east Nepal · custom quote by group size',
    tag: 'Shakti Peeth',
    image: 'https://images.unsplash.com/photo-1585938389612-a552a28d6914?q=80&w=1600&auto=format&fit=crop',
    summary:
      'Pokhara → Kathmandu → Taplejung → Pathivara (3,794m). One of Nepal\'s most powerful Shakti Peeths. Planned with rest halts for elders and family groups.',
    highlights: ['Pathivara temple sunrise darshan', 'Kanyam & Ilam tea gardens en route', 'Elder-friendly pacing', 'Dharan / Bhedetar halt options'],
    itinerary: [
      { day: 'Day 1', title: 'Pokhara → Kathmandu / Birtamode', detail: 'Long-haul highway drive with meal halts. Overnight halt.' },
      { day: 'Day 2', title: '→ Taplejung / Suketar', detail: 'Climb via Ilam, Kanyam tea estate photo stops.' },
      { day: 'Day 3', title: 'Pathivara darshan', detail: 'Jeep to Kaflepati + 2–3 hr walk to temple (pony/palanquin options).' },
      { day: 'Day 4–6', title: 'Return to Pokhara', detail: 'Same route back with flexible night halts.' },
    ],
    includes: ['Long-haul Scorpio + 2 drivers rotation', 'Route & hotel planning', 'Temple timing guidance', 'Full fuel & tolls', '24/7 phone support'],
  },
  {
    slug: 'all-nepal-tour',
    title: 'All Nepal Circuit',
    days: '8–10 Days',
    nights: '7–9 Nights',
    price: 'On request',
    priceNote: 'fully custom · Kathmandu, Chitwan, Lumbini, Pokhara, Mustang',
    tag: 'Best Value',
    image: 'https://images.unsplash.com/photo-1558799401-1dcba79834c2?q=80&w=1600&auto=format&fit=crop',
    summary:
      'The complete first-timer loop: Kathmandu heritage → Manakamana → Pokhara → Muktinath → Chitwan safari → Lumbini. One jeep, one driver, zero bus hassle.',
    highlights: ['Kathmandu Durbar + Swayambhu', 'Pokhara lakeside + Sarangkot', 'Muktinath or Jomsom leg', 'Chitwan safari + Lumbini birthplace'],
    itinerary: [
      { day: 'Day 1–2', title: 'Kathmandu + Manakamana', detail: 'Pashupati, Boudha, Bhaktapur. Cable-car option to Manakamana.' },
      { day: 'Day 3–5', title: 'Pokhara + Mustang leg', detail: 'Lakeside, Davis Falls, then Muktinath 2N/3D loop.' },
      { day: 'Day 6–7', title: 'Chitwan safari', detail: 'Tharu culture, jeep + canoe safari, sunset over Rapti.' },
      { day: 'Day 8–10', title: 'Lumbini → return', detail: 'Maya Devi temple, Ashoka pillar. Drop Kathmandu or Pokhara.' },
    ],
    includes: ['Single jeep throughout', 'Same trusted driver', 'Hotel booking help', 'Permit handling', 'Flexible day-wise plan'],
  },
  {
    slug: 'pokhara-day-charter',
    title: 'Pokhara Day Charter',
    days: '1 Day',
    nights: '—',
    price: 'NPR 9,000 – 15,000',
    priceNote: 'per day with driver + fuel as per km',
    tag: 'Hourly / Daily',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1600&auto=format&fit=crop',
    summary:
      'Sarangkot sunrise, Ghandruk, Begnas, Rupa, Manakamana day trip or airport transfers. Clean Scorpio at your doorstep, pay by day or km.',
    highlights: ['Sarangkot sunrise run', 'Ghandruk / Australian Camp', 'Airport pickup & drop', 'Wedding & event hire'],
    itinerary: [
      { day: 'AM', title: 'Sunrise / sightseeing', detail: 'Sarangkot 5 AM, Tal Barahi, Davis Falls, World Peace Pagoda.' },
      { day: 'PM', title: 'Hill / lake circuit', detail: 'Begnas Lake, Rupa, Tibetan camp. Evening lakeside drop.' },
    ],
    includes: ['Clean 8-seater Scorpio', 'Experienced city + hill driver', 'Transparent per-km billing', 'Child-seat on request'],
  },
];

export const ROUTES = [
  { name: 'Pokhara → Muktinath', dist: '168 km', time: '6–8 hrs', note: 'Beni · Tatopani · Marpha · Jomsom · Kagbeni' },
  { name: 'Pokhara → Lo Manthang', dist: '245 km', time: '2 days', note: 'Restricted permit beyond Kagbeni' },
  { name: 'Pokhara → Ghandruk', dist: '55 km', time: '3–4 hrs', note: 'Annapurna foothills trailhead' },
  { name: 'Pokhara → Kathmandu', dist: '200 km', time: '5–6 hrs', note: 'Prithvi Highway, Manakamana option' },
  { name: 'Kathmandu → Pathivara', dist: '~600 km', time: '2 days', note: 'Via Birtamode · Ilam · Taplejung' },
  { name: 'Pokhara → Chitwan', dist: '145 km', time: '4–5 hrs', note: 'Safari + Lumbini extensions' },
];
