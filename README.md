# travel(여행 전문 SNS)


## 참여인원
1. 박병준(pbj11241@gmail.com)
[<img alt="GitHub" src="https://img.shields.io/badge/GitHub-181717.svg?&style=for-the-badge&logo=GitHub&logoColor=white"/>](https://github.com/94Jun)
2. 김민지(summerparty29@gmail.com)
[<img alt="GitHub" src="https://img.shields.io/badge/GitHub-181717.svg?&style=for-the-badge&logo=GitHub&logoColor=white"/>](https://github.com/sloane323)
3. 김성민(tjdals247470@naver.com)
[<img alt="GitHub" src="https://img.shields.io/badge/GitHub-181717.svg?&style=for-the-badge&logo=GitHub&logoColor=white"/>](https://github.com/KimSoungMin1)
4. 김병준(sjn04037@naver.com)
[<img alt="GitHub" src="https://img.shields.io/badge/GitHub-181717.svg?&style=for-the-badge&logo=GitHub&logoColor=white"/>](https://github.com/KBJ97)


## 사용기술
<img alt="Html" src ="https://img.shields.io/badge/HTML5-E34F26.svg?&style=for-the-badge&logo=HTML5&logoColor=white"/><img alt="Css" src ="https://img.shields.io/badge/CSS3-1572B6.svg?&style=for-the-badge&logo=CSS3&logoColor=white"/><img alt="JavaScript" src ="https://img.shields.io/badge/JavaScriipt-F7DF1E.svg?&style=for-the-badge&logo=JavaScript&logoColor=black"/>

<img alt="React" src="https://img.shields.io/badge/React-61DAFB.svg?&style=for-the-badge&logo=React&logoColor=black"/><img alt="Redux" src="https://img.shields.io/badge/Redux-764ABC.svg?&style=for-the-badge&logo=Redux&logoColor=white"/><img alt="firebase" src="https://img.shields.io/badge/Firebase-FFCA28.svg?&style=for-the-badge&logo=firebase&logoColor=black"/>


## 링크
https://travel-1g.firebaseapp.com/


## 주요 기능
**1. 회원가입 및 로그인**

**[로그인 페이지]**
![로그인](https://github.com/94Jun/img-storage/blob/main/login.png)
  - firebase-Auth를 이용한 회원가입, 로그인, 비밀번호 찾기
  - 구글 아이디를 통한 로그인 기능
  - localStorage를 사용한 자동 로그인
  - 로그인 여부에 따라 사용할 수 있는 Router 구분


**2. 게시글 작성**

**[게시글 작성]**
![make_posting](https://github.com/94Jun/img-storage/blob/main/make_posting.png)
  - 모든 페이지에서 모달을 통해 게시글 작성
  - 이미지 업로드(최대 4장) 및 이미지 클릭 시 미리보기
  - 해시태그 입력란에서 스페이스바를 통해 해시태그 추가
  - 공개 여부를 선택해 비공개시 본인만 확인 가능
  - emoji-picker 라이브러리를 사용해 이모티콘 추가

**3. 여행계획**

**[여행 페이지]**
![my_plans](https://github.com/94Jun/img-storage/blob/main/myplans.png)
  - 여행 계획하기 페이지(makeplan)로 이동
  - 내가 계획한 여행 & 참여하는 여행 세부페이지로 이동
   
**[여행 계획 페이지]**
![make_plan_1](https://github.com/94Jun/img-storage/blob/main/makeplan1.png)
  - 해당 여행 계획의 이름 작성 및 수정 가능
  - 여행 일정 설정 및 세부 계획 추가 가능
    - 구글 맵 api를 이용해 장소 검색 및 지도 이동
    - 구글 맵 내 세부장소를 클릭해 장소 추가
    - 추가된 장소와 시간을 입력해 세부 계획 추가

**[여행 세부 페이지]**
![my_plan](https://github.com/94Jun/img-storage/blob/main/new_myplan.png)
  - 구글 맵에서 여행 장소에 대한 위치 정보 확인 가능
  - 여행 시간 순에 따라 세부 장소 및 주소 표시
  - 여행 세부 장소 클릭 시 구글 맵 이동
  - 여행 참여자 확인 가능
  - 여행 계획 작성자
    - 여행 계획 공유 및 삭제 가능
  - 여행 참여자
    - 공유한 여행 계획에 대해 동행요청 가능

**[여행 공유]**
![main_share](https://github.com/94Jun/img-storage/blob/main/main_share.png)
  - 여행 공유 시 게시글 자동 생성
  - 게시글 내 [같이 여행하기]를 클릭하여 해당 여행 계획 확인 및 동행요청 가능(여행 세부 페이지로 이동)
  - 여행 계획 작성자가 동행 수락 시 동행인에 포함

**4. 게시물 확인**

**[메인 페이지]**
![main](https://github.com/94Jun/img-storage/blob/main/main_1.png)
  - 하나의 게시글을 컴포넌트화 하여 데이터베이스(파이어스토어)에서 요청
    - 게시글 정렬 방법 : 최신순
    - 이미지 : 사진이 2장 이상인 경우 미리보기 생성 및 클릭을 통해 메인 사진 변경
    - 해시태그 : 해시태그 클릭 시 해당 해시태그가 포함되어 있는 게시글 검색
    - 작성자 프로필 또는 이름 클릭 시 해당 유저페이지로 이동
    - 좋아요, 댓글, 마크 가능
    - 본인 게시글인 경우 수정 및 삭제 가능
    - 게시글 텍스트가 일정 길이 이상인 경우 [더보기]를 통해 전문 확인 가능
  - 최대 10개의 게시글 요청 후 [더보기] 클릭 시 추가 게시글 요청
