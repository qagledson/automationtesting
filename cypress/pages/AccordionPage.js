class AccordionPage {
    expandirAccordion(nome_accordion) {
        cy.contains('b', nome_accordion).should('be.visible')
        cy.contains('b', nome_accordion).click()
    }

    validarPaginaHome(){
        cy.contains('img', "/images/opentelemetry-demo-logo.png").should('be.visible')
    }

    retornarPaginaHome(){
        cy.contains('img', "/images/opentelemetry-demo-logo.png").click()
    }
    
    selecionarMoeda(){
        //Selecionando a moeda para pagamento desejada
        const moeda = 'BRL'
        cy.get('select[name="currency_code"]').select(moeda);
    }

    acessarCarrinho(){
        cy.get('img[title="Cart"]').click()
        cy.contains('button', "Go to Shopping Cart").click()
    }
}

export default AccordionPage;