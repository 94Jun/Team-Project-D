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
