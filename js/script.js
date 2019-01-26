/******************************************
Stephen Parker:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
const pageDiv = document.getElementsByClassName("page");
const masterUl = document.querySelector('.student-list');
const li = document.getElementsByClassName('student-item');
const studentList = [];
let page = 0;


const addStudents = (list, listTwo) => {
   for (i = 0; i < listTwo.length; i++) {
      list.push(listTwo[i]);
   }
};

addStudents(studentList, li);

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

const showPage = (list, page) => {
   for (let i = 0; i < list.length; i++) {
      if (i >= page * 10 && i <= page * 10 + 9) {
         list[i].style.display = "block";
      } else {
         list[i].style.display = "none";
      }
   }
};

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

const appendPageLinks = (list) => {
   showPage(studentList, 0);
   const pageDiv = document.querySelector(".page");
   const pages = list.length / 10;
   const div = document.createElement("div");
   div.className = "pagination";
   masterUl.after(div);

   const ul = document.createElement("ul");
   div.appendChild(ul);

   const pageList = [];
   for (i = 0; i < pages; i++) {
      pageList.push(i);
   }

   for (let i = 0; i < pageList.length; i++) {
      const a = document.createElement("a");
      let li = document.createElement("li");
      ul.appendChild(li);
      li.appendChild(a);
      a.style.cursor = 'pointer';
      a.textContent = pageList[i] + 1;
      a.addEventListener('click', function (event) {
         page = pageList[i];
         showPage(studentList, page);
         event.target.classList.add('active');
         console.log(page);
      });
   }



   // for (let i = 0; i < pageLinks.length; i++) {
   //    pageLinks[i].addEventListener("click", console.log('squirt'), false);
   // }

};

appendPageLinks(studentList);

// Remember to delete the comments that came with this file, and replace them with your own code comments.