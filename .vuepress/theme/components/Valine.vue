<template>
    <div class="u-valine">
      <span class="leancloud-visitors"
            data-flag-title="Your Article Title">


        <span class="stat read-count">
            <img class="icon" src="/read-count.png" />
            <span class="leancloud-visitors-count"></span>
        </span>
      </span>
    </div>
</template>

<script>
export default {
    name: 'Valine',

    mounted() {
        // valine库里面存在window变量；HTML会通过NodeJS进行服务端渲染来产生
        // 通过动态导入来解决“NodeJS环境下对window变量未定义”的问题
        import('valine').then(module => {
            const Valine = module.default

            if (typeof window !== 'undefined') {
                const isDev = window.location.hostname.includes('localhost');
                if (isDev) return; // 不统计本地开发时的阅读量

                document.getElementsByClassName('leancloud-visitors')[0].id = window.location.pathname
                this.window = window
                window.AV = require('leancloud-storage')

                this.valine = new Valine()
                this.initValine()
            }
        })
    },

    methods: {
        initValine () {
            let path = window.location.pathname
            document.getElementsByClassName('leancloud-visitors')[0].id = path

            this.valine.init({
                el: '#vcomments',
                appId: 'CAxZZIBReYryPuKUcHK8wtSz-gzGzoHsz',
                appKey: 'qHHJnTbQ7vCVzH4BiuKsohCe',
                notify: false,
                verify: false,
                path,
                visitor: true,
                avatar: 'mm',
                placeholder: 'write here'
            })
        }
    },

    watch: {
        $route (to, from) {
            if (from.path !== to.path) {
                this.initValine()
            }
        }
    }
}
</script>

<style scoped>
.icon {
    width: 15px;
    margin-right: 2px;
    vertical-align: middle;
    opacity: 0.7;
}

.leancloud-visitors-count {
    font-size: 14px;
    color: #19b2e6;
    font-weight: bold;
}

.stat {
    font-size: 10px;
    opacity: .6;
}

.stat::before {
    margin-left: 6px;
    margin-right: 4px;
    content: "访问阅读量";
}

</style>
