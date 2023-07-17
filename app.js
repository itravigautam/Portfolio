(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();



var typed = new Typed(".text",{
    strings:["Frontend Developer", "Web Designer", " in love to create functional websites"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


			const scriptURL = 'https://script.google.com/macros/s/AKfycbyEx96yQV2w1Sp2abBhAzRcKv8-X-3Zd10JpXGX0MiJemLwQFF1NNgGYObx1vgPOuh9/exec'
			const form = document.forms['PortfolioData']
		  
			form.addEventListener('submit', e => {
			  e.preventDefault()
			  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
				.then(response => alert("Thank you! your form is submitted successfully." ))
				.then(() => {  window.location.reload(); })
				.catch(error => console.error('Error!', error.message))
			})
		 