<p align="center"> 
  <img src="https://user-images.githubusercontent.com/90189513/216623820-49ca21d0-b298-4a1c-9b48-cc667aba2369.png" width="20%" height="20%">
</p>

<h1 align="center"> Front-End : React Youtube Clone </h1>
<h3 align="center">  <a href="https://www.youtube.com/">🔗 YouTube 페이지</a> </h3>
<h3 align="center"><a href="https://fastidious-entremet-53e5ce.netlify.app/">🔗 Team5 배포 페이지 </a> </h3>
<h3 align="center">  <a href="https://github.com/react-toyproject-team5/react-youtube-clone">🔗 Team5 Git Repository</a> </h3>
<h3 align="center">  <a href="https://lace-marigold-6ad.notion.site/5-7985818b00654994beae56511e650d7b">🔗 Team5 Notion</a> </h3>

<br/>

## 🦖 팀 소개<br/>

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/grass.png)

| <img src="https://user-images.githubusercontent.com/90189513/213643505-20b220f0-4b44-4cd7-81de-ad41e62a252b.png" width="100px" height="100px;" alt="김지영"> | <img src="https://user-images.githubusercontent.com/90189513/213642407-b57ea03c-6158-449d-b511-b6deeaa03019.png" width="100px" height="100px;" alt="이은영"> | <img src="https://user-images.githubusercontent.com/90189513/213642351-e0cbb3a1-2072-470e-8278-ea54bca73e1b.png" width="100px" height="100px;" alt="조승후"> | <img src="https://user-images.githubusercontent.com/90189513/213644979-b6364481-4cba-4376-8872-ff943c109946.jpeg"  width="100px" height="100px;" alt="홍혜원"> |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 김지영                                                                                                                                                       | 이은영                                                                                                                                                       | 조승후                                                                                                                                                       | 홍혜원                                                                                                                                                         |
| 메인페이지                                                                                                                                                   | 헤더 및 사이드바 <br/> 레이아웃                                                                                                                              | 영상 상세 페이지                                                                                                                                             | 검색 페이지                                                                                                                                                    |

<br/>

## 🦖 프로젝트 기간

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/grass.png)

1차 : 2023.01.23(월) ~ 2023.01.20(금)<br/>
2차 : 2023.01.25(수) ~ 2023.02.03(금)

<br/>

## 🦖 기술 스택

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/grass.png)

<div>
  <div>

<!-- HTML5 -->

<img alt="Html" src ="https://img.shields.io/badge/HTML-E34F26.svg?&style=for-the-badge&logo=HTML5&logoColor=white"/> <!-- CSS --> <img alt="CSS3" src ="https://img.shields.io/badge/CSS3-FF9933.svg?&style=for-the-badge&logo=CSS3&logoColor=white"/> <!-- JS --> <img alt="JavaScript" src ="https://img.shields.io/badge/JavaScript-F7DF1E.svg?&style=for-the-badge&logo=JavaScript&logoColor=white"/> <!-- React --> <img alt="React" src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"><br/> <!-- Post CSS --> <img alt="Post CSS" src="https://img.shields.io/badge/Post CSS-DD3A0A?style=for-the-badge&logo=PostCSS&logoColor=white"> <!-- SCSS --> <img alt="SASS" src="https://img.shields.io/badge/SASS-CC6699?style=for-the-badge&logo=SASS&logoColor=white"> <!-- .env --> <img alt=".env" src="https://img.shields.io/badge/.ENV-ECD53F?style=for-the-badge&logo=.ENV&logoColor=white"> <!-- axios --> <img alt="Html" src ="https://img.shields.io/badge/axios-000.svg?&style=for-the-badge&logo=axios&logoColor=white"/> <!-- Netlify --> <img alt="Netlify" src="https://img.shields.io/badge/NETLIFY-00C7B7?style=for-the-badge&logo=NETLIFY&logoColor=white"><br/> <!-- Github --> <img alt="Github" src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=Github&logoColor=white"> <!-- Prettier --> <img alt="Prettier" src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=black">

<br/>

<br/>

<br/>

## 🦖 작업 상세 내용

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/grass.png)

<details>
<summary>[메인페이지]</summary>

- 비디오카드 생성
  - 비디오카드 호버링 시 3초 후 비디오 재생
- 무한 스크롤 가능

<summary>[레이아웃]</summary>
- 영상 디테일 페이지 : 사이드바 모달 형태
- 그외 페이지
  - 사이드바 반응형에 따라, main 영역 사이즈 변경됨
- 스크롤 디자인
</details>

<details>
<summary>[헤더]</summary>
- 검색바 반응형
</details>

<details>
<summary>[사이드바]</summary>
- 데스크탑 사이즈에서는 버튼 클릭시, 토글로 열림
- 태블릿과 모바일 사이즈에서는 버튼 클릭시, 모달로 열림
- 모달일 때
  - 사이드바 외 영역 클릭시, 모달 닫기
  - 버튼으로 모달 닫기
- hover 시에만 스크롤 보임
</details>

- 영상플레이어
- 댓글리스트
- 관련영상리스트

<details>
<summary>검색페이지</summary>

- 해당 키워드에 관한 영상 나오기
  - header 컴포넌트 input에서 value값 받아오기
  - 채널 이미지 불러오기
  - 동영상 조회수 불러오기
  - 레이아웃
  </details>

<details>
<summary>상세페이지</summary>

- 댓글창 부분 컴포넌트화
  </details>

<br/>

## 🦖 피드백 받고 싶은 부분/아쉽거나 어려웠던 부분

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/grass.png)

<details>

- 무한 스크롤를 위해 axios를 불러와 데이터를 usestate에 넣었는데, 더 좋은 방법이 있을지 고민이 됩니다.
- 페이지 공통 레이아웃
  - 헤더와 사이드바를 fixed로 설정했고 outlet은 헤더와 사이드바만큼 반응형마다 다르게 margin을 줬습니다. 괜찮은 방법인지 궁금합니다. 혹은 fixed된 공통 컴포넌트와 아웃렛을 margin을 주지 않고도 겹치지 않게 설정할 수 있는 방법이 있는지 궁금합니다.
- img src 대신 import로 이미지 불러오기
  - 이미지를 img src로 불러오는 것이 안돼서 import 하였습니다. 혹시 원인에 대해 아시는 것이 있으면 알려주시면 감사하겠습니다.
- 사이드바
  - 창크기별로 반응형을 만들고, 창크기별로 버튼에 다른 모션을 주는 것이 어려웠습니다. 버튼을 누르면 확장형 사이드바가 없어지거나 모달 사이드바가 뜨는 것에 대해, state를 하나로 하여 작업하다가 두 개로 변경하여 작업했습니다. 이 과정에서 헤더와 사이드바, app.js 전체 레이아웃 등 고려해야할 것이 많아 어려웠습니다. useContext를 사용해야 했는지 궁금합니다.
- useRef 사용
- 사이드바 슬라이드 transition
  - 컴포넌트 계층을 잘못 설계해 transition 적용이 되지 않았음. 작업한 컴포넌트를 대대적으로 수정해야했음.
- 반응형, 헤더의 버튼 클릭시 상황별로 사이드바 형태가 달라야했던 점
