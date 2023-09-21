<script>
export default {
    data() {
        return {
            images: ['Group-36-2x.png', 'Group-35-2x.png', 'Group-40-2x.png'],
            activeSlide: 0,
            gridImages: ['ina-soulis-227104-unsplash-1024x1024.jpg', 'sunisa-misa-531163-unsplash-1024x1024.jpg', '355H-1024x1024.jpg', 'photo-1448932252197-d19750584e56-1024x1024.jpg', 'business-competition-PB366D8-1024x1024.jpg', 'cozy-sofa-in-living-room-PQR5AB9-1024x1024.jpg', 'aa9a4539-PQGJ7HU-1024x1024.jpg', 'cody-davis-253928-unsplash-1024x1024.jpg']
        }
    },
    methods: {
        goTo(index) {
            this.activeSlide = index;
            console.log(this.activeSlide);
        },
        buildingImagePath(imageName) {
            const imageURL = new URL('../assets/images/' + imageName, import.meta.url);
            console.log(imageURL);

            return imageURL.href;
        }
    }
}
</script>


<template>
    <main>
        <div class="first-section d-flex">
            <div class="left">
                <h6 class="green-title">17 YEARS OF EXPERIENCE</h6>
                <h1>We Are a</h1>
                <h1>Web Design <span class="other-green">Agency</span></h1>
                <div class="line">
                    <span class="small-d"></span>
                    <span class="big-d"></span>
                </div>
                <p>
                    Far far away, behind the word mountains, far from the countries Voskalia and Consonantia, there live the
                    blind texts. Separeted they live in Bookmarksgrove right at the coast of the Semantics, a large language
                    ocean.Separeted they live in Bookmarksgrove.
                </p>

                <button class="button-read">READ MORE</button>
                <div class=" carousel">
                    <h6>FACEBOOK - INSTAGRAM - YOUTUBE - TWITTER</h6>
                    <span>
                        <button v-for="(image, index) in images" @click="goTo(index)"
                            :class="(index == activeSlide) ? 'active-slide' : ''" class="button-car">{{ '0' + (index +
                                1) }}</button>
                    </span>
                </div>
            </div>
            <div class="right">
                <img :src="buildingImagePath(images[activeSlide])" :alt="images[activeSlide]">
            </div>
        </div>
        <div class="container-fluid second-section">
            <div class="left-2">
                <h1>We Are Here To Make Your <span class="other-green">Website</span> Look More <span
                        class="other-green">Elegant</span> And Stylish!</h1>
                <div class="line">
                    <span class="small-d"></span>
                    <span class="big-d"></span>
                </div>
                <button>VIEW ALL</button>
            </div>
            <div class="right-2">
                <div class="row row-cols-md-1 row-cols-lg-2 g-4">
                    <div class="col">
                        <div class="card">
                            <span class="pb-4">
                                <font-awesome-icon :icon="['fas', 'compass']" size="2xl" />
                            </span>
                            <h5>Speed Optimization</h5>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia Separated...</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <span class="pb-4">
                                <font-awesome-icon :icon="['fas', 'cloud']" size="2xl" /> </span>
                            <h5>Cloud Solutions</h5>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia Separated...</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <span class="pb-4">
                                <font-awesome-icon :icon="['fas', 'tablet-screen-button']" size="2xl" /> </span>
                            <h5>Website Design</h5>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia Separated...</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <span class="pb-4">
                                <font-awesome-icon :icon="['far', 'clock']" size="2xl" />
                            </span>
                            <h5>Online Marketing</h5>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia Separated...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="third-section d-flex">
            <div class="left-3 d-none d-lg-block">
                <div class="front">
                    <div class="up">
                        <img src="../assets/images/businesswoman-analysing-document-P8WSNMC-1024x820.jpg" alt="">
                    </div>
                    <div class="down">
                        <img src="../assets/images/businesswoman-analysing-document-P8WSNMC-1024x820.jpg" alt="">
                    </div>
                </div>
                <div class="back">
                    <div class="up">
                        <img src="../assets/images/busy-architect-PYVKWM4-1024x872.jpg" alt="">
                    </div>
                    <div class="down">
                        <img src="../assets/images/busy-architect-PYVKWM4-1024x872.jpg" alt="">
                    </div>
                </div>
            </div>
            <div class="right-3">
                <h1>learn more about our <span class="other-green">missions</span></h1>
                <div class="line">
                    <span class="small-d"></span>
                    <span class="big-d"></span>
                </div>
                <p>Far far away, behind the word mountains, far from the countries Voskalia and Consonantia, there live the
                    blind texts. Separeted they live in Bookmarksgrove right at the coast of the Semantics, a large language
                    ocean.Separeted they live in Bookmarksgrove.
                </p>
                <button class="mt-5">READ MORE</button>
            </div>
        </div>
        <div class="fourth-section container-fluid">
            <div class="up-grid">
                <div class="left-up-grid ps-3">
                    <div class="line">
                        <span class="small-d"></span>
                        <span class="big-d"></span>
                    </div>
                    <h1>Our recent <span class="other-green">web designs</span> & some examples of past <span
                            class="other-green">projects</span></h1>
                    <div class="line">
                        <span class="small-d"></span>
                        <span class="big-d"></span>
                    </div>
                </div>
                <div class="right-up-grid">
                    <p>
                        Far far away, behind the word mountains, far from the countries Voskalia and Consonantia, there live
                        the
                        blind texts. Separeted they live in Bookmarksgrove right at the coast of the Semantics, a large
                        language
                        ocean.Separeted they live in Bookmarksgrove.
                    </p>
                </div>
            </div>
            <div class="container-fluid text-center">
                <div class="row row-cols-md-2 row-cols-lg-4 g-1">
                    <div class="col" v-for="gridImage in gridImages">
                        <img :src="buildingImagePath(gridImage)" alt="">
                    </div>

                </div>
                <button>READ MORE</button>
            </div>

        </div>
        <div class="fifth-section">
            <h1 class="other-green"><font-awesome-icon :icon="['fas', 'quote-right']" size="2xl" /></h1>
            <p class="par">When it comes to barbequing, there are two main schools of thought for the techniques that you
                can you use.
                Freshly scrambled eggs with applewood smocked bacon - are amazing!</p>
            <img src="../assets/images/businesswoman-analysing-document-P8WSNMC-1024x820.jpg" alt="">
            <h3 class="other-green">LISSA DURBIN</h3>
            <span>Client</span>

        </div>
        <div class="sixth-section container-fluid">
            <h1>Latest News & Our <span class="other-green">Blog</span></h1>
            <div class="line">
                <span class="small-d"></span>
                <span class="big-d"></span>
            </div>
            <div class="row row-cols-md-1 row-cols-lg-3 g-5">
                <div class="card-sixth col">
                    <img src="../assets/images/serious-businesswoman-with-documents-talking-on-P9Q6LX6-1024.jpg" alt="">
                    <span class="p-3 label">
                        <p>May 24, 2018 by Alex</p>
                        <h6><span class="green-point"></span>Marketing Ideas</h6>
                    </span>
                </div>
                <div class="card-sixth col">
                    <img src="../assets/images/Businessman-at-the-desk-in-his-office-resting--1024x768.jpg" alt="">
                    <span class="p-3 label">
                        <p>May 24, 2018 by Alex</p>
                        <h6><span class="green-point"></span>Rest During Working Hours</h6>
                    </span>
                </div>
                <div class="card-sixth col">
                    <img src="../assets/images/simple-home-office-with-tree-PBXRXYB-large-1024x768.jpg" alt="">
                    <span class="p-3 label">
                        <p>May 24, 2018 by Alex</p>
                        <h6><span class="green-point"></span>Develop Your Startup Idea</h6>
                    </span>
                </div>
            </div>
            <button>READ MORE</button>
        </div>



    </main>
</template>


<style lang="scss" scoped>
main {
    margin-top: 125px;
}

// SEZIONE DEL CAROSELLO
.first-section {
    background-color: #FAFAFA;
    position: relative;
    width: 100%;

    .left {
        padding-left: 100px;
        width: 50%;
        position: relative;
        left: 80px;



        .green-title {
            color: #98E15F;
            letter-spacing: 6px;
            padding-top: 140px;
            margin-bottom: 20px;
        }

        h1 {
            font-size: 65px;
        }
    }

    .button-read {
        padding: 15px 30px;
        border-radius: 25px;
        border: transparent;
        margin-right: 30px;
        background-image: linear-gradient(to right, #454545, #0F0F0F);
        color: white;
        margin: 50px 0;
    }

    .right {
        width: 40%;

        img {
            width: 734px;
            height: 900px;
            object-fit: cover;
            object-position: 0px 10px;
        }
    }
}

.carousel {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-bottom: 100px;

    span {
        background-image: linear-gradient(to right, #454545, #0F0F0F);
        border-radius: 20px;
        // height: 50px;
        padding: 2px;
        display: flex;
        justify-content: center;
        align-items: center;


        .button-car {
            padding: 8px 25px;
            border: transparent;
            background-color: transparent;
            border-radius: 20px;
            margin: 0;
            color: #929292;
            font-size: 20px;
        }
    }

}





.line {
    height: 10px;
    width: 60px;
    display: flex;
    gap: 5px;
    margin: 50px 0;

    .small-d {
        width: 15px;
        height: 6px;
        background-image: linear-gradient(to right, #98E15F, #1BDA99);
        border-radius: 8px;
        display: flex;
    }

    .big-d {
        width: 40px;
        height: 6px;
        background-image: linear-gradient(to right, #98E15F, #1BDA99);
        border-radius: 8px;
        display: flex;
    }
}

.other-green {
    color: #1BDA99;
}

.active-slide {
    background-image: linear-gradient(to left, #98E15F, #1BDA99);
}

// SECOND SECTION
.second-section {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left-2 {
        width: 40%;
        padding-right: 40px;
        padding: 150px 40px 150px 0;

        h1 {
            font-size: 55px;
        }

        button {
            padding: 15px 30px;
            border-radius: 25px;
            border: transparent;
            margin-right: 30px;
            background-image: linear-gradient(to right, #98E15F, #1BDA99);
        }
    }

    .right-2 {
        width: 60%;

        .card {
            border: transparent;
            border-radius: 12px;
            padding: 35px 25px;
            box-shadow: 0px 0px 35px -20px;
        }

        .card:hover {
            transition: 0.5s;
            background-image: linear-gradient(to right, #98E15F, #1BDA99);
            color: white;

        }

        h5 {
            padding-bottom: 15px;
        }
    }
}

// THIRD SECTION
.third-section {
    background-color: #FAFAFA;
    position: relative;
    align-items: center;
    justify-content: space-between;


    .left-3 {
        width: 40%;
        padding: 150px 0;

        img {
            max-width: 100%;

            object-fit: cover;
        }

        .front {
            position: absolute;
            z-index: 1;
            left: 80px;
            bottom: 120px;

            .up {
                width: 700px;
                height: 280px;
                margin-left: 30px;

                img {
                    min-width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: 40px -30px;
                }

            }

            .down {
                width: 700px;
                height: 280px;

                img {
                    min-width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: 37px -295px;


                }
            }


        }

        .back {
            padding-top: 60px;

            .up {
                width: 700px;
                height: 300px;



                img {
                    min-width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: 0px -30px;
                }
            }

            .down {
                width: 700px;
                height: 250px;
                margin-left: -80px;


                img {
                    min-width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: 37px -295px;

                }
            }
        }

    }

    .right-3 {
        width: 30%;
        margin-right: 120px;
        margin-left: 100px;

        h1 {
            font-size: 55px;
        }

        button {
            padding: 15px 30px;
            border-radius: 25px;
            border: transparent;
            margin-right: 30px;
            background-image: linear-gradient(to right, #98E15F, #1BDA99);
        }
    }
}

// FOURTH SECTION
.fourth-section {
    padding: 150px 0;
    position: relative;

    .up-grid {
        display: flex;
        justify-content: space-between;

        .left-up-grid {
            width: 50%;

            h1 {
                font-size: 55px;
            }
        }

        .right-up-grid {
            width: 40%;
            align-self: flex-end;
            padding-bottom: 45px;
            font-size: 20px;
        }
    }

    img {
        width: 100%;
        border-radius: 12px;
    }

    img:hover {
        // transform: scale(1.1);
        background-color: linear-gradient(to left, #98E15F, #1BDA99);
        transition: 0.5s;
    }

    button {
        padding: 15px 30px;
        border-radius: 25px;
        border: transparent;
        margin-right: 30px;
        background-image: linear-gradient(to right, #98E15F, #1BDA99);
        margin-top: 100px;
    }
}

// FIFTH SECTION
.fifth-section {
    width: 100%;


    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(../assets/images/four-businesspeople-in-a-boardroom-with-paperwork-PC4V8H4.jpg);
    background-repeat: no-repeat;
    background-position-y: 0px;
    background-position-x: 0px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        padding-top: 200px;
    }

    .par {
        width: 30%;
        padding: 50px 0;
        text-align: center;
    }

    img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 50%;
        border: solid 4px white;
        margin-bottom: 40px;
    }

    span {
        padding-bottom: 200px;
    }
}

// SIXTH SECTION
.sixth-section {
    padding-top: 150px;
    padding-bottom: 150px;
    display: flex;
    align-items: center;
    flex-direction: column;

    h1 {
        font-size: 55px;
    }

    .card-sixth {
        width: 400px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;


        img {
            max-width: 100%;
            border-radius: 12px;
            box-shadow: 0px 0px 40px -10px;
        }



        .label {
            width: 80%;
            height: 80px;
            margin-top: -40px;
            background-color: white;
            display: block;
            position: relative;
            z-index: 1;
            border-radius: 8px;
            box-shadow: 0px 0px 40px -10px;

            p {
                color: lightgray;
                padding-left: 15px;
                font-size: 12px;
            }

            .green-point {
                display: inline-block;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background-color: #1BDA99;
                margin-right: 5px;
            }
        }
    }

    button {
        padding: 15px 30px;
        border-radius: 25px;
        border: transparent;
        margin-right: 30px;
        background-image: linear-gradient(to right, #454545, #0F0F0F);
        color: white;
        margin-top: 100px;
    }
}
</style>