import styles from "./Form.module.css";

export default function Form() {
  return (
    <>
      <div className={styles.parentContainer}>
        <div className={styles.childContainer}>
          <h1>Notes Inputter</h1>
          <form action="" className={styles.formGroup}>
            <div>
              <label htmlFor="titleInput">Title :</label>
              <input type="text" name="titleInput" id="titleInput" />
            </div>
            <div>
              <label htmlFor="bodyInput">Content :</label>
              <textarea name="bodyInput" id="bodyInput"></textarea>
            </div>
            <div>
              <label htmlFor="readedCheck">Mark as Readed ? </label>
              <input type="checkbox" name="readedCheck" id="readedCheck" />
            </div>
            <button>Make Note</button>
          </form>
        </div>
      </div>
    </>
  );
}
