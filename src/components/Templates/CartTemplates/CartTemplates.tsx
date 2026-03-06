import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { mockCart } from "@/lib/database/cart";
import { CartItem } from "@/types/types";
import { formatCurrency } from "@/utils/helper";

import styles from "./CartTemplates.module.scss";
import classNames from "classnames";
import Button from "@/components/Atoms/Button";
import Icons from "@/components/Atoms/Icons/Icons";

function CartTemplates() {
  const routes = useRouter();
  const [items, setItems] = useState<CartItem[]>(mockCart);
  const [animatingId, setAnimatingId] = useState<string | null>(null);
  const [removingId, setRemovingId] = useState<string | null>(null);
  const [isRemovingAll, setIsRemovingAll] = useState(false);

  const handleRemoveAll = () => {
    setIsRemovingAll(true);

    // chờ animation chạy xong
    setTimeout(() => {
      setItems([]);
      setIsRemovingAll(false);
    }, 350);
  };

  const handleRemove = (id: string) => {
    setRemovingId(id);

    setTimeout(() => {
      setItems((prev) => prev.filter((item) => item.product_id !== id));
      setRemovingId(null);
    }, 300);
  };

  const handleIncrease = (id: string) => {
    setAnimatingId(id);
    setItems((prev) =>
      prev.map((item) =>
        item.product_id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
    resetAnimation();
  };

  const handleDecrease = (id: string) => {
    setAnimatingId(id);
    setItems((prev) =>
      prev.map((item) =>
        item.product_id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
    resetAnimation();
  };

  const resetAnimation = () => {
    setTimeout(() => setAnimatingId(null), 200);
  };

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  /* ================= EMPTY CART ================= */
  if (items.length === 0) {
    return (
      <div className={styles.empty}>
        <h2>🛒 Giỏ hàng trống</h2>
        <p>Bạn chưa thêm sản phẩm nào vào giỏ hàng</p>
        <Button
          type="button"
          htmlType="tertiary"
          className={styles.button}
          postfixIcon={<Icons.ArrowRightIcon />}
          onClick={() => routes.push("/san-pham")}
        >
          Tiếp tục mua sắm
        </Button>
      </div>
    );
  }

  return (
    <div className={styles.cart}>
      <Button
        type="button"
        htmlType="tertiary"
        className={styles.removeAll}
        onClick={handleRemoveAll}
      >
        Xóa hết
      </Button>
      <div
        className={classNames(styles.list, {
          [styles.removingAll]: isRemovingAll,
        })}
      >
        {items.map((item) => (
          <div
            key={item.product_id}
            className={classNames(styles.item, {
              [styles.removing]: removingId === item.product_id,
            })}
          >
            <Image
              src={item.image[0]}
              alt={item.name}
              className={styles.image}
              width={40}
              height={40}
            />

            <div className={styles.info}>
              <h3 className={styles.name}>{item.name}</h3>
              <p className={styles.price}>{formatCurrency(item.price)}₫</p>

              <div className={styles.quantity}>
                <button
                  onClick={() => handleDecrease(item.product_id)}
                  disabled={item.quantity === 1}
                >
                  −
                </button>
                <span
                  className={classNames(styles.qty, {
                    [styles.bump]: animatingId === item.product_id,
                  })}
                >
                  {item.quantity}
                </span>
                <button onClick={() => handleIncrease(item.product_id)}>
                  +
                </button>
              </div>
            </div>

            <div className={styles.subtotal}>
              {formatCurrency(item.price * item.quantity)}₫
            </div>

            <button
              className={styles.remove}
              onClick={() => handleRemove(item.product_id)}
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <div className={styles.summary}>
        <div className={styles.total}>
          <span>Tổng cộng</span>
          <strong>{formatCurrency(totalPrice)}₫</strong>
        </div>

        <button className={styles.checkout}>Thanh toán</button>
      </div>
    </div>
  );
}

export default CartTemplates;
