const addText = () =>{
    const chatMessage = document.querySelector('.chat-messages');
    const message = document.querySelector('.text-message').value;

    if(message!=''){

    const div = document.createElement('div');
    div.setAttribute('class','myself');
    const span = document.createElement('span');
    span.setAttribute('class','time-stamp');

    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes();
    span.textContent = time;
    const divMc = document.createElement('div');
    divMc.setAttribute('class','message-content');
    const p = document.createElement('p');
    p.textContent = message;
    divMc.appendChild(p);
    div.appendChild(span);
    div.appendChild(divMc);
    chatMessage.appendChild(div);
    div.scrollIntoView();
    document.querySelector('.text-message').value = "";
    }
    event.preventDefault();
}


const openChat = () =>{
    document.querySelector('.chatbox').style.display = "block";
}
const closeChat = () =>{
    document.querySelector('.chatbox').style.display = "none";
}


