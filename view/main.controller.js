sap.ui.controller("view.main", {

	/**
	 * Called when a controller is instantiated and its View controls (if
	 * available) are already created. Can be used to modify the View before it
	 * is displayed, to bind event handlers and do other one-time
	 * initialization.
	 * 
	 * @memberOf view.main
	 */
	onInit : function() {		
		
	},

	/**
	 * Similar to onAfterRendering, but this hook is invoked before the
	 * controller's View is re-rendered (NOT before the first rendering!
	 * onInit() is used for that one!).
	 * 
	 * @memberOf view.main
	 */
	// onBeforeRendering: function() {
	//
	// },
	/**
	 * Called when the View has been rendered (so its HTML is part of the
	 * document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * 
	 * @memberOf view.main
	 */
	// onAfterRendering: function() {
	//
	// },
	/**
	 * Called when the Controller is destroyed. Use this one to free resources
	 * and finalize activities.
	 * 
	 * @memberOf view.main
	 */
	// onExit: function() {
	//
	// }


	onChangeComboBox: function(oControlEvent){
		var key_selected = oControlEvent.getSource().getSelectedItem().getKey();

		var new_name = sap.ui.getCore().getModel().getData()[key_selected - 1].name;
		sap.ui.getCore().byId("txt_name").setText(new_name);

		var new_kind = sap.ui.getCore().getModel().getData()[key_selected - 1].kind;
		sap.ui.getCore().byId("txt_kind").setText(new_kind);

		var new_image = sap.ui.getCore().getModel().getData()[key_selected - 1].image;
		sap.ui.getCore().byId("img_pokemon").setSrc(new_image);

		this.drawStatus();
	},
	
	getTextName: function(){
		// return "{/0/name}";
	},
		
	getTextKind: function(){
		// return "{/0/kind}";
	},

	getSrcImage:function(){
		// return "{/0/image}";
	},

	drawStatus: function(){

		var svgContainer = d3.select("#graph").append("svg")
                                     .attr("width", 300)
                                     .attr("height", 300);
 
		 //Draw the line
		 var line = svgContainer.append("line")
		                          .attr("x1", 150)
		                          .attr("y1", 50)
		                         .attr("x2", 150)
		                         .attr("y2", 300)
		                         .attr("stroke-width", 3)
		                         .attr("stroke", "black");

		 var line_2 = svgContainer.append("line")
		                          .attr("x1", 25)
		                          .attr("y1", 175)
		                         .attr("x2", 275)
		                         .attr("y2", 175)
		                         .attr("stroke-width", 3)
		                         .attr("stroke", "black");
		                         
	 	var polygon_1 = svgContainer.append("polygon")
                          .attr("points", "150,70 200,175 150,290 30,175")
             			  .attr("fill", "blue")
                          .attr("opacity", "0.5");

		},
			
});