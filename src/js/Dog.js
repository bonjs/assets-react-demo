
Ext.define('js.Dog', {
	extend: 'core.DataViewReact',
	renderTo: 'portal',
	data: {
		name: 'dog'
	},
	template: function() {
		return (
			<div>Dog</div>
		)
	},
	constructor: function() {
		this.callParent();
		
	}
});

