import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import Sentry from '@sentry/vue'
import App from './App.vue'
import router from './router/index'

const app = createApp(App)

// Sentry.init({
//   app,
//   dsn: 'https://7acb9c5701818a74fcb910a81db1b6dc@o4508782373371904.ingest.us.sentry.io/4508782406598656',
//   integrations: [Sentry.browserTracingIntegration({ router }), Sentry.replayIntegration()],
//   // Tracing
//   tracesSampleRate: 1.0, //  Capture 100% of the transactions
//   // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
//   tracePropagationTargets: ['localhost', /^https:\/\/yourserver\.io\/api/],
//   // Session Replay
//   replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
//   replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
// })

app.use(createPinia()).use(router)

app.mount('#app')
