import React, { Component } from 'react';

import Modal from 'react-modal';

import FlipMove from 'react-flip-move';
import './List.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

class List extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      items: [],
    };

    this.openModal = this.openModal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.setState({
      items: this.props.items,
    });
  }

  openModal(story) {
    this.setState({ modalIsOpen: true });
  }

  handleSubmit = (item, props) => {
    this.setState({
      modalIsOpen: false,
    });
    if (item) {
      const items = this.state.items;
      items.push(item);
      this.setState({
        items,
      });
    }
    this.props.callback(item);
  };

  handleClose = () => {
    this.setState({
      modalIsOpen: false,
    });
  };

  handleDelete = item => {
    const i = this.state.items.indexOf(item);
    const items = this.state.items.splice(i, 1)
    this.setState({
      items
    });
  };

  render() {
    const { title, hint, itemTitle, itemText } = this.props;
    return (
      <div className="">

        {title &&
          <div className="ListHeader">
            <div className="title">Title</div>
            <div className="Button" onClick={this.openModal.bind(this, null)}>
              {' '}
              +Neu{' '}
            </div>
          </div>}

        <div className="List">
          <FlipMove
            duration={350}
            easing="ease-in-out"
            enterAnimation="accordionHorizontal"
          >
            {this.state.items.map(item => (
              <div className="Item" key={item._id}>
                <div className="Item__content">
                  <div className="title">
                    {`${item[itemTitle]} (${item._id})`}
                  </div>

                  {itemText && <p>{item[itemText]}</p>}
                </div>
                <div className=" Item__control">
                  <span
                    className="glyphicon glyphicon-remove"
                    onClick={this.handleDelete.bind(this, item)}
                  />
                </div>
              </div>
            ))}
          </FlipMove>
        </div>

        {hint &&
          <div className="ListFooter">
            <p>{hint}</p>
          </div>}

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.handleClose}
          style={customStyles}
          shouldCloseOnOverlayClick={false}
          contentLabel="Modal"
        >

          {React.cloneElement(this.props.children, {
            handleSubmit: this.handleSubmit,
            handleClose: this.handleClose,
          })}
        </Modal>
      </div>
    );
  }
}

export default List;
