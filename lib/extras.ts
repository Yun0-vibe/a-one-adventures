// Shared extras: packing lists, exclusions, elevation profiles, estimator rates.

export const DEFAULT_EXCLUDED = [
  'Hotel and lodge bills (we book on request)',
  'Meals unless stated in the package',
  'ACAP and restricted area permits at actual cost',
  'Temple offerings plus pony or palanquin charges',
  'Travel insurance',
  'Anything not listed in Includes',
];

export const MOUNTAIN_PACKING = [
  'Warm jacket and fleece, Muktinath is much colder than Pokhara',
  'Comfortable walking shoes with good grip',
  'Sun cap, sunglasses and sunscreen',
  'Water bottle plus dry snacks',
  'Personal medicines plus motion sickness pills',
  'ID copy for permits, citizenship or passport',
  'Cash in small notes, ATMs are rare beyond Beni',
  'Power bank, charging points are limited',
];

export const STANDARD_PACKING = [
  'Light jacket plus one warm layer',
  'Comfortable walking shoes',
  'Rain cover in monsoon months',
  'Water bottle plus snacks',
  'ID for hotels and permits',
  'Cash in small notes',
  'Phone charger plus power bank',
];

export function packingFor(slug: string): string[] {
  if (slug === 'pathivara-darshan' || slug === 'all-nepal-tour' || slug === 'pokhara-day-charter') {
    return STANDARD_PACKING;
  }
  return MOUNTAIN_PACKING;
}

export const ELEVATION: Record<string, { p: string; m: number }[]> = {
  'muktinath-darshan': [
    { p: 'Pokhara', m: 820 },
    { p: 'Beni', m: 840 },
    { p: 'Tatopani', m: 1190 },
    { p: 'Kalopani', m: 2530 },
    { p: 'Marpha', m: 2670 },
    { p: 'Jomsom', m: 2720 },
    { p: 'Kagbeni', m: 2810 },
    { p: 'Muktinath', m: 3710 },
  ],
  'lower-mustang-explorer': [
    { p: 'Pokhara', m: 820 },
    { p: 'Tatopani', m: 1190 },
    { p: 'Kalopani', m: 2530 },
    { p: 'Marpha', m: 2670 },
    { p: 'Jomsom', m: 2720 },
    { p: 'Muktinath', m: 3710 },
  ],
  'upper-mustang-lo-manthang': [
    { p: 'Pokhara', m: 820 },
    { p: 'Jomsom', m: 2720 },
    { p: 'Kagbeni', m: 2810 },
    { p: 'Chele', m: 3100 },
    { p: 'Ghami', m: 3520 },
    { p: 'Tsarang', m: 3560 },
    { p: 'Lo Manthang', m: 3840 },
  ],
  'pathivara-darshan': [
    { p: 'Pokhara', m: 820 },
    { p: 'Kathmandu', m: 1400 },
    { p: 'Birtamode', m: 150 },
    { p: 'Ilam', m: 1200 },
    { p: 'Taplejung', m: 1440 },
    { p: 'Pathivara', m: 3794 },
  ],
  'all-nepal-tour': [
    { p: 'Kathmandu', m: 1400 },
    { p: 'Pokhara', m: 820 },
    { p: 'Muktinath', m: 3710 },
    { p: 'Chitwan', m: 150 },
    { p: 'Lumbini', m: 150 },
  ],
  'pokhara-day-charter': [
    { p: 'Begnas', m: 650 },
    { p: 'Pokhara', m: 820 },
    { p: 'Peace Pagoda', m: 1100 },
    { p: 'Sarangkot', m: 1600 },
  ],
};

export const ESTIMATOR_RATES = [
  { id: 'local', label: 'Pokhara local and sightseeing', rate: 12000 },
  { id: 'highway', label: 'Highway trips (Kathmandu, Chitwan, Lumbini)', rate: 14000 },
  { id: 'mountain', label: 'Mountain trips (Mustang, Muktinath)', rate: 19000 },
  { id: 'longhaul', label: 'Long haul (Pathivara, All Nepal)', rate: 16000 },
];
