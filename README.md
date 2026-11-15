# Laxmi Sannagoudra – Portfolio (React + Vite)

## Run
    npm install
    npm run dev
Open http://localhost:5173

## Intro video
The intro video plays full-screen when the site opens (src/components/IntroOverlay.jsx). It starts with sound if the browser allows it, otherwise muted with a "Tap for sound" button. It closes automatically when finished, or visitors can click Skip.

## Customize
- All text is in `src/data.js`.
- Photo: `public/images/profile.jpg`
- Intro video: `public/video/intro.mp4` (replace it with your own recorded video, keep the same file name)
- Resume: `public/Laxmi_Sannagoudra_Resume.pdf`

## Push to GitHub
    git init
    git add .
    git commit -m "Add React portfolio"
    git branch -M main
    git remote add origin https://github.com/laxmisannagoudra/portfolio.git
    git push -u origin main

## Deploy free
Import the repository on vercel.com (framework: Vite) to get a live link.
