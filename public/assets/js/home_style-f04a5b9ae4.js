{function toggleCommentSection(t){t.click((function(o){if("true"==t.attr("data-closed")){$(" .fa-caret-down",t).css({transform:"rotateX(180deg)"});let o=t.prop("id").split("-")[2];$("#post-comments-"+o).css({height:"auto","max-height":"225px","overflow-y":"scroll"}),t.attr("data-closed","false")}else{$(" .fa-caret-down",t).css({transform:"rotateX(0deg)"});let o=t.prop("id").split("-")[2];$("#post-comments-"+o).css({height:"0px","max-height":"0px","overflow-y":"hidden"}),t.attr("data-closed","true")}}))}function showPostCommentMoreOption(t){console.log("icon is: ",t),t.click((function(o){t.css({"background-color":"grey",display:"none"});let e=t.prop("id").split("-")[4];$("#post-comment-more-options-"+e).css({display:"block"}),$("#post-comment-close-icon-"+e).css({display:"initial"})}))}function closePostCommentMoreOption(){$(document).mouseup((function(t){0===$(t.target).closest(".post-comment-more-options").length&&($(".post-comment-more-options").hide(),$(".post-comment-more-icon").css({"background-color":"initial",display:"initial"}),$(".post-comment-close-icon").css({display:"none"}))}))}$("textarea").each((function(){$(this).keydown((function(t){let o=t.target,e=o.value;if(9===t.keyCode){t.preventDefault();var s=this.selectionStart,n=this.selectionEnd;o.value=e.substring(0,s)+"\t"+e.substring(n),this.selectionStart=this.selectionEnd=s+1}})),$(this).on("input",(function(){this.style.height="auto",this.style.height=this.scrollHeight+"px"}))})),$(".comments-container").each((function(){toggleCommentSection($(this))})),$(".post-comment-more-icon").each((function(){showPostCommentMoreOption($(this))})),closePostCommentMoreOption()}