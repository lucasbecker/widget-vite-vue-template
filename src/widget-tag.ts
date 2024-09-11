import { bootstrap } from "./bootstrap.js";

customElements.define(
  import.meta.env.VITE_WIDGET_TAG_NAME,
  class extends HTMLElement {
    async connectedCallback() {
      const shadow = this.attachShadow({ mode: "open" });

      await fetch(import.meta.env.VITE_BUILT_URL + "/style.css")
        .then((response) => response.text())
        .then((css) => {
          const styleElement = document.createElement("style");
          styleElement.textContent = css;
          shadow.appendChild(styleElement);
        });

      bootstrap(shadow as unknown as Element);
    }
  }
);
