import React, {useState} from "react";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { saveEditCard } from '../../redux/actions'

import "./EditCard.css"

const EditCard = (listCompanies) => {

    const list = listCompanies.listCompanies
    const routeId = useParams()
    const company = list.filter(item => item.id == routeId.id)[0]
   
    const { active, id, name, type, ogrn, registration} = company;
    // стейт для проверки сделан ли был клик на кнопку сохранить
    const [clickSave, setClickSave] = useState(false)
    // стейт для отображения данных в новой карточке
   const [saveCard, setSaveCard] = useState({ active, id, name, type, ogrn, registration})
    // console.log('Сейчас в стейте: ', saveCard)

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value; 
        const name = target.name;
        
    // после каждого ввода в поле, изменяем state, добавляем предыдущий state
    setSaveCard(prevState => ({
           ...prevState,
           [name]: value
       }))
    }
    const handleSave = () => {
        listCompanies.saveEditCard(saveCard)
        setClickSave(true)
    }
    return (
        <div>
            <h1>Редактирование карточки</h1>
            <div className="card">
                <h4>Карта компании</h4>
                <hr/> 
                <div className="form-group">
                    <label className="col-form-label mt-4" htmlFor="inputDefault">Название компании:</label>
                    <input type="text"  className="form-control" placeholder="Введите название компании" id="name" name="name" onChange={handleInputChange} value={saveCard.name}/>

                    <label htmlFor="exampleSelect1" className="form-label mt-4">Тип Компании:</label>
                        <select className="form-select" id="type" name="type" onChange={handleInputChange} value={saveCard.type}>
                            <option>ООО</option>
                            <option>ИП</option>
                        </select>

                    <label className="col-form-label mt-4" htmlFor="inputDefault">ОГРН:</label>
                    <input type="text" className="form-control" placeholder="Введите ОГРН" id="ogrn" name="ogrn" onChange={handleInputChange} value={saveCard.ogrn}/>
     
                    <label className="form-check-label" htmlFor="active">
                        Активен:
                    </label>
                    <input className="form-check-input" type="checkbox" id="active" name="active" onChange={handleInputChange} checked={saveCard.active}/><br/>

                    <label className="col-form-label mt-4" htmlFor="registration">Дата регистрации:</label>
                    <input type="date"  id="registration" name="registration" onChange={handleInputChange} value={saveCard.registration}/><br/>
                    <div className="new-card" id="new-card">
                        {clickSave ? (<div>
                            Название компании: {saveCard.name}<br/>
                            Тип компании: {saveCard.type} <br/>
                            ОГРН: {saveCard.ogrn} <br/>
                            Активен: {<input className="form-check-input" type="checkbox" checked={saveCard.active} id="active" name="active" readOnly/>}<br/>
                            Дата регистрации: {saveCard.registration}
                        </div>) : ( <div>После изменений, нажмите на кнопку сохранить</div>)      
                        }
                    </div>
                    <div className="buttons">
                        <div className="btn edit" 
                            onClick={handleSave}>
                                Сохранить
                        </div>
                        <div className="btn exit"><Link to ="/" className="link">Закрыть</Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        listCompanies: state.data.companies
    }
}
const mapDispatchToProps = {
    // сам action
    saveEditCard
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCard);
