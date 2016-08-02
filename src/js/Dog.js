
Ext.define('js.Dog', {
	extend: 'core.DataViewReact',
	renderTo: 'dog',
	data: {
		name: 'dog'
	},
	template: function() {
		return (
			<div>DogName：{this.state.name}</div>
		)
	},
	constructor: function() {
		this.callParent();
	}
});
