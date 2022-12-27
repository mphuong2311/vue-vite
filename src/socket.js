import VueSocketIO from "vue-3-socket.io";

const socketConfig = new VueSocketIO({
  debug: true,
  connection: "https://cargobot.alphaasimov.com",
});

export default socketConfig;
