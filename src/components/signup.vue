<script>
import axios from 'axios';
export default {
    data() {
        return {
            username: "",
            email: "",
            password: "",
            repeat_pass: "",
            errors: [],
        }
    },
    methods: {
        submitForm: function () {
            const BANNED_SYMB = /[\W]/;
            const ALLOWED_PASS_SYMB = /[.,\-!&?#]/;
            const ALLOWED_USERNAME_SYMB = /[.-]/;
            const ALLOWED_EMAIL_SYMB = /@/;

            this.errors = []

            this.checkUsername(this.username, BANNED_SYMB, ALLOWED_USERNAME_SYMB);
            this.checkEmail(this.email, BANNED_SYMB, ALLOWED_EMAIL_SYMB);
            this.checkPass(this.password, this.repeat_pass, BANNED_SYMB, ALLOWED_PASS_SYMB);

            if (this.errors.length == 0) {
                const formData = {
                    username: this.username,
                    email: this.email,
                    password: this.password
                }

                axios
                    .post('/api/v1/signup', formData)
                    .then(Response => {
                        console.log('Account created!')
                        this.$router.push('/log-in');
                    }).catch(error => {
                        if (error.response) {
                            for (const property in error.response.data) {
                                this.errors.push('${property}: ${error.response.data[property]}')
                            }
                            console.log(JSON.stringify(error.response.data));
                        } else if (error.message) {
                            this.errors.push('Something went wrong. Please try again!');
                            console.log(JSON.stringify(error));
                        }
                    })
            }


        },

        checkUsername: function (un, banned_symb, allowed_symb) {
            if (un.length == 0) {
                this.errors.push("Поле username обязательно для заполнения!");
                return false;
            }

            if (un.length < 3 || un.length > 64) { this.errors.push("Минимальная длина символов username - 3, максимальная - 64") };
            if (this.checkBannedSymbols(un, banned_symb, allowed_symb)) return true;
            return false;
        },

        checkPass: function (p1, p2, banned_symb, allowed_symb) {
            if (p1.length == 0) {
                this.errors.push("Поле password обязательно для заполнения!");
                return false;
            }

            if (p1.length < 8) this.errors.push("Минимальная длина пароля 8 символов");
            if (!this.checkBannedSymbols(p1, banned_symb, allowed_symb)) this.errors.push("Пароль содержит недопустимые символы");
            if (p1 != p2) this.errors.push("Пароли не совпадают");
            return p1 === p2
        },

        checkEmail: function (email, banned_symb, allowed_symb) {
            if (email.length == 0) {
                this.errors.push("Поле email обязательно для заполнения!");
                return false;
            }

            if (email.length > 64) { this.errors.push("Максимальная длина email - 64 символа") }
            if (this.checkBannedSymbols(email, banned_symb, allowed_symb)) return true;
            return false;
        },

        checkBannedSymbols: function (stroke, banned_symb, allowed_symb) {
            if (banned_symb.test(stroke) && !allowed_symb.test(stroke)) return false;
            return true;
        }
    }
}
</script>

<template>
    <div class="col-6 mx-auto mt-5">
        <h3>Sign Up!</h3>
        <form @submit.prevent="submitForm" action="" method="post">
            <div class="mb-3">
                <label for="username_input" class="form-label">Username</label>
                <input v-model="username" type="text" class="form-control" id="username_input">
            </div>
            <div class="mb-3">
                <label for="email_input" class="form-label">Email</label>
                <input v-model="email" type="email" class="form-control" id="email_input">
            </div>
            <div class="mb-3">
                <label for="password_input" class="form-label">Password</label>
                <input v-model="password" type="password" class="form-control" id="password_input">
            </div>
            <div class="mb-3">
                <label for="repeatpass_input" class="form-label">Repeat password</label>
                <input v-model="repeat_pass" type="password" class="form-control" id="repeatpass_input">
            </div>
            <div class="alert alert-danger" role="alert" v-show="errors.length">
                <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
            </div>
            <div class="d-grid gap-2">
                <button class="btn btn-primary" type="submit">Sing Up</button>
            </div>
        </form>
    </div>
</template>

<style></style>