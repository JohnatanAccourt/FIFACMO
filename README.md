# FIFACMO:

## Aplicativo para modo carreira Online/Multiplayer.

___

## Sumário:

* Introdução do FIFACMO
* Recursos do aplicativo
    * Home
    * Favoritos
    * Mercado
    * Carrinho
    * Social
    * Elenco
    * Prancheta
* Recursos necessários
* Rodando o aplicativo
* Convenção simples para ajuda-lo a administrar. 

---

## Introdução do FIFACMO:

#### Esse aplicativo (*FIFA Carreer Mode Online*) tem o objetivo de suprir parcialmente algumas necessidades que o FIFA não disponibiliza para os jogadores que no caso é o conceito de modo carreira online ou carreira multiplayer local.

#### A idéia é que o usuário tenha a possibilidade de criar seu próprio time e faça compras no mercado e também negocie com jogadores de outros clubes que está no mesmo server.

---

## Recursos do Aplicativo

#### Para falarmos desse sistema precisamos dividir em partes para ficar melhor de entender.

* **Home:** 
    Não tem muito segredo a página home é bem simples de explicar mas antes deve ser compreendido a parte dos títulos exibidos como ligas e copas. 
    A contabilização dos títulos não é automático, ou seja, quando você ganha um título ao final do jogo não vai contabilizar automaticamente no aplicativo. O Administrador é responsável por fazer isso funcionar caso você ganhe um título, é importante que o administrador contabilize este título.
    A verba é o valor que você usa para realizar contratações tanto no mercado quanto em negociações com outros clubes.
    Valor do time é o valor somado de todos os jogadores de seu elenco, ou seja, o valor do passe.
    **Overall do time** consiste o ataque, meio campo e defesa separadamente. O cálculo é bem simples é a soma do overall de todos os jogadores do seu elenco dividido pela quantidade de jogadores. Esse cálculo é feito para jogadores do ataque, meio campo e defesa separadamente. Olhe abaixo quais posições cabe dentro de cada um deles:

    | Ataque | Meio Campo | Defesa |
    |--------|------------|--------|
    |PD = **Ponta Direito**|MD = **Meia Direito**|GOL = **Goleiro**|
    |MAD = **Meia Atacante Direito**|MCD = **Meio Campo Direito**|LD = **Lateral Direito**|
    |SA = **Segundo Atacante**|MC = **Meio Campo**|ZGD = **Zagueiro Direito**|
    |MAE = **Meia Atacante Esquerdo**|MCE = **Meio Campo Esquerdo**|ZAG = **Zagueiro**|
    |PE = **Ponta Esquerdo**|ME = **Meia Esquerdo**|ZAE = **Zagueiro Esquerdo**|
    |ATD = **Atacante Direito**|MED = **Armador Direito**|ADD = **Ala Direito**|
    |ATA = **Atacante**|MEI = **Armador**|VLD = **Volante Direito**|
    |ATE = **Atacante Esquerdo**|MEE = **Armador Esquerdo**|VOL = **Volante**|
    |||VLE = **Volante Esquerdo**|
    |||ADE = **Ala Esquerdo**|


* **Favoritos:** 
    Os favoritos como o nome sugere é ali que será exibido os jogadores que você adicionou em “mercado”, mas é bem interessante utilizar esse recurso para poder comprar com mais rapidez.

* **Mercado:** 
    O mercado é onde normalmente é montado o time inicialmente. O mercado vai te mostrar os jogadores em ordem de acordo com o overall, ou seja, do mais alto ao mais baixo. 
    No entanto há alguns filtros para pesquisa, é possível realizar pesquisas por nacionalidade (obrigatório) mas exista uma segunda opção “todas as nacionalidades“ que te possibilita usar o filtro pesquisando por todas as nacionalidades, além dessa opção de nacionalidade temos posição, estrela de perna ruim e de drible, idade mínima, idade máxima, overall mínimo, overall máximo, face real. Em breve existe uma possibilidade de ser adicionado novos filtros. O mercado possui o recurso de adicionar o jogador que você quiser aos favoritos para facilitar a busca desse jogador para realizar a compra. Temos a opção de ver melhor o jogador, ou seja, quando tocamos na imagem do jogador em seguida será redirecionado para outra tela do app com informações bem específicas como os stats, gerais de cada atributo do jogador, especialidades, traits, e também o overall do jogador em todas as posições do campo. E obviamente adicionar o jogador ao carrinho.

* **Carinho:** 
    Por aqui você vai entender a essência do FIFACMO:
    Você pode adicionar quantos jogadores você quiser, sem problema nenhum, mas na hora de comprar que as regras vai agir: 
    Se for a primeira compra você tem que ter no mínimo 23 jogadores no carrinho; 
    Compras posteriores você pode comprar a quantidade que for seja de 1 até 9999999999;
    Não pode comprar jogadores se seu elenco possuir mais de 32 jogadores;
    Não é possível comprar o jogador se você não possui dinheiro suficiente.
    Além disso você tem controle do valor dos jogadores através do total que está disponibilizado na tela, e claro você pode remover o jogador do carrinho a qualquer momento.

* **Social:** 
    Aqui é possível ver estatísticas e também fazer negociações com outros times do server:
    Nessa parte do aplicativo podemos ver algumas estatísticas como maior vencedor, time mais forte e time com mais dinheiro e etc. 
    Existe uma lista onde possui todos os times do server, você pode interagir tocando em um dos times que será direcionado para a página desse time, onde é encontrado todas as informações necessárias sobre esse time e também os jogadores desse time. Com isso você pode fazer proposta de compra por algum jogador desse time você tem a possibilidade de oferecer uma proposta *(detalhe importante que há uma sugestão de valor que no caso é o valor padrão dele, no entanto, você pode oferecer qualquer proposta por este jogador seja a mais ou a menos)*. Existe um detalhe extremamente importante antes de fazer uma proposta:
    O valor que está sendo proposto será alocado, em outras palavras, o valor da proposta é descontado da sua verba até que o time que você fez a proposta responda a tempo, se não responder a tempo seu valor é realocado e a proposta não será mais válida. O tempo da proposta é válida por 12 horas. 
    Quando aceito, o valor já foi descontado de sua verba então não será descontado mais uma vez, o dinheiro que foi alocado para o time que está vendendo e o jogador vai para o time que fez a proposta.

* **Elenco:**
    Mostra todos os jogadores que foram contratados através dos métodos acimam, detalhe importante quando você contrata um jogador o administrador é responsável de colocar esse jogador no seu time do game.

* **Prancheta:**
    A prancheta é um recurso onde existe a possibilidade de posicionar os jogadores que você possui no seu elenco através do tocar e arrastar em sua devida posição no campo, afim de trazer mais um recurso para uma imerção bacana já que os smartphones possibilita esse recuso. Esse recurso ainda não está 100% perfomático com uma excelente experiência para o usuário por um problema que é o fato da scrollview estar sendo orientada horizontalmente e o [react-native-draggable]('https://github.com/tongyy/react-native-draggable') não estar reagindo bem com essa condição. Então a recomendação no momento é segurar e assim arrastar o elemento. 
