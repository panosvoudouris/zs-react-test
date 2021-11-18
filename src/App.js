import React from "react";
import { getData } from "./api/api";
import "./styles.css";

export default function App() {
  // Retrieve the data from the api (getData) and display in a table
  return (
    <div className="App">
      <h1>Sensor array dashboard</h1>
      <p>
        Sort by
        <select>
          <option value="type">Type</option>
          <option value="value">Value</option>
          <option value="location">Location</option>
        </select>
      </p>
      <p>The data</p>
      <table>
        <thead>
          <tr>
            <td>type</td>
            <td>value</td>
            <td>online</td>
            <td>location</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Data goes here...</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
