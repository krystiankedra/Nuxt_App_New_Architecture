<template>
    <div class="container">
        <div class="row">
            <template v-for="(detail, index) in updatedUser">
                <div :key="index" class="col-6">
                    <label>{{ capitalizeFirstLetterInLabel(detail[0]) }} : </label>
                    <input v-model="detail[1]" @input="changeUserValue(detail[0], detail[1])" class="form-control">
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import { capitalizeFirstLetter } from '~/utils/utils'
export default {
    props: {
        userDetails: {
            type: Object,
            default: () => {}
        },
        changeUserValue: {
            type: Function,
            default: () => null
        }
    },
    computed: {
        updatedUser() {
            return Object.entries(this.userDetails)
        }
    },
    methods: {
        capitalizeFirstLetterInLabel(key) {
            return capitalizeFirstLetter(key)
        }
    }
}
</script>