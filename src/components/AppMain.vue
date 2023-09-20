<script>
export default {
    data() {
        return {
            images: ['Group-36-2x.png', 'Group-35-2x.png', 'Group-40-2x.png'],
            activeSlide: 0,
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

        h5 {
            padding-bottom: 15px;
        }
    }
}
</style>