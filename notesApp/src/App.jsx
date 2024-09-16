import Form from "./Components/Form/Form.jsx";
import Notes from "./Components/Notes/Notes.jsx";
import "./Styles/App.css";

export default function App() {
  return (
    <>
      <div className="main-container">
        <Form />
        <Notes />
      </div>
    </>
  );
}
