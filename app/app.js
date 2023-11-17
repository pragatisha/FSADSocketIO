document.addEventListener('DOMContentLoaded', () => {
  const socket = io.connect('http://localhost:8080'); 


  socket.on('message', (message) => {
    const messageList = document.getElementById('messages');
    const listItem = document.createElement('li');
    listItem.textContent = message;
    messageList.appendChild(listItem);
  });


  window.send = () => {
    const messageInput = document.getElementById('takeInput');
    const message = messageInput.value.trim();

    if (message !== '') {
 
      socket.emit('message', message);


      messageInput.value = '';
    }
  };
});