import React from 'react';

import { normalize, schema } from 'normalizr';

import { dogs } from "./data/dogs.js";
import { thisEvent } from "./data/event.js";

const dogSchema = new schema.Entity('dog');
const dogListSchema = new schema.Array(dogSchema);

export default class App extends React.Component {
  render() {
    const normalizedData = normalize(dogs, dogListSchema);
    const dogData = normalizedData.entities.dog;

    return (
      <div>
        {
          thisEvent.classes &&
          thisEvent.classes.map(cls =>
            <div>
              <h3>{cls.element} -         {cls.level}</h3>
              {
                cls.entries &&
                cls.entries.map(ent => <div key={ent.id}>{ent.call} {dogData[ent.id].name}</div>)
              }
            </div>
          )
        }
      </div>
    );
  }
}
