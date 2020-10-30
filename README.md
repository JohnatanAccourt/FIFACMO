# FIFACMO: 

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
* Imagens do aplicativo 

## Introdução do FIFACMO:

#### Esse aplicativo (*FIFA Carreer Mode Online*) tem o objetivo de suprir parcialmente algumas necessidades que o FIFA não disponibiliza para os jogadores que no caso é o conceito de modo carreira online ou carreira multiplayer local.

#### A idéia é que o usuário tenha a possibilidade de criar seu próprio time e faça compras no mercado e também negocie com jogadores de outros clubes que está no mesmo server.

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

* **Carrinho:** 
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
    A prancheta é um recurso onde existe a possibilidade de posicionar os jogadores que você possui no seu elenco através do tocar e arrastar em sua devida posição no campo, afim de trazer mais um recurso para uma imerção bacana já que os smartphones possibilita esse recuso. Esse recurso ainda não está 100% perfomático com uma excelente experiência para o usuário por um problema que é o fato da scrollview estar sendo orientada horizontalmente e o [react-native-draggable](https://github.com/tongyy/react-native-draggable) não estar reagindo bem com essa condição. Então a recomendação no momento é segurar e assim arrastar o elemento.


## Recursos necessários:

- XAMPP (O banco usado foi o MariaBD )
- Terminal
- Alguma IDE para fazer alterações

## Rodando o aplicativo:

Após dar um clone no repositório o primeiro passo é criar o banco, o banco já está pronto em "backend/db/fifacmo.sql" 

Nesse exemplo será usado o phpMyAdmin recurso do XAMPP para dar os inserts e criar o banco devidamente.

Para isso abra o XAMPP e dê um start no Mysql e no apache também, em seguida, clique no admin ao lado do start (do apache).
Com isso será aberto uma página web e no canto superior esquerdo tem a opção "phpMyAdmin".

Com o phpMyAdmin a disposição, precisamos criar o banco a partir do arquivo disponível com isso existe uma opção "importar" e lá você pode colocar o arquivo disponibilidado em "seu caminho/backend/db/fifacmo.sql", após selecionar o arquivo execute.

Pode ser que demore pois o banco é grande.

**OBS: Pode ser que tenhas problema de import pelo fato do banco ser grande, com isso você pode seguir este tutorial que eu utilizei para resolver esse problema:
[SOLVE no data recieve to import/incorrect format parameter(100% working)HINDI](https://www.youtube.com/watch?v=MqOsp54EA3I&list=LLLpbKKCSQVyYLTeKrrYPwxw&index=103&t=186s)**

Temos o banco! agora é só executar os back-end e o app.

---

#### Em seu terminal de preferência: 

Entre no diretório do back-end e instale os pacotes com:

```
npm install
```

Depois execute o nodemon:

```
npm start
```

Abra um novo terminal e entre no diretório do app e faça o mesmo do back-end:

```
npm install
```

Depois execute o expo:

```
npm start
```

**O expo tem alguns problemas quando executamos o npm install então se estiver com alguma IDE aberta e/ou anti-vírus ligado desligue momentaneamente antes de fazer o npm install**

Depois o expo vai abrir uma página web, é só seguir as instruções para executar no seu smartphone ou emulador ios/Android.

## Convenção simples para ajuda-lo a administrar:

Essa parte é bem particular de cada grupo de jogadores, seja seu grupo que joga apenas on-line ou então presencialmente. Com isso existem diversas regras que é criada inevitavelmente ou então conscientemente conforme o tempo.
Mesmo com o aplicativo, não é interferido a regra que seu grupo usa de forma corrente as regras a seguir é apenas um exemplo que pode vir a ser utilizado.

Na liga pode ser definido os prêmios dessa forma **(lembrando que tudo descrito aqui pode ser alterado)**:
- 1 lugar: 30 milhões
- 2 lugar: 20 milhões
- E a partir do terceiro lugar em diante é diminuído apenas 1 milhão.
- 3 lugar: 10 milhões
- 4 lugar: 9 milhões
- 5 lugar: 8 milhões
- 6 lugar: 7 milhões
- 7 lugar: 6 milhões
E por diante....

Já copa é um pouco diferente: 
O prêmio é para apenas quem chegar as quartas-de-final, no caso:
- Participantes das quartas de final: 3 milhões;
- Participantes das semifinais: +7 milhões;
- Participantes da final: +10 milhões;
- Vencedor: +15 milhões;

**Copa dos campeões:** 

Opção 1: Padrão ida e volta entre o campeão da liga com o campeão da copa:

Opção 2: Consiste em uma série (como as finais da NBA) do campeão da liga com o campeão da copa:
- São no máximo 5 jogos todos de 4 minutos;
- O primeiro que ganhar 3 partidas é campeão.
- O prêmio para o campeão: 10 milhões.
- O prêmio para o vice-campeão: 5 milhões.


Orçamento: 
Cada clube começa com 100 milhões de verba para realizar no mínimo 25 contratações. E conforme a colocação nos campeonatos a verba vai ficando cada vez mais alta para fazer investimentos de jogadores do mercado interno e externo.

**Se desejar mudar o valor padrão da verba, deve atualizar a tabela teams, campo budget no banco de dados.**

Desafio:
Um clube pode desafiar o outro apostando algum jogador ou então dinheiro de seu orçamento/verba

Os times podem definir regras a partir de então:
- É apenas ida a partida? ida e volta? 
- O tempo da partida.
- Deve haver algo que possa ser apostado que pode ser jogador ou então determinada quantidade de dinheiro da verba do clube.

Amistoso: 
Pode ser definido com as mesmas regras do desafio mas não há aposta é apenas um(ou dois) jogos amigáveis.

## Convenção simples para ajuda-lo a administrar:



![1](https://raw.githubusercontent.com/JohnatanAccourt/FIFACMO/master/APP/assets/docs/1.jpg=100x20)
![2](https://raw.githubusercontent.com/JohnatanAccourt/FIFACMO/master/APP/assets/docs/2.jpg)
![3](https://raw.githubusercontent.com/JohnatanAccourt/FIFACMO/master/APP/assets/docs/3.jpg)
![4](https://raw.githubusercontent.com/JohnatanAccourt/FIFACMO/master/APP/assets/docs/4.jpg)
![5](https://raw.githubusercontent.com/JohnatanAccourt/FIFACMO/master/APP/assets/docs/5.jpg)
![6](https://raw.githubusercontent.com/JohnatanAccourt/FIFACMO/master/APP/assets/docs/6.jpg)
![7](https://raw.githubusercontent.com/JohnatanAccourt/FIFACMO/master/APP/assets/docs/7.jpg)
![8](https://raw.githubusercontent.com/JohnatanAccourt/FIFACMO/master/APP/assets/docs/8.jpg)
![9](https://raw.githubusercontent.com/JohnatanAccourt/FIFACMO/master/APP/assets/docs/9.jpg)
![95](https://raw.githubusercontent.com/JohnatanAccourt/FIFACMO/master/APP/assets/docs/9.5.jpg)
![10](https://raw.githubusercontent.com/JohnatanAccourt/FIFACMO/master/APP/assets/docs/10.jpg)
![11](https://raw.githubusercontent.com/JohnatanAccourt/FIFACMO/master/APP/assets/docs/11.jpg)
![12](https://raw.githubusercontent.com/JohnatanAccourt/FIFACMO/master/APP/assets/docs/12.jpg)
![13](https://raw.githubusercontent.com/JohnatanAccourt/FIFACMO/master/APP/assets/docs/13.jpg)
![14](https://raw.githubusercontent.com/JohnatanAccourt/FIFACMO/master/APP/assets/docs/14.jpg)
![14](https://raw.githubusercontent.com/JohnatanAccourt/FIFACMO/master/APP/assets/docs/15.jpg)
![14](https://raw.githubusercontent.com/JohnatanAccourt/FIFACMO/master/APP/assets/docs/16.jpg)
![14](https://raw.githubusercontent.com/JohnatanAccourt/FIFACMO/master/APP/assets/docs/17.jpg)
![14](https://raw.githubusercontent.com/JohnatanAccourt/FIFACMO/master/APP/assets/docs/18.jpg)
![14](https://raw.githubusercontent.com/JohnatanAccourt/FIFACMO/master/APP/assets/docs/18.5.jpg)
