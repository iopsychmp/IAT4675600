define(['pipAPI','https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/iat10.js'], function(APIConstructor, iatExtension){
    let API = new APIConstructor();
    let global = API.getGlobal();

    return iatExtension({
        category1 : {
            name : global.mascLabels, //Will appear in the data.
            title : {
                media : {word : global.mascLabels}, //Name of the category presented in the task.
                css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
                height : 4 //Used to position the "Or" in the combined block.
            }, 
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {image: 'mm1_nc.jpg'},
                {image: 'mm2_nc.jpg'},
                {image: 'mm3_nc.jpg'},
                {image: 'mm4_nc.jpg'}  
            ],
            //Stimulus css (style)
            stimulusCss : {color:'#31940F','font-size':'2.3em'}
        },    
        category2 : {
            name : global.femmeLabels, //Will appear in the data.
            title : {
                media : {word : global.femmeLabels}, //Name of the category presented in the task.
                css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
                height : 4 //Used to position the "Or" in the combined block.
            }, 
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {image: 'mf1_nc.jpg'},
                {image: 'mf2_nc.jpg'},
                {image: 'mf3_nc.jpg'},
                {image: 'mf4_nc.jpg'}
            ],
            //Stimulus css (style)
            stimulusCss : {color:'#31940F','font-size':'2.3em'}
        },
        attribute1 : {
            name : 'Good Leader Qualities',
            title : {
                media : {word : 'Good Leader Qualities'},
                css : {color:'#0000FF','font-size':'1.8em'},
                height : 4 //Used to position the "Or" in the combined block.
            },
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {word: global.glWords[0]},
                {word: global.glWords[1]},
                {word: global.glWords[2]},
                {word: global.glWords[3]}
                
            ],
            //Stimulus css
            stimulusCss : {color:'#0000FF','font-size':'2.3em'}
        },
        attribute2 : {
            name : 'Bad Leader Qualities',
            title : {
                media : {word : 'Bad Leader Qualities'},
                css : {color:'#0000FF','font-size':'1.8em'},
                height : 4 //Used to position the "Or" in the combined block.
            },
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {word: global.blWords[0]},
                {word: global.blWords[1]},
                {word: global.blWords[2]},
                {word: global.blWords[3]}
                
            ],
            //Stimulus css
            stimulusCss : {color:'#0000FF','font-size':'2.3em'}
        },
        base_url : {//Where are your images at?
            image : global.baseURL
        },
        isTouch : global.$isTouch,
        //The default feedback messages for each cutoff -
			//attribute1, and attribute2 will be replaced with the name of attribute1 and attribute2.
			//categoryA is the name of the category that is found to be associated with attribute1,
			//and categoryB is the name of the category that is found to be associated with attribute2.
        fb_strong_Att1WithCatA_Att2WithCatB : "Your responses suggested a strong automatic association for 'categoryA' with 'attribute1' and 'categoryB' with 'attribute2'.",   
        fb_moderate_Att1WithCatA_Att2WithCatB : "Your responses suggested a moderate automatic association for 'categoryA' with 'attribute1' and 'categoryB' with 'attribute2'.'",
        fb_slight_Att1WithCatA_Att2WithCatB : "Your responses suggested a slight automatic association for 'categoryA' with 'attribute1' and 'categoryB' with 'attribute2'.'",
        fb_equal_CatAvsCatB : "Your responses suggested no association between gender presentation and sexuality.",
        manyErrors: 'There were too many errors made to determine a result.',
        tooFast: 'There were too many errors made to determine a result.',
        notEnough: 'There were too many errors made to determine a result.'
    });
});

