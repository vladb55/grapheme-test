import React, {useState} from 'react';
import {Input} from "semantic-ui-react";

function Payment() {
    let [nameOnCardError, setNameOnCardError] = useState(false);
    let [cardNumberError, setCardNumberError] = useState(false);
    let [expirationError, setExpirationError] = useState(false);
    let [cvvError, setCvvError] = useState(false);

    let [nameOnCard, setNameOnCard] = useState('');
    let [cardNumber, setCardNumber] = useState('');
    let [expiration, setExpiration] = useState('');
    let [cvv, setCvv] = useState('');

    function handleClick(e) {
        if (hasErrors()) {
            e.preventDefault();
        }
    }

    function hasErrors() {
        let hasError = false;

        nameOnCard.trim() === '' ? setNameOnCardError(true) : setNameOnCardError(false);
        cardNumber.trim() === '' ? setCardNumberError(true) : setCardNumberError(false);
        expiration.trim() === '' ? setExpirationError(true) : setExpirationError(false);
        cvv.trim()        === '' ? setCvvError(true)        : setCvvError(false);

        if (nameOnCard.trim() === ''  ||
            cardNumber.trim() === ''  ||
            expiration.trim() === ''  ||
            cvv.trim()        === '') {
            hasError = true;
        }

        return hasError;
    }

    function isNumber(value) {
        return !isNaN(value);
    }

    return (
        <div className="form__content form__content--payment">
            <div className="form__content-title">Оплата</div>
            <div className="form__wrap">
                <div className="form__label">Имя на карте</div>
                <Input
                    placeholder="Konstantin Ivanov"
                    error={nameOnCardError}
                    onChange={e => setNameOnCard(e.target.value)}/>
            </div>
            <div className="form__wrap">
                <div className="form__label">Номер карты</div>
                <Input
                    placeholder="XXXX XXXX XXXX XXXX"
                    error={cardNumberError}
                    minLength={16}
                    maxLength={16}
                    onChange={e => isNumber(e.target.value) && setCardNumber(e.target.value)}/>
            </div>
            <div className="form__line">
                <div className="form__wrap">
                    <div className="form__label">Срок</div>
                    <Input
                        placeholder="MM / YY"
                        error={expirationError}
                        minLength={4}
                        maxLength={4}
                        onChange={e => isNumber(e.target.value) && setExpiration(e.target.value)}/>
                </div>
                <div className="form__wrap">
                    <div className="form__label">CVV</div>
                    <Input
                        placeholder=""
                        error={cvvError}
                        minLength={3}
                        maxLength={3}
                        onChange={e => isNumber(e.target.value) && setCvv(e.target.value)}/>
                </div>
            </div>
            <button
                className="ui green button"
                type="submit"
                onClick={handleClick}>Отправить</button>
        </div>
    );
}

export default Payment;