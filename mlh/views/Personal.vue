<template>
    <div class="perPage">
        <sidenav></sidenav>
        <router-view></router-view>
    </div>
</template>

<script>
import sidenav from '@/components/personalPage/SideNav.vue'
import personalinf from '@/components/personalPage/PersonalInf.vue'
import orderlist from '@/components/personalPage/OrderList.vue'
export default {
    components:{
        sidenav,
        personalinf,
        orderlist
    }
}
</script>

<style>
    .perPage {
        min-height: 600px;
        display: flex;
        justify-content: center;
        background: #f5f5f5;
    }
</style>