<script>
export default {
    props: {
        title1: String,
        title2: String,
        title3: String,
        links1: Array,
        links2: Array,
        link3: String


    },
    methods: {
        buildingImagePath(imageName) {
            const imageURL = new URL('../assets/images/' + imageName, import.meta.url);
            console.log(imageURL);

            return imageURL.href;
        }
    }
}
</script>


<template>
    <footer>
        <div>
            <div class="row row-cols-md-2 row-cols-lg-4 footer-up container-fluid">
                <div class="col p-5">
                    <img src="../assets/images/cropped-Group-39-2x.png" alt="">
                    <p class="pt-3">While the lovely valley teems with vapour around me, and the meridian sun strikes the
                        upper surface
                        of
                        the impenetrable foliage of my trees. While the lovely valley teems with vapour around me.</p>
                </div>
                <div class="col">
                    <h3>{{ title1 }}</h3>
                    <div class="line">
                        <span class="small-d"></span>
                        <span class="big-d"></span>
                    </div>
                    <ul>
                        <li v-for="link in links1">{{ link }}</li>
                    </ul>
                </div>
                <div class="col">
                    <h3>{{ title2 }}</h3>
                    <div class="line">
                        <span class="small-d"></span>
                        <span class="big-d"></span>
                    </div>
                    <ul>
                        <li v-for="link in links2">{{ link }}</li>
                    </ul>
                </div>
                <div class="col">
                    <h3>{{ title3 }}</h3>
                    <div class="line">
                        <span class="small-d"></span>
                        <span class="big-d"></span>
                    </div>
                    <img :src="buildingImagePath(link3)" alt="">
                </div>
            </div>
            <div class="footer-down d-flex justify-content-between">
                <div>
                    <span>© 2020 PHLOX BUSINESS THEME.</span>
                </div>
                <div>
                    <font-awesome-icon :icon="['fab', 'facebook']" />
                    <font-awesome-icon class="ms-3" :icon="['fab', 'twitter']" />
                    <font-awesome-icon class="ms-3" :icon="['fab', 'pinterest-p']" />
                </div>
            </div>
        </div>


    </footer>
</template>


<style lang="scss" scoped>
.footer-up {
    padding: 120px 0;
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

ul {
    padding: 0;

    li {
        list-style-type: none;
        cursor: pointer;
        font-size: 16px;
        color: rgba(0, 0, 0, 0.616);
        // padding-right: 20px;
    }
}

img {
    max-width: 100%;
}

.footer-down {
    background-image: linear-gradient(to right, #454545, #0F0F0F);
    color: lightgrey;
    padding: 40px 20px;
}
</style>