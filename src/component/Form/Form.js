import React, {useState} from 'react';
import './Form.scss';
import Delivery from "./partials/Delivery";
import Payment from "./partials/Payment";
import Success from "./partials/Success";

function Form() {
    let [isSuccess, setSuccess] = useState(false);
    let [steps, setSteps] = useState(
        [
            { index: 1, name: 'Доставка', isActive: true },
            { index: 2, name: 'Оплата', isActive: false }
        ]
    );

    let stepClasses = [
        'form__step',
    ];
    
    function submitHandler(event) {
        event.preventDefault();

        if (!isSuccess) {
            setSuccess(() => true);
        }
    }

    function nextStep(currentStepIndex) {
        setSteps(steps.map(step => {
            step.index === currentStepIndex ? step.isActive = true : step.isActive = false;
            return step;
        }));
    }

    function showFormPartial(step) {
        switch (step) {
            case 1:
                return <Delivery
                    key={step}
                    nextStepIndex={step + 1}
                    toNextStep={nextStep}
                />
            case 2:
                return <Payment
                    key={step}
                />
            default:
                return <div
                    key={step}
                    className="form__crash">Opps! ...Unbelievable situation!</div>
        }
    }

    return (
        <form className="form" onSubmit={submitHandler}>
            {
                !isSuccess &&
                <div className="form__steps">
                    { steps.map((step, i) => {
                            return <div className={
                                step.isActive ?
                                    stepClasses.concat('form__step--active').join(' ') :
                                    stepClasses.join(' ')
                            }
                                        key={i}
                            >{ step.name }</div>
                        }
                    )}
                </div>
            }
            { !isSuccess ? (steps.map(step => step.isActive && showFormPartial(step.index))) : <Success />}
        </form>
    );
}

export default Form;