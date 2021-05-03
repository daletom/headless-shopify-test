import Vue from 'vue';
import VueImgix from 'vue-imgix';

Vue.use(VueImgix, {
    domain: "dale-shopify.imgix.net",
    defaultIxParams: {
        auto: 'format,compress'
    },
});