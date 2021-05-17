(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Animate_atlas_1", frames: [[0,104,274,71],[0,0,408,102]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_2 = function() {
	this.initialize(ss["Animate_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["Animate_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.WarpedAsset_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#670072").s().p("AjHbvQhkAAAAhkMAAAg0VQAAhkBkAAIGPAAQBkAAAABkMAAAA0VQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-177.5,60,355);


(lib.StageOutline = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("EgVFgmRMAqLAAAMAAABMjMgqLAAAg");
	this.shape.setTransform(135,245);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,273,493);


(lib.Polygon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6666").s().p("An7LtIkkuwIMoo5IMXJSIlAOng");
	this.shape.setTransform(79.975,76.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,152.9);


(lib.Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Text
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(32.8,11.5,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(70,18.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

	// ButtonBack
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#669966").s().p("AzhFFQhkAAAAhkIAAnBQAAhkBkAAMAnDAAAQBkAAAABkIAAHBQAABkhkAAg");
	this.shape.setTransform(135,32.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6633CC").s().p("AzhFFQhkAAAAhkIAAnBQAAhkBkAAMAnDAAAQBkAAAABkIAAHBQAABkhkAAg");
	this.shape_1.setTransform(135,32.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6633CC").s().p("AwoDhQhVAAAAhFIAAk3QAAhFBVAAMAhRAAAQBVAAAABFIAAE3QAABFhVAAg");
	this.shape_2.setTransform(135,32.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6633CC").s().p("A0+IOQhrAAAAihIAArYQAAiiBrABMAp9AAAQBrgBAACiIAALYQAAChhrAAg");
	this.shape_3.setTransform(135,32.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-20,290,105.1);


(lib.PuppetShape_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_1("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#670072").s().p("Aj/blQgYgagDgzQgpq2AIu6QAFowAayXQABg0AWgSQAUgQA1gDQDHgGDIAJQA4ACAXAQQAdAUgBAzQggPZgDLvQgDNTAgMHQADAygcAcQgcAdgxgDQjIgNi+AZIgRABQgkAAgWgWg");
	this.shape.setTransform(-1.1117,1.0999);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.9,-177.6,63.599999999999994,357.4);


(lib.PuppetShape_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_1("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#670072").s().p("ADfcBQhigSh0gDQhAgBhyABQgzgBgwgcQg6ghAPgsQB5lugVm3QgIirgfjgQgIg8g1lVQhRoHAClLQADn0ChnYQASg1BRAYQAbAHAlARIAwAXQAjAOB3BZQBzBVBMAbQArAPglAwQgzA2gLAQQhyC4AWGKQAMDVBdJPQBaI4AME5QASHnh5FEQgLAdAAA1QgEAdgfAAQgIAAgJgBg");
	this.shape.setTransform(-1.3302,0.6271);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#670072").s().p("ADdb7QhigNhqAAQhLABhwAHQgxAEgmgcQgqgeAHgvQAylpgPnCQgGi/gupsQgmoFAClQQAEnrBRnAQAJg0A4gCQAagBBIAQQAjAICQAyQB2ApBRAIQAuAFADAkQABAOgPA+QhIE2ACG2QABEdAqIaQAvJUAHD6QAOHWg1FXQgKA/gIAQQgPAbgkAAIgOgBg");
	this.shape_1.setTransform(-1.6706,0.5661);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.4,-178.8,78.19999999999999,358.9);


(lib.PuppetShape_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_1("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#670072").s().p("AFdb7QjagXitASQgvAFgUgjQgPgZgEg3QgVkmAHn6QAJqNgDisQgJnOg7lIQhJmViikkQgcgxgCgYQgEglArgSQBJgeBrg9QB9hIAngTQBCggAXgEQA0gIAXAvQDNGoBeHcQBMGDAMHkQAFDVgNJ3QgKIDAXEuQADAvgnAfQgfAZgnAAIgPgBg");
	this.shape.setTransform(-15.2776,0.5275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#670072").s().p("AEGbUQhhgMhpgDQhPgChuAEQgyACgigbQgkgeAGgvQAwl+gGmtQgElVgpnKQgYkMg6opQgzn6gRlwQgDgyAzgSQAqgPA1ALQCRAfAfAEQBjALBWgeQAtgQAXAcQATAXADAyQAPEhAzHsQBKLDAMCCQBdQHhaKDQgIA4gPAVQgRAYgjAAIgQgCg");
	this.shape_1.setTransform(-5.8863,4.6526);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.3,-178.3,96.19999999999999,357.9);


(lib.PuppetShape_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_1("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#670072").s().p("AlmbgQg2giAIgsQA7lJgonfQgKh0ghkpQgdkLgLibQgjnvBJl4QBenmEgmzQAfgvA9AaQAiAOA9AkQBEAZBiBcQBuBuAyAwQAgAeglApQg0ArgSAQQjFDAg1F0QgoEbAmHlQAJB0AdExQAaEPALCYQAhHog0EwQgEAdgFA3QgLApgvgGQhjgMhrAGQhJAFhuAQIgRABQgnAAgogYg");
	this.shape.setTransform(7.9696,1.6919);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#670072").s().p("AjxbCQgkgcADgvQAWlmgPnKQgFicgkqSQgcn6AAlJQgBnUAvmYQAGgxAxgNQApgLAzARQChAzAOADQBlAYBXgOQAvgIATAhQARAcgGAxQgpFFAEG0QACEnAdIHQAiJmAGDYQAPHTgXFdQgDA1gSAYQgVAegxgEQipgRjcAVIgOABQgoAAgegXg");
	this.shape_1.setTransform(-3.0292,4.0127);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-177.5,96,357.7);


(lib.PuppetShape_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_1("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#670072").s().p("Ah3btQgGgzgJgdQhhlEABnhQABi0APj3IAcmqQAhoDgakSQgnmJimjcQgPgTgxgwQgjgrAjgbQA4grBohwQBfhcBNgJQASgCAigNQApgQANgEQA/gRAbAyQDzHQBJHtQA1FqgeHxIgeGYQgTDygCCfQgIHHBoFgQANAtg1AhQguAdgygBQh6gDg7ACQhvAEhhATQgKACgIAAQgfAAgJgbg");
	this.shape.setTransform(-13.6005,0.4785);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#670072").s().p("AjRbMQgPgUgJg4Qg4lggInRQgFkKAOo5QANobgHkQQgMmyg/k7QgKg2AGgZQAJgmAvgEQBZgJBrgZQA/gPB0ghQA4gPAlAIQAzAKAIAyQBKGfARHYQALE4gMIFQgOJFADDhQAHHBA4FrQAHAvgmAeQgiAbgygBQhqgDhTAEQhmAEhiAQIgTACQghAAgRgWg");
	this.shape_1.setTransform(-5.254,4.1525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#670072").s().p("AkQbNQglgbABgwQAGlAganzQgkq6gDiAQgPnZAel0QAlnPBtmfQAMgxAwgIQAkgGA1ASQB0AtA9AWQBrAmBVAGQAuADAMAmQAJAegPAwQhdFAgeGeQgXFLAOHNIAnMyQAXHvgFE5QgBA1gSAaQgVAfgwgDQhhgHhmAGQhXAFhnAOIgTACQglAAgcgVg");
	this.shape_2.setTransform(0.1334,4.015);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.2,-179.5,97.7,360);


(lib.PuppetShape_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_1("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#670072").s().p("AmsboQg2ggAFgsQAiksg4oAQghkYgPiPQgZj4gGi5QgOnwB9mFQCbnkGFmhQApgsAvAYIArAZQAaAQAVAFQBlAVBcBcQBZBYAnBvQAPAsgrAjQg6AigXARQkTDKhlFtQhSElAUHKQAHCnAWDzIApGeQAtHzgZEbIgGBVQgKAqgvgDQhkgHhpALQhTAJhkAWQgLACgMAAQgjAAgmgXg");
	this.shape.setTransform(15.0598,2.0953);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#670072").s().p("AlgbjQgrgcABgvQAJkpgroKQgypcgEjuQgJngBRmEQBjnbD2mpQAbgvAuAHQAcAEA9AYQBTAYBnBDQBFAtBrBVQAkAcgQAoQgFAMgpA6Qi/EMhJGDQg8E8ALHCQAGDOAtJfQAlH9gGEdQgCA7gKAXQgRAjgvgCQhigFhnAKQhSAHhpAUQgMACgMAAQgjAAgfgUg");
	this.shape_1.setTransform(7.8199,2.6742);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#670072").s().p("AkMbNQgdgYgEgxQhQvzAEqHQAGuaCesCQATheBnAWIDAApQBwAXBSAIQAxAFAUAfQAUAfgKAvQiTLHgFNoQgDJUBLP0QAEAygZAcQgZAdgxgBQi5gFjLAiQgMABgLAAQghAAgXgSg");
	this.shape_2.setTransform(0.0571,4.7984);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#670072").s().p("AjRbTQgLgQgMg8QhHlggInSQgGkfAWopQAXougEj8QgHmxhEkuQgPg+ACgSQADgoAtgHQBMgNB7glQCBgnA1gKQA+gMAhAFQA1AJAKAyQBRGrANHdQAJExgVIMQgWIqAED1QAHG7BGFwQAJAvgoAdQgkAbgyAAQhtgBhPAEQhnAGhiARQgMACgJAAQggAAgOgVg");
	this.shape_3.setTransform(-5.1244,3.8389);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.9,-177.5,116,358.8);


(lib.PuppetShape_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_1("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#670072").s().p("AF8cBQjigeiqAGQguACgKgsQgDg6gEgcQglkaAjoBIAimuQATkDAGilQAPnbhRkSQhnlZkRiCIhYgpQgxggASgmQAOggAXhHQAYhOAOgiQA1iBBagZQAWgGAbgVIAsgkQAyglAuAnQHBF6C1HgQCQF/gKIDQgEC6gZEFQgOCTgeEiQgwIFA4EqQAIArg2AmQgsAfgoAAIgNgBg");
	this.shape.setTransform(-18.5874,-0.0388);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#670072").s().p("AFgb8QhwgMhLgEQhwgHhgAFQguADgNgpIgJhUQglklAdn7QAqo/AJkSQAOnahEkaQhXlkjqihQhBgtgJgJQgngmAcghQAbgfAjg4IA7hdQBKhvBIgcQARgGAdgUQAigYALgHQA3geAnApQFuGJCQHeQB0F9gLH6QgEC0gVECIgkGuQgnH+AzE1QAHAsgyAjQgqAdgoAAIgNgBg");
	this.shape_1.setTransform(-15.7413,0.2869);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#670072").s().p("AFCbzQhxgKhMgDQhugFhgAGQgvACgOgkQgGgOgHhEQghkxAWn2QAho4AGkSQAMnXg4kmQhGl1jAjRQgpgsgMgYQgWgtAmgXQA6gjBnhdQBihYA1gdQBXgtAFgCQA5gSAdAsQETGSBrHZQBVF3gJHxQgECtgQEAIgbGoQgcH3AqE/QAGAtguAhQgmAagqAAIgLAAg");
	this.shape_2.setTransform(-12.6422,1.0494);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#670072").s().p("AEebkQjggRiqAKQgwADgTggQgNgWgEg5QgZk+ANnxQAVowAEkQQAGnVgok5QgzmMiIkPQgXgtABgiQABguAugJQBbgUBdgrQA8gdBjg7QAvgcArgDQA2gCAUAuQCvGRBDHPQA2FvgGHmQgDEagZIuQgRHxAeFIQAEAugoAeQghAZgrAAIgJAAg");
	this.shape_3.setTransform(-8.8264,2.3834);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#670072").s().p("AD0bOQjNgMi8AMQhdAFgDhqQgLlFADnyIADs4QgCvUhjpGQgIguAWghQAYgjAwAEQBrAJBQgKQBZgLBSgnQAtgVApAPQAsAQAIAwQB2KUABPoQAAETgGIpQgEHuAOFMQACAwggAbQgcAYgqAAIgKAAg");
	this.shape_4.setTransform(-4.4758,4.3278);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#670072").s().p("AkGa3QgfgaABgxQAFlUgKnlQgOolgFkSQgSvpBBqPQAEgwApgVQAmgTAwAOQB7AkA4AKQBjAQBXgRQAvgJAaAgQAZAegFAvQg0JMAQPdQAEEQAMInQAJHogDFOQgBAzgWAZQgZAcgxgDQizgKjVARIgNAAQgoAAgagWg");
	this.shape_5.setTransform(-0.7614,4.8841);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#670072").s().p("Ak0bMQgngcACgvQATlMgWnrQgfomgIkXQgOnfAlluQAvnPCJmcQAQgwAygFQAmgEA0AUICvBNQBuAvBSAOQBNAMgsB0QhwElgkGUQgdE+APHTQAIEQAcIpQAUHqgRFCQgCA3gPAYQgUAfgwgDQhfgGhpAEQhQAEhvALIgQABQgnAAgegWg");
	this.shape_6.setTransform(3.5444,3.3583);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#670072").s().p("AlhbbQgtgeAEguQAdlDginwIggmgQgSj5gGisQgRnkBDl5QBUnaDmmoQAZgvA0AJIBbAfQBFAYBsBIQB4BUA7AkQAmAYgRArQgGAOgoA5QitD5g8GBQguEyASHQQALEPApIrQAdHugYE0QgFA+gIATQgQAjgvgDQhhgHhqAGQhPAFhsAPIgUACQglAAgigWg");
	this.shape_7.setTransform(7.7247,2.4309);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#670072").s().p("AmIbjQgxgfAEgtQAhk4gtn3IgomjQgXj5gGiyQgQnqBgmBQB4ngE5moQAhgtAzASQANAEAgARQAdAPARAEQBWAYBhBUQBRBFBKBhQAcAkghAnIhDA9QjhDbhQF1QhAEqAUHNQAHCjAUD4IAjGfQAlHwgaEnQgGBKgDAKQgNAmgvgDQhhgIhrAKQhQAGhpATQgKACgKAAQglAAglgXg");
	this.shape_8.setTransform(11.454,2.0665);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.5,-179.4,141.1,360.1);


(lib.PuppetShape_1copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_1("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#670072").s().p("AkpaLMgADg0VQAAhkBkAAIGOAAQBkAAAABkUAADAi4AAAARdQAABlhjgBImPAAQhkAAAAhkg");
	this.shape.setTransform(0.175,0.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-177.5,60.3,355.2);


(lib.PuppetShape_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_1("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#670072").s().p("AkpaLMgADg0VQAAhkBkAAIGOAAQBkAAAABkUAADAi4AAAARdQAABlhjgBImPAAQhkAAAAhkg");
	this.shape.setTransform(0.175,0.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#670072").s().p("ADsb4ImOgEQgxABgVgbQgUgYgCg0QgLlNAHn0QAMowACkVQAEncgUlWQgYmxhClaQgKgyAOgdQAQgjAvgGQBTgJBygXIC9gmQB0gWAQBcQBKGVAcHOQAWFugEHkQgCEZgMIvQgIHzAMFSQACAwgfAbQgdAYgxAAIgCAAg");
	this.shape_1.setTransform(-3.4654,-0.5368);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#670072").s().p("AEOcAIjBgGQh2gDhWABQgwABgTgeQgNgWgEg4QgWlGAPn0QAWo0AFkUQAInagklFQgtmch9krQgVgxACgeQACgpAtgNQBIgVB0gyQB/g3AzgRQA6gSAhADQAvAEASAwQCYGgA6HXQAtF1gHHpQgEEcgZIxQgRH1AZFOQAEAwglAcQghAZgwAAIgEAAg");
	this.shape_2.setTransform(-7.052,-1.019);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#670072").s().p("AEvcFIjAgJQhzgEhbACQgvABgQghQgIgSgFg/Qgek7AVn3QAfo4AGkUQAMnagxk1Qg/mHitj4QgigzgHgWQgOgsAogVQAzgbB5hXQBohLBAgYQBQgfALgCQA2gJAaAvQDoGgBYHeQBGF7gKHvQgGEgglI1QgZH3AlFIQAFAugrAeQgjAagtAAIgIAAg");
	this.shape_3.setTransform(-10.494,-1.2877);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#670072").s().p("AFLcHIi9gNQhzgFhdADQguABgOglQgCgGgJhNQgikvAan6QAno9AIkUQAOnag9knQhNl0jTjJQg0gxgKgOQgcgqAhgdQAggbArgvIBHhRQBXhgBHgaQA9giAggMQA2gVAiAsQE0GaB4HhQBgF+gMH1QgECygTEBIggGsQghH7AtE/QAHAtgwAhQgnAbgrAAIgKAAg");
	this.shape_4.setTransform(-13.4986,-1.1962);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#670072").s().p("AFlcFQhxgMhKgEQhxgHhhAEQguACgLgpQgFg4gEgdQglkkAfn9QAspAAJkVQAQnahIkcQhZllj0ihQhGgugGgGQgpglAagiQAog2BJiIQBGhyBPgaQATgGAcgTQAngbAHgDQA1geAoApQF8GLCXHiQB5F/gMH9QgEC1gWEDIgmGxQgpH/A0E1QAHAsgzAkQgrAdgpAAIgLgBg");
	this.shape_5.setTransform(-16.1675,-0.7318);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.2,-181.1,110.1,360.2);


(lib.RectangleStill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.PuppetShape_1("synched",1,false);
	this.instance.setTransform(30,177.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0.1,60.199999999999996,355.09999999999997);


(lib.Rectangle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.PuppetShape_1("synched",1,false);
	this.instance.setTransform(30,177.5);

	this.instance_1 = new lib.PuppetShape_2("synched",1,false);
	this.instance_1.setTransform(30,177.5);
	this.instance_1._off = true;

	this.instance_2 = new lib.PuppetShape_3("synched",1,false);
	this.instance_2.setTransform(30,177.5);
	this.instance_2._off = true;

	this.instance_3 = new lib.PuppetShape_4("synched",1,false);
	this.instance_3.setTransform(30,177.5);
	this.instance_3._off = true;

	this.instance_4 = new lib.PuppetShape_5("synched",1,false);
	this.instance_4.setTransform(30,177.5);
	this.instance_4._off = true;

	this.instance_5 = new lib.PuppetShape_6("synched",1,false);
	this.instance_5.setTransform(30,177.5);
	this.instance_5._off = true;

	this.instance_6 = new lib.PuppetShape_7("synched",1,false);
	this.instance_6.setTransform(30,177.5);
	this.instance_6._off = true;

	this.instance_7 = new lib.PuppetShape_8("synched",1,false);
	this.instance_7.setTransform(30,177.5);
	this.instance_7._off = true;

	this.instance_8 = new lib.PuppetShape_1copy("synched",1,false);
	this.instance_8.setTransform(30,177.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_2}]},9).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},6).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},6).to({_off:true},9).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},9).to({_off:true},4).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15).to({_off:false},4).to({_off:true},3).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},3).to({_off:true},2).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(22).to({_off:false},2).to({_off:true},2).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(24).to({_off:false},2).to({_off:true},2).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(26).to({_off:false},2).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.5,-3.6,150.6,362.40000000000003);


// stage content:
(lib.Animate = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {StartSquash:1,StartAnticipation:42,StartFollowThru:94};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,41,93,146];
	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.StartFollowThrough.on('click', function(){
		/*
		Moves the playhead to the specified frame label in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay('StartFollowThru');
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.StartAnticipation.on('click', function(){
		/*
		Moves the playhead to the specified frame label in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay('StartAnticipation');
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.StartSquash.on('click', function(){
		/*
		Moves the playhead to the specified frame label in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay('StartSquash');
		});
	}
	this.frame_41 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_93 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_146 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(41).call(this.frame_41).wait(52).call(this.frame_93).wait(53).call(this.frame_146).wait(1));

	// ButtonThree
	this.StartFollowThrough = new lib.Button();
	this.StartFollowThrough.name = "StartFollowThrough";
	this.StartFollowThrough.setTransform(895,589);
	new cjs.ButtonHelper(this.StartFollowThrough, 0, 1, 2, false, new lib.Button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.StartFollowThrough).wait(147));

	// ButtonTwo
	this.StartAnticipation = new lib.Button();
	this.StartAnticipation.name = "StartAnticipation";
	this.StartAnticipation.setTransform(506,587.5);
	new cjs.ButtonHelper(this.StartAnticipation, 0, 1, 2, false, new lib.Button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.StartAnticipation).wait(147));

	// ButtonOne
	this.StartSquash = new lib.Button();
	this.StartSquash.name = "StartSquash";
	this.StartSquash.setTransform(245,620,1,1,0,0,0,135,32.5);
	new cjs.ButtonHelper(this.StartSquash, 0, 1, 2, false, new lib.Button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.StartSquash).wait(147));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EApzAmSQhkAAAAhkMAAAhJbQAAhkBkAAMAnEAAAQBkAAAABkMAAABJbQAABkhkAAgEgTIAmSQhkAAAAhkMAAAhJbQAAhkBkAAMAnDAAAQBkAAAABkMAAABJbQAABkhkAAgEhQ2AmSQhkAAAAhkMAAAhJbQAAhkBkAAMAnEAAAQBkAAAABkMAAABJbQAABkhkAAg");
	mask.setTransform(637.5,320);

	// FollowThruOverlap
	this.instance = new lib.RectangleStill("synched",0);
	this.instance.setTransform(1031.85,388.4,1,1,0,0,0,30.2,177.6);

	this.instance_1 = new lib.Rectangle("synched",0);
	this.instance_1.setTransform(1031.4,388.8,1,1,0,0,0,30.2,177.6);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},94).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_1}]},11).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance}]},8).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(95).to({_off:false},0).to({x:1109.4,startPosition:5},9).to({x:951.4,startPosition:13},11).to({x:1079.4,startPosition:17},7).to({x:1057.8,startPosition:19},7).to({x:1020.4,startPosition:22},8).to({_off:true,x:1031.85,y:388.4,startPosition:0},8).wait(2));

	// Anticipation
	this.instance_2 = new lib.Polygon("synched",0);
	this.instance_2.setTransform(636.2,488.2,1,1,0,0,0,80,76.5);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(42).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({scaleX:1.2024,scaleY:0.7606,y:508.2},7).wait(5).to({scaleX:1.3271,scaleY:0.6298,rotation:-14.9982,y:516.25},0).to({regY:76.6,rotation:14.9999,x:636.25,y:516.2},7).to({rotation:0},7).to({regX:80.1,regY:76.7,scaleX:1.0015,scaleY:1.0061,x:640,y:152.15},7).wait(1).to({scaleX:1.2486,scaleY:0.7589,y:132.15},0).to({regX:80.4,regY:76.9,scaleX:0.8764,scaleY:1.1676,x:640.25,y:319.85},7).to({regX:80.2,regY:76.7,scaleX:1.0017,scaleY:1.0058,x:640.1,y:487.2},7).wait(1).to({regX:80.3,scaleX:1.2526,scaleY:0.7453,x:640.2,y:507.2},0).wait(1).to({regX:80.5,scaleX:1.0001,scaleY:0.9999,x:636.15,y:488.05},0).wait(54));

	// SquashAndStrech
	this.instance_3 = new lib.Polygon("synched",0);
	this.instance_3.setTransform(250.05,-46.35,0.75,1.5886,0,0,0,80,76.5);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({scaleX:1,scaleY:1,x:240.05,y:488.6},11).to({scaleX:1.25,scaleY:0.7659,x:240.1,y:506.5},6).to({scaleX:0.8125,scaleY:1,x:245.05,y:320.05},7).to({scaleX:1,x:250.05,y:488.6},8).wait(2).to({scaleX:1.25,scaleY:0.7848,x:250.1,y:505.05},0).wait(2).to({scaleX:1,scaleY:1,x:250.05,y:470.05},0).wait(2).to({scaleX:1.125,scaleY:0.8967,x:250.1,y:496.5},0).wait(2).to({scaleX:1.0001,scaleY:1,y:488.6},0).wait(106));

	// Stages
	this.instance_4 = new lib.StageOutline("synched",0);
	this.instance_4.setTransform(1030,320,1,1,0,0,0,135,245);

	this.instance_5 = new lib.StageOutline("synched",0);
	this.instance_5.setTransform(640,320,1,1,0,0,0,135,245);

	this.instance_6 = new lib.StageOutline("synched",0);
	this.instance_6.setTransform(245,320,1,1,0,0,0,135,245);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).wait(147));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(740,433.5,435,240.60000000000002);
// library properties:
lib.properties = {
	id: '38D340BDD7894CC49EB835714B148586',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Animate_atlas_1.png", id:"Animate_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['38D340BDD7894CC49EB835714B148586'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;