<script>
import axios from 'axios';

export default {
    data() {
        return {
            username: "",
            password: "",
            errors: [],
        }
    },
    mounted() {
        document.title = 'Log In | CaloriesCalc'
    },
    methods: {
        submitForm: function () {
            const BANNED_SYMB = /[\W]/;
            const ALLOWED_PASS_SYMB = /[.,\-!&?#]/;
            const ALLOWED_USERNAME_SYMB = /[.-]/;

            this.errors = [];

            if (this.username.length == 0) {
                this.errors.push("Поле Username не заполнено.");
            } else if (this.username.length < 3) {
                this.errors.push("Минимальная длина username - 3 символа")
            } else if (!this.checkBannedSymbols(this.username, BANNED_SYMB, ALLOWED_USERNAME_SYMB)) {
                this.errors.push("Поле username содержит недопустимые символы!")
            }

            if (this.password.length == 0) {
                this.errors.push("Поле Password не заполнено.")
            } else if (this.password.length < 8) {
                this.errors.push("Минимальная длина пароля 8 символов")
            } else if (!this.checkBannedSymbols(this.password, BANNED_SYMB, ALLOWED_PASS_SYMB)) {
                this.errors.push("Поле password содержит недопустимые символы");
            }


            if (this.errors.length == 0) {
                const formData = {
                    username: this.username,
                    password: this.password
                }

                axios
                    .post('/api/v1/log-in', formData)
                    .then(Response => {


                        console.log('Log in succesful!')
                        this.$router.push('/');
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
        checkBannedSymbols: function (stroke, banned_symb, allowed_symb) {
            if (banned_symb.test(stroke) && !allowed_symb.test(stroke)) return false;
            return true;
        }
    }
}
</script>

<template>
    <div class="col-6 mx-auto mt-5">
        <h3>Log In!</h3>
        <form @submit.prevent="submitForm" action="" method="post">
            <div class="mb-3">
                <label for="username_input" class="form-label">Username</label>
                <input v-model="username" type="text" class="form-control" id="username_input">
            </div>
            <div class="mb-3">
                <label for="password_input" class="form-label">Password</label>
                <input v-model="password" type="password" class="form-control" id="password_input">
            </div>
            <div class="alert alert-danger" role="alert" v-show="errors.length">
                <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
            </div>
            <div class="d-grid gap-2">
                <button class="btn btn-primary" type="submit">Sing In</button>
            </div>
        </form>
    </div>
</template>

<style></style>