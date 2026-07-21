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

function clearScreen() {

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

                finalArchive();

            }, 1500);

        } else {

            message.textContent =
                "ACCESS DENIED.";

            message.className = "red";

            input.value = "";

        }

    });

}

async function finalArchive() {

    clearScreen();

    await sleep(700);

    await typeText("ACCESS GRANTED.", 60);

    await sleep(900);

    await typeText("");

    await typeText(
        "Welcome to the final archive.",
        45
    );

    await sleep(900);

    await typeText("");

await typeText(
        "PROJECT D // MEMORY ARCHIVE",
        45
    );

    await sleep(1200);

    await typeText("");

    await typeText(
        "There is only one file remaining.",
        50
    );

    await sleep(1200);

    await typeText("");

    await typeText(
        "FINAL_FILE.enc",
        60
    );

    await sleep(1500);

    await typeText("");

    await typeText(
        "Opening...",
        50
    );

    await sleep(2000);

    emotionalEnding();

}

async function emotionalEnding() {

    clearScreen();

    await sleep(1000);

    await typeText(
        "سلام دیبا.",
        80
    );

    await sleep(1200);

    await typeText("");

    await typeText(
        "این متن قرار نبود اینجا باشه.",
        55
    );

    await sleep(800);

    await typeText(
        "حداقل نه از اول.",
        55
    );

    await sleep(1200);

    await typeText("");

    await typeText(
        "قرار بود بعد از هزار تا خط کد...",
        45
    );

    await sleep(600);

    await typeText(
        "بعد از هزار تا کلیک...",
        45
    );

    await sleep(600);

    await typeText(
        "بعد از کلی معما...",
        45
    );

    await sleep(1000);

    await typeText("");

    await typeText(
        "به اینجا برسی.",
        60
    );

    await sleep(1200);

    await typeText("");

    await typeText(
        "چون بعضی حرفا...",
        55
    );

    await sleep(600);

    await typeText(
        "وقتی آسون به دست بیان،",
        50
    );

    await sleep(500);

    await typeText(
        "زود هم فراموش میشن.",
        50
    );

    await sleep(1200);

    await typeText("");

    await typeText(
        "ولی بعضی مسیرها...",
        55
    );

    await sleep(700);

    await typeText(
        "خودشون ارزش مقصد رو می‌سازن.",
        55
    );

    await sleep(1500);

    await typeText("");

    await typeText(
        "می‌دونی...",
        70
    );

    await sleep(700);

    await typeText(
        "من کل این پروژه رو از آخر نوشتم.",
        50
    );

    await sleep(1000);

    await typeText("");

    await typeText(
        "چون از اول آخرش رو می‌دونستم.",
        55
    );

    await sleep(1500);

    await typeText("");

    await typeText(
        "آخرش قرار بود به تو برسم.",
        70
    );

    await sleep(1800);

    await typeText("");

    await typeText(
        "نه به یه فایل.",
        45
    );

    await sleep(500);

    await typeText(
        "نه به یه پوشه.",
        45
    );

    await sleep(500);

    await typeText(
        "نه به یه رمز.",
        45
    );

    await sleep(1000);

    await typeText("");

    await typeText(
        "فقط...",
        70
    );

    await sleep(800);

    await typeText(
        "به تو.",
        100
    );

    await sleep(2000);

    await typeText("");

    await typeText(
        "من هیچ‌وقت دنبال ساختن یه پروژه نبودم...",
        45
    );

    await sleep(700);

    await typeText(
        "فقط دنبال یه بهونه بودم",
        45
    );

    await sleep(500);

    await typeText(
        "که چند دقیقه بیشتر مهمون فکرت باشم.",
        45
    );

    await sleep(1800);

    await typeText("");

    await typeText(
        "و اگر تا اینجا اومدی...",
        60
    );

    await sleep(1000);

    await typeText(
        "مرسی.",
        80
    );

    await sleep(1000);

    await typeText("");

    await typeText(
        "همه تا آخر مسیر نمی‌مونن.",
        60
    );

    await sleep(2000);

    await typeText("");

    await typeText(
        "بعضی آدما جواب معما نیستن...",
        55
    );

    await sleep(700);

    await typeText(
        "خودشون دلیل شروع معمان.",
        65
    );

    await sleep(2500);

    await typeText("");

    await typeText(
        "— Mohammad",
        70
    );

    await sleep(3000);

    showFinalQR();

}

function showFinalQR() {

    clearScreen();

    document.body.style.background = "#000";

    const finalScreen =
        document.createElement("div");

    finalScreen.id =
        "finalScreen";

    finalScreen.innerHTML = `

        <div id="finalMessage">

        <div>
                One Last File Remains.
            </div>

            <br>

            <div>
                Scan when you're ready.
            </div>

        </div>

        <div id="qrContainer">

            <img
                id="qrCode"
                alt="Final QR Code"
            >

        </div>

    `;

    document.body.appendChild(finalScreen);

    const spotifyURL =
        "https://open.spotify.com/search/Ludovico%20Einaudi%20Experience";

    const qrURL =
        "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data="
        + encodeURIComponent(spotifyURL);

    document.getElementById("qrCode").src =
        qrURL;

}
