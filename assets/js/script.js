var app = new Vue({
	delimiters: ["((", "))"],
	el: '#app',
	data:{
		active_el:0
	},
	methods:{
		activate: function(el){
			this.active_el = el;
		}
	}
})