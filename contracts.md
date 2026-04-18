# API Contracts — Neha Nageswari Portfolio

## Scope
Backend integration replaces only the **Connect / Enquiry form** (currently saves to localStorage as MOCK). All other content (bio, filmography, brands, awards, music videos, gallery, press) remains static content from `/app/frontend/src/mock/mock.js` — this is portfolio content that doesn't need DB storage.

## Mocked data that stays static (no backend needed)
- `personal`, `heroStats`, `heroImages`
- `currentlyStarring`, `filmography`
- `musicVideos`, `brands`, `gallery`, `awards`, `press`

## Backend Endpoints (new)

### 1. POST /api/enquiries
Save a booking / brand enquiry from the Connect form.

**Request body**
```json
{
  "name": "string (required)",
  "email": "string (required, email)",
  "org": "string (optional)",
  "message": "string (required)"
}
```

**Response 200**
```json
{
  "id": "uuid",
  "name": "...",
  "email": "...",
  "org": "...",
  "message": "...",
  "created_at": "ISO8601"
}
```

**Response 422** if validation fails.

### 2. GET /api/enquiries
Retrieve all enquiries (latest-first). Used for verification / future admin page.

**Response 200**
```json
[ { EnquiryModel }, ... ]
```

## MongoDB Collection
- **Collection**: `enquiries`
- **Fields**: `id` (uuid str), `name`, `email`, `org`, `message`, `created_at` (datetime)

## Frontend Integration
`/app/frontend/src/components/Connect.jsx` onSubmit:
- Remove localStorage mock
- POST to `${REACT_APP_BACKEND_URL}/api/enquiries` via axios
- On success → show toast and reset form
- On error → show error toast

All routes are `/api/*` prefixed (Kubernetes ingress requirement).
