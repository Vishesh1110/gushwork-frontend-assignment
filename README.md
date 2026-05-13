# Gushwork Frontend Assignment

This project is a responsive product detail page for HDPE pipes and coils. 

## How to Run

Open `index.html` directly in a browser.

No dependency installation is required.

## Features Implemented

### Product Hero Section

- Displays the main product image gallery on desktop beside the product details.
- Shows product certifications, title, feature bullets, price range, shipping and return tags, and action buttons.
- On mobile screens, the product details appear before the image gallery so users first see the product title and key information.

### Image Gallery

- The top product image can be changed using previous and next arrow buttons.
- Thumbnail images are generated dynamically using JavaScript.
- Clicking a thumbnail updates the main product image and active thumbnail state.
- On mobile, the thumbnail row scrolls horizontally instead of overflowing beyond the viewport.

### Desktop Image Zoom

- Implemented an Amazon-style zoom interaction for the top product image only.
- When the user hovers over the main product image on desktop, a zoomed preview appears on the right side.
- A lens overlay follows the cursor to indicate the zoomed area.
- The zoom preview updates when the active gallery image changes.
- The zoom feature is disabled on smaller screens to avoid layout issues on mobile.

### Responsive Mobile Layout

- Added mobile-specific layout rules for screens such as `430 x 932`.
- Reordered the product hero so text and bullet points come before images.
- Increased gallery navigation button size on mobile for better touch usability.
- Prevented horizontal overflow from thumbnails, forms, CTA sections, resource rows, and footer links.
- Used responsive grid and flexbox adjustments so sections fit within the viewport.


## Concepts Used

### Semantic HTML Structure

The page is divided into meaningful sections such as navigation, breadcrumb, product hero, specifications, features, FAQ, applications, process, testimonials, portfolio, resources, contact CTA, and footer.

### CSS Grid and Flexbox

- CSS Grid is used for larger page layouts such as the product hero, specs rows, feature cards, application cards, testimonials, portfolio, and contact section.
- Flexbox is used for navigation, badges, buttons, thumbnail rows, forms, resource rows, and footer content.

### Responsive Design

Media queries are used at `1024px`, `768px`, and `480px` to adapt the layout for tablets and mobile devices.

Key responsive techniques include:

- Switching multi-column grids to single-column layouts.
- Reordering the product information above the image gallery on mobile.
- Making wide horizontal content scrollable where appropriate.
- Setting flexible widths and `min-width: 0` to prevent content from pushing outside the viewport.

### DOM Manipulation

JavaScript is used to:

- Generate gallery thumbnails.
- Track the active product image.
- Update the main image source.
- Toggle active classes for thumbnails.
- Update FAQ and process-tab content dynamically.

### Event Handling

The page uses event listeners and inline handlers for:

- Gallery previous and next buttons.
- Thumbnail clicks.
- Product image hover and mouse movement for zoom preview.
- FAQ toggles.
- Process tab selection.

### Mouse Position Based Zoom

The zoom feature uses the cursor position inside the main image container to calculate percentage-based background positioning for the zoom preview. This allows the zoom popup to show the same area the user is hovering over.

### Progressive Enhancement

Core page content remains visible without relying on complex tooling. JavaScript enhances the experience with gallery switching, zoom preview, FAQs, and tabs, while the layout remains accessible as a static HTML page.

## Files

- `index.html`: Page markup and section structure.
- `styles.css`: Visual styling, layout, responsive behavior, and zoom popup styling.
- `script.js`: Gallery logic, hover zoom logic, FAQ toggle logic, and process tab behavior.
