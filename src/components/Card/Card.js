import React from "react";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import "./Card.css"

const Card = (listCompanies) => {
    const list = listCompanies.listCompanies
    const routeId = useParams()
    const company = list.filter(item => item.id == routeId.id)[0]

    return (
        <div>
            <h1>Просмотр карточки</h1>
            <div className="card">
                <div className="card-open">
                    <h4>Карта компании</h4>
                    <hr />
                    Название: {company.name} <br />
                    ОГРН: {company.ogrn} <br />
                    Дата регистрации: {company.registration} <br /> 
                    Тип Компании: {company.type} <br />
                    Активный: <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked={company.active} readOnly/> <br />
                </div>
                <div className="buttons">
                    <div className="btn edit"><Link to ={`/company/edit/${company.id}`} className="link">Редактировать</Link></div>
                    <div className="btn back"><Link to ="/" className="link">Закрыть</Link></div>
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

export default connect(mapStateToProps, null)(Card);

