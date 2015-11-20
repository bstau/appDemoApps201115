package com.survey.app.server.businessservice.healthcontext.healthcare;
import com.athena.framework.server.helper.RuntimeLogInfoHelper;
import com.athena.ruleengine.server.bzservice.RuleEngineInterface;
import com.spartan.shield.sessionService.SessionDataMgtService;
import com.survey.app.server.repository.SurveyResultRepository;
import com.survey.app.shared.healthcare.SurveyResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.athena.framework.server.exception.biz.SpartanBusinessValidationFailedException;
import com.athena.framework.server.exception.biz.SpartanDataNotFoundException;
import com.athena.framework.server.exception.biz.SpartanIncorrectDataException;
import com.athena.framework.server.exception.repository.SpartanPersistenceException;
import com.survey.app.shared.healthcontext.healthcare.SurveyResultDTO;
import java.util.List;

@Component
public class SurveyProcessingService {

    @Autowired
    private SessionDataMgtService sessionService;

    @Autowired
    private RuntimeLogInfoHelper runtimeLogInfoHelper;

    @Autowired
    private RuleEngineInterface ruleEngineInterface;

    @Autowired
    private SurveyResultRepository<SurveyResult> surveyResultRepository;

    public void surveyProcessing(List<SurveyResultDTO> _surveyResult) throws SpartanIncorrectDataException, Exception, SpartanBusinessValidationFailedException, SpartanPersistenceException, SpartanDataNotFoundException {
        for (com.survey.app.shared.healthcontext.healthcare.SurveyResultDTO surveyResult : _surveyResult) {
            try {
                ruleEngineInterface.initialize("f58c54e1-8f6c-4db4-9ef7-e13288cd741b");
                ruleEngineInterface.add(runtimeLogInfoHelper);
                ruleEngineInterface.add(surveyResult);
                ruleEngineInterface.executeRule();
                if ((com.survey.app.shared.healthcare.SurveyResult) ruleEngineInterface.getResult("surveyresult_0") == null) {
                    throw new com.athena.framework.server.exception.biz.SpartanDataNotFoundException("invalid parameter");
                }
                com.survey.app.shared.healthcare.SurveyResult surveyresult_1 = surveyResultRepository.save((com.survey.app.shared.healthcare.SurveyResult) ruleEngineInterface.getResult("surveyresult_0"));
            } catch (com.athena.framework.server.exception.biz.RuleInitException | com.athena.framework.server.exception.biz.RuleExecuteException | com.athena.framework.server.exception.biz.RuleWorkingMemoryException | com.athena.framework.server.exception.biz.RuleDataException e) {
                e.printStackTrace();
                throw new com.athena.framework.server.exception.biz.SpartanBusinessValidationFailedException("3005");
            } catch (Exception e) {
                e.printStackTrace();
                throw new com.athena.framework.server.exception.biz.SpartanBusinessValidationFailedException(e.getCause().getMessage());
            }
        }
    }
}
