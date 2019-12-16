window.onload=function() {

	var chart1 = new CanvasJS.Chart("languagesGoal", 
		{title:{text: "Goals Level - languages"},
		data: [{
			type: "column",
				dataPoints: [
					{ label: "HTML/CSS", y: 90 },
					{ label: "PHP", y: 75 },
					{ label: "JavaScript", y: 75 },
					{ label: "Java", y: 75 },
					{ label: "JSP", y: 75 },
					{ label: "Python", y: 50 }
				]
			}]
		});

	var chart2 = new CanvasJS.Chart("toolsGoal", 
		{title:{text: "Goals Level - Tools"},
  		 data: [{
  		 	type: "column",
				dataPoints: [
					{ label: "Sublime", y: 80 },
					{ label: "Vscode", y: 75 },
					{ label: "Eclipse", y: 75 },
					{ label: "JSfiddle", y: 50 },
					{ label: "git", y: 50 },
					{ label: "Selenium", y: 40 }
				]
			}]
		});
                            
	chart1.render();
	chart2.render();
}
