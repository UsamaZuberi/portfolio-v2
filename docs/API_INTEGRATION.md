# API Integration Guide

## Overview

This portfolio is now ready for REST API integration. By default, it uses static data, but can be switched to fetch data from a backend API.

## Setup

### 1. Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3001/api

# Enable API fetching (set to true when backend is ready)
NEXT_PUBLIC_USE_API=false
NEXT_PUBLIC_ENABLE_CACHE=false
```

### 2. File Structure

```
lib/
├── api.ts           # Core HTTP client utilities (get, post, put, delete, patch)
├── services.ts      # API service functions for each data type
├── config.ts        # API endpoints and configuration
└── hooks/
    └── useApi.ts    # React hooks for data fetching and mutations
```

## Usage

### Fetching Data

```typescript
import { useApi } from '@/lib/hooks/useApi';
import { fetchProjects } from '@/lib/services';

function MyComponent() {
  const { data, loading, error, refetch } = useApi(() => fetchProjects());

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;

  return <ProjectList projects={data?.projects} />;
}
```

### Submitting Forms (Mutations)

```typescript
import { useMutation } from '@/lib/hooks/useApi';
import { submitContactForm } from '@/lib/services';

function ContactForm() {
  const { mutate, loading, error } = useMutation(submitContactForm);

  const handleSubmit = async (formData) => {
    const result = await mutate(formData);
    if (result.success) {
      // Handle success
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <button disabled={loading}>Submit</button>
      {error && <ErrorMessage error={error} />}
    </form>
  );
}
```

## API Endpoints

### Profile/Hero Data

- `GET /api/profile` - Returns profile information

**Response:**

```json
{
  "name": "Muhammad Usama Zuberi",
  "title": "Front-end Web Developer",
  "bio": "...",
  "email": "usama.zuberi1010@gmail.com",
  "availability": true,
  "stats": {
    "yearsExperience": 3,
    "projectsCompleted": 10,
    "satisfaction": 100
  },
  "techStack": ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS"],
  "socialLinks": [...]
}
```

### Projects

- `GET /api/projects` - Returns all projects
- `GET /api/projects/:id` - Returns single project
- `GET /api/projects?featured=true` - Returns featured projects

**Response:**

```json
{
  "projects": [...],
  "featured": [...]
}
```

### Skills

- `GET /api/skills` - Returns categorized skills

**Response:**

```json
{
  "coreSkills": [...],
  "web3Skills": [...],
  "toolsAndOthers": [...]
}
```

### Experience & Education

- `GET /api/experience` - Returns work experience
- `GET /api/education` - Returns education history

### Contact

- `POST /api/contact` - Submit contact form

**Request:**

```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "message": "Hello..."
}
```

## Feature Flags

Toggle features using environment variables:

- `NEXT_PUBLIC_USE_API` - Enable/disable API fetching
- `NEXT_PUBLIC_ENABLE_CACHE` - Enable client-side caching
- `NEXT_PUBLIC_ENABLE_ANALYTICS` - Enable analytics tracking

## Migration Steps

### When Backend is Ready:

1. **Update Environment Variables**

   ```bash
   NEXT_PUBLIC_API_URL=https://your-api.com/api
   NEXT_PUBLIC_USE_API=true
   ```

2. **Update Components**
   Replace static data imports with API hooks:

   ```typescript
   // Before
   import { portfolioProjects } from '@/lib/constants';

   // After
   import { useApi } from '@/lib/hooks/useApi';
   import { fetchProjects } from '@/lib/services';

   const { data, loading, error } = useApi(() => fetchProjects());
   const projects = data?.projects || [];
   ```

3. **Add Loading States**

   ```typescript
   if (loading) return <LoadingSpinner />;
   if (error) return <ErrorMessage error={error} />;
   ```

4. **Update Contact Form**
   Already integrated with `/api/contact` route.
   Update handler to use new backend if needed.

## Error Handling

All API calls return a consistent response format:

```typescript
{
  data?: T;      // Success data
  error?: string; // Error message
  message?: string; // Additional info
}
```

Components should handle:

- Loading states
- Error states
- Empty data states
- Network failures

## Caching

Optional client-side caching (when `NEXT_PUBLIC_ENABLE_CACHE=true`):

- Profile: 5 minutes TTL
- Projects: 10 minutes TTL
- Skills: 15 minutes TTL

## Testing

Test API integration:

1. Start your backend server
2. Set `NEXT_PUBLIC_USE_API=true`
3. Update `NEXT_PUBLIC_API_URL` to your backend URL
4. Restart Next.js dev server
5. Check browser network tab for API calls

## TypeScript Support

All API responses are fully typed. Import types from `@/types`:

```typescript
import type { Project, Skill, Experience, Education } from '@/types';
```

## Next Steps

1. Build backend API matching the endpoint structure above
2. Update environment variables
3. Test each endpoint
4. Add error boundaries for production
5. Implement proper error logging
6. Add request retry logic if needed
7. Consider adding React Query or SWR for advanced caching
