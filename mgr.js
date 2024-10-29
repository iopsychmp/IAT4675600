define(['managerAPI',
    'https://cdn.jsdelivr.net/gh/minnojs/minno-datapipe@1.*/datapipe.min.js'], function(Manager){


//You can use the commented-out code to get parameters from the URL.
// Set to female trial if url ends in "/?group=1" or male trial if "/?group=0"
//const queryString = window.location.search;
//const urlParams = new URLSearchParams(queryString);
//const group = urlParams.get('group');  

var API    = new Manager();
//const subid = Date.now().toString(16)+Math.floor(Math.random()*10000).toString(16);
init_data_pipe(API, 'y1vWLQb3pdKY',  {file_type:'csv'});	

API.setName('mgr');
API.addSettings('skip',true);

//Randomly select which of two sets of category labels to use.
let sexualitySet = API.shuffle(['a','b'])[0];
let mascLabels = [];
let femmeLabels = [];
let group = 3;

if (sexualitySet == 'a') {
    mascLabels.push('Masculine Presenting');
    femmeLabels.push('Feminine Presenting');
} else {
    mascLabels.push('Masculine');
    femmeLabels.push('Feminine');
}

API.addGlobal({
    sexualityiat:{},
    //YBYB: change when copying back to the correct folder
    baseURL: 'https://raw.githubusercontent.com/iopsychmp/IAT4675600/6d68bdcb17f4455e44513a7babcea8e8700e35a4/images/',
    sexualitySet:sexualitySet,
    mascLabels:mascLabels,
    femmeLabels:femmeLabels,
    //Select randomly what attribute words to see. 
    //Based on Axt, Feng, & Bar-Anan (2021).
    glWords : API.shuffle( [
        'Approachable','Intelligent', 'Caring', 'Ambitious', 'Supportive', 'Strategic'
    ]), 
    blWords : API.shuffle([
        'Reserved', 'Indecisive', 'Critical', 'Disorganized', 'Arrogant', 'Inarticulate'
    ]), 
    

});

API.addTasksSet({
    instructions: [{
        type: 'message',
        buttonText: 'Continue'
    }],

    intro: [{
        inherit: 'instructions',
        name: 'intro',
        templateUrl: 'intro.jst',
        title: 'Intro',
        header: 'Welcome'
    }],

    prestudy: [{
        inherit: 'instructions',
        name: 'consent',
        templateUrl: 'prestudy.jst',
        title: 'consent',
        header: 'Consent'
    }],

    prolificid: [{
        type: 'quest',
        name: 'prolificid',
        scriptUrl: 'prolificid.js'
    }],

    feedback: [{
        inherit: 'instructions',
        name: 'intro',
        templateUrl: 'feedback.jst',
        title: 'Feedback',
        header: 'Welcome'
    }],

    sexualityiat_instructions: [{
        inherit: 'instructions',
        name: 'sexualityiat_instructions',
        templateUrl: 'sexualityiat_instructions.jst',
        title: 'IAT Instructions',
        header: 'Implicit Association Test'
    }],

    explicits: [{
        type: 'quest',
        name: 'explicits',
        scriptUrl: 'explicits.js'
    }],

    sexualityiat: [{
        type: 'time',
        name: 'sexualityiat',
        scriptUrl: 'sexualityiat.js'
    }],

    lastpage: [{
        type: 'message',
        name: 'lastpage',
        templateUrl: 'lastpage.showresults.jst',
        title: 'End',
        //Uncomment the following if you want to end the study here.
        //last:true, 
        header: 'You have completed the study'
    }], 

    decline: [{
        type: 'message',
        name: 'declined to participate',
        templateUrl: 'decline.jst',
        title: 'End',
        //Uncomment the following if you want to end the study here.
        //last:true, 
        header: 'You have completed the study'
    }], 
    
    //Use if you want to redirect the participants elsewhere at the end of the study
    redirect:
    [{ 
        //Replace with any URL you need to put at the end of your study, or just remove this task from the sequence below
        type:'redirect', name:'redirecting', url: 'https://uwaterloo.ca1.qualtrics.com/jfe/form/SV_a49eT7D0lmJfJsy?respondentID=${e://Field/ResponseID}&redirect=2' 
    }],
    
    //This task waits until the data are sent to the server.
    uploading: uploading_task({
        header: 'just a moment', 
        body: 'Please wait, sending data... ',
        onComplete: function() {
            // This will trigger after upload is complete
            window.minnoJS.onEnd();
        }
    })
});

API.addSequence([
    { type: 'isTouch' }, //Use Minno's internal touch detection mechanism. 
    
    { type: 'post', path: ['$isTouch', 'sexualitySet', 'mascLabels', 'femmeLabels', 'trialLabel'] },

    // apply touch only styles
    {
        mixer:'branch',
        conditions: {compare:'global.$isTouch', to: true},
        data: [
            {
                type: 'injectStyle',
                css: [
                    '* {color:black}',
                    '[piq-page] {background-color: #fff; border: 1px solid transparent; border-radius: 4px; box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05); margin-bottom: 20px; border-color: #bce8f1;}',
                    '[piq-page] > ol {margin: 15px;}',
                    '[piq-page] > .btn-group {margin: 0px 15px 15px 15px;}',
                    '.container {padding:5px;}',
                    '[pi-quest]::before, [pi-quest]::after {content: " ";display: table;}',
                    '[pi-quest]::after {clear: both;}',
                    '[pi-quest] h3 { border-bottom: 1px solid transparent; border-top-left-radius: 3px; border-top-right-radius: 3px; padding: 10px 15px; color: inherit; font-size: 2em; margin-bottom: 20px; margin-top: 0;background-color: #d9edf7;border-color: #bce8f1;color: #31708f;}',
                    '[pi-quest] .form-group > label {font-size:1.2em; font-weight:normal;}',

                    '[pi-quest] .btn-toolbar {margin:15px;float:none !important; text-align:center;position:relative;}',
                    '[pi-quest] [ng-click="decline($event)"] {position:absolute;right:0;bottom:0}',
                    '[pi-quest] [ng-click="submit()"] {width:30%;line-height: 1.3333333;border-radius: 6px;}',
                    // larger screens
                    '@media (min-width: 480px) {',
                    ' [pi-quest] [ng-click="submit()"] {width:30%;padding: 10px 16px;font-size: 1.6em;}',
                    '}',
                    // phones and smaller screens
                    '@media (max-width: 480px) {',
                    ' [pi-quest] [ng-click="submit()"] {padding: 8px 13px;font-size: 1.2em;}',
                    ' [pi-quest] [ng-click="decline($event)"] {font-size: 0.9em;padding:3px 6px;}',
                    '}'
                ]
            }
        ]
    },
    
    //{inherit: 'decline'},
    //{inherit: 'prestudy'},
    //{inherit: 'prolificid'},
    {inherit: 'intro'},
    {inherit: 'sexualityiat_instructions'},
    {inherit: 'sexualityiat'},
    //{inherit: 'explicits'},
    {inherit: 'uploading'},
    {inherit: 'lastpage'},
    //{inherit: 'feedback'},
    {inherit: 'redirect'}
]);

return API.script;
});
