const body = document.querySelector("body")
      sidebar = document.querySelector(".sidebar"),
      toggle = document.querySelector(".toggle"),
      searcBtn = document.querySelector(".searchbox"),
      modeSwitch = document.querySelector(".toggle-switch"),
      modeText = document.querySelector(".mode-text");

      toggle.addEventListener("click", () =>{
        body.classList.toggle("close");
      });

      modeSwitch.addEventListener("click", () =>{
        body.classList.toggle("dark");
      });
