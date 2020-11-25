<template>
    <ul class="header">
        <li class="header__item" v-for="route in routes" :key="route.name">
            <router-link 
            class="header__item-link" 
            :to="route.path"
            >{{ route.name }}</router-link> 
        </li>
        <!-- <li class="header__item">
            <router-link class="header__item-link" to="/evening">Вечернее чтение</router-link> 
        </li>
        <li class="header__item">
            <router-link class="header__item-link" to="/info">Инфо</router-link>
        </li> -->
    </ul>
</template>

<script>

export default {
    name: 'Header',
    data() {
        return{
            routes: [
        {
            path: '/',
            name: 'Утренние чтение'
        },
        // {
        //     path: '/sabbath-school',
        //     name: 'Субботняя школа'
        // },
        {
            path: '/evening',
            name: 'Вечерние чтение'
        },
        // {
        //     path: '/bible',
        //     name: 'Библия'
        // },
        {
            path: '/info',
            name: 'Информация'
        }
    ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .header{
        padding: 30px;
        background-color: #1a73e8;
        // @include flex(center, center);
        display: flex;
        justify-content: center;
        &__item{
            text-align: center;
            display: flex;
            align-items: center;
        }
        &__item:not(:last-child){
            margin-right: 30px;  
            border-right: 1px solid rgb(247, 246, 246);
            padding-right: 30px;
        } 
        &__item-link{
            text-decoration: none;
            color: rgb(247, 246, 246);
            font-weight: 600;
            transition: color .25s ease-in-out;
            font-size: 18px;
            &:hover{
                color: #b0b0b0;
            }
        }
    }
</style>
