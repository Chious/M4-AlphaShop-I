import { ReactComponent as Logo } from "../assets/icons/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NightlightIcon from "@mui/icons-material/Nightlight";

import "../style/Header.scss";

export default function Header() {
  return (
    <>
      <section id="header">
        <Logo className="header-logo icon" style={{ fill: "black" }}></Logo>
        <nav className="header-nav">
          <a href="">男裝</a>
          <a href="">女裝</a>
          <a href="">最新消息</a>
          <a href="">客製產品</a>
          <a href="">聯絡我們</a>
        </nav>

        <SearchIcon className="header-btn icon-search" />
        <ShoppingCartIcon className="header-btn icon-cart" />
        <NightlightIcon className="header-btn icon-moon" />
      </section>
    </>
  );
}
