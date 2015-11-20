package com.survey.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import com.survey.app.config.WebConfigExtended;
import org.springframework.test.context.ContextConfiguration;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import com.survey.app.server.repository.LoginRepository;
import com.survey.app.shared.authentication.Login;
import org.springframework.beans.factory.annotation.Autowired;
import com.athena.framework.server.helper.RuntimeLogInfoHelper;
import com.athena.framework.server.helper.EntityValidatorHelper;
import com.athena.framework.server.test.RandomValueGenerator;
import java.util.HashMap;
import com.spartan.healthmeter.entity.scheduler.ArtMethodCallStack;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.mock.web.MockHttpServletResponse;
import org.junit.Before;
import org.junit.After;
import com.athena.framework.shared.entity.web.entityInterface.CommonEntityInterface.RECORD_TYPE;
import org.junit.Test;
import com.survey.app.shared.contacts.CoreContacts;
import com.survey.app.server.repository.CoreContactsRepository;
import com.survey.app.shared.contacts.Gender;
import com.survey.app.server.repository.GenderRepository;
import com.survey.app.shared.location.Language;
import com.survey.app.server.repository.LanguageRepository;
import com.survey.app.shared.location.Timezone;
import com.survey.app.server.repository.TimezoneRepository;
import com.survey.app.shared.contacts.Title;
import com.survey.app.server.repository.TitleRepository;
import com.survey.app.shared.authentication.User;
import com.survey.app.server.repository.UserRepository;
import com.survey.app.shared.authentication.UserAccessDomain;
import com.survey.app.server.repository.UserAccessDomainRepository;
import com.survey.app.shared.authentication.UserAccessLevel;
import com.survey.app.server.repository.UserAccessLevelRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = WebConfigExtended.class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@TestExecutionListeners({ org.springframework.test.context.support.DependencyInjectionTestExecutionListener.class, org.springframework.test.context.support.DirtiesContextTestExecutionListener.class, org.springframework.test.context.transaction.TransactionalTestExecutionListener.class })
public class LoginTestCase {

    @Autowired
    private LoginRepository<Login> loginRepository;

    @Autowired
    private RuntimeLogInfoHelper runtimeLogInfoHelper;

    @Autowired
    private EntityValidatorHelper<Object> entityValidator;

    private RandomValueGenerator valueGenerator = new RandomValueGenerator();

    private static HashMap<String, Object> map = new HashMap<String, Object>();

    @Autowired
    private ArtMethodCallStack methodCallStack;

    protected MockHttpSession session;

    protected MockHttpServletRequest request;

    protected MockHttpServletResponse response;

    protected void startSession() {
        session = new MockHttpSession();
    }

    protected void endSession() {
        session.clearAttributes();
        session.invalidate();
        session = null;
    }

    protected void startRequest() {
        request = new MockHttpServletRequest();
        request.setSession(session);
        org.springframework.web.context.request.RequestContextHolder.setRequestAttributes(new org.springframework.web.context.request.ServletRequestAttributes(request));
    }

    protected void endRequest() {
        ((org.springframework.web.context.request.ServletRequestAttributes) org.springframework.web.context.request.RequestContextHolder.getRequestAttributes()).requestCompleted();
        org.springframework.web.context.request.RequestContextHolder.resetRequestAttributes();
        request = null;
    }

    @Before
    public void before() {
        startSession();
        startRequest();
        setBeans();
    }

    @After
    public void after() {
        endSession();
        endRequest();
    }

    private void setBeans() {
        runtimeLogInfoHelper.createRuntimeLogUserInfo(1, "AAAAA", request.getRemoteHost());
        org.junit.Assert.assertNotNull(runtimeLogInfoHelper);
        methodCallStack.setRequestId(java.util.UUID.randomUUID().toString().toUpperCase());
    }

    @Test
    public void test1Save() {
        try {
            CoreContacts corecontacts = new CoreContacts();
            corecontacts.setAge(42);
            corecontacts.setApproximateDOB(new java.sql.Date(123456789));
            corecontacts.setDateofbirth(new java.sql.Date(123456789));
            corecontacts.setEmailId("WobWpRgNkWWMPWUK74tHzC4wADb85nFnbCUbIPZB8rrG7SZ5FB");
            corecontacts.setFirstName("UR6ue5gE6SO7AJz56vqIf4W30fQ8YISUjDC1wsXnf1Px9KfrwP");
            Gender gender = new Gender();
            gender.setGender("JhCnLpgwnlhxjA69NqLn2fV2J2dYkQe2C4jXZ47f8qghZdqpkv");
            Gender GenderTest = genderRepository.save(gender);
            map.put("GenderPrimaryKey", gender._getPrimarykey());
            Language language = new Language();
            language.setAlpha2("65");
            language.setAlpha3("ocu");
            language.setAlpha4("7rzA");
            language.setAlpha4parentid(3);
            language.setLanguage("anGbjTZtfjQJENQisKyvOrVW0B7nWMlvrrAVcK95RyxDZmdguQ");
            language.setLanguageDescription("u6eaKF5pMfzBFTGtx9S5nW1oMVZ0mQCAUhieDVbxI5jUHFBlU5");
            language.setLanguageIcon("2OgEp0vienY6Z5hfzdbyktmfN37iG4UuGM4mD6QTLNpn0Vyr8N");
            language.setLanguageType("c3ODQmgPTyyDRrpYRcBBXMObDv1RDdWR");
            Language LanguageTest = languageRepository.save(language);
            map.put("LanguagePrimaryKey", language._getPrimarykey());
            Timezone timezone = new Timezone();
            timezone.setCities("x0SVus1GsN5zf860f6PwaNfRcBByOaAQ88PBcomZQ8nny8pJXT");
            timezone.setCountry("Yvo2frUfivcoSoo9G0rMn3QoctQ9ZjaG8II8EYzAwTJCOFRVTd");
            timezone.setGmtLabel("OTI8DiQDdTpLWhwxwtl4Rz6tPPF2VfW9yf7AtNOMiaFJTfWToT");
            timezone.setTimeZoneLabel("y5Bz6q0nQ4CAm9gHKokJ1Rl923tKUJ3SxOb9Nglhx0YGAJqtkA");
            timezone.setUtcdifference(1);
            Timezone TimezoneTest = timezoneRepository.save(timezone);
            map.put("TimezonePrimaryKey", timezone._getPrimarykey());
            Title title = new Title();
            title.setTitles("mLfHpY0UGQ1gysy73wiGhyC2xRQb3cBwv6OZD7pQAv2cGYbAF4");
            Title TitleTest = titleRepository.save(title);
            map.put("TitlePrimaryKey", title._getPrimarykey());
            corecontacts.setAge(97);
            corecontacts.setApproximateDOB(new java.sql.Date(123456789));
            corecontacts.setDateofbirth(new java.sql.Date(123456789));
            corecontacts.setEmailId("WEP7izoEr9PE9H4FYi2GXUMnNB9EFLfE7EsVWdq3vOPmK2obuI");
            corecontacts.setFirstName("W9NI4UkGKHtiJy19qPfmV5iP86BBAJsDELJSo8In4Y7SjQPwdy");
            corecontacts.setGenderId((java.lang.String) GenderTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setLastName("wvLbVHKsq4C4vlBuXHkDkj0rq0MjvUSaaV8KWDvFMAMbuhIs38");
            corecontacts.setMiddleName("v4DnHIF7mA3C7nP58rjR23JuTyVAXIDBpKKbEcCw4rA3SaaWHZ");
            corecontacts.setNativeFirstName("Io0lqyOIYGpiwuOEz3vTUz5bzuP9ELuNXMqF5d7d7FlOWETtqM");
            corecontacts.setNativeLanguageCode((java.lang.String) LanguageTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setNativeLastName("mNwJo7LyEUOP3DC8geZxrUOBbw9Xh2QH4Shzg8TG0NiHT2m1zN");
            corecontacts.setNativeMiddleName("dDQs91OpJu3F1OhSB6GY1zVZlVYXxCozJoLMKzDch9PMy7D7za");
            corecontacts.setNativeTitle("0us7Hi90U9JLNhlu5L4l99MSRMheepceFew3kwcFo472MFisAM");
            corecontacts.setPhoneNumber("k76WMcOgNXrn0xzlmk89");
            corecontacts.setTimeZone((java.lang.String) TimezoneTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setTitleId((java.lang.String) TitleTest._getPrimarykey()); /* ******Adding refrenced table data */
            User user = new User();
            user.setAllowMultipleLogin(1);
            user.setChangePasswordNextLogin(0);
            user.setGenTempOneTimePassword(0);
            user.setIsDeleted(0);
            user.setIsLocked(0);
            user.setLastPasswordChangeDate(new java.sql.Timestamp(123456789));
            user.setMultiFactorAuthEnabled(1);
            user.setPasswordAlgo("Ph1pieOvU7S2dYPrVsGkFMyJHv84lFcOUS36ibuQLKHFRZvFmf");
            user.setPasswordExpiryDate(new java.sql.Timestamp(123456789));
            user.setSessionTimeout(1048);
            user.setUserAccessCode(6);
            UserAccessDomain useraccessdomain = new UserAccessDomain();
            useraccessdomain.setDomainDescription("KrQAArhizvJJAHXnR3aT1VDLqsntAhD5PJJ7gZkTrSOp74tt4F");
            useraccessdomain.setDomainHelp("X0JNf3MjS31ex3ybI1nKQrw53eSw0lJSrbFOKhSu8ukAgaN978");
            useraccessdomain.setDomainIcon("DsL4l38DUQlFyFi7vEqHzFtZPtIAYCC1vACAQN1Jk8eRxz4wK0");
            useraccessdomain.setDomainName("yGXI0kFL3wl7QjSAWqfDwrzBeBy77G5uhN34yWi5LUDLyj1il6");
            useraccessdomain.setUserAccessDomain(valueGenerator.getRandomInteger(99999, 0));
            UserAccessDomain UserAccessDomainTest = useraccessdomainRepository.save(useraccessdomain);
            map.put("UserAccessDomainPrimaryKey", useraccessdomain._getPrimarykey());
            UserAccessLevel useraccesslevel = new UserAccessLevel();
            useraccesslevel.setLevelDescription("kTsrO3uY3BPOBGf3K0lUTMISfxY8vfV4S3Mke9hVQAaZxxWgiE");
            useraccesslevel.setLevelHelp("OS74CqkQsoN6UFHQSj9GwMLZPt4DJMNoEWnONNDiJghPXDITKS");
            useraccesslevel.setLevelIcon("SiATAvbnBeHDRFxday28Ek6FMpBj74wuVDwqPvyqz2LfoJPbfD");
            useraccesslevel.setLevelName("rUH5YtkuE36zcQ6RdjI1MhRp01gmXcPZwRAgbOFCA3BtO0OO8D");
            useraccesslevel.setUserAccessLevel(valueGenerator.getRandomInteger(99999, 0));
            UserAccessLevel UserAccessLevelTest = useraccesslevelRepository.save(useraccesslevel);
            map.put("UserAccessLevelPrimaryKey", useraccesslevel._getPrimarykey());
            user.setAllowMultipleLogin(1);
            user.setChangePasswordNextLogin(1);
            user.setGenTempOneTimePassword(0);
            user.setIsDeleted(0);
            user.setIsLocked(0);
            user.setLastPasswordChangeDate(new java.sql.Timestamp(123456789));
            user.setMultiFactorAuthEnabled(0);
            user.setPasswordAlgo("siAxalcb89XrNA7TGz8YaaVuHAIEUFczwNaDPA65GlCLDfq2ec");
            user.setPasswordExpiryDate(new java.sql.Timestamp(123456789));
            user.setSessionTimeout(3433);
            user.setUserAccessCode(4);
            user.setUserAccessDomainId((java.lang.String) UserAccessDomainTest._getPrimarykey()); /* ******Adding refrenced table data */
            user.setUserAccessLevelId((java.lang.String) UserAccessLevelTest._getPrimarykey());
            Login login = new Login();
            login.setCoreContacts(corecontacts);
            login.setFailedLoginAttempts(1);
            login.setIsAuthenticated(true);
            login.setLoginId("k9FirWwjfB7nXRpURfjI0lJLpIYqucVS2NiP7MJ18ixktO2kn9");
            login.setServerAuthImage("6PBoldOt3WRVp7cXxgz5xi5YHJIwesIo");
            login.setServerAuthText("M8zhOT4fINrZldkU");
            login.setUser(user);
            login.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            login.setEntityValidator(entityValidator);
            login.isValid();
            loginRepository.save(login);
            map.put("LoginPrimaryKey", login._getPrimarykey());
            map.put("CoreContactsPrimaryKey", login.getCoreContacts()._getPrimarykey());
            map.put("UserPrimaryKey", login.getUser()._getPrimarykey());
        } catch (com.athena.framework.server.exception.biz.SpartanConstraintViolationException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Autowired
    private CoreContactsRepository<CoreContacts> corecontactsRepository;

    @Autowired
    private GenderRepository<Gender> genderRepository;

    @Autowired
    private LanguageRepository<Language> languageRepository;

    @Autowired
    private TimezoneRepository<Timezone> timezoneRepository;

    @Autowired
    private TitleRepository<Title> titleRepository;

    @Autowired
    private UserRepository<User> userRepository;

    @Autowired
    private UserAccessDomainRepository<UserAccessDomain> useraccessdomainRepository;

    @Autowired
    private UserAccessLevelRepository<UserAccessLevel> useraccesslevelRepository;

    @Test
    public void test2Update() {
        try {
            org.junit.Assert.assertNotNull(map.get("LoginPrimaryKey"));
            Login login = loginRepository.findById((java.lang.String) map.get("LoginPrimaryKey"));
            login.setFailedLoginAttempts(11);
            login.setLoginId("mkpWEfJjxco2DvwomcznqiO17GXbXXL5VJXnDoehL0K1AceIjH");
            login.setServerAuthImage("3kzAQtGWd8BWjI896EUBwe8ug9S2QJuW");
            login.setServerAuthText("ahOWekrVx5Fn0wPV");
            login.setVersionId(1);
            login.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            loginRepository.update(login);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3FindById() {
        try {
            org.junit.Assert.assertNotNull(map.get("LoginPrimaryKey"));
            loginRepository.findById((java.lang.String) map.get("LoginPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void testNQFindMappedUser() {
        try {
            loginRepository.FindMappedUser();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void testNQFindUnMappedUser() {
        try {
            loginRepository.FindUnMappedUser();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test4Delete() {
        try {
            org.junit.Assert.assertNotNull(map.get("LoginPrimaryKey"));
            loginRepository.delete((java.lang.String) map.get("LoginPrimaryKey")); /* Deleting refrenced data */
            useraccesslevelRepository.delete((java.lang.String) map.get("UserAccessLevelPrimaryKey")); /* Deleting refrenced data */
            useraccessdomainRepository.delete((java.lang.String) map.get("UserAccessDomainPrimaryKey")); /* Deleting refrenced data */
            titleRepository.delete((java.lang.String) map.get("TitlePrimaryKey")); /* Deleting refrenced data */
            timezoneRepository.delete((java.lang.String) map.get("TimezonePrimaryKey")); /* Deleting refrenced data */
            languageRepository.delete((java.lang.String) map.get("LanguagePrimaryKey")); /* Deleting refrenced data */
            genderRepository.delete((java.lang.String) map.get("GenderPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }
}
