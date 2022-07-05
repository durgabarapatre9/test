import { useState } from "react";
import { UpperCaseLetter, LowerCaseLetter, Number, Symbol } from "../Char";

const GeneratePassword = () => {
  const [password, setPassword] = useState("your password :");
  const [Uppercase, setUpperCase] = useState<boolean>(false);
  const [Lowercase, setLowerCase] = useState<boolean>(false);
  const [Numbers, setNumbers] = useState<boolean>(false);
  const [Symbols, setSymbols] = useState<boolean>(false);

  const HandleChange = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    let character = "";
    if (UpperCaseLetter && Uppercase === true) {
      character = character + UpperCaseLetter;
    }
    if (LowerCaseLetter && Lowercase === true) {
      character = character + LowerCaseLetter;
    }
    if (Symbol && Symbols === true) {
      character = character + Symbol;
    }
    if (Number && Numbers) {
      character = character + Number;
    }
    setPassword(character);
  };
  
  return (
    <>
      <div>
        <nav
          className="navbar navbar-light bg-info"
          style={{ justifyContent: "center", top: "0", position: "sticky" }}
        >
          <h6 className="navbar-text">PASSWORD GENERATOR</h6>
        </nav>
        <br></br>
        <div
          style={{
            height: "100px",
            boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
            marginLeft: "25% ",
            width: "50%",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <h3>{password}</h3>
        </div>
        <br></br>
        <div
          className="container"
          style={{ justifyContent: "center", width: "50%" }}
        >
          <h2 className="Heading_tag">Customize your password</h2>
          <hr></hr>

          <div className="container1">
            <div
              style={{
                width: "50%",
                display: "inline",
                margin: "5%",
                fontSize: "1.125rem",
              }}
            >
              <label>Password Length</label>
              <br></br>
              <input type="number" max={50} min={15} defaultValue="15"></input>
            </div>

            <div style={{ display: "inline", width: "50%" }}>
              <div className="check_box">
                <input
                  type="checkbox"
                  className="checkbox_input"
                  checked={Uppercase}
                  onChange={(e) => setUpperCase(e.target.checked)}
                ></input>
                <label>Uppercase</label>
              </div>
              <div className="check_box">
                <input
                  type="checkbox"
                  className="checkbox_input"
                  checked={Lowercase}
                  onChange={(e) => setLowerCase(e.target.checked)}
                ></input>
                <label>Lowercase</label>
              </div>
              <div className="check_box">
                <input
                  type="checkbox"
                  className="checkbox_input"
                  checked={Numbers}
                  onChange={(e) => setNumbers(e.target.checked)}
                ></input>
                <label>Numbers</label>
              </div>
              <div className="check_box">
                <input
                  type="checkbox"
                  className="checkbox_input"
                  checked={Symbols}
                  onChange={(e) => setSymbols(e.target.checked)}
                ></input>
                <label>Symbols</label>
              </div>
            </div>
          </div>
          <button
            className="btn btn-danger"
            style={{ borderRadius: "4%" }}
            onClick={HandleChange}
          >
            Generate Password
          </button>
        </div>
      </div>
    </>
  );
};
export default GeneratePassword;
