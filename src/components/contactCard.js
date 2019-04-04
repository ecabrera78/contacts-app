import React, { Component } from "react";
import faker from "faker";

class ContactCard extends Component {
  render() {
    return (
      <div>
        <div className="column">
          <img src={faker.image.avatar()} alt="member pic" />
        </div>
        <div className="column">
          <div className="infoRow">
            <label>Employee id:</label>
            <span>{faker.random.number()}</span>
          </div>
          <div className="infoRow">
            <label>Name:</label>
            <span>{faker.name.firstName() + " " + faker.name.lastName()}</span>
          </div>
          <div className="infoRow">
            <label>Building:</label>
            <span>AAAAAAAAAAAAAAA</span>
          </div>
          <div className="infoRow">
            <label>Floor:</label>
            <span>2222</span>
          </div>
          <div className="infoRow">
            <label>e-mail:</label>
            <span>{faker.internet.email()}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactCard;
