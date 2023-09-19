<script>
export default {
    data() {
        return {

        }
    }
}
</script>


<template>
    <header>
        <!-- CONTATTO -->
        <div class="contact">
            <div class="container d-flex justify-content-between align-items-center">
                <div class="p-2">
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
    </header>
</template>


<style lang="scss" scoped>
.contact {
    background-color: #3C3C3C;
    color: white;
}
</style>