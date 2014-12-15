sap.ui.jsview("view.main", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.main
	*/ 
	getControllerName : function() {
		return "view.main";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.main
	*/ 
	createContent : function(oController) {

		var page = new sap.m.Page({
			title: "D3 Stats",
			content: 
				[	
					new sap.m.Image({
						src: "{/0/image}",
						width: "200px",
						height: "200px",
					}),

					new sap.ui.commons.layout.VerticalLayout("lay_stats", {
						content: [
							
							new sap.ui.commons.layout.HorizontalLayout({
							content: [
									new sap.m.Label({
									text: "Name",
									labelFor: "txt_name",
								}),

								new sap.m.Text("txt_name", {
									text: "{/0/name}",
								}),

							]
							}),

							new sap.ui.commons.layout.HorizontalLayout({
							content: [
									new sap.m.Label({
									text: "Kind"
								}),

								new sap.m.Text({
									text: "{/0/kind}",
								}),

							]
							}),


						],
					}),

					new my.Square({text:"Hello", size: "100px"}),
					
					new polygonStats({text:"Hello", size: "100px"}),

					
				]
		});

		return page;
	},
		
});
