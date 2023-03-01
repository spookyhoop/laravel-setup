<template>
    <div class="flex h-screen">
        <div class="m-auto text-center">
            <Logo />
            <Navbar />
            <p class="mt-4 font-mono text-base text-gray-500 uppercase">
                Ready to go!!! 🤟
            </p>
        </div>
    </div>
</template>

<script setup>
import Logo from '@/Components/Logo.vue';
import Navbar from '@/Components/Navbar.vue';
import { nextTick } from '@vue/runtime-core';

nextTick(() => {
    toast.info('Example notification');
});
</script>
