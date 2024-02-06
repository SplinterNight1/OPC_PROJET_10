/**
 * ICI ON TEST LA FUNCTION GETMONTH
 */
import { getMonth } from './index';

describe("Date helper", () => {

    describe("When getMonth is called", () => {
        it("the function return janvier for 2022-01-01 as date", () => {
            // impléménté
            const date = new Date('2022-01-01')
            expect(getMonth(date)).toEqual("janvier")
        });

        it("the function return juillet for 2022-07-08 as date", () => {
           // impléménté
            const date = new Date('2022-07-08')
            expect(getMonth(date)).toEqual("juillet")
        });

         // ajouté
        it("the function return juillet for 2022-12-08 as date", () => {
             const date = new Date('2022-12-08')
             expect(getMonth(date)).toEqual("décembre")
         });
    });
})

