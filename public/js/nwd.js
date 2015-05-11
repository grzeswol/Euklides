var nwdText;
var solving;
$(document).ready(function() {
	$("#solve").click(function(e) {
		e.preventDefault();
		var a = $("#numberA").val();
		var b = $("#numberB").val();
		if ($.isNumeric(a) && $.isNumeric(b)) {
			$(".nwd").empty();
			$(".solving").empty();
			nwdText = "";
			solving = "";
			gcd_rec_proper(a,b);
		}
		else {
		  alert("Wpisz poprawna liczbe!");
		}	
	});	
});


var col_a = rand_color();
var col_b = rand_color();
var col_rem = rand_color();
function gcd_rec_proper(a, b) {
	if (b) {
		var colorized_a = colorize(col_a, a);
		var colorized_b = colorize(col_b, b);

    nwdText += "NWD(" + colorized_a + "," + colorized_b + ") = ";
		if (a > b) {
    	nwdText += "NWD(" + colorized_b + "," + colorized_a + ") = ";
		}

		var times = ~~(a / b);
		var rem = a % b;
		var colorized_rem = colorize(col_rem, rem);
		solving += colorized_a + " = " + times  + " * " + colorized_b + " + " + colorized_rem + "<br>";
		
		col_a = col_b;
		col_b = col_rem;
		col_rem = rand_color();

		return gcd_rec_proper(b, rem);
	} else {
		var colorized_a = colorize(col_a, a);
		var colorized_b = colorize(col_b, b);
	  nwdText += "NWD(" + colorized_a + "," + colorized_b + ") = ";
		nwdText += Math.abs(a);
	  $(".nwd").append(nwdText);
	  $(".solving").append(solving);
	}
};

function colorize(color,text)
{
	return '<span style="color:'+color+'">'+text+'</span>';
};

function rand_color() {
	var hue = 'rgb('+ (Math.floor(Math.random() * 256)) + ','
						       + (Math.floor(Math.random() * 256)) + ','
						       + (Math.floor(Math.random() * 256)) + ')';
  return hue;
};
