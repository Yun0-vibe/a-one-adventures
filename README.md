# A-One Adventures — Pokhara
Private 4x4 Scorpio tours across Nepal. Muktinath, Upper Mustang, Pathivara & All Nepal.

## Run locally
```bash
npm install
npm run dev
```

## Deploy on Vercel
1. Push this folder to GitHub
2. Import in Vercel → Framework: Next.js → Deploy
3. No env vars needed. `vercel.json` is pre-configured.

## Customise
- Photos: drop your Scorpio photos in `public/` as `scorpio-1.jpg`, `scorpio-2.jpg`, then update `lib/site.ts` (`vehiclePhotos`).
- Number plate: update `lib/site.ts` → `vehicle.plate`.
- WhatsApp bookings: booking form opens WhatsApp to +977 9846020030 with pre-filled details. No backend needed.
- Logo: `public/logo.svg` — clean mountain + road mark.

## Contact
Driver: Ganesh Prasad Subedi · +977 9846020030 · Pokhara, Nepal
Vehicle: Mahindra Scorpio S5+ 2019, 8-seater 4WD
