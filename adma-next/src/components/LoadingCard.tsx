import styles from './LoadingCard.module.css';

export default function LoadingCard() {
  return (
    <div className={styles.card}>
      <div className={styles.image}></div>
      <div className={styles.title}></div>
      <div className={styles.text}></div>
    </div>
  );
}
