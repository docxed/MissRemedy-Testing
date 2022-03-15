describe("MissRemedy_chat", () => {
  it("Test Chat part User", () => {
    cy.viewport(393, 851);
    cy.visit("http://localhost:19006/");
    cy.get(".r-backgroundColor-kemksi").click();
    cy.get(":nth-child(1) > .css-textinput-11aywtz").clear();
    cy.get(":nth-child(1) > .css-textinput-11aywtz").type("1104500025472");
    cy.get(":nth-child(2) > .css-textinput-11aywtz").clear();
    cy.get(":nth-child(2) > .css-textinput-11aywtz").type("pruk23");
    cy.get(
      ":nth-child(3) > .r-flex-13awgt0 > :nth-child(3) > .css-view-1dbjc4n"
    ).click();
    cy.wait(3000);
    cy.get(
      ":nth-child(3) > :nth-child(1) > .r-flexDirection-18u37iz > :nth-child(2)"
    ).click();
    cy.wait(3000);
    cy.get(
      ".r-margin-1dhrvg0 > :nth-child(1) > :nth-child(2) > .css-view-1dbjc4n > .css-text-901oao"
    ).click();
    cy.wait(2000);
    cy.get(
      '[style="background-color: rgb(242, 242, 242); display: flex;"] > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(2)'
    ).scrollTo(0, 500);
    cy.get(".r-alignContent-uia4a0 > .css-textinput-11aywtz").type("Drim");
    cy.wait(3000);
    cy.get(
      ".r-alignContent-uia4a0 > .css-view-1dbjc4n > .css-text-901oao"
    ).click();
    cy.get(":nth-child(19) > .css-view-1dbjc4n").should("have.text", "Drim");
    cy.wait(3000);
  });

  it("Test chat part Medic", () => {
    cy.viewport(393, 851);
    cy.visit("http://localhost:19006/");
    cy.get(".r-backgroundColor-kemksi").click();
    cy.get(":nth-child(3) > .css-text-901oao").click();
    cy.get(":nth-child(1) > .css-textinput-11aywtz").clear();
    cy.get(":nth-child(1) > .css-textinput-11aywtz").type("54763920");
    cy.get(":nth-child(2) > .css-textinput-11aywtz").clear();
    cy.get(":nth-child(2) > .css-textinput-11aywtz").type("12345");
    cy.get(
      ":nth-child(3) > .r-flex-13awgt0 > :nth-child(3) > .css-view-1dbjc4n"
    ).click();
    cy.wait(2000);
    cy.get(
      ".r-backgroundColor-sjsw4f > :nth-child(2) > .css-view-1dbjc4n > .css-text-901oao"
    ).click();
    cy.get(
      '[style="background-color: rgb(242, 242, 242); display: flex;"] > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(2)'
    ).scrollTo(0, 500);
    cy.wait(2000);
    cy.get(".r-alignContent-uia4a0 > .css-textinput-11aywtz").type("Grim");
    cy.wait(3000);
    cy.get(
      ".r-alignContent-uia4a0 > .css-view-1dbjc4n > .css-text-901oao"
    ).click();
    cy.get(":nth-child(19) > .css-view-1dbjc4n").should("have.text", "Grim");
    cy.wait(2000);
  });
});
