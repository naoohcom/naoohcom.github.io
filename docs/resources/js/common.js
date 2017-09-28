var page = undefined;

var Page = function(){

	this.container = $('#container');
	this.icon = $('#naooh_icon');

	//initialize background size
	this.fitBackground();

	this.init();
	this.animateIcon();
};

Page.prototype.init = function(){
	var self = this;

	$(window).resize(function(){
		self.fitBackground();
	});
}

Page.prototype.fitBackground = function(){
	var self = this;

	var windowWidth = $(window).width();
	var windowHeight = $(window).height();

	self.container.width(windowWidth);
	self.container.height(windowHeight);
}

Page.prototype.animateIcon = function(){
	var self = this;

	self.icon.animate({
		opacity : 1,
		left : '30%',
		top : '30%',
		width : '40%',
		height : '40%'
	},
	{
		duration : 200
	})
}


$(function(){
	page = new Page();
});