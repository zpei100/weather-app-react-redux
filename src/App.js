import React, { Component } from 'react';
import Weather_panel from './components/weather_panel';

class App extends Component {
  render() {
    return (
      <div>
        <div className="text-center mb-5 container">
          Amazing weather application under construction!!!
        </div>
        <Weather_panel></Weather_panel>
      </div>
    );
  }
}

export default App;
