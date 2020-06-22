const assertPokemonTabsExistence = () => {
  cy.getByText(/places/i).should('exist');
  cy.getByText(/leaders/i).should('exist');
  cy.getByText(/types/i).should('exist');
};

beforeEach(() => {
  cy.visit('/storybook/?selectedKind=Tabs&selectedStory=Advanced%20-%20Pokemon')
    .story()
    .within(() => {
      assertPokemonTabsExistence();
    });
});

describe('Pokemon Tabs', () => {
  it('can select/deselect places', () => {
    cy.story().within(() => {
      const regexForItemsToClickOneTime = [
        /pallet town/i,
        /viridian city/i,
        /pewter city/i,
        /fuchsia city/i,
        /cinnabar island/i,
      ];
      const regexForItemsToClickTwoTimes = [
        /pallet town/i,
        /viridian city/i,
        /pewter city/i,
        /fuchsia city/i,
      ];
      const regexForItemsToClickThreeTimes = [/pewter city/i, /fuchsia city/i];
      for (const regex of regexForItemsToClickOneTime) {
        cy.getByLabelText(regex).should('not.be.checked');
        cy.getByText(regex).click();
        cy.getByLabelText(regex).should('be.checked');
      }
      for (const regex of regexForItemsToClickTwoTimes) {
        cy.getByLabelText(regex).should('be.checked');
        cy.getByText(regex).click();
        cy.getByLabelText(regex).should('not.be.checked');
      }
      for (const regex of regexForItemsToClickThreeTimes) {
        cy.getByLabelText(regex).should('not.be.checked');
        cy.getByText(regex).click();
        cy.getByLabelText(regex).should('be.checked');
      }
    });
  });

  it('retains state between tab switching', () => {
    const regexForItemsToClickOneTime = [
      /pallet town/i,
      /viridian city/i,
      /pewter city/i,
      /fuchsia city/i,
      /cinnabar island/i,
    ];
    cy.story().within(() => {
      for (const regex of regexForItemsToClickOneTime) {
        cy.getByText(regex).click();
        cy.getByLabelText(regex).should('be.checked');
      }
      cy.getByText(/leaders/i).click();
      cy.getByText(/types/i).click();
      cy.getByText(/places/i).click();
      for (const regex of regexForItemsToClickOneTime) {
        cy.getByLabelText(regex).should('be.checked');
      }
    });
  });
});
