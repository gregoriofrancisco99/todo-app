import './../style/header.scss'
import sunIcon from './../images/icon-sun.svg';

export function Header () {
  return (
    <header>
      <h1 id="logo">Todo</h1>
      <a href="#" id="switch"><img src={sunIcon} alt="Switch appearance mode" /></a>
    </header>
  );
}