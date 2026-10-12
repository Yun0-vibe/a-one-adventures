// Day by day route rows, destinations covered and trip requirements per package.
// Researched against 2026 operator itineraries for Mustang, Upper Mustang and Pathivara.

export type RouteRow = { day: string; from: string; to: string; stay: string; drive: string };

export const ROUTE_ROWS: Record<string, RouteRow[]> = {
  'muktinath-darshan': [
    { day: 'Day 1', from: 'Pokhara', to: 'Jomsom via Beni, Tatopani and Marpha', stay: 'Jomsom', drive: '7 to 8 hrs' },
    { day: 'Day 2', from: 'Jomsom', to: 'Kagbeni, Muktinath darshan and back', stay: 'Jomsom', drive: '3 to 4 hrs plus temple time' },
    { day: 'Day 3', from: 'Jomsom', to: 'Pokhara via Marpha and Beni', stay: 'Return, trip ends', drive: '7 to 8 hrs' },
  ],
  'lower-mustang-explorer': [
    { day: 'Day 1', from: 'Pokhara', to: 'Kalopani via Beni and Tatopani', stay: 'Kalopani', drive: '6 to 7 hrs' },
    { day: 'Day 2', from: 'Kalopani', to: 'Marpha and Jomsom', stay: 'Jomsom', drive: '3 to 4 hrs' },
    { day: 'Day 3', from: 'Jomsom', to: 'Muktinath, Kagbeni and Dhumba Lake', stay: 'Jomsom', drive: '4 to 5 hrs plus temple time' },
    { day: 'Day 4', from: 'Jomsom', to: 'Pokhara via Marpha and Beni', stay: 'Return, trip ends', drive: '7 to 8 hrs' },
  ],
  'upper-mustang-lo-manthang': [
    { day: 'Day 1', from: 'Pokhara', to: 'Jomsom via Beni and Tatopani', stay: 'Jomsom', drive: '7 to 8 hrs' },
    { day: 'Day 2', from: 'Jomsom', to: 'Muktinath darshan, then Kagbeni', stay: 'Kagbeni', drive: '4 to 5 hrs' },
    { day: 'Day 3', from: 'Kagbeni', to: 'Lo Manthang via Chele and Ghami', stay: 'Lo Manthang', drive: '5 to 6 hrs' },
    { day: 'Day 4', from: 'Lo Manthang', to: 'Monasteries and Chhoser sky caves', stay: 'Lo Manthang', drive: '2 to 3 hrs local' },
    { day: 'Day 5', from: 'Lo Manthang', to: 'Jomsom via Ghami and Kagbeni', stay: 'Jomsom', drive: '6 to 7 hrs' },
    { day: 'Day 6', from: 'Jomsom', to: 'Pokhara', stay: 'Return, trip ends', drive: '7 to 8 hrs' },
  ],
  'pathivara-darshan': [
    { day: 'Day 1', from: 'Pokhara', to: 'Kathmandu', stay: 'Kathmandu', drive: '5 to 6 hrs' },
    { day: 'Day 2', from: 'Kathmandu', to: 'Birtamode', stay: 'Birtamode', drive: '10 to 12 hrs' },
    { day: 'Day 3', from: 'Birtamode', to: 'Taplejung via Ilam and Kanyam', stay: 'Taplejung', drive: '7 to 8 hrs' },
    { day: 'Day 4', from: 'Taplejung', to: 'Kaflepati, Pathivara darshan and back', stay: 'Taplejung', drive: '3 to 4 hrs plus 2 to 3 hr walk' },
    { day: 'Day 5', from: 'Taplejung', to: 'Birtamode or Dharan', stay: 'Birtamode / Dharan', drive: '7 to 8 hrs' },
    { day: 'Day 6', from: 'Birtamode', to: 'Pokhara via Kathmandu', stay: 'Return, trip ends', drive: 'Full day' },
  ],
  'all-nepal-tour': [
    { day: 'Day 1 to 2', from: 'Kathmandu', to: 'Valley sightseeing and Manakamana', stay: 'Kathmandu', drive: 'Short drives' },
    { day: 'Day 3', from: 'Kathmandu', to: 'Pokhara', stay: 'Pokhara', drive: '5 to 6 hrs' },
    { day: 'Day 4 to 6', from: 'Pokhara', to: 'Muktinath loop via Jomsom', stay: 'Jomsom, then Pokhara', drive: '7 to 8 hrs per leg' },
    { day: 'Day 7 to 8', from: 'Pokhara', to: 'Chitwan safari', stay: 'Chitwan', drive: '4 to 5 hrs' },
    { day: 'Day 9 to 10', from: 'Chitwan', to: 'Lumbini, then return', stay: 'Trip ends', drive: 'Flexible' },
  ],
  'pokhara-day-charter': [
    { day: 'Early morning', from: 'Hotel', to: 'Sarangkot sunrise, back for breakfast', stay: 'Day trip', drive: '2 to 3 hrs' },
    { day: 'Midday', from: 'Pokhara', to: 'Davis Falls, Gupteshwor and Peace Pagoda', stay: 'Day trip', drive: '3 to 4 hrs' },
    { day: 'Afternoon', from: 'Pokhara', to: 'Begnas Lake or Tibetan camp', stay: 'Hotel drop by evening', drive: '3 hrs' },
  ],
};

export const DESTINATIONS: Record<string, string[]> = {
  'muktinath-darshan': ['Beni', 'Rupse Waterfall', 'Tatopani', 'Kalopani', 'Marpha', 'Jomsom', 'Dhumba Lake', 'Kagbeni', 'Jharkot', 'Muktinath'],
  'lower-mustang-explorer': ['Beni', 'Rupse Waterfall', 'Tatopani', 'Kalopani', 'Marpha', 'Jomsom', 'Dhumba Lake', 'Kagbeni', 'Jharkot', 'Muktinath'],
  'upper-mustang-lo-manthang': ['Jomsom', 'Muktinath', 'Kagbeni', 'Chele', 'Samar', 'Ghami', 'Tsarang', 'Ghar Gompa', 'Lo Manthang', 'Chhoser Caves'],
  'pathivara-darshan': ['Kathmandu', 'Birtamode', 'Kanyam', 'Ilam', 'Taplejung', 'Suketar', 'Kaflepati', 'Pathivara'],
  'all-nepal-tour': ['Kathmandu', 'Bhaktapur', 'Manakamana', 'Pokhara', 'Jomsom', 'Muktinath', 'Chitwan', 'Lumbini'],
  'pokhara-day-charter': ['Sarangkot', 'Tal Barahi', 'Davis Falls', 'Peace Pagoda', 'Begnas Lake', 'Tibetan Camp'],
};

export const REQUIRED: Record<string, string[]> = {
  'muktinath-darshan': [
    'ACAP permit, we arrange it before the trip',
    'Citizenship or passport copy for check posts',
    'Warm jacket, Muktinath sits at 3,710m',
    'Basic walking fitness, 20 to 25 min uphill walk at the temple',
    'Motion sickness pills if hill roads bother you',
  ],
  'lower-mustang-explorer': [
    'ACAP permit, we arrange it before the trip',
    'Citizenship or passport copy for check posts',
    'Warm layers plus sun protection, mountain weather shifts fast',
    'Comfortable walking shoes for village walks',
    '4 days free including travel days',
  ],
  'upper-mustang-lo-manthang': [
    'Restricted area permit plus ACAP, we arrange both with a licensed guide',
    'Passport with photos for the restricted permit',
    'Warm and windproof layers, Lo Manthang sits at 3,840m',
    'No serious heart or altitude issues, carry personal medicines',
    'Travel insurance recommended for remote areas',
    '6 full days free',
  ],
  'pathivara-darshan': [
    '5 to 6 days free for the full route',
    'Walking fitness for the 2 to 3 hr uphill climb, pony and palanquin available for elders',
    'Warm layers, the temple sits at 3,794m',
    'Cash in small notes, ATMs are limited in the hills',
    'ID for hotels along the route',
  ],
  'all-nepal-tour': [
    '8 to 10 days free',
    'ACAP and all permits arranged by us',
    'Mixed packing, mountains plus hot plains',
    'ID for hotels and check posts',
    'Travel insurance recommended',
  ],
  'pokhara-day-charter': [
    'Just book a day ahead in peak season',
    'Tell us your hotel for pickup timing',
    'Camera and light jacket for Sarangkot sunrise',
  ],
};
