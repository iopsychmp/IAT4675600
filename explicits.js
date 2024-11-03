define(['questAPI'], function(Quest){
    let API = new Quest();
    let isTouch = API.getGlobal().$isTouch;
	
    /**
	* Page prototype
	*/
    API.addPagesSet('basicPage',{
        noSubmit:false, //Change to true if you don't want to show the submit button.
        header: 'Questionnaire',
        autoSubmit: true,
        decline: true,
        submitText: 'Next',
        declineText: isTouch ? 'Skip' : 'Skip', 
        autoFocus:true, 
        progressBar:  'Page <%= pagesMeta.number %> out of 24'
    });
	
    /**
	* Question prototypes
	*/
    API.addQuestionsSet('basicQ',{
        decline: 'true',
        required : true, 		
        errorMsg: {
            required: isTouch 
                ? 'Please select an answer, or click \'Skip\'' 
                : 'Please select an answer, or click \'Skip\''
        },
        autoSubmit:'true',
        numericValues:'true',
        help: '<%= pagesMeta.number < 24 %>',
        helpText: 'Tip: For quick response, click to select your answer, and then click again to submit.'
    });

    API.addQuestionsSet('basicSQ',{
        decline: 'true',
        required : true, 		
        errorMsg: {
            required: isTouch 
                ? 'Please type an answer, or click \'Decline\' if you have no feedback or to skip the question' 
                : 'Please type an answer, or click \'Decline to Answer\' if you have no feedback or to skip the question'
        },
        autoSubmit:'true',
        numericValues:'true',
        type : 'textarea'
    });

    API.addQuestionsSet('basicSelect',{
        inherit :'basicQ',
        type: 'selectOne'
    });

    API.addQuestionsSet('matrixSM',{
        required: true,
        type: 'grid',
        shuffle: true,
        columns: [
            {stem:'Not at all', value:1},
            {stem:'Slightly', value:2},
            {stem:'Somewhat', value:3},
            {stem:'Moderately', value:4},
            {stem:'Extremely', value:5}
        ],
        rows: [
            {stem: 'How confident are they?', name:'confidenceSM'},
            {stem: 'How competent are they?', name:'competenceSM'},
            {stem: 'How independent are they?', name:'independenceSM'},
            {stem:'How competitive are they?', name:'coompetetitiveSM'},
            {stem: 'How intelligent are they?', name:'intelligentSM'},
            {stem: 'How understanding are they?', name:'understandingSM'},
            {stem: 'How friendly are they?', name:'friendlySM'},
            {stem: 'How good natured are they?', name:'goodSM'},
            {stem: 'How sincere are they?', name:'sincereeSM'}
        ]
    });
	
    API.addQuestionsSet('RmatrixSM',{
        required: true,
        type: 'grid',
        shuffle: true,
        autoSubmit: 'true',
        columns: [
            {stem:'Extremely', value:5},
            {stem:'Moderately', value:4},
            {stem:'Somewhat', value:3},
            {stem:'Slightly', value:2},
            {stem:'Not at all', value:1}
        ],
        rows: [
            {stem: 'How confident are they?', name:'RconfidenceSM'},
            {stem: 'How competent are they?', name:'RcompetenceSM'},
            {stem: 'How independent are they?', name:'RindependenceSM'},
            {stem:'How competitive are they?', name:'RcoompetetitiveSM'},
            {stem: 'How intelligent are they?', name:'RintelligentSM'},
            {stem: 'How understanding are they?', name:'RunderstandingSM'},
            {stem: 'How friendly are they?', name:'RfriendlySM'},
            {stem: 'How good natured are they?', name:'RgoodSM'},
            {stem: 'How sincere are they?', name:'RsincereeSM'}
        ]
    });
    
    API.addQuestionsSet('matrixSM',{
        required: true,
        type: 'grid',
        shuffle: true,
        columns: [
            {stem:'Not at all', value:1},
            {stem:'Slightly', value:2},
            {stem:'Somewhat', value:3},
            {stem:'Moderately', value:4},
            {stem:'Extremely', value:5}
        ],
        rows: [
            {stem: 'How confident are they?', name:'confidenceGM'},
            {stem: 'How competent are they?', name:'competenceGM'},
            {stem: 'How independent are they?', name:'independenceGM'},
            {stem:'How competitive are they?', name:'coompetetitiveGM'},
            {stem: 'How intelligent are they?', name:'intelligentGM'},
            {stem: 'How understanding are they?', name:'understandingGM'},
            {stem: 'How friendly are they?', name:'friendlyGM'},
            {stem: 'How good natured are they?', name:'goodGM'},
            {stem: 'How sincere are they?', name:'sincereeGM'}
        ]
    });
	
    API.addQuestionsSet('RmatrixGM',{
        required: true,
        type: 'grid',
        shuffle: true,
        autoSubmit: 'true',
        columns: [
            {stem:'Extremely', value:5},
            {stem:'Moderately', value:4},
            {stem:'Somewhat', value:3},
            {stem:'Slightly', value:2},
            {stem:'Not at all', value:1}
        ],
        rows: [
            {stem: 'How confident are they?', name:'RconfidenceGM'},
            {stem: 'How competent are they?', name:'RcompetenceGM'},
            {stem: 'How independent are they?', name:'RindependenceGM'},
            {stem:'How competitive are they?', name:'RcoompetetitiveGM'},
            {stem: 'How intelligent are they?', name:'RintelligentGM'},
            {stem: 'How understanding are they?', name:'RunderstandingGM'},
            {stem: 'How friendly are they?', name:'RfriendlyGM'},
            {stem: 'How good natured are they?', name:'RgoodGM'},
            {stem: 'How sincere are they?', name:'RsincereeGM'}
        ]
    });
    API.addQuestionsSet('matrixSW',{
        required: true,
        type: 'grid',
        shuffle: true,
        columns: [
            {stem:'Not at all', value:1},
            {stem:'Slightly', value:2},
            {stem:'Somewhat', value:3},
            {stem:'Moderately', value:4},
            {stem:'Extremely', value:5}
        ],
        rows: [
            {stem: 'How confident are they?', name:'confidenceSW'},
            {stem: 'How competent are they?', name:'competenceSW'},
            {stem: 'How independent are they?', name:'independenceSW'},
            {stem:'How competitive are they?', name:'coompetetitiveSW'},
            {stem: 'How intelligent are they?', name:'intelligentSW'},
            {stem: 'How understanding are they?', name:'understandingSW'},
            {stem: 'How friendly are they?', name:'friendlySW'},
            {stem: 'How good natured are they?', name:'goodSW'},
            {stem: 'How sincere are they?', name:'sincereeSW'}
        ]
    });

    API.addQuestionsSet('matrixGW',{
        required: true,
        type: 'grid',
        shuffle: true,
        columns: [
            {stem:'Not at all', value:1},
            {stem:'Slightly', value:2},
            {stem:'Somewhat', value:3},
            {stem:'Moderately', value:4},
            {stem:'Extremely', value:5}
        ],
        rows: [
            {stem: 'How confident are they?', name:'confidenceGW'},
            {stem: 'How competent are they?', name:'competenceGW'},
            {stem: 'How independent are they?', name:'independenceGW'},
            {stem:'How competitive are they?', name:'coompetetitiveGW'},
            {stem: 'How intelligent are they?', name:'intelligentGW'},
            {stem: 'How understanding are they?', name:'understandingGW'},
            {stem: 'How friendly are they?', name:'friendlyGW'},
            {stem: 'How good natured are they?', name:'goodGW'},
            {stem: 'How sincere are they?', name:'sincereeGW'}
        ]
    });
	
    API.addQuestionsSet('RmatrixGW',{
        required: true,
        type: 'grid',
        shuffle: true,
        autoSubmit: 'true',
        columns: [
            {stem:'Extremely', value:5},
            {stem:'Moderately', value:4},
            {stem:'Somewhat', value:3},
            {stem:'Slightly', value:2},
            {stem:'Not at all', value:1}
        ],
        rows: [
            {stem: 'How confident are they?', name:'RconfidenceGW'},
            {stem: 'How competent are they?', name:'RcompetenceGW'},
            {stem: 'How independent are they?', name:'RindependenceGW'},
            {stem:'How competitive are they?', name:'RcoompetetitiveGW'},
            {stem: 'How intelligent are they?', name:'RintelligentGW'},
            {stem: 'How understanding are they?', name:'RunderstandingGW'},
            {stem: 'How friendly are they?', name:'RfriendlyGW'},
            {stem: 'How good natured are they?', name:'RgoodGW'},
            {stem: 'How sincere are they?', name:'RsincereeGW'}
        ]
    });
	
    API.addQuestionsSet('RmatrixSW',{
        required: true,
        type: 'grid',
        shuffle: true,
        autoSubmit: 'true',
        columns: [
            {stem:'Extremely', value:5},
            {stem:'Moderately', value:4},
            {stem:'Somewhat', value:3},
            {stem:'Slightly', value:2},
            {stem:'Not at all', value:1}
        ],
        rows: [
            {stem: 'How confident are they?', name:'RconfidenceSW'},
            {stem: 'How competent are they?', name:'RcompetenceSW'},
            {stem: 'How independent are they?', name:'RindependenceSW'},
            {stem:'How competitive are they?', name:'RcoompetetitiveSW'},
            {stem: 'How intelligent are they?', name:'RintelligentSW'},
            {stem: 'How understanding are they?', name:'RunderstandingSW'},
            {stem: 'How friendly are they?', name:'RfriendlySW'},
            {stem: 'How good natured are they?', name:'RgoodSW'},
            {stem: 'How sincere are they?', name:'RsincereeSW'}
        ]
    });

    API.addQuestionsSet('basicDropdown',{
        inherit :'basicQ',
        type : 'dropdown',
        autoSubmit:false
    });
	
    API.addQuestionsSet('therm',{
        inherit: 'basicSelect',
        answers: [
            {text:'Extremely warm', value:7},
            {text:'Moderately warm', value:6},
            {text:'Somewhat warm', value:5},
            {text:'Neither warm nor cold', value:4},
            {text:'Somewhat cold', value:3},
            {text:'Moderately cold', value:2},
            {text:'Extremely cold', value:1}
        ]
    });
    API.addQuestionsSet('Rtherm',{
        inherit: 'basicSelect',
        answers: [
            {text:'Extremely cold', value:1},
            {text:'Moderately cold', value:2},
            {text:'Somewhat cold', value:3},
            {text:'Neither cold nor warm', value:4},
            {text:'Somewhat warm', value:5},
            {text:'Moderately warm', value:6},
            {text:'Extremely warm', value:7}
        ]
    });
    API.addQuestionsSet('YN',{
        inherit: 'basicSelect',
        randomize: true,
        answers: [
            {text:'Yes', value:1},
            {text:'No', value:2},
            {text:'Unsure', value:3}
        ]
    });
    API.addQuestionsSet('TF',{
        inherit: 'basicSelect',
        randomize: true,
        answers: [
            {text:'True', value:1},
            {text:'False', value:2}
        ]
    });
    API.addQuestionsSet('depends',{
        inherit: 'basicSelect',
        randomize: true,
        answers: [
            {text:'True', value:1},
            {text:'False', value:2},
            {text: 'It depends on the person', value:3}
        ]
    });
    API.addQuestionsSet('Valid',{
        inherit: 'basicSelect',
        randomize: true,
        answers: [
            {text:'Should be valid', value:2},
            {text:'Should not be valid', value:1}
        ]
    });

    API.addQuestionsSet('State',{
        inherit: 'basicSelect',
        randomize: true,
        answers: [
            {text:'Transgender people should use the bathroom/locker rooms of the sex they were assigned at birth', value:2},
            {text:'Transgender people should use the bathroom/locker rooms of their preferred gender identity', value:1}
        ]
    });

    API.addQuestionsSet('Legal',{
        inherit: 'basicSelect',
        answers: [
            {text:'Should be legal', value:2},
            {text:'Should not be legal', value:1}
        ]
    });

    API.addQuestionsSet('Likert',{
        inherit: 'basicSelect',
        answers: [
            {text:'Extremely true', value:5},
            {text:'Moderately true', value:4},
            {text:'Somewhat true', value:3},
            {text:'Slightly true', value:2},
            {text:'Not at all true', value:1}
        ]
    });
    API.addQuestionsSet('RLikert',{
        inherit: 'basicSelect',
        answers: [
            {text:'Not at all true', value:1},
            {text:'Slightly true', value:2},
            {text:'Somewhat true', value:3},
            {text:'Moderately true', value:4},
            {text:'Extremely true', value:5}
        ]
    });

    API.addQuestionsSet('Likertbadgood',{
        inherit: 'basicSelect',
        answers: [
            {text:'Extremely good', value:6},
            {text:'Moderately good', value:5},
            {text: 'Somewhat good', value: 4},
            {text:'Somewhat bad', value:3},
            {text:'Moderately bad', value:2},
            {text:'Extremely bad', value:1}
        ],
    });

    API.addQuestionsSet('RLikertbadgood',{
        inherit: 'basicSelect',
        answers: [
            {text:'Extremely bad', value:1},
            {text:'Moderately bad', value:2},
            {text: 'Somewhat bad', value: 3},
            {text:'Somewhat good', value:4},
            {text:'Moderately good', value:5},
            {text:'Extremely good', value:6}
        ],
    });
    API.addQuestionsSet('Likertagree',{
        inherit: 'basicSelect',
        answers: [
            {text:'Strongly agree', value:7},
            {text:'Agree', value:6},
            {text:'Somewhat agree', value:5},
            {text:'Undecided', value:4},
            {text:'Somewhat disagree', value:3},
            {text:'Disagree', value:2},
            {text:'Strongly disagree', value:1}
        ]
    });

    API.addQuestionsSet('RLikertagree',{
        inherit: 'basicSelect',
        answers: [
            {text:'Strongly disagree', value:1},
            {text:'Disagree', value:2},
            {text:'Somewhat disagree', value:3},
            {text:'Undecided', value:4},
            {text:'Somewhat agree', value:5},
            {text:'Disagree', value:6},
            {text:'Strongly agree', value:7}
        ]
    });
    API.addQuestionsSet('Likert5',{
        inherit: 'basicSelect',
        answers: [
            {text:'Strongly agree', value:5},
            {text:'Agree', value:4},
            {text:'Neither agree or disagree', value:3},
            {text:'Disagree', value:2},
            {text:'Strongly disagree', value:1}
        ]
    });

    API.addQuestionsSet('RLikert5',{
        inherit: 'basicSelect',
        answers: [
            {text:'Strongly disagree', value:1},
            {text:'Disagree', value:2},
            {text:'Neither agree or disagree', value:3},
            {text:'Disagree', value:4},
            {text:'Strongly agree', value:5}
        ]
    });
	
    /**
	*Specific questions
	*/	
    API.addQuestionsSet('attributes7',{
        inherit : 'basicSelect',
        name: 'attributes7',
        stem: 'Which statement best describes you?',
        answers: [
            {text:'I strongly prefer straight people to gay people',value:7},
            {text:'I moderately prefer straight people to gay people',value:6},
            {text:'I slightly prefer straight people to gay people',value:5},
            {text:'I like straight people and gay people equally',value:4},
            {text:'I slightly prefer gay people to straight people',value:3},
            {text:'I moderately prefer gay people to straight people',value:2},
            {text:'I strongly prefer gay people to straight people',value:1}
        ]
    });
	
    API.addQuestionsSet('Rattributes7',{
        inherit : 'basicSelect',
        name: 'Rattributes7',
        stem: 'Which statement best describes you?',
        answers: [
            {text:'I strongly prefer gay people to straight people',value:1},
            {text:'I moderately prefer gay people to straight people',value:2},
            {text:'I slightly prefer gay people to straight people',value:3},
            {text:'I like gay people and straight people equally',value:4},
            {text:'I slightly prefer straight people to gay people',value:5},
            {text:'I moderately prefer straight people to gay people',value:6},
            {text:'I strongly prefer straight people to gay people',value:7}
        ]
    });
    API.addQuestionsSet('thermSW',{
        inherit : 'therm',
        name: 'TSW_0to10SW',
        stem: 'Please rate how warm or cold you feel toward straight women?'
    });
    API.addQuestionsSet('RthermSW',{
        inherit : 'Rtherm',
        name: 'RTSW_0to10SW',
        stem: 'Please rate how warm or cold you feel toward straight women?'
    });
        API.addQuestionsSet('thermGW',{
            inherit : 'therm',
            name: 'TGW_0to10GW',
            stem: 'Please rate how warm or cold you feel toward gay women?'
        });
        API.addQuestionsSet('RthermGW',{
            inherit : 'Rtherm',
            name: 'RTGW_0to10GW',
            stem: 'Please rate how warm or cold you feel toward gay women?'
        });
    API.addQuestionsSet('thermSM',{
        inherit : 'therm',
        name: 'TSM_0to10SM',
        stem: 'Please rate how warm or cold you feel toward straight men?'
    });
    API.addQuestionsSet('RthermSM',{
        inherit : 'Rtherm',
        name: 'RTSM_0to10SM',
        stem: 'Please rate how warm or cold you feel toward straight men?'
    });
    API.addQuestionsSet('thermGM',{
        inherit : 'therm',
        name: 'TGM_0to10GM',
        stem: 'Please rate how warm or cold you feel toward gay men?'
    });

    API.addQuestionsSet('RthermGM',{
        inherit : 'Rtherm',
        name: 'RTGM_0to10GM',
        stem: 'Please rate how warm or cold you feel toward gay men?'
    });
    API.addQuestionsSet('Expomet',{
        inherit : 'YN',
        name: 'Expomet_0to1',
        stem: 'Have you ever met a gay person?'
    });

    API.addQuestionsSet('Expofam',{
        inherit : 'YN',
        name: 'Expofam_0to1',
        stem: 'Do you have a family member who is gay?'
    });

    API.addQuestionsSet('Expofriend',{
        inherit : 'YN',
        name: 'Expofriend_0to1',
        stem: 'Do you have a friend who is gay?'
    });

    API.addQuestionsSet('OpMarr',{
        inherit : 'Valid',
        name: 'OpMarr_0to2',
        stem: 'Do you think marriages between same-sex partners should or should not be recognized by the law as valid, with the same rights as traditional marriages?'
    });

    API.addQuestionsSet('Opbath',{
        inherit : 'State',
        name: 'Opbath_0to1',
        stem: 'Which of the following statements best reflects your belief?'
    });

    API.addQuestionsSet('Opchild',{
        inherit : 'Legal',
        name: 'Opchild_0to2',
        stem: 'Do you think it should be legal for same-sex partners to adopt a child?'
    });

    API.addQuestionsSet('Opbus',{
        inherit : 'Legal',
        name: 'Opbus_0to2',
        stem: 'Do you think it should be legal for business owners to refuse to serve same-sex partners?'
    });

    API.addQuestionsSet('Oprel',{
        inherit : 'Legal',
        name: 'Oprel_0to2',
        stem: 'Do you think homosexual relations between consenting adults should or should not be legal?'
    });

    API.addQuestionsSet('Belfbou',{
        inherit : 'TF',
        name: 'Belfbou_0to4',
        stem: 'Sexual orientation is a category with distinct boundaries: A person is either gay/lesbian or heterosexual.'
    });

    API.addQuestionsSet('Belfknow',{
        inherit : 'depends',
        name: 'Belfknow_0to4',
        stem: 'It is usually possible to know a person’s sexual orientation without being told.'
    });

    API.addQuestionsSet('Belflam',{
        inherit : 'Likert',
        name: 'Belflam_0to4',
        stem: 'Most gay men are flamboyant.'
    });
    API.addQuestionsSet('RBelflam',{
        inherit : 'RLikert',
        name: 'RBelflam_0to4',
        stem: 'Most gay men are flamboyant.'
    });
    API.addQuestionsSet('Belfem',{
        inherit : 'Likert',
        name: 'Belfem_0to4',
        stem: 'Most gay men are more feminine than straight men.'
    });
    API.addQuestionsSet('RBelfem',{
        inherit : 'RLikert',
        name: 'RBelfem_0to4',
        stem: 'Most gay men are more feminine than straight men.'
    });
    API.addQuestionsSet('Belwalk',{
        inherit : 'depends',
        name: 'Belwalk_0to4',
        stem: 'You can tell a man is gay by the way he walks.'
    });

    API.addQuestionsSet('Belnails',{
        inherit : 'Likert',
        name: 'Belnails_0to4',
        stem: 'Gay men are more likely to wear make-up and paint their nails compared to straight men.'
    });
    API.addQuestionsSet('RBelnails',{
        inherit : 'RLikert',
        name: 'RBelnails_0to4',
        stem: 'Gay men are more likely to wear make-up and paint their nails compared to straight men.'
    });
    API.addQuestionsSet('Beldress',{
        inherit : 'Likert',
        name: 'Beldress_0to4',
        stem: 'Most lesbians prefer to dress like men.'
    });
    API.addQuestionsSet('RBeldress',{
        inherit : 'RLikert',
        name: 'RBeldress_0to4',
        stem: 'Most lesbians prefer to dress like men.'
    });
    API.addQuestionsSet('Belmake',{
        inherit : 'Likert',
        name: 'Belmake_0to4',
        stem: 'Most lesbians don’t wear make-up.'
    });
    API.addQuestionsSet('RBelmake',{
        inherit : 'RLikert',
        name: 'RBelmake_0to4',
        stem: 'Most lesbians don’t wear make-up.'
    });
    API.addQuestionsSet('Belmasc',{
        inherit : 'Likert',
        name: 'Belmasc_0to4',
        stem: 'Most lesbians are more masculine than straight women.'
    });
    API.addQuestionsSet('RBelmasc',{
        inherit : 'RLikert',
        name: 'RBelmasc_0to4',
        stem: 'Most lesbians are more masculine than straight women.'
    });
    API.addQuestionsSet('Belook',{
        inherit : 'Likert',
        name: 'Belookc_0to4',
        stem: 'Most lesbians look like men.'
    });
    API.addQuestionsSet('RBelook',{
        inherit : 'RLikert',
        name: 'RBelookc_0to4',
        stem: 'Most lesbians look like men.'
    });
    API.addQuestionsSet('bestleader8',{
        inherit : 'basicSelect',
        name: 'bestleader8',
        stem: 'Based on appearance who do you think would make the best leader? ',
        answers: [
            {mixer: 'random',
                data : [
            {text:'<img src="<%=global.baseURL%>mm1_nc.jpg" height=80>', value: 'mm1_nc'},
            {text:'<img src="<%=global.baseURL%>mm2_nc.jpg" height=80>',value: 'mm2_nc'},
            {text:'<img src="<%=global.baseURL%>mm3_nc.jpg" height=80>', value: 'mm3_nc'},
            {text:'<img src="<%=global.baseURL%>mm4_nc.jpg" height=80>', value: 'mm4_nc'},
            {text:'<img src="<%=global.baseURL%>mf1_nc.jpg" height=80>', value:'mf1_nc'},
            {text:'<img src="<%=global.baseURL%>mf2_nc.jpg" height=80>', value:'mf2_nc'},
            {text:'<img src="<%=global.baseURL%>mf3_nc.jpg" height=80>', value: 'mf3_nc'},
            {text:'<img src="<%=global.baseURL%>mf4_nc.jpg" height=80>', value: 'mf4_nc'}]
            }
        ]
    });
    API.addQuestionsSet('check',{
        inherit : 'basicSelect',
        randomize: true,
        name: 'check',
        stem: 'The images you viewed were of',
        answers: [
            {text:'Heterosexual men',value:7},
            {text:'Heterosexual women',value:6},
            {text:'Homosexual men',value:5},
            {text:'Homosexual women',value:4},
            {text:'Non-binary individuals',value:3},
            {text:'Men (sexual orinetation was not given)',value:2},
            {text:'Women (sexual orinetation was not given)',value:1}
        ]
    });

    API.addQuestionsSet('leadmm1',{
        inherit : 'Likertbadgood',
        name: 'leadmm1',
        stem: 'Based on appearance how good of a leader do you think this person would be?<br><img src="<%=global.baseURL%>mm1_nc.jpg" height=100>'
    });
    API.addQuestionsSet('Rleadmm1',{
        inherit : 'RLikertbadgood',
        name: 'Rleadmm1',
        stem: 'Based on appearance how good of a leader do you think this person would be?<br><img src="<%=global.baseURL%>mm1_nc.jpg" height=100>'
    });
    API.addQuestionsSet('leadmm2',{
        inherit : 'Likertbadgood',
        name: 'leadmm1',
        stem: 'Based on appearance how good of a leader do you think this person would be?<br><img src="<%=global.baseURL%>mm2_nc.jpg" height=100>'
    });
    API.addQuestionsSet('Rleadmm2',{
        inherit : 'RLikertbadgood',
        name: 'Rleadmm2',
        stem: 'Based on appearance how good of a leader do you think this person would be?<br><img src="<%=global.baseURL%>mm2_nc.jpg" height=100>'
    });
    API.addQuestionsSet('leadmm3',{
        inherit : 'Likertbadgood',
        name: 'leadmm3',
        stem: 'Based on appearance how good of a leader do you think this person would be?<br><img src="<%=global.baseURL%>mm3_nc.jpg" height=100>'
    });
    API.addQuestionsSet('Rleadmm3',{
        inherit : 'RLikertbadgood',
        name: 'Rleadmm3',
        stem: 'Based on appearance how good of a leader do you think this person would be?<br><img src="<%=global.baseURL%>mm3_nc.jpg" height=100>'
    });
    API.addQuestionsSet('leadmm4',{
        inherit : 'Likertbadgood',
        name: 'leadmm4',
        stem: 'Based on appearance how good of a leader do you think this person would be?<br><img src="<%=global.baseURL%>mm4_nc.jpg" height=100>'
    });
    API.addQuestionsSet('Rleadmm4',{
        inherit : 'RLikertbadgood',
        name: 'leadmm4',
        stem: 'Based on appearance how good of a leader do you think this person would be?<br><img src="<%=global.baseURL%>mm4_nc.jpg" height=100>'
    });
    API.addQuestionsSet('leadmf1',{
        inherit : 'Likertbadgood',
        name: 'leadmf1',
        stem: 'Based on appearance how good of a leader do you think this person would be?<br><img src="<%=global.baseURL%>mf1_nc.jpg" height=100>'
    });
    API.addQuestionsSet('Rleadmf1',{
        inherit : 'RLikertbadgood',
        name: 'Rleadmf1',
        stem: 'Based on appearance how good of a leader do you think this person would be?<br><img src="<%=global.baseURL%>mf1_nc.jpg" height=100>'
    });
    API.addQuestionsSet('leadmf2',{
        inherit : 'Likertbadgood',
        name: 'leadmf2',
        stem: 'Based on appearance how good of a leader do you think this person would be?<br><img src="<%=global.baseURL%>mf2_nc.jpg" height=100>'
    });
    API.addQuestionsSet('Rleadmf2',{
        inherit : 'RLikertbadgood',
        name: 'Rleadmf2',
        stem: 'Based on appearance how good of a leader do you think this person would be?<br><img src="<%=global.baseURL%>mf2_nc.jpg" height=100>'
    });
    API.addQuestionsSet('leadmf3',{
        inherit : 'Likertbadgood',
        name: 'leadmf3',
        stem: 'Based on appearance how good of a leader do you think this person would be?<br><img src="<%=global.baseURL%>mf3_nc.jpg" height=100>'
    });
    API.addQuestionsSet('Rleadmf3',{
        inherit : 'RLikertbadgood',
        name: 'Rleadmf3',
        stem: 'Based on appearance how good of a leader do you think this person would be?<br><img src="<%=global.baseURL%>mf3_nc.jpg" height=100>'
    });
    API.addQuestionsSet('leadmf4',{
        inherit : 'Likertbadgood',
        name: 'leadmf4',
        stem: 'Based on appearance how good of a leader do you think this person would be?<br><img src="<%=global.baseURL%>mf4_nc.jpg" height=100>'
    });
    API.addQuestionsSet('Rleadmf4',{
        inherit : 'RLikertbadgood',
        name: 'Rleadmf4',
        stem: 'Based on appearance how good of a leader do you think this person would be?<br><img src="<%=global.baseURL%>mf4_nc.jpg" height=100>'
    });
    API.addQuestionsSet('shortA',{
        inherit : 'basicSQ',
        name: 'Short_Answer',
        stem: 'Do you have any comments or feedback for this study.'
    });
    
    API.addQuestionsSet('CWSM',{
        inherit : 'matrixSM',
        name: 'CWSM',
        stem: 'Please answer the following about how heterosexual men are in general:'
    });

    API.addQuestionsSet('RCWSM',{
        inherit : 'RmatrixSM',
        name: 'RCWSM',
        stem: 'Please answer the following about how heterosexual men are in general:'
    });

    API.addQuestionsSet('CWGM',{
        inherit : 'matrixGM',
        name: 'CWGM',
        stem: 'Please answer the following about how homosexual men are in general:'
    });

    API.addQuestionsSet('RCWGM',{
        inherit : 'RmatrixGM',
        name: 'RCWGM',
        stem: 'Please answer the following about how homosexual men are in general:'
    });

    API.addQuestionsSet('CWGW',{
        inherit : 'matrixGW',
        name: 'CWGW',
        stem: 'Please answer the following about how homosexual women are in general:'
    });

    API.addQuestionsSet('RCWGW',{
        inherit : 'RmatrixGW',
        name: 'RCWGW',
        stem: 'Please answer the following about how homosexual women are in general:'
    });

    API.addQuestionsSet('CWSW',{
        inherit : 'matrixSW',
        name: 'CWSW',
        stem: 'Please answer the following about how heterosexual women are in general:'
    });

    API.addQuestionsSet('RCWSW',{
        inherit : 'RmatrixSW',
        name: 'RCWSW',
        stem: 'Please answer the following about how heterosexual women are in general:'
    });
    API.addQuestionsSet('TGR1',{
        inherit : 'Likertagree',
        name: 'TGR1',
        stem: 'People can be both aggressive and nurturing regadless of sex.'
    });
    API.addQuestionsSet('RTGR1',{
        inherit : 'RLikertagree',
        name: 'RTGR1',
        stem: 'People can be both aggressive and nurturing regadless of sex.'
    });
    API.addQuestionsSet('TGR2',{
        inherit : 'Likertagree',
        name: 'TGR2',
        stem: 'People should be treated the same regarless of sex.'
    });
    API.addQuestionsSet('RTGR2',{
        inherit : 'RLikertagree',
        name: 'RTGR2',
        stem: 'People should be treated the same regarless of sex.'
    });
    API.addQuestionsSet('TGR3',{
        inherit : 'Likertagree',
        name: 'TGR3',
        stem: 'The freedom that children are given should be determined by their age and muturity level and not by their sex.'
    });
    API.addQuestionsSet('RTGR3',{
        inherit : 'RLikertagree',
        name: 'RTGR3',
        stem: 'The freedom that children are given should be determined by their age and muturity level and not by their sex.'
    });
    API.addQuestionsSet('TGR4',{
        inherit : 'Likertagree',
        name: 'TGR4',
        stem: 'Tasks around the house should not be assigned by sex.'
    });
    API.addQuestionsSet('RTGR4',{
        inherit : 'RLikertagree',
        name: 'RTGR4',
        stem: 'Tasks around the house should not be assigned by sex.'
    });
    API.addQuestionsSet('TGR5',{
        inherit : 'Likertagree',
        name: 'TGR5',
        stem: 'We should stop thinking about whether people are male or female and focus on other charcateristics.'
    });
    API.addQuestionsSet('RTGR5',{
        inherit : 'RLikertagree',
        name: 'RTGR5',
        stem: 'We should stop thinking about whether people are male or female and focus on other charcateristics.'
    });
    API.addQuestionsSet('TGR6',{
        inherit : 'Likertagree',
        name: 'TGR6',
        stem: 'A father/s major responsibility is to provide finacially for his children.'
    });
    API.addQuestionsSet('RTGR6',{
        inherit : 'RLikertagree',
        name: 'RTGR6',
        stem: 'A father/s major responsibility is to provide finacially for his children.'
    });
    API.addQuestionsSet('TGR7',{
        inherit : 'Likertagree',
        name: 'TGR7',
        stem: 'Men are more sexual than women.'
    });
    API.addQuestionsSet('RTGR7',{
        inherit : 'RLikertagree',
        name: 'RTGR7',
        stem: 'Men are more sexual than women.'
    });
    API.addQuestionsSet('TGR8',{
        inherit : 'Likertagree',
        name: 'TGR8',
        stem: 'Some types of work are just not appropriate for women.'
    });
    API.addQuestionsSet('RTGR8',{
        inherit : 'RLikertagree',
        name: 'RTGR8',
        stem: 'Some types of work are just not appropriate for women.'
    });
    API.addQuestionsSet('TGR9',{
        inherit : 'Likertagree',
        name: 'TGR9',
        stem: 'Mothers should make most decisions about how children are brought up.'
    });
    API.addQuestionsSet('RTGR9',{
        inherit : 'RLikertagree',
        name: 'RTGR9',
        stem: 'Mothers should make most decisions about how children are brought up.'
    });
    API.addQuestionsSet('TGR10',{
        inherit : 'Likertagree',
        name: 'TGR10',
        stem: 'Mothers should work only if necessary.'
    });
    API.addQuestionsSet('RTGR10',{
        inherit : 'RLikertagree',
        name: 'RTGR10',
        stem: 'Mothers should work only if necessary.'
    });
    API.addQuestionsSet('TGR11',{
        inherit : 'Likertagree',
        name: 'TGR11',
        stem: 'Girls should be protected and watched over more than boys.'
    });
    API.addQuestionsSet('RTGR11',{
        inherit : 'RLikertagree',
        name: 'RTGR11',
        stem: 'Girls should be protected and watched over more than boys.'
    });
    API.addQuestionsSet('TGR12',{
        inherit : 'Likertagree',
        name: 'TGR12',
        stem: 'Only some types of work are appropriate for both men and women.'
    });
    API.addQuestionsSet('RTGR12',{
        inherit : 'RLikertagree',
        name: 'RTGR12',
        stem: 'Only some types of work are appropriate for both men and women.'
    });
    API.addQuestionsSet('TGR13',{
        inherit : 'Likertagree',
        name: 'TGR13',
        stem: 'For many important jobs, it is better to choose men instead of women.'
    });
    API.addQuestionsSet('RTGR13',{
        inherit : 'RLikertagree',
        name: 'RTGR13',
        stem: 'For many important jobs, it is better to choose men instead of women.'
    });

    API.addSequence([
        {
            inherit:'basicPage', 
            questions: {inherit:'bestleader8'}
        },
      {mixer : 'random', 
        data : [
            {
                mixer : 'random', 
                wrapper:true, 
                data : [
                    {mixer: 'choose',
                        data: [
                            {
                                inherit:'basicPage', 
                                questions: {inherit:'CWSM'}	
                            },
                            {
                                inherit:'basicPage', 
                                questions: {inherit:'RCWSM'}	
                            },
                        ]						
                    },
                    {mixer: 'choose',
                        data: [
                            {
                                inherit:'basicPage', 
                                questions: {inherit:'CWSW'}	
                            },
                            {
                                inherit:'basicPage', 
                                questions: {inherit:'RCWSW'}	
                            },
                        ]						
                    },
                    {mixer: 'choose',
                        data: [
                            {
                                inherit:'basicPage', 
                                questions: {inherit:'CWGM'}	
                            },
                            {
                                inherit:'basicPage', 
                                questions: {inherit:'RCWGM'}	
                            },
                        ]						
                    },
                    {mixer: 'choose',
                        data: [
                            {
                                inherit:'basicPage', 
                                questions: {inherit:'CWGW'}	
                            },
                            {
                                inherit:'basicPage', 
                                questions: {inherit:'RCWGW'}	
                            },
                        ]						
                    },
                    {mixer: 'choose',
                        data: [
                            {
                                inherit:'basicPage', 
                                questions: {inherit:'thermSW'}	
                            },
                            {
                                inherit:'basicPage', 
                                questions: {inherit:'RthermSW'}	
                            },
                        ]						
                    },
                    {mixer: 'choose',
                        data: [
                            {
                                inherit:'basicPage', 
                                questions: {inherit:'thermGW'}	
                            },
                            {
                                inherit:'basicPage', 
                                questions: {inherit:'RthermGW'}	
                            },
                        ]						
                    },
                    {mixer: 'choose',
                        data: [
                            {
                                inherit:'basicPage', 
                                questions: {inherit:'thermSM'}	
                            },
                            {
                                inherit:'basicPage', 
                                questions: {inherit:'RthermSM'}	
                            },
                        ]						
                    },
                    {mixer: 'choose',
                        data: [
                            {
                                inherit:'basicPage', 
                                questions: {inherit:'thermGM'}	
                            },
                            {
                                inherit:'basicPage', 
                                questions: {inherit:'RthermGM'}	
                            },
                        ]						
                    },
                    {
                        inherit:'basicPage', 
                        questions: {inherit:'Expomet'}							
                    },
                    {
                        inherit:'basicPage', 
                        questions: {inherit:'Expofam'}							
                    },
                    {
                        inherit:'basicPage', 
                        questions: {inherit:'Expofriend'}							
                    },
                    {
                        inherit:'basicPage', 
                        questions: {inherit:'OpMarr'}							
                    },
                    {
                        inherit:'basicPage', 
                        questions: {inherit:'Opbath'}							
                    },
                    {
                        inherit:'basicPage', 
                        questions: {inherit:'Opchild'}							
                    },
                    {
                        inherit:'basicPage', 
                        questions: {inherit:'Opbus'}							
                    },
                    {
                        inherit:'basicPage', 
                        questions: {inherit:'Oprel'}							
                    },
                    {
                        inherit:'basicPage', 
                        questions: {inherit:'Belfbou'}							
                    },
                    {
                        inherit:'basicPage', 
                        questions: {inherit:'Belfknow'}							
                    },
                    {mixer: 'choose',
                        data: [
                            {
                                inherit:'basicPage', 
                                questions: {inherit:'Belflam'}	
                            },
                            {
                                inherit:'basicPage', 
                                questions: {inherit:'RBelflam'}	
                            },
                        ]						
                    },
                    {mixer: 'choose',
                        data: [
                            {
                                inherit:'basicPage', 
                                questions: {inherit:'Belnails'}	
                            },
                            {
                                inherit:'basicPage', 
                                questions: {inherit:'RBelnails'}	
                            },
                        ]						
                    },
                    {mixer: 'choose',
                        data: [
                            {
                                inherit:'basicPage', 
                                questions: {inherit:'Belfem'}	
                            },
                            {
                                inherit:'basicPage', 
                                questions: {inherit:'RBelfem'}	
                            },
                        ]						
                    },
                    {
                        inherit:'basicPage', 
                        questions: {inherit:'Belwalk'}							
                    },
                    {mixer: 'choose',
                        data: [
                            {
                                inherit:'basicPage', 
                                questions: {inherit:'Beldress'}	
                            },
                            {
                                inherit:'basicPage', 
                                questions: {inherit:'RBeldress'}	
                            },
                        ]						
                    },
                    {mixer: 'choose',
                        data: [
                            {
                                inherit:'basicPage', 
                                questions: {inherit:'Belmake'}	
                            },
                            {
                                inherit:'basicPage', 
                                questions: {inherit:'RBelmake'}	
                            },
                        ]						
                    },
                    {mixer: 'choose',
                        data: [
                            {
                                inherit:'basicPage', 
                                questions: {inherit:'Belmasc'}	
                            },
                            {
                                inherit:'basicPage', 
                                questions: {inherit:'RBelmasc'}	
                            },
                        ]						
                    },
                    {mixer: 'choose',
                        data: [
                            {
                                inherit:'basicPage', 
                                questions: {inherit:'Belook'}	
                            },
                            {
                                inherit:'basicPage', 
                                questions: {inherit:'RBelook'}	
                            },
                        ]						
                    },
                    {mixer: 'choose',
                        data: [
                            {
                                inherit:'basicPage', 
                                questions: {inherit:'attributes7'}	
                            },
                            {
                                inherit:'basicPage', 
                                questions: {inherit:'Rattributes7'}	
                            },
                        ]						
                    },
                    {mixer: 'choose',
                        data: [
                            {
                                inherit:'basicPage', 
                                questions: {inherit:'leadmm1'}
                            },
                            {
                                inherit:'basicPage', 
                                questions: {inherit:'Rleadmm1'}
                            }
                        ]
                    },
                    {mixer: 'choose',
                        data: [
                            {
                                inherit:'basicPage', 
                                questions: {inherit:'leadmm2'}
                            },
                            {
                                inherit:'basicPage', 
                                questions: {inherit:'Rleadmm2'}
                            }
                        ]
                    },
                    {mixer: 'choose',
                        data: [
                            {
                                inherit:'basicPage', 
                                questions: {inherit:'leadmm3'}
                            },
                            {
                                inherit:'basicPage', 
                                questions: {inherit:'Rleadmm3'}
                            }
                        ]
                    },
                    {mixer: 'choose',
                        data: [
                            {
                                inherit:'basicPage', 
                                questions: {inherit:'leadmm4'}
                            },
                            {
                                inherit:'basicPage', 
                                questions: {inherit:'Rleadmm4'}
                            }
                        ]
                    },
                    {mixer: 'choose',
                        data: [
                            {
                                inherit:'basicPage', 
                                questions: {inherit:'leadmf1'}
                            },
                            {
                                inherit:'basicPage', 
                                questions: {inherit:'Rleadmf1'}
                            }
                        ]
                    },
                    {mixer: 'choose',
                        data: [
                            {
                                inherit:'basicPage', 
                                questions: {inherit:'leadmf2'}
                            },
                            {
                                inherit:'basicPage', 
                                questions: {inherit:'Rleadmf2'}
                            }
                        ]
                    },

                ]
            }
            
        ]},
        {
            inherit:'basicPage', 
            questions: {inherit:'shortA'}
        }

    ]);

    return API.script;
});
