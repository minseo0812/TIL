# 반응형 & 레이아웃

## 1. 반응형

반응형이란 컴퓨터, 태블릿, 휴대폰처럼 화면 크기가 다른 기기에서도 웹페이지가 화면에 맞게 자동으로 바뀌는 것을 말한다. 글자 크기, 이미지 크기, 메뉴 배치 등이 화면에 맞게 조절되어 보기 편해진다.

---

## 2. @media

`@media`는 화면 크기나 기기 상태에 따라 CSS 스타일을 다르게 적용하는 기능이다.  
주로 반응형 웹을 만들 때 사용한다.

### max-width

`max-width`는 **화면 너비가 특정 크기 이하일 때** 스타일을 적용한다.

### min-width

min-width는 화면 너비가 특정 크기 이상일 때 스타일을 적용한다.

### 반응형 단위

- % : 부모 요소를 기준으로 크기 설정
- vw : 화면 너비(Viewport Width)의 비율
- vh : 화면 높이(Viewport Height)의 비율
- rem : 최상위(html) 글자 크기를 기준으로 설정

## 3. Flex

- display: flex;는 해당 요소를 Flex 컨테이너로 만든다.

- justify-content:주축 방향에서 요소들의 정렬 방법을 정한다.
  보통 가로 방향 정렬에 많이 사용된다.

- align-items:교차축 방향에서 요소들의 정렬 방법을 정한다.
  보통 세로 방향 정렬에 많이 사용된다.

## 4. Grid

Grid는 요소들을 행과 열로 나누어 배치할 때 사용하는 레이아웃 방식이다.
표처럼 여러 칸으로 정리해서 배치할 때 편리하다.

- display: grid;

- display: grid;는 해당 요소를 Grid 컨테이너로 만든다.

- grid-template-columns: grid-template-columns는 열(column)의 개수와 크기를 정한다.

- grid-template-rows: grid-template-rows는 행(row)의 개수와 크기를 정한다.

## 5. Flex와 Grid의 차이

Flex는 1차원 레이아웃으로, 한 번에 한 방향(가로 또는 세로)으로 정렬할 때 적합하다.
반면 Grid는 2차원 레이아웃으로, 가로와 세로를 함께 나누어 배치할 때 적합하다.

- Flex: 한 줄 정렬에 강함

- Grid: 여러 행과 열 배치에 강함
