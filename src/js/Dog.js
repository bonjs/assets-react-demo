
Ext.define('js.Dog', {
	extend: 'core.DataViewReact',
	template: function() {
		return (
			<div>
				<label>DogName：{this.state.name}</label>
				<button onClick={this.clickFn.bind(this, 1, 2)}>测试</button>
			</div>
		)
	},
	clickFn: function(a, b, c) {
		alert('ok');
	},
	constructor: function() {
		this.callParent(arguments);
	}
});
