 //~~~~>~~~~~>~~~~Object, Array and function~~~~~~>~~~~~~>~~~~~~~~~~~~

 //Task No 1~~~~~~~~~~Assignment 1: Building Your Friend List~~~~~~~~~~~~~
 /*Task: Create a program that manages a simple friend list.
 1. Define an object named people containing an empty array called friends.
 2. Create three separate objects, each representing a friend, with properties like firstName, 

 lastName, and optionally id.
 3. Add these friend objects to the friends array within the people object.
 4. Output the entire people object to the console, displaying your information and your 
 friend list.*/
 //let people ={

 let people = {
  friends: [] as friend[],
 };

 type friend = {
    firstName: string,
    lastName: string,
    id?: number
 };
 let friend1:friend = {
    firstName: "Niba",
    lastName:  "khan",
    id: 1567
 };

 let friend2:friend = {
    firstName: "Maham",
    lastName:  "khan",
    id: 1658
 };

 let friend3:friend = {
    firstName: "kinza",
    lastName:  "khan",
    id: 1465
 }

 people.friends.push(friend1, friend2, friend3)

 console.log(people)

 //Task2~~~~~~~~~~~~Assignment 2:Manipulating an Array: Rearranging Words~~~~~~~~~~~~~~~~~~~~~~

 /*Objective:
 Rearrange an array using array methods to form the sentence "I am a student of GIAIC".
 Steps:
 1. Scrambled Array:
 o Start with an array of elements in a scrambled order, like:
 const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
 • Modify the Array:
 • Use methods like split(), join(), push(), pop(), shift(), and unshift() to: 
 o Convert non-strings (booleans, numbers) to strings if needed.
 o Split elements into character arrays (optional).
 o Rearrange characters or elements in the desired order (modify original array or 
 create temporary arrays).
 • Output the Result:
 • Use join() to combine elements back into a single string: "I am a student of GIAIC".*/

 //Define Scramble Array
 let scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"]

 //Methods
 scrambledArray.splice(3,1)
 scrambledArray.splice(2,1)
 scrambledArray.splice(1,1)
 scrambledArray.pop()
 scrambledArray.splice(0,1,"I")
 scrambledArray.splice(3,1, "student", "of")
 scrambledArray.push("GIAIC")
 console.log(scrambledArray.join(" "))


 //Task3~~~~~~~~~~~~~~~ Company Product Catalog~~~~~~~~~~~~~~~~~~~~~~

 /*Learning Objective: Implement data structures in TypeScript to represent and manage product 
 information.
 Task: Create a program to represent a product catalog using an array and perform basic queries.
 1. Define an array named inventory to store product information.
 2. Create three
  separate objects, each representing a product, with properties like name, 
 model, cost, and quantity.
 3. Add these product objects to the inventory array using an appropriate array method.
 4. Access and log the quantity property of a specific product (e.g., third product) in the 
 inventory array.
 5. Explore adding and accessing more elements within the inventory array to understand 
 how to manage product data*/


 let inventory = {
    products: [] as product[]
 };

 type product = {
    name: string,
    model: string,
    cost: number,
    quantity: number
 };

 let product1:product = {
    name: "SmartPhone",
    model: "Iphone",
    cost: 150000,
    quantity: 20
 };

 let product2:product = {
    name: "laptop",
    model: "Hp",
    cost: 70000,
    quantity: 40
 };

 let product3:product = {
    name: "smart Watch",
    model: "Apple",
    cost: 50000,
    quantity: 50
 };

 inventory.products.push(product1,product2, product3);

 console.log("Quantity of Third Product",inventory.products[2].quantity);

 let product4:product = {
   name: "HeadPhones",
   model: "2022",
   cost: 30000,
   quantity: 60
 }

 let product5:product = {
   name: "Toyota car",
   model: "2024",
   cost: 400000,
   quantity: 20
 }

 //inventory.products.push(product4, product5);
 let updateInventory = inventory.products.push(product4, product5);
 console.log(updateInventory);

 console.log("Name of the fifth product", inventory.products[3].name);
 console.log("cost of the first product", inventory.products[0].cost);


 //TAsk 4 ~~~~~~~~~~~~~~~~~~~Student List Organizer~~~~~~~~~~~~~~~~~~~~~
 /*Learning Objective: Get comfortable with data structures (objects and arrays) and basic 
 functions in TypeScript.
 Tasks:
 1
 . Student Data: The provided code defines an interface named Student that describes 
 student information like name, senior status (true/false), and whether they've completed 
 their assignments (true/false).
 o Imagine this as a template for organizing student details.
 2. Student List:
 o An array named students stores information about several students using the 
 Student template. Think of this array as your class list!
 3. Find Senior Students with Assignments (Optional):
 o The code (not shown here) has a function that might find students who are seniors 
 and have completed their assignments.
 o Can you guess why this information might be helpful?
 4. Class List Update:
 o Imagine you need to update your class list! The code (not shown here) might have 
 a function that removes students who haven't completed their assignments 
 (assuming only seniors are responsible).
 o Can you think of any reasons why this might be useful (consider limitations)?*/

 interface studentInformation {
   name: string,
   seniorStudent: boolean,
   completedAssignment: boolean
 } 
 let Student = {
   students: [] as studentInformation[]
 }

 let students:studentInformation[]= [
   {
      name: "Niba",
      seniorStudent: true,
      completedAssignment: true
   },
   {
     name: "saniya kanwal",
     seniorStudent: true,
     completedAssignment: false,
   },
   {
      name: "Yusra",
      seniorStudent: true,
      completedAssignment: true
   },
   {
      name: "haram",
      seniorStudent: false,
      completedAssignment: false
   },
   {
      name: "uzma",
      seniorStudent: true,
      completedAssignment: true
   }
 ]

 console.log(students)

 function SeniorStudentsWithAssignments(students: studentInformation[]): studentInformation[] {
   return students.filter(student => student.seniorStudent && student.completedAssignment);
 };

 let seniorStudentAssignments = SeniorStudentsWithAssignments(students);
 console.log(seniorStudentAssignments);

 function updateClassList(students: studentInformation[]): studentInformation[] {
   return students.filter(student => !student.seniorStudent || student.completedAssignment);
 };

 let updateList = updateClassList(students);
 console.log(updateList);

