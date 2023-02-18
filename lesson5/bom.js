
const button = document.getElementById("submit");
const list = document.getElementById("list");



function send(){
     let inp = document.getElementById("favchap").value;

    if (inp !== ""){
        let li = document.createElement("li");
        let x = document.createElement("button");
        li.textContent = inp;
        x.textContent = "X";
        li.append(x);
        list.append(li);
        document.getElementById("favchap").setAttribute('value', "");
        document.getElementById("favchap").setAttribute('Placeholder', "");
        document.getElementById("favchap").value = "";
        function rem(){
            li.remove()
        }
        x.addEventListener("click", rem);
    }
    
}




button.addEventListener("click", send);

