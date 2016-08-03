
Ext.define('js.Dog', {
	extend: 'core.DataViewReact',
	data: {
		name: 'dog'
	},
	template: function() {
		return (
			<div>
				<title>DogName：{this.state.name}</title>
				<button onClick={this.clickFn.bind(this, 1, 2)}>测试</button>
			</div>
		)
	},
	clickFn: function(a, b, c) {
		console.log(b, c);
	},
	constructor: function() {
		this.callParent(arguments);
	}
});
