# Git and Github 사용법
git, github에 대해서 MGS TEAM6 우리 프로젝트에서 필요한 부분을 정리하였다.

## UPSTREAM / SWITCH / PULL
현재 '팀원'은 '팀장'의 최신 repository 파일들을 자신의 repository로 가져오길 원한다.
아래 코드를 살펴보자.

1. 자신의 repository와 연결된 remote를 확인해보자.
```
git remote -v
```

2. 이때 upstream으로 연결된 remote가 없다면 생성하자.
(자신의 repository는 origin이 되지만 타인의 repository를 가져오려면 upstream remote를 생성해서 연결해야 한다.)
```
git remote add upstream [팀장주소]

git remote add upstream https://github.com/youngcodej22/mgs-miniproject-react.git
```

3. 이제 원하는 branch에 pull명령어로 파일들을 받는다.
```
// 예를 들어 내가 현재 develop branch에 pull 받아오고 싶다면 먼저 develop branch로 이동한다.
// checkout도 동일한 기능이지만 switch가 최신 문법이다.
git switch develop

// 이후 develop branch에서 pull명령어를 통해 파일을 받아온다.
// 이때 우리는 아까 팀장의 주소를 연결하였다. 그래서 upstream이란 이름으로 등록한 remote를 pull을 이용하여 받아온다.
git pull upstream develop
```

4. 위와 똑같이 main branch에도 pull명령어로 파일들을 받아오고 싶다면...
```
git switch main

// main branch인 것을 확인 한 후
git pull upstream main
```