function idCard() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var address = document.getElementById('address').value;
    var age = document.getElementById('age').value;
    var phoneNumber = document.getElementById('phoneNumber').value;

    document.getElementById("postFullName").innerHTML = firstName + " " + lastName;
    document.getElementById('displayAge').innerHTML = "Age: " + age;
    document.getElementById('displayPhoneNumber').innerHTML = "Phone Number: " + phoneNumber;
    document.getElementById('displayAddress').innerHTML = "Address: " + address;
}