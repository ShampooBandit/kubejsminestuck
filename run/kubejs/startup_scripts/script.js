// priority: 0

console.info("Hello, World! (You will only see this line once in console, during startup)");

StartupEvents.registry("minestuck:grist", event => {
  event.create("lumber");
});
