describe('swo-ng-progress-bar', () => {
  beforeEach(() => cy.visit('/iframe.html?id=progressbarcomponent--primary&args=showLightenBackgroundOnZero:true;progress;label;severity;'));
  it('should render the component', () => {
    cy.get('pyra-progress-bar').should('exist');
  });
});