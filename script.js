

let dumejis = ["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img1.jpg","img2.jpg","img3.jpg","img4.jpg"]

let ezraAPI = [];


fetch('https://devhub-backend01.herokuapp.com')
 .then((data)=>{
return data.json()
 })
 .then((result)=>{
   ezraAPI.push(result[0])
   console.log(ezraAPI[0]);
 })

// this function loads the main dashboard after logging in
loadDashboard = () => {
  let emailval = document.getElementById("email");
  let passval = document.getElementById("pass");
  if (
    emailval.value === "damilolabhadmus41@gmail.com" &&
    passval.value === "bhadmus"
  ) {
    //creates a delay of 2 sec before loading the page
    setTimeout(openDashboard, 2000);
    document.getElementsByTagName(
      "button"
    )[0].innerHTML = `<div class='circle'></div>`;
  } else {
    document.querySelector(
      ".warning"
    ).innerHTML = `<p>please input a valid email/password!!!</p>`;
  }
};

// this function loads the page after clicking ENTER but checks if the info is correct
// enter = (event) => {
//   let emailval = document.getElementById("email");
//   let passval = document.getElementById("pass");
//   let keyPressed = event.charCode;
//   if (
//     keyPressed === 13 &&
//     emailval.value === "damilolabhadmus41@gmail.com" &&
//     passval.value === "bhadmus"
//   ) {
//     setTimeout(openDashboard, 2000);
//     document.getElementsByTagName(
//       "button"
//     )[0].innerHTML = `<div class='circle'></div>`;
//   } else if (
//     keyPressed === 13 &&
//     emailval.value !== "damilolabhadmus41@gmail.com" &&
//     passval.value !== "bhadmus"
//   ) {
//     document.querySelector(
//       ".warning"
//     ).innerHTML = `<p>please input a valid email/password!!!</p>`;
//   }
// };

//this function is the main function that loads the HTML part of the page
openDashboard = () => {
  document.body.innerHTML = ` 
  <div class="mainpage">
  <div class="dashboard">
  <div class="dev"><img src="./images/playstation-circle-icon.png" > <h3 class='dash'>Dashboard</h3></div>
  <div class="links">
       <ul>
       <li ><img src="./images/home.png"><span>Home</span></li>
           <li><img src="./images/user.png"><span>Profile</span></li>
           <li><img src="./images/wallet.png"><span>Wallet</span></li>
           <li><img src="./images/increasing.png"><span>Analytics</span></li>
           <li><img src="./images/to-do-list.png"><span>Task</span></li>
           <li><img src="./images/settings.png"><span>Settings</span></li>
           <li><img src="./images/help-web-button.png"><span>Help</span></li>
           <li onclick='logOut()'><img src="./images/logout.png"><span>Log out</span></li>
       </ul>
       
       </div>
       </div>
       <div class="messagepage">
     
       <div class='welcome'>
       <div class='text'>
       <h2>Welcome</h2>
       <p>
       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus eius accusantium corporis, porro natus rerum.
       </p>
       <button><a href='#down'>Read Messages</a></button>
       </div>
       <div class='animation'>
       <video src="clap.mp4" autoplay loop muted></video>

       </div>
       </div>


       <h3>New messages</h3>
       <a name='down'></a>
       <div class="newmessage">
              
       </div>
       
       <p class='taskp'>Task Log</p>
       <div class="task">
       <p>There are no tasks <img src="./images/happiness.png"></p>
       </div>
       </div>
       
       </div>
       
       </div>`;

  //this loop creats the div for the messages and assign it to the container
  for (i = 0; i < ezraAPI[0].length ; i++) {
    document.querySelector(
      ".newmessage"
    ).innerHTML += `<div class='messagecontainer'>

<img src=${dumejis[i] }>

<div class='datas'>
<p>${ezraAPI[0][i].name}</p>
<p>${ezraAPI[0][i].email}</p>
<p>${ezraAPI[0][i].message}</p>
</div>`;

  }
document.querySelector('video').playbackRate=0.9;
  changeOrientation();
};

//this logout function changes the page to log out page
logOut = () => {
  let answer = confirm("are you fucking sure you want to log out 😏😏😏");
  if (answer == true) {
    alert("get the fuck out 🖕🖕🖕🖕");
    document.body.innerHTML = ` <div class="login-container">
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
  </div>`;
  }
};

changeOrientation = () => {
  if (screen.width <= 800) {
    document.querySelector('.dash').style.visibility='hidden'
    document.querySelectorAll("li").forEach((item)=>{
      item.lastChild.style.visibility='hidden'
      item.style.marginTop='45px'
    })
  }
  else{
    document.querySelector('.dash').style.visibility='visible'
    document.querySelectorAll("li").forEach((item)=>{
      item.lastChild.style.visibility='visible'
      item.style.marginTop='45px'
    })
  }
};


