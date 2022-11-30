      {/*<input type="text"  placeholder="검색" /><hr />*/}
const SearchPage = () => {
  return (
      <div className="card-container">
        <div className="image-container">
          <img src="images/sample_profile.jpg" width={200} />
          <div className="card-title"></div>
          <div className="card-body">
          <p> ID : green </p>
          <p> 자기소개 </p>
          </div>
          <div className="btn">
          <button className="card-btn">구경하기</button>
          </div>
        </div>

      </div>
  )

  

}

export default SearchPage;