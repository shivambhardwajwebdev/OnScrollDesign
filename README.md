
# 🚗 Scroll-Driven Hero Section Animation

## 📌 Project Overview

This project is a scroll-driven responsive hero section animation built using:

* React (Vite)
* Tailwind CSS
* Vanilla CSS
* JavaScript scroll logic

The goal of this project was to recreate a smooth hero section that responds to user scroll instead of time-based animation.

The animation is controlled fully using scroll position and React state.

---

## 🎯 Features Implemented

### 1️⃣ Hero Section (Above the Fold)

* Full screen sticky hero section

* Large centered heading:

  ```
  WELCOME ITZ FIZZ
  ```

* Letter spacing applied for premium look

* Impact statistics shown above and below the hero section

---

### 2️⃣ Initial Load Behavior

* Hero fades in smoothly using CSS animation
* Headline opacity increases gradually based on scroll progress
* Statistics appear progressively based on scroll percentage

---

### 3️⃣ Scroll-Based Animation (Core Feature)

The animation is fully scroll-controlled.

As the user scrolls:

* Scroll progress is calculated using:

  ```js
  window.scrollY / maxScroll
  ```

* A `progress` state (0 → 1) is maintained

* The car image moves horizontally using:

  ```js
  transform: translateX(progress * distance)
  ```

* The green background width expands using:

  ```js
  width: progress * 100%
  ```

* Statistics fade in at different scroll thresholds:

  * 50%
  * 60%
  * 70%
  * 80%

This ensures motion is tied directly to scroll position — not time.

---

## 🧠 How It Works (Technical Explanation)

### Scroll Listener

```js
useEffect(() => {
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const percent = Math.min(scrollTop / maxScroll, 1);
    setProgress(percent);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
```

* Calculates scroll percentage
* Limits value between 0 and 1
* Updates animation state smoothly

---

### Performance Considerations

* Uses `transform: translateX()` (GPU-accelerated)
* Avoids layout-heavy properties
* Limits scroll value using `Math.min`
* Uses sticky positioning for smooth effect

---

## 📱 Responsive Design

The animation adapts to screen size:

* Different movement distance for mobile and desktop
* Different height configurations
* Responsive image sizing

---

## 🛠 Technologies Used

* React (Functional Components)
* useState
* useEffect
* Tailwind CSS
* CSS Transitions
* JavaScript Scroll Events

---

## 📂 Project Structure

```
src/
 ├── App.jsx
 ├── main.jsx
 ├── index.css
 └── assets/
      └── car.png
```

---

## 🔥 What I Focused On

* Smooth scroll-based motion
* Clean logic without external animation libraries
* Responsive behavior
* Simple but structured implementation
* Transform-based animation for performance

---

## 🚀 Future Improvements

* Throttling scroll event for further optimization
* Using requestAnimationFrame for smoother updates
* Adding easing interpolation
* Replacing manual scroll logic with GSAP ScrollTrigger (future learning goal)

---

## 🏁 Conclusion

This project demonstrates:

* Understanding of scroll-driven animation
* React state-based animation control
* Performance-aware motion implementation
* Clean component structure
* Responsive design handling

The entire animation is controlled by scroll progress instead of time-based autoplay, fulfilling the core requirement of the assignment.

---

If you want, I can also:

* Slightly polish this to sound more professional
* Or make it more beginner-friendly
* Or make it more "interviewer impressive"

Just tell me which tone you want. 💪
