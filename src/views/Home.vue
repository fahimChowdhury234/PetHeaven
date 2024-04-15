<template>
    <div>
        <!-- Carousel Start -->
        <div class="container-fluid p-0">
            <button @click="addpet">
                Add data
            </button>
            <div id="header-carousel" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="w-100" src="../assets/img/banner2.jpg" alt="Image">
                        <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div class="p-3" style="max-width: 900px;">
                                <h3 class="text-white mb-3 d-none d-sm-block">Discover the Joy of Pet Adoption</h3>
                                <h1 class="display-3 text-white mb-3">Unleash Love, Adopt a Friend.</h1>
                                <a href="pets.php" class="btn btn-lg btn-primary mt-3 mt-md-4 px-4">Adopt a pet</a>
                                <a href="Register.php" class="btn btn-lg btn-secondary mt-3 mt-md-4 px-4">List your
                                    pet</a>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="w-100" src="../assets/img/banner1.jpg" alt="Image">
                        <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div class="p-3" style="max-width: 900px;">
                                <h3 class="text-white mb-3 d-none d-sm-block">Furry Friends Await</h3>
                                <h1 class="display-3 text-white mb-3">Rescue, Love, Repeat</h1>
                                <a href="pets.php" class="btn btn-lg btn-primary mt-3 mt-md-4 px-4">Adopt a pet</a>
                                <a href="Register.php" class="btn btn-lg btn-secondary mt-3 mt-md-4 px-4">List your
                                    pet</a>
                            </div>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#header-carousel" data-slide="prev">
                    <div class="btn btn-primary rounded" style="width: 45px; height: 45px;">
                        <span class="carousel-control-prev-icon mb-n2"></span>
                    </div>
                </a>
                <a class="carousel-control-next" href="#header-carousel" data-slide="next">
                    <div class="btn btn-primary rounded" style="width: 45px; height: 45px;">
                        <span class="carousel-control-next-icon mb-n2"></span>
                    </div>
                </a>
            </div>
        </div>
        <!-- Carousel End -->





        <!-- About Start -->
        <div id="about" class="container py-5">
            <div class="row py-5">
                <div class="col-lg-7 pb-5 pb-lg-0 px-3 px-lg-5">
                    <h1 class="display-4 mb-4"><span class="text-primary">About</span> <span
                            class="text-secondary">US</span>
                    </h1>
                    <h5 class="text-muted mb-3">Paws for a Purpose: Uniting Hearts, One Adoption at a Time.</h5>
                    <p class="mb-4">Welcome to Pet Heaven —a haven for pets seeking forever homes. We're dedicated to
                        creating
                        lasting connections between pets and loving families. Discover heartwarming adoption stories
                        that
                        transform lives.</p>
                    <ul class="list-inline">
                        <li>
                            <h5><i class="fa fa-check-double text-secondary mr-3"></i>Heartfelt Adoptions</h5>
                        </li>
                        <li>
                            <h5><i class="fa fa-check-double text-secondary mr-3"></i>Make a Difference</h5>
                        </li>
                        <li>
                            <h5><i class="fa fa-check-double text-secondary mr-3"></i>Excellence in Adoption</h5>
                        </li>
                    </ul>
                    <a href="pets.php" class="btn btn-lg btn-primary mt-3 px-4">Adopt a Pet</a>
                </div>
                <div class="col-lg-5">
                    <div class="row px-3">
                        <div class="col-12 p-0">
                            <img class="img-fluid w-100" src="../assets/img/about-1.jpg" alt="">
                        </div>
                        <div class="col-6 p-0">
                            <img class="img-fluid w-100" src="../assets/img/about-2.jpg" alt="">
                        </div>
                        <div class="col-6 p-0">
                            <img class="img-fluid w-100" src="../assets/img/about-3.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- About End -->
        <!-- Blog Start -->
        <div class="container pt-5">
            <div class="d-flex flex-column text-center mb-5">
                <h1 class="display-4 m-0"><span class="text-primary">Pet</span> <span class="text-secondary">Blog</span>
                </h1>
            </div>
            <div class="row pb-3">
                <div class="col-lg-4 mb-4">
                    <div class="card border-0 mb-2">
                        <img class="card-img-top" src="../assets/img/blog-1.jpg" alt="">
                        <div class="card-body bg-light p-4">
                            <h4 class="card-title text-truncate">The Power of Adoption: Transforming Lives One Paw at a
                                Time</h4>
                            <p>Discover the heartwarming journey of pets finding their forever homes. Explore the
                                profound impact of adoption on both animals and their human companions as we delve into
                                touching stories and share insights into the transformative power of unconditional love.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 mb-4">
                    <div class="card border-0 mb-2">
                        <img class="card-img-top" src="../assets/img/blog-2.jpg" alt="">
                        <div class="card-body bg-light p-4">
                            <h4 class="card-title text-truncate">Behind the Scenes: Nurturing Hope in our Pet Adoption
                                Center</h4>
                            <p>Take a peek behind the curtain and explore the daily operations of our adoption center.
                                From the dedicated staff's unwavering commitment to the well-being of our furry friends
                                to the joyous reunions that take place, this blog offers an intimate look at the heart.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 mb-4">
                    <div class="card border-0 mb-2">
                        <img class="card-img-top" src="../assets/img/blog-3.jpg" alt="">
                        <div class="card-body bg-light p-4">
                            <h4 class="card-title text-truncate">Adopt, Don't Shop: The Sustainable Choice for Pet
                                Companionship</h4>
                            <p>Dive into the benefits of adopting pets as a sustainable and compassionate choice. Learn
                                why adopting from shelters not only saves lives but also contributes to the well-being
                                of our communities and the planet, making a positive impact for generations to come.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Blog End -->
    </div>
</template>

<script setup>
import axios from 'axios'
const petData = {
    title: "new pet",
    breed: "cross",
    color: "black",
    age: "2 month",
    location: "dhaka, bangladesh",
    user: "661c4070d92590ac5e770943",
    status: "active",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKSYmdwK3kLawMMTKh10NIErZ4LHYnosyAkC1FeCqi2g&s"
};
const addpet = (() => {
    axios.post('http://localhost:5000/add-pet', petData)
        .then(function (response) {
            alert(response.data);
        })
        .catch(function (error) {
            alert(error);
        });

})
</script>

<style lang="scss" scoped></style>