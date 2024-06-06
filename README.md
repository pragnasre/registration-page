# registration-page

#HTML
<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Registration Form</title>

    <style>

        .error {

            color: red;

        }

    </style>

</head>

<body>

    <h2><u>Registration Form</u></h2>

    <form id="registrationForm" method="post" action="#">

        <div>

            <label for="firstName">First Name:</label>

            <input type="text" id="firstName" name="firstName">

            <span id="firstNameError" class="error"></span>

        </div>

        <div>

            <label for="lastName">Last Name:</label>

            <input type="text" id="lastName" name="lastName">

            <span id="lastNameError" class="error"></span>

        </div>

        <div>

            <label for="gender">Gender:</label>

            <select id="gender" name="gender">

                <option value="male">Male</option>

                <option value="female">Female</option>

                <option value="other">Other</option>

            </select>

            <span id="genderError" class="error"></span>

        </div>

        <div>

            <label for="dob">Date of Birth:</label>

            <input type="date" id="dob" name="dob">

            <span id="dobError" class="error"></span>

        </div>

        <div>

            <label for="contactNumber">Contact Number:</label>

            <input type="text" id="contactNumber" name="contactNumber">

            <span id="contactNumberError" class="error"></span>

        </div>

        <div>

            <label for="email">Email:</label>

            <input type="email" id="email" name="email">

            <span id="emailError" class="error"></span>

        </div>

        <div>

            <label for="password">Password:</label>

            <input type="password" id="password" name="password">

            <span id="passwordError" class="error"></span>

        </div>

        <div>

            <label for="confirmPassword">Confirm Password:</label>

            <input type="password" id="confirmPassword" name="confirmPassword">

            <span id="confirmPasswordError" class="error"></span>

        </div>

        <div>

            <input type="submit" value="Register">

        </div>

    </form>

 

    <script src ="form.js"></script>

</body>

</html>

#.js

event.preventDefault();

            }

            if (!/\d/.test(password)) {

                passwordConditions.push('Password must contain at least one digit');

                event.preventDefault();

            }

            if (!/[!@#$%^&*]/.test(password)) {

                passwordConditions.push('Password must contain at least one special symbol');

                event.preventDefault();

            }

            if (password.length < 8 || password.length > 20) {

                passwordConditions.push('Password must be between 8 and 20 characters');

                event.preventDefault();

            }

 

            if (passwordConditions.length > 0) {

                passwordError.innerHTML = '<ul>' + passwordConditions.map(function (condition) {

                    return '<li class="error">' + condition + '</li>';

                }).join('') + '</ul>';

            }

 

            if (confirmPassword === '') {

                confirmPasswordError.textContent = 'Please confirm your password';

                event.preventDefault();

            } else if (confirmPassword !== password) {

                confirmPasswordError.textContent = 'Passwords do not match';

                event.preventDefault();

            }

        });

 

        function validateEmail(email) {

            var re = /\S+@\S+\.\S+/;

            return re.test(email);

        }

 

        function calculateAge(dob) {

            var today = new Date();

            var birthDate = new Date(dob);

            var age = today.getFullYear() - birthDate.getFullYear();

            var m = today.getMonth() - birthDate.getMonth();

            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {

                age--;

            }

            return age;

        }
