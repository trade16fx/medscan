

var inputsMask = document.querySelectorAll('[type="tel"]');

inputsMask.forEach(item => {	
	var im = new Inputmask("+7 (999) 999-99-99");
	im.mask(item);
})

const forms = () => {
	const form = document.querySelectorAll('form'),
				inputsTxt = document.querySelectorAll('[type="text"]'),
				inputsEmail = document.querySelectorAll('[type="email"]'),
				inputsTel = document.querySelectorAll('[type="tel"]');
				

	const postData = async (url, data) => {
		let res = await fetch(url, {
			method: 'POST',
    	body: data
		});

		return await res.text();
	}

	const clearInputs = () => {
		inputsTxt.forEach(item => {
			item.value = '';
		})
		inputsEmail.forEach(item => {
			item.value = '';
		})
		inputsTel.forEach(item => {
			item.value = '';
		})
	};
	

	const isEmailValid = (emailAdress) =>{
    var EMAIL_REGEXP = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return EMAIL_REGEXP.test(emailAdress)
  } 

  const isRequired = (val, len) =>{

  }

	form.forEach(item => {
		item.addEventListener('submit', (e) =>{
			e.preventDefault();

			let inpEmailLen = item.querySelectorAll('[type="email"]').length;
			let mailCheck = false;

			if (inpEmailLen) {
				let inpEmailTxt = item.querySelector('[type="email"]').value;
				if (isEmailValid(inpEmailTxt)) {
					mailCheck = true;
				}				
			} else {
				mailCheck = true;
			}

			alert(mailCheck);

			

			if (mailCheck) {					

				const formData = new FormData(item);
				postData('mail/mail.php', formData)
					.then(res => {
						alert(res);
					})
					.catch(() => alert('error'))
					.finally(() => {
						clearInputs();
						setTimeout(
	            function(){
		        		// $('#exampleModal').modal('hide');
		        		// $.fancybox.close();
		        	}, 2000
	          )
						
					});

			}	
		})
	});
}

forms();

// formElem.onsubmit = async (e) => {
//   e.preventDefault();



//   let response = await fetch('mail/form.php', {
//     method: 'POST',
//     body: new FormData(formElem)
//   });

//   let result = await response.json();

//   alert(result.message);

//   };

