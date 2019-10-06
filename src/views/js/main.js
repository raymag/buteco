const socket = io("http://localhost:3333");

function sendMessage() {
  let inputMessage = document.querySelector("#input-message");
  let nickname = document.querySelector("#input-nickname").value;

  socket.emit("chat message", {
    nickname: nickname,
    message: inputMessage.value
  });
  inputMessage.value = "";
}

socket.on("chat message", msg => {
  let message = document.createElement("div");
  message.className = "message";

  let username = document.createElement("span");
  username.className = "username";
  username.innerHTML = `${msg["nickname"]}&nbsp&nbsp&nbsp`;

  let textMessage = document.createElement("span");
  textMessage.className = "text-message";
  textMessage.innerHTML = `${msg["message"]}`;

  message.appendChild(username);
  message.appendChild(textMessage);
  document.querySelector("#message-box").appendChild(message);

  let messageBox = document.querySelector('#message-box');

  if( messageBox.children.length > 20 ){
    messageBox.removeChild(messageBox.children[0]);
  }

  messageBox.scrollTo(0, messageBox.scrollHeight);
});

document.querySelector("#send-button").addEventListener("click", sendMessage);