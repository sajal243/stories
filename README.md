# 📖 Story Viewer App

A simple Instagram-style Story Viewer built using React and TypeScript. The app automatically plays through a series of images with visual progress indicators and allows manual navigation.

On clicking left part, user can move to previous story.
similarly, on clicking right part, user can move to next story.

🌐 **Live Demo**: [https://sajal243.github.io/stories/] 

### Github Repo url - [https://github.com/sajal243/stories]

### 1. Clone the Repository
```bash
git clone https://github.com/sajal243/stories.git
```
### 2. Install dependencies
npm install

### 3. Run locally
npm start

### 4. Unit & Integration Tests
npm test

### 5. Folder Structure
root
├── public/
├── src/
│   ├── components/
│   │   └── Stories/
│   │       ├── Stories.tsx
│   │       ├── Stories.css
│   │       └── Stories.test.tsx
│   ├── constants/
│   │   └── constant.ts
│   ├── index.tsx
│   ├── App.tsx
│   └── setupTests.ts
├── README.md
└── package.json

### 6. Design Decisions 

#### 1. Performance Optimization
Memoized State Updates: Only updates the state when activeIndex changes.

CSS Animation: Progress bars use CSS animation instead of JavaScript intervals.

Efficient Interval Handling: Uses setInterval with clearInterval in useEffect to ensure no memory leaks.

#### 2. Scalability
Constants in Separate File: Easily manage stories and settings from constants/constant.ts.
Modular Components: Stories component is self-contained and reusable.
Typed Props and State: Using TypeScript helps prevent bugs and improves editor support.

#### 3. Accessibility
Uses semantic HTML (alt tags) and progressive enhancement to ensure screen reader compatibility.

