import { PedMed } from './ped-med.js'

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}

customElements.define('ped-med', PedMed)

