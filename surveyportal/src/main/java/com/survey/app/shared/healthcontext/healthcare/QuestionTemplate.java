package com.survey.app.shared.healthcontext.healthcare;
import javax.validation.constraints.Min;
import javax.validation.constraints.Max;
import java.util.ArrayList;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class QuestionTemplate {

    @Min(0)
    @Max(65535)
    private String surveyQuestionName;

    @Min(0)
    @Max(65535)
    private String surveyQuestionId;

    @Min(0)
    @Max(65535)
    private ArrayList<String> surveyAnswer;

    public String getSurveyQuestionName() {
        return surveyQuestionName;
    }

    public void setSurveyQuestionName(String _surveyQuestionName) {
        this.surveyQuestionName = _surveyQuestionName;
    }

    public String getSurveyQuestionId() {
        return surveyQuestionId;
    }

    public void setSurveyQuestionId(String _surveyQuestionId) {
        this.surveyQuestionId = _surveyQuestionId;
    }

    public ArrayList<String> getSurveyAnswer() {
        return surveyAnswer;
    }

    public void setSurveyAnswer(ArrayList<String> _surveyAnswer) {
        this.surveyAnswer = _surveyAnswer;
    }
}
