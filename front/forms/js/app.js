const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const favicon = document.getElementById("favicon");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

document.querySelector("#sign-up-btn").addEventListener("click", () => {
    document.title = "Sign-Up Page";
    favicon.setAttribute("href", "images/signup.ico");
});

document.querySelector("#sign-in-btn").addEventListener("click", () => {
    document.title = "Login Page";
    favicon.setAttribute("href", "images/login.ico");
});

async function networkRequest(url, data) {
    console.log("reached");
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return response;
}

async function login() {
    let userName = document.getElementById("user").value;
    let password = document.getElementById("pass").value;
    let data = { email: userName, password: password };
    const response = await networkRequest(
        "http://localhost:3000/customer/verify",
        data
    );
    if (response.status != 200) {
        document.getElementById("errorMsg").innerText =
            "User Login Failed, please try again";
    } else {
        alert("Login Successful");
    }
}

async function sign() {
    let userName = document.getElementById("userName").value;
    let password = document.getElementById("pword").value;
    let email = document.getElementById("Email").value;
    let data = { userName: userName, password: password, email: email };
    const response = await networkRequest(
        "http://localhost:3000/customer/signup",
        data
    );
}

async function vehicle() {
    let cust_id = document.getElementById("cust_id").value;
    let name = document.getElementById("name").value;
    let color = document.getElementById("color").value;
    let class1 = document.getElementById("class1").value;
    let fuel_type = document.getElementById("fuel_type").value;
    let vehicle_number = document.getElementById("vehicle_number").value;
    let data1 = {
        cust_id: cust_id,
        name: name,
        color: color,
        class1: class1,
        fuel_type: fuel_type,
        vehicle_number: vehicle_number,
    };
    console.log("trigger");
    const response1 = await networkRequest(
        "http://localhost:3000/dl/addvehicle",
        data1
    );
    if (response1.status != 200) {
        document.getElementById("errorMsg").innerText =
            "U Failed, please try again";
    } else {
        alert("Successful");
    }
}

async function dl() {
    let cust_id = document.getElementById("cust_id").value;
    let name = document.getElementById("name").value;
    let dl_no = document.getElementById("dl_no").value;
    let address = document.getElementById("address").value;
    let dob = document.getElementById("dob").value;
    let validity = document.getElementById("validity").value;
    let blood_group = document.getElementById("blood_group").value;
    let data1 = {
        cust_id: cust_id,
        name: name,
        dl_no,
        address,
        dob,
        validity,
        blood_group,
    };
    console.log("trigger");
    const response1 = await networkRequest(
        "http://localhost:3000/dl/entry",
        data1
    );
    if (response1.status != 200) {
        document.getElementById("errorMsg").innerText =
            "U Failed, please try again";
    } else {
        alert("Successful");
    }
}

async function cust() {
    let cust_id = document.getElementById("cust_id").value;
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let dob = document.getElementById("dob").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let data1 = {
        cust_id,
        name,
        phone,
        dob,
        email,
        password,
    };
    console.log("trigger");
    const response1 = await networkRequest(
        "http://localhost:3000/dl/retrieve",
        data1
    );
    if (response1.status != 200) {
        document.getElementById("errorMsg").innerText =
            "U Failed, please try again";
    } else {
        alert("Successful");
    }
}

async function violate() {
    let complaint_id = document.getElementById("complaint_id").value;
    let vehicle_no = document.getElementById("vehicle_no").value;
    let place = document.getElementById("place").value;
    let date = document.getElementById("date").value;
    let fine = document.getElementById("fine").value;
    let offence = document.getElementById("offence").value;
    let data1 = {
        complaint_id,
        vehicle_no,
        place,
        date,
        fine,
        offence,
    };

    const response1 = await networkRequest(
        "http://localhost:3000/dl/violation",
        data1
    );
    if (response1.status != 200) {
        document.getElementById("errorMsg").innerText =
            "U Failed, please try again";
    } else {
        alert("Successful");
    }
}

async function ensure() {
    let insurance_id = document.getElementById("insurance_id").value;
    let vehicle_no = document.getElementById("vehicle_no").value;
    let name = document.getElementById("name").value;
    let insurance_period = document.getElementById("insurance_period").value;
    let amount = document.getElementById("amount").value;
    let data1 = {
        insurance_id,
        vehicle_no,
        name,
        insurance_period,
        amount,
    };

    const response1 = await networkRequest(
        "http://localhost:3000/dl/violation",
        data1
    );
    if (response1.status != 200) {
        document.getElementById("errorMsg").innerText =
            "U Failed, please try again";
    } else {
        alert("Successful");
    }
}
