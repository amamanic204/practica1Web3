function mostrarDatos(datos){
	const div = document.createElement("div");
	div.innerHTML=`
		<h3>${datos.title}</h3>
		<p><b>Categoría: </b>${datos.category}</p>
		<p><b>Precio: </b>$${datos.price}</p>
		<img src="${datos.images[0]}">
	`;
	div.addEventListener("click", () => {
		mostrarToast(`Gracias por su compra de "${datos.title}" por $${datos.price}`);
	});
	lista.appendChild(div);
}


function mostrarToast(mensaje){
	const toast = document.createElement("div");
	toast.className = "toast";
	toast.textContent = mensaje;
	document.body.appendChild(toast);
	setTimeout(() => toast.classList.add("show"), 100);
	setTimeout(() => {
		toast.classList.remove("show");
		setTimeout(() => document.body.removeChild(toast), 500);
	}, 3000);
}
