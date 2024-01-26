
var header = document.getElementById("myHeader");

var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    header.style.top = "0";
  } else {
    header.style.top = "-200px"; 
  }

  prevScrollpos = currentScrollPos;
}

const popup = document.getElementById('popup');

let popupTimeout;

function showPopup() {
  popup.classList.remove('hidden');
}

function resetPopupTimeout() {
  clearTimeout(popupTimeout);
  popupTimeout = setTimeout(showPopup, 20000); 
}

function handleActivity() {
  popup.classList.add('hidden'); 
  resetPopupTimeout(); 
}
document.addEventListener('mousemove', handleActivity);
document.addEventListener('scroll', handleActivity);
document.addEventListener('keypress', handleActivity);
document.addEventListener('click', handleActivity);

const ChrismassToggle = document.getElementById('ChrismassToggle');
const darkModeToggle = document.getElementById('darkModeToggle');

ChrismassToggle.addEventListener('click', togglechrismass);
darkModeToggle.addEventListener('click', toggleDarkMode);

function togglechrismass() {
  document.body.classList.remove('dark-theme');
  document.body.classList.toggle('Chrismass-theme');
}

function toggleDarkMode() {
  document.body.classList.remove('Chrismass-theme');
  document.body.classList.toggle('dark-theme');
  if (snowing){
    snowing = !snowing;
  }
}

const Chrismassbutton = document.getElementById('ChrismassToggle');
let snowing = false; // Variable pour suivre si ça neige actuellement

Chrismassbutton.addEventListener('click', () => {
  snowing = !snowing; // Inverse l'état (neige / n'neige pas)
});


// Fonction pour créer un flocon
function createSnowflake() {
  if (snowing) {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    const x = Math.random() * window.innerWidth;
    const y = -10;
    snowflake.style.left = `${x}px`;
    snowflake.style.top = `${y}px`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 5}s`;
    document.querySelector('.snowflakes').appendChild(snowflake);
    setTimeout(() => {
      snowflake.remove();
    }, 5000);
  }
}
setInterval(createSnowflake, 1);

//QCM
function checkAnswers() {
  const q1 = document.querySelector('input[name="q1"]:checked');
  const q2 = document.querySelector('input[name="q2"]:checked');
  const q3 = document.querySelector('input[name="q3"]:checked');
  const q4 = document.querySelector('input[name="q4"]:checked');
  const q5 = document.querySelector('input[name="q5"]:checked');
  const q6 = document.querySelector('input[name="q6"]:checked');
  const q7 = document.querySelector('input[name="q7"]:checked');
  const q8 = document.querySelector('input[name="q8"]:checked');

  if (q1 && q2 && q3) {
    const answer1 = q1.value;
    const answer2 = q2.value;
    const answer3 = q3.value;
    const answer4 = q4.value;
    const answer5 = q5.value;
    const answer6 = q6.value;
    const answer7 = q7.value;
    const answer8 = q8.value;


    if (answer1 === '80' && answer2 === '1' && answer3 === 'gaz' && answer4 === '28' && answer5 === 'F' && answer6 === '4' && answer7 === '11' && answer8 === 'O' ) {
      alert('Toutes les réponses sont correctes !');
    } else {
      alert('Au moins une réponse est incorrecte. Veuillez vérifier vos réponses.');
      // Redirige l'utilisateur en haut de la page
      window.scrollTo(0, 0);
    }
  } else {
    alert('Veuillez répondre à toutes les questions.');
  }
}
//eng
function changeLanguage(lang) {
  if (lang === 'fr') {
    document.getElementById('ChrismassToggle').innerText = 'Mode Noël';
    document.getElementById('darkModeToggle').innerText = 'Mode Sombre';
    document.getElementById('Lobby').innerText = 'Accueil';
    document.getElementById('Presentation').innerText = 'Présentation';
    document.getElementById('Quizz').innerText = 'Quizz';
    document.getElementById('trad1').innerText = "Qu'est ce que c'est que la nuit de l'info ?";
    document.getElementById('trad2').innerText = "La nuit de l'info est un évènement compétitif national. Les participants ont toute une nuit pour réalisé un défi unique. En même temps, ils peuvent réaliser des défis proposés par des entreprises volontaires. C'est l'occasion de découvrir un nouvel aspect du travail en groupe. L'évènement débute le jeudi soir au coucher du soleil et se termine le lendemain au lever du soleil. Les meilleurs projets sont récompensés par les jurys de chacun des défis proposés. Ce grand évènement se déroule depuis 16 ans. C'est une expérience enrichissante, unique et accessible à tous les intéressés ";
    document.getElementById('trad3').innerText = " Site vers la nuit de l'info";
    document.getElementById('trad4').innerText = "L'équipe Unficsit et son projet Unclimated";
    document.getElementById('trad5').innerText = "Notre équipe a décidé de faire un site web qui permettrait à tout public de s'informer correctement au sujet des changements climatiques et son impact social, économique, etc. Pour cela, nous avons décidé de rester dans un domaine que nous maîtrisons et avons réalisé ce site web. Le but est d'avoir un site qui est à la fois pertinent et ludique. Un quizz a été mis à disposition pour éviter une lecture trop barbante. Il renvoie aux éléments  en question en cas d'erreur. Ce petit site est rempli de petits secrets cachés que vous pouvez découvrir (il faut savoir être patient)";
    document.getElementById('trad6').innerText = 'Notre expérience';
    document.getElementById('trad7').innerText = "Dans la globalité, l'expérience a été très bonne. Une bonne ambiance accompagnée d'un travail rigoureux. La recontre avec des professionnels étaient très intéressantes Le plus dur est de s'organiser en si peu de temps avec autant de monde. Cela a donné lieux à quelques ralentissements mais nous sommes tous fier du résultat que vous êtes en train de lire";
    document.getElementById('trad8').innerText = "-L'équipe Unficsit";
    document.getElementById('trad9').innerText = 'Membres du groupe';
    document.getElementById('trad10').innerText = 'Retour en haut';
    document.getElementById('trad11').innerText = 'Lien des pages du site';
    document.getElementById('trad12').innerText = 'Accueil';
    document.getElementById('trad13').innerText = 'Présentation';
    document.documentElement.lang = 'fr';
  } else if (lang === 'en') {
    document.getElementById('ChrismassToggle').innerText = 'ChrismassMod';
    document.getElementById('darkModeToggle').innerText = 'DarkMod';
    document.getElementById('Lobby').innerText = 'Lobby';
    document.getElementById('Presentation').innerText = 'Presentation';
    document.getElementById('Quizz').innerText = 'Quizz';
    document.getElementById('trad1').innerText = 'What is news night?';
    document.getElementById('trad2').innerText = "Info Night is a national competitive event. Participants have a whole night to complete a unique challenge. At the same time, they can complete challenges proposed by volunteer companies. This is an opportunity to discover a new aspect of group work. The event begins Thursday evening at sunset and ends the next day at sunrise. The best projects are rewarded by the juries for each of the proposed challenges. This major event has been taking place for 16 years. It is an enriching, unique experience accessible to all interested ";
    document.getElementById('trad3').innerText = " Site towards the night of information";
    document.getElementById('trad4').innerText = "The Unficsit team and its Unclimated project";
    document.getElementById('trad5').innerText = 'Our team decided to create a website that would allow everyone to be properly informed about climate change and its social, economic impact, etc. For this, we decided to stay in a field that we master and created this website. The goal is to have a site that is both relevant and fun. A quizz was made available to avoid too boring reading. It returns to the elements in question in case of error. This little site is full of little hidden secrets that you can discover (you have to be patient)';
    document.getElementById('trad6').innerText = 'Our experience';
    document.getElementById('trad7').innerText = "Overall, the experience was very good. A good atmosphere accompanied by rigorous work. The meeting with professionals was very interesting. The hardest part is organizing in such a short time with so many people. This gave rise to some slowdowns but we are all proud of the result you are reading";
    document.getElementById('trad8').innerText = '-The Unficsit team';
    document.getElementById('trad9').innerText = 'Group members';
    document.getElementById('trad10').innerText = 'Back to top';
    document.getElementById('trad11').innerText = 'Link to site pages';
    document.getElementById('trad12').innerText = 'Lobby';
    document.getElementById('trad13').innerText = 'Presentation';
    document.documentElement.lang = 'en';
  }
}




/*Modif*/
function changeLanguage(lang) {
  if (lang === 'fr') {
    /*Première page*/
    document.getElementById('ChrismassToggle').innerText = 'Mode Noël';
    document.getElementById('darkModeToggle').innerText = 'Mode Sombre';
    document.getElementById('Lobby').innerText = 'Accueil';
    document.getElementById('Presentation').innerText = 'Présentation';
    document.getElementById('Quizz').innerText = 'Quizz';
    document.getElementById('trad1').innerText = "Qu'est ce que c'est que la nuit de l'info ?";
    document.getElementById('trad2').innerText = "La nuit de l'info est un évènement compétitif national. Les participants ont toute une nuit pour réalisé un défi unique. En même temps, ils peuvent réaliser des défis proposés par des entreprises volontaires. C'est l'occasion de découvrir un nouvel aspect du travail en groupe. L'évènement débute le jeudi soir au coucher du soleil et se termine le lendemain au lever du soleil. Les meilleurs projets sont récompensés par les jurys de chacun des défis proposés. Ce grand évènement se déroule depuis 16 ans. C'est une expérience enrichissante, unique et accessible à tous les intéressés ";
    document.getElementById('trad3').innerText = " Site vers la nuit de l'info";
    document.getElementById('trad4').innerText = "L'équipe Unficsit et son projet Unclimated";
    document.getElementById('trad5').innerText = "Notre équipe a décidé de faire un site web qui permettrait à tout public de s'informer correctement au sujet des changements climatiques et son impact social, économique, etc. Pour cela, nous avons décidé de rester dans un domaine que nous maîtrisons et avons réalisé ce site web. Le but est d'avoir un site qui est à la fois pertinent et ludique. Un quizz a été mis à disposition pour éviter une lecture trop barbante. Il renvoie aux éléments  en question en cas d'erreur. Ce petit site est rempli de petits secrets cachés que vous pouvez découvrir (il faut savoir être patient)";
    document.getElementById('trad6').innerText = 'Notre expérience';
    document.getElementById('trad7').innerText = "Dans la globalité, l'expérience a été très bonne. Une bonne ambiance accompagnée d'un travail rigoureux. La recontre avec des professionnels étaient très intéressantes Le plus dur est de s'organiser en si peu de temps avec autant de monde. Cela a donné lieux à quelques ralentissements mais nous sommes tous fier du résultat que vous êtes en train de lire";
    document.getElementById('trad8').innerText = "-L'équipe Unficsit";
    document.getElementById('trad9').innerText = 'Membres du groupe';
    document.getElementById('trad10').innerText = 'Retour en haut';
    document.getElementById('trad11').innerText = 'Lien des pages du site';
    document.getElementById('trad12').innerText = 'Accueil';
    document.getElementById('trad13').innerText = 'Présentation';
    /*Première page*/
    /*Deuxième partie*/
    document.getElementById('ChrismassToggle').innerText = 'Mode Noël';
    document.getElementById('darkModeToggle').innerText = 'Mode Sombre';
    document.getElementById('Lobby').innerText = 'Accueil';
    document.getElementById('Presentation').innerText = 'Présentation';
    document.getElementById('Quizz').innerText = 'Quizz';
    document.getElementById('trad15').innerText = 'Tu as trouvé le secret';
    document.getElementById('trad16').innerText = "Ce n'est pas nouveau le climat est en déclin depuis de nombreuses années, la production de gaz à effet de serre (GES) ne fait qu'augmenter et aucune solution proposé n'est assez impactante pour réelement changer les choses. On nous donne des outils inadaptés à la situation, pour mieux le comprendre laissez nous vous présenter quelques exemples:";
    document.getElementById('trad17').innerText = 'La solution nucléaire';
    document.getElementById('trad18').innerText = "Quand nous pensons à une énergie bas carbone, la plupart des français penseront à la production nucléaire, en effet 80% de la production d'électricité en France provient du nucléaire.";
    document.getElementById('trad19').innerText = "Mais est-ce réelement la solution sur le long terme, d'après le 6ème rapport du GIEC non.";
    document.getElementById('trad20').innerText = "En effet l'impact ne serait pas très important et invertir dans le nucléaire serait, plus coûteux ($/GTCo2 eq en moins) et moins efficace que d'envestir dans l'éolien ou le solaire : -0,9 GTCo2 en 2030 pour le nucléaire contre -3,9 GTCo2 et -4,5 GTCo2 pour l'éolien et le solaire. ";
    document.getElementById('trad21').innerText = 'Les agro-carburants';
    document.getElementById('trad22').innerText = "Une autre solution souvent mise en avant sont les agro-carburants, malheureusement ces 'Carburants verts' sont plus du green washing qu'une solution contre le réchauffement climatique.";
    document.getElementById('trad23').innerText = "Cette méthode produit en effet moins de GES au niveau du pot d'échappement mais elle solicite la déforestation pour y installer les cultures nécessaires pour la production des ces fameux carburant, ce qui est grandement contre productif étant donné que la dégradation d'écosystème constitu une source très important de GES. ";
    document.getElementById('trad24').innerText = 'Les labels bas carbone';
    document.getElementById('trad25').innerText = "Encore un bel exemple de green waching: les labels bas carbone.";
    document.getElementById('trad26').innerText = "Nous pouvons prendre l'exemple de l'affaire 'Dieselgate' de Volkswagen qui grâce à des techniques frauduleuses à pû obtenir un label bas carbone et même des aides de l'État pour acheter leurs voitures alors que l'Audi A8 3.0 TDI 22 fois plus que le seuil Euro6.";
    document.getElementById('trad27').innerText = "Cette affaire a durée de 2009 à 2015 et 11 milions de véhicules ces voitures étaient dotées d'un système qui detectais quand les voitures étaient soumises à des tests d'émission en laboratoire et réduisaient artificiellement les émissions pour passer le teste.En condition réelle de conduite, les viotures émettaient en réalité beaucoup plus de polluants que les normes autorisées, jusqu'à 40 fois plus dans certains cas.";
    document.getElementById('trad28').innerText = "Le label bas carbone valorise également la capute de CO2 car le CO2 capturé ne compte pas dans les émissions, les agriculteurs sont donc insités à capturer le carbone ce qui n'est pas une solution adéquat, car le carbone n'est pas stocker de manière permanente, le sol peut relâcher le CO2 absorbé. Ce n'est qu'une bombe à retardement.";
    document.getElementById('trad29').innerText = "Mais ne vous en faites pas tout n'est pas perdu il existe des personnes qui se posent des questions et qui essaye de trouver des solutions qui soient réelements utiles pour le climat et aussi juste pour tous.";
    document.getElementById('trad30').innerText = "Les nombreuses organisations";
    document.getElementById('trad31').innerText = "le GIEC (Groupe d'experts intergouvernemental sur l'évolution de climat) est un organisme créer en 1988 qui est chargé d'évaluer l'empleur, les causes mais aussi les conséquences du changement climatique.";
    document.getElementById('trad32').innerText = "C'est l'organisation la plus influente qui planche pour le climat et elle 'impose' des réels objectifs à atteindre et leur conséquences.";
    document.getElementById('trad33').innerText = "La COP28 nous permettra de vérifier la réalité du point culminant d’un processus appelé « Bilan mondial », sur le chemin parcouru par le monde dans la lutte contre la crise climatique et sur l’ampleur de la nécessité d’un changement de cap.";
    document.getElementById('trad34').innerText = "Le Réseau Action Climat-France fédère 27 associations nationales et 10 associations locales, autour de la lutte contre le changement climatique.Il agit à toutes les échelles pertinentes, de l’international au local.Il est par ailleurs le représentant en France d’un large réseau mondial et européen,regroupant près de 1900 membres à travers la planète. ";
    document.getElementById('trad35').innerText = "Des solutions efficaces existes réelement";
    document.getElementById('trad36').innerText = "FarmStar est un service satellite proposé pour les agriculteurs qui permet de gérer touts les apports et ressources dont on besoin les plantes pour avoir le meilleur rendement possible, cela permet non seulement de limiter les pertes des agriculteur avec la sur-utilisation d'engrais mais aussi de maximiser leur gain, cette solution est donc juste et pour la planète et pour les agriculteurs !";
    document.getElementById('trad37').innerText = 'Les énergies renouvelables';
    document.getElementById('trad38').innerText = "D'après le 6ème rapport du GIEC passer à l'éolien et/ou au solaire permettrait de réduire de 4 GTCO2 eq/ans en 2030, c'est le changement le plus important que nous pourrions faire, et toujours d'après le GIEC à moindre coût !";
    document.getElementById('trad39').innerText = "On peut voir que le solaire et l'éolien (autant Onshore qu'Offshore) serait moins coûteu (en $/MWh) que le fuel. ";
    document.getElementById('trad40').innerText = 'Réduire la conversion des écosystèmes naturels';
    document.getElementById('trad41').innerText = "La réduction de la convertion des écosystème serait certes une opération plutôt coûteuses mais très rentables au niveau climatique, cela pourrait retirer jusqu'à 4 GTCO2 eq en 2030 d'après le rapport du GIEC, ce serait donc un grand pas vers une stabilisation au moins temporaire de notre climat.";
    document.getElementById('trad42').innerText = 'Les sources :';
    document.getElementById('trad43').innerText = 'Rapport du GIEC DE 2023';
    document.getElementById('trad44').innerText = "Résumé de la COP28 par l'Europe";
    document.getElementById('trad45').innerText = 'Société Farmstar de Airbus';
    document.getElementById('trad46').innerText = 'Ecoception et information en lien avec le numérique';
    document.getElementById('trad47').innerText = 'Dépistage de fausses informations à propos du climat';
    /*Deuxième partie*/
    document.documentElement.lang = 'fr';
  } else if (lang === 'en') {
    /*Première partie*/
    document.getElementById('ChrismassToggle').innerText = 'ChrismassMod';
    document.getElementById('darkModeToggle').innerText = 'DarkMod';
    //document.getElementById('Lobby').innerText = 'Lobby';
    document.getElementById('Presentation').innerText = 'Presentation';
    document.getElementById('Quizz').innerText = 'Quizz';
    document.getElementById('trad1').innerText = 'What is news night?';
    document.getElementById('trad2').innerText = "Info Night is a national competitive event. Participants have a whole night to complete a unique challenge. At the same time, they can complete challenges proposed by volunteer companies. This is an opportunity to discover a new aspect of group work. The event begins Thursday evening at sunset and ends the next day at sunrise. The best projects are rewarded by the juries for each of the proposed challenges. This major event has been taking place for 16 years. It is an enriching, unique experience accessible to all interested ";
    document.getElementById('trad3').innerText = " Site towards the night of information";
    document.getElementById('trad4').innerText = "The Unficsit team and its Unclimated project";
    document.getElementById('trad5').innerText = 'Our team decided to create a website that would allow everyone to be properly informed about climate change and its social, economic impact, etc. For this, we decided to stay in a field that we master and created this website. The goal is to have a site that is both relevant and fun. A quizz was made available to avoid too boring reading. It returns to the elements in question in case of error. This little site is full of little hidden secrets that you can discover (you have to be patient)';
    document.getElementById('trad6').innerText = 'Our experience';
    document.getElementById('trad7').innerText = "Overall, the experience was very good. A good atmosphere accompanied by rigorous work. The meeting with professionals was very interesting. The hardest part is organizing in such a short time with so many people. This gave rise to some slowdowns but we are all proud of the result you are reading";
    document.getElementById('trad8').innerText = '-The Unficsit team';
    document.getElementById('trad9').innerText = 'Group members';
    document.getElementById('trad10').innerText = 'Back to top';
    document.getElementById('trad11').innerText = 'Link to site pages';
    document.getElementById('trad12').innerText = 'Lobby';
    document.getElementById('trad13').innerText = 'Presentation';
    /*Première partie*/
    /*Deuxième partie*/
    document.getElementById('ChrismassToggle').innerText = 'Mode Noël';
    document.getElementById('darkModeToggle').innerText = 'Mode Sombre';
    document.getElementById('Lobby').innerText = 'Lobby';
    document.getElementById('Presentation').innerText = 'Presentation';
    document.getElementById('Quizz').innerText = 'Quizz';
    document.getElementById('trad15').innerText = 'You found the secret';
    document.getElementById('trad16').innerText = "This is nothing new: the climate has been in decline for many years, the production of greenhouse gases (GHG) is only increasing and no solution proposed is impactful enough to really change things. We are given tools that are unsuitable for the situation, to understand it better let us present some examples to you:";
    document.getElementById('trad17').innerText = 'The nuclear solution';
    document.getElementById('trad18').innerText = "When we think of low-carbon energy, most French people will think of nuclear production, in fact 80% of electricity production in France comes from nuclear power.";
    document.getElementById('trad19').innerText = "But is this really the long-term solution, according to the 6th IPCC report, no.";
    document.getElementById('trad20').innerText = "Indeed the impact would not be very significant and investing in nuclear power would be more costly ($/GTCo2 eq less) and less efficient than investing in wind or solar power: -0.9 GTCo2 in 2030 for nuclear versus -3.9 GTCo2 and -4.5 GTCo2 for wind and solar.";
    document.getElementById('trad21').innerText = 'Agrofuels';
    document.getElementById('trad22').innerText = "Another solution often put forward is agrofuels, unfortunately these 'Green Fuels' are more green washing than a solution against global warming.";
    document.getElementById('trad23').innerText = "This method actually produces less GHG at the level of the exhaust but it requires deforestation to install the crops necessary for the production of these famous fuels, which is greatly counterproductive given that the degradation of the ecosystem constitutes a very important source of GHGs.";
    document.getElementById('trad24').innerText = 'Low carbon labels';
    document.getElementById('trad25').innerText = 'Another great example of green waching: low carbon labels.';
    document.getElementById('trad26').innerText = "We can take the example of the Volkswagen 'Dieselgate' affair which, thanks to fraudulent techniques, was able to obtain a low carbon label and even state aid to buy their cars while the Audi A8 3.0 TDI 22 times more than the Euro6 threshold.";
    document.getElementById('trad27').innerText = "This affair lasted from 2009 to 2015 and 11 million vehicles were equipped with a system that detected when the cars were subjected to laboratory emissions tests and artificially reduced emissions to pass the test. In real life conditions driving, the cars actually emitted much more pollutants than the authorized standards, up to 40 times more in some cases.";
    document.getElementById('trad28').innerText = "The low carbon label also promotes the capture of CO2 because the CO2 captured does not count in emissions, farmers are therefore encouraged to capture carbon which is not an adequate solution, because carbon is not stored in an appropriate manner. permanently, the ground can release the absorbed CO2. It's just a time bomb.";
    document.getElementById('trad29').innerText = "But don't worry, all is not lost; there are people who are asking questions and trying to find solutions that are really useful for the climate and also fair for everyone.";
    document.getElementById('trad30').innerText = 'The many organizations';
    document.getElementById('trad31').innerText = "The IPCC (Intergovernmental Panel on Climate Change) is an organization created in 1988 which is responsible for evaluating the magnitude, causes and also consequences of climate change.";
    document.getElementById('trad32').innerText = "It is the most influential organization working for the climate and it “imposes” real objectives to be achieved and their consequences.";
    document.getElementById('trad33').innerText = "COP28 will allow us to verify the reality of the culmination of a process called “Global Stocktaking”, on how far the world has come in the fight against the climate crisis and on the extent of the need for a change of course.";
    document.getElementById('trad34').innerText = "The Climate Action Network-France brings together 27 national associations and 10 local associations, around the fight against climate change. It acts at all relevant scales, from international to local. It is also the representative in France of a large global and European network, bringing together nearly 1900 members across the planet.";
    document.getElementById('trad35').innerText = 'Effective solutions really exist';
    document.getElementById('trad36').innerText = "FarmStar is a satellite service offered for farmers which allows them to manage all the inputs and resources that plants need to have the best possible yield, this not only makes it possible to limit farmers' losses with the overuse of fertilizers but also to maximize their profit, this solution is therefore fair both for the planet and for the farmers!";
    document.getElementById('trad37').innerText = 'Renewable energies';
    document.getElementById('trad38').innerText = "According to the 6th IPCC report, switching to wind and/or solar power would reduce 4 GTCO2 eq/year in 2030, this is the most important change we could make, and still according to the IPCC cheaper !";
    document.getElementById('trad39').innerText = "We can see that solar and wind (both Onshore and Offshore) would be less expensive (in $/MWh) than fuel oil.";
    document.getElementById('trad40').innerText = 'Reduce the conversion of natural ecosystems';
    document.getElementById('trad41').innerText = "Reducing the conversion of ecosystems would certainly be a rather costly operation but very profitable in terms of climate, this could remove up to 4 GTCO2 eq in 2030 according to the IPCC report, it would therefore be a big step towards stabilization at least temporary of our climate.";
    document.getElementById('trad42').innerText = 'Sources';
    document.getElementById('trad43').innerText = '2023 IPCC report';
    document.getElementById('trad44').innerText = 'Summary of COP28 by Europe';
    document.getElementById('trad45').innerText = 'Airbus Farmstar Company';
    document.getElementById('trad46').innerText = 'Ecoception and information linked to digital';
    document.getElementById('trad47').innerText = 'Screening for false information about the climate';
    /*Deuxième partie*/
    document.documentElement.lang = 'en';
  }
}
/*Modif*/



//Ez

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scale = 10;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

let snake;
let fruit;

// ...
function initGame() {
    snake = new Snake();
    fruit = new Fruit();
    fruit.pickLocation();

    // Réinitialise le jeu
    window.clearInterval(gameInterval);
    gameInterval = window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        fruit.draw();
        snake.update();
        snake.draw();

        if (snake.eat(fruit)) {
            fruit.pickLocation();
        }
    }, 250);
}

function resetGame() {
    alert("Tu as perdu !");
    initGame();
}

(function setup() {
    snake = new Snake();
    fruit = new Fruit();
    fruit.pickLocation();

    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        fruit.draw();
        snake.update();
        snake.draw();

        if (snake.eat(fruit)) {
            fruit.pickLocation();
        }
    }, 250);
    window.addEventListener('keydown', ((evt) => {
        const direction = evt.key.replace('Arrow', '');
        snake.changeDirection(direction);
    }));
    
}());

function Fruit() {
    this.pickLocation = function() {
        this.x = (Math.floor(Math.random() * columns - 1) + 1) * scale;
        this.y = (Math.floor(Math.random() * rows - 1) + 1) * scale;
    }

    this.draw = function() {
        ctx.fillStyle = "#ff0000";
        ctx.fillRect(this.x, this.y, scale, scale);
    }
}



function Snake() {
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.xSpeed = scale * 1;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];

    this.draw = function() {
        ctx.fillStyle = "#00ff00";
        for (let i = 0; i < this.tail.length; i++) {
            ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
        }
        ctx.fillRect(this.x, this.y, scale, scale);
    }

    this.update = function() {
        // Vérification de collision avec la queue
        for (let i = 0; i < this.tail.length; i++) {
            if (this.x === this.tail[i].x && this.y === this.tail[i].y) {
                resetGame();
            }
        }

        for (let i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i + 1];
        }

        if (this.total >= 1) {
            this.tail[this.total - 1] = { x: this.x, y: this.y };
        }

        this.x += this.xSpeed;
        this.y += this.ySpeed;

        // Logique de collision avec les murs
        if (this.x >= canvas.width || this.y >= canvas.height || this.x < 0 || this.y < 0) {
            resetGame();
        }
    }

    this.eat = function(fruit) {
        if (this.x === fruit.x && this.y === fruit.y) {
            this.total++;
            return true;
        }
        return false;
    }

    this.changeDirection = function(direction) {
        switch(direction) {
            case 'Up':
                if (this.ySpeed === 0) {
                    this.xSpeed = 0;
                    this.ySpeed = -scale * 1;
                }
                break;
            case 'Down':
                if (this.ySpeed === 0) {
                    this.xSpeed = 0;
                    this.ySpeed = scale * 1;
                }
                break;
            case 'Left':
                if (this.xSpeed === 0) {
                    this.xSpeed = -scale * 1;
                    this.ySpeed = 0;
                }
                break;
            case 'Right':
                if (this.xSpeed === 0) {
                    this.xSpeed = scale * 1;
                    this.ySpeed = 0;
                }
                break;
        }
    }
}
let gameInterval;
document.addEventListener("DOMContentLoaded", initGame);