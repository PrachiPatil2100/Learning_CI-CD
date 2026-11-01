# Giggle Garden

Giggle Garden is a colorful, responsive home for funny characters and original poems for kids. The page includes a poem parade, a silly character gallery, and a surprise-poem picker.

## Features

- Read three short, kid-friendly poems
- Meet the Giggle Garden characters
- Pick a surprise poem with the interactive buttons
- Responsive layout with reduced-motion support

## Run it locally

From the project folder, start a quick local server:

```bash
python -m http.server 8000
```

Then open http://localhost:8000 in your browser.

## Run with Docker Compose

From the project folder, start the app:

```bash
docker compose up -d
```

Open http://localhost:8080 in your browser. Stop the container with:

```bash
docker compose down
```

## Files

- `index.html` — page structure and poem content
- `style.css` — colorful styling and responsive layout
- `script.js` — surprise-poem interaction
- `compose.yaml` — serves the app through Nginx in Docker
