import styles from "./Card.module.scss";
import ReactStars from "react-rating-stars-component/dist/react-stars";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

const Card = ({
  image,
  countries,
  duration,
  price_new,
  price_old,
  rating,
  title,
}) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={image} alt={title} />

      <div className={styles.card__text}>
        <div className={styles.header}>
          <p className={styles.header__secondary}>
            {countries} Countries, {duration} Days
          </p>
          <p className={styles.header__primary}>{title}</p>
        </div>
        <div className={styles.rating}>
          <ReactStars
            color={"#ffd700"}
            edit={false}
            isHalf={true}
            value={rating}
            size={14}
            filledIcon={<BsStarFill />}
            emptyIcon={<BsStar />}
            halfIcon={<BsStarHalf />}
          />
          <span className={styles.rating__value}>{rating}</span>
        </div>
        <div className={styles.price}>
          <p className={styles.price__new}>
            From{" "}
            {price_new.toLocaleString("en-Us", {
              style: "currency",
              currency: "EUR",
              maximumFractionDigits: "0",
            })}
          </p>
          &#8226;
          <p className={styles.price__old}>
            {" "}
            Price{" "}
            {price_old.toLocaleString("en-Us", {
              style: "currency",
              currency: "EUR",
              maximumFractionDigits: "0",
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
