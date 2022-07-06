import { useEffect, useState } from "react";
import { UpperCaseLetter, LowerCaseLetter, Number, Symbol } from "../Char";

const useGeneratePassword = () => {
  const [password, setPassword] = useState<string | any>(
    localStorage.getItem("password")
  );
  const [Uppercase, setUpperCase] = useState<boolean>(
    localStorage.getItem("Uppercase") === "true" ? true : false
  );
  const [Lowercase, setLowerCase] = useState<boolean>(
    localStorage.getItem("Lowercase") === "true" ? true : false
  );
  const [Numbers, setNumbers] = useState<boolean>(
    localStorage.getItem("Numbers") === "true" ? true : false
  );
  const [Symbols, setSymbols] = useState<boolean>(
    localStorage.getItem("Symbols") === "true" ? true : false
  );
  const [text, setText] = useState(localStorage.getItem("text"));
  const [passwordLength, setPasswordlength] = useState<number>(15);
  useEffect(() => {
    if (password === "") {
      localStorage.setItem("password", JSON.stringify(password));
    } else if (password) {
      localStorage.setItem("password", password);
    }
  });
  useEffect(() => {
    if (Uppercase === true) {
      localStorage.setItem("Uppercase", JSON.stringify(Uppercase));
    } else if (Uppercase === false) {
      localStorage.setItem("Uppercase", JSON.stringify(Uppercase));
    }
  });
  useEffect(() => {
    if (Lowercase === true) {
      localStorage.setItem("Lowercase", JSON.stringify(Lowercase));
    } else if (Lowercase === false) {
      localStorage.setItem("Lowercase", JSON.stringify(Lowercase));
    }
  });
  useEffect(() => {
    if (Numbers === true) {
      localStorage.setItem("Numbers", JSON.stringify(Numbers));
    } else if (Lowercase === false) {
      localStorage.setItem("Numbers", JSON.stringify(Numbers));
    }
  });
  useEffect(() => {
    if (Symbols === true) {
      localStorage.setItem("Symbols", JSON.stringify(Symbols));
    } else if (Lowercase === false) {
      localStorage.setItem("Symbols", JSON.stringify(Symbols));
    }
  });
  useEffect(() => {
    if (text === "") {
      localStorage.setItem("text", text);
    } else if (text) {
      localStorage.setItem("text", text);
    }
  });

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
    if (Number && Numbers==true) {
      character = character + Number;
    }
    if (Symbols && Uppercase && Lowercase && Number) {
     setText("Your Password Is very strong !"); 
    }
     if(Symbols&&Lowercase&&Uppercase){
      setText("Your Password Is Meadium !");
    }

    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      let index = Math.round(Math.random() * character.length);
      password += character.charAt(index);
    }
    setPassword(password);
    // if (password.length < 15 && Number) {
    //   setText("your Password Is To weak !");
    // }
  };

  const copyPassword = () => {
    console.log(password);
    var textField = document.createElement("textarea");
    textField.innerText = password;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
    console.log("copied");
  };
  return [
    HandleChange,
    password,
    Uppercase,
    Lowercase,
    Numbers,
    Symbols,
    text,
    passwordLength,
    setUpperCase,
    setLowerCase,
    setNumbers,
    setSymbols,
    setPasswordlength,
    copyPassword,
  ] as const;
};

export default useGeneratePassword;
