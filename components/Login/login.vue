<template>
    <div class="container">
        <template v-for="(data, index) in loginData" class="row">
            <div :key="index" class="col-6">
                <label>{{ data.label }}: </label>
                <input
                    v-model="data.value"
                    :type="setDynamicInputType(data.label)"
                    @input="changeValue(index, data.value)"
                    class="form-control"
                >
            </div>
        </template>
        <div class="row">
            <button @click="submit()">Log in</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        changeValue: {
            type: Function,
            default: () => null
        },
        loginData: {
            type: Array,
            default: () => []
        },
        submit: {
            type: Function,
            default: () => null
        },
        setDynamicInputType: {
            type: Function,
            default: () => null
        }
    }
}
</script>