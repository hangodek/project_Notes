import styles from "./Notes.module.css";

export default function Notes() {
  return (
    <>
      <div className={styles.parentContainer}>
        <h1>Active Notes</h1>
        <div className={styles.childContainer}>
          <div className={styles.contentContainer}>
            <h1>Test 1</h1>
            <div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Deserunt fuga ipsa maiores perferendis possimus quisquam
                  tempore! Accusantium atque consequuntur dolor doloribus eum
                  ipsam molestias neque odit optio, quod reprehenderit
                  temporibus.
                </p>
              </div>
              <div className={styles.buttonGroup}>
                <button>Delete Note</button>
                <button>Archive Note</button>
              </div>
            </div>
          </div>
          <div className={styles.contentContainer}>
            <h1>Test 1</h1>
            <div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Deserunt fuga ipsa maiores perferendis possimus quisquam
                  tempore! Accusantium atque consequuntur dolor doloribus eum
                  ipsam molestias neque odit optio, quod reprehenderit
                  temporibus.
                </p>
              </div>
              <div>
                <button>Delete Note</button>
                <button>Archive Note</button>
              </div>
            </div>
          </div>
          <div className={styles.contentContainer}>
            <h1>Test 1</h1>
            <div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Deserunt fuga ipsa maiores perferendis possimus quisquam
                  tempore! Accusantium atque consequuntur dolor doloribus eum
                  ipsam molestias neque odit optio, quod reprehenderit
                  temporibus.
                </p>
              </div>
              <div className={styles.buttonGroup}>
                <button>Delete Note</button>
                <button>Archive Note</button>
              </div>
            </div>
          </div>
          <div className={styles.contentContainer}>
            <h1>Test 1</h1>
            <div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Deserunt fuga ipsa maiores perferendis possimus quisquam
                  tempore! Accusantium atque consequuntur dolor doloribus eum
                  ipsam molestias neque odit optio, quod reprehenderit
                  temporibus.
                </p>
              </div>
              <div className={styles.buttonGroup}>
                <button>Delete Note</button>
                <button>Archive Note</button>
              </div>
            </div>
          </div>
        </div>
        <h1>Archived Notes</h1>
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
