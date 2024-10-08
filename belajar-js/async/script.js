const doLoginPost = () => {
  const xhr = new XMLHttpRequest();

  xhr.open("POST", "https://obama.free.beeceptor.com");

  xhr.onload = () => console.log(xhr.responseText);

  xhr.setRequestHeader("Content-Type", "application/json");

  const objUser = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  };

  xhr.send(JSON.stringify(objUser));
};

const doLoginGet = () => {
  const xhr = new XMLHttpRequest();
  const param = new URLSearchParams();

  param.append("username", document.getElementById("username").value);
  param.append("password", document.getElementById("password").value);

  xhr.open("GET", `https://obama.free.beeceptor.com?${param.toString()}`);

  xhr.onload = () => console.log(xhr.responseText);

  xhr.send(param);
};

const doLoginForm = () => {
  const xhr = new XMLHttpRequest();
  const param = new URLSearchParams();

  param.append("username", document.getElementById("username").value);
  param.append("password", document.getElementById("password").value);

  xhr.open("POST", `https://obama.free.beeceptor.com`);

  xhr.onload = () => console.log(xhr.responseText);

  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhr.send(param);
};

const doLoginFile = () => {
  const xhr = new XMLHttpRequest();
  const form = new FormData();

  form.append("username", document.getElementById("username").value);
  form.append("password", document.getElementById("password").value);
  form.append("profile", document.getElementById("profile").files[0]);

  xhr.open("POST", `https://obama.free.beeceptor.com`);

  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onload = () => console.log(xhr.responseText);

  xhr.send(form);
};

document.getElementById("login").onclick = doLoginFile;
