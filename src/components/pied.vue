<template>
    <footer class="footer">
        <p>&copy; 2025 Mission Evangelique La Grace De Dieu. Tous droits réservés.</p>
    </footer>
</template>

<script>
export default {
    name: 'PiedPage',
    props: {
        // Vous pouvez ajouter des props ici si nécessaire
    },
    data() {
        return {
            // Vous pouvez ajouter des données ici si nécessaire
        };
    },
}
</script>

<style scoped>
.footer {
    height: 30px;
    background:  rgb(210, 212, 215);
    color: #222;
    text-align: center;
    padding: 1rem 0;
    line-height: 50%;

    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
}
/*responsive*/
@media screen and (max-width: 768px) {
    .footer {
        font-size: 12px;
        padding: 0.5rem 0;
    }
    
}

</style>