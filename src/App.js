import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>To-Do List</h2>
          <span className="filter">
            <label><input type="checkbox" id="active" value="active" />Show active</label>
            <input type="text" placeholder="Search" />
          </span>
          <div className="bar">
            <span></span>
          </div>
        </div>
        <div className="App-content">
          <div className="col-1">
            <span className="category-container">
              <input type="text" placeholder="" />
              <input type="button" value="Add" />
            </span>
            <div className="categories" id="categoriesTree">
              <ul>
                <li>
                  Element 1
                </li>
                <li>
                  Element 2
                </li>
                <li>
                  Element 3
                  <ul>
                    <li>
                      Element 1
                    </li>
                    <li>
                      Element 2
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-2">
            <span className="task-container">
              <input type="text" placeholder="" />
              <input type="button" value="Add" />
            </span>
            <div className="task-elements">
              <div className="task-element">
                <span>
                  <label><input type="checkbox" id="active" value="active" />To-Do Item</label>
                  <input type="button" value="Edit"/>
                </span>
              </div>
              <div className="task-element">
                <span>
                  <label><input type="checkbox" id="active" value="active" />To-Do Item</label>
                  <input type="button" value="Edit"/>
                </span>
              </div>
              <div className="task-element">
                <span>
                  <label><input type="checkbox" id="active" value="active" />To-Do Item</label>
                  <input type="button" value="Edit"/>
                </span>
              </div>
            </div>
          </div>
          <div className="clear"/>
        </div>
      </div>
    );
  }
}

export default App;
