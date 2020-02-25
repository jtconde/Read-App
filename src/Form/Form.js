import React from 'react';

import './Form.css';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: '',
      title: '',
      text: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    if (e.target.id === 'name') {
      this.setState({ name: e.target.value });
    }
    if (e.target.id === '_id') {
      this.setState({ _id: e.target.value });
    }
  }

  componentWillReceiveProps({ item }) {
    this.setState(item);
  }

  render() {
    const { handleSubmit, handleClose } = this.props;
    return (
      <div className="Modal">
        <h4 className="text-center">Items Form</h4>
        <div className="col-md-6 col-md-offset-3">
          <form>
            <div className="form-group">
              <label>_id</label>
              <input
                type="text"
                value={this.state._id}
                onChange={this.handleInputChange}
                id="_id"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>name</label>
              <textarea
                value={this.state.name}
                onChange={this.handleInputChange}
                cols="30"
                id="name"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <div className="Button" onClick={() => handleSubmit(this.state)}>
                {' '}Save
              </div>
              <div className="Button ModalButton--close" onClick={handleClose}>
                {' '}Cancel
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
