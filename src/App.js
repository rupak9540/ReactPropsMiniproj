import "./styles.css";
import React, { Component } from "react";
import Cart from "./components/Cart";

class App extends Component {
  constructor() {
    super();
    this.state = {
      product: [
        {
          name: "Linkedin",
          imgesrc: "https://cdn-icons-png.flaticon.com/128/145/145807.png",
          Link: "https://in.linkedin.com/",
          id: 1,
          background: "orange"
        },
        {
          name: "Github",
          imgesrc: "https://cdn-icons-png.flaticon.com/128/733/733553.png",
          Link:
            "https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjDrPvq7tn5AhVCBCsKHeEAATgYABAAGgJzZg&ohost=www.google.com&cid=CAESbOD2AIgTCvFlhbDEZdY3oIVyeeocVKfl3z6y622tCZam4ls_wr8tIARMINzU2ZXi7QniowLGAC7c-BDLkWzvZ0K2ZnaLePpqNIw_Gqz2HoohbtPvGhR5tTVDx2RD-I9MafoFH5j9a2qZFyoEWA&sig=AOD64_2BynjF7-l7MC3oeviTlnWuOrle2Q&q&adurl&ved=2ahUKEwjB6_Tq7tn5AhUJ03MBHccXCvMQ0Qx6BAgDEAE",
          id: 2,
          background: "yellow"
        },
        {
          name: "Twitter",
          imgesrc: "https://cdn-icons-png.flaticon.com/128/733/733579.png",
          Link: "https://twitter.com/login",
          id: 3,
          background: "lightgrey"
        }
      ]
    };
  }
  render() {
    const { product } = this.state;
    return (
      <div className="App">
        <h1>Reach me</h1>
        <Cart product={product} />
      </div>
    );
  }
}
export default App;
