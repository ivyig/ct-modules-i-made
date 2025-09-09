
function chat(message) {
    const prefix = "§7[§cI§ev§ay§7]"; // [Ivy] with colors: I=red, v=yellow, y=green
    ChatLib.chat(`${prefix} §f${message}`);
}



// /coinflip
register("command", () => {
    chat(Math.random() < 0.5 ? "Heads" : "Tails");
}).setCommandName("coinflip");

// /8ball
const responses = [
    "Yes", "No", "Maybe", "Definitely", "Not a chance", "Ask again later"
];
register("command", () => {
    chat(responses[Math.floor(Math.random() * responses.length)]);
}).setCommandName("8ball");

// /coords
register("command", () => {
    let pos = `${Player.getX().toFixed(1)}, ${Player.getY().toFixed(1)}, ${Player.getZ().toFixed(1)}`;
    chat("Your coords: " + pos);
}).setCommandName("coords");
