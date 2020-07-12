({ // get random word
    doInit :  function(component, event, helper){
        var wordRandomList = ['CAT', 'DOG', 'MOUSE', 'HORSE', 'COW', 
                          'PIG', 'MONKEY', 'RAT', 'BIRD', 'ELEPHANT',
                          'CAMEL', 'GIRAFFE', 'CHICKEN', 'LEOPARD', 'CHEETAH',
                          'ZEBRA', 'BEAR', 'GOAT', 'LION', 'HIPPOTAMUS'
                         ];

        var rand = Math.floor(Math.random() * wordRandomList.length);
        var wordRandom = wordRandomList[rand];
        console.log(wordRandom);    
        var wordHint = wordRandom;

        for (var i = 0; i < wordHint.length; i++) {
            console.log('111');
            var res = wordHint.charAt(i);
            console.log(res);
            wordHint = wordHint.replace(res, '_');
          }
        
        component.set("v.wordRandom", wordRandom);
        component.set("v.wordHint", wordHint);
        console.log(wordHint);
        component.set("v.countWrongAnswer",0);
        component.set("v.disabledButton",false);
        // var action = component.get("c.getRandomWordsList");

        // action.setCallback(this,function(response){
        //     var state = response.getState(); 
        //     if (component.isValid() && state === "SUCCESS"){
        //         console.log(JSON.stringify(response.getReturnValue()));
        //         component.set("v.wordRandom", response.getReturnValue());  // Adding values in Aura attribute variable.   
        //     }               
        // });

        // $A.enqueueAction(action);
        
        // var wordRandom = response.getReturnValue();
        // var wordHint = wordRandom;
        // for (var i = 0; i < wordHint.length; i++) {
        //     var res = wordHint.charAt(i);
        //     console.log(res);
            // wordHint = wordHint.replace(res, '_');
        //   }
        // component.set("v.wordHint", wordHint);

    },
    
    // get char that user click
    handleUpdateAnswer : function(component, event, helper){
        var updatedChar = event.getParam("clicked"); //  get valve event from .evt
        var wordRandom = component.get("v.wordRandom");
        console.log('in handleUpdateAnswer '+ wordRandom);    
        var wordHint = component.get("v.wordHint"); // attribute this component
        console.log('in handleUpdateAnswer '+ wordHint); 
           
        var countWrongCurrent = component.get("v.countWrongAnswer");
        //console.log(countWrongCurrent);
        var countWrong = 0;
        var countCorrect = 0;

        for (var i = 0; i < wordRandom.length; i++) {
            var res = wordRandom.charAt(i);
            if(updatedChar == res){
                wordHint = wordHint.substr(0,i) + updatedChar + wordHint.substr(i+1);
                countCorrect=1;
            }
        }

        if(countCorrect == 0){
            countWrongCurrent = countWrongCurrent+1;
        }

        if(countWrongCurrent > 6){
            // countWrongCurrent = 6;
            console.log("You Lose");
            alert("You Lose!"); 
        }
       
        if(wordHint == wordRandom){
            console.log("You Win");
            alert("You Win"); 
        }
          
        console.log(wordHint); 
        console.log(wordRandom); 
        //countWrongCurrent = countWrong;
        console.log(countWrongCurrent); 
        console.log('in handleUpdateAnswer Update!!'+ wordHint);   
        component.set("v.wordHint", wordHint);       
        component.set("v.countWrongAnswer", countWrongCurrent);
        // component.set("v.disabledButton", true);

    },

    handleNewGame : function(component, event, helper){
        $A.get('e.force:refreshView').fire();
    }

})