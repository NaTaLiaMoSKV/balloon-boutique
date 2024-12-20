import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import * as Yup from "yup";

import {
  FormContainer,
  Title,
  Input,
  Select,
  CheckboxLabel,
  Button,
  ErrorText,
  DeliveryTimeContainer,
  UserSection,
  PayContainer,
  UserSectionWrapper,
  StyledLabel,
} from "./UserForm.styled";
import { Header } from "components/Header/Header";
import { BackButton } from "components/BalloonSubsection/BalloonSubsection.styled";
import { useLocation, useNavigate } from "react-router-dom";
import { DatePicker, TimePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { calculateTotalPrice } from "utils/calculateTotalPrice";
import { useCart } from "state/CartContext";
import { Payment } from "components/Payment/Payment";

const districts = [
  { name: "Аркадія", fee: 200 },
  { name: "Центр", fee: 0 },
  { name: "Молдованка", fee: 0 },
  { name: "Слобідка", fee: 200 },
  { name: "Фонтан", fee: 200 },
  { name: "Черемушки", fee: 200 },
  { name: "Таїрова ближнє", fee: 200 },
  { name: "Таїрова дальнє", fee: 300 },
  { name: "Совіньон", fee: 300 },
  { name: "Царське село", fee: 300 },
  { name: "Дача Ковалевсьокго", fee: 300 },
  { name: "Червоний хутір", fee: 300 },
  { name: "Селище Котовського", fee: 300 },
];

const SaveToLocalStorage = ({ isInitialLoaded }) => {
  const { values } = useFormikContext();

  useEffect(() => {
    if (isInitialLoaded) {
      localStorage.setItem("userForm", JSON.stringify(values));
    }
  }, [values, isInitialLoaded]);

  return null;
};

export const UserForm = () => {
  const { cart } = useCart();
  const [sumbitted, setSubmitted] = useState(false);
  const [additionalFee, setAdditionalFee] = useState(0);
  const [initialValues, setInitialValues] = useState(null);
  const [isInitialLoaded, setIsInitialLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const now = new Date();
    now.setHours(now.getHours(), now.getMinutes() + 120, 0, 0);
  }, []);

  useEffect(() => {
    const savedData = localStorage.getItem("userForm");
    if (savedData) {
      setInitialValues(JSON.parse(savedData));
    } else {
      setInitialValues({
        name: "",
        email: "",
        phone: "",
        isOtherRecipient: false,
        recipientName: "",
        recipientPhone: "",
        district: "",
        street: "",
        houseNumber: "",
        deliveryLocation: "",
        deliveryDate: null,
        deliveryTime: null,
        isDelayedDelivery: false,
      });
    }
    setIsInitialLoaded(true);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow;
  };

  const disablePastDates = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const getDefaultTime = () => {
    const time = new Date();
    time.setHours(9, 0, 0, 0);
    return time;
  };

  const goBack = () => {
    navigate(-1);
    if (window.history.state === null) {
      navigate("/cart");
    }
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Ім'я є обов'язковим"),
    email: Yup.string().email("Невірний формат email"),
    phone: Yup.string()
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Невірний формат"
      )
      .required("Номер телефону є обов'язковим"),
    isOtherRecipient: Yup.boolean(),
    recipientName: Yup.string().when("isOtherRecipient", {
      is: true,
      then: () => Yup.string().required("Ім'я отримувача є обов'язковим"),
      otherwise: () => Yup.string(),
    }),
    recipientPhone: Yup.string().when("isOtherRecipient", {
      is: true,
      then: () =>
        Yup.string()
          .matches(
            /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
            "Невірний формат"
          )
          .required("Номер телефону отримувача є обов'язковим"),
      otherwise: () => Yup.string(),
    }),
    district: Yup.string().required("Оберіть район"),
    street: Yup.string().required("Вкажіть вулицю"),
    houseNumber: Yup.string().required("Вкажіть номер будинку"),
    deliveryLocation: Yup.string().required("Оберіть місце доставки"),

    isDelayedDelivery: Yup.boolean().required("Виберіть тип доставки"),
    deliveryDate: Yup.string().when("isDelayedDelivery", {
      is: true,
      then: () => Yup.string().required("Оберіть дату доставки"),
      otherwise: () => Yup.string().nullable(),
    }),
    deliveryTime: Yup.string().when("isDelayedDelivery", {
      is: true,
      then: () => Yup.string().required("Оберіть час доставки"),
      otherwise: () => Yup.string().nullable(),
    }),
  });

  const handleDistrictChange = (e, setFieldValue) => {
    const selectedDistrict = districts.find((d) => d.name === e.target.value);
    setAdditionalFee(selectedDistrict ? selectedDistrict.fee : 0);
    setFieldValue("district", e.target.value);
  };

  if (!initialValues) return <div>Loading...</div>;

  return (
    <>
      <Header />
      <section style={{ marginTop: "130px" }}>
        <BackButton onClick={goBack} style={{ marginBottom: "20px" }}>
          <span>&#x27F5;</span> Повернутися до кошика
        </BackButton>
        <FormContainer>
          <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={validationSchema}
            // onSubmit={handleSubmit}
            ationSchema={validationSchema}
            onSubmit={(values) => {
              // console.log("Збережені дані:", { ...values, additionalFee });
              setSubmitted(true);
            }}
          >
            {({ values, setFieldValue }) => (
              <Form>
                {/* Блок 1: Дані користувача */}
                <UserSection>
                  <Title>1. Ваші дані</Title>
                  <UserSectionWrapper className="user-data">
                    <div>
                      <Field
                        as={Input}
                        name="name"
                        autoComplete="name"
                        placeholder="Ім'я"
                        inputMode="text"
                        autoCapitalize="words"
                      />
                      <ErrorMessage name="name" component={ErrorText} />
                    </div>

                    <div>
                      <Field
                        as={Input}
                        name="email"
                        autoComplete="email"
                        placeholder="Електронна пошта"
                        inputMode="email"
                      />
                      <ErrorMessage name="email" component={ErrorText} />
                    </div>
                    <div>
                      <Field
                        as={Input}
                        name="phone"
                        autoComplete="tel"
                        placeholder="Номер телефону"
                        inputMode="tel"
                      />
                      <ErrorMessage name="phone" component={ErrorText} />
                    </div>
                  </UserSectionWrapper>
                </UserSection>

                {/* Блок 2: Час доставки */}
                <UserSection>
                  <Title>2. Час доставки</Title>
                  <DeliveryTimeContainer>
                    <StyledLabel>
                      <Field
                        as={Input}
                        type="radio"
                        name="isDelayedDelivery"
                        value={false}
                        onChange={() =>
                          setFieldValue("isDelayedDelivery", false)
                        }
                      />
                      Якнайшвидше
                    </StyledLabel>
                    <StyledLabel>
                      <Field
                        as={Input}
                        type="radio"
                        name="isDelayedDelivery"
                        value={true}
                        onChange={() =>
                          setFieldValue("isDelayedDelivery", true)
                        }
                      />
                      На певний час
                    </StyledLabel>
                  </DeliveryTimeContainer>

                  {values.isDelayedDelivery && (
                    <UserSectionWrapper>
                      <div className="container">
                        <label
                          style={{ marginBottom: "5px", fontSize: "15px" }}
                        >
                          День доставки:
                        </label>
                        <DatePicker
                          style={{ width: "100%" }}
                          shouldDisableDate={disablePastDates}
                          cleanable={false}
                          defaultValue={getTomorrowDate()}
                          onChange={(date) => {
                            const formattedDate = `${
                              date.getDate() < 10
                                ? "0" + date.getDate()
                                : date.getDate()
                            }.${
                              date.getMonth() + 1 < 10
                                ? "0" + (date.getMonth() + 1)
                                : date.getMonth() + 1
                            }.${date.getFullYear()}`;
                            setFieldValue("deliveryDate", formattedDate);
                          }}
                        />
                        <ErrorMessage
                          name="deliveryDate"
                          component={ErrorText}
                        />
                      </div>
                      <div className="container">
                        <label
                          style={{ marginBottom: "5px", fontSize: "15px" }}
                        >
                          Час доставки:
                        </label>
                        <TimePicker
                          format="HH:mm"
                          style={{ width: "100%" }}
                          cleanable={false}
                          defaultValue={getDefaultTime()}
                          shouldDisableDate={disablePastDates}
                          shouldDisableHour={(hour) => {
                            return hour < 6 || hour > 22;
                          }}
                          onChange={(date) => {
                            const formattedTime = `${date.getHours()}:${
                              date.getMinutes() < 10
                                ? "0" + date.getMinutes()
                                : date.getMinutes()
                            }`;
                            console.log("new time: " + formattedTime);
                            setFieldValue("deliveryTime", formattedTime);
                          }}
                        />
                        <ErrorMessage
                          name="deliveryDate"
                          component={ErrorText}
                        />
                      </div>
                    </UserSectionWrapper>
                  )}
                </UserSection>

                {/* Блок 3: Інший отримувач */}
                <UserSection>
                  <CheckboxLabel>
                    <Field
                      type="checkbox"
                      as={Input}
                      name="isOtherRecipient"
                      onChange={(e) => {
                        setFieldValue("isOtherRecipient", e.target.checked);
                      }}
                    />
                    Інший отримувач
                  </CheckboxLabel>

                  {values.isOtherRecipient && (
                    <UserSectionWrapper>
                      <div>
                        <Field
                          as={Input}
                          name="recipientName"
                          placeholder="Ім'я отримувача"
                        />
                        <ErrorMessage
                          name="recipientName"
                          component={ErrorText}
                        />
                      </div>

                      <div>
                        <Field
                          as={Input}
                          name="recipientPhone"
                          placeholder="Телефон отримувача"
                        />
                        <ErrorMessage
                          name="recipientPhone"
                          component={ErrorText}
                        />
                      </div>
                    </UserSectionWrapper>
                  )}
                </UserSection>

                {/* Блок 4: Адреса доставки */}
                <UserSection>
                  <Title>3. Адреса доставки</Title>

                  <UserSectionWrapper>
                    <div>
                      <Field
                        as={Select}
                        name="district"
                        onChange={(e) => handleDistrictChange(e, setFieldValue)}
                      >
                        <option value="" disabled>
                          Оберіть район
                        </option>
                        {districts.map((district) => (
                          <option key={district.name} value={district.name}>
                            {district.name}{" "}
                            {district.fee > 0 ? `(+${district.fee} грн)` : ""}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage name="district" component={ErrorText} />
                    </div>

                    <div>
                      <Field as={Input} name="street" placeholder="Вулиця" />
                      <ErrorMessage name="street" component={ErrorText} />
                    </div>

                    <div>
                      <Field
                        as={Input}
                        name="houseNumber"
                        placeholder="Номер будинку"
                      />
                      <ErrorMessage name="houseNumber" component={ErrorText} />
                    </div>

                    <div>
                      <Field as={Select} name="deliveryLocation">
                        <option value="" disabled>
                          Куди доставка?
                        </option>
                        <option value="Частний будинок">Частний будинок</option>
                        <option value="Під'їзд">Під'їзд</option>
                        <option value="Офіс">Офіс</option>
                        <option value="Інше">Інше</option>
                      </Field>
                      <ErrorMessage
                        name="deliveryLocation"
                        component={ErrorText}
                      />
                    </div>
                  </UserSectionWrapper>
                </UserSection>

                <PayContainer>
                  <p>
                    До сплати:{" "}
                    <span style={{ whiteSpace: "nowrap" }}>
                      {calculateTotalPrice(cart) + additionalFee} ₴
                    </span>
                  </p>
                  <Button type="submit"> Перейти до оплати</Button>
                </PayContainer>
                <SaveToLocalStorage isInitialLoaded={isInitialLoaded} />
              </Form>
            )}
          </Formik>
        </FormContainer>
        {sumbitted && <Payment />}
      </section>
    </>
  );
};
