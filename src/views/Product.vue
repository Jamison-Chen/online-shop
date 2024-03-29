<template>
  <div id="product-page" v-if="status === 'success'">
    <CurrentPathBar :parentPageList="fullPathList" />
    <div id="main">
      <div id="picture-section">
        <div
          class="fake-picture product-picture"
          style="width: 150px; height: 300px; background-color: #ccc"
        >
          Here should be some pictures.
        </div>
        <div
          class="fake-picture product-picture"
          style="width: 300px; height: 400px; background-color: #aaa"
        >
          Here should be some pictures.
        </div>
        <div
          class="fake-picture product-picture"
          style="width: 400px; height: 500px; background-color: #888"
        >
          Here should be some pictures.
        </div>
      </div>
      <ProductNonPictureSection :productInfo="productInfo" />
    </div>
    <PageBlock :blockTitle="'Popular This Week'">
      <div
        class="fake-recommendation"
        style="height: 500px; background-color: #555"
      ></div>
    </PageBlock>
    <PageBlock :blockTitle="'New Arrival'">
      <div
        class="fake-recommendation"
        style="height: 500px; background-color: #555"
      ></div>
    </PageBlock>
  </div>
  <div id="product-page" v-else-if="status === 'failed'">
    <h1>Product Not Found</h1>
  </div>
  <div id="product-page" v-else></div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CurrentPathBar from "@/components/CurrentPathBar.vue";
import ProductNonPictureSection from "@/components/ProductNonPictureSection.vue";
import PageBlock from "@/components/PageBlock.vue";
import { ProductInfo, PageInfo } from "@/myInterface";
import store from "@/store";

export default defineComponent({
  name: "Product",
  store: store,
  components: { CurrentPathBar, ProductNonPictureSection, PageBlock },
  data() {
    return {
      status: "waiting" as "waiting" | "success" | "failed",
      productInfo: {
        id: "",
        name: "",
        unit_price: NaN,
        category: "",
        brand: "",
        description: "",
        inventory: {},
        inventory_id: {},
      } as ProductInfo,
      parentPageList: [
        {
          name: "Home",
          path: "",
        },
      ] as PageInfo[],
    };
  },
  computed: {
    fullPathList(): PageInfo[] {
      return this.parentPageList
        .concat([
          {
            name: this.productInfo.category,
            path: `${this.productInfo.category}`,
          },
        ])
        .concat([
          {
            name: this.productInfo.name,
            path: "./#",
          },
        ]);
    },
  },
  methods: {
    fetchData(productId: any): Promise<any> {
      this.status = "waiting";
      let endPoint = `${store.state.backendApiUrl}/product/${productId}`;
      return fetch(endPoint, { method: "get", credentials: "include" })
        .then((res) => {
          this.status = "success";
          return res.json();
        })
        .catch((err) => {
          this.status = "failed";
          return err.message;
        });
    },
  },
  async created() {
    this.productInfo = (await this.fetchData(this.$route.params.productId))[
      "data"
    ];
  },
  async beforeRouteUpdate(to, from) {
    // react to route changes
    if (to.params.productId !== from.params.productId) {
      this.productInfo = (await this.fetchData(this.$route.params.productId))[
        "data"
      ];
    }
  },
});
</script>

<style lang="scss" scoped>
#main {
  display: flex;
  padding: 10px;
  & > div {
    width: 50%;
  }
  #picture-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    & > .product-picture {
      margin: 10px 0;
    }
  }
}
</style>