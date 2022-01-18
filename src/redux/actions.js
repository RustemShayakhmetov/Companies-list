import { EDIT_CARD_COMPANY } from "./types"

export function saveEditCard(companyCard){
    return {
        type: EDIT_CARD_COMPANY,
        payload: companyCard
    }
}