import { compute } from '../dist/index.mjs'
window.computeScrollIntoView = compute

window.mapActions = (item) => ({
  el: (item.el.tagName.toLowerCase() + '.' + item.el.className).replace(
    /\.$/,
    ''
  ),
  left: Math.round(item.left),
  top: Math.round(item.top),
})
