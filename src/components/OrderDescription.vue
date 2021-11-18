<template>
    <input
        v-model="orderDescription"
        type="text"
        placeholder="Order Description"
    />
</template>

<script>
export default {
    computed: {
        portinForm() {
            return this.$store.state.portinForm
        },
        orderDescription: {
            get() {
                return this.$store.state.portinForm.orderDescription
            },
            set(value) {
                this.$store.commit("setPortinForm", {
                    ...this.$store.state.portinForm,
                    orderDescription: value,
                })
            },
        },
    },
    mounted() {
        this.orderDescription = "Edwin"
    },
}
</script>

<style></style>
