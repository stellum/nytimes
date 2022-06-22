# MGS-Miniproject-React

MGS / TEAM6 / searching news mini project

## Team Collaborator

- 지영배: [@youngcodej22](https://github.com/youngcodej22)
- 박철연: [@oaat9309](https://github.com/oaat9309)
- 오영재: [@sacultang](https://github.com/sacultang)
- 노효정: [@stellum](https://github.com/stellum)
- 차유나: [@sarasata3131](https://github.com/sarasata3131)
- 조성일: [@Seong1-Jo](https://github.com/Seong1-Jo)

## 사용 기술

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

### 상세한 내용

- CreateReactApp
- redux
- react-redux
- styled-component
- redux-persist
- axios

## 참여 안내

아래의 내용을 순차적으로 진행하시기 바랍니다.

### API Key 발급

1. [NYTimes Article Search API](https://developer.nytimes.com/apis)
2. SignUp, SignIn
3. 사이트의 우측 상단에 로그인한 이메일 버튼을 클릭
4. Apps 버튼 클릭
5. New App을 누르고 Article Search API를 Enable하여 API Key를 발급 받는다.
6. 네비게이션에서 APIs > Article Search API에서 Example Call부분을 복사하여 사용한다. (yourkey부분에 발급받은 API Key를 넣어서 사용.)

- `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey`

### 프로젝트 생성 및 설치

1. Github 사이트에서 'fork'버튼을 눌러 이 프로젝트를 자신의 Repository로 가져간다.
2. 자신의 repository에서 'Code'라는 초록버튼을 누른 후 주소를 복사.
3. 자신의 local환경의 터미널을 열고 원하는 디렉토리에서 `git clone [복사한주소]`를 입력한다.
4. 프로젝트의 파일들을 다운로드 받은 후 `npm i`를 입력하여 이 프로젝트에서 필요한 `package.json`에 있는 모듈들을 설치한다.
5. 이 프로젝트에서는 **'git-flow'**를 사용할 것이다.

- 아래의 링크를 통해 설치하도록 하자.
- [git-flow](https://github.com/nvie/gitflow/wiki/Installation)

### 프로젝트 기여 (to do)

1. 팀원은 자신이 해야할 일을 Github 사이트에서 **ISSUE에 생성**을 해야한다. 이때, Template을 활용하여 작성한다.
2. 현재 자신의 local환경에서 `main branch`만 있을텐데 `git flow init`을 통해서 `develope branch`를 생성한다. (아래의 내용을 'Enter'를 눌러서 처리)

```
➜ git flow init

Which branch should be used for bringing forth production releases?
   - main
Branch name for production releases: [main] Branch name for "next
release" development: [develop]

How to name your supporting branch prefixes?
Feature branches? [feature/]
Bugfix branches? [bugfix/]
Release branches? [release/]
Hotfix branches? [hotfix/]
Support branches? [support/]
Version tag prefix? []
Hooks and filters directory? [C:/Users/팀원-OS이름/Documents/dev/starbucks-clone/.git/hooks]
```

3. **`develop branch`는 기능이 모여지는 공간이다. 그래서 `git flow feature start 기능명`를 통해 기능에 대한 branch를 생성한다.**

4. (_Issue에 등록한_)자신이 맡은 일에 대한 파일을 생성하여 코드를 작성한다.

5. `git status`로 자신의 상태를 확인하고 `git add 파일명` and `git commit`을 한다. `commit`할 때 **prefix**와 **commmit메시지**를 신경써서 작성한다. (아래에 commit convention에 관한 내용을 자세히 설명하겠다.)

6. **기능 추가를 완료했으면 `git flow feature finish 기능명`를 입력한다.**

7. 마무리 단계에서 `git push - u origin develop`을 입력한다

8. **또한, 기능 추가를 완료했으면 반드시 ISSUE에서 체크박스에 체크한다.** 그래야지 다른 팀원들도 확인이 가능하다.

9. **팀원 자신의 repository develop branch에서** Contribue 버튼에 `open pull request` 또는 초록버튼 `Compare & pull request`를 누른다.

- **Compare & pull request를 누르는 순간 팀장의 id/repository가 보일 것이다 이때 아래와 같이 한다.**
- **중요** request 보낼 때 **팀원 repository에서 > 팀장 repository로 보내는 것이다. 주의해서 하자! 이때 branch는 'develop'이다! main 아니다! 주의하자**
- title에는 'prefix와 template을 활용하여 기능명과 한 일을 간략히 적는다', comment에는 `close #1`이라고 적는다.(해당 issue가 #1 이라면)
- 이후 `Create pull request`를 누른다.

11. request 페이지에서 '초록색'이면 `merge 가능`한 상태, '회색'이면 `conflict 상태`, '주황색'이면 `request change`이다.

- `conflict`가 발생했을 때 팀원이 코드를 고쳐서 다시 request를 보내야한다.
- `request change`일 때 팀장이 요구하는 대로 코드를 수정하여 다시 `pull request`를 보내야 한다.

12. `pull request`를 보낸 이후 팀장이 코드 리뷰를 하면서 `comment`를 달았다면 요청사항을 확인한다.

- 먼저 확인했다는 `comment`를 다시 보내준다.
- 그리고 코드를 수정한다.
  - `git status, git add 파일명, git commit`을 하자. (commit message 잘쓰자)
  - `git push origin develop`을 하면 **그 팀원이 작업했던 내역 아래**에 이어서 붙는다.(request 페이지에서)

13. **13번 부터는 제3,4의 팀원이 하는 역할이다.**

14. `git remote -v`를 해서 upstream이 있는지 확인하자.

15. `upstream`이 없다면 제2 팀원, 제3 팀원 모두 `git remote add upstream 팀장주소`를 통해 팀장 것을 `pull`받을 수 있게 설정해야 한다.

16. 자신의 repository를 최신으로 유지 할 수 있게 해야한다. `git pull upstream develop`

---

## 참고

### Git/Github 사용

- [GIT&GITHUB 사용법](https://github.com/youngcodej22/mgs-miniproject-react/blob/main/docs/USE_GITHUB.md)

### Error (프로젝트 생성 시)

1. `git flow init`을 했을 때 `Fatal: Working tree contains unstaged changes. Aborting.` 오류시 `git stash`후 `git flow init`

### ISSUE 작성

동료들과 작업하고 있는 상황에 대해 게시판에 글 남기듯 공유를 할 수 있다.

#### 무엇을 작성할 것인지?

Github 공식 문서에서 issue는 다음과 같이 정의한다.

> Use Github Issues to track ideas, feedback, tasks, or bugs for work on Github. Issues let you track your work on Github, where development happens.

- 발견된 버그
- 추가할 기능
- 피드백
- 개발해야할 새로운 이슈 및 설계

#### ISSUE Menu

- New Issue: issue 생성
- Assignees: 작업 책임자
- labels: issue에 관련된 label을 설정하여 팀원들이 알아 보기 편하게 한다.
- milestone: 프로젝트의 전반적인 진행을 지정 및 진행율을 확인 가능하다.
- Projects: 현재 프로젝트의 전체적인 흐름을 파악, 단계별로 진행 상황을 설정.

### Commit Convention (prefix)

- feat: 기능 개발 관련 (새로운 기능 추가)
- fix: 오류 개선 혹은 버그 패치
- docs: 문서화 작업
- style: 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
- test: test 관련 (테스트코드, 리펙토링 테스트 코드 추가)
- refactor: 리팩토링
- conf: 환경설정 관련
- chore: 빌드 업무 수정, 패키지 매니저 수정
- build: 빌드 관련
- ci: Continuous Integration 관련

예시

- feat: Add server.py
- fix: Fix Typo server.py
- docs: Add README.md, LICENSE
- conf: Create .env, .gitignore, dockerfile
- BREAKING CHANGE: Drop Support /api/v1
- refactor: Refactor user classes

### 참고 링크

- [우영 선생님-cowork with git flow](https://www.youtube.com/watch?v=lUWHNtmos5o)
- [issue 다루기](https://hbase.tistory.com/211)
- [Git Commmit Message Style Guide](https://udacity.github.io/git-styleguide/)
