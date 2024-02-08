import styles from "./FoodItems.module.css";

const Item = ({ foodItem, bought, handleBuyButton }) => {
  return (
    <>
      <li
        className={`${styles["kg-item"]} list-group-item ${bought && "active"}`}
      >
        <span className={styles["kg-span"]}>{foodItem}</span>
        <button className="btn btn-danger" onClick={handleBuyButton}>
          Buy
        </button>
      </li>
    </>
  );
};
export default Item;
