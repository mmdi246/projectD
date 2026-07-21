const output = document.getElementById("output");

const sleep = ms =>
    new Promise(resolve => setTimeout(resolve, ms));

async function typeText(text, speed = 35) {

    const line = document.createElement("div");

    output.appendChild(line);

    for (const char of text) {

        line.textContent += char;

        await sleep(speed);

    }

}

async function progressBar() {

    const line = document.createElement("div");

    output.appendChild(line);

    for (let i = 0; i <= 100; i++) {

        const filled = Math.floor(i / 5);

        const empty = 20 - filled;

        line.textContent =
            DECODING [${"█".repeat(filled)}${"░".repeat(empty)}] ${i}%;

        await sleep(40);

    }

}

async function clearScreen() {

    output.innerHTML = "";

}

async function bootSequence() {

    await typeText("PROJECT D // SECURE ARCHIVE", 45);

    await sleep(800);

    await typeText("Initializing encrypted archive...", 30);

    await sleep(500);

    await typeText("Establishing connection...", 30);

    await sleep(700);

    await typeText("[OK] Connection established.", 25);

    await sleep(500);

    await typeText("");

    await typeText("Searching memory fragments...", 35);

    await sleep(500);

    await typeText("[01] Memory fragment FOUND", 25);

    await sleep(350);

    await typeText("[02] Memory fragment FOUND", 25);

    await sleep(350);

    await typeText("[03] Memory fragment FOUND", 25);

    await sleep(700);

    await typeText("");

    await typeText("Decrypting archive...", 40);

    await sleep(500);

    await progressBar();

    await sleep(1000);

    await typeText("");

    await typeText("DECRYPTION COMPLETE.", 50);

    await sleep(700);

    await typeText("");

    await typeText("But something is wrong...", 55);

    await sleep(1200);

    await typeText("");

    await typeText("A hidden message was found.", 45);

    await sleep(1000);

    await typeText("");

    await typeText("The archive requires a key.", 45);

    await sleep(700);

    showPuzzle();

}

function showPuzzle() {

    const puzzle = document.createElement("div");

    puzzle.innerHTML = 

        <br>

        <div>--------------------------------</div>

        <div>ENCRYPTED MEMORY</div>

        <div>--------------------------------</div>

        <br>

        <div>Three fragments were discovered.</div>

        <div>One name is hidden between them.</div>

        <br>

        <div>FRAGMENT #01 : D</div>

        <div>FRAGMENT #02 : I</div>

        <div>FRAGMENT #03 : B A</div>

        <br>

        <div>What is the key?</div>

        <br>

        <input

            id="keyInput"

            type="text"

            placeholder="ENTER KEY"

            autocomplete="off"

        >

        <button id="unlockButton">

            UNLOCK

        </button>

        <br><br>

        <div id="puzzleMessage"></div>

    ;

    output.appendChild(puzzle);

    const input =
        document.getElementById("keyInput");

    const button =
        document.getElementById("unlockButton");

    const message =
        document.getElementById("puzzleMessage");

    button.addEventListener("click", () => {

        const answer =
            input.value.trim().toLowerCase();

        if (answer === "diba") {

            message.textContent =
                "ACCESS GRANTED.";

            message.className = "blue";

            button.disabled = true;

            input.disabled = true;

            setTimeout(() => {

                nextStage();

            }, 1500);

        } else {

            message.textContent =
                "ACCESS DENIED.";

            message.className = "red";

            input.value = "";

        }

    });

}

async function nextStage() {

    await clearScreen();

    await sleep(500);

    await typeText("ACCESS GRANTED.", 60);

    await sleep(800);

    await typeText("");

    await typeText("Welcome to the final archive.", 45);

    await sleep(800);

    await typeText("");

    await typeText("PROJECT D // MEMORY ARCHIVE", 45);

await sleep(1200);

    await typeText("");

    await typeText("There is only one file remaining.", 50);

    await sleep(1200);

    await typeText("");

    await typeText("FINAL_FILE.enc", 60);

    await sleep(1000);

    await typeText("");

    await typeText("Opening...", 50);

}

bootSequence();
