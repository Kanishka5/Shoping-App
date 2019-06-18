import React from "react";
import { Modal, Button } from "antd";

import "./grid";

class Cart extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
      cart: []
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    console.log(this.props.cartItem);
    if (this.props.cartItem) {
      return (
        <div>
          <Button type="primary" onClick={this.showModal}>
            Open Modal
          </Button>
          <Modal
            map={this.props.cartItem}
            title="Basic Modal"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <ul>
              {this.state.map.map(c => (
                <li>
                  {c.name} | units {c.units}
                </li>
              ))}
            </ul>
          </Modal>
        </div>
      );
    } else {
      return (
        <div>
          <Button type="primary" onClick={this.showModal}>
            Open Modal
          </Button>
          <Modal
            title="Basic Modal"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <h1>Cart is empty</h1>
          </Modal>
        </div>
      );
    }
  }
}

export default Cart;
