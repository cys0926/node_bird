import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const PostCardContent = ({ postData }) => {
  // 첫 번째 게시글 #해시태그 #익스프레스
  return (
    <div>
      {postData.split(/(#[^\s#]+)/g).map((text, i) => {
        if (text.match(/(#[^\s#]+)/)) {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <Link key={i} href={`/hashtag/${text.slice(1)}`}>
              <a>{text}</a>
            </Link>
          );
        }
        return text;
      })}
    </div>
  );
};

PostCardContent.propTypes = {
  postData: PropTypes.string.isRequired,
};

export default PostCardContent;
