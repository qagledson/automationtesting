class AutocompletePage {
    
    selecionarPais(nome_pais) {
        cy.get('input[type="text"]').type(nome_pais)
    }
}

export default AutocompletePage;