import BotPage from "../../pages/botPage";

describe('C5_C6_Control_of_the_sepeteEkleButon_and_SepetteUrunAdedii.cy', () => {
    it('Control of the Sepete Ekle button', () => {
        BotPage.controlOfTheSepeteEkleButton()
    });

    it.only ('Sepette Urun Adedi',()=>{
        BotPage.ControlOfTheSepetteUrunAdedi()
    })
});