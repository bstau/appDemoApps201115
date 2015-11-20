package com.survey.app.server.businessservice.healthcontext.healthcare;
import com.athena.framework.server.helper.RuntimeLogInfoHelper;
import com.spartan.shield.sessionService.SessionDataMgtService;
import com.survey.app.server.repository.SurveyQuestionRepository;
import com.survey.app.shared.healthcare.SurveyQuestion;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.athena.framework.server.exception.biz.SpartanBusinessValidationFailedException;
import com.athena.framework.server.exception.biz.SpartanDataNotFoundException;
import com.athena.framework.server.exception.biz.SpartanIncorrectDataException;
import com.athena.framework.server.exception.repository.SpartanPersistenceException;
import java.util.List;

@Component
public class GeneralHealthService {

    @Autowired
    private SessionDataMgtService sessionService;

    @Autowired
    private RuntimeLogInfoHelper runtimeLogInfoHelper;

    @Autowired
    private SurveyQuestionRepository<SurveyQuestion> surveyQuestionRepository;

    public List<SurveyQuestion> genralHealth() throws SpartanIncorrectDataException, Exception, SpartanBusinessValidationFailedException, SpartanPersistenceException, SpartanDataNotFoundException {
        java.util.List<com.survey.app.shared.healthcare.SurveyQuestion> surveyquestion_0 = null;
        try {
            surveyquestion_0 = surveyQuestionRepository.GeneralHealth();
            return surveyquestion_0;
        } catch (Exception e) {
            e.printStackTrace();
            throw new com.athena.framework.server.exception.biz.SpartanBusinessValidationFailedException(e.getCause().getMessage());
        }
    }
}
