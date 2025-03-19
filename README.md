# javascript

## Tipos

- [Tipado dinámico y débil](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures#dynamic_and_weak_typing)

### Tipos primitivos ([📚](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures#primitive_values))

- [x] Null
- [x] Undefined
- [x] Boolean
- [x] Number
- [ ] BigInt
- [x] String
- [ ] Symbol

### Objetos ([📚](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object))

- [x] Objetos
- [x] Funciones
- [x] [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [ ] [Fechas](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

## Funciones ([📚](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions))

- [x] declaración

```js
function suma(a, b) {
  return a + b;
}
```

- [x] expresión

```js
const suma = function (a, b) {
  return a + b;
};
```

- [x] arrow

```js
const suma = (a, b) => a + b;
```

## Promesas ([📚](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise))

- [x] [then](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)/[catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)

- [x] [async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)/[await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)

## Fetch ([📚](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API))

La API Fetch proporciona una interfaz para recuperar recursos (incluso a través de la red). Resultará familiar a cualquiera que haya usado XMLHttpRequest, pero la nueva API ofrece un conjunto de características más potente y flexible.

### then/catch

```js
fetch("https://api.example.com/data")
  .then((result) => result.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

### async/await

```js
try {
  const result = await fetch("https://api.example.com/data");
  const data = await result.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
```

## DOM

- [x] getElementById
- [ ] getElementsByClassName
- [ ] getElementsByTagName
- [ ] getElementsByName
- [ ] querySelector
- [ ] querySelectorAll
- [ ] style
- [x] classList
- [x] innerHTML
- [x] innerText
- [ ] textContent
- [ ] getAttribute
- [ ] setAttribute
- [ ] removeAttribute
- [ ] createElement
- [x] appendChild
- [ ] removeChild
- [ ] replaceChild
- [ ] insertBefore

## Eventos

- [x] click
- [x] submit
- [ ] change
- [ ] keydown
- [ ] keyup
- [ ] keypress
- [ ] focus
- [ ] blur
- [x] mouseover
- [ ] mouseout
- [ ] mousemove
- [ ] mousedown
- [ ] mouseup
- [ ] mouseenter
- [ ] mouseleave
- [ ] touchstart
- [ ] touchend
- [ ] touchmove
- [ ] touchcancel
- [ ] scroll
- [x] resize
- [ ] load
- [x] addEventListener
- [ ] removeEventListener
