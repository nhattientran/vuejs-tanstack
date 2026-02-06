# Security Architecture

## Authentication Flow

```
Login Form
    │
    ▼
Auth API Call
    │
    ├─► Success: Store token (http-only cookie preferred)
    │           Set auth state
    │           Redirect to dashboard
    │
    └─► Failure: Show error message
```

## Route Protection

```typescript
// beforeLoad guard in route.ts
beforeLoad: ({ context }) => {
  if (!context.auth.isAuthenticated) {
    throw redirect({ to: '/login' });
  }
}
```

## HTTP Security

### Axios Interceptors

```typescript
// Request: Add auth token
http.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response: Handle 401
http.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);
```

## Security Best Practices

1. **Never store secrets in code**
   - Use environment variables
   - Validate env vars at startup

2. **XSS Prevention**
   - Vue escapes content by default
   - Avoid `v-html` with user input
   - Sanitize any HTML rendering

3. **CSRF Protection**
   - Use same-site cookies
   - Validate request origins

4. **Input Validation**
   - Zod schemas for all inputs
   - Validate on client and server

5. **Dependencies**
   - Regular security audits: `pnpm audit`
   - Keep dependencies updated
