import PostItem from "../../components/PostItem/PostItem";

const MyPage = () => {
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
        images: "images/sample_profile.jpg",
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
        hashtags: "Busan",
      },
      comments: 3,
      likes: 17,
      isMarked: true,
    }
  ];
  return (
    <div>
      {postingList.map((posting) => {
        return <PostItem key={posting.postingId} posting={posting} />;
      })}
    </div>
  );
};

export default MyPage;
