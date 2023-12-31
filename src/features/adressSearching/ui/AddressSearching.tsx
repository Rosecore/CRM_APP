import React, { memo, useState } from 'react';
import { adressSearching } from '../model/services/adressSearching/addressSearching';
import { resultType } from '../model/types/infoType';
import SearchIcon from "shared/icons/search.svg"
import './AddressSearching.scss';


const AdressSearching = memo(() => {
    const [inputValue, setInputValue] = useState<string>('')
    const [resultValue, setResultValue] = useState<resultType>()

    const updateInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }
    const searchAdress = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()//убираю дефолтный ивент от сабмита
        const val = await adressSearching(inputValue)
        setResultValue(val)
    }
    return (
        <>
            <h2>Поиск адресов</h2>
            <h3>Введите интересующий вас адрес</h3>
            <form className='input-form'>
                <input type="text" minLength={3} className='input-form__adress-input' onChange={updateInputValue}></input>
                <button type='submit' className='input-form__adress-button' disabled={inputValue.length > 2 ? false : true} onClick={searchAdress}>
                    <p className='adress-button__inner-text'>Поиск</p>
                    <SearchIcon className='adress-button__icon'/>
                </button>
            </form>
            {resultValue ?
                <table className='adress-table'>
                    <tr>
                        <th><h3>Адреса</h3></th>
                    </tr>{
                        resultValue.suggestions.map(el => (
                            <tr className='table-field'>
                                <th>
                                    {el.value}
                                </th>
                            </tr>))}
                </table>
                : <></>
            }

        </>

    );
});

export default AdressSearching;