<template>
    <section>
        <b-modal full-screen :can-cancel="false" :active.sync="isComponentModalActive" has-modal-card>
            <modal-form  v-bind="formProps"></modal-form>
        </b-modal>
    </section>
</template>

<script>
import ModalForm from '~/components/ModalForm'
    export default {
        components: {
            ModalForm
        },
        data() {
            return {
                isComponentModalActive: true,
                formProps: {
                    email: '',
                    password: ''
                }
            }
        }
    }
</script>
