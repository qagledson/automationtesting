class DatePickerPage {
    
    selecionarDatas() {
        //Selecionando a primeira data - 01/01/2023
        //Clicando no campo da data
        cy.get('input[class="form-control hasDatepicker"]').click()

        //For para clicar 11 vezes no botão voltar do calendário até chegar no mês de janeiro
        for (let i = 0; i < 11; i++) {
            cy.get('span[class="ui-icon ui-icon-circle-triangle-w"]').click();
          }
        
        //Selecionando o dia do mês
        cy.get('a[class="ui-state-default"]').contains('1').click()
        
        /*-------------------------------------------------------------------------------------*/
        
        //Selecionando a segunda data - 28/05/2015
        //No campo fica no formato dos EUA - 05/28/2015
        //Clicando no campo da data
        cy.get('input[class="form-control is-datepick"]').click()

        // Selecionando o mês
        cy.get('select[title="Change the month"]').select("May")
        // Selecionando o ano
        cy.get('select[title="Change the year"]').select("2015")
        
        //Selecionando o dia
        cy.get('a[title="Select Thursday, May 28, 2015"]').click()
}
}

export default DatePickerPage;