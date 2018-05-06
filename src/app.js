import json from '../static/a.json'

export default function () {
  const root = document.querySelector('#app')
  root.innerHTML = json.key
}