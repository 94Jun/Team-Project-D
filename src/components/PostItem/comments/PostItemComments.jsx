import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";
const PostItemComments = (props) => {
  return (
    <div>
      <CommentForm
        currentUserInfo={props.currentUserInfo}
        pid={props.pid}
        addCommentList={props.addCommentList}
      />
      {props.commentList.map((comment) => {
        return (
          <CommentItem
            key={comment.cid}
            comment={comment}
          />
        );
      })}
    </div>
  );
};

export default PostItemComments;
