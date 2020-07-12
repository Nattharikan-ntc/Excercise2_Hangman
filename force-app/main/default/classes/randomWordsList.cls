public with sharing class randomWordsList {
    @AuraEnabled
    public static String getRandomWordsList(){
        List<String> availableValues = new List<String>{'CAT', 'DOG', 'MOUSE', 'HORSE', 'COW', 
                                                        'PIG', 'MONKEY', 'RAT', 'BIRD', 'ELEPHANT',
                                                        'CAMEL', 'GIRAFFE', 'CHICKEN', 'LEOPARD', 'CHEETAH',
                                                        'ZEBRA', 'BEAR', 'GOAT', 'LION', 'HIPPOTAMUS'};
        Integer listSize = availableValues.size() - 1;
        Integer randomNumber = Integer.valueof((Math.random() * listSize));
        String randomString= availableValues[randomNumber];
        System.debug('randomString is '+ randomString);

        return randomString;
    }
    
    // public randomWordsList() {
    //     List<String> availableValues = new List<String>{'cat', 'dog', 'mouse', 'horse', 'cow', 
    //                                                     'pig', 'monkey', 'rat', 'bird', 'elephant',
    //                                                     'camel', 'giraffe', 'chicken', 'leopard', 'cheetah',
    //                                                     'zebra', 'bear', 'goat', 'lion', 'hippopotamus'};
    //     Integer listSize = availableValues.size() - 1;
    //     Integer randomNumber = Integer.valueof((Math.random() * listSize));
    //     String randomString= availableValues[randomNumber];
    //     System.debug('randomString is'+randomString);
    // }
    
}