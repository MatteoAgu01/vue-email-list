
/*Descrizione:
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
Buon pomeriggio e buon lavoro !!!*/

const { createApp } = Vue;

createApp({
	data() {
		return {
			generatedMail: [],
			basePath: 'https://flynn.boolean.careers/exercises/api/',
		}
	},
	methods: {
		getData() {
			this.generatedMail = [];

			//create and push rdm mail in array 
			for (let i = 0; i < 10; i++) {

				axios.get(this.basePath + 'random/mail').then((res) => {
					console.log(res.data.response);
					this.generatedMail.push(res.data.response);
				});
			}
		}
	},
	mounted() {
		this.getData();
	}
}).mount('#app');