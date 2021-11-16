// CONTEXT MENU
window.addEventListener("contextmenu",function(event){
  event.preventDefault();
  var contextElement = document.getElementById("context-menu");
  contextElement.style.top = event.offsetY + "px";
  contextElement.style.left = event.offsetX + "px";
  contextElement.classList.add("active");});
window.addEventListener("click",function(){
  document.getElementById("context-menu").classList.remove("active");
});
// CONTEXT MENU VIEW
function largeicons(){
  let desktop_icons = document.getElementById("app-shortcuts");
  let context_circle1 = document.querySelector(".context_circle1");
  let context_circle2 = document.querySelector(".context_circle2");
  let context_circle3 = document.querySelector(".context_circle3");
  desktop_icons.classList.add("desk_large-icon");
  desktop_icons.classList.remove("desk_small-icon");
  desktop_icons.classList.remove("desk_applications");
  context_circle1.style.display = "block";
  context_circle2.style.display = "none";
  context_circle3.style.display = "none";
}

function smallicons(){
  let desktop_icons = document.getElementById("app-shortcuts");
  let context_circle1 = document.querySelector(".context_circle1");
  let context_circle2 = document.querySelector(".context_circle2");
  let context_circle3 = document.querySelector(".context_circle3");
  desktop_icons.classList.remove("desk_large-icon");
  desktop_icons.classList.add("desk_small-icon");
  desktop_icons.classList.remove("desk_applications");
  context_circle1.style.display = "none";
  context_circle2.style.display = "none";
  context_circle3.style.display = "block";
}

function mediumicons(){
  let desktop_icons = document.getElementById("app-shortcuts");
  let context_circle1 = document.querySelector(".context_circle1");
  let context_circle2 = document.querySelector(".context_circle2");
  let context_circle3 = document.querySelector(".context_circle3");
  desktop_icons.classList.remove("desk_large-icon");
  desktop_icons.classList.remove("desk_small-icon");
  desktop_icons.classList.add("desk_applications");
  context_circle1.style.display = "none";
  context_circle2.style.display = "block";
  context_circle3.style.display = "none";
}
// CONTEXT MENU Refresh
function refresh(){
  let desktop_icons = document.getElementById("app-shortcuts");
  desktop_icons.style.display = "none";
  desktop_icons.style.opacity = "0";
}

function unrefresh(){
  let desktop_icons = document.getElementById("app-shortcuts");
  desktop_icons.style.display = "block";
  desktop_icons.style.opacity = "1";
}

var bgcontainer = document.getElementsByClassName('container');

function change(){
  let bgcontainer = document.getElementsByClassName('container');
  bgcontainer.style.background = "url(../images/bg4.jpg)";
}
// CLOCK
function showTime(){
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";
  if(h == 0){
      h = 12;
  }
  if(h > 12){
      h = h - 12;
      session = "PM";
  }
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  var time = h + ":" + m + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;
  setTimeout(showTime, 1000);
}
showTime();


function showTime2(){
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";
  if(h == 0){
      h = 12;
  }
  if(h > 12){
      h = h - 12;
      session = "PM";
  }
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  var time = h + ":" + m + " " + session;
  document.getElementById("MyClockDisplay2").innerText = time;
  document.getElementById("MyClockDisplay2").textContent = time;
  setTimeout(showTime2, 1000);
}
showTime2();

function showTime3(){
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";
  if(h == 0){
      h = 12;
  }
  if(h > 12){
      h = h - 12;
      session = "PM";
  }
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  var time = h + ":" + m + " " + session;
  document.getElementById("MyClockDisplay3").innerText = time;
  document.getElementById("MyClockDisplay3").textContent = time;
  setTimeout(showTime, 1000);
}
showTime3();
// Brightness
const rangeInput = document.getElementById('range');
const container = document.getElementsByClassName('container')[0];
brightnessChanger = () => {
    container.style.filter = "brightness(" + rangeInput.value + "%)";
       }
rangeInput.addEventListener('change', brightnessChanger)
// CALANDER
var Cal = function(divId) {

  //Store div id
  this.divId = divId;

  // Days of week, starting on Sunday
  this.DaysOfWeek = [
    'Su',
    'Mo',
    'Tu',
    'We',
    'Th',
    'Fr',
    'Sa'
  ];

  // Months, stating on January
  this.Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];

  // Set the current month, year
  var d = new Date();

  this.currMonth = d.getMonth();
  this.currYear = d.getFullYear();
  this.currDay = d.getDate();

};

// Goes to next month
Cal.prototype.nextMonth = function() {
  if ( this.currMonth == 11 ) {
    this.currMonth = 0;
    this.currYear = this.currYear + 1;
  }
  else {
    this.currMonth = this.currMonth + 1;
  }
  this.showcurr();
};

// Goes to previous month
Cal.prototype.previousMonth = function() {
  if ( this.currMonth == 0 ) {
    this.currMonth = 11;
    this.currYear = this.currYear - 1;
  }
  else {
    this.currMonth = this.currMonth - 1;
  }
  this.showcurr();
};

// Show current month
Cal.prototype.showcurr = function() {
  this.showMonth(this.currYear, this.currMonth);
};

// Show month (year, month)
Cal.prototype.showMonth = function(y, m) {

  var d = new Date()
  // First day of the week in the selected month
  , firstDayOfMonth = new Date(y, m, 1).getDay()
  // Last day of the selected month
  , lastDateOfMonth =  new Date(y, m+1, 0).getDate()
  // Last day of the previous month
  , lastDayOfLastMonth = m == 0 ? new Date(y-1, 11, 0).getDate() : new Date(y, m, 0).getDate();


  var html = '<table>';

  // Write selected month and year
  html += '<thead><tr>';
  html += '<td colspan="7">' + this.Months[m] + ' ' + y + '</td>';
  html += '</tr></thead>';


  // Write the header of the days of the week
  html += '<tr class="days">';
  for(var i=0; i < this.DaysOfWeek.length;i++) {
    html += '<td>' + this.DaysOfWeek[i] + '</td>';
  }
  html += '</tr>';

  // Write the days
  var i=1;
  do {

    var dow = new Date(y, m, i).getDay();

    // If Sunday, start new row
    if ( dow == 0 ) {
      html += '<tr>';
    }
    // If not Sunday but first day of the month
    // it will write the last days from the previous month
    else if ( i == 1 ) {
      html += '<tr>';
      var k = lastDayOfLastMonth - firstDayOfMonth+1;
      for(var j=0; j < firstDayOfMonth; j++) {
        html += '<td class="not-current">' + k + '</td>';
        k++;
      }
    }

    // Write the current day in the loop
    var chk = new Date();
    var chkY = chk.getFullYear();
    var chkM = chk.getMonth();
    if (chkY == this.currYear && chkM == this.currMonth && i == this.currDay) {
      html += '<td class="today">' + i + '</td>';
    } else {
      html += '<td class="normal">' + i + '</td>';
    }
    // If Saturday, closes the row
    if ( dow == 6 ) {
      html += '</tr>';
    }
    // If not Saturday, but last day of the selected month
    // it will write the next few days from the next month
    else if ( i == lastDateOfMonth ) {
      var k=1;
      for(dow; dow < 6; dow++) {
        html += '<td class="not-current">' + k + '</td>';
        k++;
      }
    }

    i++;
  }while(i <= lastDateOfMonth);

  // Closes table
  html += '</table>';

  // Write HTML to the div
  document.getElementById(this.divId).innerHTML = html;
};

// On Load of the window
window.onload = function() {

  // Start calendar
  var c = new Cal("divCal");			
  c.showcurr();

  // Bind next and previous button clicks
  getId('btnNext').onclick = function() {
    c.nextMonth();
  };
  getId('btnPrev').onclick = function() {
    c.previousMonth();
  };
}

// Get element by id
function getId(id) {
  return document.getElementById(id);
}
document.querySelectorAll(".active-app").forEach(function(item, index) {
  item.addEventListener("click", function() {
    document.querySelectorAll("#app-shortcuts .selected").forEach(function(itm, idx) {
      itm.classList.remove("selected");
    });
    item.classList.add("selected");
  });
  item.addEventListener("dblclick", function() {
    if (document.querySelector("#taskbar .selected")) {
      document.querySelector("#taskbar .selected").classList.remove("selected");
    }
    if (document.querySelector(".window.active")) {
      document.querySelector(".window.active").classList.remove("active");
    }    
    var cln = item.cloneNode(true);
    var window = cln.getAttribute("data-window");
    if (!document.querySelector("#taskbar [data-window="+window+"]")) {
      document.getElementById("taskbar").appendChild(cln);      
    }
    document.querySelector("#windows [data-window="+window+"]").style.display = "block";
    document.querySelector("#windows .window[data-window="+window+"]").classList.add("active");
    document.querySelector("#taskbar .desktop-app[data-window="+window+"]").classList.add("selected");
    document.querySelector("#taskbar [data-window="+window+"]").addEventListener("click", function() {
      if (cln.className.indexOf("selected") > -1) {
        console.log("minimize");
      }
      else {
        document.querySelector("#taskbar .selected").classList.remove("selected");
        document.querySelector("#taskbar [data-window="+window+"]").classList.add("selected"); 
        document.querySelector(".window.active").classList.remove("active");
        document.querySelector("#windows [data-window="+window+"]").classList.add("active");          
      }
    });
  });
});

document.querySelectorAll(".window").forEach(function(item, index) {
  item.addEventListener("click", function() {
    if (document.querySelector(".window.active")) {
      document.querySelector(".window.active").classList.remove("active");
    }
      document.querySelector("#taskbar .desktop-app.selected").classList.remove("selected");
    var window = item.getAttribute("data-window");
    document.querySelector("#taskbar .desktop-app[data-window="+window+"]").classList.add("selected");
    item.classList.add("active");
  });
});
// TASKBAR-MENUS
let startButton = document.getElementById("startbutton")
let startMenu = document.getElementsByClassName("start-menu")[0]

let searchbutton = document.getElementById("searchbutton")
let searchtMenu = document.getElementsByClassName("taskbar-search")[0]

let widgetButton = document.getElementById("widgetbutton")
let widgetMenu = document.getElementsByClassName("widget-menu")[0]

let quickButton = document.getElementById("quickbutton")
let quickSettings = document.getElementsByClassName("quick-settings")[0]

let calenndarButton = document.getElementById("calendarbutton")
let calendar = document.getElementsByClassName("calenndar")[0]

let settingsbutton = document.getElementById("settingsbutton")
let settings_menu = document.getElementsByClassName("settings-menu")[0]

let taskbar_app_button = document.getElementById("taskbar-app-button")
let taskbar_apps = document.getElementsByClassName("taskbar-apps")[0]

startButton.addEventListener("click",()=>{
    if(startMenu.style.bottom == "-100%"){
        startMenu.style.bottom = "0"
        quickSettings.style.right = "-100%"
        widgetMenu.style.left = "-100%"
        calendar.style.right = "-100%"
        settings_menu.style.marginTop = "-100%"
        taskbar_apps.style.bottom = "-100%"
        searchtMenu.style.bottom = "-100%"
    }else{
        startMenu.style.bottom = "-100%"
    }
})

searchbutton.addEventListener("click",()=>{
  if(searchtMenu.style.bottom == "-100%"){
      startMenu.style.bottom = "-100%"
      quickSettings.style.right = "-100%"
      widgetMenu.style.left = "-100%"
      calendar.style.right = "-100%"
      settings_menu.style.marginTop = "-100%"
      taskbar_apps.style.bottom = "-100%"
      searchtMenu.style.bottom = "0"
  }else{
    searchtMenu.style.bottom = "-100%"
  }
})

widgetButton.addEventListener("click",()=>{
  if(widgetMenu.style.left == "-100%"){
    startMenu.style.bottom = "-100%"
    quickSettings.style.right = "-100%"
    widgetMenu.style.left = "0"
    calendar.style.right = "-100%"
    settings_menu.style.marginTop = "-100%"
    taskbar_apps.style.bottom = "-100%"
    searchtMenu.style.bottom = "-100%"
  }else{
    widgetMenu.style.left = "-100%"
  }
})

quickButton.addEventListener("click",()=>{
  if(quickSettings.style.right == "-100%"){
    startMenu.style.bottom = "-100%"
    quickSettings.style.right = "0"
    widgetMenu.style.left = "-100%"
    calendar.style.right = "-100%"
    settings_menu.style.marginTop = "-100%"
    taskbar_apps.style.bottom = "-100%"
    searchtMenu.style.bottom = "-100%"
  }else{
    quickSettings.style.right = "-100%"
  }
})

calenndarButton.addEventListener("click",()=>{
  if(calendar.style.right == "-100%"){
    startMenu.style.bottom = "-100%"
    quickSettings.style.right = "-100%"
    widgetMenu.style.left = "-100%"
    calendar.style.right = "0"
    settings_menu.style.marginTop = "-100%"
    taskbar_apps.style.bottom = "-100%"
    searchtMenu.style.bottom = "-100%"
  }else{
    calendar.style.right = "-100%"
  }
})

settingsbutton.addEventListener("click",()=>{
  if(settings_menu.style.marginTop == "-100%"){
      startMenu.style.bottom = "-100%"
      quickSettings.style.right = "-100%"
      widgetMenu.style.left = "-100%"
      calendar.style.right = "-100%"
      settings_menu.style.marginTop = "0"
      taskbar_apps.style.bottom = "-100%"
      searchtMenu.style.bottom = "-100%"
  }else{
    settings_menu.style.marginTop = "-100%"
  }
})

taskbar_app_button.addEventListener("click",()=>{
  if(taskbar_apps.style.bottom == "-100%"){
      startMenu.style.bottom = "-100%"
      quickSettings.style.right = "-100%"
      widgetMenu.style.left = "-100%"
      calendar.style.right = "-100%"
      settings_menu.style.marginTop = "-100%"
      taskbar_apps.style.bottom = "0"
      searchtMenu.style.bottom = "-100%"
  }else{
    taskbar_apps.style.bottom = "-100%"
  }
})
// DRAGABLE DIV
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }
  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }
  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
// SETTINGS-MENU
document.querySelectorAll('.settings__header .item').forEach((el) => {
  el.addEventListener('click', () => {
      if(el.parentElement.className == 'settings__header'){
          document.querySelectorAll('.settings__header .item').forEach((i) => i.classList.remove("active"));

          el.classList.add("active");
          document.querySelector('.h1').innerHTML = el.innerHTML;
      }
  });
});
// WINDOWS MINIMISE MAXIMIZE
var computerOverlay = document.getElementById('overlay-computer');
var lowercom = document.getElementById('lowercom');
var uppercom = document.getElementById('uppercom');
var file_explorer = document.getElementById('mydiv');
function upercom() {
  computerOverlay.style.width = "100vw";
  file_explorer.style.top = "0px";
  file_explorer.style.left = "0px";
  computerOverlay.style.height = "94.4vh";
  lowercom.style.display = "inline";
  uppercom.style.display = "none";
}
function returncom(){
  computerOverlay.style.width = "70vw";
  computerOverlay.style.height = "65vh";
  lowercom.style.display = "none";
  uppercom.style.display = "inline";
}
function closeopencom() {
  computerOverlay.style.transform = "scale(0)";
}
function openclosecom() {
  computerOverlay.style.transform = "scale(1)";
}
// // Lock SCREEN
