import React, { useState, useEffect, Fragment } from "react";
import { render } from "react-dom";
import times from "lodash/times";

//
// NOTE: BELOW CODE MATCHES EXACTLY WITH WHAT'S IN preactCombat.jsx
//

// eslint-disable-next-line react/prop-types
function NestedDivs({ background }) {
  return (
    <ul>
      <li>
        <div style={{ background, color: "white" }}>
          <span>…</span>
          <div style={{ background: "white", color: background }}>
            <div></div>
            <p>Placeholder</p>
          </div>
          <ul>
            <li>Placeholder 2</li>
          </ul>
        </div>
      </li>
      <li>Placeholder 3</li>
    </ul>
  );
}

// eslint-disable-next-line react/prop-types
function BlowUpDom({ endTest }) {
  const [hasUpdatedBackground, setUpdateBackground] = useState(false);

  // Once the initial DOM is rendered, updated its styling
  useEffect(() => {
    const idle = window.requestIdleCallback(() => {
      setUpdateBackground(true);
    });
    return () => window.cancelIdleCallback(idle);
  }, [hasUpdatedBackground]);

  // Once the element styles are up-to-date, end the test
  useEffect(() => {
    if (!hasUpdatedBackground) return;

    const idle = window.requestIdleCallback(endTest);
    return () => window.cancelIdleCallback(idle);
  }, [hasUpdatedBackground]);

  const elements = [];
  times(3000, (i) => {
    elements.push(
      <NestedDivs background={hasUpdatedBackground ? "red" : "black"} key={i} />
    );
  });

  return <Fragment>{elements}</Fragment>;
}

const renderTimes = [];
let start;
let end;

function RenderTimes() {
  return (
    <Fragment>
      <p>
        Average:{" "}
        {renderTimes.reduce((acc, time) => Number(acc) + Number(time), 0) /
          renderTimes.length.toFixed(2)}
      </p>
      {renderTimes.map((time, index) => (
        <span key={index}>{time} ms // </span>
      ))}
    </Fragment>
  );
}

function RenderPerformance() {
  const [isTestRunning, runTest] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          start = window.performance.now();
          runTest(true);
        }}
        disabled={isTestRunning}
      >
        {isTestRunning ? "Test is running…" : "Click to run test"}
      </button>
      <RenderTimes />
      {isTestRunning && (
        <BlowUpDom
          endTest={() => {
            end = window.performance.now();
            renderTimes.push((end - start).toFixed(2));
            runTest(false);
          }}
        />
      )}
    </div>
  );
}

render(<RenderPerformance />, document.getElementById("root"));
