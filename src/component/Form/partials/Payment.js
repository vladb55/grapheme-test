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
                    onChange={e => setCardNumber(e.target.value)}/>
            </div>
            <div className="form__line">
                <div className="form__wrap">
                    <div className="form__label">Срок</div>
                    <Input
                        placeholder="MM / YY"
                        error={expirationError}
                        onChange={e => setExpiration(e.target.value)}/>
                </div>
                <div className="form__wrap">
                    <div className="form__label">CVV</div>
                    <Input
                        placeholder=""
                        error={cvvError}
                        onChange={e => setCvv(e.target.value)}/>
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