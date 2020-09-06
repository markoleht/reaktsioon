import React from 'react';
import Tweet from './Tweet';

function app() {

  const

  return(
    <div className="app">
      <Tweet name="esimene" message="Soy numero uuno" rating="jälle mina, appi"/>
      <Tweet name="teine" message=" kakskendkaks viimne taks" rating=" pagan küll"/>
      <Tweet name="kolmas" message="kolm on seltskond" rating="pronks on ponks"/>
      <Tweet name="neljas" message=" neli on kaks paari" rating="ma tulin lihtsalt vaatama"/> 
    </div>
  );
}

export default app;