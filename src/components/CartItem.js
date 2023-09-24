import React from "react";
import { useDispatch } from "react-redux";
import {
  removeProductFromCart,
  decreaseQuantity,
  increaseQuantity,
} from "../redux/slices/cartSlice";
import styles from "../styles/CartItem.module.css";

const CartItem = ({
  id,
  itemName,
  itemPrice,
  imagePath,
  imageName,
  quantity,
  size,
}) => {
  const dispatch = useDispatch();

  // Handle removing an item from the cart
  const handleRemoveItem = (itemId) => {
    dispatch(removeProductFromCart(itemId));
  };

  // Handle decreasing the quantity of an item in the cart
  const handleDecreaseQuantity = (itemId, quantity) => {
    if (quantity === 1) {
      dispatch(removeProductFromCart(itemId));
    } else {
      dispatch(decreaseQuantity(itemId));
    }
  };

  // Handle increasing the quantity of an item in the cart
  const handleIncreaseQuantity = (itemId) => {
    dispatch(increaseQuantity(itemId));
  };

  return (
    <div className={styles.itemContainer}>
      <div className={styles.itemImage}>
        <img src={imagePath} alt={imageName} />
      </div>
      <div className={styles.itemInfo}>
        <div className={styles.info}>
          <div className={styles.itemName}>{itemName}</div>
          <div className={styles.itemSize}>{size}</div>
        </div>
        <div className={styles.itemPrice}>INR {itemPrice}</div>
      </div>
      <div className={styles.buttons}>
        <div onClick={() => handleRemoveItem(id)} className={styles.deleteIcon}>
          {/* Delete icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none">
            <path
              d="M6 2H10M2 4H14M12.6667 4L12.1991 11.0129C12.129 12.065 12.0939 12.5911 11.8667 12.99C11.6666 13.3412 11.3648 13.6235 11.0011 13.7998C10.588 14 10.0607 14 9.00623 14H6.99377C5.93927 14 5.41202 14 4.99889 13.7998C4.63517 13.6235 4.33339 13.3412 4.13332 12.99C3.90607 12.5911 3.871 12.065 3.80086 11.0129L3.33333 4M6.66667 7V10.3333M9.33333 7V10.3333"
              stroke="#F70000"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className={styles.quantityContainer}>
          {/* Buttons for increasing and decreasing quantity */}
          <button
            onClick={() => handleIncreaseQuantity(id)}
            className={styles.button}>
            +
          </button>
          <div className={styles.quantity}>{quantity}</div>
          <button
            onClick={() => handleDecreaseQuantity(id, quantity)}
            className={styles.button}>
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
