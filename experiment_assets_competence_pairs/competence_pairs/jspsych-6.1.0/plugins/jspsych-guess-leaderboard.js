jsPsych.plugins["Guess_leaderboard"] = (function() {

	var plugin = {};

	plugin.info = {
		name: 'vertical-scale',
		parameters: {
				size: {
				type: jsPsych.plugins.parameterType.FLOAT,
				pretty_name: "size",
				default: 20,
			}
		}
	}



	plugin.trial = function(display_element, trial) {



    window.position=-1;
    window.mouseMoved=false;
    window.trial_data = {}
    window.trial_data.position_RT = Infinity

		display_element.innerHTML = '';

		//open a p5 sketch
		let sketch = function(p) {

		function ordinal_suffix_of(i) {
				let j = i % 10,
						k = i % 100;
				if (j === 1 && k !== 11) {
						return i + "st";
				}
				if (j === 2 && k !== 12) {
						return i + "nd";
				}
				if (j === 3 && k !== 13) {
						return i + "rd";
				}
				return i + "th";
		}

		var rate_position = (position) => {

			p.background(255); //gray

			if (p.millis()<window.trial_data.position_RT+window.start_time) {
				window.dial_position = p.max(p.min(p.mouseY,window.innerHeight*3/4),window.innerHeight/4);
				window.temp_position=1+p.round(99*((window.dial_position-window.innerHeight/4)/(window.innerHeight/2)));
			}

			// draw scale
			p.push()
			p.stroke(0);
			p.strokeWeight(4);
			p.line(window.innerWidth/2, window.innerHeight/4, window.innerWidth/2, window.innerHeight*3/4)
			p.pop()

			// add labels

			p.push()
			p.fill(0)
			p.textAlign(p.LEFT)
			p.textSize(30)
			p.textFont('Quicksand');
			p.text('1st (BEST player)',window.innerWidth/2+40,window.innerHeight/4)
			p.text('100th (WORST player)',window.innerWidth/2+40,window.innerHeight*3/4)
			p.pop()

			if (window.mouseMoved) {
				// draw dial
				p.push()
				p.stroke(0);
				p.strokeWeight(0.5);
				p.fill(255)
				p.rectMode(p.CENTER,p.CENTER)
				p.rect(window.innerWidth/2,window.dial_position,60,40)
				p.pop()

				p.push()
				p.fill(0)
				p.textSize(18)
				p.textAlign(p.CENTER,p.CENTER)
				if (p.millis()>window.trial_data.position_RT+window.start_time) {
					p.textStyle(p.BOLD)
				}
				p.textFont('Quicksand');
				p.text(ordinal_suffix_of(window.temp_position),window.innerWidth/2,window.dial_position)
				p.pop()

			}

		}

		const du = p.min([window.innerWidth, window.innerHeight, 600])*7/10 //drawing unit

		//sketch setup
		p.setup = function() {

			p.createCanvas(window.innerWidth, window.innerHeight);
			p.fill(255); //white
			window.start_time=p.millis();
			p.noCursor()
			console.log(window.trial_data.position_RT)

		}

		//organize everything in one sequence
		p.draw = function() {

			if ( p.millis()<window.trial_data.position_RT+window.start_time+750) {
				window.trial_part = 'rating position';
				rate_position(window.position)
			} else {
				p.remove()
				// end trial
				this.jsPsych.finishTrial(window.trial_data);
			}

		}

		p.mousePressed = () => {
			console.log('a')
			if (window.trial_part=='rating position') {
				window.position=window.temp_position;
				window.trial_data.position=window.position
				window.trial_data.position_RT = p.millis()-window.start_time;
			}
		}

		p.mouseMoved = () => {
			if (window.trial_part=='rating position') {
				window.mouseMoved=true;
			}
		}


		};

		// start sketch!
		let myp5 = new p5(sketch);

}


//Return the plugin object which contains the trial
return plugin;
})();
