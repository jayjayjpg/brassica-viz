import Ember from 'ember';
import _lodash from 'npm:lodash'; // TODO: make lodash available to MSA Viewer Component
import msa from 'npm:msa';

export default Ember.Component.extend({
  classNames: ['brassica-viz','msa-viewer'],
  containerId: 'msa',
  didInsertElement(){
    var opts = {
      el: this.$(`#{this.get('containerId'}`)[0],
      importURL: "https://raw.githubusercontent.com/wilzbach/msa/master/test/dummy/samples/p53.clustalo.clustal",
      vis: {
        labelId: false
      }
    };
    var m = msa(opts);
  }
});
