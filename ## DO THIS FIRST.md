## DO THIS FIRST
**Invoke 'frontend-design' skill before generating any code.** Do it every time you want to code front-end. In every session.

## Tech Stack 
- React w/ Typescript
- Tailwind CSS

## Visual References
- The folder web_design_references contains visual references you should try to follow when creating web pages
- If this folder is empty, disregard, if it contains images, use as inspirtaion for layout structure, colors, spacing, typography choices, etc.
- If folder is empty, design from scartch, following rules provided in the 'Anti-Generic Design Guardrails' section
- When you finish coding a web site, capture a page screenshot of each page in web site that you have generated and store it in a 'screenshots' folder. If a page is changed after you have done this, delete and add the updates screenshot to this folder.

## Anti-Generic Design Guardrails
- **Colors:** It is highly recommended to NOT use default Tailwind palette ('blue-500', 'indigo-600', etc.). Always defined and use custom design tokens from 'tailwind.config' (eg. 'brand.primary'), Avoid raw hex values in JSX
- **Typography** Pair fonts intentionally ('font-display' for headings, 'font-body' for text) and stay away from font 'font-sans' as much as possible. Apply tight tracking ('tracking-[-0.03em]') for headings and generous line-height ('leading-[1.7]') for body text.
- **Shadows** Never use default utilities like 'shadow-md' or 'shadown-lg'. Use layered, color-tinted shadows defined in the theme.
- **Gradients & Backgrounds** Avoid flat fills ('bg-white', 'bg-gray-100'). Use layered gradients, overlays, or subtle textures. Prefer custom gradients via arbitrary values instead of Tailwind presets
- **Animations** Never use 'transition-all'. Only animate 'transform' and 'opacity'. Use explicit utilities ('transition-transform', 'transition-opacity') and controlled durations. Prefer spring-like motion when using animation libraries.
- **Component Styling** Avoid long, unstructured className strings in JSX/TSX. Extract reusuable component variants. Use composition patterns ('clsx', 'cva') instead of duplicating styles
- **Interactive States** Every interactive element must include 'hover', 'focus-visible', and 'active' states, No exceptions



