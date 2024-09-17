import { useState, useEffect } from "react";
import { getInitialData } from "../index.js";

import "./Styles/App.module.css";
import styles from "./Styles/App.module.css";
import styles2 from "./Styles/App2.module.css";

export default function App() {
  const [myNotesState, setMyNotes] = useState([]);

  const [titleState, setTitleState] = useState("");
  const [bodyState, setBodyState] = useState("");
  const [archivedState, setArchivedState] = useState(false);

  // console.log(getInitialData());

  function handleMyNotes(e) {
    e.preventDefault();

    const newNote = {
      id: +new Date(),
      title: titleState,
      body: bodyState,
      createdAt: new Date().toLocaleDateString("id-ID"),
      archived: archivedState,
    };

    setMyNotes((prevState) => [...prevState, newNote]);
  }

  function handleDeleteMyNotes(e) {
    let filteredNotes = [...myNotesState];
    filteredNotes = filteredNotes.filter(
      (item, index) => item.id != e.target.value,
    );

    setMyNotes(filteredNotes);
    console.log(filteredNotes);
  }

  useEffect(() => {
    setMyNotes(getInitialData());
  }, []);

  // console.log(titleState);
  // console.log(bodyState);
  // console.log(archivedState);
  console.log([...myNotesState]);

  return (
    <>
      <div className="main-container">
        <div className={styles.parentContainer}>
          <div className={styles.childContainer}>
            <h1>Notes Input</h1>
            <form className={styles.formGroup}>
              <div>
                <label htmlFor="titleInput">Title :</label>
                <input
                  type="text"
                  name="titleInput"
                  id="titleInput"
                  value={titleState}
                  onChange={(e) => setTitleState(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="bodyInput">Content :</label>
                <textarea
                  name="bodyInput"
                  id="bodyInput"
                  value={bodyState}
                  onChange={(e) => setBodyState(e.target.value)}
                ></textarea>
              </div>
              <div>
                <label htmlFor="readedCheck">Archive this note?</label>
                <input
                  type="checkbox"
                  name="readedCheck"
                  id="readedCheck"
                  value={archivedState}
                  onChange={(e) => setArchivedState(e.target.checked)}
                />
              </div>
              <button onClick={handleMyNotes}>Make Note</button>
            </form>
          </div>
        </div>
        <div className={styles2.parentContainer}>
          <h1>Active Notes</h1>
          <div className={styles2.childContainer}>
            {myNotesState.length === 0 ? (
              <h1 style={{ color: "red" }}>No Notes....</h1>
            ) : (
              myNotesState.map((item, i) => {
                return (
                  <div key={i} className={styles2.contentContainer}>
                    <h1>{item.title}</h1>
                    <div>
                      <div>
                        <p>{item.body}</p>
                      </div>
                      <div className={styles2.buttonGroup}>
                        <button value={item.id} onClick={handleDeleteMyNotes}>
                          Delete Note
                        </button>
                        <button>Archive Note</button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
          <h1>Archived Notes</h1>
          <div className={styles2.childContainer}>
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
      </div>
    </>
  );
}
