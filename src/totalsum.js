import React from "react";

export default class TotalSum extends React.Component {
  constructor(props) {
    super(props);
  }

  sum() {
    let res = this.props.products.map((item) => item.price * item.count);
    let gg = res.reduce((acc, cur) => acc + cur);

    return gg
  }

  render() {
    const sum = this.sum();

    return <div>Загальна вартість: {sum}</div>;
  }
}
