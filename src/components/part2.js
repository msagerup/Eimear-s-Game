import React from "react";
import { Button } from "semantic-ui-react";

function PartTwo(props) {
  return (
    <div>
      {props.stepOn ? (
        <div>
          <p>
            As you heard his muffled scream and a crack of his nose breaking
            under your foot you think about how glorious yesterdays victory was,
            yet another town conqured!
          </p>
          <p>
            You think to yourself: <q>ah, I should get dressed...</q> and walk
            over to the table where your clothes and an selection of weapons lay
          </p>
          <p>
            You have a few choises of clothing and weapons. You deside to pick
            up:
          </p>
          <Button onClick={props.weapons.bind(this, "axe")}>Axe</Button>
          <Button onClick={props.weapons.bind(this, "shieldAndSword")}>
            Shield and Sword
          </Button>
          <Button onClick={props.weapons.bind(this, "dobbleDaggers")}>
            Doubble Daggers
          </Button>
        </div>
      ) : (
        <div>
          <p>
            You feel petty for the naked man laying on the ground, smiling
            nervously, as your foot brushes just over his head as you step over
            him and get out of bed.
          </p>
          <p>
            You look at the man with discust and tell him to disapear!{" "}
            <q>Ye..ye..yes, stright away</q> the man mutters as he runs out the
            door butt-naked.
          </p>
          <p>
            You think to yourself: <q>ah, I should get dressed...</q> and walk
            over to the table where your clothes and an selection of weapons lay
          </p>
          <p>
            You have a few choises of clothing and weapons. You deside to pick
            up:
            <Button onClick={props.weapons.bind(this, "axe")}>Axe</Button>
            <Button onClick={props.weapons.bind(this, "shieldAndSword")}>
              Shield and Sword
            </Button>
            <Button onClick={props.weapons.bind(this, "dobbleDaggers")}>
              Doubble Daggers
            </Button>
          </p>
        </div>
      )}
    </div>
  );
}

export default PartTwo;
