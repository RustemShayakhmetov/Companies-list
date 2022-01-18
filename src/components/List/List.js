import React from "react";
import {connect} from 'react-redux'
import { Link } from "react-router-dom";
import './List.css'

const List = ({ listCompanies }) => {
    return (
        <div>
            <h1>Список компаний</h1>
            <div className="card">
                <ul className="list-group list-group-flush">
                    {
                        listCompanies.map(company => (
                            <li className="list-group-item"
                                key={company.id}>
                                <Link to={`/company/${company.id}`} className="link">{`${company.id}. ${company.name}`}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>

    )
}
// преобразует весь стейт в пропсы
const mapStateToProps = state => {
    // console.log(`openCardCompany: ${state.data.openCardCompany}`)
    return {
        listCompanies: state.data.companies,
    }

}
// в connect хелпер функции
export default connect(mapStateToProps, null)(List);




// const List = ({ items, onOpenCard }) => {
//     const handleClick = (item) => {
//         onOpenCard(item)
//     }
//     return (
//         <div>
//             <h1>Список компаний</h1>
//             <div className="card">
//                 <ul className="list-group list-group-flush">
//                     {
//                         items.map(item => (
//                             <li className="list-group-item"
//                                 key={item.id}
//                                 onClick={() => handleClick(item)}
//                                 >
//                                 <Link to={`/company/${item.id}`} className="link">{`${item.id}. ${item.name}`}</Link>
//                             </li>
//                         ))
//                     }
//                 </ul>
//             </div>
//         </div>

//     )
// }