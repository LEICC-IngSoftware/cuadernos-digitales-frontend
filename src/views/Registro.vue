<template>
    <h2>Crear cuenta</h2>
    <div style="color: red" v-if="errorMessage">{{ errorMessage }}</div>
    <form @submit.prevent="crearCuenta">
        <div>
            <label>Correo electrónico:</label>
            <input type="email" required v-model="email"/>
        </div>
        <div>
            <label>Contraseña:</label>
            <input type="password" required v-model="password"/>
        </div>
        <input type="submit" value="Crear cuenta" />
    </form>
</template>

<script setup>
    import {ref} from 'vue'
    import supabase from '../supabase/init';

    const email = ref('')
    const password = ref('')
    const errorMessage = ref('')

    const crearCuenta = async () => {
        const { data, error } = await supabase.auth.signUp({
            email: email.value,
            password: password.value,
        })
        if (error) {
            errorMessage.value = error.message
        }
    }
</script>