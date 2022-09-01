function show_admin(){
    document.getElementById("main").style.display = "none"
    document.getElementById("admin-pane").style.display = "block"
}

function show_main(){
    document.getElementById("main").style.display = "block"
    document.getElementById("admin-pane").style.display = "none"
}


function tag_line()
{
    var x = document.getElementById("tag-line-edit").value
    document.getElementById("tag-line").innerHTML = x

}

function pensil_def(){
    var x = document.getElementById("edit-definition").value
    document.getElementsByClassName("about-us")[0].innerHTML = x
}

function change_pensil_image(){
    var x = document.getElementById("pensil-image").value
    document.getElementById("hero-img").src = x
}

function change_video_title(){
    var x = document.getElementById("edit-video-title").value
    document.getElementById("video-title").innerHTML = x
}

function change_video(){
    var x = document.getElementById("change-video").value
    document.getElementById("main-video").src = x
}

function change_live_title()
{
    var x = document.getElementById("edit-live-title").value
    document.getElementById("live-title").innerHTML = x
}

function change_live_image(){
    var x = document.getElementById("edit-live-img")
    document.getElementById("live-img").src = x
}
