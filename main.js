function inityGame() {
    let nameHero; 
    let xpHero = 0
    let endGame = false;
    let levelHero = [
        "Ferro",
        "Bronze",
        "Prata",
        "Ouro",
        "Platina",
        "Ascendente",
        "Imortal",
        "Iluminado"
    ];

    let level = 0;
    
    const motivationalPhrases = [
        "Acredite em você mesmo e tudo será possível.",
        "O sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo.",
        "O que você realiza hoje é a recompensa dos seus esforços de ontem.",
        "O maior prazer nasce da conquista difícil.",
        "O otimismo é a fé em ação. Nada se pode levar a efeito sem otimismo.",
        "A persistência é o caminho do êxito.",
        "Se você quer chegar aonde a maioria não chega, faça o que a maioria não faz.",
        "Acredite que você pode e você já está no meio do caminho."
    ];

    const quests = [
        "Qual é o nome do mago que liderou a Sociedade do Anel?",
        "Quem é o governante de Gondor no início da trilogia O Senhor dos Anéis?",
        "Qual é o nome da espada que foi quebrada e depois reforjada para Aragorn?",
        "Quem é o vilão principal na trilogia O Senhor dos Anéis?",
        "Qual é o nome da terra natal dos hobbits?",
        "O que é o Anel Único e quem o criou?",
        "Qual é a cidade élfica escondida na floresta em O Hobbit?",
        "Quem é o autor dos livros que inspiraram O Senhor dos Anéis e O Hobbit?"
      ];

    const answers = [
        ["Gandalf", "Saruman", "Radagast"],
        ["Aragorn", "Boromir", "Faramir"],
        ["Narsil", "Sting", "Andúril"],
        ["Sauron", "Saruman", "Gollum"],
        ["Condado", "Rohan", "Mordor"],
        ["Um anel mágico criado por Sauron", "Uma aliança dos elfos", "Uma espada lendária"],
        ["Rivendell", "Lothlórien", "Mirkwood"],
        ["J.R.R. Tolkien", "George R.R. Martin", "C.S. Lewis"]
      ];

    const randomPhrases = motivationalPhrases[Math.floor(Math.random() * motivationalPhrases.length)];
    
    alert(`
        Olá, bem vindo ao Jornada do heroi!
        Abra o console e aproveite o game. 
                    🦸 🦸‍♂️ 
    `);

    if (endGame === false) {
        nameHero = prompt("Como é o nome do heroi? :");
        console.log("-------------------------------------------------------");
        console.log(`
            Bem vindo ao início do Game ${nameHero}!
            Vou explicar como será sua jornada.
            Você será desafiado mentalmente,
            enfrentará uma série de questões,
            cada uma valerá uma quantidade de pontos,
            esses pontos determinarão a quantidade de XP que você terá!
        `);
        console.log("-------------------------------------------------------");
        console.log(`
            ⚠️ Seu XP inicial é ${xpHero}! ⚠️
        `);

        for (let i = 0; i < quests.length; i++) {
            const correctAnswers = 1;
            let attempts = 3;

            while (attempts === 0 || attempts <= 3) {
                const answerChecker = parseInt(prompt(`
                    ${quests[i]}
                    Escolha uma das seguintes respostas:
                    1: ${answers[i][0]}.
                    2: ${answers[i][1]}.
                    3: ${answers[i][2]}`
                ));

                if (answerChecker === correctAnswers) {
                    xpHero += (i + 1) * 1000;
                    break;
                } else if (answerChecker < 1 || correctAnswers > 3) {
                    console.log("Resposta inválida. Tente novamente.");
                    xpHero -= (i + 1) * 1000;
                } else {
                    console.log("Resposta incorreta. Você tem mais ${tentativas - 1} tentativas.");
                    attempts--;

                };
                
                if (attempts === 0) {
                    alert(`
                        Você esgotou suas tentativas para esta pergunta.
                        Sinto Muito, ${nameHero}! 
                        Sua jornada chegou ao fim.
                        Seu XP total é: ${xpHero}
                        Nível: ${level + 1} (${levelHero[level]})
                        Tente outra Vez!           
                        ${randomPhrases}
                    `);
                    return;
                };

            };
        };

    };

    
    for (let i = 0; i < levelHero.length; i++) {
        if (xpHero >= 1000 * (i + 1)) {
            level = i;
        };
    };

    console.log(`
        🎉 Parabéns, ${nameHero}! 
            Sua jornada chegou ao fim.
            Seu XP total é: ${xpHero}
            Nível: ${level + 1} (${levelHero[level]})
            ${randomPhrases} 🎉
    `);
    
    
};
