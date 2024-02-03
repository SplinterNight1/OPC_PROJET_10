import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });

});

//TODO: A FAIRE TESTS UNITAIRES
describe("When a page is created", () => {
  it("a list of events is displayed", () => {
    render(< Home />)
    expect(screen.getByTestId("list-container")).toBeInTheDocument()
    /* Ici on test si un élément de la liste est présent */
    waitFor(() => {
      expect(screen.getByText("#DigitonPARIS")).toBeInTheDocument()
    })
  })
  it("a list a people is displayed", () => {
    expect(screen.getByTestId("our-team")).toBeInTheDocument()
    /* Ici on test si les personnes apparaissent, de la pemière à la dernière */
    expect(screen.getByText("Samira")).toBeInTheDocument()
    expect(screen.getByText('Isabelle')).toBeInTheDocument()
  })
  it("a footer is displayed", () => {
    render(< Home />)
    expect(screen.getByTestId("footer")).toBeInTheDocument()
    /* Ici on test si un élément du footer est présent*/
    expect(screen.getByText("Contactez-nous")).toBeInTheDocument()
  })
  it("an event card, with the last event, is displayed", () => {
    render(< Home />)
    waitFor(() => {
      expect(screen.getByTestId("derniere-prestation")).toBeInTheDocument()
      /* Ici on test si un élément de la dernière présentation est présent */
      expect(screen.getByRole('date')).toBeInTheDocument()
    })
  })
});
