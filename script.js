function checkAnswers() {
    let totalMarks = 0;
 // Get Student's Name
 const studentName = document.getElementById("studentName").value;

 // Display Student's Name in the test form
 if (studentName) {
     document.getElementById("displayName").innerText = `Student Name: ${studentName}`;
 } else {
     document.getElementById("displayName").innerText = "Student Name: Not Provided";
 }
    // Question 1 (Yes/No)
    const yes1 = document.getElementById("artificialIntelligence").checked;
    const no1 = document.getElementById("articalIntelligent").checked;

    // Correct answer for Question 1 is "Artificial intelligence"
    if (yes1 && !no1) {
        totalMarks += 5;
    }

    // Question 2 (Dropdown)
    const question2 = document.getElementById("question2").value;

    // Correct answer for Question 2 is "label"
    if (question2 === "label") {
        totalMarks += 5;
    }

    // Display the result
    document.getElementById("result").innerText = `Total Marks: ${totalMarks}/10`;
}
