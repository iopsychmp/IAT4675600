define(['pipAPI','https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/iat10.js'], function(APIConstructor, iatExtension){
    let API = new APIConstructor();
    let global = API.getGlobal();

    // Add Logger configuration
    API.addSettings('logger', {
        // gather logs in array
        onRow: function(logName, log, settings, ctx){
            if (!ctx.logs) ctx.logs = [];
            ctx.logs.push(log);
        },
        // onEnd trigger save (by returning a value)
        onEnd: function(name, settings, ctx){
            return ctx.logs;
        },
        // Transform logs into a string
        // we save as CSV because qualtrics limits to 20K characters and this is more efficient.
        serialize: function (name, logs) {
            var headers = ['group', 'latency', 'block', 'stimulus', 'correct'];
            var content = logs.map(function (log) { 
                return [log.data.alias, log.latency, log.data.block, log.data.stimIndex, log.data.correct]; 
            });
            content.unshift(headers);
            return toCsv(content);

            function toCsv(matrice) { return matrice.map(buildRow).join('\n'); }
            function buildRow(arr) { return arr.map(normalize).join(','); }
            // wrap in double quotes and escape inner double quotes
            function normalize(val) {
                var quotableRgx = /(\n|,|")/;
                if (quotableRgx.test(val)) return '"' + val.replace(/"/g, '""') + '"';
                return val;
            }
        },
        // Set logs into an input (i.e. put them wherever you want)
        send: function(name, serialized){
            window.minnoJS.logger(serialized);
        }
    });
    
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

