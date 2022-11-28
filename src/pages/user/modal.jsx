const [modalOpen, setModalOpen] = useState(false);
const modalClose = () => {
  setModalOpen(!modalOpen);
};

<button onClick={modalClose}>모달창 켜기</button>

//&&연산자로 코드를 묶어주면 된다
    {modalOpen && (
      <Wrapper onClick={modalClose}>   //배경을 클릭했을때에도 모달창이 꺼지게끔 클릭이벤트 걸어주기
        <ContentBox onClick={(e) => e.stopPropagation()}> //박스 안은 클릭해도 모달창 닫히지 않게 이벤트 중지 걸어주기
        </ContentBox>
      </Wrapper>
    )
    }