import { useState } from "react";
import { UpperCaseLetter, LowerCaseLetter, Number, Symbol } from "../Char";

const GeneratePassword = () => {
  interface type {
    setPasswordlength: React.Dispatch<React.SetStateAction<number>>;
  }
  const [password, setPassword] = useState<string>("");
  const [Uppercase, setUpperCase] = useState<boolean>(false);
  const [Lowercase, setLowerCase] = useState<boolean>(false);
  const [Numbers, setNumbers] = useState<boolean>(false);
  const [Symbols, setSymbols] = useState<boolean>(false);
  const [text, setText] = useState("");
  const [passwordLength, setPasswordlength] = useState<number>(30);

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
   
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      let index = Math.round(Math.random() * character.length);
      password += character.charAt(index);
    }
    setPassword(password);
    console.log(password.length);
  };
  const copyPassword = () => {
    console.log(password);
    var textField = document.createElement('textarea')
    textField.innerText = password
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
    console.log("copied")
  };

  return (
    <>
      <div>
        <nav
          className="navbar navbar-light bg-info"
          style={{ justifyContent: "center", top: "0", position: "sticky" }}
        >
          <h4
            className="navbar-text"
            style={{ color: "white", textShadow: "2px 2px 3px black" }}
          >
            PASSWORD GENERATOR
          </h4>
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
          <div style={{ display: "inline", width: "70%" }}>
            <h3 style={{ padding: "3%", marginTop: "2%" }}>{password}</h3>
          </div>
          <div style={{ padding: "3%", display: "inline", width: "30%" }}>
            <button
              className="fa fa-copy"
              style={{ zoom: "2", color: "gray", border: "none" }}
              onClick={copyPassword}
            ></button>
          </div>
        </div>
        <br></br>
        <div
          className="container"
          style={{ justifyContent: "center", width: "50%" }}
        >
          <h2 className="Heading_tag">
            Customize your password <span></span>
            <span>
              <i className="fa fa-key"></i>
            </span>
          </h2>
          <hr></hr>

          <div className="container1">
            <div
              style={{
                width: "50%",
                display: "inline",
                margin: "5%",
                fontSize: "1.125rem",
                zoom: "1.3",
              }}
            >
              <label>Password Length</label>
              <br></br>
              <input
                type="number"
                max={50}
                min={5}
                value={passwordLength}
                onChange={(e: any) => setPasswordlength(e.target.value)}
              ></input>
            </div>

            <div
              style={{
                display: "inline",
                width: "50%",
                zoom: "1.3",
                fontWeight: "lighter",
              }}
            >
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
            style={{ borderRadius: "5%", padding: "1%", fontSize: "1.2rem" }}
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
