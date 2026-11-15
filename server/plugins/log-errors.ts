// Nitro hides the stack of server errors in production (the response says `"stack": ""`) and
// nothing reaches `wrangler pages deployment tail`. Log it, so intermittent 500s such as
// "Cannot read properties of undefined (reading 'meta')" can be traced to a file and line.
export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('error', (error, { event }) => {
    console.error(`[server-error] ${event?.method ?? ''} ${event?.path ?? ''} ${error?.message}\n${error?.stack ?? ''}`)
  })
})
