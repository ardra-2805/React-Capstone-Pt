import "./styles.css";

function Ratings() {
  const reviews = [
    { name: "Maria Sanchez", rating: 5, image: "person2.jpg" },
    { name: "Antony Clifton", rating: 5, image: "person1.jpg" },
    { name: "Tamika Jackson", rating: 4, image: "person2.jpg" },
    { name: "Brandon Ming", rating: 4, image: "person1.jpg" },
  ];

  return (
    <section className="ratings-section">
      <h2>What people say about us!</h2>
      <div className="ratings-grid">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            {review.image ? (
              <img src={review.image} alt={review.name} className="avatar" />
            ) : (
              <div className="avatar placeholder"></div>
            )}
            <h3>{review.name}</h3>
            <div className="stars">
              {[...Array(review.rating)].map((_, i) => (
                <span key={i} className="star">★</span>
              ))}
            </div>
            <p className="review-text">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Ratings;