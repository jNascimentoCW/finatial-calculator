import reactImgLogo from "../../src/assets/investment-calculator-logo.png";
import "./Header.css";

export default function Header() {
    return (
        <header id="header">
            <img src={reactImgLogo} alt="" />
            <h1>React Investment Calculator</h1>
        </header>
    );
}
