import { baseUrl } from './utils';

it('should start page', async () => {
  await page.goto(`${baseUrl}`);

  expect(true).toBeTruthy();
});

it('should render the component', async () => {
  await page.goto('http://localhost:4401/iframe.html?id=pyracheckboxwrappercomponent--primary&args=radio;indeterminate;');
  const wrapper = await page.$('pyra-checkbox-wrapper');
  expect(wrapper).not.toBeNull();
});
// describe('swo-ng-checkbox-wrapper', () => {
//   beforeEach(() => cy.visit('/iframe.html?id=pyracheckboxwrappercomponent--primary&args=radio;indeterminate;'));
//   it('should render the component', () => {
//     cy.get('pyra-checkbox-wrapper').should('exist');
//   });
// });
