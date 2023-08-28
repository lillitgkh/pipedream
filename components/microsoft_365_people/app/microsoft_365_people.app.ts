import { defineApp } from "@pipedream/types";

export default defineApp({
  type: "app",
  app: "microsoft_365_people",
  propDefinitions: {},
  methods: {
    // this.$auth contains connected account data
    authKeys() {
      console.log(Object.keys(this.$auth));
    },
  },
});