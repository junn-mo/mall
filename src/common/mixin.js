import BackTop from "components/content/backTop/BackTop.vue";

export const backTopMixin = {
    components: {
        BackTop,
    },
    data() {
        return {
            isShowbackTop: true
        }
    },
    methods: {
        backClick() {
            this.$refs.scroll.scrollTo(0, 0, 500);
        },
        listenShowBackTop(position) {
            console.log(this.isShowbackTop);
            this.isShowbackTop = -position.y > 1000;
        }
    }
}