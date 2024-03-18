# Sundaes for Testing

<img width="628" alt="preview" src="https://github.com/eunjios/sundaes-for-testing/assets/77034159/311f3f36-c009-462e-b308-1479b6d7032c">

<img width="628" alt="preview" src="https://github.com/eunjios/sundaes-for-testing/assets/77034159/bd7c6ee0-f464-4609-a16e-ff098e808ed3">



## About

### App summary

1. Choose ice cream flavors and toppings and submit order.
2. Flavors and toppings come from server.
3. order is sent to server.

### Test

1. Test more complex user interaction (multiple form entry, moving through order phases, ...)
2. Test elements disappear from DOM
3. Simulate server response using mock-service-worker
4. Async app updates / awaitng DOM changes
5. Global state via Recoil

### Command to run tests in watch mode

```bash
yarn test
```

## Troubleshooting 

### Storybook package hoisting 이슈 

> Error: It looks like you are having a known issue with package hoisting.

- Storybook 실행 시 package hoisting 에러가 발생
- 기존 Yarn1 을 Yarn Berry로 업데이트 하여 해결함 ([자세한 내용 포스팅](https://velog.io/@eunjios/Storybook-Error-It-looks-like-you-are-having-a-known-issue-with-package-hoisting-해결하는-법-Yarn-Berry-로-업그레이드))


### Recoil atom의 default 값을 비동기로 사용할 때 이슈

> Warning: Can't perform a React state update on a component that hasn't mounted yet.

- Recoil atom의 default 값을 비동기로 사용할 때 경고 발생
- `React.Suspense` 로 데이터 fetch 중일 때 렌더링 할 `fallback`을 지정하여 해결 ([자세한 내용 포스팅](https://velog.io/@eunjios/Recoil-atom의-default-값을-서버-데이터로-사용할-때-주의할-점-Warning-Cant-perform-a-React-state-update-on-a-component-that-hasnt-mounted-yet))

## Reference

> Udemy course [React Testing Library with Jest / Vitest](https://www.udemy.com/course/react-testing-library/?couponCode=ST12MT030524)
