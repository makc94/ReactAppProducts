import React from "react";

export default class AddProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: "",
      price: "",
      count: "",
    };
  }
  changeProduct(e) {
    this.setState({ product: e.target.value });
    console.log(this.state.product);
  }

  changePrice(e) {
    this.setState({ price: e.target.value });
    console.log(this.state.price);
  }

  changeCount(e) {
    this.setState({ count: e.target.value });
    console.log(this.state.count);
  }

  render() {
    return (
      <div>
        <p>
          <input
            className="input"
            autoFocus
            placeholder="Введіть продукт"
            onChange={this.changeProduct.bind(this)}
            value={this.state.product}
          />
        </p>
        <p>
          <input
            className="input"
            placeholder="Введіть ціну"
            onChange={this.changePrice.bind(this)}
            value={this.state.price}
          />
        </p>
        <p>
          <input
            className="input"
            placeholder="Введіть кількість"
            onChange={this.changeCount.bind(this)}
            value={this.state.count}
          />
        </p>
        <p>
          <button
            type="button"
            onClick={this.props.submit.bind(
              null,
              this.state.product,
              this.state.price,
              this.state.count
            )}
          >
            Додати
          </button>
        </p>
      </div>
    );
  }
}
