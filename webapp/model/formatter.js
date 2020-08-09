sap.ui.define([],function(){
	"use strcit";
	return {
		formatDate: function(sValue){
			if(!sValue){
				return null;
			}
			return new Date(sValue);
		}	
	};
});