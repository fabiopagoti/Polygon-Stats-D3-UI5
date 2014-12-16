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
					new sap.m.Image("img_pokemon", {
						src: oController.getSrcImage(),
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
									text: oController.getTextName(),
								}),

							]
							}),

							new sap.ui.commons.layout.HorizontalLayout({
							content: [
									new sap.m.Label({
									text: "Kind"
								}),

								new sap.m.Text("txt_kind", {
									text: oController.getTextKind(),
								}),

							]
							}),

							new sap.m.ComboBox("com_pokemon", {
								selectedItemId: "item_default",
								items: [
									new sap.ui.core.ListItem("item_default", {
										text: "Bulbasaur",
										key: "1"
									}),

									new sap.ui.core.ListItem({
										text: "Squirtle",
										key: "2"
									}),

									new sap.ui.core.ListItem({
										text: "Charmander",
										key: "3"
									}),

									new sap.ui.core.ListItem({
										text: "Pikachu",
										key: "4"
									}),
								],

								change: jQuery.proxy(oController.onChangeComboBox, oController),


							}),

							new sap.ui.commons.layout.HorizontalLayout("graph"),

						],
					}),

					// new my.Square({text:"Hello", size: "100px"}),
					
					// new polygonStats({text:"Hello", size: "100px"}),
					
				]
		});

		return page;
	},
		
});
