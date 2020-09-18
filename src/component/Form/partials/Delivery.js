import React, {useState} from 'react';
import { Input, Dropdown, Button } from 'semantic-ui-react';

const countryOptions = [
    { key: 'us', value: 'us', flag: 'us', text: 'США' },
    { key: 'ru', value: 'ru', flag: 'ru', text: 'Россия' },
    { key: 'uk', value: 'uk', flag: 'uk', text: 'Великобритания' },
    { key: 'ua', value: 'ua', flag: 'ua', text: 'Украина' },
];

function Delivery({ nextStepIndex, toNextStep }) {
    let [fullNameError, setFullNameError] = useState(false);
    let [cityError, setCityError] = useState(false);
    let [addressError, setAddressError] = useState(false);
    let [countryError, setCountryError] = useState(false);
    let [indexError, setIndexError] = useState(false);

    let [fullName, setFullName] = useState('');
    let [city, setCity] = useState('');
    let [address, setAddress] = useState('');
    let [country, setCountry] = useState('');
    let [index, setIndex] = useState('');

    function handleClick(e) {
        e.preventDefault();

        if (!hasErrors()) {
            toNextStep(nextStepIndex);
        }
    }

    function hasErrors() {
        let hasError = false;

        fullName.trim() === '' ? setFullNameError(true) : setFullNameError(false);
        city.trim()     === '' ? setCityError(true)     : setCityError(false);
        address.trim()  === '' ? setAddressError(true)  : setAddressError(false);
        country.trim()  === '' ? setCountryError(true)  : setCountryError(false);
        index.trim()    === '' ? setIndexError(true)    : setIndexError(false);

        if (fullName.trim() === ''  ||
            address.trim()  === ''  ||
            index.trim()    === ''  ||
            country.trim()  === ''  ||
            city.trim()     === '') {
            hasError = true;
        }

        return hasError;
    }

    return (
        <div className="form__content form__content--delivery">
            <div className="form__content-title">Информация для доставки</div>
            <div className="form__wrap">
                <div className="form__label">Получатель</div>
                <Input
                    placeholder="ФИО"
                    error={fullNameError}
                    onChange={(e) => setFullName(e.target.value)}/>
            </div>
            <div className="form__wrap">
                <div className="form__label">Адрес</div>
                <Input
                    placeholder="Город"
                    error={cityError}
                    onChange={(e) => setCity(e.target.value)}/>
                <Input
                    placeholder="Адрес"
                    error={addressError}
                    onChange={(e) => setAddress(e.target.value)}/>
                <div className="form__line">
                    <Dropdown
                        placeholder='Страна'
                        error={countryError}
                        fluid
                        selection
                        options={countryOptions}
                        onChange={(e, data) => setCountry(data.value)}
                    />
                    <Input
                        placeholder="Индекс"
                        error={indexError}
                        onChange={(e) => setIndex(e.target.value)}/>
                </div>
            </div>
            <Button
                color='green'
                onClick={handleClick}>Продолжить</Button>
        </div>
    );
}

export default Delivery;