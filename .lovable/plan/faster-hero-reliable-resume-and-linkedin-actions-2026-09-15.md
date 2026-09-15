# Faster hero, reliable resume and LinkedIn actions

## What will change
- Keep the portfolio content immediately visible while the 3D drone code loads separately after the main page is ready.
- Add a small aerospace-style loading indicator only inside the drone area; it disappears when the scene is ready and stays disabled on mobile/reduced-motion devices.
- Reduce the 3D download by removing the large helper-library dependency from the scene and drawing its flight trail directly with Three.js.
- Simplify the page-wide decorative layers on mobile and pause off-screen animation work where possible.
- Optimize and linearize the one-page PDF for faster first-page display on slow connections while preserving its content and confidentiality safeguards.
- Make the hero Resume action use a normal same-site page link and make LinkedIn open as an external top-level tab, with an internal professional-profile fallback link available.
- Check the resume page’s View and Download actions, the PDF response, and LinkedIn URLs at desktop and mobile sizes.

## Technical details
- Do not add HTTP gzip/brotli code: Lovable hosting already compresses page, CSS, and JavaScript responses at the edge.
- Replace `@react-three/drei`’s line helper in the deferred scene with native `THREE.BufferGeometry` and `THREE.Line`.
- Use the existing design tokens for the loader and preserve `prefers-reduced-motion` behavior.
- Optimize the PDF with lossless object compression/linearization, then verify its page count, text, file type, and absence of confidential UART wording.
- Use ordinary anchors for the affected actions so embedded preview routing cannot intercept them.
