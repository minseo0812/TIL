# 📝 Nomad Coders JS #4 LOGIN

## 📌 #4.0 Input Values

- `input`의 값을 가져오는 방법 학습
- `.value`를 사용하면 사용자가 입력한 값 확인 가능
- DOM에서 input 요소를 선택하는 방법 복습

```js
loginInput.value;
```

👉 사용자가 입력한 데이터를 JavaScript에서 활용하기 위한 기본 과정

---

## 📌 #4.1 Form Submission

- `<form>`은 submit 시 기본적으로 페이지가 새로고침됨
- submit 이벤트로 로그인 로직 실행 가능
- `addEventListener()`로 submit 이벤트 감지

```js
loginForm.addEventListener("submit", onLoginSubmit);
```

👉 form의 기본 동작과 이벤트 흐름 이해가 중요

---

## 📌 #4.2 Events

- 이벤트는 사용자의 행동(클릭, 제출 등)에 반응하는 기능
- `event object`를 통해 추가 정보 사용 가능
- form submit 이벤트 구조 이해

👉 JavaScript는 이벤트 중심으로 동작한다는 점 이해

---

## 📌 #4.3 Events Part Two

- 이벤트 발생 시 기본 동작 제어 가능
- `preventDefault()`로 새로고침 방지

```js
event.preventDefault();
```

👉 새로고침이 되면 JS 상태가 초기화되기 때문에 기본 동작을 막아야 함

---

## 📌 #4.4 Getting Username

- input에서 username 값을 가져오는 과정
- 사용자가 입력한 데이터를 JS에서 활용

```js
const username = loginInput.value;
```

👉 입력 데이터를 변수에 저장해 이후 로직에서 재사용 가능

---

## 📌 #4.5 Saving Username

- `localStorage`를 이용해 데이터 저장
- 브라우저에 값이 저장되어 새로고침 후에도 유지됨

```js
localStorage.setItem("username", username);
```

👉 localStorage를 사용하면 사용자 정보를 브라우저에 유지할 수 있음

---

## 📌 #4.6 Loading Username

- 저장된 데이터 가져오기
- 페이지 새로고침 후에도 사용자 정보 유지 가능

```js
localStorage.getItem("username");
```

👉 저장된 데이터를 불러와 로그인 상태 유지 가능

---

## 📌 #4.7 Super Recap

- form 이벤트 흐름 전체 정리
- 로그인 로직 전체 구조 이해

### 🔁 전체 로그인 흐름

1. 사용자가 input에 값 입력
2. form submit 발생
3. `preventDefault()` 실행
4. username 가져오기
5. `localStorage`에 저장
6. 로그인 폼 숨김
7. greeting 표시

👉 핵심:  
`사용자 입력 → 이벤트 처리 → 저장 → 화면 변경`

---

## 📚 오늘 배운 핵심 개념

- input 값 가져오기 (`.value`)
- submit 이벤트 처리
- `preventDefault()`로 기본 동작 제어
- localStorage 데이터 저장 및 불러오기
- 이벤트 기반 로그인 흐름 이해

---

## 💭 느낀 점

- form은 기본적으로 새로고침된다는 점이 인상적이었다.
- `preventDefault()`의 역할이 왜 중요한지 이해할 수 있었다.
- localStorage를 사용하면 브라우저에 데이터를 유지할 수 있다는 점이 신기했다.
- 로그인 기능이 이벤트 흐름으로 연결된다는 점을 이해하게 되었다.
