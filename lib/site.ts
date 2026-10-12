export const SITE = {
  brand: 'A-One Adventures',
  tagline: 'Pokhara based 4x4 Scorpio tours across Nepal',
  phone: '+977 9846020030',
  phoneHref: 'tel:+9779846020030',
  location: 'Lakeside, Pokhara, Nepal',
  driver: 'Ganesh Prasad Subedi',
  email: 'hello.aoneadventures@gmail.com',
};

export const VEHICLE = {
  name: 'Mahindra Scorpio S5+',
  year: '2019',
  seats: '7 plus driver (8 seater)',
  drive: '4WD, high clearance, mountain tested',
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
    price: 'NPR 55,000 to 70,000',
    priceNote: 'full Scorpio (up to 7 guests), fuel and driver included',
    tag: 'Most Reserved',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600&auto=format&fit=crop',
    summary:
      'Pokhara to Muktinath (3,710m) and back via Beni, Tatopani, Marpha, Jomsom and Kagbeni. Sacred 108 taps, eternal flame, Dhumba Lake and apple village stops.',
    highlights: ['Muktinath Temple darshan', 'Kagbeni and Jomsom bazaar', 'Marpha apple village', 'Rupse waterfall plus Tatopani hot spring'],
    itinerary: [
      { day: 'Day 1', title: 'Pokhara to Kalopani / Jomsom', detail: 'Early 6 AM pickup. Drive via Beni, Rupse waterfall and Tatopani. Overnight Jomsom (2,720m). 7 to 8 hrs.' },
      { day: 'Day 2', title: 'Jomsom to Kagbeni to Muktinath', detail: 'Temple darshan at 108 taps plus Jwala Mai. Dhumba Lake and Jharkot monastery. Overnight Jomsom or Muktinath.' },
      { day: 'Day 3', title: 'Jomsom to Pokhara', detail: 'Descend the Kali Gandaki gorge, Marpha stop for apple pie. Arrive Pokhara by evening.' },
    ],
    includes: ['4x4 Scorpio plus mountain driver', 'Fuel, tolls and parking', 'Hotel pickup and drop', 'ACAP permit assistance', 'First aid plus oxygen backup'],
  },
  {
    slug: 'lower-mustang-explorer',
    title: 'Lower Mustang Explorer',
    days: '4 Days',
    nights: '3 Nights',
    price: 'NPR 68,000 to 85,000',
    priceNote: 'full Scorpio, flexible stops',
    tag: 'Family Favorite',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop',
    summary:
      'Slow travel version of Mustang. Extra night in Marpha and Kalopani, sunrise over Nilgiri, monastery walks and hot spring evening at Tatopani.',
    highlights: ['Two sunrises in Mustang', 'Marpha heritage walk', 'Tatopani natural hot spring', 'Kali Gandaki gorge views'],
    itinerary: [
      { day: 'Day 1', title: 'Pokhara to Tatopani to Kalopani', detail: 'Scenic gorge drive, Rupse falls, evening hot spring bath. Overnight Kalopani.' },
      { day: 'Day 2', title: 'Kalopani to Marpha to Jomsom', detail: 'Apple orchards, white washed lanes, monastery visit. Overnight Jomsom.' },
      { day: 'Day 3', title: 'Muktinath full day', detail: 'Unhurried darshan plus Kagbeni red monastery plus Dhumba Lake. Overnight Jomsom.' },
      { day: 'Day 4', title: 'Return to Pokhara', detail: 'Souvenir stop in Marpha, lunch at Beni. Evening lakeside drop.' },
    ],
    includes: ['4x4 Scorpio and driver', 'Fuel and all road taxes', 'Daily pickup coordination', 'Sightseeing detours included', 'Driver stay and food covered by us'],
  },
  {
    slug: 'upper-mustang-lo-manthang',
    title: 'Upper Mustang, Lo Manthang',
    days: '6 Days',
    nights: '5 Nights',
    price: 'On request',
    priceNote: 'permit and guide arranged, 4WD throughout',
    tag: 'Forbidden Kingdom',
    image: 'https://images.unsplash.com/photo-1573398643956-2b9e6ade3456?q=80&w=1600&auto=format&fit=crop',
    summary:
      'Beyond Kagbeni into the rain shadow desert: Chele, Ghami, Tsarang and the walled city of Lo Manthang (3,840m). Sky caves of Chhoser and 15th century gompas.',
    highlights: ['Lo Manthang walled city', 'Chhoser sky caves (3,000 years old)', 'Ghar Gompa and longest mani wall', 'Restricted area handling'],
    itinerary: [
      { day: 'Day 1 to 2', title: 'Pokhara to Kagbeni via Muktinath', detail: 'Same as Muktinath route. Permits checked at Kagbeni check post.' },
      { day: 'Day 3', title: 'Kagbeni to Lo Manthang', detail: 'Chele, Samar, Ghami, Tsarang. Red cliffs and desert plateaus. 5 to 6 hrs.' },
      { day: 'Day 4', title: 'Lo Manthang exploration', detail: 'Jampa, Thubchen and Chode gompas, royal palace, Chhoser caves.' },
      { day: 'Day 5 to 6', title: 'Return via Jomsom to Pokhara', detail: 'Retrace with Muktinath blessing stop. Overnight Jomsom, then Pokhara.' },
    ],
    includes: ['Restricted permit plus ACAP assistance', 'Licensed local guide (mandatory)', 'Full 4WD logistics', 'Twin share lodge planning', 'Oxygen plus first aid kit'],
  },
  {
    slug: 'pathivara-darshan',
    title: 'Pathivara Devi Darshan',
    days: '5 to 6 Days',
    nights: '4 to 5 Nights',
    price: 'On request',
    priceNote: 'long east Nepal drive, custom quote by group size',
    tag: 'Shakti Peeth',
    image: 'https://images.unsplash.com/photo-1585938389612-a552a28d6914?q=80&w=1600&auto=format&fit=crop',
    summary:
      'Pokhara to Pathivara (3,794m) via Kathmandu and Taplejung. One of Nepal most powerful Shakti Peeths. Planned with rest halts for elders and family groups.',
    highlights: ['Pathivara temple sunrise darshan', 'Kanyam and Ilam tea gardens en route', 'Elder friendly pacing', 'Dharan and Bhedetar halt options'],
    itinerary: [
      { day: 'Day 1', title: 'Pokhara to Kathmandu / Birtamode', detail: 'Highway drive with meal halts. Overnight halt.' },
      { day: 'Day 2', title: 'To Taplejung / Suketar', detail: 'Climb via Ilam, Kanyam tea estate photo stops.' },
      { day: 'Day 3', title: 'Pathivara darshan', detail: 'Scorpio to Kaflepati plus 2 to 3 hr walk to temple (pony and palanquin options).' },
      { day: 'Day 4 to 6', title: 'Return to Pokhara', detail: 'Same route back with flexible night halts.' },
    ],
    includes: ['Long haul Scorpio plus driver rotation', 'Route and hotel planning', 'Temple timing guidance', 'Full fuel and tolls', 'Phone support anytime'],
  },
  {
    slug: 'all-nepal-tour',
    title: 'All Nepal Circuit',
    days: '8 to 10 Days',
    nights: '7 to 9 Nights',
    price: 'On request',
    priceNote: 'fully custom, Kathmandu, Chitwan, Lumbini, Pokhara, Mustang',
    tag: 'Best Value',
    image: 'https://images.unsplash.com/photo-1558799401-1dcba79834c2?q=80&w=1600&auto=format&fit=crop',
    summary:
      'The complete first timer loop: Kathmandu heritage, Manakamana, Pokhara, Muktinath, Chitwan safari and Lumbini. Same team and Scorpios throughout, zero bus hassle.',
    highlights: ['Kathmandu Durbar plus Swayambhu', 'Pokhara lakeside plus Sarangkot', 'Muktinath or Jomsom leg', 'Chitwan safari plus Lumbini birthplace'],
    itinerary: [
      { day: 'Day 1 to 2', title: 'Kathmandu plus Manakamana', detail: 'Pashupati, Boudha, Bhaktapur. Cable car option to Manakamana.' },
      { day: 'Day 3 to 5', title: 'Pokhara plus Mustang leg', detail: 'Lakeside, Davis Falls, then Muktinath 2 night loop.' },
      { day: 'Day 6 to 7', title: 'Chitwan safari', detail: 'Tharu culture, jungle safari plus canoe ride, sunset over Rapti.' },
      { day: 'Day 8 to 10', title: 'Lumbini to return', detail: 'Maya Devi temple, Ashoka pillar. Drop Kathmandu or Pokhara.' },
    ],
    includes: ['Single Scorpio throughout', 'Same trusted driver', 'Hotel booking help', 'Permit handling', 'Flexible day wise plan'],
  },
  {
    slug: 'pokhara-day-charter',
    title: 'Pokhara Day Charter',
    days: '1 Day',
    nights: 'Flexible',
    price: 'NPR 12,000 to 18,000',
    priceNote: 'per day with driver, fuel as per km',
    tag: 'Daily Hire',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1600&auto=format&fit=crop',
    summary:
      'Sarangkot sunrise, Ghandruk, Begnas, Rupa, Manakamana day trip or airport transfers. Clean 8 seater at your doorstep, pay by day or km.',
    highlights: ['Sarangkot sunrise run', 'Ghandruk and Australian Camp', 'Airport pickup and drop', 'Wedding and event hire'],
    itinerary: [
      { day: 'Morning', title: 'Sunrise and sightseeing', detail: 'Sarangkot 5 AM, Tal Barahi, Davis Falls, World Peace Pagoda.' },
      { day: 'Afternoon', title: 'Hill and lake circuit', detail: 'Begnas Lake, Rupa, Tibetan camp. Evening lakeside drop.' },
    ],
    includes: ['Clean 8 seater 4x4', 'Experienced city and hill driver', 'Transparent per km billing', 'Child seat on request'],
  },
];

export const ROUTES = [
  { name: 'Pokhara to Muktinath', dist: '168 km', time: '6 to 8 hrs', note: 'Beni, Tatopani, Marpha, Jomsom, Kagbeni' },
  { name: 'Pokhara to Lo Manthang', dist: '245 km', time: '2 days', note: 'Restricted permit beyond Kagbeni' },
  { name: 'Pokhara to Ghandruk', dist: '55 km', time: '3 to 4 hrs', note: 'Annapurna foothills trailhead' },
  { name: 'Pokhara to Kathmandu', dist: '200 km', time: '5 to 6 hrs', note: 'Prithvi Highway, Manakamana option' },
  { name: 'Kathmandu to Pathivara', dist: 'About 600 km', time: '2 days', note: 'Via Birtamode, Ilam, Taplejung' },
  { name: 'Pokhara to Chitwan', dist: '145 km', time: '4 to 5 hrs', note: 'Safari plus Lumbini extensions' },
];
