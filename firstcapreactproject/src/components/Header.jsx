import "./styles.css";

function Header() {
  return (
    <header className="header">
      <div className="header-text">
        <h1 className="title">Little Lemon</h1>
        <p className="location">Chicago</p>
        <p className="description">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button className="reserve-btn">Reserve a table</button>
      </div>
      <div>
        <img
          src="restauranfood.jpg"
          alt="food sample"
          className="header-img"
        />
      </div>
    </header>
  );
}

export default Header;