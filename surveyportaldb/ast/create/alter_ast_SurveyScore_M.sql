

ALTER TABLE `ast_SurveyScore_M` ADD CONSTRAINT FOREIGN KEY (`userId`) REFERENCES `ast_User_T`(`userId`);



ALTER TABLE `ast_SurveyScore_M` ADD CONSTRAINT FOREIGN KEY (`groupType`) REFERENCES `ast_SurveyQuestionGroup_M`(`surveyQuestionGroupId`);

