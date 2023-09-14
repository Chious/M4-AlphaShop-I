# Alpha Camp Dev-C4-M4 - Alpha Shop

### The challenge

Users should be able to:

- Fill the payment info in the form

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [https://github.com/Chious/M4-AlphaShop-I](https://github.com/Chious/M4-AlphaShop-I)
- Live Site URL: [Live Page](https://your-live-site-url.com)

#### How to fork the repo on local ?

- Fork the repo
- Open Github Desktop > File > Clone Repo
- open document and type `npm i ` on terminal
- type `npm run dev` in terminal

## My process

1. import add needed develop tools:

On Vcode:

- Prettier
- html to jsx

Module:

```scss
npm i sass
npm install @svgr/webpack --save-dev /* enable to import svg in Vite */
```

2. Basic HTML and CSS Reset in `App.scss` and import font (10min)

- CSS Reset: http://meyerweb.com/eric/tools/css/reset/
- Google Font: https://fonts.google.com/noto/specimen/Noto+Sans+TC

3. Create all needed component and save jsx in `component` and scss in `style` (30min)

![](./screenshot2.png)

4. Complete Form Component (5hr)

5. Complete Footer and Header (3hr)

### Problem to slove

1. Header 的長度不知道為什麼會超出`100vw`的版面。
2. 在設定 `Step1`、 `Step2`、 `Step3`時，想要分別套用 CSS Grid，不過發現好像混在一起了，不確定要怎麼做才不會污染到其他的元素。
3. Form component 的 CSS 待細修
4. 待調整 User List 的排版

### Built with

- CSS custom properties
- Flexbox
- CSS Grid
- SASS - to manage css component
- React Vite

### Useful resources

- [How to use Sass in React](https://www.youtube.com/watch?v=9F8bzIlgJ4g)
- [VS Code Extension - HTML to JSX](https://marketplace.visualstudio.com/items?itemName=riazxrazor.html-to-jsx) -- A useful tool to transfer html to JSX

- [Pass useState as props](https://blog.logrocket.com/noobs-guide-to-usestate/#:~:text=Passing%20useState%20as%20props%20in,in%20all%20of%20your%20components.&text=This%20is%20a%20bad%20practice,never%20use%20useState%20like%20this.)

## Author

- Github - [邱佳昇](https://github.com/Chious)

## Acknowledgments None
