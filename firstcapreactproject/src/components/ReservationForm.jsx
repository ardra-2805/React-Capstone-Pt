import { useState } from "react";
import "./styles.css";

function ReservationForm() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "Birthday",
  });

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.date) newErrors.date = "Please select a date";
    if (!formData.time) newErrors.time = "Please select a time";
    if (formData.guests < 1) newErrors.guests = "At least 1 guest required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setShowModal(true);
      setFormData({ date: "", time: "", guests: 1, occasion: "Birthday" });
    }
  };

  return (
    <div className="reservation-page">
      <h2 className="fade-in">Table Reservation</h2>
      <form onSubmit={handleSubmit} className="reservation-form scale-in">
        <label>
          Date
          <input type="date" name="date" value={formData.date} onChange={handleChange} />
          {errors.date && <span className="error">{errors.date}</span>}
        </label>

        <label>
          Time
          <select name="time" value={formData.time} onChange={handleChange}>
            <option value="">-- Select Time --</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="19:00">20:00</option>
            <option value="19:00">21:00</option>
            <option value="19:00">22:00</option>
          </select>
          {errors.time && <span className="error">{errors.time}</span>}
        </label>

        <label>
          Number of Guests
          <input type="number" name="guests" value={formData.guests} onChange={handleChange} />
          {errors.guests && <span className="error">{errors.guests}</span>}
        </label>

        <label>
          Occasion
          <select name="occasion" value={formData.occasion} onChange={handleChange}>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <button type="submit" className="reserve-btn">Make your reservation</button>
      </form>

      {showModal && (
        <div className="modal-overlay fade-in">
          <div className="modal scale-in">
            <h3>🎉 Reservation Confirmed!</h3>
            <p>Your table has been reserved successfully.</p>
            <button onClick={() => setShowModal(false)} className="close-btn">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReservationForm;