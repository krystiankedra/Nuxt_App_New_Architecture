<template>
    <input v-model="updateValue" type="text" class="form-control" :placeholder="placeholder">
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            default: () => ''
        },
        placeholder: {
            type: String,
            default: () => ''
        }
    },
    computed: {
        updateValue: {
            get() {
                return this.value
            },
            set(newValue) {
                this.$emit('update:value', newValue)
            }
        }
    }
}
</script>