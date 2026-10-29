import { Fragment } from 'react';

// Renders an array of strings separated by <br />
export default function Lines({ lines }) {
  return lines.map((line, i) => (
    <Fragment key={line}>
      {i > 0 && <br />}
      {line}
    </Fragment>
  ));
}
