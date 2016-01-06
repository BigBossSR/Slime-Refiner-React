var upgradeList = [

	{
		id: 01,
		name: "Conveyor Belt",
		cost: 50,
		benefit: function() {
			setInterval(function(){
				//run refineSlimes() somehow
			}, 3000)
		},
		description: "Handily conveys some of your jellies straight to the refiner.",
		max: 2
	},
	{
		id: 02,
		name: "Tempered Steel Grinder",
		cost: 100,
		benefit: function() {
			factoryStats.refine_batch = 3;
			console.log("grinder clicked")
		},
		description: "Allows you to refine multiple jellies with each click.",
		max: 1,
	},
	{
		id: 03,
		name: "Hydraulic Press",
		cost: 150,
		benefit: function() {
			factoryStats.resource_multiplier = 3.5
			console.log("press clicked")
		},
		description: "Squeezes extra resources out of each batch of jellies.",
		max: 1,
	},
	{
		id: 05,
		name: "Queen Jelly",
		cost: 150,
		owned: 0,
		benefit: function() {
			factoryStats.queens+=1
		},
		description: "This gives our factory a new queen, producing an extra jelly every second.",
		max: 3		
	},




	{
		id: 5,
		name: "Stacked Cages",
		cost: 200,
		benefit: function(){
			//increase jelly max on state, somehow
		},
		description: "These cages allow you to cram more jellies into the same amount of floorspace.",
		max: 2,
	}




]