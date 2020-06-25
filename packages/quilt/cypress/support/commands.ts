// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

declare global {
  namespace Cypress {
    type Greeting = {
      greeting: string;
      name: string;
    };

    // tslint:disable-next-line:interface-name
    interface Chainable {
      /**
       * Yields the DOM element of the story on the page
       *
       * @memberof Chainable
       * @example
       *    cy.visit(...).story()
       */
      story: typeof story;
    }
  }
}

const noLog = { log: false };

export function story() {
  Cypress.log({
    name: 'get story',
  });
  return cy
    .window(noLog)
    .get('#storybook-preview-iframe', noLog)
    .then(($iframe) => $iframe.contents().find('body'));
}

Cypress.Commands.add('story', story);
