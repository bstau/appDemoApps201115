package com.survey.app.server.businessservice;
import com.athena.framework.server.exception.repository.SpartanPersistenceException;
import com.survey.app.server.repository.SurveyQuestionRepository;
import com.survey.app.shared.healthcare.SurveyQuestion;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import java.util.List;

@Component
public class SurveyQuestionBusinessService {

    @Autowired
    private SurveyQuestionRepository surveyQuestionRepository;

    public void update(SurveyQuestion entity) throws SpartanPersistenceException {
        try {
            if (entity.isHardDelete()) {
                surveyQuestionRepository.delete(entity.getSurveyQuestionId());
            } else {
                surveyQuestionRepository.deleteSurveyAnswer(entity.getDeletedSurveyAnswerList());
                surveyQuestionRepository.update(entity);
            }
        } catch (javax.persistence.PersistenceException e) {
            throw new com.athena.framework.server.exception.repository.SpartanPersistenceException("Error in entity creation", e);
        } catch (Exception e) {
            throw new com.athena.framework.server.exception.repository.SpartanPersistenceException("Error while updating entity", e);
        }
    }

    public void update(List<SurveyQuestion> entity) throws SpartanPersistenceException {
        try {
            for (SurveyQuestion _surveyquestion : entity) {
                if (_surveyquestion.isHardDelete()) {
                    surveyQuestionRepository.delete(_surveyquestion.getSurveyQuestionId());
                } else {
                    surveyQuestionRepository.deleteSurveyAnswer(_surveyquestion.getDeletedSurveyAnswerList());
                    surveyQuestionRepository.update(_surveyquestion);
                }
            }
        } catch (javax.persistence.PersistenceException e) {
            throw new com.athena.framework.server.exception.repository.SpartanPersistenceException("Error in updating Entity", e);
        } catch (Exception e) {
            throw new com.athena.framework.server.exception.repository.SpartanPersistenceException("Error while updating entity", e);
        }
    }
}
