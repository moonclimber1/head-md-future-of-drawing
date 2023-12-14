const PHYSICS_FPS = 100;
const frameTime = 120 / PHYSICS_FPS;

import * as OscBridge from "./osc-bridge.js";

let pencilPos;
let contact;

let position = 0;
let velocity = 0.01;

OscBridge.setListener("/pencilY", (args) => {
  pencilPos = args[0].value;
});

OscBridge.setListener("/contact", (args) => {
  contact = args[0].value > 0;
});

let lastContact = false;
let lastPencilPos = 0;

function fixedLoop() {
  // if two consecutive values were measured
  if (contact && lastContact) {
    const pencilDelta = pencilPos - lastPencilPos;
    OscBridge.sendFloat("/pencilDelta", pencilDelta * 1000000);
  }
  // OscBridge.sendFloat("/pencilDelta", 0);
  lastContact = contact;
  lastPencilPos = pencilPos;

  const featherForce = position * -0.001;
  velocity += featherForce;
  position += velocity;

  OscBridge.sendFloat("/pendulumPos", position);
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let [lastSeconds, lastNanoSeconds] = process.hrtime();

while (true) {
  // most exact deltaCalculation for milliseconds
  const [seconds, nanoSeconds] = process.hrtime();
  const deltaSeconds = seconds - lastSeconds;
  const deltaNanoSeconds = nanoSeconds - lastNanoSeconds;

  const deltaMillis = deltaSeconds * 1000 + deltaNanoSeconds / 1000000;
  // console.log("🚀 ~ deltaMillis:", deltaMillis);

  if (deltaMillis >= frameTime) {
    lastSeconds = seconds;
    lastNanoSeconds = nanoSeconds;
    // console.log("Executing fixed loop at", (seconds * 1000 + nanoSeconds / 1000000) / 1000);
    fixedLoop();
  }
  await sleep(1);
}
