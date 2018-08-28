import React from "react";
import "./FriendCard.css";

class FriendCard extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    clicked: false
  };

  // handleIncrement increases this.state.count by 1
  handleIncrement = (event) => {
    event.preventDefault()
    if(this.state.clicked===true){
      alert("You Lose!")
      window.location.reload()
    }else{

      this.setState({ clicked: true })
    }

  };




  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div clicked = {this.state.clicked} onClick={this.handleIncrement} className="card">
        <div onClick={() => this.props.clickFriend()} className="img-container">
          <img alt={this.props.name} src={this.props.image} />
        </div>
        <div onClick={() => this.props.clickFriend()} className="content">
          <ul>
            <li id="list-item" >
              <strong>Name:</strong> {this.props.name}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}





export default FriendCard;




// onClick={() => this.props.removeFriend(this.props.id)}