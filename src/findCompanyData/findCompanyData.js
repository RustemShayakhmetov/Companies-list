export const findCompanyData = (companies, id) => {
    const company = companies.filter(item => item.id == id.id)
    const dataCompany = company[0]
    return dataCompany
}

