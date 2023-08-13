import React from "react";
import "../Styles/threads.css";
import likeIcon from "../Assets/ThreadsScreen/like.png"
import commentIcon from "../Assets/ThreadsScreen/comment.png"
import repostIcon from "../Assets/ThreadsScreen/repost.png"
import shareIcon from "../Assets/ThreadsScreen/share.png"
function ThreadsScreen() {
  return (
    <div className="threads">
      <div className="eachThread">
        <div className="thread-head">
          <div>pavaneeshwar_pavan</div>
              <div>5w</div>
        
        </div>
        <div className="thread-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          sollicitudin egestas odio. Vestibulum maximus dictum tortor vitae
          bibendum. Donec tellus justo, vulputate nec ante eu, egestas maximus
          nisi. Nam magna nisi, ullamcorper at nibh viverra, aliquet blandit
          libero. In aliquam porta tortor, vel sollicitudin eros. Integer sem
          massa, hendrerit vitae orci ut, fermentum ultrices velit. Aliquam
          accumsan non eros hendrerit finibus. In hac habitasse platea dictumst.
          Morbi lacus orci, mattis ac dignissim et, venenatis in dolor. Fusce
          tortor ante, accumsan et finibus sed, faucibus eget risus. Nullam
          sagittis nunc eu nulla porta pellentesque. Cras suscipit ut turpis
          cursus bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Cras rutrum mattis elementum. Donec ac iaculis magna.
          Pellentesque iaculis dui dui, sed accumsan mauris malesuada vitae.
          Fusce tristique mi quis erat euismod, vel dictum odio convallis. Duis
          placerat dolor eget magna suscipit rutrum. Quisque semper justo et
          erat pulvinar suscipit. In ac leo viverra, dignissim neque nec,
          consequat quam. Phasellus et metus sodales, mollis mauris at,
          fermentum eros. Aliquam erat volutpat. Etiam quis felis vel quam
          dictum ultrices.
        </div>
        <div className="thread-foot">
            <img src={likeIcon} alt="couldn't load"/>
            <img src={commentIcon} alt="couldn't load"/>
            <img src={repostIcon} alt="couldn't load"/>
            <img src={shareIcon} alt="couldn't load"/>

        </div>
      </div>
    </div>
  );
}

export default ThreadsScreen;
