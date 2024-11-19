<script setup>
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">

            <a class="navbar-brand" href="#">CaloriesCalc</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/"
                            style="cursor: pointer;">Products</router-link>
                        <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/diet"
                            style="cursor: pointer;">Diet</router-link>
                        <!-- <a class="nav-link" href="#">Diet</a> -->
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/ration"
                            style="cursor: pointer;">Ration</router-link>
                        <!-- <a class="nav-link" href="#">Ration</a> -->
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/activity"
                            style="cursor: pointer;">Activity</router-link>
                        <!-- <a class="nav-link" href="#">Activity</a> -->
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/statistic"
                            style="cursor: pointer;">Statistic</router-link>
                        <!-- <a class="nav-link" href="#">Statistic</a> -->
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/profile"
                            style="cursor: pointer;">Profile</router-link>
                        <!-- <a class="nav-link" href="#">Profile</a> -->
                    </li>
                </ul>

                <div class="d-flex">
                    <a>
                        <router-link class="nav-link active" aria-current="page" to="/log-in"
                            style="cursor: pointer;">Log In</router-link>
                    </a>
                    <a>
                        <router-link class="nav-link active" aria-current="page" to="/signup"
                            style="cursor: pointer;">Sign Up</router-link>
                    </a>
                </div>
            </div>
        </div>
    </nav>
</template>

<style lang="sass">

</style>