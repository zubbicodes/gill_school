# Gills Driving School — Website Demo

A modern, responsive redesign of [gillsdrivingschool.ie](https://gillsdrivingschool.ie): dark and light blue theme, smooth scrolling, scroll animations, an animated car loading screen, and a dedicated Gift Vouchers page.

Built with plain **HTML, CSS and JavaScript**. There's no build step.

## Pages

| Page | File |
| --- | --- |
| Home (history, fleet, features, testimonials) | `index.html` |
| Courses & licences (B, BE, C1, C, CE, D1, D, training) | `courses.html` |
| Gift vouchers (live voucher builder) | `gift-vouchers.html` |
| Our story / Gill Group | `about.html` |
| Contact & location | `contact.html` |

## Deploy with Docker

```bash
docker compose up -d --build
```

The site is then at **http://localhost:8080**. To use a different port:

```bash
PORT=80 docker compose up -d --build
```

Health check: `GET /healthz` returns `ok`.

To stop it:

```bash
docker compose down
```

## Run locally without Docker

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 5500
```

## Notes

- Fonts (Urbanist) and the smooth-scroll library (Lenis) load from Google Fonts and unpkg, so visitors need an internet connection.
- The CSS and JS links carry `?v=N`. Raise the number after editing those files so browsers fetch the new version.
- Forms are demo-only: they show a confirmation message and don't send anything.
- Voucher prices and some course details are placeholders for the client to confirm.
