$(document).foundation();var $clonenav=$("#sideNav").clone();$("#sideMenu").append($clonenav);var $cloneidentity=$("#identitySide").clone();$("#identityTop").append($cloneidentity);$("a[href='#top']").click(function(){$("html, body").animate({scrollTop:0},"slow");return!1});$("#album_tools").length>0&&$("#album_tools a").click(function(e){e.preventDefault();photo_album_chosen=$(this).attr("data-album");photo_album_layout=$("#album-"+photo_album_chosen).html();$("#photo_album").html(photo_album_layout)});