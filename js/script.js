class Calculator {
  result = "";
  temp= "";
  operator = ""; 

  constructor(element) {
    this.element = document.getElementById(element);
    this.keyListener();
    this.operateListener();
    this.resultOperateListener();
  }

  keyListener() {
    document.addEventListener("keydown", function (event) {
      if (event.keyCode >= 48 && event.keyCode <= 57) {
        console.log(event.key);
      }
      console.log(event);
    });

    document.addEventListener("keydown", function (event) {
      if ((event.keyCode = 107)) {
        console.log(event.key);
      }
      console.log(event);
    });

    document.addEventListener("keydown", function (event) {
      if ((event.keyCode = 106)) {
        console.log(event.key);
      }
      console.log(event);
    });

    document.addEventListener("keydown", function (event) {
      if ((event.keyCode = 111)) {
        console.log(event.key);
      }
      console.log(event);
    });

    document.addEventListener("keydown", function (event) {
      if ((event.keyCode = 109)) {
        console.log(event.key);
      }
      console.log(event);
    });

    document.addEventListener("keydown", function (event) {
      if ((event.keyCode = 187)) {
        console.log(event.key);
      }
      console.log(event);
    });
  }

  operateListener() {
    this.element.addEventListener("click", (event) => {
      if (event.target.value === "+") {
        console.log(event);
        this.sum();
      } else if (event.target.value === "-") {
        console.log(event);
        this.subtract();
      } else if (event.target.value === '*') {
        console.log(event);
        this.multiply();
      }else if (event.target.value === '/') {
        console.log(event);
        this.divide();
      }
    });
  }

  resultOperateListener() {
    this.element.addEventListener("click", (e) => {
      if (e.target.value === "AC") {
        this.result = 0;
      } else if (e.target.value === "=") {
        //işlemi yaptır
        
        this.setResult();
        alert("aass")
      } else {
            if (this.result == 0) {
                this.result = e.target.value;
            } else {
            this.result += e.target.value;
            }
        }
      this.setResult(this.result);
    });
  }

  mathOperations() {
    
  }  

  setResult() {      
    //sonucu ekrana yaz
    document.getElementsByClassName("inputVal")[0].innerHTML = this.result;
  }

  sum() {
    console.log("aaaaa");
    let result = this.result + getElementById("numberArea").element;
    this.setResult(result);
  }

  multiply() {
    let result = this.result * getElementById("numberArea").element;
    this.setResult(result);
  }

  divide() {
    let result = this.result / getElementById("numberArea").element;
    this.setResult(result);
  }

  subtract() {
    let result = this.result - getElementById("numberArea").element;
    this.setResult(result);
  }
}