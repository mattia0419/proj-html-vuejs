<script>
export default {
    data() {
        return {
            links: ['HOME', 'ABOUT', 'SERVICES', 'SHOWCASE', 'BLOG', 'CONTACT']
        }
    }
}
</script>


<template>
    <header>
        <!-- CONTATTO -->
        <div class="contact">
            <div class="container d-flex justify-content-between align-items-center p-2 px-5">
                <div>
                    <span class="me-3">(001) 88451234</span>
                    <span>88455438</span>
                </div>
                <div>
                    <font-awesome-icon :icon="['fab', 'facebook']" />
                    <font-awesome-icon class="ms-3" :icon="['fab', 'twitter']" />
                    <font-awesome-icon class="ms-3" :icon="['fab', 'pinterest-p']" />
                </div>
            </div>
        </div>
        <!-- LINKS HEADER -->
        <div class="header-nav">
            <div class="container d-flex justify-content-between align-items-center p-4">
                <div>
                    <img src="../assets/images/cropped-Group-39-2x.png" alt="">
                </div>
                <div>
                    <ul class="d-flex link">
                        <li class="active" v-for="link in links">{{ link }}</li>
                    </ul>
                </div>
                <div class="search">
                    <button>PURCHASE</button>
                    <font-awesome-icon class="icon-search" :icon="['fas', 'magnifying-glass']" />
                </div>
            </div>
        </div>

    </header>
</template>


<style lang="scss" scoped>
.contact {
    background-color: #3C3C3C;
    color: white;
}

.header-nav {
    background-color: white;
    position: fixed;
    width: 100%;

    .link {
        list-style: none;
        gap: 25px;
        height: 100%;
        align-items: flex-end;
        margin-top: 0;
        margin-bottom: 0;
        cursor: pointer;

        .active:hover {
            color: #00D9A6;
        }
    }



    .search {
        button {
            padding: 15px 30px;
            border-radius: 25px;
            border: transparent;
            margin-right: 30px;
            background-image: linear-gradient(to right, #98E15F, #1BDA99);
        }

        .icon-search {
            color: #00D9A6;
            cursor: pointer;
        }
    }




}
</style>