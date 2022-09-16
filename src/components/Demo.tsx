import Atropos from 'atropos/react';
import React from 'react';

import Motley from './tickets/Motley';

export default function Demo() {
  return (
    <section className="mt-20">
      <Atropos
        className="atropos"
        shadow={true}
        highlight={false}
        rotateXMax={1}
        rotateYMax={1}
        stretchX={40}
        stretchY={40}
        stretchZ={40}
      >
        <Motley />
      </Atropos>
    </section>
  );
}
