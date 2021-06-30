import "./card.css";

const Card = ({ card }) => {
  const { title, address, type, price, id } = card;
  const dom = "https://site";
  return (
    <a href={`${dom}/details/${id}.`} className="card">
      <div className="card__image-block">
        <div
          style={
            type === "IndependentLiving" ? { backgroundColor: "#006F79" } : null
          }
          className="card__type"
        >
          <p className="card__type-text">
            {type === "IndependentLiving"
              ? "Independent living"
              : "Restaurant & Support available"}
          </p>
        </div>
      </div>
      <h2 className="card__title">{title}</h2>
      <p className="card__text">{address}</p>
      <p className="card__text">
        New Properties for Sale from{" "}
        <b>£{new Intl.NumberFormat("ru-RU").format(price)}</b>
      </p>
      <p className="card__sub-text">Shared Ownership Available </p>
    </a>
  );
};

export default Card;
