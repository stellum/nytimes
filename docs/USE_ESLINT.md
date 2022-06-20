# ES LINT / Prettier

## ES-Lint

#### 설치

1. vscode extension install eslint

```
{
  // eslint error 감지만 할 때
  "eslint.enable": true,

  // file 저장 시 fix까지 해주는 설정
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

2. `npm install eslint`

3. `eslint-plugin-prettier`

- prettier를 eslint 규칙으로 실행하도록 도움
- [npm: eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)

#### 실행

1. 개별 파일인 경우

- `npx eslint [options] [파일명]`
- ex)`npx eslint --fix test.js` (자동으로 파일들을 수정하는 기능)

2. 전체 파일인 경우

- `package.json`에 `script`를 설정하여 실행시킬 수도 있습니다.

```json
"script": {
  // 검사만
  "lint": "npx eslint src/**",

  // 검사 후 수정까지
  "lint-fix": "npx eslint --fix src/**"
}
```

#### eslint 참고 error message

1. "'React' must be in scope when using JSXeslintreact/react-in-jsx-scope"

- 최상단에 `import React`를 넣어야 한다.

2. "Strings must use doublequote.eslintquotes"

- `.eslintrc.json`에서 팀원끼리 약속한 quote로 교체해야한다.
