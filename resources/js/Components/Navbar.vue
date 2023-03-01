<template>
    <div class="mt-4 space-x-4">
        <Link :href="route('welcome')">
            Welcome
        </Link>
        <Link :href="route('about')">
            About
        </Link>
    </div>
</template>

<script setup>
import { Link } from '@inertiajs/inertia-vue3';
</script>
