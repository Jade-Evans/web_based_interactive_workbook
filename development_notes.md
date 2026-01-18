17/01/2026:
- Strip the module page down to a blank <main id="canvas">.
- Add a toolbar with buttons for block types (notes, code editor, image, list, heading, etc.).
- Build simple block creation functions that insert those blocks into the canvas.
- Store blocks as data objects so modules can be saved/loaded later.
- Park all your personal guidance text in a separate file for future use

18/01/2026:
- Hit a wall with the growing CSS complexity and realised the layout had become unpredictable.
- Decided to pause feature‑building and refocus on the core architecture instead of layering fixes on top of a shaky foundation.
- Created a dedicated refactor branch to rebuild the layout cleanly without disrupting the original TOP‑based version.
- Set up a new skillroots-refactor folder containing only the essential template files, removing old module pages to avoid dragging layout issues forward.
- Commented out all existing CSS to strip the project back to a blank, stable skeleton.
- Began rebuilding the structure from first principles: body → header → main → sidebar + content → footer, aiming for a fluid, future‑proof layout.
- Clarified the purpose of each branch: main for ongoing learning and experimentation, refactor for the clean, scalable SkillRoots architecture.



