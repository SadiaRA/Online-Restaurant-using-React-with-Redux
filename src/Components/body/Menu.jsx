import React, { Component } from "react";
import MenuItem from "./MenuItem";
import DishDetails from "./DishDetails";
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from "reactstrap";
import {connect} from 'react-redux'
const mapStateToProps = state => {
  return {
      dishes: state.dishes,
      comments: state.comments
  }
}

class Menu extends Component {
  state = {
   
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
    document.title='Menu'
    const menu = this.props.dishes.map((item) => {
      return (
        <MenuItem dish={item} key={item.id} DishSelect={this.onDishSelect} />
      );
    });

    let dishDetail = null;
    if (this.state.selectedDish != null) {
      const comments=this.props.comments.filter(comment=>{
        return (comment.dishId===this.state.selectedDish.id)
      })
      dishDetail = <DishDetails comments={comments} dish={this.state.selectedDish} />;
    }
    return (
      <div className="container">
        <div className="row">
          <CardColumns>{menu}</CardColumns>
          <Modal isOpen={this.state.modalOpen} >
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

export default connect(mapStateToProps)(Menu);