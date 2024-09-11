import { bootstrap } from "./bootstrap";

const container = document.createElement("div");
const shadow = container.attachShadow({ mode: "open" });

fetch(import.meta.env.VITE_BUILT_URL + "/style.css")
  .then((response) => response.text())
  .then((css) => {
    const styleElement = document.createElement("style");
    styleElement.textContent = css;
    shadow.appendChild(styleElement);
  });

container.id = import.meta.env.VITE_WIDGET_ID;

container.style.setProperty("zIndex", `${Number.MAX_SAFE_INTEGER}`);
container.style.setProperty("position", "fixed");
container.style.setProperty("bottom", "1.5rem");
container.style.setProperty("right", "1.5rem");

document.body.appendChild(container);

bootstrap(shadow as unknown as Element);
