import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
    <footer class="footer">
      <div class="footer-header">Connect with me</div>
      <ul class="list-non-bullet">
        <li class="list-item-inline secondary-link">
          <a class="link" href="https://github.com/imaxisXD/">
            <i class="fab fa-github fa-1x"></i> GitHub
          </a>
        </li>
        <li class="list-item-inline primary-link">
          <a class="link" href="https://www.linkedin.com/in/abhishek-ichi/">
            <i class="fab fa-linkedin fa-1x"></i> LinkedIn
          </a>
        </li>
      </ul>
    </footer>
  </StrictMode>,
  rootElement
);
