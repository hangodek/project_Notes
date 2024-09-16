import styles from "./Notes.module.css";

export default function Notes() {
  return (
    <>
      <div className={styles.parentContainer}>
        <div className={styles.childContainer}>
          <div>
            <h1>Test 1</h1>
          </div>
          <div>
            <h1>Test 2</h1>
          </div>
          <div>
            <h1>Test 2</h1>
          </div>
          <div>
            <h1>Test 2</h1>
          </div>
        </div>
      </div>
    </>
  );
}
