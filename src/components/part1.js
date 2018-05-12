import React from "react";
import { Button } from "semantic-ui-react";

function PartOne(props) {
  return (
    <div>
      <h3>Once upon a time, in a land far, far away </h3>
      <p>
        There was a pricess called Eimear, she was a fierce warrior pricess who
        had recently captured the small village town of Lutinheim. She had made
        herself feared and envied by the villagers there. But unknown to her,
        her troops that had traveled with her had cowered away from her side, as
        she had made it during the festivities the night before that they would
        go on to capture the rest of the land, she was dead set on concuring the
        whole of the kingdom. They had ran away during the night, the cowards!!
      </p>
      <p>
        You are awoken by the rays of the morning sun shining down upon your
        naked body, a body that any man would dream to have. On the floor below
        your bed lay one of the pessents that you had taken so that you could
        please yourself, mind you no man had taken your virginity as you had
        found none that had been worthy...
      </p>
      <p>
        As you look down upton the man laying there, smiling nervously back at
        you , you deside to either step <b>ON</b> him on step <b>OVER</b> him as
        you get out of bed
      </p>
      <Button size="tiny" basic color="brown" onClick={props.stepOn}>
        He's just a pessant you think as you step on his face as you get out of
        bed
      </Button>
      <Button size="tiny" basic color="brown" onClick={props.stepOver}>
        You feel petty for the man, he could be usefull you think...
      </Button>
    </div>
  );
}

export default PartOne;
