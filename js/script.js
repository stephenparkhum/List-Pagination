/******************************************
Stephen Parker:
FSJS project 2 - List Filter and Pagination
******************************************/

// GLOBAL VARIABLES
const pageDiv = document.getElementsByClassName("page");
const masterUl = document.querySelector('.student-list');
const li = document.getElementsByClassName('student-item');
const studentList = [];
let page = 0;


// ADD STUDENTS
/***  

- This function below called 'addStudents' is a basic function that allows me to get all of the information from the student
li items, into a list that I can loop through 

***/

const addStudents = (list, listTwo) => {
   for (i = 0; i < listTwo.length; i++) {
      list.push(listTwo[i]);
   }
};

addStudents(studentList, li);

/*** 
-- SHOW PAGE FUNCTION -- 
- This function takes in a 'list' and the 'page' number as the parameter. Ultimately, the goal was to designate how many items, 
and what items specifically were needing to be displayed on each page. 
- A 'for loop' is created to loop through the array that's defined when in the "list" paramater, when calling this function. 
Inside that 'for loop' I nested an 'if statement' that tells the function to look for which items should be displayed on the page. 
- The items that should be displayed are as follows: 
-- 'If' the index is **greater than or equal to** the page number * 10
--- This shows which items should begin the list on the page. For example: if the page number is 0 the equation would read:
--- if (0 >= 0 * 10) - [this would come up with '0'] 
--- Alternatively, if (1 >= 1 * 10) would set the beginning threshold to '10.'

--  && 'If' the index is **less than or equal to** the page number * 10 + 9 
--- This shows how many items should be displayed on the page as a whole, when the page link is clicked
--- if (0 <= 0 * 10 + 9) - [this would come up with 9, and since the array begins with '0', having items all the way up to '9' will actually display 10 items in total]
--- Alternatively, if (1 <= 1 * 10 + 9) would set the ending threshold to '19'.


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
-- APPEND PAGE LINKS --
**This function is verbose and quite a hefty undertaking, but I'll explain it in as few words as I can!**
** Items talked about will be numbered in the function itself! **

--PROCESS--
1. I added the showPage() function to run right at the beginning, with the page of '0', which allowed it to start from Page 1.
2. Function specific variables are created within the first chunk of this 
3. This 'for loop' goes through the pages length (through 'const pages') and pushes each item to the list called PagesList
4. This particular 'for loop' is for creating all of the pagination links that are generated when the amount of pages needed is set.
5. The 'pageLinks' variable queries all of the '.pagination ul li a' elements in order to manipulate them later! 
6. this ul Event Listener dynamically adds and removes the 'active' class from each of the links. If a link/page # is clicked, the 'active' class is added.

***/

const appendPageLinks = (list) => {
   // #1
   showPage(studentList, 0);
   
   // #2
   const pageDiv = document.querySelector(".page");
   const pages = list.length / 10;
   const div = document.createElement("div");
   div.className = "pagination";
   masterUl.after(div);
   const ul = document.createElement("ul");
   div.appendChild(ul);
   const pageList = [];

   // #3
   for (i = 0; i < pages; i++) {
      pageList.push(i);
   }

   // #4
   for (let i = 0; i < pageList.length; i++) {
      const a = document.createElement("a");
      let li = document.createElement("li");

      ul.appendChild(li);
      li.appendChild(a);

      if (i === 0) {
         a.classList.add('active');
      }

      a.style.cursor = 'pointer';
      a.textContent = pageList[i] + 1;

   }
   // #5
   let pageLinks = document.querySelectorAll('.pagination ul li a');
   
   // #6
   ul.addEventListener('click', function (event) {
      if (event.target.tagName === 'A') {
         for (let i = 0; i < pageLinks.length; i++) {
            pageLinks[i].classList.remove('active');
         }
         page = event.target.innerText - 1;
         event.target.classList.add('active');
         showPage(studentList, page);
      }
   });
};

// The complete aapendPageLinks function call!

appendPageLinks(studentList);