import { render, screen } from "@testing-library/react";
import md5 from "md5";
import Icon from ".";

//Units tests
describe("Icon component", () => {
    describe("When a icon is created with name twitch", () => {
        it("the icon contain this path hash value 327fbc38c8e878259c3ec35ef231517a", () => {
            render(<Icon name="twitch" />)
            expect(md5(screen.getByTestId("icon").getAttribute('d'))).toEqual('327fbc38c8e878259c3ec35ef231517a')
        });
    });
    describe("When a icon is created with name facebook", () => {
        it("the icon contain this path hash value bbea4c9e40773b969fdb6e406059f853", () => {
            render(<Icon name="facebook" />)
            // Ajouté
            // Ici On voit si l'icone contient le hash du chemin d'accès suivant : bbea4c9e40773b969fdb6e406059f853
            expect(md5(screen.getByTestId("facebook-icon").getAttribute('d'))).toEqual('bbea4c9e40773b969fdb6e406059f853')
        });
    });
})

