const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const chatBox = document.getElementById("chatBox");

sendBtn.addEventListener("click", sendMessage);

userInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {

    const text = userInput.value.trim();

    if (text === "") return;

    chatBox.innerHTML += `
        <div style="text-align:right;margin:10px 0;">
            <div style="
                display:inline-block;
                background:#2563eb;
                color:white;
                padding:10px;
                border-radius:10px;">
                ${text}
            </div>
        </div>
    `;

    userInput.value = "";

    setTimeout(() => {

        chatBox.innerHTML += `
            <div class="ai-message">
                🤖 MITTA AI :
                तुमचा प्रश्न मिळाला...
                पुढे Firebase आणि Gemini API जोडल्यावर मी खरे उत्तर देईन.
            </div>
        `;

        chatBox.scrollTop = chatBox.scrollHeight;

    },700);

}
