import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";

const PostItemComments = (props) => {
  return (
    <div>
      <CommentForm
        profile={props.profile}
        currentUser={props.currentUser}
        pid={props.pid}
      />
      {props.comments.map((comment) => {
        return (
          <CommentItem
            key={comment.cid}
            comment={comment}
            userList={props.userList}
          />
        );
      })}
    </div>
  );
};

export default PostItemComments;
