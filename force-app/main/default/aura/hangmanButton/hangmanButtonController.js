({
    handleClick : function(component, event, helper){
        //alert("You clicked: " + event.getSource().get("v.label"));
        //var clicked = component.get("v.click"); // attribute this component
        component.set("v.disabledButton", true);
        console.log(JSON.stringify(clickedChar));
        var updateEvent = component.getEvent("selectChar"); // get from attribute register this component
        var clickedChar = event.getSource().get("v.label");
        updateEvent.setParams({ "clicked": clickedChar }); //clicked: evt.
        updateEvent.fire();
    
    }
})