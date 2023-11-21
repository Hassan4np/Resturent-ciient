import { loadStripe } from "@stripe/stripe-js";
import MainText from "../../Global/MainText";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";


const Prement = () => {
    const stripePromise = loadStripe('pk_test_51OEPdIHKytLp2A16Cjv5PQcXUgtdyiQTZKkFqjUbfZNy3VvtwbRpe73KoaH8CUUZSddMAFzeqVDXYShhdIgtVGWK00iRplvTmU');
    // const stripePromise = loadStripe(import.meta.env.VITE_PAYENT_GET_PK);
    return (
        <div>
            <MainText text="PREMENT"></MainText>
            <div>
                <Elements stripe={stripePromise}>
               <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Prement;