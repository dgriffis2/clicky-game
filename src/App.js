import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Navbar from "./components/Navbar"
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    count: 0
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends
    for (let i = 0; i<friends.length;i++){
      if(id===friends[i].id){
        alert(friends[i].name)
      }
    }
    
    // if(id===friends.id)
    // const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    // this.setState({ friends, clicked:false  });
  };
  componentDidMount(){
    this.randomFriends()
    this.setState({count:0})
  }
  componentDidUpdate(){
    if(this.state.count>11){
      alert(`You Win!`)
      this.setState({count:0})
      window.location.reload()
    }
  }

  shuffle =(a) =>{
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
  randomFriends = () =>{
    const friends = this.state.friends
    const randomFriends = this.shuffle(friends)
    this.setState({friends:randomFriends})
    // const newFriends=[]
  }

  clickFriend= () =>{
    // this.FriendCard
    this.randomFriends()
      const count=this.state.count
      const adder = count+1
      this.setState({count:adder})
  }

  renderFriends = () =>{
    let comp;
    comp= friends.map(friend => (
      <FriendCard
      clickFriend={this.clickFriend}
      // cardClicked={this.cardClicked}
      id={friend.id}
      // clicked={this.state.clicked}
      key={friend.id}
      name={friend.name}
      image={friend.image}
      />
    ))

    return comp
  }


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Navbar score={this.state.count}/>
        <Title>Friends List</Title>
        {this.renderFriends()}
      </Wrapper>
    );
  }
}

export default App;
