let Process0 = 0;
let Process1 = 1;

var $output = $("#textArea")
var interest = [false,false];

function entry_state(process){
  
    let other;
    other = 1 -process;
    interest[process] = true;
    turn = process;

    if(turn ==1){
        $output.append('Process no.' + process + ' has started.\n');
		$i1.text(interest[process]);
		document.getElementById("textArea").scrollTop = document.getElementById(
			"textArea"
		).scrollHeight;
		await sleep(2000);
    }
    else{
        $output.append('Process no.' + process + ' has started.\n');
		$i0.text(interest[process]);
		document.getElementById("textArea").scrollTop = document.getElementById(
			"textArea"
		).scrollHeight;
		await sleep(2000);
    }
    if(interest[other] == true && turn == process){
        $vari.text('P' + process);
		$output.append('Process no.' + other + ' is already in the critical section.\n');
		document.getElementById("textArea").scrollTop = document.getElementById(
			"textArea"
		).scrollHeight;
		await sleep(3000);
		return;
    }


}

function critical_state(process){
    if (process == 0) {
		$vari.text('P' + process);
		// P0Move(200)
		$output.append('Process no.' + process + ' has entered the critical section.\n');
		document.getElementById("textArea").scrollTop = document.getElementById(
			"textArea"
		).scrollHeight;
		await sleep(2000);
	}
	else {
		// P1Move(300)
		$vari.text('P' + process);
		$output.append('Process no.' + process + ' has entered the critical section.\n');
		document.getElementById("textArea").scrollTop = document.getElementById(
			"textArea"
		).scrollHeight;
		await sleep(2000);
	}

	if (process == 0) {
		// P1Move(100);
		EntrySection(1 - process);
	}
	$output.append('Process no.' + process + ' has exited the critical section.\n');
	document.getElementById("textArea").scrollTop = document.getElementById(
		"textArea"
	).scrollHeight;
	await sleep(1000);
	if (process == 0) {
		// P1Move(100);
		CriticalSection(1 - process);
	}
	exit_state(process);
}

function exit_state(process){
    if (process == 0) {
		$vari.text('P' + process);
		$output.append('Process no.' + process + ' has exited.\n');
		document.getElementById("textArea").scrollTop = document.getElementById(
			"textArea"
		).scrollHeight;
		await sleep(1000);
		// P0Move(500)
	}
	else {
		$vari.text('P' + process);
		$output.append('Process no.' + process + ' has exited.\n');
		document.getElementById("textArea").scrollTop = document.getElementById(
			"textArea"
		).scrollHeight;
		await sleep(1000);
		// P1Move(500)
	}

	interest[process] = false;
}

