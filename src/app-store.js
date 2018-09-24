import Reflux from 'reflux'

import actions from './app-actions'

const data = {
}

export default Reflux.createStore({
  listenables: actions,

  getInitialState: function() {
    return data
  },

  loadPattern: function(id) {
    this.output()
  },

  output: function() {
    this.trigger(data)
  }
})
