<template>
    <div class="min-h-screen bg-gray-300">
        <card-1-vue></card-1-vue>
        <card-2-vue></card-2-vue>
        <order-description-vue></order-description-vue>
    </div>
</template>

<script>
import Card1Vue from "./components/Card1.vue"
import Card2Vue from "./components/Card2.vue"
import OrderDescriptionVue from "./components/OrderDescription.vue"

export default {
    components: {
        Card1Vue,
        Card2Vue,
        OrderDescriptionVue,
    },
}
</script>

<style></style>
