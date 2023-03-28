// @ts-nocheck
import { useState } from 'react';

import('@photonhealth/elements');

function Visits() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(!show)}>Toggle</button>
      <photon-client
        id="7N9QZujlNJHL8EIPqXpu1wq8OuXqoxKb"
        org="org_KzSVZBQixLRkqj5d"
        domain="auth.boson.health"
        audience="https://api.boson.health"
        uri="https://api.boson.health/graphql"
        auto-login="true"
        redirect-uri="http://localhost:3000?redirect=%2Fvisits"
      >
        {show ? <photon-multirx-form-wrapper hide-templates="false" /> : null}
      </photon-client>
    </>
  );
}

export default Visits;
