import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { saveFormData } from "../../Redux/Slices/CheckoutSlice";
import { toast } from "react-toastify";
import Payment from "./Payment";

const validationSchema = Yup.object({
  fullname: Yup.string().required("Full Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Must be exactly 10 digits")
    .max(10, "Must be exactly 10 digits")
    .required("Phone Number is required"),
  gender: Yup.string()
    .oneOf(["male", "female", "other"], "Invalid gender")
    .required("Gender is required"),
  address: Yup.string().required("Address is required"),
});

const CheckoutForm = () => {
  const formData = useSelector((state) => state.checkout.formData);
  const dispatch = useDispatch();
  console.log(formData);
  return (
    <div className="cart-items">
      Your Information
      {formData ? (
        <>
          <div className="data-display">
            <h2>Form Data</h2>
            <p>
              <strong>Full Name:</strong> {formData.fullname}
            </p>
            <p>
              <strong>Email:</strong> {formData.email}
            </p>
            <p>
              <strong>Phone Number:</strong> {formData.phoneNumber}
            </p>
            <p>
              <strong>Gender:</strong> {formData.gender}
            </p>
            <p>
              <strong>Address:</strong> {formData.address}
            </p>
          </div>
          <Payment />
        </>
      ) : (
        <Formik
          initialValues={{
            fullname: "",
            email: "",
            phoneNumber: "",
            gender: "",
            address: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values, "values");
            dispatch(saveFormData(values));
            toast.success("Form submitted successfully!");
          }}
        >
          {() => (
            <Form>
              <div>
                <label htmlFor="fullname">Full Name</label>
                <Field type="text" name="fullname" />
                <ErrorMessage name="fullname" component="div" />
              </div>
              <div>
                <label>Email</label>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" />
              </div>
              <div>
                <label>Phone Number</label>
                <Field type="text" name="phoneNumber" />
                <ErrorMessage name="phoneNumber" component="div" />
              </div>
              <div>
                <label>Gender</label>
                <Field as="select" name="gender">
                  <option value="" label="Select gender" />
                  <option value="male" label="Male" />
                  <option value="female" label="Female" />
                  <option value="other" label="Other" />
                </Field>
                <ErrorMessage name="gender" component="div" />
              </div>
              <div>
                <label>Address</label>
                <Field name="address" as="textarea" />
                <ErrorMessage name="address" component="div" />
              </div>
              <button className="btn" type="submit">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default CheckoutForm;
