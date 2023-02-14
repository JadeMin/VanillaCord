eval(await (await fetch('https://gist.githubusercontent.com/JadeMin/783dc38e56a67ed6ab0b4d8f75d27677/raw/ab6554f746b18fb69e9206a7fa3e39255a27b914/getModule.js')).text());
getModule(m=> m?.getName?.() === 'UserStore')[0].getCurrentUser().premiumType = 2;
