
function change(pass, check, img) {
  if (check.checked) {
    img.css("background-position", "-3.5px 52px");
    pass.attr("type","text")
  } else {
    img.css("background-position", "42px 52px");
    pass.attr("type","password")
  }
}

$("#pass-vis").click(function() {
  var pass = $("#password");
  var img = $("#pass-eye");
    
  change(pass, this, img);
})

$("#login_form").submit(function(event) {

  event.preventDefault();

  //some logic here for information checking 

  window.location.href = "forum.html";
});

$("#b-pass").click(function() {
  var pass = $("#password");
  var img = $("#cust-bpass");
  
  change(pass, this, img);
});

$("#b-confpass").click(function() {
  var pass = $("#conf-password");
  var img = $("#cust-bconf");
  
  change(pass, this, img);
});

$("#signup_form").submit(function(event) {

  event.preventDefault();

  //some logic here for information checking 

  window.location.href = "index-login.html";
});

$("#home-icon").click(function() {
  window.location.href = "forum.html";
});

$(document).ready(function() {

  function thumbClick(icon, num) {
    var color = icon.css('fill');
  
    if (color === 'rgb(255, 255, 255)') {
      icon.css('fill', '#00703C');
      num.text(parseInt(num.text())-1);
    }
    else {
      icon.css('fill', 'white');
      num.text(parseInt(num.text())+1);
    }
  
    return;
  }
    

  $(".thumb-up").click(function() {
    var div = $(this).closest('.forum');
    var downVoteIcon = div.find('.thumb-down').find('path');
    var upVoteIcon = $(this).find('path');
    var upNum = div.find('.up-num');
    var downNum = div.find('.down-num');

    if(downVoteIcon.css('fill') === 'rgb(255, 255, 255)') {
      thumbClick(downVoteIcon, downNum)
    }
    thumbClick(upVoteIcon, upNum);
    });

    $(".thumb-down").click(function() {
      var div = $(this).closest('.forum');
      var downVoteIcon = $(this).find('path'); 
      var upVoteIcon = div.find('.thumb-up').find('path');;
      var upNum = div.find('.up-num');
      var downNum = div.find('.down-num');
  
      if(upVoteIcon.css('fill') === 'rgb(255, 255, 255)') {
        thumbClick(upVoteIcon, upNum)
      }
      thumbClick(downVoteIcon, downNum);
      });
});


$(document).ready(function() {

  function thumbClick(icon, num) {
    var color = icon.css('fill');
  
    if (color === 'rgb(255, 255, 255)') {
      icon.css('fill', '#00703C');
      num.text(parseInt(num.text())+1);
    }
    else {
      icon.css('fill', 'white');
      num.text(parseInt(num.text())-1);
    }
  
    return;
  }
    
  $(".like").click(function() {
    var icon = $("#like-icon").find('path');
    var upNum = $("#up-num");
    var downNum = $("#down-num");
    var dislikeIcon = $("#dislike-icon").find('path');

    if(dislikeIcon.css('fill') === 'rgb(0, 112, 60)') {
      thumbClick(dislikeIcon, downNum)
    }
    thumbClick(icon, upNum);
  });

  $(".dislike").click(function() {
    var icon = $("#dislike-icon").find('path');
    var upNum = $("#up-num");
    var downNum = $("#down-num");
    var likeIcon = $("#like-icon").find('path');

    
    if(likeIcon.css('fill') === 'rgb(0, 112, 60)') {
      thumbClick(likeIcon, upNum);
    }
    thumbClick(icon, downNum);
  });
});

$("#menu-icon").click(function() {
  var menu = $(".menu");

  if (menu.css('display') == "none") {
    menu.css('display', 'flex');
  }
  else {
    menu.css('display', 'none');
  }
});

$(".log-out").click(function() {
  window.location.href = "../index-login.html";
});

$(".create-bar").click(function() {
  window.location.href = "create_post.html";
}); 

$("#post_btn").click(function() {
  
   window.location.href = "forum.html";

   alert("Successfully posted.")
});

$("#f1 .title").click(function() {
  window.location.href = "post1.html";
})

$("#f2 .title").click(function() {
  window.location.href = "post2.html";
});

$("#f3 .title").click(function() {
  window.location.href = "post3.html";
});

$(".user").click(function() {
  window.location.href = "profile.html";
});

$(".settings").click(function() {
  window.location.href = "settings.html";
});

$(".user").click(function() {
  window.location.href = "profile.html";
});

$(document).ready(function() {

  var upClicked = false;
  var downClicked = false;

  // Click event handler for the up arrow
  $("#up-icon").click(function() {
    if (!upClicked) {
      $(".up-count").text("1");
      upClicked = true;
      $(this).addClass("clicked");

      // Reset down arrow state if it was clicked
      if (downClicked) {
        downClicked = false;
        $("#down-icon").removeClass("clicked");
        $(".down-count").text("0"); // Reset the down count to 0
      }
    } else {
      $(".up-count").text("0");
      upClicked = false;
      $(this).removeClass("clicked");
    }
  });

  // Click event handler for the down arrow
  $("#down-icon").click(function() {
    if (!downClicked) {
      $(".down-count").text("1");
      downClicked = true;
      $(this).addClass("clicked");

      // Reset up arrow state if it was clicked
      if (upClicked) {
        upClicked = false;
        $("#up-icon").removeClass("clicked");
        $(".up-count").text("0"); // Reset the up count to 0
      }
    } else {
      $(".down-count").text("0");
      downClicked = false;
      $(this).removeClass("clicked");
    }
  });
});

$("#profile").click(function() {
  window.location.href = "profile.html";
});

$(".user").click(function() {
  window.location.href = "profile.html";
});

$("#cancel-button").click(function() {
  window.location.href = "profile.html";
});

$("#confirm-button").click(function() {
  window.location.href = "profile.html";
});

$("#cancel-btn").click(function() {
  window.location.href = "forum.html";
});

$("#change-btn").click(function() {
  window.location.href = "forum.html";
});

$("#title").click(function() {
  window.location.href = "post1.html";
})

$("#logo").click(function() {
  window.location.href = "forum.html";
})

