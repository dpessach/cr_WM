/**
 * jspsych-palmer
 * Josh de Leeuw (October 2013)
 *
 * a jspsych plugin for presenting and querying about stimuli modeled after
 *
 * Palmer, S. (1977). Hierarchical Structure in Perceptual Representation. Cognitive Psychology, 9, 441.
 * and
 * Goldstone, R. L., Rogosky, B. J., Pevtzow, R., & Blair, M. (2005). Perceptual and semantic reorganization during category learning.
 * In H. Cohen & C. Lefebvre (Eds.) Handbook of Categorization in Cognitive Science. (pp. 651-678). Amsterdam: Elsevier.
 *
 * documentation: docs.jspsych.org
 *
 * 
 * Adapted for cr_WM DotWM-Task by Danielle Pessach(January2016)
 */


jsPsych.plugins.dotWMTask = (function() {

  var plugin = {};

  
  plugin.trial = function(display_element, trial) {

    // default parameter settings
    trial.show_feedback = (typeof trial.show_feedback === 'undefined') ? false : trial.show_feedback;
	trial.n_circles = trial.n_cirles || 4;
    trial.timing_item = trial.timing_item || 1000;
    trial.timing_feedback = trial.timing_feedback || 1000;
    trial.prompt = (typeof trial.prompt === 'undefined') ? "" : trial.prompt;

    // if any trial variables are functions
    // this evaluates the function and replaces
    // it with the output of the function
    trial = jsPsych.pluginAPI.evaluateFunctionParameters(trial);


    display_element.append($("<svg id='jspsych-dotWMTask-snapCanvas' width='" + 500 + "' height='" + 500 + "'></svg>"));

    var s = Snap("#jspsych-dotWMTask-snapCanvas");

// create the circles at the vertices.
//Draw lines:

var l1 = s.line(100, 100, 400, 100);
l1.attr({
    stroke: "#000",
    strokeWidth: 2
});

var l2 = s.line(100, 200, 400, 200);
l2.attr({
    stroke: "#000",
    strokeWidth: 2
});

var l3 = s.line(100, 300, 400, 300);
l3.attr({
    stroke: "#000",
    strokeWidth: 2
});

var l4 = s.line(100, 400, 400, 400);
l4.attr({
    stroke: "#000",
    strokeWidth: 2
});

var l5 = s.line(100, 100, 100, 400);
l5.attr({
    stroke: "#000",
    strokeWidth: 2
});

var l6 = s.line(200, 100, 200, 400);
l6.attr({
    stroke: "#000",
    strokeWidth: 2
});

var l7 = s.line(300, 100, 300, 400);
l7.attr({
    stroke: "#000",
    strokeWidth: 2
});

var l8 = s.line(400, 100, 400, 400);
l8.attr({
    stroke: "#000",
    strokeWidth: 2
});


//Draw (hidden) circles:

var c1 = s.circle(150, 150, 25);
c1.attr({
    opacity: 0
});

var c2 = s.circle(250, 150, 25);
c2.attr({
    opacity: 0
});
var c3 = s.circle(350, 150, 25);
c3.attr({
    opacity: 0
});
var c4 = s.circle(150, 250, 25);
c4.attr({
    opacity: 0
});
var c5 = s.circle(250, 250, 25);
c5.attr({
    opacity: 0
});
var c6 = s.circle(350, 250, 25);
c6.attr({
    opacity: 0
});
var c7 = s.circle(150, 350, 25);
c7.attr({
    opacity: 0
});
var c8 = s.circle(250, 350, 25);
c8.attr({
    opacity: 0
});
var c9 = s.circle(350, 350, 25);
c9.attr({
    opacity: 0
});



// let vp draw the circles //Click-Function:

	var dotIsVisible = [0, 0, 0, 0, 0, 0, 0, 0, 0];
	
c1.click(function() {
		 if (c1.attr("opacity") === "1") {
		 c1.attr({
			opacity: 0
			});
		dotIsVisible[0] = 0;
		} else {
		c1.attr({
			opacity: 1
			});
		dotIsVisible[0] = 1;
		}
});	
c2.click(function() {
		 if (c2.attr("opacity") === "1") {
		 c2.attr({
			opacity: 0
			});
		dotIsVisible[1] = 0;
		} else {
		c2.attr({
			opacity: 1
			});
		dotIsVisible[1] = 1;
		}
});	
c3.click(function() {
		 if (c3.attr("opacity") === "1") {
		 c3.attr({
			opacity: 0
			});
		dotIsVisible[2] = 0;
		} else {
		c3.attr({
			opacity: 1
			});
		dotIsVisible[2] = 1;
		}
});	c4.click(function() {
		 if (c4.attr("opacity") === "1") {
		 c4.attr({
			opacity: 0
			});
		dotIsVisible[3] = 0;
		} else {
		c4.attr({
			opacity: 1
			});
		dotIsVisible[3] = 1;
		}
});	c5.click(function() {
		 if (c5.attr("opacity") === "1") {
		 c5.attr({
			opacity: 0
			});
		dotIsVisible[4] = 0;
		} else {
		c5.attr({
			opacity: 1
			});
		dotIsVisible[4] = 1;
		}
});	c6.click(function() {
		 if (c6.attr("opacity") === "1") {
		 c6.attr({
			opacity: 0
			});
		dotIsVisible[5] = 0;
		} else {
		c6.attr({
			opacity: 1
			});
		dotIsVisible[5] = 1;
		}
});	c7.click(function() {
		 if (c7.attr("opacity") === "1") {
		 c7.attr({
			opacity: 0
			});
		dotIsVisible[6] = 0;
		} else {
		c7.attr({
			opacity: 1
			});
		dotIsVisible[6] = 1;
		}
});	c8.click(function() {
		 if (c8.attr("opacity") === "1") {
		 c8.attr({
			opacity: 0
			});
		dotIsVisible[7] = 0;
		} else {
		c8.attr({
			opacity: 1
			});
		dotIsVisible[7] = 1;
		}
});	c9.click(function() {
		 if (c9.attr("opacity") === "1") {
		 c9.attr({
			opacity: 0
			});
		dotIsVisible[8] = 0;
		} else {
		c9.attr({
			opacity: 1
			});
		dotIsVisible[8] = 1;
		}
});	



		
    // start recording the time
    var startTime = (new Date()).getTime();
	
    display_element.append($('<button id="jspsych-dotWMTask-submitButton" class="jspsych-btn" type="button">Weiter</button>'));
    $('#jspsych-dotWMTask-submitButton').click(function() {
		  save_data();
    });

    if (trial.prompt !== "") {
      display_element.append($('<div id="jspsych-dotWMTask-prompt">'));
      $("#jspsych-dotWMTask-prompt").html(trial.prompt);
    }

    function arrayDifferences(arr1, arr2) {
      var n_diff = 0;
      for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] != arr2[i]) {
          n_diff++;
        }
      }
      return n_diff;
    }

    // save data
    var trial_data = {};

    function save_data() {

      // measure RT
      var endTime = (new Date()).getTime();
      var response_time = endTime - startTime;

      // check if configuration is correct
      // this is meaningless for trials where the user can't edit
      var n_diff = arrayDifferences(configuration, dotIsVisible);
      var correct = (n_diff === 0);

      trial_data = {
        "configuration_by_VP": JSON.stringify(dotIsVisible),
        "target_configuration": JSON.stringify(configuration),
        "rt": response_time,
        "correct": correct,
        "num_wrong": n_diff,
      };

      if (trial.show_feedback) {
        // hide the button
        $('#jspsych-dotWMTask-submitButton').hide();
        $('#jspsych-dotWMTask-prompt').hide();

        showConfiguration(configuration);
        var feedback = "";
        if (correct) {
          feedback = "Correct!";
        } else {
          if (n_diff > 1) {
            feedback = "You missed " + n_diff + " lines. The correct symbol is shown above.";
          } else {
            feedback = "You missed 1 line. The correct symbol is shown above.";
          }
        }
        display_element.append($.parseHTML("<p id='jspsych-dotWMTask-feedback'>" + feedback + "</p>"));

        setTimeout(function() {
          next_trial();
        }, trial.timing_feedback);

      } else {
        next_trial();
      }
    }

    function next_trial() {

      display_element.html('');

      // next trial
      jsPsych.finishTrial(trial_data);

    }


  };

  // method for drawing dotWMTask stimuli.
  // returns the string description of svg element containing the stimulus

  plugin.generate_stimulus = function(n_circles) {

   
    // create a div to hold the generated svg object
    var stim_div = $('body').append($('<div id="jspsych-dotWMTask-container">'));

    $('#jspsych-dotWMTask-container').append('<svg id="jspsych-dotWMTask-temp-stim" width="' + 1000 + '" height="' + 1000 + '"></svg>');

    // create the snap object
    var s = Snap("#jspsych-dotWMTask-temp-stim");

    // create the circles and lines
	
	var l1 = s.line(100, 100, 400, 100);
l1.attr({
    stroke: "#000",
    strokeWidth: 2
});

var l2 = s.line(100, 200, 400, 200);
l2.attr({
    stroke: "#000",
    strokeWidth: 2
});

var l3 = s.line(100, 300, 400, 300);
l3.attr({
    stroke: "#000",
    strokeWidth: 2
});

var l4 = s.line(100, 400, 400, 400);
l4.attr({
    stroke: "#000",
    strokeWidth: 2
});

var l5 = s.line(100, 100, 100, 400);
l5.attr({
    stroke: "#000",
    strokeWidth: 2
});

var l6 = s.line(200, 100, 200, 400);
l6.attr({
    stroke: "#000",
    strokeWidth: 2
});

var l7 = s.line(300, 100, 300, 400);
l7.attr({
    stroke: "#000",
    strokeWidth: 2
});

var l8 = s.line(400, 100, 400, 400);
l8.attr({
    stroke: "#000",
    strokeWidth: 2
});


//Draw (hidden) circles:

var c1 = s.circle(150, 150, 25);
c1.attr({
    opacity: 0
});

var c2 = s.circle(250, 150, 25);
c2.attr({
    opacity: 0
});
var c3 = s.circle(350, 150, 25);
c3.attr({
    opacity: 0
});
var c4 = s.circle(150, 250, 25);
c4.attr({
    opacity: 0
});
var c5 = s.circle(250, 250, 25);
c5.attr({
    opacity: 0
});
var c6 = s.circle(350, 250, 25);
c6.attr({
    opacity: 0
});
var c7 = s.circle(150, 350, 25);
c7.attr({
    opacity: 0
});
var c8 = s.circle(250, 350, 25);
c8.attr({
    opacity: 0
});
var c9 = s.circle(350, 350, 25);
c9.attr({
    opacity: 0
});





    //random selection of dots to show:
 
	var dots = [c1, c2, c3, c4, c5, c6, c7, c8, c9];
	var dotsSelected = jsPsych.randomization.sample(dots, n_circles, false);
	var configuration = [];
	for (i in dots) {
		var d = dots[i]
		if( $.inArray(d, dotsSelected) != -1){
			configuration.push(1);
		} else {
			configuration.push(0);
		}
	};

	
 // actually draw the dots
   
    for (var i = 0; i < dotsSelected.length; i++) {
      var x = dotsSelected[i];
	  x.attr({
		  opacity: 1
	  });
    };


    var svg = $("#jspsych-dotWMTask-container").html();

    $('#jspsych-dotWMTask-container').remove();

    return svg;
  };

  return plugin;
})();
