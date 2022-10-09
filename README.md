.env로 민감한 정보 관리
최상위 폴더(movie-app)에 .env 파일을 생성하여, 네이버 개발자 센터에서 발급 받은 ID와 SECRET을 아래와 같이 입력한다.
(띄어쓰기 X)

REACT_APP_CLIENT_ID=발급받은ID
REACT_APP_CLIENT_SECRET=발급받은SECRET
❗️ REACT_APP_은 예약어이기 때문에 변경하면 변수를 불러올 수 없다.
❗️ .env 파일의 내용이 변경되면 서버를 다시 실행해야 반영된다.
❗️ 정보가 노출되지 않도록 dev.js, .env 파일은 꼭 .gitignore에 포함한다.


서버에서 환경 변수(.env 파일)를 사용하기 위해 dotenv을 설치해준다.

npm install dotenv --save


server>index.js에 dotenv를 불러온다.

(server>index.js)

const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
// dotenv
require("dotenv").config();


//https://velog.io/@nemo/movie-search-app-1