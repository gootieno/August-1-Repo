const select = () => {
  /* Write queries for each of the following */

  /* Section 1 */
  // 1. Get all seeded fruit elements
  // Your code here
  let seeds = document.getElementsByClassName("seed");

  console.log("seeds");
  for (let i = 0; i < seeds.length; i++) {
    console.log(seeds[i].innerHTML);
    // console.log(seeds[i]);
  }
  // 2. Get all seedless fruit elements
  // Your code here
  const hachiRoku = document.getElementsByClassName("seedless");
  console.log("seedless ", hachiRoku);
  // 3. Get first seedless fruit element
  // Your code here
  const firstSeedless = document.querySelector(".seedless");
  console.log("first seedless ", firstSeedless);
  /* Section 2 */
  // 4. Get inner span with text "you"
  // Your code here
  const wrapper = document.getElementById("wrapper");
  console.log("wrapper ", wrapper);
  const pElement = wrapper.querySelector("p");
  console.log("p element children value", pElement.children[0].innerHTML);
  // 5. Get all children of element "wrapper"
  // Your code here
  const wrapperChildren = document.getElementById("wrapper").children;
  console.log("wrapper children ", wrapperChildren);

  console.log("p tag ", inner); // wierd id selection
  // 6. Get all odd number list items in the list
  // Your code here
  const oddItems = document.querySelectorAll("li.odd");
  console.log("odd items ", oddItems);
  // 7. Get all even number list items in the list
  // Your code here
  const evens = document.querySelectorAll("ol > li:not(.odd)");
  console.log("evens ", evens);
  /* Section 3 */
  // 8. Get all tech companies without a class name
  // Your code here

  //   const classListTech = document.querySelectorAll(
  //     "a:not(.social, .shopping)"
  //   )[0];
  const classListTech = document.querySelectorAll("a:not([class])")[0];

  console.log("all tech no class ", classListTech);

  let comps = document.getElementById("three").getElementsByTagName("a");

  for (let i = 0; i < comps.length; i++) {
    if (comps[i].className === "") console.log(comps[i]);
  }

  // 9. Get "Amazon" list element
  // Your code here
  console.log("amazon ", document.querySelector(".shopping"));
  // 10. Get all unicorn list elements (not the image element)
  // Your code here
  const companyList = document.getElementById("three");

  const unicorn = companyList.querySelectorAll("li");
  console.log("unicorn list", unicorn);
};

window.onload = select;
