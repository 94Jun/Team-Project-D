import styles from "./PostItemComments.module.css";
const CommentItem = (props) => {
  const writer = props.userList.find((user) => {
    return user.uid === props.comment.writer;
  });

  return (
    <div>
      {writer.name} : {props.comment.text}
    </div>
  );
};

export default CommentItem;
