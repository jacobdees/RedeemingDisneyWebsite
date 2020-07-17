const elEp = document.querySelector("#episodes-tab");
elEp.addEventListener("click", rainbowBackgroundEpisodes);

const elVid = document.querySelector("#videos-tab");
elVid.addEventListener("click", rainbowBackgroundVideos);

const elEv = document.querySelector("#events-tab");
elEv.addEventListener("click", rainbowBackgroundEvents);


function rainbowBackgroundEpisodes(){
    if(("#videosTab").children("i").hasClass("tab-active")){
        ("#videosTab").children("i").removeClass("tab-active");
        ("#episodesTab").children("i").addClass("tab-active");
    } else
    if(("#eventsTab").children("i").hasClass("tab-active")){
        ("#eventsTab").children("i").removeClass("tab-active");
        ("#episodesTab").children("i").addClass("tab-active");
    }
    console.log("Episodes");
}

// function rainbowBackgroundVideos(){
//     console.log("Videos");
//     var element = document.getElementById("videosTab");
//     element.classList.add("tab-active");
// }

function rainbowBackgroundEvents(){
    console.log("Events");
    if(("#videosTab").hasClass("tab-active")){
        ("#videosTab").removeClass("tab-active");
        ("#eventsTab").addClass("tab-active");
    } else
    if(("#episodesTab").hasClass("tab-active")){
        ("#episodesTab").removeClass("tab-active");
        ("#eventsTab").addClass("tab-active");
    }
}

function myFunction() {
  var element = document.getElementById("videosTab");
  element.classList.add("tab-active");
}

// $(function(){
//     $("#episodesTab").click(function(){
//         if($("#videosTab").children("i").hasClass("tab-active")){
//             $("#videosTab").children("i").removeClass("tab-active");
//             $("#episodesTab").children("i").addClass("tab-active");
//         } else
//         if($("#eventsTab").children("i").hasClass("tab-active")){
//             $("#eventsTab").children("i").removeClass("tab-active");
//             $("#episodesTab").children("i").addClass("tab-active");
//         }
//     });
//     $("#videosTab").click(function(){
//         if($("#episodesTab").children("i").hasClass("tab-active")){
//             $("#episodesTab").children("i").removeClass("tab-active");
//             $("#videosTab").children("i").addClass("tab-active");
//         } else
//         if($("#eventsTab").children("i").hasClass("tab-active")){
//             $("#eventsTab").children("i").removeClass("tab-active");
//             $("#videosTab").children("i").addClass("tab-active");
//         }
//     });
//     $("#eventsTab").click(function(){
//         if($("#videosTab").children("i").hasClass("tab-active")){
//             $("#videosTab").children("i").removeClass("tab-active");
//             $("#eventsTab").children("i").addClass("tab-active");
//         } else
//         if($("#episodesTab").children("i").hasClass("tab-active")){
//             $("#episodesTab").children("i").removeClass("tab-active");
//             $("#eventsTab").children("i").addClass("tab-active");
//         }
//     });
// })