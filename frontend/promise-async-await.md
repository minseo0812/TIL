# JavaScript 비동기 처리 : Promise, async & await

## 비동기 처리는 자바스크립트의 핵심입니다. 콜백 지옥 (Callback Hell) 에서 벗어나 깔끔한 코드를 작성하는 방법을 정리합니다.

## 1. Promise (약속)

`Promise`는 지금은 없지만, 미래의 어느 시점에 비동기 작업의 결과(성공 또는 실패)를 제공하겠다는 **객체**입니다.

### 3가지 상태(States)

- **Pending(대기)**: 아직 완료되지 않은 초기 상태.
- **Fulfilled(이행)**: 성공적으로 완료됨 -> `.then()` 실행.
- **Rejected(거부)**: 실패함 -> `.catch()` 실행.

### 기본 문법

```javascript
const myPromise = new Promise((resolve, reject) => {
  const success = true;
  if (success) resolve("작업 성공");
  else reject("작업 실패...");
});

myPromise
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```

## 2. async(비동기 함수 선언)

`async`는 함수를 정의할 때 사용하는 키워드입니다. 일반 함수를 **비동기 함수**로 변신시켜주는 역할을 합니다.

### 핵심 특징

- **항상 Promise 반환**: 함수 내부에서 `return 1;` 처럼 일반 값을 반환하더라도, 자동으로 `Promise.resolve(1)`로 감싸서 반환합니다.
- **await 사용 환경 조성**: 함수 앞에 `async`가 붙어 있어야만 함수 내부에서 `await` 키워드를 사용할 수 있습니다.

---

## 3. await (비동기 대기)

`await`는 `async` 함수 내부에서 Promise가 처리(settled)될 때까지 **코드의 실행을 일시 정지**시키는 키워드입니다.

### 핵심특징

- **가독성**: 비동기 처리를 마치 동기 코드(위에서 아래로 순차 실행)처럼 작성할 수 있어 코드가 매우 직관적입니다.
- **에러 처리**: Promise의 `catch()` 메서드 대신, 자바스크립트 표준인 `try...catch` 구문을 사용하여 더 익숙한 방식으로 예외를 관리할 수 있습니다.

---

## 4. 비교 및 예제

### 🆚 코드 비교(Promise vs async/await)

| 특징          | Promise (.then)                    | async / await                            |
| :------------ | :--------------------------------- | :--------------------------------------- |
| **가독성**    | 체이닝(`.then`)이 길어지면 복잡함  | 순차적 흐름이라 읽기 매우 편함           |
| **에러 처리** | `.catch()` 메서드로 처리           | `try...catch` 블록으로 처리              |
| **비유**      | "음식 다 되면 나한테 알려줘(예약)" | "음식 나올 때까지 여기서 기다릴게(대기)" |

### 예제 비교

**[방법 1] Promise 사용**

```javascript
function fetchItems() {
  return getData()
    .then((items) => {
      console.log(items);
      return processItems(items);
    })
    .catch((error) => console.log(error));
}
```

**[방법 2] async/await 사용**

```javascript
async function fetchItems() {
  try {
    const items = await getData(); // 결과가 올 때까지 대기
    console.log(items);
    const result = await processItems(items); // 다음 작업 대기
  } catch (error) {
    console.log(error); // 여기서 모든 에러를 한 번에 처리
  }
}
```

---

## 문서 개선 및 학습 팁 (Appendix)

정리된 문서에서 이전 버전보다 좋아진 점과 자바스크립트 학습 시 주의할 용어 정리입니다.

### 1. 용어의 정확성 (Professional Terminology)

- **메서드 체이닝 (Method Chaining)**: `.then().catch()` 처럼 점(.)을 찍어 연결하는 방식을 말합니다. 명칭을 적을 때 `catch()` 대신 `.catch()`라고 점을 붙여 표기하는 것이 자바스크립트 표준 메서드임을 나타내는 더 정확한 표현입니다.
- **구문 (Syntax)**: 프로그래밍 언어에서 정해진 규칙을 `구분`이 아닌 **'구문'**이라고 부릅니다. 예: `try...catch 구문`, `if 구문`.

### 2. 왜 async/await가 더 선호되나요?

비동기 흐름을 이해하는 데는 `Promise`의 원리를 아는 것이 필수적이지만, 실제 실무에서는 **`async/await`**를 더 많이 사용합니다.

1. **에러 처리의 일관성**: 비동기 에러와 일반 에러를 모두 `try...catch` 하나로 처리할 수 있습니다.
2. **디버깅의 편리함**: 코드가 동기적인 코드처럼 한 줄씩 순차적으로 실행되므로, 에러 발생 시 어느 지점에서 문제가 생겼는지(Stack Trace) 파악하기가 훨씬 쉽습니다.
