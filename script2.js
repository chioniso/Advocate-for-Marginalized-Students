var outputBtn = document.getElementById("outputBtn");
outputBtn.addEventListener("click", displayMessage);

var showMessage = document.getElementById("message");

function displayMessage(){
console.log ("text");
 var inputText1 = document.getElementById("inputText1").value;
 var inputText2 = document.getElementById("inputText2").value;
 showMessage.innerHTML = "Hello " + inputText1 + ", my name is " + inputText2 + ",<br><br>How are you?<br><br>I’m looking to talk about an issue that has been affecting many students whose identity caused them harassment, neglect, and hinder their success in a school or a higher education setting, also known as marginalized students. These students are left out or neglected just because of their skin color, physical conditions, and or status. But the most important issue is that the schools or even some of the teachers or staff are not doing enough in preventing this issue or doing enough to try and understand these students. Education should be easy to access, and every student has the right to feel safe and comfortable in the school environment. A student of color has to experience judgments from others just because of their skin color, an immigrant student has to wonder about their future or their current situation just because of their status, a disabled student has to go extra steps and face more obstacles just to receive the same education as everyone else, an impoverished student has to wonder if they’ll be able to afford the education they deserve, and an English learner has to wonder if they’ll ever be able to move to a regular English class with regular students and finally learn on the same level. So, " + inputText1 + ", please consider ways of improving the school environment for these marginalized students, from as little as talking to school staff and improving communication with these students, to creating programs to help them feel more comfortable in the school setting, any big or little step can help improve our educational environment.<br><br>Thank you, and please consider what I’ve said here today.<br>";
}


