import { useState } from "react";
import "./App.css";
import { IoMdHome } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { IoMdHelpCircle } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { FaExchangeAlt } from "react-icons/fa";
import React from "react";
import Requests from "./Requests";
import SetValues from "./SettingValues/SetValues";
import SetResult from "./SettingValues/SetResult";
import Flags from "./Flags"
import Hours from "./Hours";


function App() {
  const [fromCurrency, setFromCurrency] = useState("");
  const [fromCurrencyValue, setFromCurrencyValue] = useState("");
  const [toCurrency, setToCurrency] = useState("");

  const [fullData, setFullData] = useState([]);
  const handleData = (data) => {
    setFullData(data);
  };

  const [responsedValue, setResponsedValue] = useState(null);
  const responsedCurrency = (value) =>{
    setResponsedValue(value)

  }

  const changeCurrency = (e) => {
    const selectElement = e.target;
    const selectedOptionIndex = selectElement.selectedIndex;
    const selectedOption = selectElement.options[selectedOptionIndex];
    const selectedOptionText = selectedOption.innerText;
    const selectedOptionValue = e.target.value;




    setFromCurrency(selectedOptionText);
    setFromCurrencyValue(selectedOptionValue);
  };

  const ResultCurrency = (e) => {
    const selectElement = e.target;
    const selectedOptionIndex = selectElement.selectedIndex;
    const selectedOption = selectElement.options[selectedOptionIndex];
    const selectedOptionText = selectedOption.innerText;
    const selectedOptionValue = e.target.value;
    setToCurrency(selectedOptionText);

  }

  const Alert = () =>{
    alert("We're still working on that")
  }

  return (
    <div className="main">
      <aside className="menu">
        <div className="font">
          <h1>CURRENT</h1>
          <h2>CY</h2>
        </div>
        <table width={"80%"} height={"320px"}>
          <tbody>
            <tr>
              <td>
                <div>
                  <IoMdHome style={{ color: "grey" }} /> <a href="#">Home </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div onClick={Alert}>
                  <MdDashboard style={{ color: "grey" }} />{" "}
                  <a href="#">Dashboard</a>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div onClick={Alert}>
                  <IoMdHelpCircle style={{ color: "grey" }} />
                  <a href="#">Help</a>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div onClick={Alert}>
                  <IoSettings style={{ color: "grey" }} />
                  <a href="#">Settings</a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <footer>
          <p>CURRENTCY © 2024 </p>
          <p> All Rights Reserved</p>
        </footer>
      </aside>
      <div className="container">
        <div className="top">
          <form>
            <Hours/>
          </form>
          <div className="profile" >
            <a href="#" onClick={Alert}>Emil Kazimov </a>{" "}
            <span>
              <CgProfile onClick={Alert}
                style={{ color: "grey", fontSize: "30px", cursor: "pointer" }}
              />
            </span>
          </div>
        </div>
        <div className="middle">
          <div className="Input">
          <Flags currencyCode={fromCurrency}/>
            <select onChange={changeCurrency} defaultValue={""}>
              <Requests sendData={handleData} fromCurrency={fromCurrency} />
            </select>
            <SetValues
              fromCurrency={fromCurrency}
              fromCurrencyValue={fromCurrencyValue}
              toCurrency={toCurrency}
              OnResponsedValue={responsedCurrency}

            />
          </div>
          <div className="icon">
            <FaExchangeAlt style={{color: "lightblue"}}/>
          </div>
          <div className="exchangedResult">
            <Flags currencyCode={toCurrency}/>
            <select onChange={ResultCurrency}>
            <Requests sendData={handleData} toCurrency={toCurrency} />
            </select>
            <SetResult toCurrency={toCurrency} fromCurrencyValue={fromCurrencyValue} result={responsedValue} />
          </div>
        </div>
      
      </div>
    </div>
  );
}

export default App;
