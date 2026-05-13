# Gushwork Frontend Assignment

Responsive product detail page for HDPE pipes and coils, implemented with plain HTML, CSS, and JavaScript. The project has no build step and no runtime dependencies.

## Running the Project

Open `index.html` directly in a browser.

## Implemented Features

### Product Detail Hero

The top section presents the product gallery, certifications, title, selling points, pricing, shipping and return tags, and primary actions. On desktop, the layout uses a two-column grid. On mobile, the product details are intentionally shown before the gallery so the user sees the product context before the images.

### Image Gallery

The product gallery supports:

- Previous and next navigation.
- Dynamically rendered thumbnails.
- Active thumbnail state.
- Main image replacement when the selected image changes.
- Horizontally scrollable thumbnails on narrow screens to avoid viewport overflow.

### Desktop Image Zoom

The top product image has an Amazon-style hover zoom on desktop widths.

When the user hovers over the main image:

- A lens appears over the image.
- A larger zoom preview appears on the right side.
- The preview tracks the cursor position using percentage-based background positioning.
- The zoom source updates when the active gallery image changes.

The zoom interaction is disabled below `1024px` because hover-based image magnification is not a good mobile interaction and can conflict with the responsive layout.

### Modal Forms

Two CTA-driven modal flows are implemented.

`Download Full Technical Datasheet`

- Opens a modal with a blurred backdrop.
- Modal heading: `Let us email the entire catalog to you`.
- Captures email and phone number.
- Primary action: `Download Brochure`.

`Request a Quote`

- Opens a modal with a blurred backdrop.
- Modal heading: `Request a call back`.
- Captures full name, company name, email, and phone number.
- Primary action: `Submit Form`.

Modal behavior includes:

- Backdrop blur.
- Close button.
- Backdrop click close.
- Escape key close.
- Scroll locking while a modal is open.
- Static form submit handling to prevent page reload.

### Responsive Layout

The page includes responsive rules for tablet and mobile breakpoints.

Key mobile behavior:

- Product information appears before the product images.
- Gallery navigation buttons remain visible and touch-friendly.
- Thumbnail rows scroll horizontally instead of widening the page.
- Forms, CTA blocks, resource rows, footer links, and grids collapse or wrap to fit the viewport.
- Horizontal page overflow is prevented.

### FAQ Accordion

FAQ items are controlled with JavaScript. Opening one item closes the others, keeping the section compact and predictable.

### Manufacturing Process Tabs

The manufacturing process section uses tab-like controls to update the displayed title and description. The tab row supports horizontal scrolling on smaller screens.

## Implementation Notes

### HTML

The markup is organized into clear page sections:

- Navigation
- Breadcrumb
- Product hero
- Technical specifications
- Features
- FAQ
- Applications
- Manufacturing process
- Testimonials
- Portfolio
- Resources
- Contact CTA
- Footer
- Modals

The modal elements use `role="dialog"`, `aria-modal="true"`, labelled headings, and `aria-hidden` state updates.

### CSS

The layout uses a mix of CSS Grid and Flexbox.

Grid is used for larger structural layouts such as the hero, feature grid, applications, testimonials, portfolio, technical specs, and contact CTA.

Flexbox is used for local alignment patterns such as navigation, badges, buttons, thumbnail rows, forms, resource rows, footer content, and modal actions.

Responsive behavior is handled with media queries at:

- `1024px`
- `768px`
- `480px`

The CSS also uses:

- `aspect-ratio` for stable image containers.
- `min-width: 0` to prevent grid/flex children from causing overflow.
- `overflow-x: auto` for intentional horizontal scrolling.
- `backdrop-filter` for modal background blur.
- `z-index` layering for nav, zoom preview, and modal overlays.

### JavaScript

JavaScript is intentionally small and focused. It handles:

- Gallery state and thumbnail rendering.
- Main image updates.
- Desktop hover zoom calculations.
- Modal open and close behavior.
- FAQ accordion state.
- Manufacturing process tab updates.

The zoom implementation reads the cursor position relative to the image container, converts it to percentages, and applies those percentages to the zoom popup background position.

The modal implementation uses `data-modal-target` attributes to keep buttons declarative and avoid hard-coding button-specific event logic.

## Files

- `index.html`: Page structure, CTA hooks, and modal markup.
- `styles.css`: Layout, responsive behavior, gallery zoom styling, and modal styling.
- `script.js`: Gallery behavior, hover zoom logic, modal behavior, FAQ accordion, and process tabs.

## Design Constraints

The implementation keeps the project framework-free and static-file friendly. All behavior runs in the browser without a bundler, package manager, or server.
