import { PhraseType } from "../types";

export const phrases: PhraseType[] = [
  {
    id: 1,
    phraseParts: [
      {
        text: "Eu não aguento mais. ",
        highlight: { type: "underline", color: "rgb(255, 73, 78)" },
      },
      {
        text: "Meu noivo trabalha durante a semana e assim que ele termina já vai direto pro ",
      },
      {
        text: "Lol.",
        highlight: { type: "highlight", color: "rgb(255, 241, 118, 0.8)" },
        break: true,
      },
      {
        text: "Final de semana quando eu finalmente acho que teremos um momento juntos ou com as nossas famílias, ele ",
      },
      { text: "dorme até meio dia", highlight: { type: "underline", color: "rgb(255, 73, 78)" } },
      { text: " e logo depois do almoço já corre pro " },
      {
        text: "Lol.",
        highlight: { type: "highlight", color: "rgb(255, 241, 118, 0.8)" },
        break: true,
      },
      {
        text: "Em geral eu durmo e ele ainda está jogando. Me dói muito ele colocar o ",
      },
      { text: "Lol", highlight: { type: "highlight", color: "rgb(255, 241, 118, 0.8)" } },
      { text: " como prioridade na sua vida e mal ficar comigo 😢" },
    ],
  },
  {
    id: 2,
    phraseParts: [
      {
        text: "É sempre a mesma coisa: vou jogar pra relaxar e acabo estressado. Grito, fico irritado, me sinto sugado. Não sei por que continuo jogando algo que só me causa raiva e frustração.",
      },
    ],
  },
  {
    id: 3,
    phraseParts: [
      {
        text: "Eu jogo há anos, mas ultimamente tem sido só dor de cabeça. O tempo que eu poderia usar pra fazer algo que realmente me faça feliz, eu gasto em partidas onde ninguém colabora.Eu me sinto um idiota por continuar jogando, mas não consigo parar.",
      },
    ],
  },
  {
    id: 4,
    phraseParts: [
      {
        text: "Às vezes, acho que o jogo é projetado pra me fazer perder. A quantidade de trolls e pessoas que simplesmente não querem jogar como equipe é absurda. Me sinto jogando sozinho.",
      },
    ],
  },
  {
    id: 5,
    phraseParts: [
      {
        text: `Eu realmente não entendo a comunidade de League of Legends brasileira, acabo de sair de uma partida totalmente frustrado e estou excluindo o jogo nesse exato momento.
        Me cansei de jogadores dizendo "to base", quitando, feedando intencionalmente, de jogos totalmente unilaterais. A mais ou menos um mês estou percebendo que praticamente quase todas as minhas partidas são jogos de um time só. Talvez em função do meta e da bola de neve gigante que está, ou o matchmaking que anda ruim, mas sempre em um dos times vai ter um jogador que ficou lá 1/todosospossiveis ou 0/infinito/-3. Não há competitividade em minhas partidas, nem quando ganho, nem quando perco, raras as exceções. E por azar do meu destino, esses 0/acircunferenciadosolx2 estão sempre no meu time. Aquelas partidas que você está lá se dando ao máximo, mas tem sempre 2 ou 3 que estão nem ligando pro jogo, ou que já morreram 6 vezes antes dos 10 min, e ainda querem ficar na base. Pra mim já deu o que tinha que dar isso aí. Vou procurar outra coisa pra jogar, eu amo League of Legends, mas atualmente eu odeio jogá-lo. Enfim fica aí o desabafo.`,
      },
    ],
  }
];
