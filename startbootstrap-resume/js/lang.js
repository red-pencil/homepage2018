"use strict"

langSwitch("chn");

        function langSwitch(c) {
          var x, i;
          x = document.getElementsByClassName("lang");
          //if (c == "all") c = "";
          for (i = 0; i < x.length; i++) {
            w3AddClass(x[i], "hidden");
              if (x[i].className.indexOf(c) > -1) w3RemoveClass(x[i], "hidden");
          }
        }

        function w3AddClass(element, name) {
          var i, arr1, arr2;
          arr1 = element.className.split(" ");
          arr2 = name.split(" ");
          for (i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
          }
        }

        function w3RemoveClass(element, name) {
          var i, arr1, arr2;
          arr1 = element.className.split(" ");
          arr2 = name.split(" ");
          for (i = 0; i < arr2.length; i++) {
            while (arr1.indexOf(arr2[i]) > -1) {
              arr1.splice(arr1.indexOf(arr2[i]), 1);     
            }
          }
          element.className = arr1.join(" ");
        }
        
        var btnContainer = document.getElementById("lang-switch");
            var btns = btnContainer.getElementsByClassName("lang-s");
            for (var i = 0; i < btns.length; i++) {
              btns[i].addEventListener("click", function(){
                var current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
              });
            }
        