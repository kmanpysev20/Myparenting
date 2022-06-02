//등록 및 수정 버튼 터치 Event code

function btn_modify1() {
  if(confirm("수정 페이지로 이동 하겠습니까?")==true) {
    window.location.href = "modify.html" 
  } else {
    
  }
};

function btn_modify2() {
  if(confirm("수정 하시겠습니까??")==true) {
    window.location.href = "modify.html" 
  } else {
    
  }
};

// write.html -> 날짜 게산 code
date = new Date();
year = date.getFullYear();
month = date.getMonth()+1;
day = date.getDate();
document.getElementById("date").innerHTML = year + "/" + month + "/" + day;

//총 분유량
function sum() {
  
  if(confirm("수정하시겠습니까?")==true) {
    // 서린 총 분유량
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    document.getElementById("result1").value = Number(num1)+Number(num2);
  
    // 서준 총 분유량
    let num21 = document.getElementById("num21").value
    let num22 = document.getElementById("num22").value
    document.getElementById("result2").value = Number(num21)+Number(num22);
  } else {
    alert("취소하였습니다.")
  }
}





