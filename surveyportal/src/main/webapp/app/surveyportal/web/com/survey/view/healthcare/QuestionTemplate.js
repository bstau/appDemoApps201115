Ext.define('Surveyportal.surveyportal.web.com.survey.view.healthcare.QuestionTemplate', {
     "xtype": "questionTemplate",
     "items": [{
          "xtype": "displayfield",
          "fieldLabel": "Question",
          "margin": 5,
          "bindable": "surveyQuestionName",
          "value": "TEXT",
          "name": "surveyQuestionName",
          "title": "Question",
          "itemId": "egkbaoi",
          "bind": "{surveyQuestionName}"
     }, {
          "xtype": "hiddenfield",
          "fieldLabel": "surveyQuestionId",
          "bindable": "surveyQuestionId",
          "margin": 5,
          "name": "surveyQuestionId",
          "title": "surveyQuestionId",
          "itemId": "mhchibi",
          "bind": "{surveyQuestionId}"
     }, {
          "xtype": "radiogroup",
          "name": "surveyAnswer",
          "fieldLabel": "Answer",
          "columns": 2,
          "vertical": true,
          "margin": 5,
          "groupData": "surveyAnswer",
          "isDynamic": true,
          "title": "Answers",
          "boxLabel": "surveyAnswerName",
          "inputValue": "surveyAnswerId",
          "itemId": "beghmdi",
          "bind": "{surveyAnswer}",
          "bindable": "surveyAnswer"
     }],
     "border": true,
     "autoScroll": true,
     "margin": 5,
     "isPartialUI": true,
     "itemId": "hjfacli",
     "dockedItems": [],
     "extend": "Ext.form.Panel",
     "requires": ["Surveyportal.surveyportal.web.com.survey.controller.healthcare.QuestionTemplateController", "Surveyportal.surveyportal.shared.com.survey.viewmodel.healthcare.QuestionTemplateViewModel", "Surveyportal.surveyportal.shared.com.survey.model.healthcare.QuestionTemplateModel"],
     "viewModel": "QuestionTemplateViewModel",
     "controller": "QuestionTemplateController"
});