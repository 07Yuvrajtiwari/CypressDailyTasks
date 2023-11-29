

describe('My First Test', () => {
 
  beforeEach(() => {
    cy.visit("/login");
    cy.get("[data-test='Username']").clear().type("ASHISH@developer.com");
    cy.get("[data-test='Password']").clear().type("Argus@1234");
    cy.get("[data-test='login-btn']").click();
  });
  it("move_to_next", () => {
    const date = new Date("12/10/2001")
        const day = date.getDate()
        const month= date.toLocaleString('default', { month: 'short' }).slice(0,3)
        const year = date.getFullYear()
        const dd = new Date()
        const mm = dd.toLocaleString('default', { month: 'long' })
        const yy = dd.getFullYear()
    cy.wait(10000);
    cy.visit("/admin/user-authorizations/users");
    cy.wait(6000);
    cy.get('[data-test="date-filter-title"]').click();
    cy.get("div.accent--text").contains(`${mm} ${yy}`).click({ force: true });
    cy.get("div.accent--text").contains(`${yy}`).click( );
    cy.get(`li`).contains(`${year}`).click();
    cy.get(".v-btn__content").contains(`${month}`).click();
    cy.get(".v-btn__content").contains(`${day}`).click();
    cy.get(".v-btn__content").contains("Apply").click();
  });
})
