
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

function thumbClick(icon, num, type) {
  var color = icon.css('fill');

  if (color === 'rgb(255, 255, 255)') {
    icon.css('fill', '#00703C');
    switch (type) {
      case 0:
        num.text(parseInt(num.text())-1);
        break;
      case 1:
        num.text(parseInt(num.text())+1);
    }
    
  }
  else {
    icon.css('fill', 'white');
    switch (type) {
      case 0:
        num.text(parseInt(num.text())+1);
        break;
      case 1:
        num.text(parseInt(num.text())-1);
    }
  }
  return;
}

$(".forum-container").on('click', '.thumb-up', function() {
    var div = $(this).closest('.forum');
    var downVoteIcon = div.find('.thumb-down').find('path');
    var upVoteIcon = $(this).find('path');
    var upNum = div.find('.up-num');
    var downNum = div.find('.down-num');

    if(downVoteIcon.css('fill') === 'rgb(255, 255, 255)') {
      thumbClick(downVoteIcon, downNum, 0)
    }
    thumbClick(upVoteIcon, upNum, 0);
  
});

$(".forum-container").on('click', ".thumb-down",function() {
  var div = $(this).closest('.forum');
  var downVoteIcon = $(this).find('path'); 
  var upVoteIcon = div.find('.thumb-up path');
  var upNum = div.find('.up-num');
  var downNum = div.find('.down-num');

  if (upVoteIcon.css('fill') === 'rgb(255, 255, 255)') {
    thumbClick(upVoteIcon, upNum, 0)
  }
  thumbClick(downVoteIcon, downNum, 0);
});

    
$(".like").click(function() {
  var icon = $("#like-icon").find('path');
  var upNum = $("#up-num");
  var downNum = $("#down-num");
  var dislikeIcon = $("#dislike-icon").find('path');

  if(dislikeIcon.css('fill') === 'rgb(0, 112, 60)') {
    thumbClick(dislikeIcon, downNum, 1)
  }
  thumbClick(icon, upNum, 1);
});

$(".dislike").click(function() {
  var icon = $("#dislike-icon").find('path');
  var upNum = $("#up-num");
  var downNum = $("#down-num");
  var likeIcon = $("#like-icon").find('path');
  
  if(likeIcon.css('fill') === 'rgb(0, 112, 60)') {
    thumbClick(likeIcon, upNum, 1);
  }
  thumbClick(icon, downNum, 1);
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

$("#post_btn").on('submit', function() {
  
   alert("Successfully posted.")
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

$("#o-pass").click(function() {
  var pass = $("#old-password");
  var img = $("#cust-opass");
  
  change(pass, this, img);
}); 

$("#n-pass").click(function() {
  var pass = $("#new-password");
  var img = $("#cust-npass");
  
  change(pass, this, img);
}); 

$("#c-pass").click(function() {
  var pass = $("#new-conf-password");
  var img = $("#cust-cpass");
  
  change(pass, this, img);
}); 

$('.delete-post').on('click', function() {

  var body = $(this).closest('.content');
  var buttons = $('.content button');

  buttons.prop("disabled", true);
  body.addClass('blurred');
  $('.delete-post-dialogue').css('display', 'flex');
});

$('#cancel-button').on('click', function() {

  var body = $(this).closest('.content');
  var buttons = $('.content button');

  buttons.prop("disabled", false);
  body.addClass('blurred');

  $('.delete-post-dialogue').css('display', 'none');
  $('.delete-comment-dialogue').css('display', 'none');
})

$('.delete-comm').on('click', function() {

  var body = $(this).closest('.content');
  var buttons = $('.content button');

  buttons.prop("disabled", true);
  body.addClass('blurred');
  $('.delete-comment-dialogue').css('display', 'flex');
});


$('.tags').on('click', '.tag-cont', function(){

  var tag = $(this).closest('.tag-cont');
   
  $('.tags .tag-cont').css('background-color', 'white');

  tag.css('background-color', '#00703C');
});
