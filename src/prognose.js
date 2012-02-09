(function(){

		Handlebars.registerHelper('amount', function(txt){
			return SB.format.Number(txt);
		});
		Handlebars.registerHelper('diff', function(a,b){
			return SB.format.Number(a-b);
		});
		Handlebars.registerHelper('posneg', function(a,b){
			return a-b > 0 ? 'positive': 'negative';
		});

		
		var template = '{{#items}}\
			<li>\
				<h2>{{name}}</h2>\
				<p class="target">{{amount target}}</p>\
				<p class="actual">{{amount actual}}</p>\
				<p class="diff {{posneg target actual}}">{{diff target actual}}</p>\
			</li>\
			{{/items}}';
		var items = Handlebars.compile(template);
		
		jQ('#prognose').html(items({items: SB.prognose.items}));
		jQ('#prognose li').live('click', function(){
			jQ('li.active').removeClass('active');
			jQ(this).addClass('active');
		});
})();