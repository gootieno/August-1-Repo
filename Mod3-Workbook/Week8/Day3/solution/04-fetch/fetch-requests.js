/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============== 1. Print the status code of the response =============== */
/* ====== 2. Print true if the status of the response was successful ====== */
/* =================== 3. Print the Content-Type Header =================== */
/* ============== 4. Print the body of the response as text =============== */

// Your code here

const getProduct = async () => {
  const response = await fetch("/products");

  console.log("response ", response);

  console.log("status  ", response.status);

  console.log("response okay? ", response.ok);

  console.log("headers ", response.headers.get("content-type"));

  const text = await response.text();
  const noAwaitText =response.text();
  console.log("response text ", text);
  console.log("response text no await", noAwaitText);
};
