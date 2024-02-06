// import { fireEvent, render, screen } from "@testing-library/react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

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
      //modifié
      // await screen.findByText("Message envoyé !");
      // Ici on attend que "Message envoyé" apparaisse avec un timeout de 2 secondes
      await waitFor(() => screen.findByText("Message envoyé !"), {timeout:2000});
    });
  });

});

//TODO: A FAIRE TESTS UNITAIRES
describe("When a page is created", () => {
  it("a list of events is displayed", () => {
    //implémenté
    render(< Home />)
    expect(screen.getByTestId("list-container")).toBeInTheDocument()
    /* Ici on test si un élément de la liste est présent */
    waitFor(() => {
      expect(screen.getByText("#DigitonPARIS")).toBeInTheDocument()
    })
  })
  it("a list a people is displayed", () => {
    //implémenté
    render(< Home />)
    expect(screen.getByTestId("our-team")).toBeInTheDocument()
    /* Ici on test si les personnes apparaissent, de la pemière à la dernière */
    expect(screen.getByText("Samira")).toBeInTheDocument()
    expect(screen.getByText('Isabelle')).toBeInTheDocument()
  })
  it("a footer is displayed", () => {
    //implémenté
    render(< Home />)
    /* Ici on test si le footer est présent*/
    expect(screen.getByTestId("footer")).toBeInTheDocument()
  })
  it("an event card, with the last event, is displayed", () => {
    //implémenté
    render(< Home />)
    waitFor(() => {
      /* Ici on test si EventCard de la dernière présentation est présent pas besoin 
      de plus car autres éléments déjà testé dans le test pour EventCard */
      expect(screen.getByTestId("derniere-prestation")).toBeInTheDocument()
    })
  })
});
