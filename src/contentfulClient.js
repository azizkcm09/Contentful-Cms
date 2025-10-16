import { createClient } from 'contentful';

// Create Contentful client
const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID || '3kh097r1muk7',
  environment: import.meta.env.VITE_CONTENTFUL_ENVIRONMENT || 'master',
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN || 'YOUR_ACCESS_TOKEN'
});

export default client;