let Username = "";
let Password = "";

function signup() {
    Username = document.getElementById("new-username").value;
    Password = document.getElementById("new-password").value;

    if (Username &&  Password) {
        document.getElementById("signup-form").style.display = "none";
        document.getElementById("login-form").style.display = "block";
        alert("Успешно вошли в сайт. Пожалуйста, авторизуйтесь.");
    } else {
        alert("Пожалуйста заполните оба поля.");
    }
}

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === Username && password === Password) {
        document.getElementById("login-form").style.display = "none";
        document.getElementById("question-form").style.display = "block";
        alert("Успешно авторизовались");
    } else {
        alert("Неправильный username или password. Вы не можете войти в сайт.");
    }
}

function askQuestion() {
    const question = prompt("Задайте вопрос связанный c JS:");

    if (question) {
        const questionContainer = document.getElementById("questions");
        const questionElement = document.createElement("div");
        questionElement.className = "question";
        questionElement.innerHTML = `
            <span>${question}</span>
            <button onclick="deleteQuestion(this)">Delete</button>
        `;
        questionContainer.appendChild(questionElement);
    }
}

function deleteQuestion(button) {
    const questionElement = button.parentElement;
    questionElement.remove();
}