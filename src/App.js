import React, { Component } from "react";
import { Container, Input, Button } from "semantic-ui-react";

import PartOne from "./components/part1";
import PartTwo from "./components/part2";
import WeaponsPt2 from "./components/weaponsP2";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charName: "",
      nameEntered: false,
      wrongName: true,
      adventure: false,
      stepOver: null,
      partTwo: false,
      selectedWeapon: null,
      weapons: {
        shieldAndSword: {
          hitPoints: 50,
          defence: 80,
          name: "The Shield Meidens Sword of Death and Shield of Doom"
        },
        axe: {
          hitPoints: 80,
          defence: 15,
          name: "The Axe of Fury, a.k.a : 'The Chopper-offer'"
        },
        dobbleDaggers: {
          hitPoints: 35,
          defence: 10,
          name: "Wind and Fury"
        }
      }
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.stepOn = this.stepOn.bind(this);
    this.stepOver = this.stepOver.bind(this);
    this.intro = this.intro.bind(this);
    this.weapons = this.weapons.bind(this);
  }

  // Handle the input
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  intro(charName) {
    const nameChange = this.state.nameEntered;

    if (
      (charName === "Eimear" && nameChange) ||
      (charName === "eimear" && nameChange)
    ) {
      return (
        <div>
          Hello there ! Princess Eimear! Are you ready for your adventure?
          {/* Button clicked yes, sets state to yes*/}
          <Button
            size="tiny"
            onClick={() => {
              this.setState({
                adventure: true
              });
            }}
          >
            yes
          </Button>
          {/* Button clicked no, sets state to no*/}
          <Button
            size="tiny"
            onClick={() => {
              this.setState({
                adventure: false
              });
            }}
          >
            no
          </Button>
        </div>
      );
    } else if (charName !== "Eimear" && nameChange) {
      return <div>Are you sure thats your name?, try again</div>;
    } else {
      return null;
    }
  }

  // Says yes to question for adventure

  handleSubmit(e) {
    this.intro();
    this.setState({
      nameEntered: true
    });
    e.preventDefault();
  }

  // StepOn
  stepOn() {
    this.setState({
      stepOver: true,
      partTwo: true
    });
  }

  // StepOver
  stepOver() {
    this.setState({
      stepOver: false,
      partTwo: true
    });
  }

  //Weapons
  weapons(w) {
    const weapon = this.state.weapons[w];
    return this.setState({
      selectedWeapon: weapon
    });
  }

  render() {
    const name = this.state.charName;
    return (
      <Container>
        <div className="App">
          <h2>Welcome to Eimaer's Game!</h2>
          <h3>What is your name?</h3>
          <form onSubmit={this.handleSubmit} className="formName">
            <Input
              type="text"
              name="charName"
              value={this.state.charName}
              onChange={this.onChange}
            />
            <Button type="submit">Thats my name!</Button>
          </form>
          {this.intro(name)}

          {/* Button to check current state*/}
          <button
            onClick={function() {
              console.log(this.state);
            }.bind(this)}
          >
            Check state
          </button>
          {/* Part One*/}
          {this.state.adventure && (
            <PartOne stepOn={this.stepOn} stepOver={this.stepOver} />
          )}
          {/* Part Two*/}
          {this.state.partTwo && (
            <PartTwo stepOn={this.state.stepOver} weapons={this.weapons} />
          )}
          {/* Part Two Weapon*/}
          {this.state.selectedWeapon && (
            <WeaponsPt2 selectedWeapon={this.state.selectedWeapon} />
          )}
        </div>
      </Container>
    );
  }
}

export default App;
