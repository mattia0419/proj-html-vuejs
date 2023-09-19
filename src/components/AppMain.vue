<script>
export default {
    data() {
        return {
            images: ['Group-36-2x.png', 'Group-35-2x.png', 'Group-40-2x.png'],
            activeSlide: 0
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
    </main>
</template>


<style lang="scss" scoped>
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

        .other-green {
            color: #1BDA99;
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

        .button-read {
            padding: 15px 30px;
            border-radius: 25px;
            border: transparent;
            margin-right: 30px;
            background-image: linear-gradient(to right, #454545, #0F0F0F);
            color: white;
            margin: 50px 0;
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

.active-slide {
    background-image: linear-gradient(to left, #98E15F, #1BDA99);
}






main {
    margin-top: 125px;
}
</style>