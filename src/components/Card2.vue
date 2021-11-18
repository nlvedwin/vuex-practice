<template>
    <div>
        <input v-model="card2" type="text" placeholder="card2" />
    </div>
</template>

<script>
export default {
    computed: {
        card2: {
            get() {
                return this.$store.state.portinForm.card2
            },
            set(value) {
                this.$store.commit("setPortinForm", {
                    ...this.$store.state.portinForm,
                    card2: value,
                })
            },
        },
    },
}
</script>
