import _ from 'lodash';
import './style.css';
import N from './data.csv';
import j from './data.json5';
function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(j.owner.name, ' ');
  element.classList.add('hello');

  return element;
}
console.log(N);
console.log(N);
document.body.appendChild(component());
