import { useState, useEffect, useRef } from "react";
import { getInitialData } from "./index.js";

import Footer from "./Components/Footer/Footer.jsx";

import "./Styles/App.module.css";
import styles from "./Styles/App.module.css";
import styles2 from "./Styles/App2.module.css";

export default function App() {
  const [myNotesState, setMyNotesState] = useState(getInitialData());
  const [originalNotes, setOriginalNotes] = useState(getInitialData());
  const [searchState, setSearchState] = useState("");

  const [titleState, setTitleState] = useState("");
  const [bodyState, setBodyState] = useState("");
  const [archivedState, setArchivedState] = useState(false);

  function handleMyNotes(e) {
    e.preventDefault();

    if (titleState === "") {
      alert("Please include title on your Note !");
      return;
    }

    const newNote = {
      id: +new Date(),
      title: titleState,
      body: bodyState,
      createdAt: new Date().toISOString(),
      archived: archivedState,
    };

    setMyNotesState((prevState) => [...prevState, newNote]);
    setOriginalNotes((prevState) => [...prevState, newNote]);
  }

  function handleDeleteMyNotes(e) {
    let filteredNotes = [...myNotesState];
    filteredNotes = filteredNotes.filter(
      (item) => item.id !== parseInt(e.target.value),
    );

    setMyNotesState(filteredNotes);

    let filteredOrginalNotes = [...originalNotes];
    filteredOrginalNotes = filteredOrginalNotes.filter(
      (item) => item.id !== parseInt(e.target.value),
    );
    setOriginalNotes(filteredOrginalNotes);

    // console.log("Delete");
    // console.log(filteredNotes);
  }

  function handleArchiveMyNote(e) {
    let archivedNotes = [...myNotesState];
    archivedNotes = archivedNotes.filter(
      (item) => item.id === parseInt(e.target.value),
    );
    archivedNotes[0].archived = true;

    let newNotes = [...myNotesState];
    newNotes = newNotes.filter((item) => item.id !== parseInt(e.target.value));

    newNotes.push(archivedNotes[0]);

    setMyNotesState(newNotes);

    // console.log(newNotes);
  }

  function handleUnarchiveMyNote(e) {
    let archivedNotes = [...myNotesState];
    archivedNotes = archivedNotes.filter(
      (item) => item.id === parseInt(e.target.value),
    );
    archivedNotes[0].archived = false;

    let newNotes = [...myNotesState];
    newNotes = newNotes.filter((item) => item.id !== parseInt(e.target.value));

    newNotes.push(archivedNotes[0]);

    setMyNotesState(newNotes);
  }

  useEffect(() => {
    let filteredNotes = [...myNotesState];

    filteredNotes = filteredNotes.filter((item) =>
      item.title.toLowerCase().includes(searchState.toLowerCase()),
    );

    if (searchState.trim() !== "") {
      setMyNotesState(filteredNotes);
    } else if (searchState.trim() === "") {
      setMyNotesState(originalNotes);
    }

    // console.log("Original");
    // console.log(originalNotes);
    // console.log("Filtered");
    // console.log(filteredNotes);
  }, [searchState]);

  // console.log(titleState);
  // console.log(bodyState);
  // console.log(archivedState);
  // console.log([...myNotesState]);

  return (
    <>
      <div className="main-container">
        <div className={styles.parentContainer}>
          <div className={styles.childContainer}>
            <h1>Notes Input</h1>
            <form className={styles.formGroup}>
              <div>
                <p
                  style={{
                    position: "absolute",
                    top: "-3px",
                    left: "100px",
                    fontSize: "13px",
                  }}
                >
                  {50 - titleState.length} Karakter tersedia
                </p>
                <label htmlFor="titleInput">Title :</label>
                <input
                  type="text"
                  name="titleInput"
                  id="titleInput"
                  value={titleState}
                  onChange={(e) => {
                    if (titleState.length >= 50) {
                      alert("You can't input more that 50 Character");
                      e.target.value = "";
                    }
                    setTitleState(e.target.value);
                  }}
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
        <div className={styles.searchForm}>
          <label htmlFor="searchNotes">
            Search Notes:
            <input
              type="text"
              name="searchNotes"
              id="searchNotes"
              value={searchState}
              onChange={(e) => setSearchState(e.target.value)}
            />
          </label>
        </div>
        <div className={styles2.parentContainer}>
          <h1>Active Notes</h1>
          <div className={styles2.childContainer}>
            {myNotesState.length >= 0 &&
            !myNotesState.some((item) => !item.archived) ? (
              <h1 style={{ color: "red" }}>No Notes....</h1>
            ) : (
              myNotesState.map((item, i) => {
                if (item.archived === false) {
                  return (
                    <div key={i} className={styles2.contentContainer}>
                      <h1>{item.title}</h1>
                      <h5>{item.createdAt}</h5>
                      <div>
                        <div>
                          <p>{item.body}</p>
                        </div>
                        <div className={styles2.buttonGroup}>
                          <button value={item.id} onClick={handleDeleteMyNotes}>
                            Delete Note
                          </button>
                          <button value={item.id} onClick={handleArchiveMyNote}>
                            Archive Note
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                }
              })
            )}
          </div>
          <h1>Archived Notes</h1>
          <div className={styles2.childContainer}>
            {myNotesState.length >= 0 &&
            !myNotesState.some((item) => item.archived) ? (
              <h1 style={{ color: "red" }}>No Archived Notes yet</h1>
            ) : (
              myNotesState.map((item, i) => {
                if (item.archived === true) {
                  return (
                    <div key={i} className={styles2.contentContainer}>
                      <h1>{item.title}</h1>
                      <h5>{item.createdAt}</h5>
                      <div>
                        <div>
                          <p>{item.body}</p>
                        </div>
                        <div className={styles2.buttonGroup}>
                          <button value={item.id} onClick={handleDeleteMyNotes}>
                            Delete Note
                          </button>
                          <button
                            value={item.id}
                            onClick={handleUnarchiveMyNote}
                          >
                            {item.archived ? "Unarchive Note" : "Archive Note"}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                }
              })
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
