{function closeNavSideMenu(){$("#nav-side-menu-list").css({display:"none"}),$("#blur-screen").css("display","none")}function openNinjaSectionOfHomePage(e){e.preventDefault(),$("#feed-posts").css({display:"none"}),closeNavSideMenu(),$("#users-container").css({display:"initial"})}function openFeedPostsSectionOfHomePage(e){e.preventDefault(),$("#feed-posts").css({display:"inherit"}),closeNavSideMenu(),$("#users-container").css({display:"none"})}$("#nav-avatar").click((function(e){$("#nav-side-menu-list").css({display:"initial"}),$("#blur-screen").css("display","initial")})),$("#nav-side-menu-list-close").click(closeNavSideMenu),$(document).mouseup((function(e){0===$(e.target).closest("#searched-users").length&&0===$(e.target).closest("#search-bar").length&&searchEngineClass.setOriginal()}))}