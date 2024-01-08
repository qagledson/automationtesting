class SliderPage {
    utilizandoSlider(position) {
        // Seletor do slide
        const sliderHandle = '.ui-slider-handle';
      
        // Função para mover o slide para uma posição específica
        const moveSliderToPosition = (position) => {
          cy.get(sliderHandle)
            .invoke('attr', 'style', `left: ${position}`)
            .trigger('change'); // Dispara um evento 'change' após modificar o valor
        };
      
        // Mover o slide para a posição especificada
        moveSliderToPosition(position);
      
        // Verificar se o slide foi movido para a posição especificada
        cy.get('a.ui-slider-handle')
          .should('have.attr', 'style')
          .and('include', `left: ${position}`);
      
      }
      
}

export default SliderPage;