
// 自分がグーを出した時
$("#gu").on("click", function(){

var gu_random = Math.floor(Math.random()*3);
console.log(gu_random, "グーのランダムの箱");

if(gu_random === 0){
	console.log("グーとグー");
	$("#state").html('<img src="/img/gu.jpg" height ="80" width="80" />');
	$("#result").html("あいこ");
	$("#result").width();
	$("#jojo_nigeru").get(0).play();
} else if (gu_random === 1){
	console.log("グーとチョキ");
	$("#state").html('<img src="/img/cho.jpg" height ="80" width="80" />');
	$("#result").html("勝ち");
	$("#jojo_arideverychi").get(0).play();
} else if (gu_random === 2){
	console.log("グーとパー");
	$("#state").html('<img src="/img/pa.jpg" height ="80" width="80" />');
	$("#result").html("負けー");
	$("#jojo_hinjyaku").get(0).play();
}

});

// 自分がチョキを出した時
$("#cho").on("click", function(){

	var cho_random = Math.floor(Math.random()*3);
	console.log(cho_random, "チョキのランダムの箱");
	
	if(cho_random === 0){
		console.log("チョキとグー");
		$("#state").html('<img src="/img/gu.jpg" height ="80" width="80" />');
		$("#result").html("負けー");
		$("#jojo_hinjyaku").get(0).play();
	} else if (cho_random === 1){
		console.log("チョキとチョキ");
		$("#state").html('<img src="/img/cho.jpg" height ="80" width="80" />');
		$("#result").html("あいこ");
		$("#jojo_nigeru").get(0).play();
	} else if (cho_random === 2){
		console.log("チョキとパー");
		$("#state").html('<img src="/img/pa.jpg" height ="80" width="80" />');
		$("#result").html("勝ち！！");
		$("#jojo_arideverychi").get(0).play();
	}
	
	});

	// 自分がパーを出した時
$("#pa").on("click", function(){

	var pa_random = Math.floor(Math.random()*3);
	console.log(pa_random, "パーのランダムの箱");
	
	if(pa_random === 0){
		console.log("パーとグー");
		$("#state").html('<img src="/img/gu.jpg" height ="80" width="80" />');
		$("#result").html("勝ち！！");
		$("#jojo_arideverychi").get(0).play();
	} else if (pa_random === 1){
		console.log("パーとチョキ");
		$("#state").html('<img src="/img/cho.jpg" height ="80" width="80" />');
		$("#result").html("負けー");
		$("#jojo_hinjyaku").get(0).play();
	} else if (pa_random === 2){
		console.log("パーとパー");
		$("#state").html('<img src="/img/pa.jpg" height ="80" width="80" />');
		$("#result").html("あいこ");
		$("#jojo_nigeru").get(0).play();
	}
	
	});

	// 音楽を流す
	$(function() {
		var audio = $("#audio").get(0);
		var isPlaying = false;
		$("#btn-gold").on("click", function () {
			if (isPlaying) {
				audio.pause();
			} else {
				audio.play();
			}
		});
		audio.onplaying = function() {
			isPlaying = true;
		};
		audio.onpause = function() {
			isPlaying = false;
		};
	});

// コメントを追加したい

