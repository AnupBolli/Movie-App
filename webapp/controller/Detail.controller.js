sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent"
], function (Controller,UIComponent) {
	"use strict";

	return Controller.extend("MyApp.movies.controller.Detail", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf MyApp.movies.view.Detail
		 */
		onInit: function () {
			UIComponent.getRouterFor(this).getRoute("Detail").attachPatternMatched(this._onDetailMatched,this);
		},
		
		_onDetailMatched: function(oEvent){
			var oView = this.getView(),
			sMovieIndex = oEvent.getParameter("arguments")["movieId"],
			sAppointmentIndex = oEvent.getParameter("arguments")["appointmentId"];
			
			oView.bindElement({
				path: "/movies/"+sMovieIndex+"/appointments/"+sAppointmentIndex,
				model: "movies",
				events: {
					change: this._onBindingChange.bind(this)
				}
			});
		},
		
		_onBindingChange: function(){
			var oView = this.getView(),
			oElementBinding = oView.getElementBinding("movies"),
			sPath = oElementBinding.getPath();
			
			// if the path to the data does not exist we navigate to the not found page
			if(!oView.getModel("movies").getObject(sPath)){
				UIComponent.getRouterFor(this).getTargets().display("objectNotFound");                         
			}
		},
		
		onNavBack: function(){
			UIComponent.getRouterFor(this).navTo("Home");
		}
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf MyApp.movies.view.Detail
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf MyApp.movies.view.Detail
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf MyApp.movies.view.Detail
		 */
		//	onExit: function() {
		//
		//	}

	});

});