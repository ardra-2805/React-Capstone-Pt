import "./styles.css";

function About() {
  return (
    <section className="about-section">
      <div className="about-text">
        <h2 className="title">Little Lemon</h2>
        <br></br>
        <p className="location">Chicago</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus omnis magni aut placeat! Eligendi praesentium corrupti voluptatibus, dolorum delectus ut enim obcaecati rerum sunt quasi in mollitia at est possimus!
        </p>
      </div>
      <div className="about-images">
        <img
          src="Mario and Adrian A.jpg"
          alt="chefs"
          className="about-img"
        />
        <img
          src="Mario and Adrian b.jpg"
          alt="kitchen"
          className="about-img"
        />
      </div>
    </section>
  );
}

export default About;