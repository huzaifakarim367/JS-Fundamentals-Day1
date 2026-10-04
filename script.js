// TASK 1: Introduce Yourself
function runTask1() {
    let name = document.getElementById('name').value;
    let age = Number(document.getElementById('age').value);
    let city = document.getElementById('city').value;
    let isStudent = document.getElementById('isStudent').value === "true";
    let skill = document.getElementById('skill').value;

    // Introduction using template literal
    let introduction = `My name is ${name}, I am ${age} years old, I live in ${city}, I am a student: ${isStudent} and my skill is ${skill}.`;
    
    let result = `${introduction}

Type checks:
name: ${typeof name}
age: ${typeof age}
city: ${typeof city}
isStudent: ${typeof isStudent}
skill: ${typeof skill}`;
    
    document.getElementById('output1').innerText = result;
    console.log(result);
}
runTask1();

// TASK 2: Shop Bill Calculator
function runTask2() {
    let price1 = Number(document.getElementById('p1').value);
    let qty1 = Number(document.getElementById('q1').value);
    let price2 = Number(document.getElementById('p2').value);
    let qty2 = Number(document.getElementById('q2').value);
    let price3 = Number(document.getElementById('p3').value);
    let qty3 = Number(document.getElementById('q3').value);

    let subtotal = (price1 * qty1) + (price2 * qty2) + (price3 * qty3);
    let discount = subtotal * 0.05; // 5% discount
    let afterDiscount = subtotal - discount;
    let gst = afterDiscount * 0.17; // 17% GST
    let finalTotal = afterDiscount + gst;

    let bill = `Item 1: ${price1} x ${qty1} = ${price1 * qty1}
Item 2: ${price2} x ${qty2} = ${price2 * qty2}
Item 3: ${price3} x ${qty3} = ${price3 * qty3}

Subtotal: Rs ${subtotal}
Discount (5%): -Rs ${discount}
After Discount: Rs ${afterDiscount}
GST (17%): +Rs ${gst.toFixed(2)}
Final Total: Rs ${finalTotal.toFixed(2)}`;

    document.getElementById('output2').innerText = bill;
    console.log(bill);
}
runTask2();

// TASK 3: Converters and String Utilities
function convertTemp() {
    let c = Number(document.getElementById('celsius').value);
    let f = c * 9 / 5 + 32; // Formula: F = C * 9 / 5 + 32
    document.getElementById('tempResult').innerText = `${c}°C = ${f}°F`;
    console.log(`${c}°C = ${f}°F`);
}

function checkEmail() {
    let email = document.getElementById('email').value;
    let cleaned = email.trim().toLowerCase();
    let hasAt = cleaned.includes('@');
    let endsWithCom = cleaned.endsWith('.com');
    let text = `Original: "${email}"
Cleaned: "${cleaned}"
Contains @ ? ${hasAt}
Ends with .com ? ${endsWithCom}
Is Valid? ${hasAt && endsWithCom ? "Yes" : "No"}`;
    document.getElementById('emailResult').innerText = text;
    console.log(text);
}

function findSquare() {
    let val = document.getElementById('squareInput').value;
    let num = Number(val);
    if(val === "") {
        // Bonus part using prompt() and Number() conversion
        let p = prompt("Enter a number to find its square:");
        num = Number(p);
    }
    document.getElementById('squareResult').innerText = `Square of ${num} is ${num * num}`;
    console.log(`Square of ${num} is ${num*num}`);
}