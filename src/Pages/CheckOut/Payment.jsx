import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { savePaymentMethod } from "../../Redux/Slices/CheckoutSlice";
import { toast } from "react-toastify";

const validationSchema = Yup.object({
  paymentMethod: Yup.string()
    .oneOf(["cod", "easypaisa", "jazzcash"], "Invalid payment method")
    .required("Payment method is required"),
});

const PaymentForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{ paymentMethod: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        dispatch(savePaymentMethod(values.paymentMethod));
        navigate("/ordersuccess");
        toast.success("Order Placed successfully!");
      }}
    >
      {() => (
        <Form>
          <h3>Select Payment Method</h3>
          <label>
            <Field type="radio" name="paymentMethod" value="cod" />
            Cash on Delivery (COD)
          </label>
          <label>
            <Field type="radio" name="paymentMethod" value="easypaisa" />
            EasyPaisa
          </label>
          <label>
            <Field type="radio" name="paymentMethod" value="jazzcash" />
            JazzCash
          </label>

          <button style={{ marginTop: "30px" }} className="btn" type="submit">
            Proceed to Payment
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default PaymentForm;
