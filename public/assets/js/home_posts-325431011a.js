{let t=function(){let t=$("#new-post-form");t.submit((function(s){s.preventDefault(),$.ajax({type:"post",url:"/posts/create",data:t.serialize(),success:function(s){$(" textarea",t).val("");let o=e(s.data.post);$("#posts-list-container").prepend(o),n($(" .delete-post-button",o)),new PostComments(s.data.post._id),new ToggleLike($(" .toggle-like-button",o)),showPostCommentMoreOption($("#post-comment-more-icon-"+s.data.post._id)),toggleCommentSection($("#comments-container-"+s.data.post._id)),new Noty({theme:"relax",text:"Post published!",type:"success",layout:"topRight",timeout:1500}).show()},error:function(t){console.log(t.responseText)}})}))},e=function(t){let e=$(`\n        <div id="post-${t._id}" class="post-list">\n\n        <div class="user-info">\n            <div class="user-post-details">\n                <a href="/users/profile/${t.user._id}">\n                    <div class="user-name-pic">\n                        <img src="/images/Users-avatar.png" alt="img">\n                            <span>You</span>\n                    </div>\n                </a>\n                <br>\n                <small>${new Date(t.createdAt).toString().substring(4,16)} at ${new Date(t.createdAt).toString().substring(16,21)}</small>\n            </div>\n\n            <span class="post-comment-more-icon" id="post-comment-more-icon-${t._id}">\n                <i class="fas fa-ellipsis-h"></i>\n            </span>\n\n            <span class="post-comment-close-icon" id="post-comment-close-icon-${t._id}">\n                <i class="far fa-times-circle"></i>\n            </span>\n\n            <ul class="post-comment-more-options animate__animated animate__flipInX" id="post-comment-more-options-${t._id}">\n                 \x3c!-- Delete a post --\x3e\n                <a class="delete-post-button" href="/posts/destroy/${t._id}">\n                    <li>Delete Post</li>\n                </a>\n            </ul>\n        </div>\n\n        <div class="post-content">\n            ${t.content}\n        </div>\n        \n\n        <div class="user-controls">\n             \x3c!-- Display the likes of this post, if the user is logged in, then show the link to toggle likes, else, just show the count --\x3e\n            <div class="likes-container">\n                <a class="toggle-like-button" data-likes="${t.likes.length}" href="/likes/toggle/?id=${t._id}&type=Post">\n                    <div class="likes-count">\n                        ${t.likes.length}\n                        <i class="far fa-thumbs-up"></i> Likes \n                    </div>\n                </a>\n            </div>\n\n            <div class="comments-container" id="comments-container-${t._id}" data-closed="true">\n                <div class="comments-count">\n                    <span>${t.comments.length}</span>\n                    <span>\n                        <i class="fas fa-comment-alt"></i> Comments \n                        <i class="fas fa-caret-down"></i>\n                    </span>\n                </div>\n            </div>\n        </div>\n\n\n        <div class="post-comments" id="post-comments-${t._id}">\n                \x3c!-- let's give an id to the new comment form, we'll also need to make the same changes in home_posts.js where we're adding a post to the page --\x3e\n                <form id="post-${t._id}-comments-form" action="/comments/create" method="POST" autocomplete="off">\n                    <textarea type="text" name="content" placeholder="Type Here to add comment..." required></textarea>\n                    <input type="hidden" name="post" value="${t._id}" >\n                    <input type="submit" value="Comment">\n                </form>\n            \n            <div class="post-comments-list">\n                <div id="post-comments-list-${t._id}">\n                    \n                </div>\n            </div>\n        </div>\n       \n\n    </div>\n        `);return $(" .user-name-pic img",e).attr("src",$("#nav-avatar").attr("src")),e},n=function(t){$(t).click((function(e){e.preventDefault(),$.ajax({type:"get",url:$(t).prop("href"),success:function(t){$("#post-"+t.data.post_id).remove(),new Noty({theme:"relax",text:"Post Deleted",type:"success",layout:"topRight",timeout:1500}).show()},error:function(t){console.log(t.responseText)}})}))},s=function(){$("#posts-list-container .post-list").each((function(){let t=$(this),e=$(" .delete-post-button",t);console.log("#######",e),n(e);let s=t.prop("id").split("-")[1];new PostComments(s)}))};t(),s()}