import React from "react";
import ReactDOM from "react-dom";
import User from "./user";
import AddProduct from "./addproduct";
import TotalSum from "./totalsum";
import "./style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { name: "Помідор", price: 10, count: 10, checked: true },
        { name: "Огірок", price: 20, count: 7, checked: true },
        { name: "Капуста", price: 310, count: 8, checked: true },
      ],
      cost: "",
    };
  }

  

  deleteProd(index) {
    this.state.products.splice(index, 1);
    this.setState({ products: this.state.products });
    console.log(index, "delete");
  }

  addInfo(name, price, count) {
    this.state.products.push({
      name: name,
      price: price,
      count: count,
      checked: true,
    });
    this.setState({ products: this.state.products });
    console.log(name, price, count);
  }

  render() {
    const list = this.state.products.map((item, index) => {
      return (
        <User
          key={index}
          index={index}
          name={item.name}
          price={item.price}
          count={item.count}
          checked={item.checked}
          delete={this.deleteProd.bind(this)}
        />
      );
    });

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Продукт</th>
              <th>Ціна</th>
              <th>Кількість</th>
              <th>Вартість</th>
            </tr>
          </thead>
          {list}
        </table>
        <AddProduct submit={this.addInfo.bind(this)} />
        <TotalSum products={this.state.products} />
      </div>
    );
  }
}

//
//
//
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
