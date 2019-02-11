/*
	* DEVELOPER  : Dimitri GUERROUE
  * CONTACT    : contact@guerroue.fr
*/
window.onload = function (e) { //when images are loaded
  /* nosteal */

  //Styles de la div de protection
  var nosteal_css = `
  /* Style nosteal */
  div.nosteal{ position: relative; }
	div.nosteal:before{
		content: '';
		display: block;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,0.001);
	}`;

  //Creation de la balise style dans le head
  var nosteal_style = document.createElement('style');
  nosteal_style.type = 'text/css';

  //Ajout du css dans la balise style
  nosteal_style.appendChild(document.createTextNode(nosteal_css));
  document.head.appendChild(nosteal_style);

  //get images
  var nosteal_img_class = 'nostealplease'
  var nosteal_img_nodes = document.querySelectorAll('img.' + nosteal_img_class);

  //Pour chaques images ayant la classe nosteal_img_class y ajouter la div de protection
  nosteal_img_nodes.forEach(function (elem) {
    elem.insertAdjacentHTML('afterend', '<div class="nosteal"></div>');
    elem.nextSibling.appendChild(elem);
  });
}
