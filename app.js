import data from './config.js'

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}

class PedMed extends HTMLElement {
  static get observedAttributes() {
    return ['med', 'schema', 'result']
  }

  get med() {
    return this.getAttribute('med')
  }

  set med(val) {
    this.setAttribute('med', val)
  }
  
  get schema() {
    return this.getAttribute('schema')
  }

  set schema(val) {
    this.setAttribute('schema', val)
  }

  get result() {
    return this.getAttribute('result')
  }

  set result(val) {
    this.setAttribute('result', val)
  }
  
  constructor() {
    super()
      
    this.meds = data.meds
    this.med = 0
    this.schema = 0
    this.dosage = data.meds[0].schema[0].dosage
  
    this.shadow = this.attachShadow({mode: 'open'})
      .innerHTML = `
      <p>
        <input
          class="input"
          type="number"
          inputmode="decimal"
          placeholder="Gewicht">
      </p>
      <p>
      <select class="med-selector">
        ${this.meds.map(function(key, index){
          return "<option value='" + index +"'>" + key.name + "</option>"
        })}
      </select>
      </p>
      <p>
        <select class="schema-selector">
          ${this.meds[this.med].schema.map(function(key, index){
            return "<option value='" + index +"'>" + key.name + "</option>"
          })}
        </select>
      </p>
      <p>
        <input class="output" type="text" placeholder="Dosis" readonly>
      </p>`

    this.input = this.shadowRoot.querySelector('.input')
    this.medSelector = this.shadowRoot.querySelector('.med-selector')
    this.schemaSelector = this.shadowRoot.querySelector('.schema-selector')
    this.output = this.shadowRoot.querySelector('.output')  
  }
  
  connectedCallback() {
    this.input.addEventListener('input', e => {
      this.calc()
    })
    
    this.medSelector.addEventListener('change', e => {
      this.selectMed()
      this.calc()
    })

    this.schemaSelector.addEventListener('change', e => {
      this.selectSchema()
      this.calc()
    })
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this.output.value = this.result
  } 
  
  selectMed() {
    this.med = this.medSelector.value
  }
  
  selectSchema() {
    this.schema = this.schemaSelector.value
  }
  
  calc() {
    let med = this.meds[this.med]
    let schema = med.schema[this.schema]
    let weight = this.input.value
    
    this.result = schema.dosage(weight)
  }
}

customElements.define('ped-med', PedMed)

