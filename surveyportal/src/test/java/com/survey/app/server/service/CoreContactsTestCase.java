package com.survey.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import com.survey.app.config.WebConfigExtended;
import org.springframework.test.context.ContextConfiguration;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import com.survey.app.server.repository.CoreContactsRepository;
import com.survey.app.shared.contacts.CoreContacts;
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
import com.survey.app.shared.contacts.Gender;
import com.survey.app.server.repository.GenderRepository;
import com.survey.app.shared.location.Language;
import com.survey.app.server.repository.LanguageRepository;
import com.survey.app.shared.location.Timezone;
import com.survey.app.server.repository.TimezoneRepository;
import com.survey.app.shared.contacts.Title;
import com.survey.app.server.repository.TitleRepository;
import com.survey.app.shared.contacts.CommunicationData;
import com.survey.app.shared.contacts.CommunicationGroup;
import com.survey.app.server.repository.CommunicationGroupRepository;
import com.survey.app.shared.contacts.CommunicationType;
import com.survey.app.server.repository.CommunicationTypeRepository;
import com.survey.app.shared.location.Address;
import com.survey.app.server.repository.AddressRepository;
import com.survey.app.shared.location.AddressType;
import com.survey.app.server.repository.AddressTypeRepository;
import com.survey.app.shared.location.City;
import com.survey.app.server.repository.CityRepository;
import com.survey.app.shared.location.Country;
import com.survey.app.server.repository.CountryRepository;
import com.survey.app.shared.location.State;
import com.survey.app.server.repository.StateRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = WebConfigExtended.class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@TestExecutionListeners({ org.springframework.test.context.support.DependencyInjectionTestExecutionListener.class, org.springframework.test.context.support.DirtiesContextTestExecutionListener.class, org.springframework.test.context.transaction.TransactionalTestExecutionListener.class })
public class CoreContactsTestCase {

    @Autowired
    private CoreContactsRepository<CoreContacts> corecontactsRepository;

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
            Gender gender = new Gender();
            gender.setGender("FQC7AMVy9yLknsOle9rdKZF6khEJpTRv26OpGdgCLlkMZY4snj");
            Gender GenderTest = genderRepository.save(gender);
            map.put("GenderPrimaryKey", gender._getPrimarykey());
            Language language = new Language();
            language.setAlpha2("HZ");
            language.setAlpha3("JSv");
            language.setAlpha4("k4G9");
            language.setAlpha4parentid(5);
            language.setLanguage("fzO5PuHiW0wLNUL5cogZkLRwqzURE3WZZMFHAqnBPQZG6tIxxP");
            language.setLanguageDescription("I1IjfZPSzostDdGKeqC0b8uY0EZ6v8A9GSBZ8Gy1m2C13IOq0y");
            language.setLanguageIcon("SOdFTdGq9OvrI5LWGOYnbRPcEOxY6wJA7ZxfDvejvDiwl55vgd");
            language.setLanguageType("Ph7E375ZHVsCCBVNc2ubXTQMJoYMeYEP");
            Language LanguageTest = languageRepository.save(language);
            map.put("LanguagePrimaryKey", language._getPrimarykey());
            Timezone timezone = new Timezone();
            timezone.setCities("JSZG4anRTnCrR9U9L2fl77KcK8U21j13QOaP0EwriMTSs6SkI1");
            timezone.setCountry("oMY6GgPRu9j9X5HS8XjBmAPAh6RliNCdkHS7jFaOwmDPiWuuXV");
            timezone.setGmtLabel("zkLQodzA07aATTGLkNfiRDsmrT9leOUD5q7D1oWR8ZlG5XdFt3");
            timezone.setTimeZoneLabel("7DkknfYSyOKh1UQ9syDKujfmhaic63r6NgocqLt8nirfAvHl16");
            timezone.setUtcdifference(2);
            Timezone TimezoneTest = timezoneRepository.save(timezone);
            map.put("TimezonePrimaryKey", timezone._getPrimarykey());
            Title title = new Title();
            title.setTitles("cr2lqWAStWXx5TBUDfILw6exhJwssvwfyaXpl4iudVLAch3z90");
            Title TitleTest = titleRepository.save(title);
            map.put("TitlePrimaryKey", title._getPrimarykey());
            CoreContacts corecontacts = new CoreContacts();
            corecontacts.setAge(63);
            corecontacts.setApproximateDOB(new java.sql.Date(123456789));
            corecontacts.setDateofbirth(new java.sql.Date(123456789));
            corecontacts.setEmailId("fLyQoooTvo3nT0ATUc5BK8wG0FoMuq6tlzBkITlUkZMyZN7POR");
            corecontacts.setFirstName("mKcAo9wqqXdMktVBfoBnZLgvzOqx3WUVL022r3UIQ7olK93Yiu");
            corecontacts.setGenderId((java.lang.String) GenderTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setLastName("2MBenQ5l4QlCdPwo5LCHlZ8mgNMwvRmoOZavmOB8AwdL90DUpk");
            corecontacts.setMiddleName("6hecJBXMhoEC3Qv5bioiEDMwlneXVsyp1h4hydnk36f4cPG3RP");
            corecontacts.setNativeFirstName("Vc1l4FlBRTZfeD6rRAdiGVAJ3RIo3vJhGnLjQCJelituzRQDAS");
            corecontacts.setNativeLanguageCode((java.lang.String) LanguageTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setNativeLastName("bHKjSoVvjeA8Ft3pkruZpcfLdJWTFCD1TZRWqvoj3t8zIZ2OQk");
            corecontacts.setNativeMiddleName("a0BraPevkKkPnTtvsci2wgTbVIsd78K1PmcN4UOre5eVD0PgPh");
            corecontacts.setNativeTitle("WSgyveHvLAmN85YHHOWj0CsyEHJUWY3OJ67pmWW6bbXCFHfdPl");
            corecontacts.setPhoneNumber("YF82tvGSqoFoqRLkW8mA");
            corecontacts.setTimeZone((java.lang.String) TimezoneTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setTitleId((java.lang.String) TitleTest._getPrimarykey()); /* ******Adding refrenced table data */
            java.util.List<CommunicationData> listOfCommunicationData = new java.util.ArrayList<CommunicationData>();
            CommunicationData communicationdata = new CommunicationData();
            communicationdata.setCommData("RKo");
            CommunicationGroup communicationgroup = new CommunicationGroup();
            communicationgroup.setCommGroupDescription("Kz3Jup3nlCGJUe9w7yhJS3ftnfcACOELUe63OwAHAryZSf61ul");
            communicationgroup.setCommGroupName("CqayVZLUqE4CQvKMNNm21LEm6bSfJsEfVAZ7LybmoPbiHc9pBX");
            CommunicationGroup CommunicationGroupTest = communicationgroupRepository.save(communicationgroup);
            map.put("CommunicationGroupPrimaryKey", communicationgroup._getPrimarykey());
            CommunicationType communicationtype = new CommunicationType();
            communicationtype.setCommGroupId((java.lang.String) CommunicationGroupTest._getPrimarykey()); /* ******Adding refrenced table data */
            communicationtype.setCommTypeDescription("J0PTKXzVyxEZXUmSpjCsINN7Wvfxg5dV2GUFgFlP1YLSP6oOJR");
            communicationtype.setCommTypeName("8Fe8E8Ej6O7M3QinaX1U91OPcyqT4hyeDIh6QRjEorAy6NV8NR");
            CommunicationType CommunicationTypeTest = communicationtypeRepository.save(communicationtype);
            map.put("CommunicationTypePrimaryKey", communicationtype._getPrimarykey());
            communicationdata.setCommData("lPZ");
            communicationdata.setCommGroupId((java.lang.String) CommunicationGroupTest._getPrimarykey()); /* ******Adding refrenced table data */
            communicationdata.setCommType((java.lang.String) CommunicationTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            listOfCommunicationData.add(communicationdata);
            corecontacts.addAllCommunicationData(listOfCommunicationData);
            java.util.List<Address> listOfAddress = new java.util.ArrayList<Address>();
            Address address = new Address();
            address.setAddress1("KnW9XgzwOZX7dBhbLvpxyJSODZ35Vi9dnCAafzfmFoEoYWBeZ7");
            address.setAddress2("a8I8ccP57c9ErT6DieRzaEm2hwTI3sGQEOJpqQwMlATPJfJqXk");
            address.setAddress3("6Pg47Z9FMTlqLA9qWzoE4OGx3cdbgDqz5MQLMtRdimXwIVYFpi");
            address.setAddressLabel("mgS31rxCD3m");
            AddressType addresstype = new AddressType();
            addresstype.setAddressType("679cq4eWtktFUrWBW4MN2SCqrQvC6fFjVfk8MO212wg7uArnCS");
            addresstype.setAddressTypeDesc("nv6UBpz64PU71MZKuqyue0HsuyLnKvPyoMZiYkH1PyAc8QOLzD");
            addresstype.setAddressTypeIcon("NZbz52mbcEfOUAM9mW2UH6tGEBPHxYOOgOwIsvdn9p2c90JHsT");
            AddressType AddressTypeTest = addresstypeRepository.save(addresstype);
            map.put("AddressTypePrimaryKey", addresstype._getPrimarykey());
            City city = new City();
            city.setCityCode(3);
            city.setCityCodeChar2("nuCLQJEXSClzEZeTBBYIelibtiqJUXxj");
            city.setCityDescription("hiwHxvOopGzOLQxAqgLnIhRqK41qgGI2ssE1HzgQ7R23r6EhkJ");
            city.setCityFlag("3jtMo9SaTjAqkrCdahjybiU9ImEPXVvuPGGOkClE9OwMjXc6ih");
            city.setCityLatitude(8);
            city.setCityLongitude(11);
            city.setCityName("pZ7AEu4wWHKXXwvnag5FPIbcbOzEjlZEMp6IQKVsSih1Q8wf1q");
            Country country = new Country();
            country.setCapital("ybgV1iLPZP99e9TW5zdtMu4XiX00sjN9");
            country.setCapitalLatitude(5);
            country.setCapitalLongitude(10);
            country.setCountryCode1("4pw");
            country.setCountryCode2("G7S");
            country.setCountryFlag("KBPFgygBGvxuhGGB0CdyWeq7MrFB4IKpUIpzDSWFxfqdeGUznn");
            country.setCountryName("VZWvafIMxcy6OPJBLfZX2y5SexkAFsKTDkaTJFPyRkIrlT9yEf");
            country.setCurrencyCode("a3d");
            country.setCurrencyName("qBSbhFx5EpR1kHPH4MIJIQ3Tv4Hia0ZNopGGIQyb9Rric2HGoA");
            country.setCurrencySymbol("eLjfAyM0LJexxlfyZ5GauCrMVpn9Xxks");
            country.setIsoNumeric(10);
            Country CountryTest = countryRepository.save(country);
            map.put("CountryPrimaryKey", country._getPrimarykey());
            State state = new State();
            state.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            state.setStateCapital("KqA7ter4N8PutHRiB60LBiuUqoWHwqEm6Pkp2IiiNa6f2J2LQW");
            state.setStateCapitalLatitude(2);
            state.setStateCapitalLongitude(0);
            state.setStateCode(1);
            state.setStateCodeChar2("SIhXepjckF63aVqG4cG2wNyh9NNKMDty");
            state.setStateCodeChar3("zmRvt5WYyN2J4Ncm9HbKxHpwVlwWDRnf");
            state.setStateDescription("BvGKb3thTl4680IuiJRZje2ovQttJjQvls3rjfzHgZM2wCyRe6");
            state.setStateFlag("TV8E5oMB3d8pPhkQhKHCJjaxFCFUCYojGOx1tCwic63LxcJjJ6");
            state.setStateName("IVrucwqqBgXnJ4c3yJH1K8Fj9zuq4BrzCNKgUKR0vezbvVXQoJ");
            State StateTest = stateRepository.save(state);
            map.put("StatePrimaryKey", state._getPrimarykey());
            city.setCityCode(2);
            city.setCityCodeChar2("dZ3wZQIr34F2nNvt0skH66bmasIcx4y9");
            city.setCityDescription("yt2K4xrpS0dBnugg5IaPmAKEqS15KWf3nB9OI73Pg4W9TcIyem");
            city.setCityFlag("1ouC3EV1NyKEZ8u3WuCMFsuuNeHibLHqB4YsnQlyjHF3P9i868");
            city.setCityLatitude(2);
            city.setCityLongitude(4);
            city.setCityName("B55hQ7yN5WAwbzgQ1abT81QL5XP8UAM7tDadjq9EM2aT7G8DOV");
            city.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            city.setStateId((java.lang.String) StateTest._getPrimarykey()); /* ******Adding refrenced table data */
            City CityTest = cityRepository.save(city);
            map.put("CityPrimaryKey", city._getPrimarykey());
            address.setAddress1("qG3ylvIch0DNj1CwtfbN37uEo4WOQ5kV1ER5UZLo5NEtj2jyKk");
            address.setAddress2("BbHR5MZs9J5WMaW3FFJ5IBSWwdNXRSeyeYRPiqdgWlu89rJZ1Z");
            address.setAddress3("l1chUExQAWn64Eu9iQ53uKs2Z3CA3fnofxS3m0mddGVYJ8H4D5");
            address.setAddressLabel("Pr1z2pV1QgA");
            address.setAddressTypeId((java.lang.String) AddressTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            address.setCityId((java.lang.String) CityTest._getPrimarykey()); /* ******Adding refrenced table data */
            address.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            address.setLatitude("bEelb3OCtYFuV78i7iDBaXvB5Irz2DiSmdVvFILG2LtyCzUBav");
            address.setLongitude("dLWspIaNxyT50iXJ25aCTm9sHEvFRUGtdpPaWHeX2F4erjsrjp");
            address.setStateId((java.lang.String) StateTest._getPrimarykey());
            address.setZipcode("jTmf8v");
            listOfAddress.add(address);
            corecontacts.addAllAddress(listOfAddress);
            corecontacts.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            corecontacts.setEntityValidator(entityValidator);
            corecontacts.isValid();
            corecontactsRepository.save(corecontacts);
            map.put("CoreContactsPrimaryKey", corecontacts._getPrimarykey());
        } catch (com.athena.framework.server.exception.biz.SpartanConstraintViolationException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Autowired
    private GenderRepository<Gender> genderRepository;

    @Autowired
    private LanguageRepository<Language> languageRepository;

    @Autowired
    private TimezoneRepository<Timezone> timezoneRepository;

    @Autowired
    private TitleRepository<Title> titleRepository;

    @Autowired
    private CommunicationGroupRepository<CommunicationGroup> communicationgroupRepository;

    @Autowired
    private CommunicationTypeRepository<CommunicationType> communicationtypeRepository;

    @Autowired
    private AddressRepository<Address> addressRepository;

    @Autowired
    private AddressTypeRepository<AddressType> addresstypeRepository;

    @Autowired
    private CityRepository<City> cityRepository;

    @Autowired
    private CountryRepository<Country> countryRepository;

    @Autowired
    private StateRepository<State> stateRepository;

    @Test
    public void test2Update() {
        try {
            org.junit.Assert.assertNotNull(map.get("CoreContactsPrimaryKey"));
            CoreContacts corecontacts = corecontactsRepository.findById((java.lang.String) map.get("CoreContactsPrimaryKey"));
            corecontacts.setAge(78);
            corecontacts.setApproximateDOB(new java.sql.Date(123456789));
            corecontacts.setDateofbirth(new java.sql.Date(123456789));
            corecontacts.setEmailId("HKAvqr3r910GSPHmkfQMSO1mK41DFYpGnkFBzkbqefDJ6LYNSP");
            corecontacts.setFirstName("Y4NnVqaLTPKQeEQKYTiIYQf1kMz7I1pSyGgTXlvPItNxu1tsyY");
            corecontacts.setLastName("T1wOXL04P1pVQeuIxhfsDdmjMEKdpD8ViaVDKvwzBxytgO7BGT");
            corecontacts.setMiddleName("peJdUE5YKaQ7Um5NGMEF0hsVw6KgRLlUcchA1c2ICGJmmVGYoX");
            corecontacts.setNativeFirstName("IkMmkfj1xeuqacdJm2w8ZPKBQWvGKkzWlitQtUTw0ayqETb5Yr");
            corecontacts.setNativeLastName("pagA6RsVWXgzBz1hncXtzY8Y3JwdEBmXOyPf0hvsdfweCN4KZx");
            corecontacts.setNativeMiddleName("aoSQaNxs8eo0Q6z1QDNyCD877XY4HFvCVNMsNB6IVtg4rLMWVh");
            corecontacts.setNativeTitle("BteufaTrLurhvTR9aHGIMj5ERYAE0k6xl5u7hO9LkADH40W8Kq");
            corecontacts.setPhoneNumber("atbj7S0RyFXOt1MoNgdT");
            corecontacts.setVersionId(1);
            corecontacts.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            corecontactsRepository.update(corecontacts);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3FindById() {
        try {
            org.junit.Assert.assertNotNull(map.get("CoreContactsPrimaryKey"));
            corecontactsRepository.findById((java.lang.String) map.get("CoreContactsPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findBygenderId() {
        try {
            java.util.List<CoreContacts> listofgenderId = corecontactsRepository.findByGenderId((java.lang.String) map.get("GenderPrimaryKey"));
            if (listofgenderId.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findBynativeLanguageCode() {
        try {
            java.util.List<CoreContacts> listofnativeLanguageCode = corecontactsRepository.findByNativeLanguageCode((java.lang.String) map.get("LanguagePrimaryKey"));
            if (listofnativeLanguageCode.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findBytimeZone() {
        try {
            java.util.List<CoreContacts> listoftimeZone = corecontactsRepository.findByTimeZone((java.lang.String) map.get("TimezonePrimaryKey"));
            if (listoftimeZone.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findBytitleId() {
        try {
            java.util.List<CoreContacts> listoftitleId = corecontactsRepository.findByTitleId((java.lang.String) map.get("TitlePrimaryKey"));
            if (listoftitleId.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test4Delete() {
        try {
            org.junit.Assert.assertNotNull(map.get("CoreContactsPrimaryKey"));
            corecontactsRepository.delete((java.lang.String) map.get("CoreContactsPrimaryKey")); /* Deleting refrenced data */
            cityRepository.delete((java.lang.String) map.get("CityPrimaryKey")); /* Deleting refrenced data */
            stateRepository.delete((java.lang.String) map.get("StatePrimaryKey")); /* Deleting refrenced data */
            countryRepository.delete((java.lang.String) map.get("CountryPrimaryKey")); /* Deleting refrenced data */
            addresstypeRepository.delete((java.lang.String) map.get("AddressTypePrimaryKey")); /* Deleting refrenced data */
            communicationtypeRepository.delete((java.lang.String) map.get("CommunicationTypePrimaryKey")); /* Deleting refrenced data */
            communicationgroupRepository.delete((java.lang.String) map.get("CommunicationGroupPrimaryKey")); /* Deleting refrenced data */
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
