Ext.define('Surveyportal.surveyportal.shared.com.survey.model.healthcare.SurveyQueAnsBridgeModel', {
     "extend": "Ext.data.Model",
     "fields": [{
          "name": "primaryKey",
          "type": "int",
          "defaultValue": ""
     }, {
          "name": "surveyqueAnsBridgePkey",
          "type": "int",
          "defaultValue": ""
     }, {
          "name": "surveyquestionid",
          "reference": "SurveyQuestion",
          "defaultValue": ""
     }, {
          "name": "surveyanswerid",
          "reference": "SurveyAnswer",
          "defaultValue": ""
     }, {
          "name": "entityAudit",
          "reference": "EntityAudit"
     }, {
          "name": "primaryDisplay",
          "type": "string",
          "defaultValue": ""
     }]
});