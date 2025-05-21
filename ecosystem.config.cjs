module.exports = {
    apps: [
      {
        name: 'nuxt',
        port: '3000',
        exec_mode: 'cluster',
        instances: 'max', // Or set a specific number of instances
        script: './.output/server/index.mjs',
        env: {
          NODE_ENV: 'production',
          // Add other environment variables here
        },
        env_production: {
          NODE_ENV: 'production',
          // Add production-specific environment variables here
        }
      }
    ]
  }
  