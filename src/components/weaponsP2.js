import React, { Component } from "react";

export default class WeaponsP2 extends Component {
  constructor(props) {
    super(props);
    this.weaponSelected = this.weaponSelected.bind(this);
  }

  weaponSelected(weapon) {
    switch (weapon.name) {
      case "The Shield Meidens Sword of Death and Shield of Doom":
        return (
          <div>
            As you walk over to the table you select the Sword and Shield, its
            name is {weapon.name}.
            <ul>
              <li>It has a damage of {weapon.hitPoints}</li>
              <li>It has a defence of {weapon.defence}</li>
            </ul>
          </div>
        );
    }
  }

  render() {
    return <div>{this.weaponSelected(this.props.selectedWeapon)}</div>;
  }
}
