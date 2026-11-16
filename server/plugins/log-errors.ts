// Nitro hides the stack of server errors in production (the response says `"stack": ""`) and
// nothing reaches `wrangler pages deployment tail`. Log it, so intermittent 500s such as
// "Cannot read properties of undefined (reading 'meta')" can be traced to a file and line.
export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('error', (error, { event }) => {
    // 404s (bots, typos) are expected; only 5xx are worth a stack in the tail.
    const status = (error as { statusCode?: number })?.statusCode ?? 500
    if (status < 500) return
    console.error(`[server-error] ${event?.method ?? ''} ${event?.path ?? ''} ${error?.message}\n${error?.stack ?? ''}`)
  })
})
