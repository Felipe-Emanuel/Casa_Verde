<h1 align="center"> Casa_Verde </h1>

>> A Casa Verde foi um projeto no qual dediquei os estudos às funcionalidades lógicas do front end dentro de 7 dias, como uma newslatter com validação de email funcional através de um <a target="_blank" href="https://github.com/Felipe-Emanuel/Casa_Verde/blob/main/server.cjs"> API </a> que criei (<a target="_blank" href="https://github.com/Felipe-Emanuel/Casa_Verde/blob/main/src/services/sendMail.cjs">ver mais</a> em services), campo de busca por item desejado, tanto por nome quanto por preço, assim como também foi criado campo para designar preço e/ou filtragem alfabética ou preço crescente. Um dos desafios deste projeto foi trabalhar com o coneito de SPA, o que, para mim, foi um pouco complicado na parte de organização das pastas, mas acredito ter ficado funcional :)

### Demonstração de alguns campos

>### Cadastramento da Newslatter
<div align="center"> 
  <img align="center" alt="HomePage" height="350" width="600" src="https://user-images.githubusercontent.com/108142146/203310242-d5a3f815-1c29-4745-ab03-3e106ec7d229.png" />
</div>

>>#### Confirmação do e-mail

<div align="center"> 
  <img align="center" alt="HomePage" height="350" width="600" src="https://user-images.githubusercontent.com/108142146/203310913-b9a261b8-583d-4412-b78e-3e4f0f3c64d4.png" />
</div>

>### Catálogo
>> Nesta parte pensei em criar uma API para o <a target="_blank" href="https://github.com/Felipe-Emanuel/Casa_Verde/blob/main/src/services/Catalog.tsx" >catálogo</a>, mas dado o tempo e o foco (funcionalidades lógicas) do projeto, não era o caso. Então apenas criei um arquivo <a target="_blank" href="https://github.com/Felipe-Emanuel/Casa_Verde/blob/main/src/util/plant.json">.json</a> no qual coloquei 6 plantas com suas características e trabalhei com isso nesta estapa.
>>>(Eu realmente não sei o motivo do gif ter ficado com essas bolinhas, logo abaixo um preview de como está o layout original)

<div align="center"> 
  <img align="center" alt="HomePage" height="350" width="600" src="https://user-images.githubusercontent.com/108142146/203313543-39f6b857-2e9a-4da3-b8de-434515230ae0.gif" />
</div>

---

<div align="center"> 
  <img align="center" alt="HomePage" height="350" width="600" src="https://user-images.githubusercontent.com/108142146/203314027-138b1de2-26bb-4536-866b-9fabc359f071.png" />
</div>

---

#### Disclaimer
> Como o objetivo deste projeto foi focado mais em lógica de programação e menos em estilização, infelizmente eu não tive tempo de trabalhar responsividade (o que, mesmo com mobile-first, come um bom tempo [que eu não tinha, neste caso]).

>> Caso queira rodar e/ou testar/aprimorar alguma funcionalidade na sua máquina, basta clonar o projeto ou baixá-lo em um arquivo zip. No terminal (verifique se está na pasta correta), dar um npm i e esperar :)
>>> Em seguida, rode "npm start" para conectar o <a target="_blank" href="https://github.com/Felipe-Emanuel/Casa_Verde/blob/main/server.cjs"> servidor </a>. Abra outro terminal e rode "npm run dev" para subir o projeto Vite. Certifique-se <a target="_blank" href="https://github.com/Felipe-Emanuel/Casa_Verde/blob/main/package.json"> aqui</a>.

---

### Algumas staks que usei neste projeto
- <a target="_blank" href="https://www.typescriptlang.org/">TypeScript</a>
- <a target="_blank" href="https://www.javascript.com/">JavaScript</a>
- <a target="_blank" href="https://tailwindcss.com/">TailwindCss</a>
- <a target="_blank" href="https://www.radix-ui.com/">Radix-Ui</a>
- <a target="_blank" href="https://vitejs.dev/">Vite</a>
- <a target="_blank" href="https://reactjs.org/">ReactJS</a>

> uma lista mais detalhada pode ser encontrada em <a target="_blank" href="https://github.com/Felipe-Emanuel/Casa_Verde/blob/main/package.json">"dependencies"</a>.

#### Declaração final
> Neste projeto pude ampliar muito meu conhecimento de map e filter do javascript em si e também pude trabalhar uma das coisas que é mais complexas para quem está no início da carreira de programador: passar propriedade de um lado para o outro. Como feito várias vezes neste projeto, como no componente <a target="_blank" href="https://github.com/Felipe-Emanuel/Casa_Verde/blob/main/src/components/Hover.tsx">Hover</a>, que faz parte do <a target="_blank" href="https://www.radix-ui.com/">Radix-Ui</a>, que recebeu função de outro componente, recebendo propriedades como nomes guardados em hooks do React.
>> Outro exemplo deste estudo pode ser encontrado no componente <a target="_blank" href="https://github.com/Felipe-Emanuel/Casa_Verde/blob/main/src/components/Newsletter.tsx">Newsletter</a>, qual foi necessário criar um hook próprio para armazenar vários dados e ser passado de um lado para o outro.

#### Declaração final PESSOAL
>> Por fim, tenho a dizer que este projeto me fez dar um passo além quando decidi me forçar em criar tudo o que podia sem copiar de outros na internet e sim tentar entender como funciona. Por mais que não seja feito da melhor maneira, no estado atual dos meus estudos, conseguir fazer funcionar seguindo padrões do React (a ferramenta principal que decidi usar neste projeto), e conseguir criar (e ainda melhor: entender tudo o que criei aqui) com typescript me fez, depois de muita dor de cabeça, sentir que mais um passo foi dado na direção correta :)
