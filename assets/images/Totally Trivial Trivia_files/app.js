$( document ).ready(function() {
    var allQuestions = ["How many colours are there in a rainbow?","Whose statue in Red Square was pulled down in 1991?",
        "Who was the very first female member of Parliament in Britain? ", "What was Che Guevara's nationality?"];
    var allAnswers = ["7","Lenin's","Nancy Astor","Argentinian"];
   
    var chAnswers =[
        ["2","7","3","5"],
        ["Lenin's","Stalin's", "Roosevelt's", "Shakira's"],
        ["Marie Curie","Nancy Astor", "Marilyn Monroe","Queen Tomiri"],
        ["Russian", "Iranian", "Mexican", "Argentinian"] 
        ];
    var chAnswersreally = [];
    var gamestart=true;
    var myImage = new Image(300, 200);
    var srcOfImages = ['assets/images/rainbow.gif',
    'assets/images/lenin.gif',
    'assets/images/NancyAstor.jpg',
    'assets/images/Argentina.gif',
    ];
    var correctAnswer = "";
    var buttoncick1;
    var time;
    var intervalId;
    var Qincrease = 0;
    

// beginning of all the time functions
    function run() {
        time = 31;
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }


    function decrement() {
        time--;
        $("#Time").html("Time Remaining:" + time + "Seconds");
        if (time === 0) {
            for (var j=0; j<buttoncick1.length; j++)  {
                if (jQuery.inArray(buttoncick1[j],allAnswers)>=0){
                    $("#correctAnswer").html("Out of Time!</br>"+"The Correct Answer was:" + buttoncick1[j])
                    $("#questionandanswers").hide();
                    $("#images").show();
                    $("#loadimage").prepend(myImage);  
                    stop();}
            }
        }
      }
    function stop() {
        clearInterval(intervalId);
    }
  /////////////////////////////////////
      
     
    // preparing the basic settings
    function increase (){
        $("#question").html(allQuestions[Qincrease]);
        Qincrease ++;
        if (Qincrease == 4){
            Qincrease=0;
            $("#questionandanswers").hide();
            $("#images").hide();
            $("#start").show();
            $("#start").text("Start Over?")
        }    
    }

    function setquestions (ProbableQuestions){
        for (var i=0; i<ProbableQuestions.length;i++){
            if (document.getElementById("question").innerHTML==ProbableQuestions[i])
           {
            $("#first").html(chAnswers[i][0]);
            $("#second").html(chAnswers[i][1]);
            $("#third").html(chAnswers[i][2]);
            $("#fourth").html(chAnswers[i][3]);
            myImage.src=srcOfImages[i];  
            document.getElementById("first").value=chAnswers[i][0];
            document.getElementById("second").value=chAnswers[i][1];
            document.getElementById("third").value=chAnswers[i][2];
            document.getElementById("fourth").value=chAnswers[i][3];
                buttoncick1=chAnswers[i];
                i++;
           }
        }
    }
    /////////////////////////////////

    //preparing all the buttons
    $('.allbuttons').on('click', function(event){
       if (jQuery.inArray(event.target.value, allAnswers )>=0){
           $("#questionandanswers").hide();
           $("#images").show();
           $("#loadimage").prepend(myImage);  
           $("#correctAnswer").append("</br>Correct!");
           stop();
       }
       else {
           for (var j=0; j<buttoncick1.length; j++)  {
            if (jQuery.inArray(buttoncick1[j],allAnswers)>=0){
                $("#correctAnswer").html("NOPE!</br>" + "The Correct Answer was:" + buttoncick1[j])}
                $("#questionandanswers").hide();
                $("#images").show();
                $("#loadimage").html(myImage);  
                stop();
            }
       }    
    })

    $("#loadimage").on('click', function(){
        $("#questionandanswers").show();
        $("#images").hide();
        run();
        increase ();
        setquestions (allQuestions);
        $("#correctAnswer").html("");
    })
    
    $("#start").on('click', function(){
        $("#questionandanswers").show();
        $("#images").hide();
        increase ();
        run();
        $("#start").hide();
        setquestions (allQuestions);
    })
/* to add questions  store questions in allQuestions, 
answer options needs to store in chAnswers as a new array, 
and the correct answer  you have to store  in allAnswers*/




});