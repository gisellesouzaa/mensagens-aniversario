const elementoMensagem = document.querySelector("#mensagem");
let containerMensagem = document.querySelector("#container-msg");
let novaMensagem = "";
const textos = [
  "Tenha um feliz aniversário cheio de sorrisos e gargalhadas, repleto de paz, amor e muita alegria. Parabéns por mais um ano de vida ❤️",
  "Parabéns e muitas felicidades! Este é seu dia especial e por isso deve festejar com alegria. Espero que receba muito carinho homenagens e surpresas boas. 😘❤️",
  "Desejo que este dia seja muito feliz, repleto de surpresas encantadoras e passado ao lado de quem você mais ama! Feliz Aniversário! 🎈🍰🎁",
  "Feliz Aniversário! 🎈🍰🎁 Que seja um dia inesquecível e o início de um novo ano na sua vida cheio de felicidade e muitas realizações. 😘❤️",
  "Feliz aniversário! Hoje você completa mais um ano de vida e é hora de comemorar com muita alegria. Que seu dia seja repleto de luz e paz. 😍🎉",
  "Desejo que seu aniversário lhe traga uma felicidade imensa e que você possa realizar todos seus desejos nessa nova etapa de vida. Parabéns! 😍🎉",
  "Que seu aniversário seja repleto de palavras de carinho e abraços sinceros. Parabéns! ❤️😍🎉",
  "Feliz Aniversário! 🎉🎂 Mais um ano que passou e outro que vai começar. Aproveite ao máximo e que nunca lhe falte felicidade, amor, saúde e amizade. 🤗💓",
  "Que Deus abençoe a sua vida grandiosamente, com muita saúde, paz e harmonia. Tenho muita gratidão por ter você minha vida.🥰 Aproveite cada segundo desse dia! ✨🥳🎈 ",
  "Feliz aniversario! Que Deus abençoe e ilumine o seu caminho. Que momentos felizes sempre façam parte da sua vida e que você seja sempre essa pessoa de bom coração! 🎉🎊🎂 ",
  "Parabéns! Desejo muita felicidade nessa nova etapa da sua vida. Que Deus te abençoe grandemente e continue essa pessoa maravilhosa que você é! Feliz aniversário! 🎁🎈🎂 ",
  "Felicidades para você, por este dia tão especial que é o seu aniversário.",
  "Parabéns, que possa ter muitos anos de vida, abençoados e felizes, e que estes dias futuros sejam todos de harmonia, paz e desejos realizados.",
  "Que seu coração, esteja sempre em festa, porque você é um ser de luz e especial para mim. Feliz Aniversário! ",
  " Parabéns pelo seu dia! Que este aniversário seja especial e dê início a um ano de vida maravilhoso.",
  "A você desejo felicidade, saúde e amor todos os dias, e que este seja um aniversário inesquecível. Parabéns!",
  " Feliz aniversário! Hoje é um dia de muita alegria e festa, pois o você completa mais um ano de vida. Que a felicidade, a saúde, a paz e o sucesso façam sempre parte dos seus dias.",
  "Hoje e sempre sorria para a vida, alegre-se com ela, pois assim ela irá lhe retribuir com muitas coisas boas. Feliz aniversário!",
  "Agradeço a Deus por você fazer parte da minha vida e peço para ele te cobrir de saúde, amor, prosperidade e muita felicidade. Feliz aniversário!",
  ] ;

// Função criada e add ao HTML (atributo "onclick") para ser executada ao clicar no botão. 
function gerarMensagem() {
  
  //gerar número aleatório
  const quantLista = textos.length;
  const numeroAleatorio = Math.floor(Math.random()*quantLista);

  //add o conteúdo ao HTML e tornar visivel
  containerMensagem.classList.remove("hide");
  elementoMensagem.innerHTML = textos[numeroAleatorio];
  novaMensagem = textos[numeroAleatorio];
}

  //copiar
function copiar(){
  alert("Mensagem copiada no celular com sucesso!");
  navigator.clipboard.writeText(novaMensagem);


  novaMensagem.setSelectionRange(0, 99999)
  document.execCommand("copy");



}
