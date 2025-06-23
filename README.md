## Project README: Adams Web Works

Welcome to my portfolio site project! This site was built as a modern, accessible, and performant way to showcase my skills, experience, and personality as a junior developer. Built with a custom React frontend and SCSS styling, the design draws on an industrial aesthetic with playful and animated elements that bring life to the content.

---

## 🚀 Key Features

- Responsive layout with accessibility in mind
- Interactive skills and experience sections
- Themed animated cog background in hero area
- Performance-conscious image handling
- Component-based React architecture
- Clean and minimal SCSS structure

---

## 🛠 Technical Notes

### Styling Strategy
This project uses SCSS for styling, structured around partials and semantic class names. I decided against CSS-in-JS or full CSS Modules for this build to retain simplicity, flexibility, and transparency in the styling layer. SCSS partials helped manage complexity while supporting responsive design, variables, and shared mixins.

### Cog Background Improvements
The animated cog background in the hero section was initially built with lots of individual SVG elements. To reduce performance impact:
- The number of SVGs was reduced and reused
- File sizes were optimized with SVGO
- Animation load was balanced for responsiveness and interactivity

---

## 💡 Design Decisions

### 🔹 Expandable Card Chosen for Passion Section
A card that expands inline was chosen to keep the user's place in the scroll flow. This improved accessibility and focus management and gave a more playful, app-like feel. Care was taken to handle keyboard focus, screen readers, and smooth transitions.

### 🔹 Skills Section Honeycomb Layout
Instead of using CSS Grid, I switched to flex-based rows of staggered tiles. By alternating between even and odd numbers per row (like 5–4–5–4), I achieved a responsive honeycomb-style layout that looks consistent across screen sizes.

---

## 📸 Things I Learned / Techniques Picked Up

### 🧙 Image Optimization (CLI Tools)

#### 1. **ImageMagick** (for JPG/PNG → WebP)
I learned to use ImageMagick to reduce the size of my project thumbnails using the `convert` command. This helped improve performance without noticeable loss of quality.

- Resize and convert JPGs/PNGs:
  ```bash
  convert my-image.jpg -resize 400x -quality 80 my-image.webp
  ```

- Batch convert all JPGs and PNGs in a folder:
  ```bash
  for img in *.jpg *.png; do
    [ -e "$img" ] || continue
    convert "$img" -resize 400x -quality 80 "${img%.*}.webp"
  done
  ```

#### 2. **SVGO** (for compressing SVGs)
I used SVGO to clean up and compress auto-generated SVGs that were used as decorative elements in my hero section. Even though SVGs were small in size, having many of them on the page could hurt performance, and SVGO helped significantly.

- Install globally:
  ```bash
  npm install -g svgo
  ```

- Optimize all SVGs in a folder:
  ```bash
  svgo *.svg
  ```

This reduced SVG file sizes and DOM complexity, improving render performance.

---

## 🧩 Wins and Challenges

### ✅ Wins
- Learned how to use flex-based row staggering for a honeycomb-style layout without relying on grid.
- Introduced CLI tools for real image optimization for the first time.
- Created animated, reusable React components for skills tiles.
- Implemented smooth hover interactions with balanced transitions.
- Fine-tuned responsive behavior across several breakpoints.

### ⚠️ Challenges
- SVG performance hit due to high DOM load from decorative assets.
- Aspect-ratio control in media queries was more brittle than expected.
- Needed to fall back to `convert` after discovering `magick` wasn’t available by default on my system.
- Responsive layout with alternating even/odd rows took careful tweaking to look good at all screen sizes.

---

## 🛠 Tech Stack

- React (Vite)
- SCSS Partials
- Font Awesome
- SVGs + WebP Images
- CLI Tools: ImageMagick, SVGO

---

## 🔍 Areas to Improve or Explore

- Introduce `srcset` and `<picture>` tags for responsive image loading
- Possibly reduce or lazy-load decorative cog background
- Add more animations tied to scroll or interactions
- Consider motion preferences for reduced motion users

---

Thanks for checking it out!
