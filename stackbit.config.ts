import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  ssgName: 'vite',
  nodeVersion: '18',
  contentSources: [
    {
      name: 'git',
      type: 'git',
      models: {
        page: {
          type: 'page',
          urlPath: '/{slug}',
          fields: [
            { name: 'title', type: 'string', required: true },
            { name: 'content', type: 'markdown' },
            { name: 'slug', type: 'string', required: true }
          ]
        },
        index: {
          type: 'page',
          urlPath: '/',
          filePath: 'src/pages/Index.tsx',
          fields: [
            { name: 'title', type: 'string', required: true },
            { name: 'heroTitle', type: 'string' },
            { name: 'heroSubtitle', type: 'string' },
            { name: 'contractAddress', type: 'string' }
          ]
        },
        learn: {
          type: 'page',
          urlPath: '/learn',
          filePath: 'src/pages/Learn.tsx',
          fields: [
            { name: 'title', type: 'string', required: true },
            { name: 'content', type: 'markdown' }
          ]
        },
        products: {
          type: 'page',
          urlPath: '/products',
          filePath: 'src/pages/Products.tsx',
          fields: [
            { name: 'title', type: 'string', required: true },
            { name: 'content', type: 'markdown' }
          ]
        },
        about: {
          type: 'page',
          urlPath: '/about',
          filePath: 'src/pages/About.tsx',
          fields: [
            { name: 'title', type: 'string', required: true },
            { name: 'content', type: 'markdown' }
          ]
        },
        tokenomics: {
          type: 'page',
          urlPath: '/tokenomics',
          filePath: 'src/pages/Tokenomics.tsx',
          fields: [
            { name: 'title', type: 'string', required: true },
            { name: 'content', type: 'markdown' }
          ]
        }
      }
    }
  ],
  // Define which components can be used in the visual editor
  components: {
    Navigation: {
      type: 'component',
      filePath: 'src/components/Navigation.tsx',
    },
    Features: {
      type: 'component',
      filePath: 'src/components/Features.tsx',
    },
    Stats: {
      type: 'component',
      filePath: 'src/components/Stats.tsx',
    },
    Footer: {
      type: 'component',
      filePath: 'src/components/Footer.tsx',
    },
    TokenAnalyzer: {
      type: 'component',
      filePath: 'src/components/TokenAnalyzer.tsx',
    }
  },
  // Add Stackbit-specific dependencies
  assets: {
    referenceType: 'static',
    staticDir: 'public',
    uploadDir: 'uploads',
    publicPath: '/'
  }
});