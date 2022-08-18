//Footer array to easily edit footer sentence

let codingLanguages = ["HTML", "CSS", "JavaScript"]

let codingLanguagesButLast = codingLanguages.slice(0, -1);

let codingLanguagesLast = codingLanguages.at(-1);

document.getElementById("coding-languages").innerHTML = `This website has been created with: ` + codingLanguagesButLast.join(', ') + ` and ` + codingLanguagesLast;