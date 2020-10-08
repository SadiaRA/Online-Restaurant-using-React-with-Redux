import React, { Component } from "react";
import Dishes from "../../data/Dishes";
import MenuItem from "./MenuItem";
import DishDetails from "./DishDetails";
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from "reactstrap";

class Menu extends Component {
  state = {
    dishes: Dishes,
    selectedDish: null,
    modalOpen: false,
  };

  onDishSelect = (dish) => {
    this.setState({
      selectedDish: dish,
      modalOpen: !this.state.modalOpen,
    });
  };
  modalClick = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  };

  render() {
    const menu = this.state.dishes.map((item) => {
      return (
        <MenuItem dish={item} key={item.id} DishSelect={this.onDishSelect} />
      );
    });

    let dishDetail = null;
    if (this.state.selectedDish != null) {
      dishDetail = <DishDetails dish={this.state.selectedDish} />;
    }
    return (
      <div className="container">
        <div className="row">
          <CardColumns>{menu}</CardColumns>
          <Modal isOpen={this.state.modalOpen} onClick={this.modalClick}>
            <ModalBody>{dishDetail}</ModalBody>
            <ModalFooter>
              <Button color="danger" onClick={this.modalClick}>
                Close
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}

export default Menu;
