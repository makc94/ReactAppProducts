import React from "react";

export default class User extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <tbody>
        <tr>
          <td>{this.props.name}</td>
          <td>{this.props.price}</td>
          <td>{this.props.count}</td>
          <td>{this.props.price * this.props.count}</td>
          <td>
            <button
              className="button"
              onClick={this.props.delete.bind(null, this.props.index)}
            >
              delete
            </button>
          </td>
          <td>
            <input
              className="checked"
              type="checkbox"
              checked={this.props.checked}
            />
          </td>
        </tr>
      </tbody>
    );
  }
}
