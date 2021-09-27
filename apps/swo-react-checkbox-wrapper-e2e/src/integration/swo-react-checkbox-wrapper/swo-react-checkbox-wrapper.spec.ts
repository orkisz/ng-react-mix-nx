describe('swo-react-checkbox-wrapper: SwoReactCheckboxWrapper component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=sworeactcheckboxwrapper--primary&args=radio:false;indeterminate:false;children;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to SwoReactCheckboxWrapper!');
    });
});
