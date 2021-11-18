<template>
    <div>
        <input v-model="names" type="checkbox" value="edwin" />
        <input v-model="names" type="checkbox" value="sam" />
        <input v-model="names" type="checkbox" value="ford" />
        <input v-model="names" type="checkbox" value="dexter" />

        <div v-for="name in names">
            <a>{{ name }} <button @click="remove(name)">remove</button></a>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        names: {
            get() {
                return this.$store.state.portinForm.names
            },
            set(value) {
                this.handleUpdate(value, "names")
            },
        },
    },
    methods: {
        handleUpdate(value, field) {
            const payload = {
                ...this.$store.state.portinForm,
            }
            payload[field] = value
            this.$store.commit("setPortinForm", payload)
        },
        remove(name) {
            this.names = this.names.filter((n) => n !== name)
        },
    },
}
</script>
