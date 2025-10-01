<script setup lang="ts">
import { env } from "@/shared/config";
</script>

<template>
    <section class="template-container">
        <h1 class="title">Vue Template</h1>
        <p class="description">
            Explore this
            <a
                :href="env('VITE_GITHUB_REPO_LINK')"
                target="_blank"
                rel="noopener"
                class="link"
                >repository</a
            >
            for details.
        </p>
    </section>
</template>

<style scoped>
.template-container {
    font-family: Arial, sans-serif;
    margin: 2rem auto;
    padding: 2rem;
    max-width: 600px;
    text-align: center;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.title {
    font-size: 2rem;
    color: #333;
    margin-bottom: 1rem;
}

.description {
    font-size: 1rem;
    color: #666;
    line-height: 1.6;
}

.link {
    color: #007acc;
    text-decoration: none;
}

.link:hover {
    text-decoration: underline;
}
</style>
