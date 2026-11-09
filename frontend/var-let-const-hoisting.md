# 2026-11-09 (월)

## var / let / const, 호이스팅

- 공부할 것: 세 가지 변수 선언의 차이(재선언, 재할당, 스코프), 호이스팅, TDZ(일시적 사각지대)
- 해볼 것: `console.log(a); var a = 1;`과 `console.log(b); let b = 1;`을 각각 실행해서 결과 비교하기. 에러 메시지도 읽어보기
- 끝 기준: "왜 요즘은 var를 안 쓰라고 해?"에 답할 수 있다
- TIL: var, let, const 차이와 호이스팅

### 오늘 배운 것

- var, let, const의 차이를 스코프, 재선언, 재할당 기준으로 비교했다.
- 호이스팅은 실행 전에 선언이 먼저 등록되는 동작이고, var는 undefined로 초기화되지만 let/const는 초기화 전까지 접근할 수 없다.
- 이 때문에 요즘은 var를 쓰지 않고, 기본은 const, 값이 바뀔 때만 let을 쓴다.

### 막혔던 점

- 호이스팅이 “선언이 위로 올라가는 것”이라고 했는데, let/const는 왜 에러가 나는지 이해가 안 됐다.
- 해결 방법 : let/const도 호이스팅은 되지만, 선언문이 실행되기 전까지는 TDZ 상태라 접근하면 에러가 난다. var는 선언과 동시에 undefined로 초기화되기 때문에 에러 없이 undefined가 나온다.

### 코드 / 예시

```jsx
console.log(a); //undefined
var a = 1;

console.log(b); //ReferenceError : Cannot access 'b' before initialization
let b = 1;

if (true) {
  var x = 1;
  let y = 2;
}
console.log(x); // 1
console.log(y); // ReferenceError : y is not defined

const obj = { n: 1 };
obj.n = 2; // OK(내부 값 변경은 가능, 변경 후 obj.n은 2)
obj = {}; // TypeError : Assignment to constant variable.
```

### 새로 알게 된 개념

- 호이스팅 : 코드 실행 전에 선언이 스코프 맨 위에 먼저 등록되는 동작. 코드가 실제로 옮겨지는 건 아님.
- TDZ ( Temporal Dead Zone ) : 스코프 시작부터 let/const 선언문이 실행되기 전까지의 구간.
- 함수 스코프 vs 블록 스코프 : var는 함수 단위, let/const는 { } 블록 단위.
- const의 의미 : 재할당만 막을 뿐 객체 내부 값까지 고정하는 건 아님.

### 한 줄 정리

var는 함수 스코프 + 재선언 가능 + undefined로 초기화되어 버그를 숨기고, let/const는 블록 스코프 + TDZ로 오류를 바로 알려줘서 더 안전하다.
