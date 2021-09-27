describe('swo-ng-checkbox-wrapper', () => {
  beforeEach(() => cy.visit('/iframe.html?id=pyracheckboxwrappercomponent--primary&args=radio;indeterminate;'));
  it('should render the component', () => {
    cy.get('pyra-checkbox-wrapper').should('exist');
  });
});