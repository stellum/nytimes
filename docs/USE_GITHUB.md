# Git and Github 사용법

git, github에 대해서 MGS TEAM6 우리 프로젝트에서 필요한 부분을 정리하였다.

## Config

프로젝트를 시작하기 이전에 Terminal에서 자신의 Git configuration(환경설정)이 제대로 되어 있는지 확인하자.

1. config list

- `git config --list`

2. config list editor 형태로 보기

- `git config --global -e`

3. **중요** autocrlf

- 운영체제(OS) 마다 editor에서 새로운 줄바꿈을 할 때 들어가는 문자열이 다르다. Windows는 carriage-return(`\r`)과 line feed(`\n`) 형태 Mac에서는 line feed(`\n`)만 삽입이 된다. **Git사용 시에** 팀원 마다 다른 OS라면 문제가 된다. 그래서 `autocrlf`를 설정하게 되면 각 OS에서 `\r`를 삭제하고 처리가 되기 때문에 git 사용 시 문제를 해결 할 수 있다.
  - windows: `git config --global core.autocrlf true`
  - mac: `git config --global core.autocrlf input`

4. git 초기화

- `git init`
- 프로젝트에 `.git` 폴더 생성 된 것을 확인

5. .git 폴더

- 열기: `open .git`
- 삭제: `rm -rf .git`

6. Alias

- `status`를 짧게 `st`로 단축하여 지정 가능하다.
  - `git config --global alias.st status`
  - `git status` 대신 `git st`로 사용 가능하다.

7. git 명령어 확인

- `git config --h`
- [docs](https://git-scm.com/docs)

## WorlFlow

자신이 코드를 작성하는 local환경에서 부터 add, commit, push를 했을 때 어떻게 진행 되는지 알아본다.

1. working directory

- 자신의 local 환경에서 프로젝트 파일과 관련된 코드를 작성하는 해당 directory
- `git status`를 했을 때 `untracked`와 `tracked` 된 것을 확인 할 수 있다. 한번 이라도 그 파일을 `add`를 했다면 `tracked`로 추적하여 `modified`됐는지를 알려준다.
- `git add [파일명]`을 했을 때 `staging area`로 이동된다.
  - Tip
    - `git add test.js`
    - `git add test.md`
    - `git add *.js` (비추천)
    - `git add *.md` (비추천)
    - `git add .` (가급적 사용하지 말 것)
    - `git status -h` (상세한 option들을 볼 수 있다.)
    - `git status -s`
      - A: add
      - M: modified
      - ??: untracked
    - `git diff` (상세하게 바뀐 것을 확인)
      - [참고:diff](https://kotlinworld.com/278)
    - `git diff --staged` (staging area에 올라간 것을 확인)
    - `git diff -h` (option 확인)
    - `git config --global -e`를 실행시켜서 내용 아래에 이것을 추가하면 vscode로 diff 내용을 쉽게 확인 가능하다. 실행은 `git difftool` 또한 `git difftool --staged`로 `add`된 것을 확인 가능하다

```
[diff]
        tool = vscode
[difftool "vscode"]
        cmd = code --wait --diff $LOCAL $REMOTE
```

2. staging area

- 작업 후 파일을 옮겨놓는 곳
- `add`명령어로 전달받은 파일들을 `git commit`을 통해서 `.git directory`안에 history로 옮겨가게 된다.
- **중요** 혹시나 실수를 해서 `add`한 파일은 working directory로 옮기고 싶다면 `git rm --cached [파일명]`을 하면 된다.
- TIP
  - `git rm --cached test.md`
  - `git rm --cached *` (전체파일)

3. .git directory

- version에 history를 가지고 있는 directory
- 자신이 `commit`한 history를 보려면 `git log`를 입력해라.
- 이제 `push`명령어를 통해 remote repository로 옮길 수 있다.
  - `git push [remote repository의 별명] [주소]`
  - ex) `git push origin main`

4. remote repository

- github 사이트에서 생성한 프로젝트 repository가 있을 것이다.
- `push`가 제대로 되었다면 remote repository에서 파일이 잘 전달 된 것을 확인 할 수 있다.
- 다른 팀원이 작성한 코드를 remote repository에서 다시 자신의 local 환경 다운로드 받아 최신을 유지하고 싶다면 `pull`명령어를 사용한다. `pull`은 아래에 자세히 다뤄보겠다.
- Tip
  - remote repository에서 `commit`된 정보를 확인 할 수 있는데 각 각의 commit 된 정보는 snapshot된 정보를 기반으로 해서 고유한 hashcode가 담겨있고 이것을 가지고 우리가 version 정보를 참조할 수 있다. 또한 commit message, author, date/time 정보를 가지고 있다.

## Commit Message

**우리는 `add`를 할 때 부터 파일 1개씩하여 `commit`을 하고 commit message를 convention에 맞게 적어야한다. 그래야 팀동료 모두가 history를 이해할 수 있다.**

#### 규칙

1. 1개의 commit은 1개의 파일만 한다.
2. 1개 파일 안에서도 bug수정, 기능 추가 등 여러개를 한번에 commit하는 것이 아닌 1개씩 나눠서 commit 하고 message를 적는다. 또 description을 잘 적는다.

#### commit 과정

`git add [파일명]`이후 `git commit`을 하게 되면 터미널에서 commit message를 적을 수 있게 된다. 아래를 참고 하자

```
Title

Description

# ... 여기 변경된 내용들 알려준다.
```

commit이후 history를 보고 싶다면 `git log` 사용

#### Commit Convention (prefix)

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

#### Commit 수정 및 되돌리기

**가급적 commit을 신중히 하고 되도록이면 `git commit --amend`를 통해 commit message 변경 정도만 사용하자. 팀장이 pull request단계에서 request change를 할 수 있다.**

- [reset, revert, amend](https://www.lainyzine.com/ko/article/git-reset-and-git-revert-and-git-commit-amend/)

## UPSTREAM / SWITCH / PULL / FETCH

- [참고:upstream](https://wikidocs.net/74836)
- [참고:pull/fetch](https://seungwubaek.github.io/tools/git/contributing_using_pull_request/)
- [참고:pr관리](https://medium.com/prnd/%ED%97%A4%EC%9D%B4%EB%94%9C%EB%9F%AC-%EA%B0%9C%EB%B0%9C%ED%8C%80-%EB%AA%A8%EB%91%90%EA%B0%80-%ED%96%89%EB%B3%B5%ED%95%9C-%EA%B0%9C%EB%B0%9C-pr%EA%B4%80%EB%A6%AC-%EB%B0%A9%EB%B2%95-7%EA%B0%80%EC%A7%80-1d4cd5d091f0)

현재 '팀원'은 '팀장'의 최신 repository 파일들을 자신의 repository로 가져오길 원한다.
아래 코드를 살펴보자.

1. 자신의 repository와 연결된 remote를 확인해보자.

```
git remote -v
```

2. 이때 upstream으로 연결된 remote가 없다면 생성하자. 그리고 **UPSTREAM으로 `pull`을 하는게 아니라 `fetch`를 사용하여 `commit`기록만 가져오게 할 것이다.**
   (자신의 repository는 origin이 되지만 타인의 repository를 가져오려면 upstream remote를 생성해서 연결해야 한다.)

```
git remote add upstream [팀장주소]

git remote add upstream https://github.com/youngcodej22/mgs-miniproject-react.git

// fetch: fetch를 통해서 commit 기록만 가져온다. (pull은 merge+fetch이다.)
git fetch --all

// 기록 가져오기 10개
git log -10

// upstream repository에 다른 팀원들의 업데이트한 내역이 있는지 확인 할 때
git fetch upstream
```

3. 이제 원하는 branch에 pull명령어로 파일들을 받는다.

```
// 예를 들어 내가 현재 develop branch에 pull 받아오고 싶다면 먼저 develop branch로 이동한다.
// checkout도 동일한 기능이지만 switch가 최신 문법이다.
git switch develop

// 이후 develop branch에서 pull명령어를 통해 파일을 받아온다.
// 아까 remote -v해서 확인한 것을 토대로 한다.
git pull [원격 저장소의 이름] [원격 저장소에서 받아오고자 하는 브랜치의 이름]
```
