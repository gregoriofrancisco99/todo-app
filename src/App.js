import './style/global.scss';
import './style/responsive.scss';

import { Header } from './components/Header';
import { Main } from './components/Main';

export function App() {
  return (
    <>
      <Header />
      <Main />
    <div className="attribution">
      <p>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.</p>
      <p>Coded by <a href="https://gregoriofrancisco99.github.io/Rocket-Links/" target="_blank">Gregório Francisco</a>.</p>
    </div>
  </>
  );
}
