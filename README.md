# Alpha Camp Dev-C4-M4 - Alpha Shop II

_This is frist submit of part II_

### The challenge

Users should be able to:

- Add or delete items in the cart

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [https://github.com/Chious/M4-AlphaShop-I](https://github.com/Chious/M4-AlphaShop-I)
- Live Site URL: [Live Page](https://your-live-site-url.com)

#### How to fork the repo on local ?

** Important: This submit is on the branch of `II-first-submut`**

- Fork the repo
- Open Github Desktop > File > Clone Repo
- open document and type `npm i ` on terminal
- type `npm run dev` in terminal

## Update

1. Add prop `setShipFee` on `Step2`, and `ShopList` could calculate sum of the price

2. In `SopList`

- Calculate total price of cart by `reduce()`, then add `ShipFee` saved as `TotalValue`
- render `.product-container` by `Array.map()`
- Create `handleImageClick`, and user can change amount of cart by clicking icons.

## Problem to slove

1. `Step2`

- 在 `label` 綁上 onClick 的功能之後，input 就不會根據選擇不同的方案更換圖示了，不知道問題出在哪。

2. `ShopList`

- 在使用者按下按鈕後，`handleImageClick()` 應該會找到該產品的 id 並更改 `Cart.json`的值、儲存在`data`，不知道為什麼改了之後物件內容就變成 undefine（詳見 console.log）。

### Built with

- CSS custom properties
- Flexbox
- CSS Grid
- CSS Module
- SASS - to manage css component
- React Vite

### Useful resources

- [When to use useEffect](https://www.freecodecamp.org/news/react-useeffect-absolute-beginners/#:~:text=If%20we%20need%20to%20perform,the%20component%20that%20it%27s%20in.)

- [Calculate Summary in Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

## Author

- Github - [邱佳昇](https://github.com/Chious)

## Acknowledgments None
