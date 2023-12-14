const NODE_PORT = 9999;
const TOUCHDESIGNER_PORT = 1234;

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const osc = require("osc");

let portReady = false;

const listeners = {};
export function setListener(oscPath, callback) {
  listeners[oscPath] = callback;
}

export function sendRaw(eventName, args = []) {
  if (!portReady) {
    console.error("Can not send", eventName, "port is not ready yet");
    return;
  }

  udpPort.send(
    {
      address: "/" + eventName,
      args: args,
    },
    "127.0.0.1",
    TOUCHDESIGNER_PORT
  );
}

export function sendFloat(eventName, value) {
  if (eventName == "/pencilDelta") console.log("🚀 ~ sendFloat", eventName, value);
  sendRaw(eventName, { type: "f", value: value });
}

const udpPort = new osc.UDPPort({
  localAddress: "127.0.0.1",
  localPort: NODE_PORT,
  metadata: true,
});

// Listen for incoming OSC messages.
udpPort.on("message", function (oscMessage, timeTag, info) {
  // console.log("JS: An OSC message just arrived!", oscMsg);

  if (listeners[oscMessage.address]) {
    listeners[oscMessage.address](oscMessage.args);
  }
});

// Open the socket.
udpPort.open();

// Enable sending if port is ready
udpPort.on("ready", function () {
  portReady = true;
});
