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
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="#">Your Name Here</a>.
    </div>
  </>
  );
}
