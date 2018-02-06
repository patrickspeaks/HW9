// JavaScript source code

$(document).ready(function () {
    getrandomNum();

}); 

    

    function getrandomNum() {
        var randomNum;


        //box1
        do {
            randomNum = Math.floor(Math.random() * 10);

        } while (randomNum == 0 || randomNum >= 4)  //generate another number
        //randomNum is ready to be used


        if (randomNum == 1) {
            $('#box1').attr('class', 'one');
            //document.getElementById("box1").className = "one";
        }

        else if (randomNum == 2) {
            $('#box1').attr('class', 'two');
            //document.getElementById("box1").className = "two";
        }

        else if (randomNum == 3) {
            $('#box1').attr('class', 'three');
            //document.getElementById("box1").className = "three";
        }


        //box2

        do {
            randomNum = Math.floor(Math.random() * 10);

        } while (randomNum == 0 || randomNum >= 4)  //generate another number
        //randomNum is ready to be used


        if (randomNum == 1) {
            $('#box2').attr('class', 'one');
            //document.getElementById("box2").className = "one";
        }

        else if (randomNum == 2) {
            $('#box2').attr('class', 'two');
            //document.getElementById("box2").className = "two";
        }

        else if (randomNum == 3) {
            $('#box2').attr('class', 'three');
            //document.getElementById("box2").className = "three";
        }



        //box3

        do {
            randomNum = Math.floor(Math.random() * 10);

        } while (randomNum == 0 || randomNum >= 4)  //generate another number
        //randomNum is ready to be used


        if (randomNum == 1) {
            $('#box3').attr('class', 'one');
            //document.getElementById("box3").className = "one";
        }

        else if (randomNum == 2) {
            $('#box3').attr('class', 'two');
           //document.getElementById("box3").className = "two";
        }

        else if (randomNum == 3) {
            $('#box3').attr('class', 'three');
            //document.getElementById("box3").className = "three";
        }

        var b1Class = $('#box1').attr('class');
        //document.getElementById("box1").className;
        var b2Class = $('#box2').attr('class');
        //document.getElementById("box2").className;
        var b3Class = $('#box3').attr('class');
        //document.getElementById("box3").className;

        //document.write(b1Class);
        //document.write(b2Class);
        //document.write(b3Class);


        if (b1Class == b2Class && b2Class == b3Class) {
            $('#msg').html("Congratulations! You've Won!!!");

            //document.getElementById("msg").innerHTML = "Congratulations! You've Won!!!"
        }

        else {
            $('#msg').html("Sorry! Try Again!");
        }

            //document.getElementById("msg").innerHTML = "Sorry! Try again!" }

        $("#button").mouseover(function () {
            $("#button").css({ "background-color": "#006600", "font-size": "20px" }).text("Spin Now!");
        });
        $("#button").mouseout(function () {
            $("#button").css({"background-color" : "#00ff33", "font-size" : "14px"}).text("Spin Again!");
        });

        $("#button").bind("click", function () {
            getrandomNum()
        });

        
        $("#closeButton").bind("click", function () {
            $("#theGame").fadeOut(1000).delay(1000);
            $("#goodbye").text("GoodBye").fadeIn(1000);                      
        });

        

        


    }


    





    


















