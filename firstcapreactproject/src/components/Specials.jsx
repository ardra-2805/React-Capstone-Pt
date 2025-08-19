const specials = [
    {
        title: "Greek Salad",
        price: "$12.99",
        desc: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        img: "greek salad.jpg"
    },
    {
        title: "Bruschetta",
        price: "$5.99",
        desc: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        img: "bruchetta.svg"
    },
    {
        title: "Lemon Dessert",
        price: "$5.00",
        desc: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        img: "lemon dessert.jpg"
    }
];

function Specials() {
    return (
        <section className="specials">
            <h2>This week specials!</h2>
            <div className="special-cards">
                {specials.map((item) => (
                    <div key={item.title} className="card">
                        <img src={item.img} alt={item.title} />
                        <h3>{item.title}</h3>
                        <p className="price">{item.price}</p>
                        <p>{item.desc}</p>
                        <p><b>Order a delivery 🚴</b></p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Specials;