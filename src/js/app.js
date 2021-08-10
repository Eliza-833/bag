
// Показывать/скрыть окно
$(document).ready(function () {
   $(".nav__card").click(function () {
      $(".basket").show(700);
   })
   $(".dropdown").click(function () {
      $(".basket").show(700);
   })
   $(".close").click(function(){
      $(".basket").hide(700);
   })
});

let cart = {
   'abcd': {
      "name": "bag",
      "count": 1,
   }
};

let num = {
   'number': {
      "name": "ba",
      "count": 2,
   }
}

document.onclick = event => {
   console.log(event.target.classList);
   if (event.target.classList.contains('plus')) {
      plusFunction(event.target.dataset.id);
   }

   if (event.target.classList.contains('minus')) {
      minusFunction(event.target.dataset.id);
   }
}

const plusFunction = id => {
   cart[id]['count']++;
   renderCart();
}

const minusFunction = id => {
   if (cart[id]-1 == 0) {
      deleteFunction(id);
      return true;
   }
   cart[id]['count']--;
   renderCart();
}

const deleteFunction = id => {
   delete cart[id];
   renderCart();
}

const renderCart = () => {
   console.log(cart);
}
renderCart();


var x, i, j, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
   selElmnt = x[i].getElementsByTagName("select")[0];
   a = document.createElement("DIV");
   a.setAttribute("class", "select-selected");
   a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
   x[i].appendChild(a);
   b = document.createElement("DIV");
   b.setAttribute("class", "select-items select-hide");
   for (j = 1; j < selElmnt.length; j++) {
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function (e) {
         var y, i, k, s, h;
         s = this.parentNode.parentNode.getElementsByTagName("select")[0];
         h = this.parentNode.previousSibling;
         for (i = 0; i < s.length; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
               s.selectedIndex = i;
               h.innerHTML = this.innerHTML;
               y = this.parentNode.getElementsByClassName("same-as-selected");
               for (k = 0; k < y.length; k++) {
                  y[k].removeAttribute("class");
               }
               this.setAttribute("class", "same-as-selected");
               break;
            }
         }
         h.click();
      });
      b.appendChild(c);
   }
   x[i].appendChild(b);
   a.addEventListener("click", function (e) {
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
   });
}

function closeAllSelect(elmnt) {
   var x, y, i, arrNo = [];
   x = document.getElementsByClassName("select-items");
   y = document.getElementsByClassName("select-selected");
   for (i = 0; i < y.length; i++) {
      if (elmnt == y[i]) {
         arrNo.push(i)
      } else {
         y[i].classList.remove("select-arrow-active");
      }
   }
   for (i = 0; i < x.length; i++) {
      if (arrNo.indexOf(i)) {
         x[i].classList.add("select-hide");
      }
   }
}

// document.addEventListener("click", closeAllSelect);

