<template>
    <div class="flex h-screen">
        <div class="m-auto text-center">
            <Logo />
            <Navbar />
            <p class="mt-4 font-mono text-base text-gray-500 uppercase">
                Vue.js + Inertia.js + Laravel + TailwindCSS = VILT ❤️
            </p>
        </div>
    </div>
</template>

<script setup>
import Logo from '@/Components/Logo.vue';
import Navbar from '@/Components/Navbar.vue';
</script>