const member1 = document.getElementById('mem1-div');
const member2 = document.getElementById('mem2-div');



function selectMember1() {
    member1.classList.remove("hide");
    member2.classList.add("hide");
}

function selectMember2() {
    member2.classList.remove("hide");
    member1.classList.remove("hide");

}

member1.addEventListener('click', selectMember1());