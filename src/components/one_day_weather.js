import React, { Component } from 'react';

export default class One_day_weather extends Component {
  render() {
    return (
      <div className="mb-3 container">
        <ol className="my-3 list-group">
          <li className="list-group-item text-center">
            {this.props.data.low}
          </li>
          <li className="list-group-item text-center">
            {this.props.data.high}
          </li>
          <li className="list-group-item text-center">
            {this.props.data.weather}
          </li>
        </ol>
      </div>
    );
  }
}
