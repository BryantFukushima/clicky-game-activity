import React, { Component } from "react";
import "./Section.css";
import data from "../data.json"

const Item = props => (
  <img
    src={props.image}
    onClick={() => props.clicked(props.id)}
    className="game-section__img"
    alt="item"
  />
);

class Section extends Component {
  state = {
    data
  };
  componentDidMount() {
    this.setState({ data: this.mix(this.state.data) });
  }
  mix = data => {
    let i = data.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = data[i];
      data[i] = data[j];
      data[j] = temp;
    }
    return data;
  };
  itemClicked = id => {
  const newData = this.state.data.map(item => {
    const newItem = { ...item };
    if (newItem.id === id) {
      if (!newItem.clicked) {
        newItem.clicked = true;
      }
    }
    alert(newItem.clicked);
    return newItem;
  });

  this.setState({
    data: this.mix(newData)
  })
};
  render() {
    return(
      <div className="game-section">
        {this.state.data.map(item => (
          <Item
              id={item.id}
              image={item.image}
              clicked={this.itemClicked}
            />
        ))}
      </div>
    );
  }
};

export default Section;
