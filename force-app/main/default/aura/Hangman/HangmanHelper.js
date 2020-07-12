({
    getClickEvent : function(component,event) {
        var action = component.get("c.getRandomWordsList");

        action.setCallback(this,function(response){
            var state = response.getState(); 
            if (component.isValid() && state === "SUCCESS"){
                console.log(JSON.stringify(response.getReturnValue()));
                component.set("v.word", response.getReturnValue());  // Adding values in Aura attribute variable.   
            }               
        });

        $A.enqueueAction(action);
        // var action=component.get("c.getBoatType");
        // action.setCallback(this,function(response) {
        //     var state= response.getState();
        //     if(state==='SUCCESS'){
        //         component.set("v.BoatTypes",response.getReturnValue());
        //     }
        //     else {
        //         console.log("Failed with state: " + state);
        //     }
        // });
        // $A.enqueueAction(action);  
    },
})