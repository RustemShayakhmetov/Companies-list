import { EDIT_CARD_COMPANY} from "./types"

const initialState = {
    companies: [
        {id: '1', name: 'Снема-сервис', ogrn: '5087746560886', type: 'ООО', registration: '15.04.2015', active: true },
        {id: '2', name: 'Механик', ogrn: '5087746560999', type: 'ИП', registration: '17.09.2014', active: false },
        {id: '3', name: 'Питон', ogrn: '5087746560876', type: 'ООО', registration: '19.08.2013', active: false },
        {id: '4', name: 'Витсмарт', ogrn: '5087746560234', type: 'ИП', registration: '20.07.2017', active: true },
        {id: '5', name: 'Фармленд', ogrn: '5087746560555', type: 'ООО', registration: '10.06.2019', active: false },
        {id: '6', name: 'Магнит', ogrn: '5087746560123', type: 'ООО', registration: '21.05.2011', active: true },
        {id: '7', name: 'Левша', ogrn: '5087746560321', type: 'ИП', registration: '23.11.2020', active: true }
    ]
}

export const cardReducer = (state = initialState, action) => {

    switch (action.type) {
        case EDIT_CARD_COMPANY:
        const newCards = [...state.companies]
        newCards.splice(action.payload.id - 1, 1, action.payload)
        return {
            ...state,
            companies: [...newCards]
        }
       default: return  state
    }
}