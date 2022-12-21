import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";
const PostItemComments = (props) => {
  return (
    <div>
      <CommentForm
        currentUserInfo={props.currentUserInfo}
        pid={props.pid}
        writer={props.writer}
        addCommentList={props.addCommentList}
      />
      {props.comment && props.commentList.map((comment) => {
        return (
          <CommentItem
            key={comment.cid}
            comment={comment}
            currentUserInfo={props.currentUserInfo}
            removeCommentList={props.removeCommentList}
          />
        );
      })}
    </div>
  );
};

export default PostItemComments;
