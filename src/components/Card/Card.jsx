import styles from "./Card.module.scss";
import ReactStars from "react-rating-stars-component/dist/react-stars";

const Card = () => {
  return (
    <div className={styles.card}>
      <img
        className={styles.image}
        src="https://www.contiki.com/media/2goh2ek3/gondola-ride-venice-italy-2.jpg?format=webp&quality=80"
        alt="trip photo"
      />

      <div className={styles.card__text}>
        <div className={styles.header}>
          <p className={styles.header__secondary}>2 Countries, 15 Days</p>
          <h2 className={styles.header__primary}>Simply Italy</h2>
        </div>
        <div className={styles.rating}>
          <ReactStars edit={false} isHalf={true} value={4.6} />
          <p className={styles.rating__value}>4.4</p>
        </div>
        <div className={styles.price}>
          <p className={styles.price__new}>From €1,832</p>
          &#8226;
          <p className={styles.price__old}> Price €2,155</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
