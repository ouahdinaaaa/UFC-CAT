function copyContract(text, btnId) {
	// Sélectionnez l'élément de texte à copier
	var contractElement = document.getElementById("contract");

	// Rendre l'élément de texte visible temporairement
	contractElement.classList.remove("hiddens");

	// Copiez le texte dans le presse-papiers
	contractElement.select();
	document.execCommand("copy");

	// Cacher l'élément de texte à nouveau
	contractElement.classList.add("hiddens");

	// Changez le texte du bouton pour indiquer que le contrat a été copié
	var btn = document.getElementById(btnId);
	btn.textContent = "Copied";
  }