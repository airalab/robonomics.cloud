<template></template>
  
<static-query>
query {
  metadata {
    siteName
    siteUrl
  }
}
</static-query>


<script>
export default {
  props: {
      pageTitle: { type: String, default: '' },
      pageDescription: { type: String, default: '' },
      pageImage: { type: String, default: '' },
      pageImageWidth: { type: String, default: '1280' },
      pageImageHeight: { type: String, default: '765' },
      pageLang: {type: String, default: 'en'}
  },

  data() {
    return {
      metaTitle: '',
      metaDescription: '',
      metaImage: ''
    }
  },

  computed: {
    image() {
      if(this.pageImage != '') {
        return this.$static.metadata.siteUrl + this.metaImage
      }
      else{
        return this.$static.metadata.siteUrl + '/OG/robonomics_cloud.jpg'
      }
    },
    url(){
      return this.$static.metadata.siteUrl + this.$route.fullPath
      
    },
  },

  watch: {
    $props: {
      handler() {
        this.metaTitle = this.pageTitle;
        this.metaDescription = this.pageDescription;
        this.metaImage = this.pageImage;
      },
      deep: true,
      immediate: true,
    },
  },

  metaInfo() {
    const title = this.metaTitle + ' / ' + this.$static.metadata.siteName;
    const mainTitle = this.pageTitle + ' / ' + this.$static.metadata.siteName;
    const description = this.metaDescription;
    const image = this.image;
    return {
      title: mainTitle,
      htmlAttrs: {
        lang: 'en',
        amp: true
      },
      meta: [
        { key: 'description', name: 'description', content: description },
        // Some Open Graph Tags
        { property: "fb:app_id", content: "2432719273556839" },
        { property: "fb:smart_publish:robots", content: "noauto" },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: this.$static.metadata.siteName },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:image", content: image },
        { property: "og:image:width", content: this.pageImageWidth },
        { property: "og:image:height", content: this.pageImageHeight },
        { property: "og:url", content: this.url },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:image", content: image },
        { name: "twitter:description", content: description },
        { name: "twitter:site", content: '@AIRA_Robonomics' },
        { name: "twitter:creator", content: '@AIRA_Robonomics' }
      ]
    };
  },

  created() {
    this.metaTitle = this.pageTitle;
    this.metaDescription = this.pageDescription;
    this.metaImage = this.pageImage;

    if(this.$route.query.result) {
      this.metaTitle = 'I know that much about smart home!';
      this.metaDescription = 'Wonder how much you know...';
      this.metaImage = '/OG/result-test.png';
    }


  }
};
</script>