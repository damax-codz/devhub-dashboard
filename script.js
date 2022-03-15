let ezraAPI = [
    {
        'name' : 'damilolabhadmus41',
        'message':'are you done with the API, please if you are done message me on whatsapp'
    },
    {
        'name' : 'damilolabhadmus41',
        'message':'are you done with the API, please if you are done message me on whatsapp'
    },
    {
        'name' : 'damilolabhadmus41',
        'message':'are you done with the API, please if you are done message me on whatsapp'
    },
    {
        'name' : 'damilolabhadmus41',
        'message':'are you done with the API, please if you are done message me on whatsapp'
    }

]


loadDashboard = () => {
  let emailval = document.getElementById("email");
  let passval = document.getElementById("pass");
  if (emailval.value === "damilolabhadmus41@gmail.com" &&passval.value === "bhadmus") {
    setTimeout(openDashboard, 2000);
    document.getElementsByTagName("button")[0].innerHTML = `<div class='circle'></div>`;
  }
  
  else {
    document.querySelector(".warning").innerHTML = `<p>please input a valid email/password!!!</p>`;
  }
  
};

enter=(event)=>{
    let emailval = document.getElementById("email");
    let passval = document.getElementById("pass");
    let keyPressed = event.charCode
    if(keyPressed===13 && emailval.value === "damilolabhadmus41@gmail.com" &&passval.value === "bhadmus"){
        setTimeout(openDashboard, 2000);
        document.getElementsByTagName("button")[0].innerHTML = `<div class='circle'></div>`;
    }
    else if( keyPressed===13 && emailval.value !== "damilolabhadmus41@gmail.com" &&passval.value !== "bhadmus") {
        document.querySelector(".warning").innerHTML = `<p>please input a valid email/password!!!</p>`;
      }
}

openDashboard = () => {
  document.body.innerHTML = `  <div class="mainpage">
  <div class="dashboard">
   <div class="dev"><img src="./images/playstation-circle-icon.png" > <h3>Dashboard</h3></div>
   <div class="links">
       <ul>
           <li ><img src="./images/home.png">Home</li>
           <li><img src="./images/user.png">Profile</li>
           <li><img src="./images/wallet.png">Wallet</li>
           <li><img src="./images/increasing.png">Analytics</li>
           <li><img src="./images/to-do-list.png">Task</li>
           <li><img src="./images/settings.png">Settings</li>
           <li><img src="./images/help-web-button.png">Help </li>
           <li onclick='logOut()'><img src="./images/logout.png">Log out</li>
       </ul>
       
   </div>
  </div>
  <div class="messagepage">
          <p>New message</p>
          <div class="newmessage">
              
        </div>
       
        <p class='taskp'>Task Log</p>
        <div class="task">
            <p>There are no tasks <img src="./images/happiness.png"></p>
       </div>
      </div>

  </div>

</div>`;
for(i=0 ; i<ezraAPI.length ; i++){
document.querySelector(".newmessage").innerHTML+=`<div class='messagecontainer'>
<p>${ezraAPI[i]['name']}</p>
<p>${ezraAPI[i]['message']}</p>

</div>`
}
};


logOut=()=>{
    document.body.innerHTML =` <div class="login-container">
    <div class="title">
      <img src="./images/playstation-circle-icon.png" class="logo">
      <h2>Devhub</h2>
    </div>
    <div class="form">

        <input type="email" placeholder="Email or Username" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" id="email">
        <input type="password"  id="pass" placeholder="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters">
        <button onclick="loadDashboard()"> Log in</button>
        <div class="warning"></div>
      </div>
  </div>`
}
