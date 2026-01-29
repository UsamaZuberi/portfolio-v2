# Code Examples & Patterns

Quick reference guide for common coding patterns used in this portfolio.

---

## 📝 Documentation Template

Every file should start with a JSDoc comment block:

```tsx
/**
 * ComponentName Component
 *
 * Clear description of what this component does.
 * Include key features and functionality.
 *
 * Features:
 * - Feature 1
 * - Feature 2
 * - Feature 3
 *
 * @component
 * @param {ComponentProps} props - Component props
 * @returns {React.ReactElement} Description of what is rendered
 */

'use client'; // For client components

import React from 'react';

interface ComponentProps {
  /** Description of this prop */
  propName: string;
  /** Optional prop description */
  optionalProp?: number;
}

const ComponentName: React.FC<ComponentProps> = ({ propName, optionalProp }) => {
  // Implementation
};

export default ComponentName;
```

---

## 🪝 Custom Hooks Pattern

```tsx
/**
 * Hook: Clear name describing what it does
 *
 * Detailed explanation of functionality and use cases.
 *
 * @param {Type} parameter - Parameter description
 * @returns {Type} Return value description
 * @example
 * // Usage example code here
 * const result = useMyHook(param);
 */
export const useMyHook = (parameter: Type): ReturnType => {
  // Hook implementation
  return value;
};
```

---

## 💾 Section Component Pattern

```tsx
/**
 * [SectionName]Section Component
 *
 * Displays the [section name] section with [brief description].
 *
 * Features:
 * - Feature list
 *
 * @component
 * @returns {React.ReactElement} [Section name] section
 */

'use client';

import React, { useState, useCallback } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { portfolioData } from '@/data';

const [SectionName]Section: React.FC = () => {
  // Extract data from centralized source
  const data = portfolioData.[section];

  // State management
  const [state, setState] = useState<Type>(initialValue);

  // Handlers with useCallback for memoization
  const handleAction = useCallback(() => {
    // Handler logic
  }, [dependencies]);

  return (
    <section
      id="[section-id]"
      className="bg-gradient-to-br from-gray-50 to-white px-4 py-20 dark:from-gray-900 dark:to-gray-800 sm:px-6 lg:px-8"
      role="region"
      aria-label="[Section] section"
    >
      <div className="container mx-auto max-w-7xl">
        <SectionHeading
          title="Section Title"
          subtitle="Section subtitle"
          className="mb-12"
        />

        {/* Content here */}
      </div>
    </section>
  );
};

export default [SectionName]Section;
```

---

## 🎯 Type Definition Pattern

```typescript
/**
 * Main interface for [domain]
 *
 * @interface
 * @property {string} id - Unique identifier
 * @property {string} name - Item name
 * @property {string} [optional] - Optional property
 */
export interface ItemType {
  /** Unique identifier */
  id: string;
  /** Item name or title */
  name: string;
  /** Optional description field */
  description?: string;
  /** Status with specific values */
  status: 'active' | 'inactive';
}
```

---

## 🔄 Effect Hook Pattern

```tsx
/**
 * Effect: Clear description of what this effect does
 *
 * Details about why this effect exists, what events it listens to,
 * and what cleanup it performs.
 */
useEffect(() => {
  // Handler function 1
  const handler1 = (e: Event) => {
    // Logic here
  };

  // Handler function 2
  const handler2 = (e: Event) => {
    // Logic here
  };

  // Get element reference
  const element = ref.current;
  if (element) {
    // Attach event listeners
    element.addEventListener('event1', handler1);
    element.addEventListener('event2', handler2);
  }

  // Cleanup function - removes listeners to prevent memory leaks
  return () => {
    if (element) {
      element.removeEventListener('event1', handler1);
      element.removeEventListener('event2', handler2);
    }
  };
}, [dependencies]); // List dependencies
```

---

## 📊 Data Usage Pattern

```tsx
// 1. Import data from centralized source
import { portfolioData } from '@/data';

// 2. Extract needed section
const sectionData = portfolioData.[section];

// 3. Use with type safety
interface TypedData extends typeof sectionData {
  // Type definitions
}

// 4. Map through arrays
{sectionData.items.map((item, index) => (
  <Card key={item.id} item={item} index={index} />
))}
```

---

## 🎨 Styling Patterns

### Conditional Styling

```tsx
<div className={`base-class ${condition ? 'conditional-class' : ''}`}>
  Content
</div>

// Or with complex conditions:
<div
  className={`
    base-class
    ${isFeatured ? 'featured-styles' : 'normal-styles'}
    ${isLoading ? 'loading-state' : 'ready-state'}
  `}
>
  Content
</div>
```

### Animation Patterns

```tsx
// With dynamic delay
const animationDelay = index * 0.1; // 0.1s between items
style={{ animation: `fadeInUp 0.6s ease-out ${animationDelay}s both` }}

// Or using constants
import { ANIMATION } from '@/lib/constants';
style={{ animation: `fadeInUp ${ANIMATION.DURATIONS.NORMAL} ease-out both` }}
```

### Dark Mode

```tsx
{
  /* Default (light mode) dark:applies in dark mode */
}
<div className="bg-white text-gray-900 dark:bg-gray-800 dark:text-white">Content</div>;

{
  /* Using dark mode prefix */
}
<p className="text-gray-700 dark:text-gray-300">Paragraph</p>;
```

---

## ♿ Accessibility Patterns

### Semantic HTML

```tsx
{
  /* ✅ Good - semantic landmarks */
}
<section id="portfolio" role="region" aria-label="Portfolio section">
  <h2>Projects</h2>
  {/* Content */}
</section>;

{
  /* ❌ Bad - generic divs without context */
}
<div>
  <div>Projects</div>
</div>;
```

### ARIA Labels

```tsx
{/* Buttons and interactive elements */}
<button aria-label="Close modal">✕</button>
<button aria-label="View project gallery">Gallery</button>

{/* Images */}
<img src="photo.jpg" alt="Project name and brief description" />

{/* Links */}
<a href="/project" aria-label="View React E-commerce project">
  View project
</a>
```

### Keyboard Navigation

```tsx
// Focusable elements in tab order
<button className="focus:outline-none focus:ring-2 focus:ring-primary-500">
  Click me
</button>

// Skip to content link
<a href="#main" className="sr-only focus:not-sr-only">
  Skip to main content
</a>
```

---

## 🚀 Performance Patterns

### Memoization

```tsx
/**
 * Use useCallback for event handlers passed to child components
 * Prevents unnecessary re-renders of children
 */
const handleClick = useCallback(() => {
  // Handler logic
}, [dependencies]);

// Pass to child
<Child onClick={handleClick} />;
```

### Lazy Image Loading

```tsx
<img
  src={imageUrl}
  alt="Description"
  loading="lazy" // Browser-native lazy loading
  className="transition-transform duration-500"
/>
```

### Conditional Rendering

```tsx
// ✅ Good - simple checks
{isLoaded && <Content />}

// ✅ Good - multiple states
{isLoading ? (
  <LoadingSpinner />
) : isError ? (
  <ErrorMessage />
) : (
  <Content />
)}

// ❌ Avoid - complex logic in JSX
{items.filter(i => i.active).map(...)}
```

---

## 🔧 Error Handling Pattern

```tsx
/**
 * Handler: Action with error handling
 * Includes loading state and error messaging
 */
const handleAction = useCallback(async () => {
  try {
    setIsLoading(true);
    setError(null);

    // Perform action
    const result = await performAction();

    // Handle success
    setSuccess(true);
  } catch (err) {
    // Handle error
    setError(err instanceof Error ? err.message : 'Unknown error');
  } finally {
    // Cleanup
    setIsLoading(false);
  }
}, []);
```

---

## 📦 Import Organization Pattern

```tsx
// 1. React and Next.js imports
import React, { useState, useCallback } from 'react';
import Image from 'next/image';

// 2. Component imports (from @/ aliases)
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';

// 3. Utility and hook imports
import { portfolioData } from '@/data';
import { useScrollToSection } from '@/lib/hooks/useInteractions';
import { ANIMATION } from '@/lib/constants';

// 4. Type imports
import type { ProjectItem } from '@/types';
```

---

## ✅ Checklist for New Components

- [ ] Start with JSDoc comment block
- [ ] Define TypeScript interfaces for props
- [ ] Extract data from data.js if needed
- [ ] Use @/ path aliases for imports
- [ ] Add aria-label to section or interactive elements
- [ ] Include inline comments for complex logic
- [ ] Memoize handlers with useCallback
- [ ] Clean up side effects (event listeners, subscriptions)
- [ ] Test keyboard navigation
- [ ] Test dark mode
- [ ] Test responsive (mobile, tablet, desktop)
- [ ] Run type-check: `yarn type-check`

---

Last Updated: January 29, 2026
