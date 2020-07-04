<template>
  <v-app>
    <v-navigation-drawer permanent clipped app>
      <v-list shaped>
        <v-list-item-group v-model="item" color="primary">
          <v-list-item link v-for="(item, i) in items" :key="i" router :to="item.to">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="#0D47A1" dark clipped-left>
      <div class="d-flex align-center">Playable Tools</div>

      <v-spacer></v-spacer>

      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    item: 1,
    items: [
      { text: "Voodoo Playable", icon: "V", to: "/voodooplayable" },
      { text: "Voodoo Endcard", icon: "V", to: "/voodooendcard" },
      { text: "PSD2UI", icon: "mdi-wrench", to: "/psd2ui" }
    ]
  })
};
</script>
