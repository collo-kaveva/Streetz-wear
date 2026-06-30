import { createStartHandler } from '@tanstack/start-server-core'
import { defaultStreamHandler } from '@tanstack/react-start-server'

const handler = createStartHandler(defaultStreamHandler)

export const fetch = handler
export default {
  fetch: handler,
}
