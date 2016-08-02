

Ext.define('js.User', {
	extend: 'core.DataViewReact',
	renderTo: 'user',
	data: {
		list: [
			{id: 1, name: 'aaa'},
			{id: 2, name: 'bbb'},
			{id: 3, name: 'ccc'},
		]
	},
	template: function() {
		
		var a = <div>哈哈a</div>;
		var b = <div>哈哈b</div>;
		
		return (
			<div style={{border: '1px red solid'}}>
				{
					this.state.list.map(function(it, i) {
						return (
							<li key={it.id}>
								<input defaultValue={it.name} onChange={this.changeFn.bind(null, it)} />
								<label>{it.name}</label>
								<button onClick={this.clickFn.bind(null, it)}>{it.name}</button>
							</li>
						)
					}.bind(this))
				}
				{a}
				{b}
			</div>
		);
	},
	clickFn: function(it, e) {
		alert(it.name)
	},
	changeFn: function(it, e) {
		var v = e.target.value;
		it.name = v;
		this.setState(this.state); 
	},
	constructor: function() {
		this.callParent();
	}
})
