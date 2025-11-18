# Kalan — Personal Website

This repository contains a simple static portfolio site you can link from your resume.

What is included
- `index.html` — main page
- `assets/css/style.css` — styles
- `assets/js/main.js` — loads `projects.json` and renders project cards
- `projects.json` — sample projects list

Quick local preview

1. Open `index.html` in a browser (double-click) for a quick preview. For correct fetch behavior, use a local web server:

Windows PowerShell (simple):
```
# from repo root
python -m http.server 8000; Start-Process "http://localhost:8000"
```

Deploy to GitHub Pages

Option A — Use an existing GitHub repo and Pages from `main` branch:

1. Create a new repository on GitHub named `Kalan-Website` (or a name you prefer).
2. In your local repo (if not already a git repo):
```
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/Kalan-Website.git
git push -u origin main
```
3. In the GitHub repo settings → Pages, set source to `main` branch and folder `/ (root)`. The site will be published at `https://<your-username>.github.io/Kalan-Website/`.

Option B — Create repo via GitHub CLI and push (if you have `gh`):
```
gh repo create Kalan-Website --public --source=. --remote=origin --push
```

Next steps & customization
- Replace `projects.json` entries with your real projects.
- Replace `resume.pdf` with your resume file at repo root or update the link in `index.html`.
- Change contact email and GitHub link in `index.html`.
- Add images for projects and update `main.js` to render thumbnails.

If you want, I can:
- Generate a polished responsive design with multiple pages (detail pages per project).
- Add a GitHub Actions workflow to build & deploy automatically.
- Help you pick a custom domain and add a `CNAME` file.
# Kalan — Personal Website

This repository contains a simple static portfolio site you can link from your resume.

What is included
- `index.html` — main page
- `assets/css/style.css` — styles
- `assets/js/main.js` — loads `projects.json` and renders project cards
- `projects.json` — sample projects list

Quick local preview

1. Open `index.html` in a browser (double-click) for a quick preview. For correct fetch behavior, use a local web server:

Windows PowerShell (simple):
```
# from repo root
python -m http.server 8000; Start-Process "http://localhost:8000"
```

Deploy to GitHub Pages

Option A — Use an existing GitHub repo and Pages from `main` branch:

1. Create a new repository on GitHub named `Kalan-Website` (or a name you prefer).
2. In your local repo (if not already a git repo):
```
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/Kalan-Website.git
git push -u origin main
```
3. In the GitHub repo settings → Pages, set source to `main` branch and folder `/ (root)`. The site will be published at `https://<your-username>.github.io/Kalan-Website/`.

Option B — Create repo via GitHub CLI and push (if you have `gh`):
```
gh repo create Kalan-Website --public --source=. --remote=origin --push
```

Next steps & customization
- Replace `projects.json` entries with your real projects.
- Replace `resume.pdf` with your resume file at repo root or update the link in `index.html`.
- Change contact email and GitHub link in `index.html`.
- Add images for projects and update `main.js` to render thumbnails.

If you want, I can:
- Generate a polished responsive design with multiple pages (detail pages per project).
- Add a GitHub Actions workflow to build & deploy automatically.
- Help you pick a custom domain and add a `CNAME` file.
