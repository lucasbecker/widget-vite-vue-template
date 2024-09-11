import { createApp } from "vue";
import App from "./app.vue";

export function bootstrap(
  target: string | Element,
  attributes?: Record<string, any>
) {
  const app = createApp(App, attributes);

  app.mount(target);
}
