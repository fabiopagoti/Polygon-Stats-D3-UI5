sap.ui.core.Control.extend("my.Square", { // call the new Control type "my.Square" and let it inherit from sap.ui.core.Control
	
	// the control API:
	metadata : {
		properties : {           // setter and getter are created behind the scenes, incl. data binding and type validation
			"text" : "string",   // in simple cases, just define the type
			"size" : {type: "sap.ui.core.CSSSize", defaultValue: "200px"} // you can also give a default value and more
		}
	},
	
	// the part creating the HTML:
	renderer : function(oRm, oControl) { // static function, so use the given "oControl" instance instead of "this" in the renderer function
		oRm.write("<div"); 
		oRm.writeControlData(oControl);  // writes the Control ID and enables event handling - important!
		oRm.addStyle("width", oControl.getSize());  // write the Control property size; the Control has validated it to be a CSS size
		oRm.addStyle("height", oControl.getSize());
		oRm.writeStyles();
		oRm.addClass("mySquare");        // add a CSS class for styles common to all control instances
		oRm.writeClasses();              // this call writes the above class plus enables support for Square.addStyleClass(...)
		oRm.write(">");
		oRm.writeEscaped(oControl.getText()); // write another Control property, with XSS protection
		oRm.write("</div>");
	},
	
	// an event handler:
	onclick : function(evt) {   // is called when the Control's area is clicked - no event registration required
		alert("Control clicked! Text of the Control is:\n" + this.getText());
	}
});
