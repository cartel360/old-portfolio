const BLACKLISTED_KEY_CODES = [38];
const COMMANDS = {
    help: 'Supported commands: <span class="code">about</span>, <span class="code">why_choose_me</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">portfolio</span> ,<span class="code">contact</span>',

    about: "<b> About Me </b> <br> Hello 👋<br> I'm Billy Okeyo. I’m a fullstack web developer currently living in Nairobi, Kenya. I have a burning passion to want and help others with code that I create. I enjoy the limitless potential of impact that I can have with what I build. It is what pushes me every day to become a better developer. Outside of coding, you can find me watching movies, playing video games and contributing to open source programs! I am a Well-organised person and a problem solver. Fan of movies, video-games, outdoor activities and I am interested in the entire web development spectrum <br> <br> <b> Hobbies & Likes </b> <br> I love playing video games, watching movies and series. I also used to dance though age caught up with me 😆 😆 😆, just kidding, I can still dance. I also deejaying when I am free. <br> <br> <b> Team-Work </b> <br> I am active in team building exercises and I can work in any team easily. I collaborate too in projects, so if you want we colloborate on a project just send me a message and I will be glad to help ",

    why_choose_me: '<span class="code"> ~Minimal design <br> ~Love My Clients <br> ~Professional Design <br> ~Mobile Friendly Design <br> ~Web Development <br> ~Web Design </span>',

    skills: '<span class="code">Languages:</span> Python, HTML, CSS, JavaScript, PHP<br><span class="code">Frameworks:</span> Django, Flask, Bootstrap',

    portfolio: '<span class"code"> E-Commerce System, <a href="#"> View </a></span> <br> <span class"code"> Foottball League Management System, <a href="#"> View </a></span> <br> <span class"code"> Church Website, <a href="#"> View </a></span> <br> <span class"code"> Church Website, <a href="#"> View </a></span>',

    education: "Mt. Kenya University, Kenya<br> Bachelors of Science in Information Technology",

    resume: "<a href='./resume.pdf' class='success link'>resume.pdf</a>",

    contact: "You can contact me on any of following links:<br><a href='https://www.facebook.com/billy.dan.927/' class='success link'>Facebook</a> ,<a href='https://www.instagram.com/pank_billy_de_cartel/?hl=en/' class='success link'>Instagram</a>, <a href='https://twitter.com/Billy_de_Cartel/' class='success link'>Twitter</a>, <a href='https://www.github.com/cartel360/' class='success link'>Github</a>, <a href='mailto:billydano360@gmail.com' class=success link'>Gmail</a> "
};

let userInput, terminalOutput;

const app = () => {
    userInput = document.getElementById("userInput");
    terminalOutput = document.getElementById("terminalOutput");
    document.getElementById("dummyKeyboard").focus();
    console.log("Application loaded");
};

const execute = function executeCommand(input) {
    let output;
    input = input.toLowerCase();
    if (input.length === 0) {
        return;
    }
    output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
    if (!COMMANDS.hasOwnProperty(input)) {
        output += `<div class="terminal-line">no such command: ${input}</div>`;
        console.log("Oops! no such command");
    } else {
        output += COMMANDS[input];
    }

    terminalOutput.innerHTML = `${
    terminalOutput.innerHTML
  }<div class="terminal-line">${output}</div>`;
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
    const input = userInput.innerHTML;

    if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
        return;
    }

    if (e.key === "Enter") {
        execute(input);
        userInput.innerHTML = "";
        return;
    }

    userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
    if (e.keyCode !== 8 && e.keyCode !== 46) {
        return;
    }
    userInput.innerHTML = userInput.innerHTML.slice(
        0,
        userInput.innerHTML.length - 1
    );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);