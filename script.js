const output = document.getElementById("output");

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const messages = [
    "[BOOT] Initializing Project D...",
    "[SYSTEM] Establishing encrypted connection...",
    "[OK] Connection established.",
    "",
    "Searching for memory fragments...",
    "",
    "[SCAN] Fragment #01 ........ FOUND",
    "[SCAN] Fragment #02 ........ FOUND",
    "[SCAN] Fragment #03 ........ FOUND",
    "",
    "Decrypting memory archive...",
    "",
    "██████████████████████████████",
    "",
    "WARNING: Unknown emotional signature detected.",
    "",
    "Analyzing...",
    "",
    "This file does not belong here.",
    "",
    "Someone left a message.",
    "",
    "ACCESSING MEMORY...",
];

async function typeText(text, speed = 35) {
    const line = document.createElement("div");
    output.appendChild(line);

    for (let char of text) {
        line.innerHTML += char;
        await sleep(speed);
    }
}

async function progressBar() {

    const container = document.createElement("div");
    output.appendChild(container);

    for (let i = 0; i <= 100; i++) {

        let filled = Math.floor(i / 5);
        let empty = 20 - filled;

        container.innerHTML =
            DECODING [${"█".repeat(filled)}${"░".repeat(empty)}] ${i}%;

        await sleep(45);
    }
}

async function startProject() {

    await typeText("PROJECT D // SECURE ARCHIVE", 40);
    await sleep(700);

    for (const message of messages) {
        await typeText(message, 25);
        await sleep(350);
    }

    await sleep(800);

    await progressBar();

    await sleep(1000);

    await typeText("");
    await typeText("DECRYPTION COMPLETE.", 50);

    await sleep(800);

    await typeText("But there is something else...", 60);

    await sleep(1500);

    await typeText("A message was found.", 60);

}

startProject();
