import React, { Component } from 'react'
import {Button,  Confirm , Popup, Icon} from 'semantic-ui-react'
import axios from 'axios';

class DelStock extends Component {

  state = { open: false}

  show = () => this.setState({ open: true })
  handleConfirm = () => {
    this.setState({ open: false })
    axios.delete(`http://localhost:3001/api/stock/${this.props.BranchID}/${this.props.ProductID}`)
    .then(function (response) {
      console.log(response);
      window.location.reload();
    })
    .catch(function (error) {
      switch(error.response.data.status){
        case 500:
          alert(error.response.data.message);
          break;
      }
    });
  }
  handleCancel = () => this.setState({ open: false })

  render() {
    return (
      <div>
        <Popup inverted trigger={<Icon as='i' name='trash' link size='large' color='black' onClick={this.show}/>} content='Delete a stock'/>
        <Confirm
          open={this.state.open}
          content='Are you sure you want to delete this stock?'
          onCancel={this.handleCancel}
          onConfirm={this.handleConfirm}
        />
      </div>
    )
  }
}

export default DelStock