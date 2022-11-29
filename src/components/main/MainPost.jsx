import PostItem from "../PostItem/PostItem";
import styles from "./MainPost.module.css";
const MainPost = () => {
  const postingList = [
    {
      postingId: Math.random().toString(),
      user: {
        userId: 0,
        userProfile: "images/sample_profile.jpg",
        userName: "cat",
      },
      timestamp: new Date().toLocaleDateString(),
      contents: {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur itaque ipsam officiis veniam autem laborum impedit porro illum dicta, sed id ipsum beatae tenetur debitis suscipit provident exercitationem eius. Dolore? Quisquam provident minima velit voluptatum aut omnis numquam possimus explicabo? Quas nemo esse recusandae et earum voluptas.Sit neque cumque aspernatur placeat voluptates iusto, necessitatibus nulla fuga repellendus nostrum corrupti.",
        hashtags: "Busan",
      },
      comments: 0,
      likes: 0,
      isMarked: false,
    },
    {
      postingId: Math.random().toString(),
      user: {
        userId: 0,
        userProfile: "images/sample_profile.jpg",
        userName: "cat",
      },
      timestamp: new Date().toLocaleDateString(),
      contents: {
        images: "images/sample_profile.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur itaque ipsam officiis veniam autem laborum impedit porro illum dicta, sed id ipsum beatae tenetur debitis suscipit provident exercitationem eius. Dolore? Quisquam provident minima velit voluptatum aut omnis numquam possimus explicabo? Quas nemo esse recusandae et earum voluptas.Sit neque cumque aspernatur placeat voluptates iusto, necessitatibus nulla fuga repellendus nostrum corrupti.",
        hashtags: "Busan",
      },
      comments: 3,
      likes: 17,
      isMarked: true,
    },
    {
      postingId: Math.random().toString(),
      user: {
        userId: 0,
        userProfile: "images/sample_profile.jpg",
        userName: "cat",
      },
      timestamp: new Date().toLocaleDateString(),
      contents: {
        images: "images/sample_profile.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur itaque ipsam officiis veniam autem laborum impedit porro illum dicta, sed id ipsum beatae tenetur debitis suscipit provident exercitationem eius. Dolore? Quisquam provident minima velit voluptatum aut omnis numquam possimus explicabo? Quas nemo esse recusandae et earum voluptas.Sit neque cumque aspernatur placeat voluptates iusto, necessitatibus nulla fuga repellendus nostrum corrupti.",
        hashtags: "Busan",
      },
      comments: 3,
      likes: 17,
      isMarked: true,
    },
  ];
  return (
    <div>
      {postingList.map((posting) => {
        return <PostItem key={posting.postingId} posting={posting} />;
      })}
    </div>
  );
};

export default MainPost;
