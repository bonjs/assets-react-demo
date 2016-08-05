

Ext.define('js.User', {
	extend: 'core.DataViewReact',
	//url: 'json/userList.json',
	data: {
		list: [
			{id: 1, name: 'aaa', isChecked: true},
			{id: 2, name: 'bbb', isChecked: false},
		]
	},
	template: function() {
		var me = this;
		return (
			<div>
				<button onClick={this.addFn}>新增</button>
				<button onClick={this.ajaxFn}>load</button>
				{
					this.state.list.map(function(it, i) {
						return (
							<li key={it.id}>
								<input defaultValue={it.name} onChange={this.changeFn.bind(null, it)} />
								<input type="checkbox" onChange={this.checkFn.bind(null, it)} checked={it.isChecked}/>
								<button onClick={this.delFn.bind(null, i)}>删除</button>
								<label>{it.name}</label>
							</li>
						)
					}.bind(this))
				}
			</div>
		);
	},
	ajaxFn: function() {
		this.load('json/userList.json')
		console.log(this);
	},
	addFn: function() {
		var id = Math.random().toString(36).slice(2, 10)
		
		this.state.list.push({
			id: id,
			name: id 
		});
		this.setState(this.state);
	},
	delFn: function(i, e) {
		this.state.list.splice(i, 1);
		this.forceUpdate();
	},
	checkFn: function(it, e) {
		it.isChecked = !it.isChecked;
		this.forceUpdate();
	},
	changeFn: function(it, e) {
		var v = e.target.value;
		it.name = v;
		this.setState(this.state); 
	},
	constructor: function() {
		this.callParent(arguments);
	}
})
