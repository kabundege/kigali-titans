import Logo from "../assets/LOGO.png";
import Hand from "../assets/hand.png";
import Hoop from "../assets/hoop.png";
import Arrow from "../assets/arrow.svg";

const date = new Date();

const scroll = () => {
  window.scroll({
    top: window.innerHeight,
    left: 0,
    behavior: 'smooth'
  });
}


const FirstScreen = () => (
  <div className="firstscreen">
    <header>
      <img src={Logo} alt="" />
      <ul>
        <li onClick={scroll}>+ Join</li>
        <li onClick={scroll}>About us</li>
        <li onClick={scroll}>Contact us</li>
      </ul>
    </header>
    <h1 className="header-name">
      <span>kigali</span>
      <span>Titans</span>
    </h1>
    <div className="parent">
        <div className="scroll-down" onClick={scroll}>
            <img src={Arrow} alt="" />
        </div>
        <div className="calendar">
            <section/>
            <h1>{date.getDate()}</h1>
            <h2>{date.toLocaleDateString('default',{ weekday:'long' })}</h2>
            <h3>{date.toLocaleDateString('default',{ month:'long' })}</h3>
        </div>
        <div className="page-counter">
            <h4>01</h4>
            <span/>
            <h4>03</h4>
        </div>
        <img className="hand" src={Hand} alt="" />
        <img className="hoop" src={Hoop} alt="" />
        <h3 className="ball">
            <span>B</span>
            <span>LL</span>
        </h3>
        <h3 className="text">
        <section>Basket</section>
        <section>Club</section>
      </h3>
    </div>
  </div>
);

export default FirstScreen;
