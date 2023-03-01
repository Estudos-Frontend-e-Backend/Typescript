"use strict";
//Funcação
function reviewUser(user) {
    if (!user) {
        console.log("Você não avaliou o produto");
        return;
    }
    else if (user === 5 || user === 1) {
        console.log(`A nota que você deu foi: ${user}, valeu`);
    }
}
reviewUser(false);
reviewUser(5);
reviewUser(1);
