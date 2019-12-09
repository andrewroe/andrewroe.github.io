window.onload=function() {
	var chart1 = new CanvasJS.Chart("languagesContainer", 
		{title:{text: "Skills Rating - languages"},
		data: [{
		type: "column",
			dataPoints: [
				{ label: "C/C++", y: 90 },
				{ label: "BAL", y: 80 },
				{ label: "bash shell", y: 55 },
				{ label: "Perl", y: 50 },
				{ label: "bourne shell", y: 45 },
				{ label: "HTML/CSS", y: 25 },
				{ label: "Python", y: 20 },
				{ label: "PHP", y: 15 },
				{ label: "JavaScript", y: 7 },
				{ label: "Ruby", y: 5 }
			]
		}]
	});


	var chart2 = new CanvasJS.Chart("protocalsContainer", 
		{title:{text: "Skills Rating - Protocals"},
		data: [{
		type: "column",
			dataPoints: [
				{ label: "SCSI", y: 50 },
				{ label: "TCP/IP", y: 35 },
				{ label: "Escon/Block Mux", y: 25 }
			]
		}]
	});


	var chart3 = new CanvasJS.Chart("platformsContainer", 
		{title:{text: "Skills Rating - Platforms"},
		data: [{
		type: "column",
			dataPoints: [
				{ label: "Linux", y: 75 },
				{ label: "MacOS", y: 60 },
				{ label: "Windows", y: 40 },
				{ label: "Solaris", y: 15 }
			]
		}]
	});

	var chart4 = new CanvasJS.Chart("toolsContainer", 
		{title:{text: "Skills Rating - Tools"},
		data: [{
		type: "column",
			dataPoints: [
				{ label: "vi/vim", y: 90 },
				{ label: "SVN", y: 70 },
				{ label: "CVS", y: 60 },
				{ label: "Word", y: 40 },
				{ label: "gdb", y: 35 },
				{ label: "Excel", y: 30 },
				{ label: "Wiki", y: 25 },
				{ label: "Jenkins", y: 20 },
				{ label: "Git", y: 15 },
				{ label: "Vscode", y: 10 },
				{ label: "Puppet", y: 10 }
			]
		}]
	});
                            
	chart1.render();
	chart2.render();
	chart3.render();
	chart4.render();
}

