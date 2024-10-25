define(['questAPI'], function(Quest){
    let API = new Quest();
    let isTouch = API.getGlobal().$isTouch;
	
    /**
	* Page prototype
	*/
    API.addPagesSet('basicPage',{
        noSubmit:false, //Change to true if you don't want to show the submit button.
        header: 'Questionnaire',
        decline: true,
        declineText: isTouch ? 'Decline' : 'Decline to Answer', 
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
                ? 'Please select an answer, or click \'Decline\'' 
                : 'Please select an answer, or click \'Decline to Answer\''
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
	
    API.addQuestionsSet('basicDropdown',{
        inherit :'basicQ',
        type : 'dropdown',
        autoSubmit:false
    });
	
    API.addQuestionsSet('therm',{
        inherit: 'basicSelect',
        answers: [
            {text:'10 - Extremely warm', value:9},
            {text:'9 - Very warm', value:8},
            {text:'8 - Moderately warm', value:7},
            {text:'7 - Somewhat warm', value:6},
            {text:'6 - Slightly warm', value:5},
            {text:'5 - Neither warm nor cold', value:4},
            {text:'4 - Slightly cold', value:3},
            {text:'3 - Moderately cold', value:2},
            {text:'2 - Very cold', value:1},
            {text:'1 - Extremely cold', value:0}
        ]
    });

    API.addQuestionsSet('YN',{
        inherit: 'basicSelect',
        answers: [
            {text:'1 - Yes', value:1},
            {text:'2 - No', value:0}
        ]
    });

    API.addQuestionsSet('Valid',{
        inherit: 'basicSelect',
        answers: [
            {text:'1 - Should be valid', value:2},
            {text:'2 - Should not be valid', value:1},
            {text:'3 - No opinion', value:0}
        ]
    });

    API.addQuestionsSet('State',{
        inherit: 'basicSelect',
        answers: [
            {text:'1 - Transgender people should use the bathroom/locker rooms of the sex they were assigned at birth', value:1},
            {text:'2 - Transgender people should use the bathroom/locker rooms of their preferred gender identity', value:0}
        ]
    });

    API.addQuestionsSet('Legal',{
        inherit: 'basicSelect',
        answers: [
            {text:'1 - Should be legal', value:2},
            {text:'2 - Should not be legal', value:1},
            {text:'3 - No opinion', value:0}
        ]
    });

    API.addQuestionsSet('Likert',{
        inherit: 'basicSelect',
        answers: [
            {text:'5 - Extremely true', value:4},
            {text:'4 - Moderately true', value:3},
            {text:'3 - Somewhat true', value:2},
            {text:'2 - Slightly true', value:1},
            {text:'1 - Not at all true', value:0}
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
	
    API.addQuestionsSet('thermSW',{
        inherit : 'therm',
        name: 'TSW_0to10',
        stem: 'Please rate how warm or cold you feel toward straight women?'
    });

    API.addQuestionsSet('thermGW',{
        inherit : 'therm',
        name: 'TGW_0to10',
        stem: 'Please rate how warm or cold you feel toward gay women?'
    });
    
    API.addQuestionsSet('thermSM',{
        inherit : 'therm',
        name: 'TSM_0to10',
        stem: 'Please rate how warm or cold you feel toward straight men?'
    });

    API.addQuestionsSet('thermGM',{
        inherit : 'therm',
        name: 'TGM_0to10',
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
        inherit : 'Likert',
        name: 'Belfbou_0to4',
        stem: 'Sexual orientation is a category with distinct boundaries: A person is either gay/lesbian or heterosexual.'
    });

    API.addQuestionsSet('Belfknow',{
        inherit : 'Likert',
        name: 'Belfknow_0to4',
        stem: 'It is usually possible to know a person’s sexual orientation without being told.'
    });

    API.addQuestionsSet('Belflam',{
        inherit : 'Likert',
        name: 'Belflam_0to4',
        stem: 'Most gay men are flamboyant.'
    });

    API.addQuestionsSet('Belfem',{
        inherit : 'Likert',
        name: 'Belfem_0to4',
        stem: 'Most gay men are more feminine than straight men.'
    });

    API.addQuestionsSet('Belwalk',{
        inherit : 'Likert',
        name: 'Belwalk_0to4',
        stem: 'You can tell a man is gay by the way he walks.'
    });

    API.addQuestionsSet('Belnails',{
        inherit : 'Likert',
        name: 'Belnails_0to4',
        stem: 'Gay men are more likely to wear make-up and paint their nails compared to straight men.'
    });

    API.addQuestionsSet('Beldress',{
        inherit : 'Likert',
        name: 'Beldress_0to4',
        stem: 'Most lesbians prefer to dress like men.'
    });

    API.addQuestionsSet('Belmake',{
        inherit : 'Likert',
        name: 'Belmake_0to4',
        stem: 'Most lesbians don’t wear make-up.'
    });

    API.addQuestionsSet('Belmasc',{
        inherit : 'Likert',
        name: 'Belmasc_0to4',
        stem: 'Most lesbians are more masculine than straight women.'
    });

    API.addQuestionsSet('Belook',{
        inherit : 'Likert',
        name: 'Belookc_0to4',
        stem: 'Most lesbians look like men.'
    });

    API.addQuestionsSet('shortA',{
        inherit : 'basicSQ',
        name: 'Short_Answer',
        stem: 'Do you have any comments or feedback for this study.'
    });

    API.addSequence([
      {mixer : 'random', 
        data : [
            {
                mixer : 'random', 
                wrapper:true, 
                data : [
                    {
                        inherit:'basicPage', 
                        questions: {inherit:'thermSW'}
                    },
                    {
                        inherit:'basicPage', 
                        questions: {inherit:'thermGW'}							
                    },
                    {
                        inherit:'basicPage', 
                        questions: {inherit:'thermSM'}							
                    },
                    {
                        inherit:'basicPage', 
                        questions: {inherit:'thermGM'}							
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
                    {
                        inherit:'basicPage', 
                        questions: {inherit:'Belflam'}							
                    },
                    {
                        inherit:'basicPage', 
                        questions: {inherit:'Belnails'}							
                    },
                    {
                        inherit:'basicPage', 
                        questions: {inherit:'Belfem'}							
                    },
                    {
                        inherit:'basicPage', 
                        questions: {inherit:'Belwalk'}							
                    },
                    {
                        inherit:'basicPage', 
                        questions: {inherit:'Beldress'}							
                    },
                    {
                        inherit:'basicPage', 
                        questions: {inherit:'Belmake'}							
                    },
                    {
                        inherit:'basicPage', 
                        questions: {inherit:'Belmasc'}							
                    },
                    {
                        inherit:'basicPage', 
                        questions: {inherit:'Belook'}							
                    },
                    {
                        inherit:'basicPage', 
                        questions: {inherit:'attributes7'}							
                    }
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
