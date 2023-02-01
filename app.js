const anim = ScrollReveal({
    duration : 1500,
});

anim.reveal("nav", {
    origin: "top",
    distance: "400px",
    easing: "cubic-bezier(0.5, 0, 0, 1)",
 
  });


  anim.reveal("header .header-right", {
    delay : 500,
    duration: 1000,
    origin: "left",
    distance: "50px",
    easing: "ease-in-out",
    reset : 'true'
    
  });

  anim.reveal("header .header-left", {
    delay : 500,
    duration: 1000,
    origin: "left",
    distance: "200px",
    easing: "ease-in-out",

  });

  anim.reveal(".about", {
    delay : 500,
    origin: "top",
    distance: "50px",
    easing: "cubic-bezier(0.5, 0, 0, 1)",
 
  });


  anim.reveal(".image-card", {
    delay : 500,
    duration: 1000,
    origin: "left",
    distance: "100px",
    easing: "ease-in-out"
  });

  anim.reveal("footer", {
    delay : 500,
    origin: "top",
    distance: "50px",
    easing: "cubic-bezier(0.5, 0, 0, 1)",
  });

let darkMode = false;

function changeDarkMode(){
    if (darkMode){
        darkMode= false;
        document.documentElement.style.setProperty("--text-color", "black");
        document.documentElement.style.setProperty("--background-color", "#efe7e5");
        document.getElementById("dark-light-mode").innerHTML = "Mode sombre";
    }else{
        darkMode= true;
        document.documentElement.style.setProperty("--text-color", "white");
        document.documentElement.style.setProperty("--background-color", "black");
        document.getElementById("dark-light-mode").innerHTML = "Mode claire"; 
    }
}