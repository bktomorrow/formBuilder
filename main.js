// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
( function(){
  // Select the first element from the array
  let first = formData[ 0 ];
  // Log the first object
  console.log( first );
  // Log the string "First Name"
  console.log( first.label );
} )();


// -------- Your Code Goes Below this Line --------

	let div_tag = document.getElementById("fields");

	let firstName = document.createElement("input");
		firstName.setAttribute('type',formData[0].type);
		firstName.setAttribute('id',formData[0].id);
		firstName.setAttribute('label',formData[0].label);
		firstName.setAttribute('options',formData[0].options);
		firstName.setAttribute('placeholder',formData[0].label);
		
	let lastName = document.createElement("input");
		lastName.setAttribute('type',formData[1].type);
		lastName.setAttribute('id',formData[1].id);
		lastName.setAttribute('placeholder',formData[1].label);
		lastName.setAttribute('options',formData[1].options);
		
	let email = document.createElement("input");
		email.setAttribute('type',formData[2].type);
		email.setAttribute('id',formData[2].id);
		email.setAttribute('placeholder',formData[2].label);
		email.setAttribute('options',formData[2].options);
		
	let url = document.createElement("input");
		url.setAttribute('type',formData[3].type);
		url.setAttribute('id',formData[3].id);
		url.setAttribute('placeholder',formData[3].label);
		url.setAttribute('options',formData[3].options);
		
	let lang = document.createElement("select");
		lang.setAttribute('id',formData[4].id);
		lang.setAttribute('name',formData[4].label);
		lang.setAttribute('label',formData[4].label);
		let options_0 = document.createElement("option");
		let options_1 = document.createElement("option");
		let options_2 = document.createElement("option");
		let options_3 = document.createElement("option");
		let options_4 = document.createElement("option");
		let options_5 = document.createElement("option");
		
			options_0.setAttribute('value', formData[4].value);
			options_0.setAttribute('label', formData[4].label);
			options_1.setAttribute('value', formData[4].options[0].value);
			options_1.setAttribute('label', formData[4].options[0].label);
			options_2.setAttribute('value', formData[4].options[1].value);
			options_2.setAttribute('label', formData[4].options[1].label);
			options_3.setAttribute('value', formData[4].options[2].value);
			options_3.setAttribute('label', formData[4].options[2].label);
			options_4.setAttribute('value', formData[4].options[3].value);
			options_4.setAttribute('label', formData[4].options[3].label);
			options_5.setAttribute('value', formData[4].options[4].value);
			options_5.setAttribute('label', formData[4].options[4].label);

		
	let comment = document.createElement("textarea");
		comment.setAttribute('type',formData[5].type);
		comment.setAttribute('id',formData[5].id);
		comment.setAttribute('placeholder',formData[5].label);
		comment.setAttribute('options',formData[5].options);
		
	let tel = document.createElement("input");
		tel.setAttribute('type',formData[6].type);
		tel.setAttribute('id',formData[6].id);
		tel.setAttribute('placeholder',formData[6].label);
		tel.setAttribute('options',formData[6].options);
		
	let tel_home = document.createElement("input");
		tel_home.setAttribute('type',formData[7].type);
		tel_home.setAttribute('id',formData[7].id);
		tel_home.setAttribute('placeholder',formData[7].label);
		tel_home.setAttribute('options',formData[7].options);
		
		div_tag.appendChild(firstName);
		div_tag.appendChild(lastName);
		div_tag.appendChild(email);
		div_tag.appendChild(url);
		div_tag.appendChild(lang);
		div_tag.appendChild(comment);
		div_tag.appendChild(tel);
		div_tag.appendChild(tel_home);

		lang.appendChild(options_0);
		lang.appendChild(options_1);
		lang.appendChild(options_2);
		lang.appendChild(options_3);
		lang.appendChild(options_4);
		lang.appendChild(options_5);