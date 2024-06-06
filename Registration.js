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